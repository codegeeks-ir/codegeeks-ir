import PhoneIcon from "public/icones/phone.svg";
import EmailIcon from "public/icones/email.svg";
import LinkIcon from "public/icones/link.svg";

const multivalueSeparator = "%%%";

function getRowData(row) {
  if (row.includes('"')) {
    const multiValues = row.match(/"[^"]+"/gi);
    multiValues.forEach((multiValue) => {
      const replacement = multiValue
        .replace(/"/gi, "")
        .replace(/\,/gi, multivalueSeparator);
      row = row.replace(multiValue, replacement);
    });
  }
  return row.split(",");
}

function getHeaders(csvString) {
  const headerData = csvString.split("\n")[0].split(",");
  return headerData;
}

function isMultiValue(dataCell) {
  return dataCell.includes(multivalueSeparator);
}

function getMultiValue(dataCell) {
  return dataCell.split(multivalueSeparator);
}

function getAllRows(csvString) {
  const allRows = csvString.split("\n");
  allRows.shift();
  return allRows;
}

function dataIsEmail(data) {
  return data.includes("@");
}

function dataIsWebsite(data) {
  return data.startsWith("https://") || data.startsWith("www.");
}

function dataIsPhone(data) {
  return (
    data.startsWith("04") || data.startsWith("09") || data.startsWith("+98")
  );
}

function GetDataComponent({ data }) {
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
}

export default function TableFromCsv({ csvString, comments }) {
  return (
    <>
      <div className="overflow-x-scroll">
        <table className="horizontal-table">
          <caption>{comments.join("-")}</caption>
          <thead>
            <tr>
              {getHeaders(csvString).map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {getAllRows(csvString).map((row, rowIndex) => (
              <tr key={rowIndex} tabIndex={0}>
                {getRowData(row).map((dataCell, dataIndex) => (
                  <td key={dataIndex} className="my-0 py-1">
                    {!isMultiValue(dataCell) ? (
                      <GetDataComponent data={dataCell} />
                    ) : (
                      <div className="flex flex-row flex-wrap">
                        {getMultiValue(dataCell).map((data, index) => (
                          <GetDataComponent key={index} data={data} />
                        ))}
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
