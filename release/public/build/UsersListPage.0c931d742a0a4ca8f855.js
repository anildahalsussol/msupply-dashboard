(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"1Xqh":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);t.a=function(e){var t=e.users,n=e.onRoleChange,r=e.onRemoveUser;return a.a.createElement("table",{className:"filter-table form-inline"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null),a.a.createElement("th",null,"Login"),a.a.createElement("th",null,"Email"),a.a.createElement("th",null,"Seen"),a.a.createElement("th",null,"Role"),a.a.createElement("th",{style:{width:"34px"}}))),a.a.createElement("tbody",null,t.map(function(e,t){return a.a.createElement("tr",{key:e.userId+"-"+t},a.a.createElement("td",{className:"width-4 text-center"},a.a.createElement("img",{className:"filter-table__avatar",src:e.avatarUrl})),a.a.createElement("td",null,e.login),a.a.createElement("td",null,a.a.createElement("span",{className:"ellipsis"},e.email)),a.a.createElement("td",null,e.lastSeenAtAge),a.a.createElement("td",null,a.a.createElement("div",{className:"gf-form-select-wrapper width-12"},a.a.createElement("select",{value:e.role,className:"gf-form-input",onChange:function(t){return n(t.target.value,e)}},["Viewer","Editor","Admin"].map(function(e,t){return a.a.createElement("option",{value:e,key:e+"-"+t},e)})))),a.a.createElement("td",null,a.a.createElement("div",{onClick:function(){return r(e)},className:"btn btn-danger btn-small"},a.a.createElement("i",{className:"fa fa-remove"}))))})))}},"4sTo":function(e,t,n){"use strict";var r=n("mrSG"),a=n("q1tI"),s=n.n(a),l=n("/MKj"),i=n("nKOl"),o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.copyUrlRef=Object(a.createRef)(),t.copyToClipboard=function(){var e=t.copyUrlRef.current;e&&(e.select(),document.execCommand("copy"))},t}return r.c(t,e),t.prototype.render=function(){var e=this.props,t=e.invitee,n=e.revokeInvite;return s.a.createElement("tr",null,s.a.createElement("td",null,t.email),s.a.createElement("td",null,t.name),s.a.createElement("td",{className:"text-right"},s.a.createElement("button",{className:"btn btn-inverse btn-small",onClick:this.copyToClipboard},s.a.createElement("textarea",{readOnly:!0,value:t.url,style:{position:"absolute",bottom:0,right:0,opacity:0,zIndex:-10},ref:this.copyUrlRef}),"Copy Invite")," "),s.a.createElement("td",null,s.a.createElement("button",{className:"btn btn-danger btn-small",onClick:function(){return n(t.code)}},s.a.createElement("i",{className:"fa fa-remove"}))))},t}(a.PureComponent),c={revokeInvite:i.e},u=Object(l.b)(function(){return{}},c)(o),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.c(t,e),t.prototype.render=function(){var e=this.props.invitees;return s.a.createElement("table",{className:"filter-table form-inline"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Email"),s.a.createElement("th",null,"Name"),s.a.createElement("th",null),s.a.createElement("th",{style:{width:"34px"}}))),s.a.createElement("tbody",null,e.map(function(e,t){return s.a.createElement(u,{key:e.id+"-"+t,invitee:e})})))},t}(a.PureComponent);t.a=m},DWvN:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"UsersListPage",function(){return b});var r=n("mrSG"),a=n("q1tI"),s=n.n(a),l=n("0cfB"),i=n("/MKj"),o=n("Obii"),c=n("ZGyg"),u=n("vKCI"),m=n("1Xqh"),f=n("4sTo"),h=n("Xmxp"),p=n("nKOl"),v=n("lzJ5"),d=n("KvmV"),b=function(e){function t(t){var n=e.call(this,t)||this;return n.onRoleChange=function(e,t){var a=r.a({},t,{role:e});n.props.updateUser(a)},n.onRemoveUser=function(e){h.b.emit("confirm-modal",{title:"Delete",text:"Are you sure you want to delete user "+e.login+"?",yesText:"Delete",icon:"fa-warning",onConfirm:function(){n.props.removeUser(e.userId)}})},n.onShowInvites=function(){n.setState(function(e){return{showInvites:!e.showInvites}})},n.props.externalUserMngInfo&&(n.externalUserMngInfoHtml=Object(o.renderMarkdown)(n.props.externalUserMngInfo)),n.state={showInvites:!1},n}return r.c(t,e),t.prototype.componentDidMount=function(){this.fetchUsers(),this.fetchInvitees()},t.prototype.fetchUsers=function(){return r.b(this,void 0,void 0,function(){return r.d(this,function(e){switch(e.label){case 0:return[4,this.props.loadUsers()];case 1:return[2,e.sent()]}})})},t.prototype.fetchInvitees=function(){return r.b(this,void 0,void 0,function(){return r.d(this,function(e){switch(e.label){case 0:return[4,this.props.loadInvitees()];case 1:return[2,e.sent()]}})})},t.prototype.renderTable=function(){var e=this,t=this.props,n=t.invitees,r=t.users;return this.state.showInvites?s.a.createElement(f.a,{invitees:n}):s.a.createElement(m.a,{users:r,onRoleChange:function(t,n){return e.onRoleChange(t,n)},onRemoveUser:function(t){return e.onRemoveUser(t)}})},t.prototype.render=function(){var e=this.props,t=e.navModel,n=e.hasFetched,r=this.externalUserMngInfoHtml;return s.a.createElement(c.a,{navModel:t},s.a.createElement(c.a.Contents,{isLoading:!n},s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{onShowInvites:this.onShowInvites,showInvites:this.state.showInvites}),r&&s.a.createElement("div",{className:"grafana-info-box",dangerouslySetInnerHTML:{__html:r}}),n&&this.renderTable())))},t}(a.PureComponent);var E={loadUsers:p.c,loadInvitees:p.b,setUsersSearchQuery:p.f,updateUser:p.g,removeUser:p.d};t.default=Object(l.hot)(e)(Object(i.b)(function(e){return{navModel:Object(v.a)(e.navIndex,"users"),users:Object(d.c)(e.users),searchQuery:Object(d.d)(e.users),invitees:Object(d.a)(e.users),externalUserMngInfo:e.users.externalUserMngInfo,hasFetched:e.users.hasFetched}},E)(b))}.call(this,n("3UD+")(e))},KvmV:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s}),n.d(t,"d",function(){return l});var r=function(e){var t=new RegExp(e.searchQuery,"i");return e.users.filter(function(e){return t.test(e.login)||t.test(e.email)})},a=function(e){var t=new RegExp(e.searchQuery,"i");return e.invitees.filter(function(e){return t.test(e.name)||t.test(e.email)})},s=function(e){return e.invitees.length},l=function(e){return e.searchQuery}},vKCI:function(e,t,n){"use strict";var r=n("mrSG"),a=n("q1tI"),s=n.n(a),l=n("/MKj"),i=n("TSYQ"),o=n.n(i),c=n("nKOl"),u=n("KvmV"),m=n("EKT6"),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.c(t,e),t.prototype.render=function(){var e=this.props,t=e.canInvite,n=e.externalUserMngLinkName,r=e.externalUserMngLinkUrl,a=e.searchQuery,l=e.pendingInvitesCount,i=e.setUsersSearchQuery,c=e.onShowInvites,u=e.showInvites,f=o()({btn:!0,"toggle-btn":!0,active:u}),h=o()({btn:!0,"toggle-btn":!0,active:!u});return s.a.createElement("div",{className:"page-action-bar"},s.a.createElement("div",{className:"gf-form gf-form--grow"},s.a.createElement(m.a,{labelClassName:"gf-form--has-input-icon",inputClassName:"gf-form-input width-20",value:a,onChange:i,placeholder:"Filter by name or type"}),l>0&&s.a.createElement("div",{style:{marginLeft:"1rem"}},s.a.createElement("button",{className:h,key:"users",onClick:c},"Users"),s.a.createElement("button",{className:f,onClick:c,key:"pending-invites"},"Pending Invites (",l,")")),s.a.createElement("div",{className:"page-action-bar__spacer"}),t&&s.a.createElement("a",{className:"btn btn-primary",href:"org/users/invite"},s.a.createElement("span",null,"Invite")),r&&s.a.createElement("a",{className:"btn btn-primary",href:r,target:"_blank",rel:"noopener"},s.a.createElement("i",{className:"fa fa-external-link-square"})," ",n)))},t}(a.PureComponent);var h={setUsersSearchQuery:c.f};t.a=Object(l.b)(function(e){return{searchQuery:Object(u.d)(e.users),pendingInvitesCount:Object(u.b)(e.users),externalUserMngLinkName:e.users.externalUserMngLinkName,externalUserMngLinkUrl:e.users.externalUserMngLinkUrl,canInvite:e.users.canInvite}},h)(f)}}]);
//# sourceMappingURL=UsersListPage.0c931d742a0a4ca8f855.js.map