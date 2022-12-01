import { StytchProvider } from '@stytch/react';
import { StytchUIClient } from '@stytch/vanilla-js';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ResetPassword } from './pages/ResetPassword';

const STYTCH_TOKEN = process.env.REACT_APP_STYTCH_PUBLIC_TOKEN;
const stytch = new StytchUIClient(STYTCH_TOKEN);

const App = () => {
  return (
    <div className="App">
      <StytchProvider stytch={stytch}>
        <Router>
          <Link to="/signup">SignUp</Link>
          <Link to="/auth">Login</Link>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/resetpassword/*" element={<ResetPassword />} />
          </Routes>
          <button>Logout</button>
        </Router>
      </StytchProvider>
    </div>
  );
};

export default App;
