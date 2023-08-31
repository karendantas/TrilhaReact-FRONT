import {useForm} from 'react-hook-form';
import * as S from './formstyle'
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";



//criando estrutura de dados pegando informações do data
const createUserFormSchema = z.object ({
    name: z.string().nonempty('Nome é obrigatório'),
    email:z.string().nonempty('Email é obrigatrório').email('Email Inválido'),
    login:z.string().nonempty('Login é obrigatório'),
    password:z.string().nonempty('Senha é obrigatória').min(6,'A senha deve possuir no minimo 6 caracteres'),

})

//determindo a tipagem dos campos com base no Schema
type FormProps = z.infer<typeof createUserFormSchema>

export const Form = () => {

    const { handleSubmit,
            register, 
            formState:{errors}} = useForm<FormProps>({
        resolver: zodResolver(createUserFormSchema)
    });

    function createUser(data:FormProps){
        console.log({data})
    }
    
    return (
        
        <S.Forms>
            <form onSubmit={handleSubmit(createUser)}>
                <S.Container>
                <h3> Cadastre-se </h3>
                
                    <S.groupForm>
                        <input type="text" {...register('name')}  placeholder="Nome"/>
                        {errors.name && <span>{errors.name.message}</span>}
                    </S.groupForm>

                    <S.groupForm>
                        <input type="email" {...register('email')} placeholder="Email" />
                        {errors.email && <span>{errors.email.message}</span>}
                    </S.groupForm>

                    <S.groupForm>
                        <input type="text" {...register('login')} placeholder="Login" />
                        {errors.login && <span>{errors.login.message}</span>}
                    </S.groupForm>

                    <S.groupForm>
                        <input type="password" {...register('password')} placeholder = "Sua senha" />
                        {errors.password && <span>{errors.password.message}</span>}
                    </S.groupForm>
                    <select>
                            <option defaultValue=""> Selecione um jogo</option>
                            <option value="leagueoflegends">League of Legends</option>
                            <option value="valorant">Valorant</option>
                            <option value="CsGo">CsGo</option>
                            <option value="Fortinite">Fortinite</option>
                    </select>
                
                     <button type="submit">Confirmar</button>
                </S.Container>
            </form>
        </S.Forms>
       
    )
}