import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useAsyncError } from "react-router-dom";
import api from "./api/AxiosConfig";
import Layout from "./Layout";
import { Home, Cars } from "./components/pagesImport";

const App = () => {
  const [carsData, setCarsData] = useState();
  const [loading, setLoading] = useState(false);

  const getCarsData = async () => {
    setLoading(true);
    try {
      const response = await api.get("/cars/get");
      const data = response.data;
      setCarsData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCarsData();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/cars" element={<Cars carsData={carsData} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
