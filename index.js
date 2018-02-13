jQuery(function($){
  $('#myNavbar a').click(function(ev){
    var href = $(this).attr('href');
    if (/^#/.exec(href)) {
      ev.preventDefault();
      $('body, html').animate({'scroll-top': $(href).position().top - 80});
    }
    $('.navbar-toggle').click();
  });
});

jQuery(function($){
  $('#projects .project-laptop').click(function(ev){
    var href = $(this).attr('href');
    if (/^#/.exec(href)) {
      ev.preventDefault();
      $('body, html').animate({'scroll-top': $(href).position().top - 80});
    }
    $('.navbar-toggle').click();
  });
});