// import React from 'react';
import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import * as ROUTES from './constants/routes'
import UserContext from './contexts/user-context';


function App() {
  const [username, setUsername] = useState("");
  
  const Login = lazy(() => import('./pages/login'));
  const Dashboard= lazy(() => import('./pages/dashboard'));
  const UserProfile= lazy(() => import('./pages/userProfile'));

  return (
    <UserContext.Provider value={{username: username}}>
      <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login/>} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard/>} />
          <Route path={ROUTES.PROFILE} element={<UserProfile/>} />
        </Routes>
      </Suspense>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
