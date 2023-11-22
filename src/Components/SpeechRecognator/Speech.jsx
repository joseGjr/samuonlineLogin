import React from "react";
import { FaTrash } from "react-icons/fa";
import { MdOutlineRecordVoiceOver, MdOutlineVoiceOverOff } from "react-icons/md";
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";
import styles from './style.css';
import { Message } from "@mui/icons-material";

export default function Speech(){
    const{
        transcript,
        resetTranscript,
        browserSupportsSpeechRecognition
    }= useSpeechRecognition()

    
    if(!browserSupportsSpeechRecognition)return(<span> Seu navegador não é compativel com SpeechRecognition.</span>)
    return(
        <div style={{
            display:'flex',
            alignItems:'center',
            gap:'.5rem',
           
        }}>

           


            <button onClick={SpeechRecognition.startListening}>
                <MdOutlineRecordVoiceOver size={20}  />
            </button>

            <button onClick={SpeechRecognition.stopListening}>
                <MdOutlineVoiceOverOff size={20} />
            </button>

            <button  onClick={resetTranscript}>
            <FaTrash size={10}/>
            </button>

        </div>
    )
}

