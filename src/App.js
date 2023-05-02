import React, {Component} from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "xiaoming",
      list: ["happy", "double happy", "triple happy"],
      searchField: "",
    };
  }
  handleChange = (e) => {
    console.log(e.target.value);

    let searchField = e.target.value.toLocaleLowerCase();

    // const newList = [...initialList, filterList];

    this.setState(() => {
      return {searchField};
    });
  };

  handleClick = () => {
    this.setState({name: "hahahahahahhahahahah"});
  };

  render() {
    const {name, searchField} = this.state;
    const searchList = this.state.list.filter((v) => {
      return v.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div>
        <p>{name}</p>
        <button onClick={this.handleClick}>Click me</button>
        <br></br>
        <input
          className="search-box"
          type="search"
          placeholder="search it"
          onChange={this.handleChange}
        ></input>
        <button>Search</button>
        {searchList.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
      </div>
    );
  }
}
