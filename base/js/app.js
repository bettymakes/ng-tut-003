var sectionContentWrapper = document.getElementById('content');
var sections = sectionContentWrapper.getElementsByTagName('div');
var nav = document.getElementById('nav');

for (i = 0; i < sections.length; i++) {
  var section = sections[i];
  var title = section.getElementsByTagName('h3')[0].innerText;

  var li = document.createElement('li');
  li.appendChild(document.createTextNode(title));
  nav.appendChild(li); 
}
