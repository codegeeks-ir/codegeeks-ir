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

// const test = csvToArrayOfObjects(`استاد,شماره تماس,ایمیل
// اردلان قاسم زاده,04431980272,ardalanghasemzadeh@gmail.com
// امید بلوکی,04431980228,omid.speily@gmail.com
// جعفر طهمورث نژاد,04431980236,"j.tahmores@it.uut.ac.ir, tahmores@gmail.com"
// سارا السادات زمانی,,"SZamani925@gmail.com, S.Zamani@uut.ac.ir"
// فرید احمدی,04431980258,f.ahmadi@uut.ac.ir
// مجتبی مددیار,04433668880,mojtaba.madadyar@gmail.com
// مسعود تیموری,04431980300,masood.teymouri@gmail.com
// میر سامان تاجبخش,,mirsaman@gmail.com
// وحید سلوک,04431980258,v.solouk@it.uut.ac.ir
// وحید نصرالهی,04431980241,"v.nasrollahi@uut.ac.ir, vnasrollahi@gmail.com"
// پرویز رشیدی,04431980208,pr.rashidi@gmail.com
// # ارتباط با اساتید
// # دانشکده فناوری های صنعتی
// # گروه کامپیوتر`);
// console.log(test);
