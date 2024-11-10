import {
  ChartNoAxesColumn,
  LogOut,
  PackageSearch,
  ShoppingCart,
  UsersRound,
  Wallet,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from '../../assets/logo/Nisia.svg'

const Header = ({
  setHeaderOption,
}: {
  setHeaderOption: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const navigate = useNavigate();
  const [adminOpen, setAdminOpen] = useState(false);
  const [gestaoOpen, setGestaoOpen] = useState(false);

  const logOut = () => {
    navigate("/login");
  };

  return (
    <header className="bg-primary text-white select-none w-full shadow rounded-b drop-shadow-lg min-h-[50px] py-3 flex flex-row justify-between items-center max-[340px]:px-2 px-5 md:px-[5rem] xl:px-[14rem] 2xl:px-[450px]">
      <div
        onClick={() => setHeaderOption("home")}
        className="text-2xl font-medium flex flex-col items-center hover:cursor-pointer text-center hover:opacity-80"
      >
        <img className="w-24" src={logo} alt="" />
        <span className="text-sm">Aromas e Essências</span>
      </div>
      <div className="flex flex-row gap-5 lg:gap-10 items-center justify-between relative">
        <div
          className="relative"
          onMouseEnter={() => setAdminOpen(true)}
          onMouseLeave={() => setAdminOpen(false)}
        >
          <div className="flex flex-row items-center gap-1 duration-[250ms] cursor-pointer">
            <ChartNoAxesColumn />
            <span className="max-[600px]:hidden">Administração</span>
          </div>
          {adminOpen && (
            <div className="absolute z-[10000] left-0 bg-white text-primary border rounded shadow-md font-medium">
              <div
                className="px-4 py-2 hover:bg-gray-100 flex flex-row gap-2 hover:cursor-pointer"
                onClick={() => setHeaderOption("estoque")}
              >
                <PackageSearch />
                <span>Estoque</span>
              </div>
              <div
                className="px-4 py-2 hover:bg-gray-100 flex flex-row gap-2 hover:cursor-pointer"
                onClick={() => setHeaderOption("estoque")}
              >
                <UsersRound />
                <span>Usuários</span>
              </div>
            </div>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={() => setGestaoOpen(true)}
          onMouseLeave={() => setGestaoOpen(false)}
        >
          <div className="flex flex-row items-center gap-1 duration-[250ms] cursor-pointer">
            <PackageSearch />
            <span className="max-[600px]:hidden">Gestão</span>
          </div>
          {gestaoOpen && (
            <div className="absolute left-0 bg-white text-primary border rounded shadow-md font-medium">
              <div
                className="px-4 py-2 hover:bg-gray-100 flex flex-row gap-2 hover:cursor-pointer"
                onClick={() => setHeaderOption("estoque")}
              >
                <Wallet />
                <span>Caixa</span>
              </div>
              <div
                className="px-4 py-2 hover:bg-gray-100 flex flex-row gap-2 hover:cursor-pointer"
                onClick={() => setHeaderOption("estoque")}
              >
                <UsersRound />
                <span>Clientes</span>
              </div>
              <div
                className="px-4 py-2 hover:bg-gray-100 flex flex-row gap-2 hover:cursor-pointer"
                onClick={() => setHeaderOption("estoque")}
              >
                <ShoppingCart />
                <span>Pedidos</span>
              </div>
            </div>
          )}
        </div>

        <nav
          onClick={logOut}
          className="flex flex-row items-center gap-1 duration-200 cursor-pointer"
        >
          <LogOut />
          <span className="max-[600px]:hidden">Sair</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
