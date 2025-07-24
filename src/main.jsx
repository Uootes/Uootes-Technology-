 import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx';

import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';
import UserTypesList from './component/UserTypesList.jsx';
import './index.css'
import App from './App.jsx';
import Carouselgroup from './pages/Carouselgroup.jsx';
import CheckEmail from './component/CheckEmail.jsx'
import TermAndConditions from './component/TermAndConditions.jsx';
import ExchangerCard from './component/ExchangerCard.jsx';
import ExchangerSignUp from './component/ex_mvp/ExchangerSignup.jsx';
import Exchangerlogin from './component/ex_mvp/Exchangerlogin.jsx';
import Ex_ResetPass from './component/ex_mvp/Ex_ResetPass.jsx';
import Ex_ResetInfor from './component/ex_mvp/Ex_ResetInfo.jsx';
import Ex_ForgotPassword from './component/ex_mvp/Ex_ForgotPassword.jsx';
import Ex_Verifymail from './component/ex_mvp/Ex_Verifymail.jsx';
import User_ResetPass from './component/user_mvp/User_ResetPass.jsx';
import UserSignup from './component/user_mvp/UserSignup.jsx';
import Userlogin from './component/user_mvp/Userlogin.jsx';
import User_ResetInfor from './component/user_mvp/User_ResetInfor.jsx';
import User_ForgotPassword from './component/user_mvp/User_ForgotPassword.jsx';
import User_Verifymail from './component/user_mvp/User_Verifymail.jsx';

import Home from './component/user_mvp/Home.jsx';
import Incubator from './component/user_mvp/Incubator.jsx';
import Profile from './component/user_mvp/Profile.jsx';
import TaskList from './component/user_mvp/TaskList.jsx';
import UpgradeTiers from './component/user_mvp/UpgradeTiers.jsx';
import Team from './component/user_mvp/Team.jsx';
import Fundhub from './component/user_mvp/Fundhub.jsx';
import PaymentDispute from './component/user_mvp/PaymentDispute.jsx';
import Leader from './component/user_mvp/Leader';
import History from './component/user_mvp/History.jsx';
import Support from './component/user_mvp/Support';
import Settings from './component/user_mvp/Settings';
import Log_out from './component/user_mvp/Log_out';

  // dialog
// import DialogNotification from "./component/eu_wallet/dialogs/DialogNotification.jsx";
// import Activate from './component/eu_wallet/dialogs/Activate.jsx';
// import Inputdialog from './component/eu_wallet/dialogs/Inputdialog.jsx';
// import Navbar2 from './component/eu_wallet/Navbar2.jsx';

    // mvp
// import Cpt from './pages/mvp/Cpt.jsx'
// import TradeCenter from './pages/mvp/TradeCenter.jsx'
// import KYCForm from './pages/mvp/KYCForm.jsx'
// import TaskList from './pages/mvp/TaskList.jsx'
// import Userhome from './pages/mvp/Userhome.jsx';

  // landing for mvp
// import Ex_Feed from './component/Ex_Feed.jsx';
import User_dashboard from './pages/User_dashboard.jsx';
import Ex_dashboard from './pages/Ex_dashboard.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/usertype" element={<UserTypesList />} />
          <Route path="/Ex_ResetInfor" element={<Ex_ResetInfor />} />
          <Route path='/User_ResetInfor' element={<User_ResetInfor />} />
          <Route path='/User_ResetPass' element={<User_ResetPass />} />
          <Route path='/Carouselgroup' element={<Carouselgroup />} />
          <Route path='/checkemail' element={<CheckEmail />} />
          <Route path='/ExchangerSignUp' element={<ExchangerSignUp />} />
          <Route path='/terms' element={<TermAndConditions />} />
          <Route path='/excard' element={<ExchangerCard />} />
          <Route path='/Exchangerlogin' element={<Exchangerlogin />} />
          <Route path='/userlogin' element={<Userlogin />} />

          <Route path='/home' element={<User_dashboard />} />
          <Route path='/Fundhub' element={<User_dashboard />} />
          <Route path='/Profile' element={<User_dashboard />} />
          <Route path='/Incubator' element={<User_dashboard />} />
          <Route path='/UpgradeTiers' element={<User_dashboard />} />
          <Route path='/Leader' element={<User_dashboard />} />
          <Route path='/Team' element={<User_dashboard />} />
          <Route path='/PaymentDispute' element={<User_dashboard />} />
          <Route path='/History' element={<User_dashboard />} />
          <Route path="/Settings" element={<User_dashboard />} />
          <Route path="/Support" element={<User_dashboard />} />
          <Route path='/Log_out' element={<User_dashboard />} />

          <Route path='/Ex_ForgotPassword' element={<Ex_ForgotPassword/>} />
          <Route path='/Ex_ResetPass' element={<User_ResetPass />} />
          <Route path='/User_ForgotPassword' element={<User_ForgotPassword />} />
          <Route path='/Ex_Verifymail' element={<Ex_Verifymail />} />
          <Route path='/User_Verifymail' element={<User_Verifymail />} />
          <Route path='/usersignup' element={<UserSignup />} />
          <Route path='/ExchangerCard' element={<ExchangerCard />} />
          <Route path='/TaskList' element={<TaskList />} />
          {/* <Route path='/DialogNotification' element={<DialogNotification />} /> */}
          {/* <Route path='/Activate' element={<Activate />} /> */}
          {/* <Route path='/Inputdialog' element={<Inputdialog />} /> */}
          {/* <Route path='/Navbar2' element={<Navbar2 />} /> */}


          <Route path='User_dashboard' element={<User_dashboard />} />
          <Route path='Ex_dashboard' element={<Ex_dashboard />} />
          {/* <Route path="/Comingsoon" element={<User_dashboard />} /> Adjust for unique paths */}
          <Route path='*' element={<div className='text-2xl text-center pt-10 text-white'> Coming Soon </div>} />


        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
