interface IFile {
  type: "file";
  name: string;
  rowSize: number;
  size: string;
  time: Date;
}

interface IDirectory {
  type: "directory";
  name: string;
  rowSize: number;
  size: string;
  time: Date;
  directories: number;
  files: number;
  resources?: ResourcesType;
}

type Element = IFile | IDirectory;

type ResourcesType = Element[];

type TreeType = IDirectory;

export {
  type IFile,
  type IDirectory,
  type Element,
  type ResourcesType,
  type TreeType,
};
