export function addClassesToParentOfElements(
  elementsTagName,
  classNames,
  parentTagName = null
) {
  const elements = document.getElementsByTagName(elementsTagName);
  if (elements.length == 0 || elements == null || elements == undefined) return;
  const classList = classNames.split(" ").map((className) => className.trim());
  Object.values(elements).forEach((element) => {
    let parent = element.parentElement;
    if (parentTagName == null)
      classList.forEach((className) => parent.classList.add(className));
    else if (parent.tagName == parentTagName)
      classList.forEach((className) => parent.classList.add(className));
  });
}

export function centerImage() {
  addClassesToParentOfElements(
    "img",
    "flex flex-row justify-center my-12",
    "P"
  );
}
