import { useState, useEffect } from "react";

export default function useGetNoteTitles() {
  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const url = "/api/titles";

  useEffect(() => {
    async function fetchNoteTitles() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setTitles(data);
        } else {
          setError(true);
          console.error("HTTP error when fetching titles.");
        }
      } catch (error) {
        setError(true);
        console.error("Something went wrong when fetching titles.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchNoteTitles();
  }, []);

  return { titles, loading, error };
}
