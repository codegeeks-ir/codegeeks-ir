const postElement = document.querySelector("#capture-post");
const storyElement = document.querySelector("#capture-story");
const saveContainer = document.querySelector("#event-image-container");

// Capture post element
html2canvas(postElement, {
  width: 1080,
  height: 1080,
  scale: 1,
  windowWidth: 1080,
  windowHeight: 1080
}).then(canvas => {
  const imageURL = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
  const aElement = document.createElement('a');
  saveContainer.appendChild(canvas);
  postElement.remove();
  aElement.setAttribute('download', 'post-image.png');
  aElement.setAttribute('class', 'my-button');
  aElement.setAttribute('href', imageURL);
  aElement.innerText = "دانلود تصویر مناسب پست";
  canvas.remove();
  saveContainer.appendChild(aElement);
});

// Capture story element
html2canvas(storyElement, {
  width: 1080,
  height: 1920,
  scale: 1,
  windowWidth: 1080,
  windowHeight: 1920
}).then(canvas => {
  const imageURL = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
  const aElement = document.createElement('a');
  saveContainer.appendChild(canvas);
  storyElement.remove();
  aElement.setAttribute('download', 'story-image.png');
  aElement.setAttribute('class', 'my-button');
  aElement.setAttribute('href', imageURL);
  aElement.innerText = "دانلود تصویر مناسب استوری";
  canvas.remove();
  saveContainer.appendChild(aElement);
});