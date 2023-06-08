const getHeaders = (csvString) => csvString.split("\n")[0].split(",");
const getAllRows = (csvString) =>
  csvString
    .split("\n")
    .slice(1)
    .filter((row) => !row.includes("#"));

const getRow = (row, multivalueSeparator = "%%%") => {
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
};

const isMultiValue = (dataCell, multivalueSeparator = "%%%") =>
  dataCell.includes(multivalueSeparator);

const getMultiValue = (dataCell, multivalueSeparator = "%%%") =>
  dataCell.split(multivalueSeparator);

const csvToArrayOfObjects = (csvString) => {
  const array = [];
  const headers = getHeaders(csvString);
  getAllRows(csvString).map((row) => {
    const rowContainer = {};
    getRow(row).map((data, index) => {
      const dataContainer = [];
      isMultiValue(data)
        ? getMultiValue(data).forEach((dataCell) =>
            dataContainer.push(dataCell)
          )
        : dataContainer.push(data);
      rowContainer[headers[index]] = dataContainer;
    });
    array.push(rowContainer);
  });
  return array;
};

export default csvToArrayOfObjects;
