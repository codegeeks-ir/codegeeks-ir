const getExcerpt = (content: string) => {
  let excerpt = content
    .split(/\r\n|\r|\n/)
    .filter(
      (phrase) =>
        !phrase.startsWith("#") &&
        phrase.trim().length > 1 &&
        phrase != "" &&
        phrase != " " &&
        phrase != undefined,
    )
    .map((phrase) =>
      phrase.endsWith(".") ||
      phrase.endsWith(".") ||
      phrase.endsWith("!") ||
      phrase.endsWith("!") ||
      phrase.endsWith("?") ||
      phrase.endsWith("؟")
        ? phrase.slice(0, phrase.length - 1)
        : phrase,
    )
    .join("\r\n")
    .split("---")
    .slice(2)
    .join("\r\n");
  if (!excerpt == undefined || excerpt == null) excerpt = "  ";
  else
    excerpt = excerpt
      .split(" ")
      .slice(0, excerpt.length < 35 ? excerpt.length : 35)
      .join(" ")
      .concat(" ...");
  return excerpt;
};

export default getExcerpt;
