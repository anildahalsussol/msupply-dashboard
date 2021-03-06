import * as _ from 'lodash';
import * as L from './libs/leaflet';
import RegionMapCtrl from './regionmap_ctrl';

const tileServers = {
  'CartoDB Positron': {
    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
      '&copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd',
  },
  'CartoDB Dark': {
    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
      '&copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd',
  },
};

export default class RegionMap {
  ctrl: RegionMapCtrl;
  mapContainer: any;
  geoJSONs: Array<any>;
  polygons: Array<any>;
  map: any;
  legend: any;
  polygonsLayer: any;
  geoJSONLayer: any;

  constructor(ctrl: any, mapContainer: any) {
    this.ctrl = ctrl;
    this.mapContainer = mapContainer;
    this.polygons = [];
    this.geoJSONs = [];
  }

  createMap = () => {
    const mapCenter = (<any>window).L.latLng(
      parseFloat(this.ctrl.panel.mapCenterLatitude),
      parseFloat(this.ctrl.panel.mapCenterLongitude)
    );
    this.map = L.map(this.mapContainer, {
      worldCopyJump: true,
      preferCanvas: true,
      center: mapCenter,
      zoom: parseInt(this.ctrl.panel.initialZoom, 10) || 1,
    });
    this.setMouseWheelZoom();

    const selectedTileServer = tileServers[this.ctrl.tileServer];
    (<any>window).L.tileLayer(selectedTileServer.url, {
      maxZoom: 18,
      subdomains: selectedTileServer.subdomains,
      reuseTiles: true,
      detectRetina: true,
      attribution: selectedTileServer.attribution,
    }).addTo(this.map);
  };

  createLegend = () => {
    this.legend = (<any>window).L.control({ position: 'bottomleft' });
    this.legend.onAdd = () => {
      this.legend._div = (<any>window).L.DomUtil.create('div', 'info legend');
      this.legend.update();
      return this.legend._div;
    };

    this.legend.update = () => {
      const thresholds = this.ctrl.data.thresholds;
      let legendHtml = '';
      legendHtml +=
        '<div class="legend-item"><i style="background:' +
        this.ctrl.panel.colors[0] +
        '"></i> ' +
        '&lt; ' +
        thresholds[0] +
        '</div>';
      for (let index = 0; index < thresholds.length; index += 1) {
        legendHtml +=
          '<div class="legend-item"><i style="background:' +
          this.ctrl.panel.colors[index + 1] +
          '"></i> ' +
          thresholds[index] +
          (thresholds[index + 1] ? '&ndash;' + thresholds[index + 1] + '</div>' : '+');
      }
      this.legend._div.innerHTML = legendHtml;
    };
    this.legend.addTo(this.map);
  };

  needToRedrawPolygons = (data: any) => {
    if (this.polygons.length === 0 && data.length > 0) {
      return true;
    }

    if (this.polygons.length !== data.length) {
      return true;
    }

    const locations = _.map(_.map(this.polygons, 'options'), 'location').sort();
    const dataPoints = _.map(data, 'key').sort();
    return !_.isEqual(locations, dataPoints);
  };

  needToRedrawGeoJSONs = (data: any) => {
    if (this.geoJSONs.length === 0 && data.length > 0) {
      return true;
    }

    if (this.geoJSONs.length !== data.length) {
      return true;
    }

    const locations = _.map(_.map(this.geoJSONs, 'options'), 'location').sort();
    const dataPoints = _.map(data, 'key').sort();

    return !_.isEqual(locations, dataPoints);
  };

  filterEmptyAndZeroValues = (data: any) => {
    return _.filter(data, o => {
      return (
        !(this.ctrl.panel.hideEmpty && _.isNil(o.value)) &&
        !(this.ctrl.panel.hideZero && o.value === 0)
      );
    });
  };

  clearPolygons = () => {
    if (this.polygonsLayer) {
      this.polygonsLayer.clearLayers();
      this.removePolygons();
      this.polygons = [];
    }
  };

  clearGeoJSONs = () => {
    if (this.geoJSONLayer) {
      //      console.warn('clearing geojson layers');
      this.geoJSONLayer.clearLayers();
      //    console.warn('removing geojson layers');
      this.removeGeoJSONs();
      //  console.warn('done');
      this.geoJSONs = [];
    }
  };

  drawPolygons = () => {
    const data = this.filterEmptyAndZeroValues(this.ctrl.data);
    if (this.needToRedrawPolygons(data)) {
      this.clearPolygons();
      this.createPolygons(data);
    } else {
      this.updatePolygons(data);
    }
  };

  drawGeoJSONs = () => {
    const data = this.filterEmptyAndZeroValues(this.ctrl.data);

    if (this.needToRedrawGeoJSONs(data)) {
      this.clearGeoJSONs();
      this.createGeoJSONs(data);
    } else {
      this.updateGeoJSONs(data);
    }
  };

  createGeoJSONs = (data: any) => {
    const geoJSONs: any[] = [];
    data.forEach(dataPoint => {
      if (!dataPoint.locationName || !dataPoint.geojson) return;

      geoJSONs.push(this.createGeoJSON(dataPoint));
    });

    this.geoJSONLayer = this.addGeoJSONs(geoJSONs);
    this.geoJSONs = geoJSONs;
  };

  createPolygons = (data: any) => {
    const polygons: any[] = [];
    data.forEach(dataPoint => {
      if (!dataPoint.locationName) {
        return;
      }
      const coordinates = dataPoint.geojson.features.map(feature => feature.geometry.coordinates);
      polygons.push(this.createPolygon(dataPoint, coordinates));
    });

    this.polygonsLayer = this.addPolygons(polygons);
    this.polygons = polygons;
  };

  updatePolygons = (data: any) => {
    data.forEach(dataPoint => {
      if (!dataPoint.locationName) {
        return;
      }

      const polygon = _.find(this.polygons, poly => {
        return poly.options.name === dataPoint.key;
      });

      if (polygon) {
        // TODO: coordinates?
        polygon.setStyle({
          color: this.getColor(dataPoint.value),
          fillColor: this.getColor(dataPoint.value),
        });
        polygon.unbindPopup();
        this.createPopup(polygon, dataPoint.locationName, dataPoint.valueRounded);
      }
    });
  };
  updateGeoJSONs = (data: any) => {
    data.forEach(dataPoint => {
      if (!dataPoint.locationName) {
        return;
      }

      const layer = _.find(this.geoJSONs, geojson => geojson.options.name === dataPoint.key);

      if (layer) {
        layer.setStyle({
          color: this.getColor(dataPoint.value),
          fillColor: this.getColor(dataPoint.value),
        });
        layer.unbindPopup();
        this.createPopup(layer, dataPoint.locationName, dataPoint.valueRounded);
      }
    });
  };

  createGeoJSON = (dataPoint: any) => {
    const geoJSON = (<any>window).L.geoJSON(dataPoint.geojson, {
      color: this.getColor(dataPoint.value),
      fillColor: this.getColor(dataPoint.value),
      fillOpacity: 0.5,
      location: dataPoint.key,
    });

    this.createPopup(geoJSON, dataPoint.locationName, dataPoint.valueRounded);
    return geoJSON;
  };

  createPolygon = (dataPoint: any, coordinates: any) => {
    const polygon = (<any>window).L.polygon(coordinates, {
      color: this.getColor(dataPoint.value),
      fillColor: this.getColor(dataPoint.value),
      fillOpacity: 0.5,
      location: dataPoint.key,
    });

    this.createPopup(polygon, dataPoint.locationName, dataPoint.valueRounded);
    return polygon;
  };

  createPopup = (region: any, locationName: string, value: number) => {
    const unit = value && value === 1 ? this.ctrl.panel.unitSingular : this.ctrl.panel.unitPlural;
    const label = (locationName + ': ' + value + ' ' + (unit || '')).trim();
    region.bindPopup(label, {
      offset: (<any>window).L.point(0, -2),
      className: 'worldmap-popup',
      closeButton: this.ctrl.panel.stickyLabels,
    });

    region.on('mouseover', function onMouseOver(evt) {
      const layer = evt.target;
      layer.bringToFront();
      this.openPopup();
    });

    if (!this.ctrl.panel.stickyLabels) {
      region.on('mouseout', function onMouseOut() {
        region.closePopup();
      });
    }
  };

  getColor = (value: number) => {
    for (let index = this.ctrl.data.thresholds.length; index > 0; index -= 1) {
      if (value >= this.ctrl.data.thresholds[index - 1]) {
        return this.ctrl.panel.colors[index];
      }
    }
    return _.first(this.ctrl.panel.colors);
  };

  resize = () => {
    this.map.invalidateSize();
  };

  panToMapCenter = () => {
    this.map.panTo([
      parseFloat(this.ctrl.panel.mapCenterLatitude),
      parseFloat(this.ctrl.panel.mapCenterLongitude),
    ]);
    this.ctrl.mapCenterMoved = false;
  };

  removeLegend = () => {
    this.legend.remove(this.map);
    this.legend = null;
  };

  setMouseWheelZoom = () => {
    if (!this.ctrl.panel.mouseWheelZoom) {
      this.map.scrollWheelZoom.disable();
    } else {
      this.map.scrollWheelZoom.enable();
    }
  };

  addPolygons = (polygons: any) => {
    return (<any>window).L.layerGroup(polygons).addTo(this.map);
  };

  removePolygons = () => {
    this.map.removeLayer(this.polygonsLayer);
  };

  addGeoJSONs = (geoJSONs: Array<any>) => (<any>window).L.layerGroup(geoJSONs).addTo(this.map);
  removeGeoJSONs = () => this.map.removeLayer(this.geoJSONLayer);

  setZoom = (zoomFactor: any) => this.map.setZoom(parseInt(zoomFactor, 10));

  remove = () => {
    this.polygons = [];
    if (this.polygonsLayer) {
      this.removePolygons();
    }
    if (this.legend) {
      this.removeLegend();
    }
    this.map.remove();
  };
}
