import React from "react";
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";

export const Speech = () =>{
    const{
        transcript,
        resetTranscript,
        browserSupportsSpeechRecognition
    }= useSpeechRecognition()

    if(!browserSupportsSpeechRecognition)return(<span> Seu navegador não é compativel com SpeechRecognition.</span>)
    return(
        <div>

        <h1>{transcript}</h1>

        <button onClick={SpeechRecognition.startListening}>Gravar</button>
        <button onClick={SpeechRecognition.stopListening}>Parar</button>
        <button onClick={resetTranscript}>Reset campo</button>

        </div>
    )
}
export default Speech;