import React, { useEffect, useState } from 'react'
import {db, auth, provider } from '../firebase'

export const ChatContext = React.createContext();

export const ChatProvider = (props) => {

    const userData = {uid: null, email: null, displayName: null , state: null} //Initial Data

    const [user, setUser] = useState(userData)

    const [messages, setMessages] = useState([]);

    const userDetector = () => {
        auth.onAuthStateChanged(user => {
            if(user){
                setUser({uid: user.uid, email: user.email, displayName: user.displayName , state: true})
                loadMessagesFromDB()
            }else{
                setUser({uid: null, email: null, displayName: null , state: false})
            }
        })
    }
    

    useEffect(() => {
        userDetector()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const userLogin = async () => {
        try {
            await auth.signInWithPopup(provider)
        } catch (error) {
            console.log(error)
        }
    }

    const userSignOut = async () => {
        auth.signOut()
    }

    const loadMessagesFromDB = () => {
        db.collection('chat').orderBy('date')
        .onSnapshot(query => {
         const messages = query.docs.map(item => item.data())
         setMessages(messages)
        })
    }

    const addMessage = async(uidChat, textInput) => {
        try {
            await db.collection("chat").add({
                date: Date.now(),
                text: textInput,
                uid: uidChat,
                displayName: user.displayName
            })
        } catch (error) {
            console.log(error)
        }
    }



    return (
            <ChatContext.Provider value={{user, userLogin, userSignOut, messages, addMessage}}>{/**user del useState */}
                {props.children}
            </ChatContext.Provider>
    )
}

export default ChatProvider;