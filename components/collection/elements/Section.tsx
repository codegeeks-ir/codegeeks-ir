import ContainerFactory from "components/properties/container";
import { CsvRow } from "lib/csv-to-array";
import { useMemo } from "react";
import fields from "data/fields";
import IRowsElement from "utils/schema/elements/rows.interface";

const Section = ({
  description,
  show,
  header,
  type,
  rows,
}: IRowsElement["props"]) => {
  const sections = useMemo(() => {
    const allSections = rows
      .map((item) => item[header[0]].join(";;;;"))
      .join(";;;;")
      .split(";;;;");
    return [...new Set(allSections)];
  }, [rows]);
  const newRows = useMemo(() => {
    type = type.slice(1);
    return sections.map((section) => ({
      section,
      rows: rows
        .filter((row) => row[header[0]]?.join(" ")?.includes(section))
        .map((row) => {
          const newRow = Object.assign(row);
          delete newRow[header[0]];
          return newRow;
        }),
    }));
  }, [rows, sections]);
  return (
    <section>
      <p>{description}</p>
      {newRows.map((section, sectionIndex) => (
        <section
          className="flex flex-row flex-wrap mb-4"
          key={sectionIndex}
          tabIndex={0}
        >
          <p className="w-full m-0">{section.section}</p>
          {(section.rows as CsvRow[]).map((row, rowIndex) => (
            <section key={rowIndex} tabIndex={0}>
              {Object.values(row).map((dataCell, dataIndex) => (
                <section key={dataIndex}>
                  {dataCell.map((item, itemIndex) => (
                    <ContainerFactory
                      key={itemIndex}
                      data={item}
                      field={fields[type[dataIndex]]}
                    />
                  ))}
                </section>
              ))}
            </section>
          ))}
        </section>
      ))}
    </section>
  );
};

export default Section;
