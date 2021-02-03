import React, { useEffect } from "react";
import FormChat from "./FormChat";
import { ChatContext } from "../context/ChatProvider";

const Chat = () => {
  const { messages, user } = React.useContext(ChatContext);
  const refChatZone = React.useRef(null);

  useEffect(() => {
    refChatZone.current.scrollTop = refChatZone.current.scrollHeight
  }, [messages]);

  return (
    <div
      className="mt-3 px-2"
      style={{
        height: "80vh",
        overflowY: "scroll",
      }}
      ref={refChatZone}
    >
      {messages.map((item, index) =>
        user.uid === item.uid ? (
          <div className="d-flex justify-content-end mb-2" key={index}>
            <small>{item.displayName}: </small>
            <span className="badge badge-pill badge-danger">{item.text}</span>
          </div>
        ) : (
          <div className="d-flex justify-content-start mb-2" key={index}>
            <small>{item.displayName}: </small>
            <span className="badge badge-pill badge-warning ml-1">
              {item.text}
            </span>
          </div>
        )
      )}

      <FormChat />
    </div>
  );
};

export default Chat;
