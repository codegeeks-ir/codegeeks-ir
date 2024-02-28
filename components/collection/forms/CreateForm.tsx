// "use client";
// import useFormables from "hooks/useFormables";
// import { Format } from "utils/schema/data";
// import FormFactory from "components/properties/form";

// interface IProps {
//   format: Format;
// }

// const Form = ({ format }: IProps) => {
//   const formables = useFormables(format);
//   return (
//     <form className="form">
//       <div className="flex w-full flex-row flex-wrap">
//         <div className="flex flex-col flex-wrap">
//           {formables.map((item) => (
//             <FormFactory
//               property={item.property}
//               local={item.local!}
//               key={item.local?.global.en.name}
//             />
//           ))}
//         </div>
//       </div>
//       <a
//         className="btn-primary mx-0 w-full md:w-48"
//         href={`${config.login}`}
//         onClick={() => createEvent({})}
//       >
//         ایجاد
//       </a>
//     </form>
//   );
// };

// export default Form;
