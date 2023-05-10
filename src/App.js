// import React, {Component} from "react";
import React, {useEffect, useState} from "react";
import Search from "./components/search";
import Cardlist from "./components/cardlist";
//1. mapping的是filter过后的数组
//2. map前的list存放在state里面没有改变 不一定要setState
//3. filter的条件（search keywords）存入了state，并且setState re-render based on keywords
//4. debugging issue arrow function and .then((res) => res.json())为什么不一样？
//5. v.name mapping a nested object [{}]
//6. 传组件过去怎么写props 存取的名字在组件里面定义 例如searchField={searchField} 前面的为定义名字
//7 重写一遍function components，useEffect不懂

//a. class component

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       name: "xiaoming",
//       list: ["happy", "double happy", "triple happy"],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return {monsters: users};
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   handleChange = (e) => {
//     console.log(e.target.value);

//     let searchField = e.target.value.toLocaleLowerCase();

//     // const newList = [...initialList, filterList];

//     this.setState(() => {
//       return {searchField};
//     });
//   };

//   handleClick = () => {
//     this.setState({name: "hahahahahahhahahahah"});
//   };

//   render() {
//     const {name, searchField, monsters} = this.state;

//     return (
//       <div>
//         <Search
//           name={name}
//           handleClick={this.handleClick}
//           handleChange={this.handleChange}
//         ></Search>
//         <Cardlist searchField={searchField} monsters={monsters}></Cardlist>
//       </div>
//     );
//   }
// }

//b. functional component
export default function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filterList, setFilterList] = useState(monsters);
  const [name, setName] = useState("lualu");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    let searchList = monsters.filter((v) => {
      return v.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterList(searchList);
  }, [monsters, searchField]);

  const handleChange = (e) => {
    console.log(e.target.value);

    let searchFieldSting = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldSting);
    // const newList = [...initialList, filterList];
  };

  const handleClick = () => {
    setName("hahahahahahhahahahah");
  };

  return (
    <div>
      <Search
        name={name}
        handleClick={handleClick}
        handleChange={handleChange}
      ></Search>
      <Cardlist filterList={filterList}></Cardlist>
    </div>
  );
}
