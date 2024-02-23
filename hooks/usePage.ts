import { Dispatch, SetStateAction, useMemo, useRef } from "react";
import { DataType } from "utils/schema/data";

interface IPage {
  index: number;
  count: number;
  capacity: number;
}

const usePage = (results: DataType[], capacity: number) => {
  const page = useRef<IPage>({
    index: 1,
    count: 0,
    capacity,
  });
  const actions = useMemo(
    () => ({
      viewPage: (
        pageIndex: number,
        setPaginated: Dispatch<SetStateAction<DataType[]>>
      ) => {
        page.current.index = pageIndex;
        page.current.count = actions.getNumberOfPages();
        setPaginated(actions.paginate());
      },
      getNumberOfPages: () =>
        results.length % page.current.capacity == 0
          ? results.length / page.current.capacity
          : Math.floor(results.length / page.current.capacity) + 1,
      paginate: () =>
        results?.filter(
          (item, index) =>
            (page.current.index - 1) * page.current.capacity <= index &&
            index < page.current.index * page.current.capacity
        ),
    }),
    [results, page]
  );
  return { page: page.current, actions };
};

export default usePage;
