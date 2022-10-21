import {useEffect, useState, useMemo} from 'react'
import axios from "axios";

const UseMemo = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/comments")
          .then((response) => {
            setData(response.data);
          });
      }, []);

    const findLongestName = (comment) => {
        if (!comment) return null;

        let longestName = "";

        for (let i = 0; i < comment.length; i++) {
            const name = comment[i].name;
            if (name.length > longestName.length) {
                longestName = name;
            }
        }

        console.log("longestName: ", longestName);

        return longestName;
    };

    const longestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div>
        <h1>UseMemo</h1>
        <p>{longestName}</p>
        <button
            onClick={() => {
            setToggle(!toggle);
            }}
        >
            {" "}
            Toggle
        </button>
        {toggle && <h1> toggle </h1>}
    </div>
  )
}

export default UseMemo;