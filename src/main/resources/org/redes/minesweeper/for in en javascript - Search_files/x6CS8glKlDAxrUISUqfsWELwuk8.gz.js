var bepns=bepns||function(n,t){function ai(){var n=this;sj_be(_w,"message",ki,!1);vi();sj_evt.bind("OpenGoBigFlyout",function(){return l(null)},1);sj_evt.bind("OpenGoBigFlyoutL2",ir,1);f&&sj_be(f,"click",l,!1);sj_evt.bind("AutoOpenFlyout",function(){k=!0;p||!p&&tr()>=1200?a(r,"b_hide")?lt(n.evt,!1):w=fi:w=ei;w&&typeof LightLogger!="undefined"&&LightLogger&&LightLogger.logInstrumentationV2(null,LightLogger.InstrumentationEventType.Init,ui,!0,{SuppressionReason:w})},!0);sj_evt.bind("AutoOpenFlyoutHide",function(){i&&o(null,!0,!1)},!0);sj_evt.bind(rt,bi);sj_evt.bind("onP1",wi,1);sj_evt.bind("id:refreshed",yi,1);window.addEventListener("click",function(){o(null,!1,!0)});nr()&&l(null,null,!0)}var yt="redDotControl",pt="rh_meter_leaf_homepage",wt="rh_meter_leaf",bt="givemuid_heart_homepage",kt="GiveMuid",dt="GiveSerp",gt="hub_apps_698b01b4-557a-4a3b-9af7-a7e8138e8372",ni="SUCCESS",v="_RwBf",ti="aad",ii="lka",ri="lkt",g="ard",y="rwspotlight",nt="rt-chevr-nf",ui="AutoOpenFlyoutSuppression",fi="BepFlyoutMissingOrNotHidden",ei="InvalidPageWidth",oi="exb-activityChecklist",si="2px solid #717171",hi="scale(1.05)",ci=["bing.com","bing.com:443","bing-exp.com","bing-int.com","localhost","binginternal.com"],tt=860,b=700,it=320,rt="onPopTR",ut="bepfo",li="0001-01-01T00:00:00.0000000",ft="9998-01-01T00:00:00.0000000",k=!1,e,u,c,r,i,f=n("id_rh"),p=typeof _H!="undefined",w="",vi=function(){var i=n("id_rwl");i&&(r=n("bepfo"),r||(i=n("id_rwl"),i&&(r=t("div"),r.id="bepfo",r.className="b_hide",r.dataset.tag="RewardsHeader.Flyout",i.parentNode&&i.parentNode.insertBefore(r,i.nextSibling))),e||(e=t("div"),e.id="rewardsPanelContainer",e.className="b_hide",i.parentNode&&i.parentNode.insertBefore(e,r.nextSibling),c=t("div"),c.id="rewardsLoadingAnimation",c.setAttribute("size","extraLarge"),c.setAttribute("class","extraLarge"),e.appendChild(c)))},yi=function(){pi(_ge("idd_rwds"),_ge("idd_rwdstrial"))},pi=function(n,t){n&&t&&(t.href=n.href,n.h?t.h=n.h:n.getAttribute&&n.getAttribute("h")&&t.setAttribute("h",n.getAttribute("h")))},wi=function(){var n=0,t=setInterval(function(){f&&f.offsetWidth>0&&f.offsetHeight>0?(clearInterval(t),sj_evt.fire("bepready",vt)):n==80&&clearInterval(t);n++},400)},et=function(n,t){var c,u,l,f,a,e,v,o,y;n===void 0&&(n=null);t===void 0&&(t=!1);var b=_w.location.href,i=_w.location.search.substr(1),s=ot(i),r;try{c=/(?:^|&)hvaName=([^&]*)(?:&|$)/i;r=c.exec(i)}catch(nt){r=undefined}try{l=/(?:^|&)partnerId=([^&]*)(?:&|$)/i;u=l.exec(i)}catch(tt){u=undefined}try{a=/(?:^|&)features=([^&]*)(?:&|$)/i;f=a.exec(i)}catch(it){f=undefined}try{v=/(?:^|&)rwgbscenario=([^&]*)(?:&|$)/i;e=v.exec(i)}catch(rt){e=undefined}try{y=/(?:^|&)thirdPartyPartnerId=([^&]*)(?:&|$)/i;o=y.exec(i)}catch(ut){o=undefined}var h=new Date,p=h.getDate(),w=h.getMonth()+1,k="".concat(w<10?"0":"").concat(w,"/").concat(p<10?"0":"").concat(p,"/").concat(h.getFullYear()),d=u&&u[1]?u[1]:"BingRewards",g="/rewards/panelflyout"+(e&&e[1]?"/l2?scenario="+e[1]:n?"/l2?scenario="+n:"?")+"&partnerId="+d+"&date="+k+(t?"&isAutoOpen=1":"")+(f&&f[1]?"&features="+f[1]:"")+(r&&r[1]?"&hvaName="+r[1]:"")+(s&&s[1]?"&isDarkMode="+s[1]:"")+(o&&o[1]?"&thirdPartyPartnerId="+o[1]:"")+"&ru="+encodeURIComponent(b);return{src:g,darkMode:s}},ot=function(n){var t,i;try{i=/(^|&)isDarkMode=([^&]*)(?:&|$)/i;t=i.exec(n);document.body.classList.contains("b_dark")&&(t=["isDarkMode","1"])}catch(r){t=undefined}return t},st=function(i,r){var f,o;i===void 0&&(i=null);r===void 0&&(r=!1);f=n("id_rwl");e&&(o=et(i,r),u||(u=t("iframe"),u.title=f===null||f===void 0?void 0:f.getAttribute("data-title"),u.id="panelFlyout",u.frameBorder="no",u.scrolling="no",u.src=o.src,e.appendChild(u),h(e,"b_hide"),u===null||u===void 0?void 0:u.addEventListener("load",function(){s(c,"b_hide");o.darkMode&&s(e,"darkMode")},!1)))},ht=function(n){u&&u.contentWindow&&u.contentWindow.postMessage({action:"visibility",isVisible:n},"*")},bi=function(n){n[1]!==ut&&o()},ki=function(n){var s=u&&u.contentWindow&&n.source==u.contentWindow&&n.data,h=i&&i.contentWindow&&n.source==i.contentWindow&&n.data,a,f,e,t,v,c;if((s||h)&&di(n)){if(s)switch(n.data.action){case"closeFlyout":a=_ge("rewardsPanelContainer");a&&o(null,!1,!0);break;case"OpenGoBig":i&&o(null,!0,!1);l(null)}if(h)switch(n.data.action){case"resize":f=n.data.bodyHeight&&parseFloat(n.data.bodyHeight);e=n.data.bodyWidth&&parseFloat(n.data.bodyWidth);f&&!isNaN(f)?(i.height=Math.min(f,b),r.style.height=i.height+"px"):(i.height=Math.min(i.contentWindow.document.body.scrollHeight,b),r.style.height=i.height+"px");e&&!isNaN(e)?(t=Math.min(e,it)+"px",i.style.width=t,r.style.width=t):(t=it+"px",i.style.width=t,r.style.width=t);break;case"refresh":i&&(v=et(),i.src=v.src);break;case"close":i&&o(null,!0,!1);break;case"OpenGoBig":i&&o(null,!0,!1);l(null);break;case"exploreOnBingFocus":i&&o(null,!0,!1);window.innerWidth>=tt&&(l(null),u.onload=function(){var t=u.contentDocument||u.contentWindow.document,n=t===null||t===void 0?void 0:t.getElementById(oi),i;n&&(i=n.style.border,n.focus(),n.style.border=si,n.style.transform=hi,setTimeout(function(){n.style.border=i;n.style.transform="scale(1)"},1e3))})}if(h||s)switch(n.data.action){case"updatePoints":RewardsCreditRefresh&&(c=RewardsCreditRefresh.GetRewardsHeaderBalance(),c!=n.data.newBal&&(RewardsCreditRefresh.SetRewardsHeaderBalance(n.data.newBal),RewardsCreditRefresh.RewardsHeaderAnim(c,n.data.newBal,n.data.goal,n.data.incr)));break;case"redDotControl":sj_evt.fire(yt,!0)}}},ct=function(){i=t("iframe");i.id="bepfm";i.frameBorder="no";i.scrolling="no";i.height=0;i.setAttribute("data-priority","2");r.appendChild(i);r.style.visibility="hidden";r.style.height="100%";sj_be(i,"load",function(){r.style.visibility="visible";i.height=Math.min(i.contentWindow.document.body.scrollHeight,b);r.style.height=i.height+"px";i&&i.contentWindow&&sj_be(i.contentWindow.document,"keyup",d,!0);s(r,"popup")},!1);var n=gi();i.src=n.src;n.isDarkMode&&s(r,"darkMode");window.addEventListener("click",function(){sj_evt.fire("AutoOpenFlyoutHide")})},di=function(n){var t=n.origin;return ci.some(function(n){return t.indexOf(n)==t.length-n.length})?!0:(Log.Log("rwflyout","OriginValidation","Failure",!0,t),!1)},gi=function(){var i=_w.location.search.substr(1),l=/(^|&)rewardstesthooks=1(&|$)/i.exec(i),u=/(?:^|&)rewardsbag=([^&]*)(?:&|$)/i.exec(i),f=undefined,a,v,n,y,t,p,c;try{a=/(^|&)uncrunched=1(&|$)/i;f=a.exec(i)}catch(g){f=undefined}var e=ot(i),o=e&&e[1]&&e[1]=="1",r=undefined;try{v=/(?:^|&)partnerId=([^&]*)(?:&|$)/i;r=v.exec(i)}catch(nt){r=undefined}n=undefined;try{y=/(?:^|&)form=([^&]*)(?:&|$)/i;n=y.exec(i)}catch(tt){n=undefined}t=undefined;try{p=/(?:^|&)rwAutoFlyout=([^&]*)(?:&|$)/i;t=p.exec(i)}catch(it){t=undefined}var s=new Date,w=s.getDate(),b=s.getMonth()+1,k=(b<10?"0":"")+b+"/"+(w<10?"0":"")+w+"/"+s.getFullYear(),d="/rewardsapp/flyout?channel=2",h;return!r&&_ge?(c="",_ge(pt)||_ge(wt)||_ge(bt)?c=kt:(_ge("gwb_teal_heart")||_ge("gwb_header_wrapper"))&&(c=dt),h=d+"&partnerId=AutoOpenFlyout&date="+k+(t&&t[1]?"&rwAutoFlyout="+t[1]:"")+(l&&u?"&atlahostname=localhost&bag="+u[1]:"")+(f?"&uncrunched=1":"")+(o?"&isDarkMode=1":"")+(n&&n[1]?"&form="+n[1]:"")):h=d+(r&&r[1]?"&partnerId="+r[1]:"")+"&date="+k+(l&&u?"&atlahostname=localhost&bag="+u[1]:"")+(t&&t[1]?"&rwAutoFlyout="+t[1]:"")+(f?"&uncrunched=1":"")+(o?"&isDarkMode=1":"")+(n&&n[1]?"&form="+n[1]:""),{src:h,isDarkMode:o}},nr=function(){var r=_w.location.href,i=_w.location.search.substr(1),n,t;try{t=/(?:^|&)rwgbopen=([^&]*)(?:&|$)/i;n=t.exec(i)}catch(u){n=undefined}return n&&n[1]==="1"},o=function(n,t,u){t===void 0&&(t=!0);u===void 0&&(u=!0);t&&(s(r,"b_hide"),f&&h(f,"openfo"),i&&i.contentWindow&&sj_ue(i.contentWindow.document,"keyup",d,!0));u&&(h(document.body,y),h(document.getElementById(nt),y),s(e,"b_hide"),h(c,"b_hide"),ht(!1));p&&at();sj_ue(_d,"click",o,!0);sj_ue(_d,"keyup",d,!0);n&&sj_sp(n);n&&sj_pd(n)},d=function(n){var u=n.which||n.keyCode,r=sj_et(n),t;if(u==27){o(n);f.focus();return}if(u==9&&r&&i){if(t=r.nodeName,t=="BODY"||t=="HTML"||t=="#document")return;i.contentWindow.document.body.contains(r)||o(n)}},lt=function(n,t){(sj_evt.fire("focusChange","bep"),t||a(e,"b_hide"))&&(!t&&r&&(h(r,"popup"),r.firstChild?k&&(r.removeChild(i),ct(),k=!1):ct(),h(r,"b_hide"),f&&f.setAttribute("aria-expanded","true")),t&&e&&(u||st(),ht(!0),h(e,"b_hide"),s(c,"b_hide")),f&&s(f,"openfo"),sj_sp(n),sj_evt.fire(rt,ut))},tr=function(){return Math.max(_d.body.scrollWidth,_d.documentElement.scrollWidth,_d.body.offsetWidth,_d.documentElement.offsetWidth,_d.documentElement.clientWidth)},ir=function(n){if(n&&n[1]&&typeof n[1]=="string"){var t=n[1];l(null,t,!0)}},l=function(n,t,i){var r,u;t===void 0&&(t=null);i===void 0&&(i=!1);n&&(n.preventDefault(),n.stopPropagation());var f=sj_cook.get(v,ti),e=sj_cook.get(v,ii),o=sj_cook.get(v,ri);f=="1"&&o=="1"&&e=="0"&&(r=sj_cook.get(v,g),r!==ft&&(u=r===li?(new Date).toISOString():ft,sj_cook.set(v,g,u,!0)));rr(ur,n,t,i)},rr=function(n){for(var r,i=[],t=1;t<arguments.length;t++)i[t-1]=arguments[t];if(r=!1,!r){typeof Log!="undefined"&&Log&&Log.Log&&Log.Log("RewardsHub","RewardsHubNotAvailableFallback","RewardsHubNotAvailableFallback");n.apply(void 0,i);return}window.chrome.edgeMarketingPagePrivate.showFeatures(gt,function(t){t!==ni?(typeof Log!="undefined"&&Log&&Log.Log&&Log.Log("RewardsHub","RewardsHubFailureFallback","RewardsHubFailureFallback"),n.apply(void 0,i)):typeof Log!="undefined"&&Log&&Log.Log&&Log.Log("RewardsHub","OpenRewardsHub","OpenRewardsHub")})},ur=function(n,t,i){if(i===void 0&&(i=!1),i){if(window.innerWidth<tt)return;s(document.body,y);s(_w.document.getElementById(nt),y)}if(window&&window.RewardsWidget&&window.RewardsWidget.click){window.RewardsWidget.click("medallion","ToggleWebFlyout");return}if(a(e,"b_hide")&&a(r,"b_hide")){u||st(t,i);lt(n,!0);return}if(!a(e,"b_hide")){o(n,!1,!0);return}a(r,"b_hide")||o(n,!0,!1)},s=function(n,t){n&&!a(n,t)&&(n.className+=" "+t)},at=function(){f&&h(f,"rigleamon")},h=function(n,t){if(a(n,t)){var i=new RegExp("(\\s|^)"+t+"(\\s|$)","g");n.className=n.className.replace(i," ")}},a=function(n,t){if(n&&n.className){var i=" "+n.className+" ";return i.indexOf(" "+t+" ")!==-1}return!1},vt=function(n){p&&(n&&n>0?fr():at())},fr=function(){f&&s(f,"rigleamon")},er=function(){f&&sj_ue(f,"click",l,!1)};return ai(),{sg:vt,ubc:er}}(_ge,sj_ce)