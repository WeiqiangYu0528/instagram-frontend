// import React from 'react';
import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import * as ROUTES from './constants/routes'
import UserContext from './contexts/user-context';
import ErrorPage from "./pages/error-page"

function App() {
  const [username, setUsername] = useState("");
  
  const Login = lazy(() => import('./pages/login'));
  const Dashboard= lazy(() => import('./pages/dashboard'));
  const SignUp = lazy(() => import("./pages/sign-up"));
  return (
    <UserContext.Provider value={{username: username}}>
      <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login onLogin={setUsername}/>} errorElement={<ErrorPage/>} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp/>} errorElement={<ErrorPage/>}/>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard/>} errorElement={<ErrorPage/>}/>
        </Routes>
      </Suspense>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
