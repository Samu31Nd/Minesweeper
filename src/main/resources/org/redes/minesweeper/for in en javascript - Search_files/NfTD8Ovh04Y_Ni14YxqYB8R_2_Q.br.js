(function(){function f(){var u=o(),i,t,f;if(u)for(i=s(u),t=0;t<i.length;t++)f=i[t].id.replace(n,""),Log&&Log.Log&&Log.Log("Info",r,f,!1,"Text",t.toString()),sj_be(i[t],"mousedown",e)}function e(t){var r=i(t.target),f;r!=null&&(f=r.id.replace(n,""),Log&&Log.Log&&Log.Log("Info",u,f))}function i(t){if(t!=null){var r=t.id;return r!=null&&r.indexOf(n)===0?t:i(t.parentElement)}return null}function o(){var n=_d.querySelectorAll(".b_scopebar > ul");return n&&n.length>0?n[0]:null}function s(i){for(var r,o,u=[],e=i.children,f=0;f<e.length;f++)r=e[f].id,r!=null&&r!==t&&r.indexOf(n)===0?u.push(e[f]):r!=null&&r===t&&(o=h(),u.push.apply(u,o));return u}function h(){var n=_d.querySelectorAll(".b_scopebar #b-scopeListItem-menu .b_sp_over_menu .b_scopebar_item");return Array.prototype.slice.call(n)}var n="b-scopeListItem-",t=n+"menu",r="DynScopeRank",u="DynScopeClick";sj_evt.bind("onP1",f)})()