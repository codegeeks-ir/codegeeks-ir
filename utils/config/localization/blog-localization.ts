import { LocalizationType } from "utils/schema/localization.type";
import IBlog from "utils/schema/data/blog.interface";
import { Format } from "utils/schema/data";

const blogLocalization: LocalizationType<Format.Blog, IBlog> = {
  format: Format.Blog,
  locals: {
    slug: {
      global: {
        en: { name: "slug", description: "The slug of the post" },
        fa: { name: "عنوان انگلیسی", description: "عنوان انگلیسی مطلب" },
      },
    },
    title: {
      global: {
        en: { name: "title", description: "The title of the post" },
        fa: { name: "عنوان", description: "عنوان مطلب" },
      },
    },
    excerpt: {
      global: {
        en: { name: "excerpt", description: "The excerpt of the post" },
        fa: { name: "چکیده", description: "چکیده مطلب" },
      },
    },
    date: {
      global: {
        en: {
          name: "date",
          description: "The date on which the post was modified",
        },
        fa: { name: "تاریخ", description: "تاریخ آخرین ویرایش مطلب" },
      },
    },
    image: {
      global: {
        en: { name: "image", description: "The image of the post" },
        fa: { name: "تصویر", description: "تصویر مطلب" },
      },
    },
    categories: {
      global: {
        en: { name: "categories", description: "The categories of the post" },
        fa: { name: "دسته‌بندی", description: "دسته‌بندی مطلب" },
      },
    },
    description: {
      global: {
        en: { name: "description", description: "The description of the post" },
        fa: { name: "شرح مختصر", description: "شرح مختصر مطلب" },
      },
    },
    writer: {
      global: {
        en: {
          name: "writer",
          description: "The writer of the post",
        },
        fa: { name: "نویسنده", description: "نویسنده مطلب" },
      },
    },
  },
};

export default blogLocalization;
