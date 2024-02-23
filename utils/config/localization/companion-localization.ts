import { LocalizationType } from "utils/schema/localization.type";
import ICompanion from "utils/schema/data/companion.interface";
import { Format } from "utils/schema/data";

const companionLocalization: LocalizationType<Format.Companions, ICompanion> = {
  format: Format.Companions,
  locals: {
    slug: {
      global: {
        en: { name: "slug", description: "The slug of the companion" },
        fa: { name: "عنوان انگلیسی", description: "عنوان انگلیسی مطلب" },
      },
    },
    name: {
      global: {
        en: { name: "name", description: "The name of companion" },
        fa: { name: "نام", description: "نام همراه انجمن" },
      },
    },
    position: {
      global: {
        en: { name: "position", description: "The position of companion" },
        fa: { name: "موقعیت شغلی", description: "موقعیت شغلی همراه انجمن" },
      },
    },
    excerpt: {
      global: {
        en: { name: "excerpt", description: "The excerpt of the companion" },
        fa: { name: "چکیده", description: "چکیده معرفی همراه انجمن" },
      },
    },
    githubID: {
      global: {
        en: { name: "github", description: "The github of the companion" },
        fa: { name: "گیتهاب", description: "گیتهاب همراه انجمن" },
      },
    },
  },
};

export default companionLocalization;
