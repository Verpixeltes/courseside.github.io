 // Wrap every letter in a span
 var textWrapper = document.querySelector(".title");
 textWrapper.innerHTML = textWrapper.textContent.replace(
   /\S/g,
   "<span class='letter'>$&</span>"
 );

 anime.timeline().add({
   targets: ".title .letter",
   translateY: [-200, 0],
   easing: "easeOutExpo",
   duration: 1900,
   delay: (el, i) => 6500 + 30 * i,
 });

 TweenMax.staggerFrom(
   ".container > .block",
   2,
   {
     y: "110%",
     ease: Expo.easeInOut,
     delay: 1,
   },
   0.4
 );
 TweenMax.to(".overlay", 0.5, {
   y: "100%",
   ease: Expo.easeInOut,
   delay: 5.2,
 });

 TweenMax.to(".container", 2, {
   scale: "2",
   y: "90%",
   ease: Expo.easeInOut,
   delay: 5.5,
 });

 TweenMax.staggerFrom(
   ".navbar > div",
   1.6,
   {
     opacity: 0,
     y: -100,
     ease: Expo.easeInOut,
     delay: 6,
   },
   0.08
 );
 TweenMax.staggerFrom(
   ".site-menu > div",
   1,
   {
     opacity: 0,
     y: -100,
     ease: Power2.easeOut,
     delay: 6.5,
   },
   0.1,

 );

// Nach den Animationen

// Warten Sie, bis die Animationen abgeschlossen sind (Sie können dies basierend auf Ihrer Animationsschwelle anpassen)
setTimeout(function () {
  // Selektieren Sie das Element, dessen overflowY Sie ändern möchten
  var body = document.body; // Oder ein anderes Element, je nach Bedarf

  // Ändern Sie den OverflowY-Stil zurück auf "visible"
  body.style.overflowY = "visible";
}, 8000); // Hier könnte die Zeit basierend auf der Gesamtdauer Ihrer Animationen eingestellt werden
