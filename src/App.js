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
  const [createLinkObjects, setCreateLinkObjects] = useState([])

  

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={isLoggedIn ? <Links setCreateLinkObjects={setCreateLinkObjects} /> : <Navigate to="/login" replace />} />
          <Route path="/profile" element={isLoggedIn ? <Profile createLinkObjects={createLinkObjects} /> : <Navigate to="/login" replace />} />
          <Route path="/preview" element={isLoggedIn ? <Preview /> : <Navigate to="/login" replace />} />
          <Route path="*" element={isLoggedIn ? <Navigate to="/" /> : <Navigate to="/login" />} />
        </Route>
        <Route path="/createAccount" element={<CreateAccount pwrdInput={craPasswordInput} emailInput={craEmailInput} setpwrdInput={setCraPasswordInput} setEmailInput={setCraEmailInput} />} />
        <Route path="/login" element={<Login setLoginState={setIsLoggedIn} pwrdInput={loginPasswordInput} emailInput={loginEmailInput} refEmail={craEmailInput} refPwrd={craPasswordInput} setPwrdInput={setLoginPasswordInput} setEmailInput={setLoginEmailInput} loginStatus={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
