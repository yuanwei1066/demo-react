// import {Component} from "react";

//class components

// export default class Search extends Component {
//   render() {
//     const {name, handleClick, handleChange} = this.props;
//     return (
//       <div>
//         <p>{name}</p>
//         <button onClick={handleClick}>Click me</button>
//         <br></br>
//         <input
//           className="search-box"
//           type="search"
//           placeholder="search it"
//           onChange={handleChange}
//         ></input>
//         <button>Search</button>
//       </div>
//     );
//   }
// }

//functional components
import "./index.style.css";
export default function Search({name, handleClick, handleChange}) {
  return (
    // <p>{name}</p>
    // <button onClick={handleClick}>Click me</button>
    // <br></br>
    <input
      className="search-box"
      type="search"
      placeholder="search it"
      onChange={handleChange}
    ></input>
  );
}
