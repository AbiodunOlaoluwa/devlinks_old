import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Links from './Pages/Links'
import Login from './Pages/Login';
import CreateAccount from './Pages/CreateAccount';
import Preview from './Pages/Preview';
import Profile from './Pages/Profile';
import Layout from './Layout';
import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [craEmailInput, setCraEmailInput] = useState("");
  const [craPasswordInput, setCraPasswordInput] = useState("");
  const [loginEmailInput, setLoginEmailInput] = useState("");
  const [loginPasswordInput, setLoginPasswordInput] = useState("")

  

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={isLoggedIn ? <Links /> : <Navigate to="/login" replace />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="*" element={isLoggedIn ? <Navigate to="/" /> : <Navigate to="/login" />} />
        </Route>
        <Route path="/createAccount" element={<CreateAccount pwrdInput={craPasswordInput} emailInput={craEmailInput} setpwrdInput={setCraPasswordInput} setEmailInput={setCraEmailInput} />} />
        <Route path="/login" element={<Login setLoginState={setIsLoggedIn} pwrdInput={loginPasswordInput} emailInput={loginEmailInput} refEmail={craEmailInput} refPwrd={craPasswordInput} setPwrdInput={setLoginPasswordInput} setEmailInput={setLoginEmailInput} loginStatus={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
