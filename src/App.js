import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ResetPassword } from './pages/ResetPassword';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Link to="/signup"> SignUp</Link>
        <Link to="/auth"> Login</Link>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/resetpassword/*" element={<ResetPassword />} />
        </Routes>
        <button>Logout</button>
      </Router>
    </div>
  );
};

export default App;
