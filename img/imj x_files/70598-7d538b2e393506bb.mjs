(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[70598],{755506:(e,o,l)=>{l.d(o,{AH:()=>s,Bk:()=>a,CK:()=>r,Fi:()=>n,Xe:()=>i,wS:()=>t});const t=e=>{if(!e)return Object.freeze({});let o;return e.native_creator?(o=e.native_creator,o):e.link_domain?(o=e.link_domain.official_user,o):(o=e.origin_pinner||e.pinner,o)};function i({hasLinkDomain:e,hasNativeCreator:o,hasOriginPinner:l,pinDomain:t,sourceUserUsername:i,sourceUserFullName:a}){return!o&&(e||l)&&i?{pinCreditLink:`/${i}/`,pinCredit:a}:{pinCreditLink:void 0,pinCredit:!o&&e?t:""}}const a=({i18n:e,isLego:o,hasLinkDomain:l,hasRichMetadataArticle:t,hasRichMetadataTutorial:i,hasRichMetadataRecipeCategorizedIngredients:a,hasRichMetadataProductOfferSummary:n,hasRichSummaryProductOfferSummary:r,richMetadataRecipeFromAggregatedData:s,richMetadataProductName:d,richSummaryProductName:u})=>{const _=a;let c;d&&n&&(c=!0);const h=t,p=i;let m=o?e._('From ', 'Closeup pin annotation', 'Closeup pin annotation'):e._('Saved from ', 'Closeup pin annotation', 'Closeup pin annotation');return!l||s?m=e._('Saved by ', 'Closeup pin annotation', 'Closeup pin annotation'):c?m=e._('Product sold by ', 'pin annotation', 'pin annotation'):p?(o&&(m=e._('From ', 'pin annotation', 'pin annotation')),m=e._('Saved from ', 'pin annotation', 'pin annotation')):_?m=e._('Recipe from ', 'pin annotation', 'pin annotation'):h&&(m=e._('Article from ', 'pin annotation', 'pin annotation')),!n&&u&&r&&(m=e._('Product sold by ', 'pin annotation', 'pin annotation')),m},n=({i18n:e,isLego:o,pin:l})=>{var n,r,s,d,u,_,c,h,p,m,f,v,g,w,b,P,y,A;const x=l.link_domain,z=l.native_creator,L=l.rich_metadata,S=l.rich_summary,C=l.attribution;let F,k,T,I;const M=t(l),{pinCreditLink:R,pinCredit:j}=i({hasLinkDomain:!!x,hasNativeCreator:!!z,hasOriginPinner:!!l.origin_pinner,pinDomain:l.domain,sourceUserUsername:null==M?void 0:M.username,sourceUserFullName:null==M?void 0:M.full_name}),U=a({i18n:e,isLego:o,hasLinkDomain:!!l.link_domain,hasRichMetadataArticle:!(null===(n=l.rich_metadata)||void 0===n||!n.article),hasRichMetadataTutorial:!(null===(r=l.rich_metadata)||void 0===r||!r.tutorial),hasRichMetadataRecipeCategorizedIngredients:!(null===(s=l.rich_metadata)||void 0===s||null===(d=s.recipe)||void 0===d||!d.categorized_ingredients),hasRichMetadataProductOfferSummary:!(null===(u=l.rich_metadata)||void 0===u||null===(_=u.products)||void 0===_||null===(c=_[0])||void 0===c||!c.offer_summary),hasRichSummaryProductOfferSummary:!(null===(h=l.rich_summary)||void 0===h||null===(p=h.products)||void 0===p||null===(m=p[0])||void 0===m||!m.offer_summary),richMetadataRecipeFromAggregatedData:null===(f=l.rich_metadata)||void 0===f||null===(v=f.recipe)||void 0===v?void 0:v.from_aggregated_data,richMetadataProductName:null===(g=l.rich_metadata)||void 0===g||null===(w=g.products)||void 0===w||null===(b=w[0])||void 0===b?void 0:b.name,richSummaryProductName:null===(P=l.rich_summary)||void 0===P||null===(y=P.products)||void 0===y||null===(A=y[0])||void 0===A?void 0:A.name});if(x&&!(L&&L.recipe&&L.recipe.from_aggregated_data)){const e=!!(L&&L.recipe&&L.recipe.name&&L.recipe.categorized_ingredients);let o;L&&L.products&&L.products[0]&&(o=!!(L&&L.products[0].name&&L.products[0].offer_summary));const t=!(!L||!L.article);var D,H;if(o)T=null==L||null===(D=L.products)||void 0===D?void 0:D[0].offer_summary,I=null==L||null===(H=L.products)||void 0===H?void 0:H[0].shipping_info;else if(e){var O,E,N;k=null!==(O=null==L?void 0:L.recipe)&&void 0!==O?O:null,null!==(E=k)&&void 0!==E&&null!==(N=E.aggregate_rating)&&void 0!==N&&N.rating_value&&"number"==typeof k.aggregate_rating.review_count&&(null!=L&&L.site_name||l.domain)?k.aggregate_rating.review_source=(null==L?void 0:L.site_name)||l.domain:k&&(k.aggregate_rating=null)}else if(t){var Z;F=(null==L||null===(Z=L.article)||void 0===Z?void 0:Z.date_published)&&new Date(L.article.date_published)}}if(!T&&S){let e;S&&S.products&&S.products[0]&&(e=!!(S&&S.products[0].name&&S.products[0].offer_summary),e&&(T=S.products[0].offer_summary,I=S.products[0].shipping_info))}return{pinArticleDate:F,pinAttribution:C,pinCreditLink:R,pinCreditPrefix:U,pinCredit:j,pinProduct:T,pinShippingInfo:I,pinRecipe:k}},r=({hasRichMetadata:e,hasRichMetadataProducts:o,hasRichMetadataArticle:l,hasRichMetadataRecipe:t})=>e?o?144:l?141:t?145:139:140,s=e=>!!e&&!e.startsWith("https://i.pinimg.com")},780679:(e,o,l)=>{l.d(o,{g:()=>n,t:()=>a});var t=l(667294);const i=(0,t.createContext)(null),a=i.Provider,n=()=>(0,t.useContext)(i)},458882:(e,o,l)=>{l.d(o,{l:()=>a,r:()=>n});var t=l(667294);const i=(0,t.createContext)(null),a=()=>(0,t.useContext)(i),n=i.Provider},667679:(e,o,l)=>{l.d(o,{Z:()=>a});var t=l(458882),i=l(780679);const a=()=>{const e=(0,i.g)(),o=(0,t.l)();return l=>{const{mobileOptions:t,desktopOptions:i,reason:a,attributionLabel:n}=l;var r;e?e.showDesktopSignupModal({modalType:null!==(r=null==i?void 0:i.modalType)&&void 0!==r?r:"signup",reason:a,attributionLabel:n,...null==i?void 0:i.modalOptions}):o&&o.showMobileSignupModal({reason:a,attributionLabel:n,headingType:null==t?void 0:t.headingType})}}},70598:(e,o,l)=>{l.d(o,{Z:()=>A});var t=l(829407),i=l(898781),a=l(112690),n=l(728214),r=l(602574),s=l(667679),d=l(19121),u=l(957314),_=l(755506),c=l(773285),h=l(802201),p=l(281180),m=l(50286),f=l(276775),v=l(343341),g=l(687999),w=l(539497),b=l(883119),P=l(785893);const y=({children:e,pulsar:o,testId:l})=>o.show?(0,P.jsx)(b.xu,{position:"relative","data-test-id":l,children:(0,P.jsxs)(b.iP,{tapStyle:"none",onTap:o.onClick,children:[(0,P.jsx)(b.xu,{position:"absolute",marginTop:-5,dangerouslySetInlineStyle:{__style:{marginLeft:"-75px"}},children:e}),(0,P.jsx)(b.xu,{position:"absolute",marginTop:-12,dangerouslySetInlineStyle:{__style:{marginLeft:"-83px"}},children:(0,P.jsx)(b.o3,{})})]})}):(0,P.jsx)(b.xu,{"data-test-id":l,children:e});function A({auxData:e,disabled:o,disableLog:l,followEventType:A,id:x,inline:z,invertColors:L,isFollowed:S,isIdeaPin:C,isLegoEnabled:F,isSecondaryButton:k,isUserFollowButton:T,isUserMe:I,onFollow:M,onUnfollow:R,pinId:j,shouldUseLegoColors:U,showPulsar:D,size:H,textType:O="FollowFollowing",unfollowEventType:E,viewParameter:N,viewType:Z}){const B=(0,i.ZP)(),W=(0,f.useLocation)(),G=(0,m.HG)(),{showToast:K}=(0,v.F9)(),$=(0,a.Z)(),q=(0,s.Z)(),{checkExperiment:Q}=(0,c.F)(),V=(0,n.Z)(),X=(0,d.Z)(),Y=X&&X.isAuth,{unauthFollowUserId:J,setUnauthFollowUserId:ee}=(0,g.f)(),oe=(0,p.mN)()(x),le=(0,h.S6)()(null!=j?j:""),te=(0,_.wS)(le),ie=null!=oe?oe:te;(0,t.Z)((()=>{!G&&Y&&J&&x&&J===x&&M(x)}));const ae=V({fn:()=>{Y?S?(R(x),l||$({event_type:E,view_type:Z,view_parameter:N,object_id_str:x,aux_data:e})):(M(x),T&&K((({hideToast:e})=>{if(!ie)return null;const o=ie.username?`/${ie.username}/`:"";return(0,P.jsx)(r.Z,{handleHide:e,text:(0,P.jsx)(b.xv,{children:B._('Following! Their created Pins will show up in your home feed!', 'followButton.follow.informationalToastText', 'Text explaining that a creator\'s Pins will show up in home feed after follow')}),userId:x,href:o,imageUrl:ie.image_medium_url})})),l||$({event_type:A,view_type:Z,view_parameter:N,object_id_str:x,aux_data:e})):((0,w.My)(`mweb_unauth_follow_button.tap.${String(Z)}`),5===Z&&26===A&&(0,w.My)("mweb_unauth_board_page_follow_button.tap"),(0,w.NC)(S?"press_profile_unfollow":"press_profile_follow"),(0,w.LW)({action:"click",pageLocation:W,item:"board-follow-button"}),q({reason:"ACTION_REQUIRES_LOGIN_OR_SIGNUP",attributionLabel:C?"tap.unauth_idea_pin.follow_button":"tap.unauth.follow_button",desktopOptions:{modalType:"signup",modalOptions:G&&Q("pcons_dweb_contextual_follow_modal").anyEnabled?{source:"followButton",container:"follow"}:void 0},mobileOptions:!G&&Q("pcons_mweb_contextual_follow_modal").anyEnabled?{headingType:"follow"}:void 0}),G||ee(null!=x?x:""),(0,w.NC)("clickthrough"))},modalHeader:(0,u.N4)({i18n:B,toFollow:!S})}),ne=!S&&!!D,re=()=>{if(I)return B._('That\'s you!', 'Follow button is disabled because this is you', 'Follow button is disabled because this is you');if("AddRemove"===O)return S?B._('Remove', 'unfollowButton.removeText', 'Follow button label - followed state, so user can click to "remove" the follow'):B._('Add', 'followButton.addText', 'Follow button label - unfollowed state, so user can click to "add" the follow');const e="FollowUnfollow"===O?B._('Unfollow', 'unfollowButton.unfollowText', 'Follow button label - followed state, so user can click to "unfollow" the follow'):B._('Following', 'Follow button label - followed state', 'Follow button label - followed state');return S?e:B._('Follow', 'Follow button label - unfollowed state', 'Follow button label - unfollowed state')};return(0,P.jsx)(y,{pulsar:ne?{show:!0,onClick:ae}:{show:!1},testId:I||S?"board-unfollow-button":"board-follow-button",children:(0,P.jsx)(b.zx,{color:U||"AddRemove"===O||!F&&k||S?"gray":"red",disabled:I||o,fullWidth:z,onClick:ne?void 0:({event:o})=>{o.preventDefault(),o.stopPropagation(),l||$({event_type:101,component:13672,element:11951,object_id_str:x,view_type:Z,view_parameter:N,aux_data:e}),ae()},selected:L?!S:U&&S||!!S&&k,size:H,text:re(),accessibilityLabel:re()})})}},802201:(e,o,l)=>{l.d(o,{AF:()=>r,S6:()=>s,_S:()=>d});var t=l(702664),i=l(425288),a=l(785893);const{Provider:n,useHook:r}=(0,i.Z)("Pins");function s(){const e=r();return o=>e[o]}function d({children:e}){const o=(0,t.useSelector)((({pins:e})=>e),t.shallowEqual);return(0,a.jsx)(n,{value:o,children:e})}},687999:(e,o,l)=>{l.d(o,{f:()=>r,w:()=>s});var t=l(667294),i=l(425288),a=l(785893);const{Provider:n,useHook:r}=(0,i.Z)("Session");function s({children:e}){const[o,l]=(0,t.useState)(void 0),i=(0,t.useCallback)((()=>l(void 0)),[]),r=(0,t.useMemo)((()=>({unauthFollowUserId:o,setUnauthFollowUserId:l,removeUnauthFollowUserId:i})),[o,i]);return(0,a.jsx)(n,{value:r,children:e})}},154391:(e,o,l)=>{l.d(o,{H:()=>a,o:()=>i});var t=l(425288);const{Provider:i,useHook:a}=(0,t.Z)("LimitedLogin")},957314:(e,o,l)=>{l.d(o,{N4:()=>a,Wh:()=>t,hr:()=>i});const t=e=>e._('Log in to continue', 'limitedLogin.modalHeader.default', 'Default title on mobile web limited login modal'),i=e=>e._('You\'re almost there! Log in to access all of Pinterest', 'loginModal.limitedLogin.subheader', 'Subheader text on personalized login modal/flyout to remind users to log in'),a=({i18n:e,toFollow:o})=>o?e._('Log in to follow', 'limitedLogin.modalHeader.follow', 'Title on mobile web limited login modal to prompt users to login to follow a user or board.'):e._('Log in to unfollow', 'limitedLogin.modalHeader.unfollow', 'Title on mobile web limited login modal to prompt users to login to unfollow a user or board.')},728214:(e,o,l)=>{l.d(o,{Z:()=>r});var t=l(898781),i=l(50286),a=l(154391),n=l(957314);const r=()=>{const e=(0,t.ZP)(),o=(0,i.HG)(),{viewer:l,loginForMore:r,limitedLoginModalSubheader:s,limitedLoginModalNextLocation:d}=(0,a.H)();return"LIMITED_LOGIN"===l.type?({modalHeader:l,nextLocation:t})=>i=>{let a=null;i&&(i.nativeEvent&&i.nativeEvent instanceof Event?a=i:i.event&&(a=i.event)),a&&(a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation()),l||(l=o?(0,n.hr)(e):(0,n.Wh)(e)),null==r||r.setVisible(!0),null==s||s.setText(l),t&&(null==d||d.setRoute(t))}:({fn:e})=>e}},602574:(e,o,l)=>{l.d(o,{Z:()=>u});var t=l(883119),i=l(785893);function a({ideaPinImages:e}){const o={1:28,2:40,3:48},l=e.map(((e,o)=>{var l,a,n;return(0,i.jsx)(t.xu,{height:48,width:28,color:"default",borderStyle:"sm",overflow:"hidden",rounding:2,dangerouslySetInlineStyle:{__style:{borderColor:"white",marginInlineEnd:"-17px",WebkitMaskImage:"-webkit-radial-gradient(white, black)",zIndex:o}},children:(0,i.jsx)(t.Ee,{alt:"",src:null!==(l=null==e?void 0:e.url)&&void 0!==l?l:"",color:"#696969",fit:"cover",naturalHeight:null!==(a=null==e?void 0:e.height)&&void 0!==a?a:1,naturalWidth:null!==(n=null==e?void 0:e.width)&&void 0!==n?n:1})},o)}));return(0,i.jsx)(t.kC,{justifyContent:"center",children:(0,i.jsx)(t.kC,{justifyContent:"start",width:o[e.length],children:l})})}var n=l(499128),r=l(898781),s=l(784590),d=l(50286);function u({handleHide:e,text:o,userId:l,href:u,imageUrl:_}){const c=(0,r.ZP)(),h=(0,d.HG)(),p=(0,s.Z)({name:"UserStoryPinsFeedResource",options:{data:{filter_version:2,public_only:!0},field_set_key:"partner_grid_item",user_id:l}}),m=Array.isArray(o)?o.join(" "):o;if(0===(p.data||[]).length){const o=_?(0,i.jsx)(t.xu,{height:48,overflow:"hidden",width:48,children:(0,i.jsx)(t.Ee,{alt:c._('Image of who you followed', 'userFollowingToast.thumbnail.userImage', 'Profile thumbnail of the user you followed'),fit:"cover",naturalHeight:1,naturalWidth:1,src:_})}):void 0;return(0,i.jsx)(n.ZP,{duration:5e3,onHide:e,text:m,href:u,iconThumbnail:o,thumbnailShape:"circle"})}const f=(p.data||[]).slice(0,3).map((e=>{var o;return null===(o=e.images)||void 0===o?void 0:o[h?"236x":"170x"]})),v=(0,i.jsx)(a,{ideaPinImages:f});return(0,i.jsx)(n.ZP,{href:u,duration:5e3,onHide:e,iconThumbnail:v,text:m,thumbnailShape:"square"})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/70598-7d538b2e393506bb.mjs.map