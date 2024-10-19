import { Plus, Search, UserRoundPen, UserRoundPlus } from "lucide-react";
import { useEffect, useState } from "react";
import ModalAddClient from "./ModalAddClient";

const Clients = () => {
    const [isAddClientOpen, setIsAddClientOpen] = useState(false);
    const [statusData, setStatusData] = useState<string>('loading');

    useEffect(() => {
    }, []);

    const getClients = async () => {

    }

    return (
        <>
            <div className="w-full h-full flex flex-col bg-white rounded  slide-in">
                <h2 className="text-4xl font-medium text-primary my-5 md:my-10">Clientes</h2>
                <main className="flex-1 w-full flex flex-col items-center gap-4">
                    <div className="flex flex-row gap-3 w-full">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className="flex flex-row items-center border-2 justify-center px-4 rounded-full overflow-hidden">
                                <input className="p-2 w-[400px]" placeholder="Digite para pesquisar" type="text" />
                                <div className="text-primary">
                                    <Search />
                                </div>
                            </div>
                            <div onClick={() => setIsAddClientOpen(true)} className="self-end"><button className="bg-primary p-2 rounded hover:bg-opacity-80 text-white flex flex-row items- gap-2">
                                <UserRoundPlus />
                                <span className="font-medium text-lg">Cadastrar cliente</span>
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <table className="w-full shadow-lg text-secondary">
                            <thead className="w-full bg-primary text-white rounded overflow-hidden">
                                <th><td className="py-2"></td></th>
                                <th><td className="py-2">Nome</td></th>
                                <th><td className="py-2">Email</td></th>
                                <th><td className="py-2">Avaliação</td></th>
                                <th><td className="py-2"></td></th>
                            </thead>
                            <tbody>
                                <tr className="text-secondary">
                                    <td className="p-3"><span>1</span></td>
                                    <td>Jhonathan</td>
                                    <td>jhonathan@gmail.com</td>
                                    <td>Boa</td>
                                    <td className="flex items-center justify-end p-2"><button className="bg-primary text-white px-2 py-1 rounded hover:opacity-80"><UserRoundPen /></button></td>
                                </tr>
                                <tr>
                                    <td className="p-3"><span>2</span></td>
                                    <td>Jhonathan</td>
                                    <td>jhonathan@gmaaaaaaasssssil.com</td>
                                    <td>Média</td>
                                    <td className="flex items-center justify-end p-2"><button className="bg-primary text-white px-2 py-1 rounded hover:opacity-80"><UserRoundPen /></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
            {isAddClientOpen && <ModalAddClient zIndex={100} setIsOpen={setIsAddClientOpen} />}
        </>
    );
}

export default Clients;