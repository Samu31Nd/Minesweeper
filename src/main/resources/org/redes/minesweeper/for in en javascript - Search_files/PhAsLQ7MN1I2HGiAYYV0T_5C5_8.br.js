var __extends=this&&this.__extends||function(){var n=function(t,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])},n(t,i)};return function(t,i){function r(){this.constructor=t}if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),RichCaptionCellTemplateAJAX;(function(n){var f="b_rc_gb_expansion_1",u="b_rc_gb_expansion_2",i=null,t=!1,a=function(){function n(n,r,u){var w=_ge(n),a=w.getAttribute("data-dataurl"),b,v,f;if(a!=""){b=u!=null&&u.EnableMockAJAXTest!=null?u.EnableMockAJAXTest:!1;b==!1&&(a+="&iid="+r,a+="&ig="+_G.IG);v=this;this.expansion_manager=new e(u);var y=_d.querySelectorAll(".b_algoBigWiki,.b_rc_gb_template"),c=null,l=null,p=_d.getElementsByClassName("b_rc_gb_scroll");p!=null&&p.length!=0&&(c=p[0],y!=null&&y.length!=0)&&(l=y[0],u.DisableRichcaptionCellColor&&!u.EnableDarkMode&&(t=!0,i="b_rc_gb_expansion_white"),f=this,typeof sj_ajax!="undefined"&&sj_ajax&&sj_ajax(a,{callback:function(t,i){var et,ot,k,rt,ut,st,ht,nt,a,lt,d,y,p,g,tt,r,ft,it,e,b,ct;if(t){if(i.appendTo(w),ot=_ge("b_rc_gb_origin"),typeof ot=="undefined"||ot==null)return;if(k=_ge("b_rc_gb_origin").getElementsByClassName("b_rc_gb_sub_text"),k==null||k[0]==null)return;if(rt=_ge("b_rc_gb_ajax"),rt==null)return;for(v.initCarousel(l,f.expansion_manager,c,u),r=0;r<k.length;r++)if((e=k[r].getAttribute("data-expansion-id"),b=v.FindTargetElement(rt,e),b!=null)&&(ut=b.getElementsByClassName("b_rc_gb_content_wrapper"),ut!=null&&ut[0]!=null)&&(st=k[r],st!=null)&&(ht=ut[0],ht!=null)){if(a=_d.getElementsByClassName("b_rc_gb_widget_link"),a==null||a[0]==null)return;for(d=null,y=0;y<a.length;y++)(p=a[y],p!=null)&&p.classList.contains(e)&&(d=p);new o(e,f.expansion_manager,l,d,st,b,ht,"",c,"",u)}if(u.EnableAjaxFormulaRender&&sj_evt.fire("render_formula",_ge(n)),nt=(et=_ge("b_rc_gb_origin"))===null||et===void 0?void 0:et.getElementsByClassName("b_rcTmlWrapper"),nt!=null&&nt[0]!=null){if(e=nt[0].getAttribute("data-expansion-id"),a=_d.getElementsByClassName("b_rc_gb_widget_link"),a==null||a[0]==null)return;for(lt=_ge("b_rcTmlExpand"),d=null,y=0;y<a.length;y++)(p=a[y],p!=null)&&p.classList.contains(e)&&(d=p);new h(e,f.expansion_manager,l,d,nt[0],lt,c,u)}if(g=_d.getElementsByClassName("b_rc_sub_close"),g!=null&&g.length>0)for(r=0;r<g.length;r++)sj_be(g[r],"click",function(){return f.expansion_manager.ResetActiveObject()}),sj_be(g[r],"keyup",function(n){n.key==="Enter"&&f.expansion_manager.ResetActiveObject()});if(tt=_ge("b_rc_gb_origin").getElementsByClassName("b_rc_gb_sub_image"),tt==null||tt[0]==null)return;for(r=0;r<tt.length;r++)for(ft=tt[r].getElementsByClassName("b_rc_gb_img_wrapper"),it=0;it<ft.length;it++)(e=ft[it].getAttribute("data-expansion-id"),b=v.FindTargetElement(rt,e),b==null,ct=ft[it],ct!=null)&&new s(e,f.expansion_manager,l,null,ct,b,null,"",c,"",u)}},timeout:5e3}))}}return n.prototype.FindTargetElement=function(n,t){var i=n.getElementsByClassName("b_rc_gb_sub_cell"),r,u;if(i!=null&&i[0]!=null)for(r=0;r<i.length;r++)if((u=i[r],u!=null)&&u.classList.contains(t))return u},n.prototype.initCarousel=function(n,t,i,r){var s,h,v=(s=r===null||r===void 0?void 0:r.isRTL)!==null&&s!==void 0?s:!1,y=(h=r===null||r===void 0?void 0:r.DisplayRelatedContentBottomOfCell)!==null&&h!==void 0?h:!1,a=_d.getElementById("b_rc_gb_wrc_carousel_container"),u,o,e,f;if(a)if(u=_d.getElementsByClassName("b_rc_gb_wrc_img"),y&&(u===null||u===void 0?void 0:u.length)>0)for(f=0;f<u.length;f++)new c("",t,n,u[f],a,null,null,"",null,"",r);else{if(o=_d.getElementById("b_rc_gb_ajax"),!o||!r)return;if(e=o.getElementsByClassName("b_rc_gb_sub_cell"),(e===null||e===void 0?void 0:e.length)>0)o.insertBefore(a,e[0]);else return;if((u===null||u===void 0?void 0:u.length)>0)for(f=0;f<u.length;f++)new l(u[f],n,t,v)}},n}(),e,r,o,s,h,c,l;n.Expansion=a;e=function(){function n(n){var r=this,t,i;this.hover_flip_timer=null;this.hover_lock=!1;this.active_link_object=null;this.active_carousel_object=null;this.disableHoverFlip=n!=null&&n.DisableHoverFlip!=null?n.DisableHoverFlip:!1;this.fixAccessibility=n!=null&&n.FixAccessibility!=null?n.FixAccessibility:!1;this.link_object_list=[];t=_d.getElementsByClassName("b_rc_gb_scroll");t&&t.length==1&&(this.scrolling_element=t[0]);sj_be(_d,"click",function(n){return r.ResetEventActiveObject(n,r)});this.fixAccessibility==!0&&(i=this,sj_be(_d,"keyup",function(n){if(n.key==="Escape"){var t=_d.createEvent("CustomEvent"),r=null;i.active_link_object!=null&&(r=i.active_link_object.GetTargetElement(),r.focus());t.initEvent("click",!1,!1);_d.dispatchEvent(t)}}))}return n.prototype.CheckLinkExist=function(n,t){var f,i,r,u;if(n==null||t==null||t.active_link_object==null)return!1;if(f=t.active_link_object.constructor.name=="RelatedContentObject",f&&t.active_link_object.targetElement)for(i=sj_et(n),r=0;r<10;r++){if(i==t.active_link_object.targetElement)return!0;i=i.parentNode}else{if(t.active_link_object.expandedElement==null)return!1;for(i=sj_et(n),r=0;r<5;r++){if(i==null)break;if(i==t.active_link_object.expandedElement||(u=i,u!=null&&u.classList!=null&&i.classList.contains(t.active_link_object.id)))return!0;i=i.parentNode}}return!1},n.prototype.IsFullyExpanded=function(){return this.active_link_object==null?!1:this.active_link_object.GetExpansionStatus()?!0:!1},n.prototype.IsParticalExpand=function(){return this.active_link_object==null?!1:this.active_link_object.GetParticalExpansionStatus()?!0:!1},n.prototype.ResetEventActiveObject=function(n,t){t!=null&&n!=null&&(t.CheckLinkExist(n,t)||t.active_link_object!=null&&(t.active_link_object.resetExpandSection(),t.active_link_object=null,t.ResetHighLightObject(),t.EnableScroll()))},n.prototype.ResetActiveObject=function(){this.active_link_object!=null&&(this.active_link_object.resetExpandSection(),this.active_link_object=null,this.EnableScroll())},n.prototype.GetAcvtiveObjectID=function(){return this.active_link_object==null||this.active_link_object.id==null?null:this.active_link_object.id},n.prototype.GetAcvtiveObjectExpansionState=function(){return this.active_link_object==null||this.active_link_object.fully_expanded==null?null:this.active_link_object.fully_expanded},n.prototype.GetAcvtiveObjectParticalExpansionState=function(){return this.active_link_object==null||this.active_link_object.fully_expanded==null?null:this.active_link_object.keep_expansion},n.prototype.GetActiveObject=function(n){if(n!=null){if(this.active_link_object==null){this.active_link_object=n;this.EnableScroll();return}this.active_link_object.id!=n.id&&(this.active_link_object.resetExpandSection(),this.active_link_object=n,this.EnableScroll())}},n.prototype.StartHoverFlipTimer=function(){if(this.hover_lock==!1){this.hover_lock=!0;var n=this;this.hover_flip_timer=setTimeout(function(){n.hover_lock=!1;clearTimeout(n.hover_flip_timer)},50)}},n.prototype.IsHoverLocked=function(){return this.hover_lock==!0},n.prototype.DisableScroll=function(){this.scrolling_element!=null&&(this.scrolling_element.style.overflowY="hidden")},n.prototype.EnableScroll=function(){this.scrolling_element!=null&&(this.scrolling_element.style.overflowY="scroll")},n.prototype.RegisterNode=function(n){this.link_object_list.push(n)},n.prototype.HighLightObject=function(n){if(this.active_link_object!=null&&n!=null&&this.active_link_object.id==n.id)for(var t=0;t<this.link_object_list.length;t++)this.link_object_list[t].id!=this.active_link_object.id?this.link_object_list[t].weakenSection():this.link_object_list[t].emphasisSection()},n.prototype.ResetHighLightObject=function(){for(var n=0;n<this.link_object_list.length;n++)this.link_object_list[n].resetSection()},n}();n.ExpansionManager=e;r=function(){function n(n,t,i,r,u,f,e,o){var s,h,c,l;this.resize_multiplier=.05;this.horizontal_expansion_padding=0;this.vertical_expansion_padding=36;this.vertical_offset=0;this.id=n;this.expansion_manager=t;this.rc_gb_algo=i;this.targetElement=u;this.scrolling_element=e;this.expandedElement=f;this.sourceElement=r;this.fully_expanded=!1;this.keep_expansion=!1;this.appNS=u.getAttribute("data-appns");this.kValue=u.getAttribute("data-k");this.title=u.getAttribute("data-title");this.isRTL=o!=null&&o.IsRTL!=null?o.IsRTL:!1;this.enableWidget=o!=null&&o.EnableWidgetExpansion!=null?o.EnableWidgetExpansion:!1;this.enableSection=o!=null&&o.EnableSectionExpansion!=null?o.EnableSectionExpansion:!1;this.expansionDelay=(o!=null&&o.SectionExpansionDelay!=null?o.SectionExpansionDelay:0)/1e3;this.enableExpansionMetrics=o!=null&&o.EnableExpansionMetrics!=null?o.EnableExpansionMetrics:!1;this.enableAnswerSizeExpansion=o!=null&&o.EnableAnswerSizeExpansion!=null?o.EnableAnswerSizeExpansion:!1;this.enableClickExpansion=o!=null&&o.EnableClickExpansion!=null?o.EnableClickExpansion:!1;this.enableExpansionButton=o!=null&&o.EnableExpansionButton!=null?o.EnableExpansionButton:!1;this.enableExpansionFadeOut=o!=null&&o.EnableExpansionFadeOut!=null?o.EnableExpansionFadeOut:!1;this.enableInLineExpansion=o!=null&&o.EnableInLineExpansion!=null?o.EnableInLineExpansion:!1;this.enableContentShareAndBg=o!=null&&o.EnableContentShareAndBg!=null?o.EnableContentShareAndBg:!1;this.sectionOpacity=(o!=null&&o.SectionOpacity!=null?o.SectionOpacity:0)/100;this.fixAccessibility=o!=null&&o.FixAccessibility!=null?o.FixAccessibility:!1;this.enableDarkMode=o!=null&&o.EnableDarkMode!=null?o.EnableDarkMode:!1;this.enableCleanSerpBorder=o!=null&&o.EnableCleanSerpBorder!=null?o.EnableCleanSerpBorder:!1;this.enableDarkMode&&(this.weakenSectionTitleColor=o!=null&&o.WeakenSectionTitleColor!=null?o.WeakenSectionTitleColor:"#444",this.emphasisSectionTitleColor=o!=null&&o.EmphasisSectionTitleColor!=null?o.EmphasisSectionTitleColor:"#111",this.emphasisSectionTargetShadow=o!=null&&o.EmphasisSectionTargetShadow!=null?o.EmphasisSectionTargetShadow:"0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 3px 0 rgba(0, 0, 0, 0.1)",this.emphasisSectionExpandShadow=o!=null&&o.EmphasisSectionExpandShadow!=null?o.EmphasisSectionExpandShadow:"0px 4.8px 14.4px rgba(0, 0, 0, 0.18), 0px 25.6px 57.6px rgba(0, 0, 0, 0.22)",this.wikiWidgetHoverColor=o!=null&&o.WikiWidgetHoverColor!=null?o.WikiWidgetHoverColor:"rgba(0, 0, 0, 0.06)");s=parseInt(_w.getComputedStyle(u).paddingLeft);h=parseInt(_w.getComputedStyle(u).paddingRight);isNaN(s)||s==null||(this.horizontal_expansion_padding+=s);isNaN(h)||h==null||(this.horizontal_expansion_padding+=h);c=parseInt(_w.getComputedStyle(u).paddingTop);l=parseInt(_w.getComputedStyle(u).paddingBottom);isNaN(c)||c==null||(this.vertical_expansion_padding+=c);isNaN(l)||l==null||(this.vertical_expansion_padding+=l)}return n.prototype.isSectionHoverEnabled=function(){return this.enableSection&&this.targetElement!=null&&this.expandedElement!=null},n.prototype.isWidgetHoverEnabled=function(){return this.enableWidget&&this.expandedElement!=null&&this.sourceElement!=null},n.prototype.GetExpansionStatus=function(){return this.fully_expanded},n.prototype.TargetElementIsInsideViewBox=function(){return this.scrolling_element.getBoundingClientRect().bottom-this.targetElement.getBoundingClientRect().top<this.targetElement.getBoundingClientRect().height?!1:this.targetElement.getBoundingClientRect().bottom-this.scrolling_element.getBoundingClientRect().top<this.targetElement.getBoundingClientRect().height?!1:!0},n.prototype.scrollToSection=function(){this.scrolling_element&&(this.scrolling_element.scrollTop=this.targetElement.offsetTop)},n.prototype.GetParticalExpansionStatus=function(){return this.keep_expansion},n.prototype.GetTargetElement=function(){return this.targetElement},n.prototype.resetExpandSection=function(){},n.prototype.resetSection=function(){this.targetElement!=null&&(this.targetElement.style.boxShadow=t?"0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 3px 0 rgba(0, 0, 0, 0.1)":"none",this.targetElement.style.opacity="1");this.sourceElement!=null&&this.enableInLineExpansion==!0&&(this.sourceElement.style.backgroundColor="initial",this.sourceElement.style.borderRadius="0px",this.sourceElement.style.fontWeight="initial",this.sourceElement.style.transition="ease 0.2s")},n.prototype.weakenSection=function(){this.targetElement!=null&&this.enableInLineExpansion==!0&&(this.targetElement.style.boxShadow="none",this.targetElement.style.transition="opacity 0.3s",this.targetElement.style.opacity=this.sectionOpacity.toString());this.sourceElement!=null&&this.enableInLineExpansion==!0&&(this.sourceElement.style.backgroundColor="none",this.sourceElement.style.borderRadius="0px",this.sourceElement.style.fontWeight="initial")},n.prototype.emphasisSection=function(){this.targetElement!=null&&this.enableInLineExpansion==!0&&(this.targetElement.style.transition="opacity 0.1s",this.targetElement.style.opacity="1",this.sourceElement!=null&&(this.enableContentShareAndBg?(this.sourceElement.style.backgroundColor=this.enableDarkMode==!0?this.wikiWidgetHoverColor:"rgba(0, 0, 0, 0.06)",this.sourceElement.style.borderRadius=this.enableCleanSerpBorder?"6px":this.isRTL?"0px 6px 6px 0px":"6px 0px 0px 6px",this.sourceElement.style.fontWeight="bold"):(this.sourceElement.style.backgroundColor="#FFFFFF",this.sourceElement.style.borderRadius=this.isRTL?"0px 20px 20px 0px":"20px 0px 0px 20px",this.sourceElement.style.fontWeight="bold"),this.sourceElement.style.transition="initial"))},n}();o=function(n){function r(t,i,r,u,f,e,o,s,h,c,l){var a=n.call(this,t,i,r,u,f,e,h,l)||this,nt=f.getElementsByClassName("b_rc_gb_sub_title"),w,it,b,k,d,g,v,tt;if(nt&&nt[0]&&(a.sub_title=nt[0]),w=e.getElementsByClassName("b_rc_gb_sub_title"),w&&w[0]&&(a.exp_sub_title=w[0]),it=o.getAttribute("data-should-expansion")!=null?o.getAttribute("data-should-expansion")=="true":!1,a.enableAnswerSizeExpansion=a.enableAnswerSizeExpansion&&it,a.textElement=o,b=e.getElementsByClassName("b_rc_gb_expansion_button"),b&&b[0]&&(a.expansion_button_element=b[0]),k=e.getElementsByClassName("b_rc_gb_expansion_button"),d=e.getElementsByClassName("b_rc_gb_expansion_cover"),d&&d[0]&&(g=d[0],g!=null&&(a.enableInLineExpansion==!0&&a.targetElement.appendChild(g),g.style.display="block")),k&&k[0]&&(a.sync_expansion_buttom_element=k[0],a.sync_expansion_buttom_element!=null&&a.enableAnswerSizeExpansion==!0&&(a.enableInLineExpansion==!0&&a.targetElement.appendChild(a.sync_expansion_buttom_element),a.sync_expansion_buttom_element.style.display="block")),a.expansion_manager.RegisterNode(a),a.enableInLineExpansion){if(a.resize_multiplier=0,a.vertical_offset=-10,sj_be(a.targetElement,"mouseenter",function(){a.expansion_manager.GetActiveObject(a);a.expansion_manager.HighLightObject(a)}),sj_be(a.targetElement,"mouseleave",function(){if(a.keep_expansion){a.keep_expansion=!1;return}a.expansion_manager.ResetActiveObject();a.expansion_manager.ResetHighLightObject()}),sj_be(a.sourceElement,"mouseenter",function(){a.expansion_manager.GetActiveObject(a);a.expansion_manager.HighLightObject(a)}),sj_be(a.sourceElement,"mouseleave",function(){a.expansion_manager.ResetActiveObject();a.expansion_manager.ResetHighLightObject()}),v=a,sj_be(a.sync_expansion_buttom_element,"click",function(){v.expandInitalSection();v.keep_expansion=!0;a.enableAnswerSizeExpansion&&v.furtherExpandSection();a.fully_expanded=!0;a.enableExpansionMetrics==!0?Log.Log("Show","Expansion",a.title,!0,"AppNS",a.appNS,"K",a.kValue,"Category","CommonControls"):Log.Log("WikiGoBig","WikiExpansion",a.title,!0,"AppNS",a.appNS,"K",a.kValue,"Category","WikiGoBig");clearInterval(v.expandTimer)}),a.fixAccessibility==!0){var rt=a.sync_expansion_buttom_element,ut=a.targetElement,ft=a.expandedElement;sj_be(a.sync_expansion_buttom_element,"keyup",function(n){var t,i;n.key==="Enter"&&(t=_d.createEvent("CustomEvent"),t.initEvent("click",!1,!1),i=_d.createEvent("CustomEvent"),i.initEvent("mouseenter",!1,!1),ut.dispatchEvent(i),rt.dispatchEvent(t),ft.focus())})}}else{var y=HoverUtility.debounced(2e3),p=HoverUtility.debounced(5e3),v=a;a.isSectionHoverEnabled()&&(sj_be(a.targetElement,"mouseenter",function(n){if(a.expansion_manager.CheckLinkExist(n,a.expansion_manager)!=!0&&a.expansion_manager.IsFullyExpanded()!=!0&&(a.expansion_manager.IsParticalExpand()!=!0||a.enableExpansionButton!=!0)&&a.TargetElementIsInsideViewBox()){a.emphasisSection();var t=0;clearInterval(v.expandTimer);v.expansion_manager.GetActiveObject(v);v.expansionDelay==0?(v.expandInitalSection(),v.expandSection(),v.keep_expansion=!0,t=1):t=1-v.expansionDelay*2;v.expandTimer=setInterval(function(){t++;t==1?(v.expandInitalSection(),v.expandSection(),v.keep_expansion=!0,v.enableExpansionButton==!0&&clearInterval(v.expandTimer)):t==3&&(v.furtherExpandSection(),v.fully_expanded=!0,v.enableExpansionMetrics==!0?Log.Log("Show","Expansion",v.title,!0,"AppNS",v.appNS,"K",v.kValue,"Category","CommonControls"):Log.Log("WikiGoBig","WikiExpansion",v.title,!0,"AppNS",v.appNS,"K",v.kValue,"Category","WikiGoBig"),clearInterval(v.expandTimer))},500);y.trigger(function(){return Log.Log("WikiGoBig","WikiHover",v.title,!0,"AppNS",v.appNS,"K",v.kValue,"Category","wikiv2section2sec")});p.trigger(function(){return Log.Log("WikiGoBig","WikiHover",v.title,!0,"AppNS",v.appNS,"K",v.kValue,"Category","wikiv2section5sec")})}}),sj_be(a.expandedElement,"mouseenter",function(){a.emphasisSection()}),sj_be(a.targetElement,"mouseleave",function(n){var t=a;if((a.expansion_manager.IsFullyExpanded()!=!0||a.expansion_manager.CheckLinkExist(n,a.expansion_manager))&&(a.expansion_manager.IsParticalExpand()!=!0||a.enableExpansionButton!=!0)){if(a.weakenSection(),a.keep_expansion){a.keep_expansion=!1;return}a.enableClickExpansion==!0?a.fully_expanded||(clearInterval(t.expandTimer),y.reset(),p.reset(),a.expansion_manager.ResetActiveObject()):(clearInterval(t.expandTimer),y.reset(),p.reset(),a.expansion_manager.ResetActiveObject())}}));a.isWidgetHoverEnabled()&&(sj_be(a.sourceElement,"mousemove",function(n){var t,i;a.expansion_manager.GetAcvtiveObjectID()!=a.id&&(a.expansion_manager.CheckLinkExist(n,a.expansion_manager)||(a.expansion_manager.disableHoverFlip!=!0||a.expansion_manager.IsHoverLocked()!=!0)&&(a.scrollToSection(),t=a,a.emphasisSection(),i=0,clearInterval(t.expandTimer),t.expansion_manager.GetActiveObject(t),t.expansionDelay>0&&(i=1-t.expansionDelay*2),t.expandTimer=setInterval(function(){i++;i==1?(t.expandInitalSection(),t.expandSection(),t.enableExpansionButton==!0&&(t.keep_expansion=!0,clearInterval(t.expandTimer))):i==3&&(t.furtherExpandSection(),t.fully_expanded=!0,t.enableExpansionMetrics==!0?Log.Log("Show","Expansion",t.title,!0,"AppNS",t.appNS,"K",t.kValue,"Category","CommonControls"):Log.Log("WikiGoBig","WikiExpansion",t.title,!0,"AppNS",t.appNS,"K",t.kValue,"Category","WikiGoBig"),clearInterval(t.expandTimer))},500),y.trigger(function(){return Log.Log("WikiGoBig","WikiHover",t.title,!0,"AppNS",t.appNS,"K",t.kValue,"Category","wikiv2widget2sec")}),p.trigger(function(){return Log.Log("WikiGoBig","WikiHover",t.title,!0,"AppNS",t.appNS,"K",t.kValue,"Category","wikiv2widget5sec")})))}),sj_be(a.sourceElement,"mouseleave",function(){if(a.GetParticalExpansionStatus()==!0||a.GetExpansionStatus()==!0){a.expansion_manager.disableHoverFlip==!0&&a.expansion_manager.StartHoverFlipTimer();return}(a.expansion_manager.disableHoverFlip!=!0||a.expansion_manager.GetAcvtiveObjectExpansionState()!=!0&&a.expansion_manager.GetAcvtiveObjectParticalExpansionState()!=!0)&&(a.enableExpansionButton!=!0||a.GetParticalExpansionStatus()!=!0)&&(clearInterval(v.expandTimer),y.reset(),p.reset(),a.expansion_manager.ResetActiveObject(),a.weakenSection())}));(a.isWidgetHoverEnabled()||a.isSectionHoverEnabled())&&(sj_be(a.expandedElement,"mouseleave",function(){if(a.enableExpansionButton==!0&&a.GetExpansionStatus()==!0){clearInterval(v.expandTimer);y.reset();p.reset();return}a.enableClickExpansion==!0?a.fully_expanded||(clearInterval(v.expandTimer),y.reset(),p.reset(),a.weakenSection(),a.expansion_manager.ResetActiveObject()):(clearInterval(v.expandTimer),y.reset(),p.reset(),a.expansion_manager.ResetActiveObject(),a.weakenSection())}),a.enableExpansionButton==!0&&sj_be(a.expansion_button_element,"click",function(){a.furtherExpandSection();a.fully_expanded=!0;a.enableExpansionMetrics==!0?Log.Log("Show","Expansion",a.title,!0,"AppNS",a.appNS,"K",a.kValue,"Category","CommonControls"):Log.Log("WikiGoBig","WikiExpansion",a.title,!0,"AppNS",a.appNS,"K",a.kValue,"Category","WikiGoBig");clearInterval(v.expandTimer)}),tt=!1,sj_be(a.textElement,"scroll",function(){if(!tt){tt=!0;var n=a;Log.Log("WikiGoBig","WikiScroll",n.title,!0,"AppNS",n.appNS,"K",n.kValue,"Category","WikiGoBig")}}))}return a}return __extends(r,n),r.prototype.emphasisSection=function(){n.prototype.emphasisSection.call(this);this.enableDarkMode==!0?(this.sub_title&&(this.sub_title.style.textDecoration="underline",this.sub_title.style.color=this.emphasisSectionTitleColor),this.targetElement&&(this.targetElement.style.boxShadow=this.emphasisSectionTargetShadow),this.exp_sub_title&&(this.exp_sub_title.style.textDecoration="underline",this.exp_sub_title.style.color=this.emphasisSectionTitleColor),this.expandedElement&&(this.expandedElement.style.boxShadow=this.emphasisSectionExpandShadow)):(this.sub_title&&(this.sub_title.style.textDecoration="underline",this.sub_title.style.color="#111"),this.targetElement&&(this.targetElement.style.boxShadow="0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 3px 0 rgba(0, 0, 0, 0.1)"),this.exp_sub_title&&(this.exp_sub_title.style.textDecoration="underline",this.exp_sub_title.style.color="#111"),this.expandedElement&&(this.expandedElement.style.boxShadow="0px 4.8px 14.4px rgba(0, 0, 0, 0.18), 0px 25.6px 57.6px rgba(0, 0, 0, 0.22)"))},r.prototype.weakenSection=function(){n.prototype.weakenSection.call(this);this.enableDarkMode==!0?(this.sub_title&&(this.sub_title.style.textDecoration="none",this.sub_title.style.color=this.weakenSectionTitleColor),this.targetElement&&(this.targetElement.style.boxShadow="none"),this.exp_sub_title&&(this.exp_sub_title.style.textDecoration="none",this.exp_sub_title.style.color=this.weakenSectionTitleColor),this.expandedElement&&(this.expandedElement.style.boxShadow="none")):(this.sub_title&&(this.sub_title.style.textDecoration="none",this.sub_title.style.color="#444"),this.targetElement&&(this.targetElement.style.boxShadow="none"),this.exp_sub_title&&(this.exp_sub_title.style.textDecoration="none",this.exp_sub_title.style.color="#444"),this.expandedElement&&(this.expandedElement.style.boxShadow="none"))},r.prototype.expandInitalSection=function(){this.expansion_manager.active_carousel_object&&this.expansion_manager.active_carousel_object.ResetActiveObject(this.expansion_manager.active_carousel_object);this.expandedElement.style.width=this.targetElement.getBoundingClientRect().width-this.horizontal_expansion_padding+"px";this.textElement.style.minHeight=this.targetElement.getBoundingClientRect().height-this.vertical_expansion_padding+"px";this.textElement.style.maxHeight=this.targetElement.getBoundingClientRect().height-this.vertical_expansion_padding+"px";this.expandedElement.style.top=-this.rc_gb_algo.getBoundingClientRect().top+this.targetElement.getBoundingClientRect().top+"px";this.enableAnswerSizeExpansion?this.isRTL?this.targetElement.getBoundingClientRect().right-this.scrolling_element.getBoundingClientRect().right<(t?-1:0)?this.expandedElement.style.left="40px":this.expandedElement.style.right=this.scrolling_element.getBoundingClientRect().right-this.targetElement.getBoundingClientRect().right+"px":this.targetElement.getBoundingClientRect().left-this.scrolling_element.getBoundingClientRect().left>(t?1:0)?this.expandedElement.style.right="40px":this.expandedElement.style.left=this.targetElement.getBoundingClientRect().left-this.scrolling_element.getBoundingClientRect().left+"px":this.isRTL?this.expandedElement.style.right=this.scrolling_element.getBoundingClientRect().right-this.targetElement.getBoundingClientRect().right+"px":this.expandedElement.style.left=this.targetElement.getBoundingClientRect().left-this.scrolling_element.getBoundingClientRect().left+"px";this.enableExpansionFadeOut==!0?(this.expandedElement.style.display="block",this.expandedElement.style.opacity="1"):this.expandedElement.style.display="block"},r.prototype.expandSection=function(){this.expandedElement.style.width=(this.targetElement.getBoundingClientRect().width-this.horizontal_expansion_padding)*(1+2*this.resize_multiplier)+"px";this.textElement.style.minHeight=Math.ceil((this.targetElement.getBoundingClientRect().height-this.vertical_expansion_padding)*(1+2*this.resize_multiplier)/20)*20+"px";this.textElement.style.maxHeight=Math.ceil((this.targetElement.getBoundingClientRect().height-this.vertical_expansion_padding)*(1+2*this.resize_multiplier)/20)*20+"px";this.expandedElement.style.top=-this.rc_gb_algo.getBoundingClientRect().top+this.targetElement.getBoundingClientRect().top-(this.targetElement.getBoundingClientRect().height-this.vertical_expansion_padding)*this.resize_multiplier+"px";this.enableAnswerSizeExpansion?this.isRTL?this.targetElement.getBoundingClientRect().right-this.scrolling_element.getBoundingClientRect().right<0?this.expandedElement.style.left=40-(this.targetElement.getBoundingClientRect().width-this.horizontal_expansion_padding)*this.resize_multiplier+"px":this.expandedElement.style.right=this.scrolling_element.getBoundingClientRect().right-this.targetElement.getBoundingClientRect().right-(this.targetElement.getBoundingClientRect().width-this.horizontal_expansion_padding)*this.resize_multiplier+"px":this.targetElement.getBoundingClientRect().left-this.scrolling_element.getBoundingClientRect().left>0?this.expandedElement.style.right=40-(this.targetElement.getBoundingClientRect().width-this.horizontal_expansion_padding)*this.resize_multiplier+"px":this.expandedElement.style.left=this.targetElement.getBoundingClientRect().left-this.scrolling_element.getBoundingClientRect().left-(this.targetElement.getBoundingClientRect().width-this.horizontal_expansion_padding)*this.resize_multiplier+"px":this.isRTL?this.expandedElement.style.right=this.scrolling_element.getBoundingClientRect().right-this.targetElement.getBoundingClientRect().right-(this.targetElement.getBoundingClientRect().width-this.horizontal_expansion_padding)*this.resize_multiplier+"px":this.expandedElement.style.left=this.targetElement.getBoundingClientRect().left-this.scrolling_element.getBoundingClientRect().left-(this.targetElement.getBoundingClientRect().width-this.horizontal_expansion_padding)*this.resize_multiplier+"px";this.expandedElement.classList.add(f);i!=null&&this.expandedElement.classList.add(i);this.expansion_manager.DisableScroll()},r.prototype.furtherExpandSection=function(){this.enableAnswerSizeExpansion?(this.expandedElement.style.width=this.rc_gb_algo.getBoundingClientRect().width-2*(20-(this.targetElement.getBoundingClientRect().width-this.horizontal_expansion_padding)*this.resize_multiplier)-this.horizontal_expansion_padding+"px",this.expandedElement.style.top=this.scrolling_element.getBoundingClientRect().top-this.rc_gb_algo.getBoundingClientRect().top-(this.targetElement.getBoundingClientRect().height-this.vertical_expansion_padding)*this.resize_multiplier+"px",this.textElement.style.maxHeight=Math.floor(Math.max(this.textElement.getBoundingClientRect().height,this.scrolling_element.getBoundingClientRect().height-this.vertical_expansion_padding))+"px",this.textElement.style.height=Math.floor(Math.max(this.textElement.getBoundingClientRect().height,this.scrolling_element.getBoundingClientRect().height-this.vertical_expansion_padding))+"px",this.enableInLineExpansion==!0&&(this.expandedElement.style.top=this.scrolling_element.getBoundingClientRect().top-this.rc_gb_algo.getBoundingClientRect().top-(this.targetElement.getBoundingClientRect().height-this.vertical_expansion_padding)*this.resize_multiplier+this.vertical_offset+"px",this.textElement.style.maxHeight=Math.floor(Math.max(this.textElement.getBoundingClientRect().height,this.scrolling_element.getBoundingClientRect().height-this.vertical_expansion_padding))-this.vertical_offset+"px",this.textElement.style.height=Math.floor(Math.max(this.textElement.getBoundingClientRect().height,this.scrolling_element.getBoundingClientRect().height-this.vertical_expansion_padding))-this.vertical_offset+"px")):this.textElement.style.maxHeight=Math.floor(Math.max(this.textElement.getBoundingClientRect().height,this.scrolling_element.getBoundingClientRect().bottom-this.targetElement.getBoundingClientRect().top-this.vertical_expansion_padding)/20)*20+"px";this.textElement.style.overflowY="scroll";this.expandedElement.classList.remove(f);this.expandedElement.classList.add(u);i!=null&&this.expandedElement.classList.add(i)},r.prototype.FindTargetElement=function(n,t){var i=n.getElementsByClassName("b_rc_gb_sub_cell"),r,u;if(i!=null&&i[0]!=null)for(r=0;r<i.length;r++)if((u=i[r],u!=null)&&u.classList.contains(t))return u},r.prototype.resetExpandSection=function(){var n,t;this.expandedElement!=null&&(n=this,this.enableExpansionFadeOut==!0?(this.expandedElement.style.opacity="0",t=setTimeout(function(){clearInterval(t);n.expandedElement.style.display="none"},200)):this.expandedElement.style.display="none",this.textElement.style.overflowY="hidden",this.expandedElement.classList.remove(f),this.expandedElement.classList.remove(u));this.weakenSection();this.keep_expansion=!1;this.fully_expanded=!1;clearInterval(this.expandTimer)},r}(r);n.TextObject=o;s=function(n){function t(t,i,r,u,f,e,o,s,h,c,l){var a=n.call(this,t,i,r,u,f,e,h,l)||this;return a.expansion_manager.RegisterNode(a),sj_be(a.targetElement,"mouseenter",function(){a.expansion_manager.GetActiveObject(a);a.expansion_manager.HighLightObject(a)}),sj_be(a.targetElement,"mouseleave",function(){a.expansion_manager.ResetActiveObject();a.expansion_manager.ResetHighLightObject()}),a}return __extends(t,n),t}(r);n.ImageObject=s;h=function(n){function i(t,i,r,u,f,e,o,s){var h=n.call(this,t,i,r,u,f,e,o,s)||this,y=f.getElementsByClassName("b_rc_gb_expansion_button"),l,a,v,c;y&&y[0]&&(h.expansionBtn=y[0],h.expansionBtn.style.display="block");h.resize_multiplier=0;h.vertical_offset=-10;l=null;a=h.targetElement.getElementsByClassName("b_rcTmlContent");a&&a[0]&&(l=a[0].cloneNode(!0),h.textElement=l);v=h.textElement.getElementsByClassName("b_rcTmlBody");v&&v[0]&&(h.scrollElement=v[0]);h.expandedElement.appendChild(l);c=h;sj_be(h.expansionBtn,"click",function(){h.expansion_manager.GetActiveObject(h);c.expandInitalSection();c.keep_expansion=!0;c.furtherExpandSection();h.fully_expanded=!0;h.enableExpansionMetrics==!0?Log.Log("Show","Expansion",h.title,!0,"AppNS",h.appNS,"K",h.kValue,"Category","CommonControls"):Log.Log("WikiGoBig","WikiExpansion",h.title,!0,"AppNS",h.appNS,"K",h.kValue,"Category","WikiGoBig");clearInterval(c.expandTimer)});var p=h.expansionBtn,w=h.targetElement,b=h.expandedElement;return sj_be(h.expansionBtn,"keyup",function(n){var t,i;n.key==="Enter"&&(t=_d.createEvent("CustomEvent"),t.initEvent("click",!1,!1),i=_d.createEvent("CustomEvent"),i.initEvent("mouseenter",!1,!1),w.dispatchEvent(i),p.dispatchEvent(t),b.focus())}),h.expansion_manager.RegisterNode(h),sj_be(h.targetElement,"mouseenter",function(){h.expansion_manager.GetActiveObject(h);h.expansion_manager.HighLightObject(h)}),sj_be(h.targetElement,"mouseleave",function(){if(h.keep_expansion){h.keep_expansion=!1;return}h.expansion_manager.ResetActiveObject();h.expansion_manager.ResetHighLightObject()}),sj_be(h.sourceElement,"mouseenter",function(){h.expansion_manager.GetActiveObject(h);h.expansion_manager.HighLightObject(h)}),sj_be(h.sourceElement,"mouseleave",function(){h.expansion_manager.ResetActiveObject();h.expansion_manager.ResetHighLightObject()}),h}return __extends(i,n),i.prototype.expandInitalSection=function(){this.expansion_manager.active_carousel_object&&this.expansion_manager.active_carousel_object.ResetActiveObject(this.expansion_manager.active_carousel_object);this.expandedElement.style.position="absolute";this.expandedElement.style.width=this.targetElement.getBoundingClientRect().width-this.horizontal_expansion_padding+"px";this.textElement.style.minHeight=this.targetElement.getBoundingClientRect().height-this.vertical_expansion_padding+"px";this.textElement.style.maxHeight=this.targetElement.getBoundingClientRect().height-this.vertical_expansion_padding+"px";this.expandedElement.style.top=-this.rc_gb_algo.getBoundingClientRect().top+this.targetElement.getBoundingClientRect().top+"px";this.isRTL?this.targetElement.getBoundingClientRect().right-this.scrolling_element.getBoundingClientRect().right<(t?-1:0)?this.expandedElement.style.left="40px":this.expandedElement.style.right=this.scrolling_element.getBoundingClientRect().right-this.targetElement.getBoundingClientRect().right+"px":this.targetElement.getBoundingClientRect().left-this.scrolling_element.getBoundingClientRect().left>(t?1:0)?this.expandedElement.style.right="40px":this.expandedElement.style.left=this.targetElement.getBoundingClientRect().left-this.scrolling_element.getBoundingClientRect().left+"px";this.expandedElement.style.display="block"},i.prototype.furtherExpandSection=function(){var t=28,n;this.expandedElement.style.width=this.rc_gb_algo.getBoundingClientRect().width-2*(20-(this.targetElement.getBoundingClientRect().width-this.horizontal_expansion_padding)*this.resize_multiplier)-this.horizontal_expansion_padding+"px";this.expandedElement.style.top=this.scrolling_element.getBoundingClientRect().top-this.rc_gb_algo.getBoundingClientRect().top-(this.targetElement.getBoundingClientRect().height-t)*this.resize_multiplier+this.vertical_offset+"px";n=Math.floor(Math.max(this.textElement.getBoundingClientRect().height,this.scrolling_element.getBoundingClientRect().height-t))-this.vertical_offset;this.textElement.style.maxHeight=n+"px";this.textElement.style.height=n+"px";this.scrollElement.style.height=n-37+"px";this.scrollElement.style.overflowY="scroll";this.expandedElement.classList.add(u)},i.prototype.resetExpandSection=function(){this.expandedElement!=null&&(this.expandedElement.style.display="none",this.textElement.style.overflowY="hidden",this.expandedElement.classList.remove(u));this.weakenSection();this.keep_expansion=!1;this.fully_expanded=!1;clearInterval(this.expandTimer)},i}(r);n.TimelineObject=h;c=function(n){function t(t,i,r,u,f,e,o,s,h,c,l){var a=n.call(this,t,i,r,u,f,e,h,l)||this,v;return a.expansion_manager.RegisterNode(a),v=f.getElementsByClassName("b_rc_gb_wrc_carousel_title"),v&&v[0]&&(a.subTitle=v[0]),sj_be(a.sourceElement,"mouseenter",function(){a.expansion_manager.GetActiveObject(a);a.expansion_manager.HighLightObject(a)}),sj_be(a.sourceElement,"mouseleave",function(){a.weakenSection();a.expansion_manager.ResetActiveObject();a.expansion_manager.ResetHighLightObject()}),sj_be(a.targetElement,"mouseenter",function(){a.expansion_manager.GetActiveObject(a);a.expansion_manager.HighLightObject(a)}),sj_be(a.targetElement,"mouseleave",function(){a.weakenSection();a.expansion_manager.ResetActiveObject();a.expansion_manager.ResetHighLightObject()}),a}return __extends(t,n),t.prototype.emphasisSection=function(){this.enableDarkMode==!0?(this.subTitle&&(this.subTitle.style.textDecoration="underline",this.subTitle.style.color=this.emphasisSectionTitleColor),this.targetElement&&(this.targetElement.style.transition="none",this.targetElement.style.opacity="1",this.targetElement.style.boxShadow=this.emphasisSectionTargetShadow)):(this.subTitle&&(this.subTitle.style.textDecoration="underline",this.subTitle.style.color="#111"),this.targetElement&&(this.targetElement.style.transition="none",this.targetElement.style.opacity="1",this.targetElement.style.boxShadow="0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 3px 0 rgba(0, 0, 0, 0.1)"))},t.prototype.weakenSection=function(){n.prototype.weakenSection.call(this);this.enableDarkMode==!0?(this.subTitle&&(this.subTitle.style.textDecoration="none",this.subTitle.style.color=this.weakenSectionTitleColor),this.targetElement&&(this.targetElement.style.boxShadow="none",this.targetElement.style.transition="opacity 0.3s",this.targetElement.style.opacity=this.sectionOpacity.toString())):(this.subTitle&&(this.subTitle.style.textDecoration="none",this.subTitle.style.color="#444"),this.targetElement&&(this.targetElement.style.boxShadow="none",this.targetElement.style.transition="opacity 0.3s",this.targetElement.style.opacity=this.sectionOpacity.toString()))},t}(r);n.RelatedContentObject=c;l=function(){function n(n,t,i,r){var f=this,e,u;(this.hoverOnObj=n,this.wikiAlgo=t,this.carouselObj=_d.getElementById("b_rc_gb_wrc_carousel_container"),this.expansionManager=i,this.isRTL=r,e=_d.getElementById("b_rc_gb_origin"),n&&t&&i&&this.carouselObj&&e)&&(this.oWidth=e.getBoundingClientRect().width,u=this,sj_be(this.hoverOnObj,"mouseenter",function(){if(f.expansionManager.ResetActiveObject(),!f.expansionManager.active_carousel_object){var n=0;u.expandTimer=setInterval(function(){n+=100;n==300?(u.expansionManager.active_carousel_object=u,u.carouselObj.style.top=u.wikiAlgo.getBoundingClientRect().bottom-u.wikiAlgo.getBoundingClientRect().top-229+"px",u.carouselObj.style.display="block",u.carouselObj.style.opacity="0"):n==500&&(u.carouselObj.style.width=u.wikiAlgo.getBoundingClientRect().width-10+"px",u.isRTL?u.carouselObj.style.right=u.carouselObj.getBoundingClientRect().right-u.wikiAlgo.getBoundingClientRect().right+5+"px":u.carouselObj.style.left=u.wikiAlgo.getBoundingClientRect().left-u.carouselObj.getBoundingClientRect().left+5+"px",u.carouselObj.style.opacity="1",clearInterval(u.expandTimer))},100)}}),sj_be(_d,"click",function(n){return f.ResetEventActiveObject(n,f)}),sj_be(_d,"mouseleave",function(){return f.ClearTimer(f)}))}return n.prototype.ResetEventActiveObject=function(n,t){var i,r;if(t.ClearTimer(t),t.expansionManager.active_carousel_object){for(i=sj_et(n);i!=null;){if(i==t.carouselObj)return;i=i.parentNode}this.expansionManager.active_carousel_object=null;t.carouselObj.style.opacity="0";t.carouselObj.style.width=t.oWidth+"px";t.isRTL?t.carouselObj.style.right="0px":t.carouselObj.style.left="0px";r=setTimeout(function(){clearInterval(r);t.carouselObj.style.display="none"},200)}},n.prototype.ResetActiveObject=function(n){if(n.ClearTimer(n),n.expansionManager.active_carousel_object){this.expansionManager.active_carousel_object=null;n.carouselObj.style.opacity="0";n.carouselObj.style.width=n.oWidth+"px";n.isRTL?n.carouselObj.style.right="0px":n.carouselObj.style.left="0px";var t=setTimeout(function(){clearInterval(t);n.carouselObj.style.display="none"},200)}},n.prototype.ClearTimer=function(n){clearInterval(n.expandTimer)},n}();n.WikiLinkCarouselObject=l})(RichCaptionCellTemplateAJAX||(RichCaptionCellTemplateAJAX={}))