window.addEventListener("scroll", function() {
    let headerHome = document.querySelector('.my-navbar');
    let x1 = document.querySelector('.ls1');
    if(window.scrollY > 40) {
        headerHome.style.background = "#222";
        headerHome.style.transition = "all 0.2s linear";
        headerHome.style.paddingTop = "14px";
        headerHome.style.paddingBottom = "14px";
        x1.style.width = "108px";
    } 
    else {
        headerHome.style.background = "transparent";
        headerHome.style.transition = "all 0.2s linear";
        headerHome.style.paddingTop = "24px";
        headerHome.style.paddingBottom = "24px";

    }
})

var autoplay = true;
var autoplayInterval = 4000;

if (autoplay) {
   setInterval(function() {
      newIndex++;
      navigateSlider();
   }, autoplayInterval);
}