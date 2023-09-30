import * as S from "./homestyle"
import background from "/src/img/homeimg.png"
import { AiFillClockCircle, AiFillCalendar, AiTwotoneEnvironment} from "react-icons/ai";



export const Home = () => {

    return (
    <div>
        <S.Backgrounddiv style = {{backgroundImage: `url(${background})`}}>
            <S.homeContainer>
                <h1>E-SPORTS</h1>
                <S.p>Cadastre-se no maior campeonato de jogos da fenda do bikini!</S.p>
                <S.button >Increva-se</S.button>
            </S.homeContainer>
        </S.Backgrounddiv>
    
            <h2>Saiba mais sobre o evento</h2>
            
            <S.infoContainer>
                <S.infoGroup>
                    <AiFillClockCircle/>
                    <p>As 14:30 horário de Brasília</p>
                </S.infoGroup>
                <S.infoGroup>
                    <AiFillCalendar/>
                    <p>Dia 26 de janeiro de 2032</p>
                </S.infoGroup>
                <S.infoGroup>
                    <AiTwotoneEnvironment/>
                    <p>Fenda do bikini</p>
                </S.infoGroup>
              
            </S.infoContainer>
       
    </div>


    )



}