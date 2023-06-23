import { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  // const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFetchedData = async () => {
    try {
      setLoading(false);
      let fetchedUrl = await axios(url);
      setData(fetchedUrl.data);
      // setData2(fetchedUrl.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFetchedData();
  }, []);

  return { data, loading };
};

export default UseFetch;
