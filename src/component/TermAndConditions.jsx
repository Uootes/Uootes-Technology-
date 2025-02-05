import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import ExchangerSignUp from '../component/ExchangerSignup'

const TermAndConditions = () => { 

  return (
    <div className='w-[100%] text-slate-300'>
       <div className='w-[100%] bg-[#002853] h-[70px] flex align-middle justify-center py-auto'>
       <div className='TermsLogo mt-[-8px] w-[80px] h-[90px] ml-[-50px] scale-50 my-auto'></div>
         <h2 className='my-auto text-white font-semibold text-[25px] '>Uootes</h2>
       </div>

      {ExchangerSignUp ? 
        <Link to="/usersignup">
            <div className='flex ml-[20px] mt-[20px]'>
              <FontAwesomeIcon className='my-auto text-[23px] text-white' icon={faArrowLeft} />
              <h2 className='my-auto text-[20px] ml-[10px]'>Back</h2>
            </div>
        </Link>
          : 
          
          <Link to="/exsignup">
              <div className='flex ml-[20px] mt-[20px]'>
                <FontAwesomeIcon className='my-auto text-[23px] text-white' icon={faArrowLeft} />
                <h2 className='my-auto text-[20px] ml-[10px]'>Back</h2>
              </div>
          </Link>
          
      }

       <div className='w-[100%] mt-[20px]'>
        
        <h2 className='text-[25px] text-white font-semibold ml-[20px] '>Terms And Conditions</h2>
       </div>

      {/* Terms And Conditon contents */}
       <div className='mt-[30px'>
        {/* First Conditiion */}
         <h2 className='text-[23px] text-white font-semibold ml-[20px]'>1. Introduction</h2>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>1.1 These Terms and Conditions ("Terms") govern your use of the Uootes website ("Website") and any services provided by Uootes ("Services").</p>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>1.2 By accessing the Website or using the Services, you agree to be bound by these Terms.</p>

         {/* Second Condition */}
         <h2 className='text-[23px] text-white font-semibold ml-[20px] mt-[30px]'>2. Eligibility</h2>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>2.1 You must be at least 18 years old to use the Services.</p>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>2.2 You must provide accurate and complete information when creating an account or using the Services.</p>
          
          {/* Third Condition */}
         <h2 className='text-[23px] text-white font-semibold ml-[20px] mt-[30px]'>3. Account Security</h2>
         <p  className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>3.1 You are responsible for maintaining the security of your account and password.</p>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'> 3.2 You must notify Uootes immediately of any unauthorized use of your account or password.</p>

          {/* Fourth Condition */}
         <h2 className='text-[23px] text-white font-semibold ml-[20px] mt-[30px]'>4. Prohibited Activities</h2>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>4.1 You must not use the Services for any unlawful or unauthorized purposes.</p>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>4.2 You must not interfere with or disrupt the Services or the Website.</p>

         {/* Fifth Condition */}
         <h2 className='text-[23px] text-white font-semibold ml-[20px] mt-[30px]'>5. Intellectual Property</h2>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>5.1 All intellectual property rights in the Website and the Services are owned by Uootes.</p>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>5.2 You must not reproduce, modify, or distribute any content from the Website without Uootes' prior written consent.</p>

         {/* Sixth Condition */}
         <h2 className='text-[23px] text-white font-semibold ml-[20px] mt-[30px]'>6. Dispute Resolution Center</h2>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>6.1 Purpose: Uootes features a Dispute Resolution Center (DRC) to resolve transaction disputes between users and exchangers.</p>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>6.2 Appeal Process: Either party can appeal a transaction if they do not receive payment or tokens. Our company will investigate the appeal in collaboration with the banking system.</p>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>6.3 Penalties for Fraudulent Activities: If either party is found guilty of fraudulent activities, they will face penalties, including being banned from the platform.</p>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>6.4 Consent Requirement: Once an appeal is made, the second party will be notified and required to provide consent to proceed.</p>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>6.5 Timeline for Consent: If the second party fails to provide consent within a specified timeframe, the appeal will be decided in favor of the party that initiated the appeal.</p>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>6.6 Account Statement Report: During the investigation, both parties may be required to submit their account statement reports from the bank to verify the transaction dispute.</p>

         {/* Seventh Condition */}
         <h2 className='text-[23px] text-white font-semibold ml-[20px] mt-[30px]'>7. Payment Instructions</h2>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>7.1 Users and exchangers must only make payments to bank accounts that match the recipient's profile name.</p>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>7.2 Making payments to bank accounts that do not match the recipient's profile name is strictly prohibited.</p>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>7.3 Failure to comply with this requirement may result in penalties, including being banned from the platform.</p>

         {/* Eigth Condition */}
         <h2 className='text-[23px] text-white font-semibold ml-[20px] mt-[30px]'>8. Disclaimers and Limitations of Liability</h2>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>8.1 Uootes does not warrant that the Services will be uninterrupted or error-free.</p>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>8.2 Uootes will not be liable for any losses or damages arising from your use of the Services.</p>

         {/* Ninth Condition */}
         <h2 className='text-[23px] text-white font-semibold ml-[20px] mt-[30px]'>9. Governing Law and Jurisdiction</h2>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>9.1 These Terms will be governed by and construed in accordance with the laws of Nigeria.</p>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>9.2 Any disputes arising out of these Terms will be resolved through arbitration under the Rules of the International Chamber of Commerce (ICC), which will be conducted in English and governed by the laws of Nigeria.</p>

         {/* Tenth Condition */}
         <h2 className='text-[23px] text-white font-semibold ml-[20px] mt-[30px]'>10. Changes to Terms</h2>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>10.1 Uootes may modify these Terms at any time.</p>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>10.2 You will be bound by any changes to these Terms.</p>

         {/* Eleventh */}
         <h2 className='text-[23px] text-white font-semibold ml-[20px] mt-[30px]'>11. Contact Us</h2>
         <p className='ml-[19px] mt-[10px] text-slate-300 text-[18px] w-[90%]'>11.1 If you have any questions or concerns about these Terms, please contact us.</p>

         <p className='ml-[19px] mt-[50px]text-slate-300 text-[18px] w-[90%]'>By using the Uootes platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
       </div>
    </div>
  )
}

export default TermAndConditions