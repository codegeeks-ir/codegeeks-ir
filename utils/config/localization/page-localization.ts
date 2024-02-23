import { LocalizationType } from "utils/schema/localization.type";
import IPage from "utils/schema/data/page.interface";
import { Format } from "utils/schema/data";

const pageLocalization: LocalizationType<Format.Page, IPage> = {
  format: Format.Page,
  locals: {
    slug: {
      global: {
        en: { name: "slug", description: "The slug of the page" },
        fa: { name: "عنوان انگلیسی", description: "عنوان انگلیسی مطلب" },
      },
    },
    title: {
      global: {
        en: { name: "title", description: "The title of the page" },
        fa: { name: "عنوان", description: "عنوان صفحه" },
      },
    },
    excerpt: {
      global: {
        en: { name: "excerpt", description: "The excerpt of the page" },
        fa: { name: "چکیده", description: "چکیده صفحه" },
      },
    },
    description: {
      global: {
        en: { name: "description", description: "The description of the page" },
        fa: { name: "شرح مختصر", description: "شرح مختصر صفحه" },
      },
    },
    heading: {
      global: {
        en: { name: "heading", description: "The heading of the post" },
        fa: { name: "سربرگ", description: "سربرگ صفحه" },
      },
    },
  },
};

export default pageLocalization;
