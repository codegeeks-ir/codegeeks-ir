// Select elements for export process 
const postElement = document.querySelector("#export-post");
const storyElement = document.querySelector("#export-story");
const pdfElement = document.querySelector("#export-pdf");
const saveContainer = document.querySelector("#event-export-link-container");

// Create links
const postLink = document.createElement('a');
const storyLink = document.createElement('a');
const pdfLink = document.createElement('a');

// export settings
const postOptions = {    
  width: 270,
  height: 270,
  scale: 4,
  windowWidth: 270,
  windowHeight: 270 
};
const storyOptions = {
  width: 270,
  height: 480,
  scale: 4,
  windowWidth: 270,
  windowHeight: 480 
};
const pdfOptions = {
  width: 793.3,
  height: 1122,
  scale: 1,
  windowWidth: 793.3,
  windowHeight: 1122
};
const html2pdfOptions = {
  filename:     'myfile.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 1 },
  jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait' }
};

// export post element
html2canvas(postElement, postOptions).then(canvas => {
  const imageURL = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
  saveContainer.appendChild(canvas);
  postElement.remove();
  postLink.setAttribute('download', postElement.getAttribute('subject') + '-post.png');
  postLink.setAttribute('class', 'btn-primary');
  postLink.setAttribute('href', imageURL);
  postLink.innerText = "دریافت تصویر پست";
  saveContainer.appendChild(postLink);
  canvas.remove();
});

// export story element
html2canvas(storyElement, storyOptions).then(canvas => {
  const imageURL = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
  saveContainer.appendChild(canvas);
  storyElement.remove();
  storyLink.setAttribute('download', storyElement.getAttribute('subject') + '-story.png');
  storyLink.setAttribute('class', 'btn-primary');
  storyLink.setAttribute('href', imageURL);
  storyLink.innerText = "دریافت تصویر استوری";
  saveContainer.appendChild(storyLink);
  canvas.remove();
});

// export pdf element
html2canvas(pdfElement, pdfOptions).then(canvas => {
  saveContainer.appendChild(canvas);
  pdfElement.remove();
  pdfLink.innerText = "دریافت نسخه چاپی";
  pdfLink.setAttribute('download', pdfElement.getAttribute('subject'));
  pdfLink.setAttribute('class', 'btn-primary');
  html2pdf().set(html2pdfOptions).from(canvas).toPdf().get('pdf').then((pdf => {
    pdfLink.setAttribute('href', pdf.output('bloburl'));
  }));
  saveContainer.appendChild(pdfLink);
  canvas.remove(); 
});