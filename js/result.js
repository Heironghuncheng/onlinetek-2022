function getParams(){let n={};let l=window.location.search.substr(1).split("&");for(let t=0;t<l.length;++t){let e=l[t].split("=");n[e[0]]=e[1]}return n}function share(){let e=getResultId();let t="../share/index.html?result="+e;window.open(t,"_self")}function getResultId(){return getParams()["result"]}function setRem(){let e=document.documentElement.clientWidth/10;document.documentElement.style.fontSize=e+"px";let t=document.documentElement.clientHeight+"px";$("#bg").css("height",t);$("#mainly").css("height",t)}function getText(t){for(let e=0;e<6;e++){$("#text").append("<p>"+resultList[t]["result"][e]+"</p>")}}function setBgText(t){if(t>=0&&t<=4){let e=["dinner","papercutting","people","tiger","village"];$("#mainly").append("<img id='bg' src='../assets/img/result/"+e[t]+"-bg.png' style=' position: absolute;z-index: -2;left: 0;top: 0;width: 10rem;' alt=\"\">");$("#header").append("<img id='head-text' src='../assets/img/result/"+e[t]+'-text.png\' alt="">');getText(t)}else{$("#mainly").innerHTML="<h>出错了</h>"}}$(document).ready(function(){let e=getResultId();setBgText(e);setRem()});