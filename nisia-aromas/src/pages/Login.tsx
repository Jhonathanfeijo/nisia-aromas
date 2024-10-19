import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod'


const Login = () => {

    const schema = z.object({
        email: z.string().min(1, 'Email não pode ser vazio').email('Formato de email inválido'),
        senha: z.string().min(6, 'Senha precisa ter no minimo 6 caracteres')
    })


    const [canSeePassword, setCanSeePasswowrd] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });


    const postLogin = (data: any) => {
        console.log(data);
    }

    return (<>
        <div className="bg-primary/80 w-screen h-screen flex items-center justify-center">
            <div className="flex items-center justify-center w-full h-full">

                <div className="w-[350px] h-[400px] max-w-full max-h-full bg-white text-secondary select-none bg-opacity-90 rounded-lg drop-shadow-lg shadow-lg flex flex-col items-center justify-center px-2 py-4 slide-in">
                    <h2 className="text-3xl font-medium mt-2">Nisia</h2>
                    <h3 className="text-lg">Aromas e Essências</h3>
                    <form onSubmit={handleSubmit(postLogin)} className="flex flex-col w-full px-3 text-secondary font-medium mt-5" action="">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-row max-w-full gap-1 pb-1 items-end border-b border-primary">
                                <Mail strokeWidth={'1.2px'} width={'25px'} />
                                <input {...register('email')} placeholder="E-mail" className="rounded  bg-transparent flex-1" id="email" name="email" type="text" />
                            </div>
                            {errors.email && <p className="text-sm text-red-400">{errors.email.message as string}</p>}
                            <div className="flex w-full flex-row gap-1 pb-1 items-end border-b border-primary mt-4">
                                <Lock strokeWidth={'1.2px'} width={'25px'} />
                                <input {...register('senha')} placeholder="Senha" className="rounded  bg-transparent flex-1" id="senha" name="senha" type={canSeePassword ? 'text' : 'password'} />
                                <div onClick={() => setCanSeePasswowrd((prev) => !prev)} className={`${canSeePassword ? '-rotate-180' : ''} opacity-50 hover:cursor-pointer duration-300 px-1`}>
                                    {canSeePassword ? <Eye width={'20px'} /> : <EyeOff width={'20px'} />}
                                </div>
                            </div>
                            {errors.senha && <p className="text-sm text-red-400">{errors.senha.message as string}</p>}
                        </div>
                        { }
                        <span className="my-2 hover:underline duration-200 hover:mx-1 hover:cursor-pointer text-sm w-max">Esqueceu sua senha? Clique aqui</span>
                        <button className="p-2 bg-primary text-white hover:opacity-90 my-3 rounded">Logar</button>
                    </form>

                </div>
            </div>
        </div>
    </>);
}

export default Login;