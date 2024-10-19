import { useState } from "react";
import Layout from "../components/layout/Layout";
import HomeContent from "../components/homeContent/HomeContent";
import Clients from "../components/clientsContent/Clients";

const Home = () => {
  const [headerOption, setHeaderOption] = useState<string>("home");
  return (
    <>
      <Layout setHeaderOption={setHeaderOption}>
        <div className="w-full h-full py-5 rounded overflow-hidden bg-white">
          {headerOption === 'home' && <HomeContent setHeaderOption = { setHeaderOption} />}
          {headerOption === 'clients' && <Clients/>}
        </div>
      </Layout>
    </>
  );
};

export default Home;
