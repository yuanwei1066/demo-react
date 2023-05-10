// import {Component} from "react";
// class components

import {Card} from "../card";
import "./index.style.css";
// export default class Cardlist extends Component {
//   render() {
//     const {searchField, monsters} = this.props;
//     const searchList = monsters.filter((v) => {
//       return v.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div>
//         {searchList.map((v, i) => {
//           return <li key={i}>{v.name}</li>;
//         })}
//       </div>
//     );
//   }
// }

//functional components
export default function Cardlist({filterList}) {
  // const searchList = monsters.filter((v) => {
  //   return v.name.toLocaleLowerCase().includes(searchField);
  // });

  return (
    <div className="card-list">
      {filterList.map((monster, index) => {
        return <Card monster={monster} index={index} />;
        // return <li key={i}>{v.name}</li>;
      })}
    </div>
  );
}
