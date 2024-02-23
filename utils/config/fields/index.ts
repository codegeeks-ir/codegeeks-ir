import { IProperty } from "utils/schema/properties";
import descriptionField from "./description-field";
import emailField from "./email-field";
import excerptField from "./excerpt-field";
import phoneField from "./phone-field";
import slugField from "./slug-field";
import titleField from "./title-field";
import scoreField from "./score-field";
import githubField from "./github-field";
import dateField from "./date-field";
import linkField from "./link-field";
import integerField from "./integer-field";
import timeField from "./time-field";
import selectField from "./select-field";
import imageField from "./image-field";
import checkField from "./check-field";
import chooseField from "./choose-field";

enum FieldType {
  Check = "check",
  Choose = "choose",
  Date = "date",
  Description = "description",
  Email = "email",
  Excerpt = "excerpt",
  Github = "github",
  Image = "image",
  Integer = "integer",
  Link = "link",
  Phone = "phone",
  Score = "score",
  Select = "select",
  Slug = "slug",
  Time = "time",
  Title = "title",
}

const fields: Record<FieldType, IProperty> = {
  [FieldType.Check]: checkField,
  [FieldType.Choose]: chooseField,
  [FieldType.Date]: dateField,
  [FieldType.Description]: descriptionField,
  [FieldType.Email]: emailField,
  [FieldType.Excerpt]: excerptField,
  [FieldType.Github]: githubField,
  [FieldType.Image]: imageField,
  [FieldType.Integer]: integerField,
  [FieldType.Link]: linkField,
  [FieldType.Phone]: phoneField,
  [FieldType.Score]: scoreField,
  [FieldType.Select]: selectField,
  [FieldType.Slug]: slugField,
  [FieldType.Time]: timeField,
  [FieldType.Title]: titleField,
};

export { FieldType };
export default fields;
