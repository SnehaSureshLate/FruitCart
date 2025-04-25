import { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setData(result.slice(0, 5));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.id}:{item.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default FetchData;
