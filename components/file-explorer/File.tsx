import { IElement } from "./FileExplorer";
import FileIcon from "public/icones/file.svg";

interface IFileProps {
  element: IElement;
  repoName: string;
  rootDirectory: string;
}

const File = ({ element, repoName, rootDirectory }: IFileProps) => (
  <a
    className="file-explorer-element"
    href={`https://github.com/codegeeks-ir/${repoName}/raw/main/${rootDirectory}/${element.name}`}
  >
    <FileIcon className="w-12 fill-blue-400" />
    <p>{element.name.split("/").pop()}</p>
  </a>
);

export default File;
