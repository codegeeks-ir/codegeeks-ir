import { GetReferenceType } from "../reference-type";
import IEventData from "./event-data";
import { DataType } from "../data-type";
import getFileData from "utils/get-data/get-data";

const getEventReference: GetReferenceType = async (data: DataType) => {
  const lecturer = await getFileData(
    `${(data as IEventData).lecturer}.md`,
    "docs/collections/companions",
  );
  return lecturer;
};

export default getEventReference;
