// import React from 'react';
import Header from "./components/header";
import Sidebar from "./components/suggestions/suggestions";
import Dashboard from "./pages/dashboard";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import * as ROUTES from './constants/routes'

function App() {
  return (
  <div>
      <Dashboard />
  </div>
  );
}

export default App;

    {/* <Router>
        {/* <Suspense fallback={<ReactLoader />}> */}
        <Routes>
        <Route path={ROUTES.LOGIN}  />
        <Route path={ROUTES.SIGN_UP}  />
        <Route path={ROUTES.PROFILE} />
        {/* <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact> */}

        {/* </ProtectedRoute> */}
        <Route />
      </Routes>
    {/* </Suspense> */}
  // </Router> */}