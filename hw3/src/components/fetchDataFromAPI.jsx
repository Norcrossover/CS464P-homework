import axios from "axios";
import { useState, useEffect } from "react";

export default function FetchData() {
  const url = "https://cs464p564-frontend-api.vercel.app/api/countries";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountriesList = async () => {
      axios
        .get(url)
        .then((response) => {
          setLoading(true);
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error.messge);
          setError(error);
        });
    };

    fetchCountriesList();
  }, []);

  return { data, loading, error };
}
