"use client";
import PhoneIcon from "public/icones/phone.svg";
import EmailIcon from "public/icones/email.svg";
import LinkIcon from "public/icones/link.svg";
import { CsvRow } from "lib/csv-to-array";

const dataIsEmail = (data: string) => data.includes("@");
const dataIsWebsite = (data: string) =>
  data.startsWith("https://") || data.startsWith("www.");
const dataIsPhone = (data: string) =>
  data.startsWith("04") || data.startsWith("09") || data.startsWith("+98");

const GetDataComponent = ({ data }: { data: string }) => {
  return (
    <>
      {dataIsEmail(data) ? (
        <a
          className="btn-primary my-0 flex w-8 flex-row flex-wrap items-center justify-center"
          href={`mailto:${data}`}
        >
          <EmailIcon className="h-auto w-6 fill-slate-200" />
        </a>
      ) : null}
      {dataIsPhone(data) ? (
        <a
          className="btn-primary my-0 flex w-8 flex-row flex-wrap items-center justify-center"
          href={`tel:${data}`}
        >
          <PhoneIcon className="h-auto w-6 fill-slate-200" />
        </a>
      ) : null}
      {dataIsWebsite(data) ? (
        <a
          className="btn-primary my-0 flex w-8 flex-row flex-wrap items-center justify-center"
          href={data}
        >
          <LinkIcon className="h-auto w-6 fill-slate-200" />
        </a>
      ) : null}
      {!dataIsEmail(data) && !dataIsPhone(data) && !dataIsWebsite(data)
        ? data
        : null}
    </>
  );
};

const Table = ({
  array,
  description,
}: {
  array: CsvRow[];
  description: string;
}) => {
  const isArrayEmpty = array.length == 0 || array == null || array == undefined;
  return (
    <section className="overflow-x-scroll">
      <table className="horizontal-table">
        <caption>{description}</caption>
        <thead>
          <tr>
            {isArrayEmpty
              ? ""
              : Object.keys(array[0]).map((header) => (
                  <th key={header}>{header}</th>
                ))}
          </tr>
        </thead>
        <tbody>
          {array.map((row, rowIndex) => (
            <tr key={rowIndex} tabIndex={0}>
              {Object.values(row).map((dataCell, dataIndex) => (
                <td key={dataIndex} className="my-0 py-1">
                  <section className="flex flex-row flex-wrap">
                    {dataCell.map((item) => (
                      <GetDataComponent key={dataIndex} data={item} />
                    ))}
                  </section>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
