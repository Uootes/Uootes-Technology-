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
    
  // dialog
// import DialogNotification from "./component/eu_wallet/dialogs/DialogNotification.jsx";
// import Activate from './component/eu_wallet/dialogs/Activate.jsx';
// import Inputdialog from './component/eu_wallet/dialogs/Inputdialog.jsx';
// import Navbar2 from './component/eu_wallet/Navbar2.jsx';

    // mvp
// import Cpt from './pages/mvp/Cpt.jsx'
// import TradeCenter from './pages/mvp/TradeCenter.jsx'
// import KYCForm from './pages/mvp/KYCForm.jsx'
// import Fundhub from './pages/mvp/Fundhub.jsx'
// import Profile from './pages/mvp/Profile.jsx'
// import TaskList from './pages/mvp/TaskList.jsx'
// import Team from './pages/mvp/Team.jsx'
// import Userhome from './pages/mvp/Userhome.jsx';

  // landing for mvp
// import Ex_Feed from './component/Ex_Feed.jsx';
import User_Feed from './pages/User_Feed.jsx';
import Ex_Feed from './pages/Ex_Feed.jsx';


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
        {/* <Route path='/DialogNotification' element={<DialogNotification />} /> */}
        {/* <Route path='/Activate' element={<Activate />} /> */}
        {/* <Route path='/Inputdialog' element={<Inputdialog />} /> */}
        {/* <Route path='/Navbar2' element={<Navbar2 />} /> */}

        <Route path='User_Feed' element={<User_Feed />} />
        <Route path='Ex_Feed' element={<Ex_Feed />} />

        <Route path='*' element={<div className='text-2xl text-center pt-10 text-white'> Coming Soon </div>} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);