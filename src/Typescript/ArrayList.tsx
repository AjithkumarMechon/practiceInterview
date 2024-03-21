// import React from "react";

// type NameListElement =
//   | {
//       first: string,
//       last: string,
//     }
//   | {
//       firstak: string,
//       last: string,
//     };

// type PersonListArray = {
//   nameList: NameListElement[],
// };

// export default function ArrayList({ nameList }: PersonListArray) {
//   return (
//     <div>
//       {nameList.map((name, index) => {
//         const { first, firstak, last } = name;
//         return (
//           <h2 key={index}>
//             {first ?? firstak} {last}
//           </h2>
//         );
//       })}
//     </div>
//   );
// }
