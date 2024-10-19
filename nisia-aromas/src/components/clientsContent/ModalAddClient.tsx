import { useForm } from "react-hook-form";
import Modal from "../modal/Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface IClientAdd {

    nome: string,
    rua: string,
    numero: string,
    telefone: string,
    bairro: string,
    cidade: string
    uf: string
}

const ModalAddClient = ({ setIsOpen, zIndex }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, zIndex?: number }) => {

    const schema = z.object({
        nome: z.string().min(2, 'Nome inválido'),
        rua: z.string().min(1, 'Rua não pode ser vazia'),
        bairro: z.string().min(1, 'Bairro não pode ser vazio'),
        telefone: z.string().min(9, 'Telefone precisa ter no mínimo 9 dígitos'),
        numero: z.string().min(1, 'Número não pode ser vazio'),
        cidade: z.string().min(3, 'Cidade inválida'),
        uf: z.string().length(2, 'Formato inválido de UF')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <>
            <Modal zIndex={zIndex}>
                <div className={`bg-white w-[700px] max-w-full rounded text-primary shadow-lg drop-shadow-lg p-3 flex flex-col`}>
                    <h2 className="text-2xl font-medium my-2">Novo cliente</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full items-center" action="">
                        <div className="flex flex-row flex-wrap w-full gap-3">
                            <div className="flex flex-col">
                                <label htmlFor="">Nome completo</label>
                                <input {...register('nome')} className="border p-1 rounded" type="text" name="nome" id="nome" />
                                {errors.nome && <p className="text-sm text-red-400">{errors.nome.message as string}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="">Telefone</label>
                                <input {...register('telefone')} className="border p-1 rounded" type="text" name="telefone" id="telefone" />
                                {errors.telefone && <p className="text-sm text-red-400">{errors.telefone.message as string}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="">Rua</label>
                                <input {...register('rua')} className="border p-1 rounded" type="text" name='rua' id='rua' />
                                {errors.rua && <p className="text-sm text-red-400">{errors.rua.message as string}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="">Bairro</label>
                                <input {...register('bairro')} className="border p-1 rounded" type="text" name="bairro" id="bairro" />
                                {errors.bairro && <p className="text-sm text-red-400">{errors.bairro.message as string}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="">Numero</label>
                                <input {...register('numero')} className="border p-1 rounded" type="text" name="numero" id="numero" />
                                {errors.numero && <p className="text-sm text-red-400">{errors.numero.message as string}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="">Cidade</label>
                                <input {...register('cidade')} className="border p-1 rounded" type="text" name='cidade' id='cidade' />
                                {errors.cidade && <p className="text-sm text-red-400">{errors.cidade.message as string}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="">UF</label>
                                <input {...register('uf')} className="border p-1 rounded" type="text" name='uf' id='uf' />
                                {errors.uf && <p className="text-sm text-red-400">{errors.uf.message as string}</p>}
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-end gap-2">
                            <button type="button" onClick={() => setIsOpen(false)} className="p-2 rounded">Cancelar</button><button className="p-2 rounded">Adicionar</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>);
}

export default ModalAddClient;