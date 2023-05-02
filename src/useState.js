import React, {useState} from "react";

export default function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(["ab", "cd"]);
  const handleChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const handleClick = () => {
    if (name.trim().length !== 0) {
      setList([...list, name]);

      setName("");
    }
  };

  const handleDelete = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div>
      <input onChange={handleChange} value={name}></input>
      <button onClick={handleClick}>confirm</button>
      <ul>
        {list.map((item, index) => (
          <div key={item}>
            <li key={item}>{item}</li>
            <button onClick={() => handleDelete(index)}>delete</button>
          </div>
        ))}
      </ul>
      {!list.length && <p>No task to do</p>}
    </div>
  );
}
