import Image from "next/image";
import { IProperty } from "utils/schema/properties";
import ILinkProperty from "utils/schema/properties/link-property.interface";

interface IProps {
  data: string;
  field: IProperty;
}

const LinkContainer = async ({ data, field }: IProps) => {
  const hasImage: boolean = (field as ILinkProperty).imageSource != undefined;
  return (
    <>
      {field.isValid(data) && hasImage ? (
        <section
          className="flex flex-col items-center justify-center 
           m-1 rounded-md border border-solid border-slate-400"
        >
          <div className="profile-picture relative w-20">
            <Image
              src={(field as ILinkProperty).imageSource!(data)}
              alt={data}
              width={100}
              height={100}
              className="p-1"
            />
          </div>
          <a
            className="btn-primary flex-row 
            flex-wrap items-center justify-center
            border-t border-x-0 border-b-0 border-solid border-slate-400
            rounded-t-none m-0 mt-1 p-1 flex w-full"
            href={field.dataTransform ? await field.dataTransform(data) : data}
          >
            {field.icon ? (await field.icon(data)).inContainer : "لینک"}
          </a>
        </section>
      ) : (
        field.isValid(data) && (
          <a
            className="btn-primary my-0 flex w-8 flex-row 
            flex-wrap items-center justify-center"
            href={field.dataTransform ? await field.dataTransform(data) : data}
          >
            {field.icon ? (await field.icon(data)).inContainer : "لینک"}
          </a>
        )
      )}
    </>
  );
};

export default LinkContainer;
