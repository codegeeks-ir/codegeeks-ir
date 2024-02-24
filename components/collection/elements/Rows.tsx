import Accordion from "components/Accordion";
import { CsvRow } from "lib/csv-to-array";
import { FieldType } from "data/fields";
import ContainerFactory from "components/properties/container";
import fields from "data/fields";
import IRowsElement from "utils/schema/elements/rows.interface";

const getAccordionHeader = (row: CsvRow, show: boolean[]) =>
  Object.values(row)
    .filter((value, index) => show[index])
    ?.reduce((previous, current) => [...previous, ...current])
    ?.reduce((previous, current) => previous + " - " + current);

const Collapse = ({
  row,
  header,
  show,
  type,
}: {
  row: CsvRow;
  header: string[];
  show: boolean[];
  type: FieldType[];
}) => (
  <>
    {Object.values(row)
      .filter((value, index) => !show[index])
      .map((dataCell, dataIndex) => (
        <section
          key={dataIndex}
          className="flex flex-row flex-wrap 
           text-slate-600
           focus:bg-teal-400
          border border-solid border-slate-400 border-b-0 last:border-b
          text-sm 
          my-0"
        >
          <section
            className="px-2 ml-2 w-1/3 sm:w-1/3 md:w-1/6 xl:w-1/12  
          border border-solid border-slate-400 border-y-0 border-r-0
          "
          >{`${header[dataIndex]}`}</section>
          {dataCell.map((item) => (
            <ContainerFactory
              key={dataIndex}
              data={item}
              field={fields[type[dataIndex]]}
            />
          ))}
        </section>
      ))}
  </>
);

const Rows = ({
  description,
  show,
  header,
  type,
  rows,
}: IRowsElement["props"]) => {
  return (
    <section>
      <section className="caption">{description}</section>
      <section>
        {rows.map((row, rowIndex) => (
          <Accordion
            header={getAccordionHeader(row, show)}
            collapse={
              <Collapse
                row={row}
                header={header.filter((title, index) => !show[index])}
                show={show}
                type={type.filter((type, index) => !show[index])}
              />
            }
            isShowByDefault={false}
            key={rowIndex}
          />
        ))}
      </section>
    </section>
  );
};

export default Rows;
