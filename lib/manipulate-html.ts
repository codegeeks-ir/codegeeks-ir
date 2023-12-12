const addClassesToParentOfElements = (
  target: string,
  classNames: string[],
  parentName?: string,
): void => {
  const elements = document.getElementsByTagName(target);
  if (elements.length == 0 || elements == null || elements == undefined) return;
  const classList = classNames.map((className) => className.trim());
  Object.values(elements).forEach((element) => {
    if (parentName == null)
      classList.forEach(
        (className) => element.parentElement?.classList.add(className),
      );
    else if (element.parentElement?.tagName == parentName)
      classList.forEach(
        (className) => element.parentElement?.classList.add(className),
      );
  });
};

const centerImage = () => {
  addClassesToParentOfElements(
    "img",
    ["flex", "flex-row", "justify-center", "my-12"],
    "P",
  );
};

export { addClassesToParentOfElements, centerImage };
