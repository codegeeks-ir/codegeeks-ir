import ICompanion from "utils/schema/data/companion.interface";
import { MetaType } from "utils/schema/meta.type";
import { DataType, Format } from "utils/schema/data";
import { FieldType } from "../fields";
import fields from "../fields";
import { getDataCollection } from "utils/get-data/get-collection";
import IBlog from "utils/schema/data/blog.interface";
import IEvent from "utils/schema/data/event.interface";
import config from "../config";
import { Element } from "utils/schema/elements";

const companionMeta: MetaType<Format.Companions, ICompanion> = {
  format: Format.Companions,
  properties: {
    slug: fields[FieldType.Slug],
    name: fields[FieldType.Title],
    position: fields[FieldType.Description],
    excerpt: fields[FieldType.Excerpt],
    githubID: fields[FieldType.Github],
  },
  getReference: async (data: DataType) => {
    const posts = (
      await getDataCollection(`${config.source.collections}/blog`)
    ).filter((post) => (post as IBlog).writer == (data as ICompanion).githubID);
    const events = (
      await getDataCollection(`${config.source.collections}/events`)
    ).filter(
      (event) => (event as IEvent).lecturer == (data as ICompanion).githubID,
    );
    return [...posts, ...events] as (IBlog | IEvent)[];
  },
  getElement: (data: DataType) => {
    const casted = data as ICompanion;
    return {
      type: Element.Avatar,
      props: {
        imageSource: `https://github.com/${casted.githubID}.png`,
        github: casted.githubID,
        isCompanion: true,
        link: `${config.url}/collections/${Format.Companions}/${casted.githubID}`,
      },
    };
  },
};

export default companionMeta;
