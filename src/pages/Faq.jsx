import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Faq = () => {

   {/* functions for faq contents show and collpase are found below */ }

   const [faqShow, setFaqShow] = useState(false);

   const [secondFaqShow, setSecondFaqShow] = useState(false);

   const [thirdFaqShow, setThirdFaqShow] = useState(false);

   const [fourthFaqShow, setFourthFaqShow] = useState(false);

   const [fifthFaqShow, setFifthFaqShow] = useState(false);

   const [sixthFaqShow, setSixthFaqShow] = useState(false);

   const [seventhFaqShow, setSeventhFaqShow] = useState(false);

   const [eightFaqShow, setEightFaqShow] = useState(false);

   const [nineFaqShow, setNineFaqShow] = useState(false);

   {/* functions for faq buttons show and collpase are found below */ }

   {/* Show and hide first faq button */ }
   const [showFirstBtn, setShowFirstBtn] = useState(true);
   const [hideFirstBtn, setHideFirstBtn] = useState(false);

   {/* Show and hide second faq button */ }
   const [showSecondBtn, setShowSecondBtn] = useState(true);
   const [hideSecondBtn, setHideSecondBtn] = useState(false);

   {/* Show and hide third faq button */ }
   const [showThirdBtn, setShowThirdBtn] = useState(true);
   const [hideThirdBtn, setHideThirdBtn] = useState(false);

   {/* Show and hide fourth faq button */ }
   const [showFourthBtn, setShowFourthBtn] = useState(true);
   const [hideFourthBtn, setHideFourthBtn] = useState(false)

   {/* Show and hide fifth faq button */ }
   const [showFifthBtn, setShowFifthBtn] = useState(true);
   const [hideFifthBtn, setHideFifthBtn] = useState(false);

   {/* Show and hide sixth faq button */ }
   const [showSixthBtn, setShowSixthBtn] = useState(true);
   const [hideSixthBtn, setHideSixthBtn] = useState(false);

   {/* Show and hide seventh faq button */ }
   const [showSeventhBtn, setShowSeventhBtn] = useState(true);
   const [hideSeventhBtn, setHideSeventhBtn] = useState(false);
   
   {/* Show and hide eight faq button */ }
   const [showEightBtn, setShowEightBtn] = useState(true);
   const [hideEightBtn, setHideEightBtn] = useState(false);
   
   {/* Show and hide nine faq button */ }
   const [showNineBtn, setShowNineBtn] = useState(true);
   const [hideNineBtn, setHideNineBtn] = useState(false);


   return (
      <section className='pt-10 px-4 md:p-12' id='faq'>

         <div className='ml-[20px] pt-10'>
            <div className='bg-gradient-to-r from-[#a454b8] to-[#d58836cd] mx-6 w-[40px] h-[10px] rounded-lg'></div>
            <h2 className='text-orange-400 mx-6 font-semibold text-[26px] mt-[3px]'>FAQs</h2>
         </div>

         <div className='w-full mt-[20px]'>
            <ul className='flex flex-col justify-center align-middle'>
               <li className='bg-[#240D61] rounded-lg py-[22px]  mt-[20px] w-[85%] m-auto flex flex-row align-middle justify-between'>
                  <h3 className='text-white font-semibold text-[15PX] ml-[20px] '>What is Gossercoin?</h3>

                  {showFirstBtn ? <button onClick={() => {
                     setFaqShow(true);
                     setShowFirstBtn(false);
                     setHideFirstBtn(true);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleDown} />
                  </button> : !showFirstBtn}

                  {hideFirstBtn ? <button onClick={() => {
                     setFaqShow(false)
                     setShowFirstBtn(true);
                     setHideFirstBtn(false);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleUp} /></button> : !hideFirstBtn}

               </li>
               {
                  faqShow && <div className='w-[85%] bg-[#240D61] py-10 m-auto mt-[-10px] rounded-lg text-white font-normal text-left text-[16px] pl-[20px] pr-[20px]'>
                     Gosercoin (GSC) is a stable digital currency for goods and services transactions, pegged to multiple currencies for stability and flexibility. It's the native currency within the Uootes ecosystem, enabling seamless transactions.
                  </div>
               }

               {/* Second Section */}

               <li className='bg-[#240D61] rounded-lg py-[22px]  mt-[20px] w-[85%] m-auto flex flex-row align-middle justify-between'>
                  <h3 className='text-white font-semibold text-[15PX] ml-[20px] '>What is Uootes ?</h3>

                  {showSecondBtn ? <button onClick={() => {
                     setSecondFaqShow(true);
                     setShowSecondBtn(false);
                     setHideSecondBtn(true);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleDown} /></button> : !showSecondBtn}

                  {hideSecondBtn ? <button onClick={() => {
                     setSecondFaqShow(false)
                     setShowSecondBtn(true);
                     setHideSecondBtn(false);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleUp} /></button> : !hideSecondBtn}

               </li>
               {
                  secondFaqShow && <div className='w-[85%] bg-[#240D61] py-10 m-auto mt-[-10px] rounded-lg text-white font-normal text-left text-[16px] pl-[20px] pr-[20px]'>
                     Uootes  is a web3 company empowering individuals and business to thrive in the global economy.
                  </div>
               }

               {/* Third Section */}
               <li className='bg-[#240D61] rounded-lg py-[22px]  mt-[20px] w-[85%] m-auto flex flex-row align-middle justify-between'>
                  <h3 className='text-white font-semibold text-[15PX] ml-[20px] '>What is CPT?</h3>

                  {showThirdBtn ? <button onClick={() => {
                     setThirdFaqShow(true);
                     setShowThirdBtn(false);
                     setHideThirdBtn(true);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleDown} /></button> : !showThirdBtn}

                  {hideThirdBtn ? <button onClick={() => {
                     setThirdFaqShow(false)
                     setShowThirdBtn(true);
                     setHideThirdBtn(false);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleUp} /></button> : !hideThirdBtn}

               </li>
               {
                  thirdFaqShow && <div className='w-[85%] bg-[#240D61] py-10 m-auto mt-[-10px] rounded-lg text-white font-normal text-left text-[16px] pl-[20px] pr-[20px]'>
                     CPT (Crude point Token) is a token used for Gas fee and publications on our ecosystem.
                  </div>
               }


               {/* Fourth Section */}
               <li className='bg-[#240D61] rounded-lg py-[22px]  mt-[20px] w-[85%] m-auto flex flex-row align-middle justify-between'>
                  <h3 className='text-white font-semibold text-[15PX] ml-[20px] '>Is Uootes legit?</h3>

                  {showFourthBtn ? <button onClick={() => {
                     setFourthFaqShow(true);
                     setShowFourthBtn(false);
                     setHideFourthBtn(true);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleDown} /></button> : !showFourthBtn}

                  {hideFourthBtn ? <button onClick={() => {
                     setFourthFaqShow(false)
                     setShowFourthBtn(true);
                     setHideFourthBtn(false);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleUp} /></button> : !hideFourthBtn}

               </li>
               {
                  fourthFaqShow && <div className='w-[85%] bg-[#240D61] py-10 m-auto mt-[-10px] rounded-lg text-white font-normal text-left text-[16px] pl-[20px] pr-[20px]'>
                     Yes, we are registered company under the Nigerian government.
                  </div>
               }


               {/* Fifth Section */}
               <li className='bg-[#240D61] rounded-lg py-[22px]  mt-[20px] w-[85%] m-auto flex flex-row align-middle justify-between'>
                  <h3 className='text-white font-semibold text-[15PX] ml-[20px] '>How can I make money on Uootes?</h3>

                  {showFifthBtn ? <button onClick={() => {
                     setFifthFaqShow(true);
                     setShowFifthBtn(false);
                     setHideFifthBtn(true);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleDown} /></button> : !showFifthBtn}

                  {hideFifthBtn ? <button onClick={() => {
                     setFifthFaqShow(false)
                     setShowFifthBtn(true);
                     setHideFifthBtn(false);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleUp} /></button> : !hideFifthBtn}

               </li>
               {
                  fifthFaqShow && <div className='w-[85%] bg-[#240D61] py-10 m-auto mt-[-10px] rounded-lg text-white font-normal text-left text-[16px] pl-[20px] pr-[20px]'>
                     Buy and Sell CPT tokens for profit and participate in growing our community for incentives.
                  </div>
               }


               {/* Sixth Section */}
               <li className='bg-[#240D61] rounded-lg py-[22px]  mt-[20px] w-[85%] m-auto flex flex-row align-middle justify-between'>
                  <h3 className='text-white font-semibold text-[15PX] ml-[20px] '>How do I withdraw my earnings?</h3>

                  {showSixthBtn ? <button onClick={() => {
                     setSixthFaqShow(true);
                     setShowSixthBtn(false);
                     setHideSixthBtn(true);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleDown} /></button> : !showSixthBtn}

                  {hideSixthBtn ? <button onClick={() => {
                     setSixthFaqShow(false)
                     setShowSixthBtn(true);
                     setHideSixthBtn(false);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleUp} /></button> : !hideSixthBtn}

               </li>
               {
                  sixthFaqShow && <div className='w-[85%] bg-[#240D61] py-10 m-auto mt-[-10px] rounded-lg text-white font-normal text-left text-[16px] pl-[20px] pr-[20px]'>
                     Earnings can be withdrawn to your bank account via our authorized exchanger.
                  </div>
               }


               {/* Seventh Section */}
               <li className='bg-[#240D61] rounded-lg py-[22px]  mt-[20px] w-[85%] m-auto flex flex-row align-middle justify-between'>
                  <h3 className='text-white font-semibold text-[15PX] ml-[20px] '>Who can become an Exchanger?
</h3>

                  {showSeventhBtn ? <button onClick={() => {
                     setSeventhFaqShow(true);
                     setShowSeventhBtn(false);
                     setHideSeventhBtn(true);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleDown} /></button> : !showSeventhBtn}

                  {hideSeventhBtn ? <button onClick={() => {
                     setSeventhFaqShow(false)
                     setShowSeventhBtn(true);
                     setHideSeventhBtn(false);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleUp} /></button> : !hideSeventhBtn}

               </li>
               {
                  seventhFaqShow && <div className='w-[85%] bg-[#240D61] py-10 m-auto mt-[-10px] rounded-lg text-white font-normal text-left text-[16px] pl-[20px] pr-[20px]'>
                     Anyone can become an Exchanger, but they must complete KYC (Know Your Customer) <br /> Verification and have sufficient funds to buy and sell Gosercoin.
                  </div>
               }


               {/* Eight Section */}
               <li className='bg-[#240D61] rounded-lg py-[22px]  mt-[20px] w-[85%] m-auto flex flex-row align-middle justify-between'>
                  <h3 className='text-white font-semibold text-[15PX] ml-[20px] '>How to make money as an Exchanger?
</h3>

                  {showEightBtn ? <button onClick={() => {
                     setEightFaqShow(true);
                     setShowEightBtn(false);
                     setHideEightBtn(true);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleDown} /></button> : !showEightBtn}

                  {hideEightBtn ? <button onClick={() => {
                     setEightFaqShow(false)
                     setShowEightBtn(true);
                     setHideEightBtn(false);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleUp} /></button> : !hideEightBtn}

               </li>
               {
                  eightFaqShow && <div className='w-[85%] bg-[#240D61] py-10 m-auto mt-[-10px] rounded-lg text-white font-normal text-left text-[16px] pl-[20px] pr-[20px]'>
                     Exchangers earn 10-20% commission on every successful transaction.
                  </div>
               }
               {/* Nine Section */}
               <li className='bg-[#240D61] rounded-lg py-[22px]  mt-[20px] w-[85%] m-auto flex flex-row align-middle justify-between'>
                  <h3 className='text-white font-semibold text-[15PX] ml-[20px] '>Can I trust the exchanger?
</h3>

                  {showNineBtn ? <button onClick={() => {
                     setNineFaqShow(true);
                     setShowNineBtn(false);
                     setHideNineBtn(true);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleDown} /></button> : !showNineBtn}

                  {hideNineBtn ? <button onClick={() => {
                     setNineFaqShow(false)
                     setShowNineBtn(true);
                     setHideNineBtn(false);


                  }} className='mr-[30px] font-bold text-white text-[20px]'><FontAwesomeIcon icon={faAngleUp} /></button> : !hideNineBtn}

               </li>
               {
                  nineFaqShow && <div className='w-[85%] bg-[#240D61] py-10 m-auto mt-[-10px] rounded-lg text-white font-normal text-left text-[16px] pl-[20px] pr-[20px]'>
                     Yes, all exchangers are verified and reliable, with completed KYC verification.
                  </div>
               }

            </ul>
         </div>

      </section>
   )
}

export default Faq;