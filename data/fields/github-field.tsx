import { Format } from "utils/schema/data";
import ILinkProperty from "utils/schema/properties/link-property.interface";
import config from "../config";
import linkField from "./link-field";
import GithubIcon from "public/icons/social/github.svg";
import CodegeeksIcon from "public/icons/codegeeks/codegeeks-icon.svg";

const githubField: ILinkProperty = {
  ...linkField,
  icon: async (data) =>
    (await fetch(`${config.url}/collections/${Format.Companions}/${data}`)).ok
      ? {
          inContainer: <CodegeeksIcon className="h-auto w-10 fill-slate-600" />,
          inForm: <CodegeeksIcon className="h-auto w-10 fill-slate-600" />,
          inFilter: <CodegeeksIcon className="h-auto w-10 fill-slate-600" />,
        }
      : {
          inContainer: <GithubIcon className="h-auto w-6 fill-slate-600" />,
          inForm: <GithubIcon className="h-auto w-6 fill-slate-600" />,
          inFilter: <GithubIcon className="h-auto w-6 fill-slate-600" />,
        },
  imageSource: function (data) {
    return `https://github.com/${data}.png`;
  },
  isValid: async (data) => (await fetch(`https://github.com/${data}`)).ok, //call user api!
  dataTransform: async (data) =>
    (await fetch(`${config.url}/collections/${Format.Companions}/${data}`)).ok
      ? `${config.url}/collections/${Format.Companions}/${data}`
      : `https://github.com/${data}`,
};

export default githubField;
