import React from "react";
import { FaTrash } from "react-icons/fa";
import { MdOutlineRecordVoiceOver, MdOutlineVoiceOverOff } from "react-icons/md";
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";
import styles from './style.css';

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

            {/* <h1>{transcript}</h1> */}


            <button style={{
                 background:'none',
                 border:'none',
            }} onClick={SpeechRecognition.startListening}>
                <MdOutlineRecordVoiceOver size={20} />
            </button>

            <button style={{
                 background:'none',
                 border:'none',
            }} onClick={SpeechRecognition.stopListening}>
                <MdOutlineVoiceOverOff size={20} />
            </button>

            <button style={{
                 background:'none',
                 border:'none',
            }} onClick={resetTranscript}>
            <FaTrash size={10}/>
            </button>

        </div>
    )
}

