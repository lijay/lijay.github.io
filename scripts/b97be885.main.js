$(function(){function a(){console.log("init."),FB.getLoginStatus(function(a){console.log(a),"connected"===a.status?(console.log("Logged in."),FB.api("/me",function(a){document.getElementById("status").innerHTML="歡迎登入："+a.name+"!"}),$("#search").click(function(a){var f=$("#search_text").val();FB.api("/search?q="+encodeURIComponent(f)+"&type=event",function(a){if(a.data)if(a.data instanceof Array){var g=a.data;if(g.length<=0)console.log("event was not found.");else if(1==g.length){var h=g[0].id,i="找到活動，開始自動報名:"+g[0].name;b(i);var j=!1,k="+1",l=setInterval(function(){j?clearInterval(l):c(h,function(a){var c=a.id.split("_")[1],f=e.format("搜尋到報名留言處, 留言內容=%s,comment_id(%s)!",a.message,c);b(f),d(c,k,function(a){b(e.format("FB報名成功 result=%s",a)),j=!0})})},1500)}else b("找到超過1個活動，不做自動報名，關鍵字:"+f)}else console.log(a);else console.log("找不到活動."),console.log(a)})})):(console.log("login."),FB.login())})}function b(a){var b="<p>Time:"+moment().format("YYYY/MM/DD, HH:mm:ss")+"</p><p>"+a+"</p>";$("#messages").prepend(b)}function c(a,b){var c=e.format("%s/feed",a);FB.api(c,{limit:3},function(a){var c,d=a.data;for(var e in d){var f=d[e];if(f&&f.message.indexOf("指定報名+1區")>=0){c=f;break}}c&&b(c)})}function d(a,b,c){var d=e.format("%s/comments",a);FB.api(d,"post",{message:b},function(a){c(a)})}var e={format:function(){for(var a=arguments[0],b=1;b<arguments.length;b++)a=a.replace("%s",arguments[b]);return a}};window.fbAsyncInit=function(){FB.init({appId:"119272321550408",xfbml:!0,version:"v2.3"}),a()},function(a,b,c){var d,e=a.getElementsByTagName(b)[0];a.getElementById(c)||(d=a.createElement(b),d.id=c,d.src="//connect.facebook.net/en_US/sdk.js",e.parentNode.insertBefore(d,e))}(document,"script","facebook-jssdk")});
