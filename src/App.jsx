import React from 'react';
import "./App.css";
import Login from './components/Login';
import Chat from './components/Chat';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? <Chat /> : <Login />}
    </div>
  );
}

export default App;
