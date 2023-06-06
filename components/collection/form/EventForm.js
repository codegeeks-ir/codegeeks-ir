const EventForm = ({ content }) => (
  <form className="form">
    <input
      className="form-element"
      type="text"
      model={amir.title}
      placeholder="عنوان فارسی"
      required
    />
    <input
      className="form-element"
      type="text"
      model={amir.fileName}
      placeholder="عنوان انگلیسی"
      required
    />
    <input
      className="form-element"
      type="text"
      model={amir.lecturer}
      placeholder="مدرس"
      required
    />
    <input
      className="form-element"
      type="text"
      model={amir.bio}
      placeholder="بیو"
      required
    />
    <input
      className="form-element"
      type="date"
      model={amir.date}
      placeholder="تاریخ"
      required
    />
    <input
      className="form-element"
      type="time"
      model={amir.time}
      placeholder="ساعت"
      dir="ltr"
      required
    />
    <input
      className="form-element"
      type="text"
      model={amir.location}
      placeholder="مکان"
      required
    />
    <input
      className="form-element"
      type="text"
      model={amir.details}
      placeholder="جزئیات"
    />
    <a className="btn-primary" href={{ api }} OnClick={createEvent()}>
      افزودن رویداد
    </a>
  </form>
);

export default EventForm;
