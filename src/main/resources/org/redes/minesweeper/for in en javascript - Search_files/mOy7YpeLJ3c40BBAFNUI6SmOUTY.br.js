var UetTag;(function(n){function t(n,t,i,r,u){var e,o,h,s,v,f,c;i===void 0&&(i="script");r===void 0&&(r="//bat.bing.com/bat.js");u===void 0&&(u="uetq");var y=n.location.search.substring(1),l=y.split("&"),a="";for(e=0;e<l.length;e++)if(o=l[e].split("="),o.length>=2&&o[0]==="form"){a=o[1];break}for(h=["MSC001","MSC002","MSC003","MSC005","MSC006","MSC007","MSC008","MSC009","MSC010","MSC011","MSC012","MSC013","MSC014","MSC015","MSC016","MSC017","MSC018","MSC019","MSC020","SP0001","SP0002","MOG001","MOG002","MOG003","MOG004","MOG005","MOG006","MOG007","MOG008","MOG009","MOG010"],s=0;s<h.length;s++)if(h[s]===a){n[u]=n[u]||[];v=function(){var t={ti:"355015334",q:null};t.q=n[u];n.UET&&(n[u]=new n.UET(t)||[]);n[u].push("pageLoad")};f=t.createElement(i);f.src=r;f.async=1;f.onload=f.onreadystatechange=function(){var n=this.readyState;n&&n!=="loaded"&&n!=="complete"||(v(),f.onload=f.onreadystatechange=null)};c=t.getElementsByTagName(i)[0];c.parentNode.insertBefore(f,c);break}}n.uetTaggingInit=t;t(window,document)})(UetTag||(UetTag={}))