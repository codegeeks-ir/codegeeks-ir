import { readdirSync } from "fs";
import path from "path";
import SlugType from "utils/schema/slug.type";

const getFileSlugs = async (
  directory: string,
  isFullName?: boolean,
  type?: string,
): Promise<SlugType[]> => {
  const directoryFullPath = path.join(process.cwd(), directory);
  const slugs = readdirSync(directoryFullPath, { withFileTypes: true })
    .filter(
      (element) =>
        element.isFile() &&
        (type ? element.name.endsWith(`.${type}`) : true) &&
        element.name != "README.md",
    )
    .map((file): SlugType => {
      const fileExtension = `.${file.name.split(".").at(-1)}`;
      const regex = new RegExp(`${fileExtension}$`, "gi");
      return isFullName
        ? file.name
        : file.name.replace(regex, "").split(".v")[0];
    });
  return slugs;
};

const getDirectorySlugs = async (directory: string): Promise<SlugType[]> => {
  const directoryFullPath = path.join(process.cwd(), directory);
  const slugs = readdirSync(directoryFullPath, { withFileTypes: true })
    .filter((element) => element.isDirectory() && !element.name.startsWith("."))
    .map((directoryElement) => directoryElement.name);
  return slugs;
};

export { getFileSlugs, getDirectorySlugs };
