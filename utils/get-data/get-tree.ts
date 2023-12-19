import {
  IFile,
  IDirectory,
  TreeType,
  ResourcesType,
} from "utils/schema/tree/tree-type";
import { getDirectorySlugs, getFileSlugs } from "./get-slugs";
import fs from "fs";
import path from "path";

const getSize = (rowSize: number): string => {
  const isBytesRange = 0 < rowSize && rowSize < 1024;
  const isKbRange = 1024 < rowSize && rowSize < 1024 ** 2;
  const isMbRange = 1024 ** 2 < rowSize && rowSize < 1024 ** 3;
  const isGbRange = 1024 ** 3 < rowSize;
  switch (true) {
    case isBytesRange:
      return `${rowSize} bytes`;
    case isKbRange:
      return `${(rowSize / 1024).toFixed(2)} Kb`;
    case isMbRange:
      return `${(rowSize / 1024 ** 2).toFixed(2)} Mb`;
    case isGbRange:
      return `${(rowSize / 1024 ** 3).toFixed(2)} Gb`;
    default:
      return `0 bytes`;
  }
};

const getDirectoryNodes = async (directory: string): Promise<IDirectory[]> => {
  const directorySlugs = await getDirectorySlugs(directory);
  return await Promise.all(
    directorySlugs.map(async (slug) => {
      const name = `${directory}/${slug}`;
      const resources = await getResources(name);
      const directoryFullPath = path.join(process.cwd(), name);
      const stats = fs.statSync(directoryFullPath);
      const rowSize = resources
        .map((item) => item.rowSize)
        .reduce((previousSize, currentSize) => previousSize + currentSize);
      return {
        name,
        rowSize,
        size: getSize(rowSize),
        time: stats.mtime,
        type: "directory",
        directories: resources.filter((item) => item.type == "directory")
          .length,
        files: resources.filter((item) => item.type == "file").length,
        resources,
      } as IDirectory;
    }),
  );
};

const getFileNodes = async (directory: string) =>
  (await getFileSlugs(directory, true)).map((slug) => {
    const name = `${directory}/${slug}`;
    const fileFullPath = path.join(process.cwd(), name);
    const stats = fs.statSync(fileFullPath);
    return {
      name,
      rowSize: stats.size,
      size: getSize(stats.size),
      time: stats.mtime,
      type: "file",
    } as IFile;
  });

const getResources = async (directory: string): Promise<ResourcesType> => {
  const directories: IDirectory[] = await getDirectoryNodes(directory);
  const files: IFile[] = await getFileNodes(directory);
  return [...directories, ...files] as ResourcesType;
};

const getTree = async (directory: string): Promise<TreeType> => {
  const resources = await getResources(directory);
  const directoryFullPath = path.join(process.cwd(), directory);
  const stats = fs.statSync(directoryFullPath);
  const rowSize = resources
    .map((item) => item.rowSize)
    .reduce((previousSize, currentSize) => previousSize + currentSize);
  return {
    name: directory,
    rowSize,
    size: getSize(rowSize),
    time: stats.mtime,
    type: "directory",
    directories: resources.filter((item) => item.type == "directory").length,
    files: resources.filter((item) => item.type == "file").length,
    resources,
  } as IDirectory;
};

export default getTree;
