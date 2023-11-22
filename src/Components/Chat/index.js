import React from "react";
import { AreaChat } from "./styled";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";



export const ChatRoom = () => {
    const [user] = useAuthState(auth);

    return (
        <AreaChat>
    
          
        </AreaChat>

    );
};
export default ChatRoom;