var sfont = document.getElementById(&quot;fontArea&quot;);
	var fontBtn = document.getElementById(&quot;fontKecil&quot;);
	var fontBtn2 = document.getElementById(&quot;fontSedang&quot;);
	var fontBtn3 = document.getElementById(&quot;fontBesar&quot;);
	
	fontBtn.addEventListener(&quot;click&quot;, function () {sfont.style.fontSize =&quot;xx-small&quot;;} , false);
	fontBtn2.addEventListener(&quot;click&quot;, function () {sfont.style.fontSize =&quot;medium&quot;;} , false);
	fontBtn3.addEventListener(&quot;click&quot;, function () {sfont.style.fontSize =&quot;xx-large&quot;;} , false);
