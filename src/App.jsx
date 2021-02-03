import React from "react";
import Chat from "./components/Chat";
import NavBar from "./components/NavBar";

import { ChatContext } from "./context/ChatProvider";

const App = () => {
  const { user } = React.useContext(ChatContext);

  return user !== null ? (
    <div>
      <NavBar />

      {user.state ? (
        <Chat />
      ) : (
        <div className="lead text-center mt-5">You must login to Chat</div>
      )}
      
    </div>
  ) : (
    <div>Cargando</div>
  );
};

export default App;
