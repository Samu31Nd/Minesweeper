var RichDeveloperTab;(function(n){function c(n){return t(n,i)?!1:!0}function t(n,t,i){if(i===void 0&&(i=null),!n)return null;var r="data-"+t;return i===null?n.getAttribute(r):(n.setAttribute(r,i),i)}function l(n,t,i){i===void 0&&(i=null);t.style.opacity="0";sb_st(function(){Lib.CssClass.add(t,r);n.style.opacity="1";Lib.CssClass.remove(n,r);i&&i()},0)}function a(n,t,i,r,u,f,e,o,s){if(i&&n&&t)var c=new h(n,t,i,r,u,f,e,o,s)}var r="b_hide",u="rd_btn_dsbl",i="dataurl",f="TabContentAjax",e="rd_tfil-ajaxError",o="b_rd_tfil-ajaxCompleted",s="rd_tfil-ajaxLoad",h=function(){function n(n,i,r,u,f,e,o,s,h){var c=this,l,a;c.container=_ge(r);c.prevBtn=_ge(n);c.nextBtn=_ge(i);c.ajaxErrMsg=f;c.valid=!1;c.ajaxIID=h;c.container&&c.prevBtn&&c.nextBtn&&(l=c.container,c.totalItems=l.children.length,c.activeIdx=u,c.activeIdx>=0&&c.activeIdx<c.totalItems&&(c.prevEnabled=c.activeIdx>0,c.nextEnabled=c.activeIdx<c.totalItems-1,c.prevEnabled?c.enableBtn(c.prevBtn):c.disableBtn(c.prevBtn),c.nextEnabled?c.enableBtn(c.nextBtn):c.disableBtn(c.nextBtn),c.bind(),c.valid=!0));a=t(c.container,"isactivetab")=="true"?!0:!1;e&&a&&o&&s&&(c.valid=!1,c.container&&(c.loadfulldata(),c.valid=!0))}return n.prototype.loadfulldata=function(){var n=this,r=this.container.children[this.activeIdx],h=t(r,i),u;t(r,i,"");u=new TechHelpAjaxLoader.TechHelpAjaxLoader(this.ajaxErrMsg,f,e,s,o);u.loadAjaxData(r,h,this.ajaxIID,function(t){sj_evt.fire("rd_layoutChange",n.container.id,n.activeIdx);t&&sj_evt.fire("rd_tabContent_ajaxLoaded",n.container.id,n.activeIdx,r);sj_evt.fire("rd_show_seemore")},!1)},n.prototype.bind=function(){var n=this;sj_be(this.prevBtn,"click",function(){n.clickPrv()});sj_be(this.nextBtn,"click",function(){n.clickNxt()})},n.prototype.clickPrv=function(){var n,t,i;Log.Log("PreviousClick","RichDevTabContentNav","RichDevTabContentNav",!1);n=this;n.prevBtn&&n.prevEnabled&&n.activeIdx>0&&(t=n.activeIdx,n.activeIdx-=1,i=n.activeIdx,n.switchCnt(t,i,n.prevBtn),n.activeIdx<1&&n.togPrev(!1),!n.nextEnabled&&n.activeIdx<n.totalItems-1&&n.togNext(!0))},n.prototype.clickNxt=function(){var n,t,i;Log.Log("NextClick","RichDevTabContentNav","RichDevTabContentNav",!1);n=this;n.nextBtn&&n.nextEnabled&&n.activeIdx<n.totalItems-1&&(t=n.activeIdx,n.activeIdx+=1,i=n.activeIdx,n.activeIdx>=n.totalItems-1&&n.togNext(!1),!n.prevEnabled&&n.activeIdx>0&&n.togPrev(!0),n.switchCnt(t,i,n.nextBtn))},n.prototype.switchCnt=function(n,t,i){var r=this,f=r.container.children[n],u=r.container.children[t];l(u,f);c(u)||r.loadAjaxData(u,i);sj_evt.fire("rd_tabcontent_change",u.id,r.container.id)},n.prototype.loadAjaxData=function(n,r){var u=this,l=t(n,i);t(n,i,"");var c=t(r,"appns"),h=t(r,"k"),a=c&&h?c+"."+h.substring(0,h.indexOf(".")):"",v=new TechHelpAjaxLoader.TechHelpAjaxLoader(this.ajaxErrMsg,f,e,s,o);v.loadAjaxData(n,l,a,function(t){sj_evt.fire("rd_layoutChange",u.container.id,u.activeIdx);t&&sj_evt.fire("rd_tabContent_ajaxLoaded",u.container.id,u.activeIdx,n)})},n.prototype.togPrev=function(n){var t=this,i=n?t.enableBtn:t.disableBtn;i(t.prevBtn);t.prevEnabled=n},n.prototype.togNext=function(n){var t=this,i=n?t.enableBtn:t.disableBtn;i(t.nextBtn);t.nextEnabled=n},n.prototype.disableBtn=function(n){Lib.CssClass.add(n,u);n.disabled=!0},n.prototype.enableBtn=function(n){Lib.CssClass.remove(n,u);n.disabled=!1},n}();n.init=a;sj_evt.fire("rd_tab_init",n);sj_evt.bind("rd_tabContent_ajaxLoaded",function(n){var i=n[3],t;i&&(t=i.querySelector("#aRmsDefer"),t&&t.removeAttribute("id"))},1)})(RichDeveloperTab||(RichDeveloperTab={}))