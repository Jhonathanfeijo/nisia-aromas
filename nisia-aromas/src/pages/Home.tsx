import { useState } from "react";
import Layout from "../components/layout/Layout";

const Home = () => {
  const [headerOption, setHeaderOption] = useState<string>("home");
  return (
    <>
      <Layout setHeaderOption={setHeaderOption}>
        <div className="w-full h-full"></div>
      </Layout>
    </>
  );
};

export default Home;
