import {useState} from "react";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState(["aa", "bb", "cc"]);

  const handleChange = (e) => {
    // console.log(e.target.value);

    setText(e.target.value);
  };

  const handleClick = () => {
    if (text.trim().length !== 0) setList([...list, text]);
  };

  const handleDelete = (index) => {
    let newList = [...list];
    //dont get it splice
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>confirm</button>
      {list.map((v, i) => {
        return (
          <div key={i}>
            <li>{v}</li>
            <button onClick={() => handleDelete(i)}>delete</button>
          </div>
        );
      })}
      {!list.length && <p>No tasks to do</p>}
    </div>
  );
}
