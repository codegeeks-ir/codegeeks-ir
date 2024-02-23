import { LocalizationType } from "utils/schema/localization.type";
import IChallenge from "utils/schema/data/challenge.interface";
import { Format } from "utils/schema/data";

const challengeLocalization: LocalizationType<Format.Challenges, IChallenge> = {
  format: Format.Challenges,
  locals: {
    slug: {
      global: {
        en: { name: "slug", description: "The slug of the challenge" },
        fa: { name: "عنوان انگلیسی", description: "عنوان انگلیسی مطلب" },
      },
    },
    title: {
      global: {
        en: { name: "title", description: "The title of the challenge" },
        fa: { name: "عنوان", description: "عنوان چالش" },
      },
    },
    excerpt: {
      global: {
        en: { name: "excerpt", description: "The excerpt of the challenge" },
        fa: { name: "چکیده", description: "چکیده چالش" },
      },
    },
    score: {
      global: {
        en: { name: "score", description: "The score of the challenge" },
        fa: { name: "امتیاز", description: "امتیاز چالش" },
      },
    },
    date: {
      global: {
        en: {
          name: "date",
          description: "The date on which the challenge was modified",
        },
        fa: { name: "تاریخ", description: "تاریخ آخرین ویرایش چالش" },
      },
    },
  },
};

export default challengeLocalization;
