import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Input from "./components/Input";
import Button from "./components/Button";
import Icon from "./components/Icon";

function App() {
  const FaceBookBackground = "linear-gradient(to right, #0546A0 0%, #663FB6 100%)"
  const InstagramBackground ="linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)"
  const TwitterBackground ="linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)"

  return <MainContainer>
    
    <WelcomeText>Bem vindo</WelcomeText>
    <InputContainer>
      <Input type="Text" placeholder="Email" />
      <Input type="Password" placeholder="Senha" />
    </InputContainer>
    <ButtonContainer>
      <Button content="Enviar" />
    </ButtonContainer>
    <LoginWith>Entrar com:</LoginWith>
    <HorizontalRule />
    <IconsContainer>
       <Icon color={FaceBookBackground}>
       <FaFacebookF/>
      </Icon>
      <Icon color={InstagramBackground}>
      <FaInstagram/>
      </Icon>
      <Icon color={TwitterBackground}>
      <FaTwitter/>
      </Icon>
    </IconsContainer>
    
    <ForgetPass>Esqueceu a senha?</ForgetPass>
  </MainContainer>

}

const MainContainer = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 height: 80vh;
 width: 30vw;
 background: rgba(255, 255, 255, 0.15);
 box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
 backdrop-filter: blur(8.5px);
 border-radius: 10px;
 color:#ffff;
 text-transform: uppercase;
 letter-spacing: 0.4rem;
 @media only screen and (max-width:320px)
 {
   width:80vw;
   height:90vh;
   hr {
     margin-bottom: 0.3rem;
   }
   h4 {
     font-size: small;
     margin-top:-20px;
   }
 }
 @media only screen and (min-width:360px)
 {
   width:80vw;
   height:90vh;
  
   h4 {
     font-size: small;
    
   }
 }
 @media only screen and (min-width:411px)
 {
   width:80vw;
   height:90vh;
   }

@media only screen and (min-width:768px)
 {
   width:80vw;
   height:90vh;
   }

@media only screen and (min-width:1024px)
 {
   width:70vw;
   height:50vh;
   }
@media only screen and (min-width:1030px)
 {
   width:30vw;
   height:70vh;
   }


`;

const WelcomeText = styled.h2`
 
  margin: 3rem 0 2rem 0;

`;

const InputContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 20%;
width: 100%;

`;

const ButtonContainer = styled.div`
 
 margin: 1rem 0 2rem 0;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const LoginWith = styled.h5`
 cursor:pointer;
`;

const HorizontalRule = styled.hr`
width: 90%;
height:0.3rem;
border-radius: 0.8rem;
border:none;
margin:1.5em 0 1rem 0;
background: linear-gradient(to right, #14163c 0% #03217b 79%);
backdrop-filter: blur(25px);

`;

const ForgetPass = styled.h4`
 cursor:pointer;
`;

const IconsContainer = styled.div`

display:flex;
justify-content: space-evenly;
margin:2rem 0 3rem 0;
width: 80%;

`;
export default App;
