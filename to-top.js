$(document).scroll(function() {
  return $(document).scrollTop() &gt; 300 ? $(&#39;.BackToTop&#39;).addClass(&#39;show&#39;) : $(&#39;.BackToTop&#39;).removeClass(&#39;show&#39;)
  }), $(&#39;.BackToTop&#39;).click(function() {
    return $(&#39;html,body&#39;).animate({
      scrollTop: &#39;0&#39;
    });
});
