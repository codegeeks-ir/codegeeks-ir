interface ICsvConfig {
  commentIdentifier: string;
  rowDelimiter: string;
  fieldDelimiter: string;
  multivalueEnclosure: string;
  multivalueDelimiter: string;
}

const csvConfig: ICsvConfig = {
  commentIdentifier: "#",
  rowDelimiter: "\n",
  fieldDelimiter: ",",
  multivalueEnclosure: '"',
  multivalueDelimiter: "%%%",
};

const getComments = (csv: string, config: ICsvConfig = csvConfig): string[] =>
  csv
    .split(config.rowDelimiter)
    .filter((row: string) => row.startsWith(config.commentIdentifier));

const getSpecificMetaData = (
  comments: string[],
  startsWith: string,
  config: ICsvConfig = csvConfig,
): string[] =>
  (comments.find((row: string) => row.startsWith(startsWith)) as string)
    .split(config.fieldDelimiter)
    .slice(1);

const getRows = (csv: string, config: ICsvConfig = csvConfig): string[] =>
  csv
    .split(config.rowDelimiter)
    .slice(1)
    .filter((row) => !row.includes(config.commentIdentifier));

const getSingleRow = (
  row: string,
  config: ICsvConfig = csvConfig,
): string[] => {
  if (row.includes(config.multivalueEnclosure)) {
    const multivalueStatements = row
      .split(config.multivalueEnclosure)
      .slice(1, -1)
      .filter((item, index) => index % 2 == 0);
    multivalueStatements.forEach((multivalue) => {
      const replacement = multivalue.replaceAll(
        config.fieldDelimiter,
        config.multivalueDelimiter,
      );
      row = row.replace(multivalue, replacement);
    });
    return row
      .replaceAll(config.multivalueEnclosure, "")
      .split(config.fieldDelimiter);
  } else return row.split(config.fieldDelimiter);
};

const isMultiValue = (
  dataCell: string,
  config: ICsvConfig = csvConfig,
): boolean => dataCell.includes(config.multivalueDelimiter);

const getMultiValue = (
  dataCell: string,
  config: ICsvConfig = csvConfig,
): string[] =>
  dataCell.split(config.multivalueDelimiter).map((item) => item.trim());

type CsvRow = Record<string, string[]>;

const csvToArrayOfObjects = (
  content: string,
  config: ICsvConfig = csvConfig,
): CsvRow[] => {
  const array: CsvRow[] = [];
  const comments = getComments(content, config);
  const headers = getSpecificMetaData(comments, "#header", config);
  getRows(content, config)
    .filter((row: string) => row.trim().length > 1)
    .map((row: string) => {
      const rowContainer: CsvRow = {};
      getSingleRow(row, config).map((data, index) => {
        const dataContainer = [];
        isMultiValue(data, config)
          ? getMultiValue(data, config).forEach((dataCell) =>
              dataContainer.push(dataCell),
            )
          : dataContainer.push(data);
        rowContainer[headers[index]] = dataContainer;
      });
      array.push(rowContainer);
    });
  return array;
};

export {
  csvConfig,
  type CsvRow,
  getComments,
  getSpecificMetaData,
  csvToArrayOfObjects,
};
