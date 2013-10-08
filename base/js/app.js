var sectionContentWrapper = document.getElementById('content');
var sections = sectionContentWrapper.getElementsByTagName('div');

for (i = 0; i < sections.length; i++) {
  var section = sections[i];
  var title = section.getElementsByTagName('h3')[0].innerText;

  console.log(title);
}
