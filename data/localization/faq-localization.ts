import { LocalizationType } from "utils/schema/localization.type";
import IFaq from "utils/schema/data/faq.interface";
import { Format } from "utils/schema/data";

const faqLocalization: LocalizationType<Format.Faqs, IFaq> = {
  format: Format.Faqs,
  locals: {
    slug: {
      global: {
        en: { name: "slug", description: "The slug of the faq" },
        fa: { name: "عنوان انگلیسی", description: "عنوان انگلیسی مطلب" },
      },
    },
    title: {
      global: {
        en: { name: "title", description: "The title of the FAQ" },
        fa: { name: "سوال متداول", description: "سوال متداول" },
      },
    },
    excerpt: {
      global: {
        en: { name: "excerpt", description: "The excerpt of the FAQ" },
        fa: { name: "چکیده", description: "چکیده سوال متداول" },
      },
    },
    categories: {
      global: {
        en: { name: "categories", description: "The categories of the FAQ" },
        fa: { name: "دسته‌بندی", description: "دسته‌بندی سوال" },
      },
    },
  },
};

export default faqLocalization;
