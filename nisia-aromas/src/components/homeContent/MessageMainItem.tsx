import { CheckCheck, X } from "lucide-react";

export const OkayMainItem = ({ message }: { message: string }) => {
    return (

        <div className="flex flex-row items-center text-green-600 gap-1">
            <CheckCheck strokeWidth={'3px'}/>
            <h3 className=" font-bold text-white">{message}</h3>
        </div>
    );
}

export const AlertMainItem = ({ message }: { message: string }) => {
    return (

        <div className="flex flex-row items-center text-red-600 gap-1">
            <X strokeWidth={'3px'}/>
            <h3 className=" font-bold text-white">{message}</h3>
        </div>
    );
}
