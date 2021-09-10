$(function() {
    const hamburger = $(".hamburger");
    const strokes =  $("span");
    const menu = $(".landing .menu");
    const nav = $(".landing .nav");
      hamburger.click(function() {
         strokes.toggleClass("hamburger-open");
          menu.toggleClass("menu-open");
        nav.toggleClass("nav-open");
          
   })
})