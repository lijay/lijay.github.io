$(function(){function a(){console.log("init."),FB.getLoginStatus(function(a){console.log(a),"connected"===a.status?(console.log("Logged in."),FB.api("/me",function(a){document.getElementById("status").innerHTML="歡迎登入："+a.name+"!"}),$("#search").click(function(a){var e=$("#search_text").val();FB.api("/search?q="+encodeURIComponent(e)+"&type=event",function(a){if(a.data)if(a.data instanceof Array){var f=a.data;if(f.length<=0)console.log("event was not found.");else if(1==f.length){var g=f[0].id,h="找到活動，開始自動報名:"+f[0].name;b(h);var i=!1,j=setInterval(function(){i?clearInterval(j):c(g,function(a){var c=a.id.split("_")[1],e=d.format("搜尋到PO文, post_message=%s,comment=%s was found!",a.message,c);b(e)})},1500)}else b("找到超過1個活動，不做自動報名，關鍵字:"+e)}else console.log(a);else console.log("找不到活動."),console.log(a)})})):(console.log("login."),FB.login())})}function b(a){var b="<p>Time:"+moment().format("YYYY/MM/DD, HH:mm:ss")+"</p><p>"+a+"</p>";$("#messages").prepend(b)}function c(a,b){var c=d.format("%s/feed",a);FB.api(c,{limit:3},function(a){var c,d=a.data;for(var e in d){var f=d[e];if(f&&f.message.indexOf("指定留言+1處")>=0){c=f;break}}c&&b(c)})}var d={format:function(){for(var a=arguments[0],b=1;b<arguments.length;b++)a=a.replace("%s",arguments[b]);return a}};window.fbAsyncInit=function(){FB.init({appId:"119272321550408",xfbml:!0,version:"v2.3"}),a()},function(a,b,c){var d,e=a.getElementsByTagName(b)[0];a.getElementById(c)||(d=a.createElement(b),d.id=c,d.src="//connect.facebook.net/en_US/sdk.js",e.parentNode.insertBefore(d,e))}(document,"script","facebook-jssdk")});