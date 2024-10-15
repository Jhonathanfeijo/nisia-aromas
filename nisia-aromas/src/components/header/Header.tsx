import { Banknote, LogOut, PackageSearch, ShoppingCart, UsersRound, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const logOut = () =>{
        navigate('/login')
    }
    return (
        <header className="bg-primary text-white select-none w-full shadow rounded-b drop-shadow-lg min-h-[50px] flex flex-row justify-between items-center max-[340px]:px-2 px-5 xl:px-[4rem] 2xl:px-[15rem]">
            <div className="text-2xl font-medium flex flex-col items-center hover:cursor-pointer text-center hover:opacity-80"> <span>Nisia</span><span className="text-sm">Aromas e Essências</span></div>
            <div className="flex flex-row gap-5 lg:gap-10 items-center justify-between">
                <nav className="flex flex-row items-center gap-1 hover:pb-1 duration-[250ms] cursor-pointer"><UsersRound /><span className="max-[600px]:hidden">Clientes</span></nav>
                <nav className="flex flex-row items-center gap-1 hover:pb-1 duration-[250ms] cursor-pointer"><PackageSearch /> <span className="max-[600px]:hidden">Estoque</span></nav>
                <nav className="flex flex-row items-center gap-1 hover:pb-1 duration-[250ms] cursor-pointer"><ShoppingCart /> <span className="max-[600px]:hidden">Pedidos</span></nav>
                <nav className="flex flex-row items-center gap-1 hover:pb-1 duration-[250ms] cursor-pointer"><Wallet /> <span className="max-[600px]:hidden">Caixa</span></nav>
                <nav onClick={logOut} className="flex flex-row items-center gap-1 hover:pb-1 duration-200 cursor-pointer"><LogOut /> <span className="max-[600px]:hidden">Sair</span></nav>
            </div>
        </header>
    );
}

export default Header;