import PhoneIcon from "public/icones/phone.svg";
import EmailIcon from "public/icones/email.svg";
import LinkIcon from "public/icones/link.svg";

const dataIsEmail = (data) => data.includes("@");
const dataIsWebsite = (data) =>
  data.startsWith("https://") || data.startsWith("www.");
const dataIsPhone = (data) =>
  data.startsWith("04") || data.startsWith("09") || data.startsWith("+98");

const GetDataComponent = ({ data }) => {
  return (
    <>
      {dataIsEmail(data) ? (
        <a
          className="btn-primary flex flex-row flex-wrap justify-center items-center w-8 my-0"
          href={`mailto:${data}`}
        >
          <EmailIcon className="fill-slate-200 w-6 h-auto" />
        </a>
      ) : null}
      {dataIsPhone(data) ? (
        <a
          className="btn-primary flex flex-row flex-wrap justify-center items-center w-8 my-0"
          href={`tel:${data}`}
        >
          <PhoneIcon className="fill-slate-200 w-6 h-auto" />
        </a>
      ) : null}
      {dataIsWebsite(data) ? (
        <a
          className="btn-primary flex flex-row flex-wrap justify-center items-center w-8 my-0"
          href={data}
        >
          <LinkIcon className="fill-slate-200 w-6 h-auto" />
        </a>
      ) : null}
      {!dataIsEmail(data) && !dataIsPhone(data) && !dataIsWebsite(data)
        ? data
        : null}
    </>
  );
};

const TableFormArray = ({ array, comments }) => {
  const isArrayEmpty = array.length == 0 || array == null || array == undefined;
  return (
    <>
      <div className="overflow-x-scroll">
        <table className="horizontal-table">
          <caption>{comments.join("-")}</caption>
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
                    <div className="flex flex-row flex-wrap">
                      {dataCell.map((item) => (
                        <GetDataComponent key={dataIndex} data={item} />
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableFormArray;
