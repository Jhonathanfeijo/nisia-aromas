import { CalendarDays, ChevronsRight, X } from "lucide-react";
import { formatDate } from "../../../util/FormatDate";
import { AlertMainItem, OkayMainItem } from "./MessageMainItem";

const HomeContent = () => {
    return (<div className="h-full w-full text-secondary flex flex-col items-center sm:items-start slide-in">
        <div className="w-max text-left my-5 md:my-10">
            <h1 className="text-4xl font-medium">Bem vinda, Nísia!</h1>
            <div className="flex flex-row gap-2 items-center text-secondary/70">
                <CalendarDays />
                <h3 className="text-2xl">{formatDate(new Date())}</h3>
            </div>
        </div>
        <main className="select-none flex flex-row flex-wrap w-full justify-center sm:justify-start items-center sm:items-start gap-2 sm:gap-5 md:gap-8">
            <div className="pedidos p-4 shadow-lg drop-shadow bg-primary rounded text-white my-5 flex flex-col hover:scale-[1.1] hover:ml-5 w-[270px] h-[150px] max-w-full duration-300 justify-between hover:cursor-pointer select-none">
                <h2 className="text-2xl font-medium">Pedidos</h2>
                <AlertMainItem message="Não há pedidos próximos" />
                <div className="text-sm font-bold flex flex-row items-center self-end"><span className="hover:underline hover:cursor-pointer">Ir para pedidos</span><ChevronsRight /></div>

            </div>
            <div className="clientes p-4 shadow-lg drop-shadow bg-primary rounded text-white my-5 flex flex-col hover:scale-[1.1] hover:ml-5 w-[270px] h-[150px] max-w-full duration-300 justify-between hover:cursor-pointer select-none">
                <h2 className="text-2xl font-medium">Clientes</h2>
                <OkayMainItem message="Há clientes aniversariantes" />
                <div className="text-sm font-bold flex flex-row items-center mt-4 self-end"><span className="hover:underline hover:cursor-pointer">Ir para clientes</span><ChevronsRight /></div>

            </div>
            <div className="estoques p-4 shadow-lg drop-shadow bg-primary rounded text-white my-5 flex flex-col hover:scale-[1.1] hover:ml-5 w-[270px] h-[150px] max-w-full duration-300 justify-between hover:cursor-pointer select-none">
                <h2 className="text-2xl font-medium">Estoques</h2>
                <OkayMainItem message="Seus produtos estão válidos"/>
                <div className="text-sm font-bold flex flex-row items-center mt-4 self-end"><span className="hover:underline hover:cursor-pointer">Ir para estoque</span><ChevronsRight /></div>

            </div>


        </main>
    </div>);
}

export default HomeContent;