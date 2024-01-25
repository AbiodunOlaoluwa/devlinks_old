import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Links from './Pages/Links'
import Login from './Pages/Login';
import CreateAccount from './Pages/CreateAccount';
import Preview from './Pages/Preview';
import Profile from './Pages/Profile';
import Layout from './Layout';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Links />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
