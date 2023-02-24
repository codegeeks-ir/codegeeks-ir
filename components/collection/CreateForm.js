import CreateIcon from 'public/icones/create.svg';

export default function CreateForm({ content }) {
  return (
    <>
      <div>
        {/* <!-- Toggle collection create form --> */}
        <button className="btn-primary" onClick="showCreate = !showCreate">
          <CreateIcon className="icon"/>
        </button>
        {/* // <!-- Form for creating item --> */}
        {/* // {% include collection/create-form.html %} */}
      </div>
      <div
        id="#form"
        className="flex flex-col flex-wrap w-full 
          items-center justify-center"
        x-show="showCreate"
        x-transition
        x-data="form"
        formFor="collectionType"
        api="{{ site.api }}"
      >
        {/* <!-- Create event form --> */}
        <template x-if="collectionType == 'events'">
          <EventForm />
        </template>
      </div>
    </>
  );
}
