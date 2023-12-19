import { IFile } from "utils/schema/tree/tree-type";
import FileIcon from "public/icones/file.svg";

interface IProps {
  file: IFile;
  repoName: string;
  root: string;
}

const File = ({ file, repoName, root }: IProps) => (
  <a
    className="file-explorer-element"
    href={`https://github.com/codegeeks-ir/${repoName}/raw/main/${file.name
      .split("/")
      .slice(1)
      .join("/")}`}
  >
    <FileIcon className="w-12 fill-blue-400" />
    <p>{file.name.split("/").pop()}</p>
  </a>
);

export default File;
