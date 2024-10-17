import { useState } from "react";
import Layout from "../components/layout/Layout";
import HomeContent from "../components/layout/homeContent/HomeContent";

const Home = () => {
  const [headerOption, setHeaderOption] = useState<string>("home");
  return (
    <>
      <Layout setHeaderOption={setHeaderOption}>
        <div className="w-full h-full bg-white">
          {headerOption === 'home' && <HomeContent />}
        </div>
      </Layout>
    </>
  );
};

export default Home;
