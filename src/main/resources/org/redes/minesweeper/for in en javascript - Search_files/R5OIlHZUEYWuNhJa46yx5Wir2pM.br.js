var ExtendIconClickTargetV2;(function(){function n(){var u=document.querySelectorAll(".b_tpcn"),e,r,f,n,i,t;if(u)for(e=function(n){var r=u[n],i,t,f;if(r&&(r.onclick=function(n){if(!n||n.target===r){var t=r.querySelector(".tilk");t&&(_w.si_T&&_w.si_T(t.getAttribute("h")),t.click())}},i=r.nextElementSibling,i&&(r.addEventListener("mouseover",function(){r.style.cursor="pointer";var n;n=i.tagName==="H2"||i.tagName==="H3"?i.querySelector("a"):i.querySelector("h2 a, h3 a");n&&(n.style.textDecoration="underline")}),r.addEventListener("mouseout",function(){r.style.cursor="";var n;n=i.tagName==="H2"||i.tagName==="H3"?i.querySelector("a"):i.querySelector("h2 a, h3 a");n&&(n.style.textDecoration="")}),t=i,!t||t.classList&&t.classList.contains("b_title")||t.tagName==="H2"||t.tagName==="H3"||(t=t.querySelector("h2, h3")),t))){if(f=t.querySelector("a"),!f)return{value:void 0};t.addEventListener("mouseover",function(n){n&&n.target===t&&(t.style.cursor="pointer",f.style.textDecoration="underline")});t.addEventListener("mouseout",function(n){n&&n.target===t&&(t.style.cursor="",f.style.textDecoration="")});t.onclick=function(n){f&&n&&n.target===t&&(_w.si_T&&_w.si_T(f.getAttribute("h")),f.click())}}},r=0;r<u.length;r++)if(f=e(r),typeof f=="object")return f.value;if(n=document.querySelector(".b_algo_group h2, .b_algo_group h3"),n){if(i=n.parentElement,i&&i.classList&&i.classList.contains("b_title")&&(n=i),t=n.querySelector("a"),!t)return;n.addEventListener("mouseover",function(i){n&&i&&i.target===n&&(n.style.cursor="pointer",t.style.textDecoration="underline")});n.addEventListener("mouseout",function(i){n&&i&&i.target===n&&(n.style.cursor="",t.style.textDecoration="")});n.onclick=function(i){t&&i&&i.target===n&&(_w.si_T&&_w.si_T(t.getAttribute("h")),t.click())}}}n()})(ExtendIconClickTargetV2||(ExtendIconClickTargetV2={}))