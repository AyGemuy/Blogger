/*<![CDATA[*/ /* coment fitur */ function cdClear(){var e = document.getElementById("codes");e.value = "",e.focus();for (var t = document.querySelectorAll("#cvrt1,#cvrt2,#cvrt3,#cvrt4"),c = 0;c < t.length;c++) t[c].disabled = !1,document.getElementById("btnInfo").style.display = "none",document.getElementById("button-link").style.display = "none"}function preCvrt(){var e = document.getElementById("codes"),t = e.value,c = document.getElementById("opt1"),l = document.getElementById("opt2"),n = document.getElementById("opt3"),o = document.getElementById("opt4"),d = document.getElementById("opt5"),u = document.getElementById("opt8");t = t.replace(/\t/g,"    ");u.checked && (c.checked && (t = t.replace(/&/g,"&amp;")),l.checked && (t = t.replace(/'/g,"&#039;")),n.checked && (t = t.replace(/"/g,"&quot;")),o.checked && (t = t.replace(/</g,"&lt;")),d.checked && (t = t.replace(/>/g,"&gt;")),t = (t = t.replace(/^/,"<i rel='pre'>")).replace(/$/,"</i>"),e.value = t,e.focus(),document.getElementById("button-link").style.display = "inline-block")}function codeCvrt(){var e = document.getElementById("codes"),t = e.value,c = document.getElementById("opt1"),l = document.getElementById("opt2"),n = document.getElementById("opt3"),o = document.getElementById("opt4"),d = document.getElementById("opt5"),u = document.getElementById("opt9");t = t.replace(/\t/g,"    ");u.checked && (c.checked && (t = t.replace(/&/g,"&amp;")),l.checked && (t = t.replace(/'/g,"&#039;")),n.checked && (t = t.replace(/"/g,"&quot;")),o.checked && (t = t.replace(/</g,"&lt;")),d.checked && (t = t.replace(/>/g,"&gt;")),t = (t = t.replace(/^/,"<i rel='code'>")).replace(/$/,"</i>"),e.value = t,e.focus(),document.getElementById("button-link").style.display = "inline-block")}function imgCvrt(){var e = document.getElementById("codes"),t = e.value,c = document.getElementById("opt6");t = t.replace(/\t/g,"    ");c.checked && (t = (t = t.replace(/^/,"<i rel='image'>")).replace(/$/,"</i>"),e.value = t,e.focus(),document.getElementById("button-link").style.display = "inline-block")}function quoteCvrt(){var e = document.getElementById("codes"),t = e.value,c = document.getElementById("opt7");t = t.replace(/\t/g,"    ");c.checked && (t = (t = t.replace(/^/,"<i rel='quote'>")).replace(/$/,"</i>"),e.value = t,e.focus(),document.getElementById("button-link").style.display = "inline-block")}var clipboard = new Clipboard(".button-link");clipboard.on("success",function(e){console.log(e),document.getElementById("btnInfo").style.display = "block",document.getElementById("codes").value = ""}),clipboard.on("error",function(e){console.log(e)});function cdCopy(){document.querySelector('#codes').select(),document.execCommand('copy');document.querySelector('#btnInfo').style.display='block';setTimeout(function(){document.querySelector('#btnInfo').style.display='none'},2000)}/*]]>*/
