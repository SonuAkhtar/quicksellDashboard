import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import axios from "axios";

function App() {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    await axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => setApiData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Home apiData={apiData} />
    </>
  );
}

export default App;
