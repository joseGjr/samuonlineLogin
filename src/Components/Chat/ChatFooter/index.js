import React, { useState } from "react";
import * as C from "./styles";
import { MdKeyboardVoice, MdOutlineRecordVoiceOver, MdOutlineVoiceOverOff, MdSend } from "react-icons/md";
import { auth, db } from "../../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import Speech from "../../SpeechRecognator/Speech";
import { useSpeechRecognition } from "react-speech-recognition";

const ChatFooter = ({ chatId }) => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      message: message,
      user: user.email,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessage("");
  };


  const{
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
}= useSpeechRecognition();


  return (
    <C.Container>
       <C.Form onSubmit={handleSendMessage}>
        <C.Input
          placeholder ="Digite uma mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <MdSend onClick={handleSendMessage} />
      </C.Form>
      <Speech />
    </C.Container>
  );
};

export default ChatFooter;
