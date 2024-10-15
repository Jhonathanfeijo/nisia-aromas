import Header from "../header/Header";

const Layout = ({
  children,
  setHeaderOption,
}: {
  children: React.ReactNode;
  setHeaderOption: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <Header setHeaderOption={setHeaderOption} />
        <div className="max-[340px]:px-2 px-5 xl:px-[4rem] 2xl:px-[15rem] flex-1 w-full">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
