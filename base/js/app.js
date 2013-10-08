var sectionContentWrapper = document.getElementById('content');
var sections = sectionContentWrapper.getElementsByTagName('div');
var nav = document.getElementById('nav');

// Loop to append titles to the nav
for (i = 0; i < sections.length; i++) {
  var section = sections[i];
  var title = section.getElementsByTagName('h3')[0].innerText;

  var li = document.createElement('li');
  li.appendChild(document.createTextNode(title));
  nav.appendChild(li); 
}

// Calculates the position of each section
positionCalculator = function(){
  var pageTop = window.pageYOffset;
  var pageBottom = pageTop + window.innerHeight;
  for (i = 0; i < sections.length; i++){
    var section = sections[i];
  }
};

// Triggers positionCalculator function
window.onscroll = function(){
  positionCalculator();
}