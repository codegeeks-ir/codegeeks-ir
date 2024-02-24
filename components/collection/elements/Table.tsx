import ContainerFactory from "components/properties/container";
import fields from "data/fields";
import ITableElement from "utils/schema/elements/table.interface";

const Table = ({ description, header, type, rows }: ITableElement["props"]) => {
  const isArrayEmpty = rows.length == 0 || rows == null || rows == undefined;
  return (
    <section className="overflow-x-scroll">
      <table className="horizontal-table">
        <caption className="caption">{description}</caption>
        <thead>
          <tr>
            {isArrayEmpty
              ? ""
              : header.map((title) => <th key={title}>{title}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} tabIndex={0}>
              {Object.values(row).map((dataCell, dataIndex) => (
                <td key={dataIndex} className="my-0 py-1">
                  <section className="flex flex-row flex-wrap">
                    {dataCell.map((item, itemIndex) => (
                      <ContainerFactory
                        key={itemIndex}
                        data={item}
                        field={fields[type[dataIndex]]}
                      />
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
