var duration = 2;
  var repeat = 0;
  var yoyo = true;
  var paused = true;
var morphs = [
  TweenMax.to("#line1-track", duration, {morphSVG:"#letter-o1", repeat:repeat, yoyo:yoyo, paused: paused, "stroke-width":"17"}),
    TweenMax.to("#line2-track", duration, {morphSVG:"#letter-o2", repeat:repeat, yoyo:yoyo, paused: paused, "stroke-width":"17"}),
    TweenMax.to("#line4-track", duration, {morphSVG:"#letter-s", repeat:repeat, yoyo:yoyo, paused: paused, "stroke-width":"17"}),
    TweenMax.to("#line5-track", duration, {morphSVG:"#heart", repeat:repeat, yoyo:yoyo, paused: paused, "stroke-width":"17"}),
    TweenMax.to("#line6-track", duration, {morphSVG:"#letter-l", repeat:repeat, yoyo:yoyo, paused: paused, "stroke-width":"17"})
];
var morph = function morph () {
  var i, j;
  for (i = 0, j = morphs.length; i < j; i += 1) {
    morphs[i].play();
  }
  morphButton.removeEventListener('click', morph);
  morphButton.addEventListener('click', unmorph, false);
  
};
var unmorph = function unmorph () {
  var i, j;
  for (i = 0, j = morphs.length; i < j; i += 1) {
    morphs[i].reverse();
  }
  morphButton.removeEventListener('click', unmorph);
  morphButton.addEventListener('click', morph, false);
};
var morphButton = document.getElementById("morph-button");
morphButton.addEventListener('click', morph, false);