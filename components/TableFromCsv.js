function getRow(csvString, rowIndex) {
  const row = csvString.split("\n")[rowIndex];
  return row.split(",");
}

function getHeaders(csvString) {
  const headerData = getRow(csvString, 0);
  return headerData;
}

function isMultiValue(dataCell) {
  return dataCell.includes(" ");
}

function getMultiValue(dataCell) {
  return dataCell.split(" ");
}

function getAllRows(csvString) {
  const allRows = csvString.split("\n");
  return allRows;
}

function dataIsEmail(data) {}

function dataIsPhone(data) {}

function GetDataComponent({ data }) {
  if (dataIsEmail(data))
    return (
      <td>
        <a href={`mailto:${data}`}>📨</a>
      </td>
    );
  else if (dataIsPhone(data))
    return (
      <td>
        <a href={`tel:${data}`}>📞</a>
      </td>
    );
}

export default function TableFromCsv({ csvString }) {
  return (
    <table>
      <thead>
        <tr>
          {getHeaders(csvString).map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {getAllRows.map((row, index) => {
          <tr>
            {getRow(csvString, index).map((dataCell) => {
              !isMultiValue(dataCell) ? (
                <GetDataComponent data={dataCell} />
              ) : (
                getMultiValue(dataCell).map((data) => (
                  <GetDataComponent data={data} />
                ))
              );
            })}
          </tr>;
        })}
      </tbody>
    </table>
  );
}
