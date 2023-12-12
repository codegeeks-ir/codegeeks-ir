import { createEvent } from "lib/github-oauth/event-operations";
import { useRef } from "react";
import config from "utils/config";

const ProjectForm = ({}) => {
  const link = useRef(null);
  const category = useRef(null);
  return (
    <form className="form">
      <div className="flex w-full flex-row flex-wrap">
        <div className="flex flex-col flex-wrap">
          <input
            className="form-element"
            type="url"
            ref={link}
            placeholder="لینک پروژه"
            required
          />
          <input
            className="form-element"
            type="text"
            ref={category}
            placeholder="دسته‌بندی"
            required
          />
        </div>
      </div>
      <button
        className="btn-primary mx-0 w-full md:w-48"
        href={`${config.login}`}
        onClick={() => createEvent({})}
      >
        افزودن پروژه
      </button>
    </form>
  );
};

export default ProjectForm;
