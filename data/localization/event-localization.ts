import { LocalizationType } from "utils/schema/localization.type";
import IEvent from "utils/schema/data/event.interface";
import { Format } from "utils/schema/data";

const eventLocalization: LocalizationType<Format.Events, IEvent> = {
  format: Format.Events,
  locals: {
    slug: {
      global: {
        en: { name: "slug", description: "The slug of the event" },
        fa: { name: "عنوان انگلیسی", description: "عنوان انگلیسی مطلب" },
      },
    },
    title: {
      global: {
        en: { name: "title", description: "The title of the event" },
        fa: { name: "عنوان", description: "عنوان رویداد" },
      },
    },
    excerpt: {
      global: {
        en: { name: "excerpt", description: "The excerpt of the event" },
        fa: { name: "چکیده", description: "چکیده رویداد" },
      },
    },
    lecturer: {
      global: {
        en: {
          name: "lecturer",
          description: "The lecturer of the event",
        },
        fa: { name: "ارائه‌دهنده", description: "ارائه‌دهنده رویداد" },
      },
    },
    date: {
      global: {
        en: {
          name: "date",
          description: "The date on which the event will be held",
        },
        fa: { name: "تاریخ", description: "تاریخ برگزاری رویداد" },
      },
    },
    location: {
      global: {
        en: { name: "location", description: "The location of the event" },
        fa: { name: "مکان", description: "محل برگزاری رویداد" },
      },
    },
  },
};

export default eventLocalization;
