import { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const getFetchedData = async () => {
    let fetchedUrl = await axios(url);
    setData(fetchedUrl.data);
    setData2(fetchedUrl.data)
  };

  useEffect(() => {
    getFetchedData();
  }, []);

  return { data, data2 };
};

export default UseFetch;
