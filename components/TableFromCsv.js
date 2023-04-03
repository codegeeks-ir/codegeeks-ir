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

function dataIsPhone(data) {
  return (
    data.startsWith("04") || data.startsWith("09") || data.startsWith("+98")
  );
}

function GetDataComponent({ data }) {
  return (
    <>
      {dataIsEmail(data) ? <a href={`mailto:${data}`}>📨</a> : null}
      {dataIsPhone(data) ? <a href={`tel:${data}`}>📞</a> : null}
      {!dataIsEmail(data) && !dataIsPhone(data) ? data : null}
    </>
  );
}

export default function TableFromCsv({ csvString, comments }) {
  return (
    <>
      <div className="overflow-x-scroll">
        <table className="horizontal-table">
          <caption>
            {comments.join("-")}
          </caption>
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
                      getMultiValue(dataCell).map((data, index) => (
                        <GetDataComponent key={index} data={data} />
                      ))
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
