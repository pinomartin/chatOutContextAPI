import React, { useState } from "react";

import { ChatContext } from '../context/ChatProvider'

const FormChat = () => {

    const {addMessage, user} = React.useContext(ChatContext)

    const [message, setMessage] = useState('')

    const add = (e) => {
        e.preventDefault();
        if(!message.trim()){
            console.log('Ingrese Mensaje');
            return
        }
        addMessage(user.uid, message)
        setMessage('')
    }

  return (
    <form className="fixed-bottom input-group p-3 bg-dark"
    onSubmit={add}>
      <input type="text" className="form-control" value={message} onChange={e => setMessage(e.target.value)}/>
      <div className="input-group-append">
        <button className="btn btn-success" type="submit">Send</button>
      </div>
    </form>
  );
};

export default FormChat;
