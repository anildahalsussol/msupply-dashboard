(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"8uRs":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"d",function(){return s}),n.d(t,"g",function(){return o}),n.d(t,"c",function(){return m}),n.d(t,"f",function(){return l}),n.d(t,"e",function(){return c}),n.d(t,"i",function(){return u}),n.d(t,"h",function(){return d});var a=n("GQ3c"),r=function(e){return e.searchQuery},i=function(e){return e.searchMemberQuery},s=function(e){return e.groups},o=function(e){return e.teams.length},m=function(e,t){return e.team.id===parseInt(t,10)?e.team:null},l=function(e){var t=RegExp(e.searchQuery,"i");return e.teams.filter(function(e){return t.test(e.name)})},c=function(e){var t=RegExp(e.searchMemberQuery,"i");return e.members.filter(function(e){return t.test(e.login)||t.test(e.email)})},u=function(e){var t=e.members,n=e.signedInUser,r=e.editorsCanAdmin,i=t.find(function(e){return e.userId===n.id}),s=i?i.permission:a.TeamPermissionLevel.Member;return d({permission:s,signedInUser:n,editorsCanAdmin:r})},d=function(e){var t=e.permission,n=e.signedInUser,r=e.editorsCanAdmin,i=n.isGrafanaAdmin||n.orgRole===a.OrgRole.Admin,s=t===a.TeamPermissionLevel.Admin;return i||s||!r}},Rczg:function(e,t,n){"use strict";var a=n("mrSG"),r=n("q1tI"),i=n.n(r),s=n("/MKj"),o=n("kDLi"),m=n("mHLn"),l=n("gxTa"),c=n("X+V3"),u=n("8uRs"),d=function(e){function t(t){var n=e.call(this,t)||this;return n.onChangeName=function(e){n.setState({name:e.target.value})},n.onChangeEmail=function(e){n.setState({email:e.target.value})},n.onUpdate=function(e){var t=n.state,a=t.name,r=t.email;e.preventDefault(),n.props.updateTeam(a,r)},n.state={name:t.team.name,email:t.team.email},n}return a.c(t,e),t.prototype.render=function(){var e=this.props.team,t=this.state,n=t.name,a=t.email;return i.a.createElement("div",null,i.a.createElement("h3",{className:"page-sub-heading"},"Team Settings"),i.a.createElement("form",{name:"teamDetailsForm",className:"gf-form-group",onSubmit:this.onUpdate},i.a.createElement("div",{className:"gf-form max-width-30"},i.a.createElement(o.FormLabel,null,"Name"),i.a.createElement(o.Input,{type:"text",required:!0,value:n,className:"gf-form-input max-width-22",onChange:this.onChangeName})),i.a.createElement("div",{className:"gf-form max-width-30"},i.a.createElement(o.FormLabel,{tooltip:"This is optional and is primarily used to set the team profile avatar (via gravatar service)"},"Email"),i.a.createElement(o.Input,{type:"email",className:"gf-form-input max-width-22",value:a,placeholder:"team@email.com",onChange:this.onChangeEmail})),i.a.createElement("div",{className:"gf-form-button-row"},i.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Update"))),i.a.createElement(m.a,{resourceUri:"teams/"+e.id}))},t}(i.a.Component);var p={updateTeam:l.m};t.a=Object(s.b)(function(e){var t=Object(c.a)(e.location);return{team:Object(u.c)(e.team,t)}},p)(d)},WB4m:function(e,t,n){"use strict";var a=n("mrSG"),r=n("q1tI"),i=n.n(r),s=n("/MKj"),o=n("BVom"),m=n("kDLi"),l=n("gxTa"),c=n("8uRs"),u=n("QQVG"),d="Sync LDAP or OAuth groups with your Grafana teams.",p=function(e){function t(t){var n=e.call(this,t)||this;return n.onToggleAdding=function(){n.setState({isAdding:!n.state.isAdding})},n.onNewGroupIdChanged=function(e){n.setState({newGroupId:e.target.value})},n.onAddGroup=function(e){e.preventDefault(),n.props.addTeamGroup(n.state.newGroupId),n.setState({isAdding:!1,newGroupId:""})},n.onRemoveGroup=function(e){n.props.removeTeamGroup(e.groupId)},n.state={isAdding:!1,newGroupId:""},n}return a.c(t,e),t.prototype.componentDidMount=function(){this.fetchTeamGroups()},t.prototype.fetchTeamGroups=function(){return a.b(this,void 0,void 0,function(){return a.d(this,function(e){switch(e.label){case 0:return[4,this.props.loadTeamGroups()];case 1:return e.sent(),[2]}})})},t.prototype.isNewGroupValid=function(){return this.state.newGroupId.length>1},t.prototype.renderGroup=function(e){var t=this;return i.a.createElement("tr",{key:e.groupId},i.a.createElement("td",null,e.groupId),i.a.createElement("td",{style:{width:"1%"}},i.a.createElement("a",{className:"btn btn-danger btn-small",onClick:function(){return t.onRemoveGroup(e)}},i.a.createElement("i",{className:"fa fa-remove"}))))},t.prototype.render=function(){var e=this,t=this.state,n=t.isAdding,a=t.newGroupId,r=this.props.groups;return i.a.createElement("div",null,i.a.createElement("div",{className:"page-action-bar"},i.a.createElement("h3",{className:"page-sub-heading"},"External group sync"),i.a.createElement(m.Tooltip,{placement:"auto",content:d},i.a.createElement("div",{className:"page-sub-heading-icon"},i.a.createElement("i",{className:"gicon gicon-question gicon--has-hover"}))),i.a.createElement("div",{className:"page-action-bar__spacer"}),r.length>0&&i.a.createElement("button",{className:"btn btn-primary pull-right",onClick:this.onToggleAdding},i.a.createElement("i",{className:"fa fa-plus"})," Add group")),i.a.createElement(o.a,{in:n},i.a.createElement("div",{className:"cta-form"},i.a.createElement("button",{className:"cta-form__close btn btn-transparent",onClick:this.onToggleAdding},i.a.createElement("i",{className:"fa fa-close"})),i.a.createElement("h5",null,"Add External Group"),i.a.createElement("form",{className:"gf-form-inline",onSubmit:this.onAddGroup},i.a.createElement("div",{className:"gf-form"},i.a.createElement(m.Input,{type:"text",className:"gf-form-input width-30",value:a,onChange:this.onNewGroupIdChanged,placeholder:"cn=ops,ou=groups,dc=grafana,dc=org"})),i.a.createElement("div",{className:"gf-form"},i.a.createElement("button",{className:"btn btn-primary gf-form-btn",type:"submit",disabled:!this.isNewGroupValid()},"Add group"))))),0===r.length&&!n&&i.a.createElement(u.a,{onClick:this.onToggleAdding,buttonIcon:"gicon gicon-team",title:"There are no external groups to sync with",buttonTitle:"Add Group",proTip:d,proTipLinkTitle:"Learn more",proTipLink:"http://docs.grafana.org/auth/enhanced_ldap/",proTipTarget:"_blank"}),r.length>0&&i.a.createElement("div",{className:"admin-list-table"},i.a.createElement("table",{className:"filter-table filter-table--hover form-inline"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"External Group ID"),i.a.createElement("th",{style:{width:"1%"}}))),i.a.createElement("tbody",null,r.map(function(t){return e.renderGroup(t)})))))},t}(r.PureComponent);var f={loadTeamGroups:l.f,addTeamGroup:l.b,removeTeamGroup:l.i};t.a=Object(s.b)(function(e){return{groups:Object(c.d)(e.team)}},f)(p)},"X+V3":function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r});var a=function(e){return e.routeParams.id},r=function(e){return e.routeParams.page}},cwy8:function(e,t,n){"use strict";var a=n("mrSG"),r=n("q1tI"),i=n.n(r),s=n("/MKj"),o=n("BVom"),m=n("+dgx"),l=n("rCnR"),c=n("gxTa"),u=n("8uRs"),d=n("EKT6"),p=function(e){var t=e.featureToggle,n=e.children;return!0===t?i.a.createElement(i.a.Fragment,null,n):null},f=n("ZFWI"),g=n("umNM"),h=n("kDLi"),b=n("GQ3c"),E=function(e){function t(t){var n=e.call(this,t)||this;return n.onPermissionChange=function(e,t){var r=e.value,i=a.a({},t,{permission:r});n.props.updateTeamMember(i)},n.renderLabels=n.renderLabels.bind(n),n.renderPermissions=n.renderPermissions.bind(n),n}return a.c(t,e),t.prototype.onRemoveMember=function(e){this.props.removeTeamMember(e.userId)},t.prototype.renderPermissions=function(e){var t=this,n=this.props,a=n.editorsCanAdmin,r=n.signedInUserIsTeamAdmin,s=b.teamsPermissionLevels.find(function(t){return t.value===e.permission});return i.a.createElement(p,{featureToggle:a},i.a.createElement("td",{className:"width-5 team-permissions"},i.a.createElement("div",{className:"gf-form"},r&&i.a.createElement(h.Select,{isSearchable:!1,options:b.teamsPermissionLevels,onChange:function(n){return t.onPermissionChange(n,e)},className:"gf-form-select-box__control--menu-right",value:s}),!r&&i.a.createElement("span",null,s.label))))},t.prototype.renderLabels=function(e){return e?i.a.createElement("td",null,e.map(function(e){return i.a.createElement(l.a,{key:e,label:e,removeIcon:!1,count:0,onClick:function(){}})})):i.a.createElement("td",null)},t.prototype.render=function(){var e=this,t=this.props,n=t.member,a=t.syncEnabled,r=t.signedInUserIsTeamAdmin;return i.a.createElement("tr",{key:n.userId},i.a.createElement("td",{className:"width-4 text-center"},i.a.createElement("img",{className:"filter-table__avatar",src:n.avatarUrl})),i.a.createElement("td",null,n.login),i.a.createElement("td",null,n.email),this.renderPermissions(n),a&&this.renderLabels(n.labels),i.a.createElement("td",{className:"text-right"},i.a.createElement(h.DeleteButton,{onConfirm:function(){return e.onRemoveMember(n)},disabled:!r})))},t}(r.PureComponent);var v={removeTeamMember:c.j,updateTeamMember:c.n},T=Object(s.b)(function(e){return{}},v)(E),y=function(e){function t(t){var n=e.call(this,t)||this;return n.onSearchQueryChange=function(e){n.props.setSearchMemberQuery(e)},n.onToggleAdding=function(){n.setState({isAdding:!n.state.isAdding})},n.onUserSelected=function(e){n.setState({newTeamMember:e})},n.onAddUserToTeam=function(){return a.b(n,void 0,void 0,function(){return a.d(this,function(e){return this.props.addTeamMember(this.state.newTeamMember.id),this.setState({newTeamMember:null}),[2]})})},n.state={isAdding:!1,newTeamMember:null},n}return a.c(t,e),t.prototype.renderLabels=function(e){return e?i.a.createElement("td",null,e.map(function(e){return i.a.createElement(l.a,{key:e,label:e,removeIcon:!1,count:0,onClick:function(){}})})):i.a.createElement("td",null)},t.prototype.render=function(){var e=this.state.isAdding,t=this.props,n=t.searchMemberQuery,a=t.members,r=t.syncEnabled,s=t.editorsCanAdmin,l=t.signedInUser,c=Object(u.i)({members:a,editorsCanAdmin:s,signedInUser:l});return i.a.createElement("div",null,i.a.createElement("div",{className:"page-action-bar"},i.a.createElement("div",{className:"gf-form gf-form--grow"},i.a.createElement(d.a,{labelClassName:"gf-form--has-input-icon gf-form--grow",inputClassName:"gf-form-input",placeholder:"Search members",value:n,onChange:this.onSearchQueryChange})),i.a.createElement("div",{className:"page-action-bar__spacer"}),i.a.createElement("button",{className:"btn btn-primary pull-right",onClick:this.onToggleAdding,disabled:e||!c},"Add member")),i.a.createElement(o.a,{in:e},i.a.createElement("div",{className:"cta-form"},i.a.createElement("button",{className:"cta-form__close btn btn-transparent",onClick:this.onToggleAdding},i.a.createElement("i",{className:"fa fa-close"})),i.a.createElement("h5",null,"Add team member"),i.a.createElement("div",{className:"gf-form-inline"},i.a.createElement(m.a,{onSelected:this.onUserSelected,className:"min-width-30"}),this.state.newTeamMember&&i.a.createElement("button",{className:"btn btn-primary gf-form-btn",type:"submit",onClick:this.onAddUserToTeam},"Add to team")))),i.a.createElement("div",{className:"admin-list-table"},i.a.createElement("table",{className:"filter-table filter-table--hover form-inline"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null),i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"Email"),i.a.createElement(p,{featureToggle:s},i.a.createElement("th",null,"Permission")),r&&i.a.createElement("th",null),i.a.createElement("th",{style:{width:"1%"}}))),i.a.createElement("tbody",null,a&&a.map(function(e){return i.a.createElement(T,{key:e.userId,member:e,syncEnabled:r,editorsCanAdmin:s,signedInUserIsTeamAdmin:c})})))))},t}(r.PureComponent);var N={addTeamMember:c.c,setSearchMemberQuery:c.k};t.a=Object(s.b)(function(e){return{searchMemberQuery:Object(u.a)(e.team),editorsCanAdmin:f.a.editorsCanAdmin,signedInUser:g.a.user}},N)(y)},"p+xb":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"TeamPages",function(){return N});var a,r=n("mrSG"),i=n("q1tI"),s=n.n(i),o=n("/MKj"),m=n("LvDl"),l=n.n(m),c=n("0cfB"),u=n("ZFWI"),d=n("ZGyg"),p=n("cwy8"),f=n("Rczg"),g=n("WB4m"),h=n("gxTa"),b=n("8uRs"),E=n("zsYB"),v=n("lzJ5"),T=n("X+V3"),y=n("umNM");!function(e){e.Members="members",e.Settings="settings",e.GroupSync="groupsync"}(a||(a={}));var N=function(e){function t(t){var n=e.call(this,t)||this;return n.textsAreEqual=function(e,t){return!e&&!t||!(!e||!t)&&e.toLocaleLowerCase()===t.toLocaleLowerCase()},n.hideTabsFromNonTeamAdmin=function(e,t){return!t&&e.main&&e.main.children&&e.main.children.filter(function(e){return!n.textsAreEqual(e.text,a.Members)}).map(function(e){e.hideFromTabs=!0}),e},n.state={isLoading:!1,isSyncEnabled:u.b.buildInfo.isEnterprise},n}return r.c(t,e),t.prototype.componentDidMount=function(){return r.b(this,void 0,void 0,function(){return r.d(this,function(e){switch(e.label){case 0:return[4,this.fetchTeam()];case 1:return e.sent(),[2]}})})},t.prototype.fetchTeam=function(){return r.b(this,void 0,void 0,function(){var e,t,n,a;return r.d(this,function(r){switch(r.label){case 0:return e=this.props,t=e.loadTeam,n=e.teamId,this.setState({isLoading:!0}),[4,t(n)];case 1:return a=r.sent(),[4,this.props.loadTeamMembers()];case 2:return r.sent(),this.setState({isLoading:!1}),[2,a]}})})},t.prototype.getCurrentPage=function(){var e=["members","settings","groupsync"],t=this.props.pageName;return l.a.includes(e,t)?t:e[0]},t.prototype.renderPage=function(e){var t=this.state.isSyncEnabled,n=this.props.members;switch(this.getCurrentPage()){case a.Members:return s.a.createElement(p.a,{syncEnabled:t,members:n});case a.Settings:return e&&s.a.createElement(f.a,null);case a.GroupSync:return e&&t&&s.a.createElement(g.a,null)}return null},t.prototype.render=function(){var e=this.props,t=e.team,n=e.navModel,a=e.members,r=e.editorsCanAdmin,i=e.signedInUser,o=Object(b.i)({members:a,editorsCanAdmin:r,signedInUser:i});return s.a.createElement(d.a,{navModel:this.hideTabsFromNonTeamAdmin(n,o)},s.a.createElement(d.a.Contents,{isLoading:this.state.isLoading},t&&0!==Object.keys(t).length&&this.renderPage(o)))},t}(i.PureComponent);var A={loadTeam:h.e,loadTeamMembers:h.g};t.default=Object(c.hot)(e)(Object(o.b)(function(e){var t=Object(T.a)(e.location),n=Object(T.b)(e.location)||"members",a=Object(E.b)(n);return{navModel:Object(v.a)(e.navIndex,"team-"+n+"-"+t,a),teamId:t,pageName:n,team:Object(b.c)(e.team,t),members:Object(b.e)(e.team),editorsCanAdmin:u.b.editorsCanAdmin,signedInUser:y.a.user}},A)(N))}.call(this,n("3UD+")(e))}}]);
//# sourceMappingURL=TeamPages.0c931d742a0a4ca8f855.js.map