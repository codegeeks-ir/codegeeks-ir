import PhoneIcon from "public/icones/phone.svg";
import ILinkProperty from "../../schema/properties/link-property.interface";
import linkField from "./link-field";

const phoneField: ILinkProperty = {
  ...linkField,
  icon: (data) => ({
    inContainer: <PhoneIcon className="h-auto w-6 fill-slate-600" />,
    inForm: <PhoneIcon className="h-auto w-6 fill-slate-600" />,
    inFilter: <PhoneIcon className="h-auto w-6 fill-slate-600" />,
  }),
  isValid: function (data) {
    return (
      data.startsWith("+98") || data.startsWith("09") || data.startsWith("04")
    );
  }, //match phone number!
  dataTransform: (data) => `tel:${data}`,
};

export default phoneField;
