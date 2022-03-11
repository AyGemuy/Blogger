//Prevent copy paste via HTML attributes
  var body = document.body;
  body.setAttribute(&quot;oncopy&quot;, &quot;return false&quot;);
  body.setAttribute(&quot;oncut&quot;, &quot;return false&quot;);
  body.setAttribute(&quot;onpaste&quot;, &quot;return false&quot;);


  //This prevents the action of right clicking
  //This is now pointless after what I implemented above
  var preventRightClick = window.addEventListener(&quot;contextmenu&quot;, function(e) {
    e.preventDefault();
    const Toast = Swal.mixin({
  toast: true,
  position: &#39;top-end&#39;,
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) =&gt; {
    toast.addEventListener(&#39;mouseenter&#39;, Swal.stopTimer)
    toast.addEventListener(&#39;mouseleave&#39;, Swal.resumeTimer)
  }
})

Toast.fire({
  icon: &#39;question&#39;,
  title: &#39;Mau copy apa banh..&#39;
})
  });

  //This prevents the Ctrl+C keyboard shortcut...
  //Umm...ok...No it doesn&#39;t :-/
  var preventCtrlC = window.addEventListener(&quot;keypress&quot;, function(e) {
    var str;
    for (i in e) {
      str = str + i + &quot;: &quot; + e[i] + &quot;<br/>&quot;;
    }
    document.getElementById(&quot;innerContainer&quot;).innerHTML = str;
  });
