import ISearch from "utils/schema/filters/search.interface";
import ISort from "utils/schema/filters/sort.interface";
import { PropertyType } from "utils/schema/properties";
import LinkIcon from "public/icons/link.svg";
import ILinkProperty from "utils/schema/properties/link-property.interface";

const linkField: ILinkProperty = {
  filters: {
    search: { priority: 4 } as ISearch,
    sort: { isAsscending: true } as ISort,
  },
  icon: (data) => ({
    inContainer: <LinkIcon className="h-auto w-6 fill-slate-600" />,
    inForm: <LinkIcon className="h-auto w-6 fill-slate-600" />,
    inFilter: <LinkIcon className="h-auto w-6 fill-slate-600" />,
  }),
  dataTransform: (data) =>
    data.startsWith("https://") ? data : `https://${data}`,
  isValid: function (data) {
    return data.startsWith("https://");
  },
  parse: function (data) {
    return this.isValid(data) ? data : "";
  },
  propertyType: PropertyType.Link,
};

export default linkField;
