(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[60579],{260579:(e,t,o)=>{o.d(t,{Zk:()=>Y,Z7:()=>G,wt:()=>q,ZP:()=>te});var i=o(667294),s=o(702664);const n=e=>{const t=e.split("/");return 4===t.length?"pin"===t[1]&&""===t[3]:3===t.length&&("pin"===t[1]&&""!==t[2])};var a=o(954571),l=o(224455),r=o(898781),c=o(883119),h=o(785893);const u=({color:e="subtle",showLabel:t=!1,viewType:o})=>{const i=(0,r.ZP)();return(0,h.jsx)(c.xu,{rounding:3,flex:"grow",children:(0,h.jsxs)(c.xu,{display:"flex",justifyContent:"center",position:"relative",direction:"column",children:[(0,h.jsx)(c.xu,{display:"flex",justifyContent:"center",padding:1,children:(0,h.jsx)(l.Z,{elementType:249,iconButtonColor:"gray",iconButtonSize:"xl",viewType:o})}),t&&(0,h.jsx)(c.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{WebkitUserSelect:"none"}},children:(0,h.jsx)(c.xv,{align:"center",size:"100",lineClamp:1,color:e,children:i._('Create', 'nav.navFooterAdd.createPinButton', 'Create pin button on the Nav bar')})})]})})};var d=o(116303);const m=({height:e,width:t})=>(0,h.jsx)(c.xu,{alignItems:"center",color:"primary",dangerouslySetInlineStyle:{__style:{padding:"0 3px 0 2px"}},display:"flex",height:e,justifyContent:"center",width:t,position:"absolute",rounding:"pill",children:(0,h.jsx)(c.xv,{align:"center",color:"inverse",size:"100",weight:"bold",children:(0,h.jsx)(c.xu,{dangerouslySetInlineStyle:{__style:{padding:"0 0 1px 1px"}},children:" "})})}),p={zIndex:1,position:"relative"},_=(0,i.forwardRef)((({accessibilityLabel:e,avatarSrc:t,badge:o,badgeMargins:s,color:n,flyoutText:a,icon:l,onTouch:u,showFlyout:_,showFlyoutButton:v,showLabel:x,svgPath:g,title:f,to:b},w)=>{const y=(0,r.ZP)(),[S,H]=(0,i.useState)(!1),T=(0,i.useRef)(),A="nav-bar-"+String(l);return(0,h.jsx)(c.xu,{dangerouslySetInlineStyle:{__style:S?p:{}},flex:"grow",children:(0,h.jsx)(c.iP,{onBlur:()=>H(!1),onFocus:()=>H(!0),onTap:({event:e})=>u(e),tapStyle:"compress",rounding:x?4:6,role:"link",href:b,children:(0,h.jsxs)(c.xu,{display:"flex",justifyContent:"center",position:"relative",color:"transparent",direction:"column",rounding:3,"data-test-id":A,children:[(0,h.jsxs)(c.xu,{position:"relative",display:"flex",justifyContent:"center",ref:w,children:[(0,h.jsx)(c.xu,{padding:2,ref:T,children:t?(0,h.jsx)(c.xu,{rounding:"circle",dangerouslySetInlineStyle:{__style:{boxShadow:"default"===n?"0 0 0 2px black":"0 0 0 2px transparent"}},children:(0,h.jsx)(d.Z,{name:e,src:t,size:"xs"})}):(0,h.jsx)(c.JO,{accessibilityLabel:e,icon:l,color:n,size:24,inline:!0,dangerouslySetSvgPath:g?{__path:g}:void 0})}),o&&(0,h.jsx)(c.xu,{marginStart:null==s?void 0:s.marginLeft,marginEnd:null==s?void 0:s.marginRight,marginTop:null==s?void 0:s.marginTop,marginBottom:null==s?void 0:s.marginBottom,position:"absolute",children:o.text?(0,h.jsx)(c.Ct,{position:"middle",type:"error",text:o.text.toString()||""}):(0,h.jsx)(m,{height:o.height,width:o.width})}),_&&(0,h.jsx)(c.J2,{anchor:T.current,color:"blue",onDismiss:()=>{},showCaret:!0,size:"flexible",children:(0,h.jsxs)(c.xu,{alignItems:"center",direction:"column",display:"flex",justifyContent:"center",minHeight:70,paddingX:v?4:0,paddingY:v?4:1,width:v?200:132,children:[(0,h.jsx)(c.xv,{align:"center",color:"inverse",children:a||y._('Explore something new', 'Flyout message prompting user to click on the explore icon.', 'unauthNavBar.explore.flyout')}),v?(0,h.jsx)(c.xu,{marginTop:4,children:(0,h.jsx)(c.zx,{role:"link",accessibilityLabel:y._('Explore', 'navFooter.flyout.button', 'Button on flyout to upsell home icon'),color:"white",href:b,onClick:({event:e})=>u(e),text:y._('Explore', 'navFooter.flyout.button', 'Button on flyout to upsell home icon')})}):null]})})]}),x&&(0,h.jsx)(c.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{WebkitUserSelect:"none"}},children:(0,h.jsx)(c.xv,{align:"center",color:n,size:"100",lineClamp:1,children:f})})]})})})})),v=({accessibilityLabel:e,homeFlyoutText:t,isAuthenticated:o,onTouch:s,showHomeBadge:n,shouldUpsellHomePage:a,showHomeFlyoutWithButton:l,selectedItem:r,showLabel:u,title:d})=>{const m={badge:{width:8,height:8},badgeMargins:{marginLeft:6,marginTop:1}},p=(0,i.useRef)(null);return(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)(_,{accessibilityLabel:e,badge:n?m.badge:void 0,badgeMargins:n?m.badgeMargins:void 0,color:"home"===r?"default":"subtle",flyoutText:t,onTouch:()=>{s()},showFlyout:l,showFlyoutButton:l,showLabel:u,svgPath:"M12 0L1 10v14h8v-7a3 3 0 116 0v7h8V10z",title:d,to:o?"/":"/ideas/",ref:p}),a&&(0,h.jsx)(c.xu,{position:"absolute",dangerouslySetInlineStyle:{__style:{pointerEvents:"none"}},children:(0,h.jsx)(c.o3,{size:90})})]})};var x=o(121093),g=o(568388),f=o(332611),b=o(378518);const w=[501227],y={badge:{width:8,height:8,text:" "},badgeMargins:{marginLeft:6,marginTop:1}},S=(0,i.memo)((({avatarSrc:e,completeExperience:t,experience:o,isActive:n,locationPath:a,onTouch:l,showLabel:c,username:u})=>{const d=(0,r.ZP)(),{isAuthenticated:m}=(0,s.useSelector)((({session:e})=>e)),p=a.startsWith(`/${u}`),v=o&&w.includes(o.experience_id);(0,i.useEffect)((()=>{if(v&&p){const{experience_id:e,placement_id:i}=o||{};t(i,e)}}));const g=t=>(0,h.jsx)(_,{accessibilityLabel:d._('My profile', 'Nav bar icon', 'Nav bar icon'),avatarSrc:e,color:n?"default":"subtle",icon:"person",onTouch:l,showLabel:c,title:d._('Saved', 'Saved button on the Nav bar', 'Saved button on the Nav bar'),to:u?`/${u}/`:m?"/":"/unauth-profile/",...t});return v&&!p?(0,h.jsx)(x.Z,{eligibleIds:w,experience:o,children:g(y)}):g({})})),H=(0,s.connect)(null,(e=>({completeExperience:(t,o)=>e((0,f.CK)(t,o))})))((e=>{const t=(0,b._)({id:1000181});return(0,h.jsx)(g.Z,{children:(0,h.jsx)(S,{experience:t,...e})})}));var T=o(707853),A=o(6637);function P(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class j extends i.PureComponent{constructor(...e){super(...e),P(this,"state",{newsBadgeCount:0,unreadMessageCount:0,showBadge:!1}),P(this,"clearNotificationBadge",(()=>{const{isAuthenticated:e,onTouch:t}=this.props;e&&(A.Z.create("NewsHubBadgeResource",{}).callDelete({showError:!1}),this.setState({newsBadgeCount:0,showBadge:!1})),t&&t()})),P(this,"getBadging",(()=>{A.Z.create("NewsHubBadgeResource",{}).callGet().then((({resource_response:{data:e}})=>{const t=e.news_hub_count+e.conversations_unseen_count;this.setState({newsBadgeCount:e.news_hub_count,unreadMessageCount:e.conversations_unseen_count,showBadge:t>0})}))}))}componentDidMount(){this.props.isAuthenticated&&this.getBadging()}render(){const{isActive:e,showLabel:t,icon:o="speech-ellipsis",onTouch:i}=this.props,{newsBadgeCount:s,unreadMessageCount:n,showBadge:a}=this.state,l=s+n,r=l>0&&l<100?l:"99+",c=r.toString().length,u={width:1===c?16:2===c?24:30,height:16,text:r},d=n>0?"/inbox/":"/notifications/";return(0,h.jsx)(_,{accessibilityLabel:this.props.i18n._('News notifications and messages', 'mweb.navbar.notifs_button.a11y', 'accessibility label for notifs icon button'),badge:a&&u||void 0,badgeMargins:{marginLeft:4},icon:o,to:d,color:e?"default":"subtle",onTouch:"/notifications/"===d?this.clearNotificationBadge:i,title:this.props.i18n._('Notifications', 'Notifications button on the Nav bar', 'Notifications button on the Nav bar'),showLabel:t})}}const L=(0,s.connect)((function(e){return{isAuthenticated:e.session.isAuthenticated}}),(()=>({})))((function(e){const t=(0,r.ZP)();return(0,h.jsx)(j,{...e,i18n:t})}));var F=o(968919),B=o(385740),I=o(276775);class N extends i.PureComponent{constructor(...e){var t,o,i;super(...e),i=null,(o="leftHomeTimeOut")in(t=this)?Object.defineProperty(t,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[o]=i}componentDidUpdate(e){const{location:t}=this.props;this.shouldRefreshHomefeed(t.pathname)?this.refreshHomefeed():this.shouldSetLeftHomeTimeout(t.pathname,e)?this.setLeftHomeTimeout():this.shouldClearLeftHomeTimeout(t.pathname)&&this.clearLeftHomeTimeout()}componentWillUnmount(){this.clearLeftHomeTimeout()}setLeftHomeTimeout(){this.leftHomeTimeOut=setTimeout((()=>{this.leftHomeTimeOut&&(this.clearLeftHomeTimeout(),this.leftHomeTimeOut=void 0)}),5e3)}clearLeftHomeTimeout(){this.leftHomeTimeOut&&(clearTimeout(this.leftHomeTimeOut),this.leftHomeTimeOut=null)}refreshHomefeed(){(0,F.cV)("homefeed"),this.leftHomeTimeOut=null}shouldClearLeftHomeTimeout(e){return this.leftHomeTimeOut&&"/"===e}shouldRefreshHomefeed(e){return"/"===e&&92===this.props.viewParameter&&void 0===this.leftHomeTimeOut}shouldSetLeftHomeTimeout(e,t){return null===this.leftHomeTimeOut&&"/"!==e&&"/"===t.location.pathname&&!e.startsWith("/pin/")}render(){return null}}function z(e){const t=(0,I.useLocation)(),{viewParameter:o,viewData:i}=(0,B.SU)();return(0,h.jsx)(N,{...e,location:t,viewParameter:o,viewData:i})}var C=o(941646),W=o(313047),E=o(995081),D=o(483541),U=o(773285),k=o(142958),M=o(112690),O=o(539497),Z=o(529406),R=o(630135);function X(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const Y=52,q=160,G=60,K={},V=e=>{const t=e>100?e-100:5,o=Math.max(e-t,0);window.scrollTo(0,o),o>0&&window.requestAnimationFrame((()=>V(o)))},$=e=>"/"===e||n(e)||e.startsWith("/search/")||"/inbox/"===e||"/inbox/compose/"===e||"/notifications/"===e||e.includes("/report/"),J=e=>{switch(e){case"home":return 146;case"notifications":return 139;case"profile":return 40;case"today":return 11674;case"videos":return 11924;case"search":return 43;default:return}},Q=(e,t,o)=>{const i=K[e.key];if(i)return i;const s=e.pathname;return"/"===s||!o&&"/ideas"===s?"home":s.startsWith("/inbox")?"inbox":s.startsWith("/notifications")?"notifications":s.startsWith("/videos")?"videos":s.startsWith("/today")?"today":s.startsWith("/search")?"search":(0,I.matchPath)(s,{path:`/${t}/(|pins|boards|tried)?`,exact:!0})||!o&&s.startsWith("/unauth-profile")?"profile":null};class ee extends i.PureComponent{constructor(...e){super(...e),X(this,"state",{bottom:0,hasScrolled:!1,isNavFooterHidden:!1,prevLocation:this.props.location,selectedItem:Q(this.props.location,this.props.username,this.props.isAuthenticated),showUnauthNavExplorePrompt:!1}),X(this,"handleScrollForIphoneX",(()=>{window.innerHeight!==this.currInnerHeight&&(this.currInnerHeight=window.innerHeight,this.forceUpdate())})),X(this,"selectItem",(e=>{const{logContextEvent:t,viewData:o,viewParameter:i,viewType:s}=this.props;this.setState({selectedItem:e}),t({component:8,element:J(e),event_type:102,view_data:o,view_type:s,view_parameter:i})})),X(this,"handleHomeTouch",(()=>{const{activeHomefeedTabIndex:e,isAuthenticated:t,location:o,setHomeFlyoutText:i,setHomefeedAsActiveHomefeedTab:s,setShowHomeBadge:n,setShowHomeFlyoutWithButton:a}=this.props;this.selectItem("home"),(0,R.E)(!1),i(),n(!1),a(!1),(0,O.LW)({action:"click",pageLocation:o,item:"nav-bar-home"}),t?(0,O.My)("mweb.auth.bottom-nav.home-tap"):(0,O.My)("mweb.unauth.bottom-nav.home-tap"),Z.C.has(o.pathname)&&e!==Z.e&&0===window.scrollY?s():0===window.scrollY&&"/"===o.pathname?(0,F.cV)("homefeed"):"/"===window.location.pathname&&window.scrollY>0&&V(window.scrollY)})),X(this,"handleInboxTouch",(()=>this.selectItem("inbox"))),X(this,"handleProfileTouch",(()=>{const{location:e,isAuthenticated:t}=this.props;this.selectItem("profile"),(0,O.LW)({action:"click",pageLocation:e,item:"nav-bar-profile"}),t?(0,O.My)("mweb.auth.bottom-nav.profile-tap"):(0,O.My)("mweb.unauth.bottom-nav.profile-tap")})),X(this,"handleSearchTouch",(()=>{const{location:e,isAuthenticated:t}=this.props;this.selectItem("search"),(0,O.LW)({action:"click",pageLocation:e,item:"nav-bar-search"}),t?(0,O.My)("mweb.auth.bottom-nav.search-tap"):(0,O.My)("mweb.unauth.bottom-nav.search-tap")})),X(this,"handleNavFooterScroll",(e=>{const{experience:t,dismissExperience:o,setIsNavFooterHiddenAfterScroll:i}=this.props,{hasScrolled:s}=this.state;t&&502511===t.experience_id&&o&&!s&&o(1000151,502511),this.setState({isNavFooterHidden:e,hasScrolled:!0}),i(e)})),X(this,"currInnerHeight",0)}componentDidMount(){const{devicePlatform:e}=this.props;this.currInnerHeight=window.innerHeight,(0,E.Rq)(e)&&window.addEventListener("scroll",this.handleScrollForIphoneX)}static getDerivedStateFromProps(e,t){return e.location===t.prevLocation?null:{...t,prevLocation:e.location,selectedItem:Q(e.location,e.username,e.isAuthenticated)}}componentDidUpdate({location:e},{selectedItem:t}){const{location:o,history:{action:i}}=this.props,{selectedItem:s}=this.state;e!==o&&("REPLACE"===i||"PUSH"===i&&t!==s)&&(K[e.key]=t,K[o.key]=s)}componentWillUnmount(){const{devicePlatform:e,location:t}=this.props;K[t.key]=this.state.selectedItem,(0,E.Rq)(e)&&window.removeEventListener("scroll",this.handleScrollForIphoneX)}render(){var e;const{forceShowNavFooter:t,isAuthenticated:o,inDockedNavAppBehaviorGrp:s,inDockedNavExp:n,homeFlyoutText:l,location:r,shouldUpsellHomePage:d,showHomeBadge:m,showHomeFlyoutWithButton:p,username:x,viewingUser:f,viewType:b}=this.props,{isNavFooterHidden:w,selectedItem:y}=this.state,S=(0,a.Z)(null==f?void 0:f.created_at),A=o&&S,P=((e,t,o)=>t||o?o?"100%":e?320:264:200)(A,o,n);return(0,h.jsxs)(W.FixedFooter,{forceShow:t,height:G,location:r,inDockedNavAppBehaviorGrp:s,inDockedNavExp:n,isModal:(j=r.pathname,j.includes("/report/")),footerWidth:P,noPadding:!0,hideOnScroll:!s&&(!o||o&&$(r.pathname)),onScroll:this.handleNavFooterScroll,footerInLego:!0,zIndex:T.Z,children:[(0,h.jsx)(z,{}),(0,h.jsxs)(c.xu,{alignItems:"center",display:"flex",justifyContent:"around",marginEnd:"auto",marginStart:"auto",maxWidth:P,paddingX:2,width:P,children:[(0,h.jsx)(c.xu,{alignItems:"center",display:"flex",justifyContent:"center",position:"relative",flex:"grow","data-test-id":"nav-bar-home",children:(0,h.jsx)(v,{accessibilityLabel:this.props.i18n._('Home', 'Nav bar icon', 'Nav bar icon'),homeFlyoutText:l,isAuthenticated:o,onTouch:this.handleHomeTouch,selectedItem:y,shouldUpsellHomePage:d&&!w,showHomeBadge:m,showHomeFlyoutWithButton:p,showLabel:A,title:this.props.i18n._('Home', 'Home button on the Nav bar', 'Home button on the Nav bar')})}),!o&&(0,h.jsx)(C.Z,{id:"nav-bar-search",children:(0,h.jsx)(_,{accessibilityLabel:this.props.i18n._('Search', 'bottomNavBar.searchButton', 'Search button on the nav bar'),color:"search"===y?"default":"subtle",icon:"search",onTouch:this.handleSearchTouch,showLabel:A,title:this.props.i18n._('Search', 'bottomNavBar.searchButton', 'Search button on the nav bar'),to:"/search/"})}),o&&(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)(_,{icon:"search",to:"/search/",color:"search"===y?"default":"subtle",accessibilityLabel:this.props.i18n._('Search', 'Nav bar icon', 'Nav bar icon'),onTouch:this.handleSearchTouch,title:this.props.i18n._('Search', 'Nav bar icon', 'Nav bar icon'),showLabel:A}),(null==f?void 0:f.is_partner)&&(0,h.jsx)(u,{showLabel:A,viewType:b}),(0,h.jsx)(L,{isActive:"inbox"===y||"notifications"===y,onTouch:this.handleInboxTouch,showLabel:A,icon:"speech-ellipsis"})]}),(0,h.jsx)(g.Z,{children:(0,h.jsx)(c.xu,{flex:"grow","data-test-id":"nav-bar-profile",children:(0,h.jsx)(H,{avatarSrc:!f||null!==(e=f.image_small_url)&&void 0!==e&&e.includes("default")||"string"!=typeof f.image_small_url?"":f.image_small_url,isActive:"profile"===y,locationPath:r.pathname,onTouch:this.handleProfileTouch,showLabel:A,username:x})})})]})]});var j}}const te=(0,s.connect)((function({homefeedTabUI:e,session:t,users:o}){return{activeHomefeedTabIndex:e.activeTabIndex,devicePlatform:t.userAgentPlatform,isAuthenticated:t.isAuthenticated,username:t.isAuthenticated&&o[t.userId]?o[t.userId].username:"",viewingUser:t.isAuthenticated?o[t.userId]:void 0}}),(function(e){return{dismissExperience:(t,o)=>e((0,f.Qu)(t,o)),setHomefeedAsActiveHomefeedTab:()=>e((0,D.r)(null,Z.e))}}))((e=>{const t=(0,R.S)(),o=(0,I.useHistory)(),i=(0,I.useLocation)(),s=(0,r.ZP)(),{forceShowNavFooter:n,homeFlyoutText:a,setHomeFlyoutText:l,setIsNavFooterHiddenAfterScroll:c,setShowHomeBadge:u,setShowHomeFlyoutWithButton:d,showHomeBadge:m,showHomeFlyoutWithButton:p}=(0,k.U)(),_=(0,b._)({id:1000151}),{viewParameter:v,viewType:x,viewData:g}=(0,B.SU)(),f=(0,M.Z)(),{checkExperiment:w}=(0,U.F)();return w("social_growth_holdout_2022_h2"),(0,h.jsx)(ee,{...e,experience:_,forceShowNavFooter:n,history:o,location:i,logContextEvent:f,homeFlyoutText:a,setHomeFlyoutText:l,setIsNavFooterHiddenAfterScroll:c,setShowHomeBadge:u,setShowHomeFlyoutWithButton:d,showHomeBadge:m,showHomeFlyoutWithButton:p,shouldUpsellHomePage:t,i18n:s,viewData:g,viewParameter:v,viewType:x})}))},142958:(e,t,o)=>{o.d(t,{U:()=>l,m:()=>r});var i=o(667294),s=o(425288),n=o(785893);const{Provider:a,useHook:l}=(0,s.Z)("NavFooterContext");function r({children:e}){const[t,o]=(0,i.useState)(),[s,l]=(0,i.useState)(!1),[r,c]=(0,i.useState)(!1),[h,u]=(0,i.useState)(!1),[d,m]=(0,i.useState)(!1);return(0,n.jsx)(a,{value:{forceShowNavFooter:d,homeFlyoutText:t,isNavFooterHiddenAfterScroll:s,setForceShowNavFooter:m,setHomeFlyoutText:o,setIsNavFooterHiddenAfterScroll:l,setShowHomeBadge:c,setShowHomeFlyoutWithButton:u,showHomeBadge:r,showHomeFlyoutWithButton:h},children:e})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/60579-8d9c31edf90922ac.mjs.map