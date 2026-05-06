import { useEffect, useState } from "react";

const FetchDataEffects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const dataFound = await res.json();
        setData(dataFound);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return (
    <div>
      <h1>First post data</h1>
      {data.length >= 0 ? <h1>{data[0]?.title}</h1> : <h1>Loading...</h1>}
    </div>
  );
};

export default FetchDataEffects;
