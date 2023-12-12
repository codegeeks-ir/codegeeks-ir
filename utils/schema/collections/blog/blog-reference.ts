import getFileData from "utils/get-data/get-data";
import { DataType } from "../data-type";
import { GetReferenceType } from "../reference-type";
import IBlogData from "./blog-data";

const getBlogReference: GetReferenceType = async (data: DataType) => {
  const writer = await getFileData(
    `${(data as IBlogData).writer}.md`,
    "docs/collections/companions",
  );
  return writer;
};

export default getBlogReference;
