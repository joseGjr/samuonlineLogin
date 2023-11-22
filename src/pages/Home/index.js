import React from "react";
import { ContainerPage, TitlePage } from "../../Components/Main";
import Speech from "../../Components/SpeechRecognator/Speech";
import { ChatRoom} from "../../Components/Chat";

const Page = () => {
  return (
    <>
      <ContainerPage>
      <ChatRoom/>

        {/* <TitlePage>Regulação online SAMU-MOB</TitlePage> */}
        
        {/* <Speech/> */}
      </ContainerPage>
      
    </>


  );
}
export default Page;