//pop up subscribe youtube channel by Cerdasin
var time = 3000;
var welcomeSession = sessionStorage.getItem(&#39;welcomeSession&#39;);if(welcomeSession === null){$(window).bind(&#39;load&#39;,function(){setTimeout(function(){$(&#39;.notif-wrap&#39;).css(&quot;display&quot;,&quot;block&quot;);welcomeSession = sessionStorage.setItem(&#39;welcomeSession&#39;,true)}
,time);$(&#39;.notif-closeIcon&#39;).click(function(){$(&#39;.notif-wrap&#39;).addClass(&#39;hide&#39;)}
)})}
