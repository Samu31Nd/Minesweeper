(function(){function i(){var f="data-load",u,i;if(n&&!n.hasAttribute(f))try{if(_d.body.appendChild(n),typeof sj_gx=="function"){if(u=r.replace("%IG%",_G.IG).replace("%IID%",n.getAttribute("data-iid")).replace("%PARTNER%",n.getAttribute("data-ptn")).replace("%ENABLEP%",n.getAttribute("data-ep")).replace("%ICONPRELOADED%",n.getAttribute("data-iconpl")),n.setAttribute(f,"1"),i=sj_gx(),!i)return null;i.onreadystatechange=function(){typeof sj_appHTML=="function"&&4==i.readyState&&200==i.status&&sj_appHTML(n,i.responseText)};i.open("GET",t?SbiTst.at(u):u,!0);i.send(null)}}catch(e){}}function u(){if(n){var r=n.getAttribute("data-evt");r&&!t?sj_evt.bind(r,i,!0):i()}}var r="/images/sbi?mmasync=1&ig=%IG%&iid=%IID%&ptn=%PARTNER%&ep=%ENABLEP%&iconpl=%ICONPRELOADED%",n=_ge("sbicom_loader"),t=typeof SbiTst!="undefined";u()})()