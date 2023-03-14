import { useEffect, useState } from "react";

export const useMovie = (url) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
  };
};
