
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { createContext, useEffect, useState } from "react";
import axios from "./axiosConfig";


import Section from "./Component/sectio/Section";
import Mac from "./Component/mac";
import Store from "./Component/store";
import Ipad from "./Component/ipad";
import Iphon from "./Component/iphon";
import Watch from "./Component/watch";
import Airpods from "./Component/airpods";
import Tv from "./Component/tv";
import Entertainment from "./Component/Entertainment";
import Accessories from "./Component/Accessories";
import Suport from "./Component/Suport";
import Vision from "./Component/vision";
import Four404 from "./Component/Four404";
import Share from "./Component/Share";



export const AppStat = createContext()

function App() {

  const token = localStorage.getItem("token")

  const { user, setuser } = useState({})

  const navigate = useNavigate();
  async function checkUser() {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      console.log(headers)
      setuser(data)
    } catch (error) {
      console.log(error.response)
      navigate("/login")
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AppStat.Provider value={{ user, setuser }}>

      <Routes>
        <Route path="/" element={<Share />}>
          <Route path="/" element={<Section />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="mac" element={<Mac />} />
          <Route path="store" element={<Store />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="iphon" element={<Iphon />} />
          <Route path="watch" element={<Watch />} />
          <Route path="vision" element={<Vision />} />
          <Route path="Airpods" element={<Airpods />} />
          <Route path="Tv" element={<Tv />} />
          <Route path="Entertainment" element={<Entertainment />} />
          <Route path="Accessories" element={<Accessories />} />
          <Route path="Suport" element={<Suport />} />

        </Route>
        <Route path="*" element={<Four404 />} />
      </Routes>
    </AppStat.Provider>
  );
}




export default App;
