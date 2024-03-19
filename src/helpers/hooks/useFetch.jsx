import { useEffect, useState } from "react";
import instance from "../../api";

const useFetch = (ENDPOINT) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true)
      instance(ENDPOINT)
        .then((response) => {
          if (response.data) {
            setData(response.data);
          }
          else {
            setData([]);
          }
        })
        .catch(() => {
          setError(true);
        }).finally(() => {
          if (data) {
            setLoading(false);
          }
        })
    }
    fetchData();

  }, [ENDPOINT]);

  return { data, loading, error };
};


export { useFetch };