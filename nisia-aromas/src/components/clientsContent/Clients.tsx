import { Plus, Search, UserRoundPen, UserRoundPlus } from "lucide-react";
import { useEffect, useState } from "react";
import ModalAddClient from "./ModalAddClient";
import { baseUrl } from "../../api/Api";
import loading from "../../assets/gifs/loading.webp";

export interface IClient {
  id?: number;
  nomeCliente: string;
  telefone: string;
  dataNascimento: string;
  endereco: {
    rua: string;
    numero: string;
    bairro: string;
    cep: string;
    complemento?: string;
    uf: string;
    cidade: string;
  };
}

const Clients = () => {
  const [isAddClientOpen, setIsAddClientOpen] = useState(false);
  const [statusData, setStatusData] = useState<string>("loading");
  const [clients, setClients] = useState<IClient[]>();
  const [clientFilter, setClientFilter] = useState<string>("");

  const headers: (keyof IClient)[] = ["nomeCliente", "telefone"];

  useEffect(() => {
    getClients();
  }, [clientFilter]);

  const getClients = async () => {
    setStatusData("loading");
    await baseUrl
      .get("/cliente")
      .then((json) => {
        console.log("deu certo", json);
        let clientsFiltered = json.data;
        if (clientsFiltered.length > 0)
          clientsFiltered = clientsFiltered.filter((client: IClient) =>
            clientFilter === ""
              ? true
              : client.nomeCliente &&
                client.nomeCliente.toLowerCase() === clientFilter.toLowerCase()
          );
        setClients(clientsFiltered);
        setStatusData("sucess");
      })
      .catch((err) => {
        console.log(err);
        setStatusData("failed");
      });
  };

  return (
    <>
      <div className="w-full h-full flex flex-col bg-white rounded  slide-in">
        <h2 className="text-4xl font-medium text-primary my-5 md:my-10">
          Clientes
        </h2>
        <main className="flex-1 w-full flex flex-col items-center gap-4">
          <div className="flex flex-row w-full sm:w-auto items-center border-2 justify-center px-4 rounded-full overflow-hidden">
            <input
              value={clientFilter}
              onChange={(e) => setClientFilter(e.target.value)}
              className="p-2 w-[400px]  max-w-full"
              placeholder="Digite para pesquisar"
              type="text"
            />
            <div className="text-primary">
              <Search />
            </div>
          </div>
          {statusData === "loading" && <img className="w-[200px]" src={loading}></img>}
          {statusData === "sucess" && (
            <>
              <div className="flex flex-row gap-3 w-full">
                <div className="flex flex-row w-full justify-between items-center">
                  <div
                    onClick={() => setIsAddClientOpen(true)}
                    className="self-end"
                  >
                    <button className="bg-primary p-2 rounded hover:bg-opacity-80 text-white flex flex-row items- gap-2">
                      <UserRoundPlus />
                      <span className="font-medium text-lg">
                        Cadastrar cliente
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                <table className="w-full shadow text-secondary">
                  <thead className="w-full bg-primary text-white rounded overflow-hidden">
                    <tr>
                      <th></th>
                      <th className="py-2 text-left">Nome</th>
                      <th className="py-2 text-left">Telefone</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients && (
                      <>
                        {clients.length > 0 && (
                          <>
                            {clients.map((client: IClient, index: number) => {
                              console.log(client);
                              return (
                                <tr key={client.id}>
                                  <td className="p-3">
                                    <span>{index + 1}</span>
                                  </td>
                                  {headers.map((header) => (
                                    <td key={header}>
                                      <span>
                                        {client[header] as string | number}
                                      </span>
                                    </td>
                                  ))}
                                  <td className="flex items-center justify-end p-2">
                                    <button className="bg-primary text-white px-2 py-1 rounded hover:opacity-80">
                                      <UserRoundPen />
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </>
                        )}
                      </>
                    )}
                  </tbody>
                </table>
                {clients?.length === 0 && (
                  <>
                    <div className="p-2">
                      <span className="p-2 w-full font-medium text-primary text-lg">
                        Não há clientes cadastrados
                      </span>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </main>
      </div>
      {isAddClientOpen && (
        <ModalAddClient zIndex={100} setIsOpen={setIsAddClientOpen} />
      )}
    </>
  );
};

export default Clients;
