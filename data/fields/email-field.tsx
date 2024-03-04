import ILinkProperty from "utils/schema/properties/link-property.interface";
import linkField from "./link-field";
import EmailIcon from "public/icones/email.svg";

const emailField: ILinkProperty = {
  ...linkField,
  icon: (data) => ({
    inContainer: <EmailIcon className="h-auto w-6 fill-slate-600" />,
    inForm: <EmailIcon className="h-auto w-6 fill-slate-600" />,
    inFilter: <EmailIcon className="h-auto w-6 fill-slate-600" />,
  }),
  isValid: (data) => true, //match email!
  dataTransform: (data) => `mailto:${data}`,
};

export default emailField;
