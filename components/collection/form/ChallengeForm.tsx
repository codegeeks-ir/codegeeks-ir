import { createEvent } from "lib/github-oauth/event-operations";
import { useRef } from "react";
import config from "utils/config";

const ChallengeForm = ({}) => {
  const faTitle = useRef(null);
  const enTitle = useRef(null);
  const date = useRef(null);
  const time = useRef(null);
  const location = useRef(null);
  const details = useRef(null);
  return (
    <form className="form">
      <div className="flex w-full flex-row flex-wrap">
        <div className="flex flex-col flex-wrap">
          <input
            className="form-element"
            type="text"
            ref={faTitle}
            placeholder="عنوان فارسی"
            required
          />
          <input
            className="form-element"
            type="text"
            ref={enTitle}
            placeholder="عنوان انگلیسی"
            required
          />
          <input
            className="form-element"
            type="date"
            ref={date}
            placeholder="تاریخ"
            required
          />
          <input
            className="form-element"
            type="time"
            ref={time}
            placeholder="ساعت"
            dir="ltr"
            required
          />
          <input
            className="form-element"
            type="text"
            ref={location}
            placeholder="مکان"
            required
          />
        </div>
        <input
          className="form-content"
          type="text"
          ref={details}
          placeholder="جزئیات"
        />
      </div>
      <button
        className="btn-primary mx-0 w-full md:w-48"
        href={`${config.login}`}
        onClick={() => createEvent({})}
      >
        افزودن مسابقه
      </button>
    </form>
  );
};

export default ChallengeForm;
