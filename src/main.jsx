import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';
import UserTypesList from './component/UserTypesList.jsx';
import Passwordreset from './component/Passwordreset.jsx';
import Createnewpassword from './component/Createnewpassword.jsx';
import './index.css'
import App from './App.jsx';
import Carouselgroup from './pages/Carouselgroup.jsx';
import CheckEmail from './component/CheckEmail.jsx'

import TermAndConditions from './component/TermAndConditions.jsx';
import ExchangerCard from './component/ExchangerCard.jsx';
import ExchangerSignUp from './component/ExchangerSignup.jsx';
import Exchangerlogin from './component/Exchangerlogin.jsx';
import UserSignup from './component/UserSignup.jsx';
import Userlogin from './component/Userlogin.jsx';
import ForgottenPassword from './component/ForgottenPassword.jsx';
import VerifyMail from './component/VerifyMail.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/usertype" element={<UserTypesList />} />
        <Route path="/Passwordreset" element={<Passwordreset />} />
        <Route path="/Createnewpassword" element={<Createnewpassword />} />
        <Route path='/Carouselgroup' element={<Carouselgroup />} />
        <Route path='/checkemail' element={<CheckEmail />} />
        <Route path='/ExchangerSignUp' element={<ExchangerSignUp />} />
        <Route path='/terms' element={<TermAndConditions />} />
        <Route path='/excard' element={<ExchangerCard />} />
        <Route path='/Exchangerlogin' element={<Exchangerlogin />} />
        <Route path='/userlogin' element={<Userlogin />} />
        <Route path='/ForgottenPassword' element={<ForgottenPassword />} />
        <Route path='/verifymail' element={<VerifyMail />} />
        <Route path='/usersignup' element={<UserSignup />} />
        <Route path='/ExchangerCard' element={<ExchangerCard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);