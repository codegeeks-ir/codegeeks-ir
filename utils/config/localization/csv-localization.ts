import { LocalizationType } from "utils/schema/localization.type";
import ICsv from "utils/schema/data/csv.interface";
import { Format } from "utils/schema/data";

const csvLocalization: LocalizationType<Format.Csv, ICsv> = {
  format: Format.Csv,
  locals: {
    slug: {
      global: {
        en: { name: "slug", description: "The slug of the table" },
        fa: { name: "عنوان انگلیسی", description: "عنوان انگلیسی مطلب" },
      },
    },
    title: {
      global: {
        en: { name: "title", description: "The title of the table" },
        fa: { name: "عنوان", description: "عنوان جدول" },
      },
    },
    header: {
      global: {
        en: { name: "header", description: "The header of the table" },
        fa: { name: "سربرگ", description: "سربرگ جدول" },
      },
    },
    type: {
      global: {
        en: {
          name: "type",
          description: "The type of each column in the table",
        },
        fa: { name: "نوع داده هر ستون", description: "نوع داده هر ستون" },
      },
    },
    show: {
      global: {
        en: { name: "show", description: "The visiblity state of the column" },
        fa: { name: "نمایش ستون", description: "نمایش ستون" },
      },
    },
    version: {
      global: {
        en: { name: "version", description: "The version of table" },
        fa: { name: "نسخه", description: "شماره ویرایش" },
      },
    },
    description: {
      global: {
        en: {
          name: "description",
          description: "The description of the table",
        },
        fa: { name: "شرح مختصر", description: "شرح مختصر جدول" },
      },
    },
    rows: {
      global: {
        en: {
          name: "data",
          description: "The table data",
        },
        fa: { name: "داده‌ها", description: "داده‌های جدول" },
      },
    },
    element: {
      global: {
        en: {
          name: "element",
          description:
            "The element type which the table will be viewed based on",
        },
        fa: {
          name: "المان",
          description: "نوع المان برای نمایش داده‌های جدول",
        },
      },
    },
    group: {
      global: {
        en: {
          name: "group by",
          description: "Group table data by specific column",
        },
        fa: {
          name: "گروه بندی براساس",
          description: "گروه بندی براساس ستونی از جدول",
        },
      },
    },
  },
};

export default csvLocalization;
