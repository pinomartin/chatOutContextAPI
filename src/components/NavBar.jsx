import React from "react";
import { ChatContext } from "../context/ChatProvider";

const NavBar = () => {
  const { user, userLogin, userSignOut } = React.useContext(ChatContext);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand">OutofContext Chat</span>
      <div>

        {user.state ? (
          <button 
          onClick={userSignOut}
          className="btn btn-danger my-2">Logout</button>
        ) : (
          <button 
          onClick={userLogin}
          className="btn btn-warning my-2">Login</button>
        )}
        
      </div>
    </nav>
  );
};

export default NavBar;
