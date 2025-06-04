
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';


const KYCForm = () => {
  const [selectedDocument, setSelectedDocument] = useState('');

  const handleDocumentSelect = (event) => {
    setSelectedDocument(event.target.value);
  };
   
    const [frontDocument, setFrontDocument] = useState(null);
    const [backDocument, setBackDocument] = useState(null);
  
    const handleFileChange = (e, setDocument) => {
      const file = e.target.files[0];
      if (file) {
        setDocument(file);
      }
    };

  return (
    <div className="h-['100px'] w-full bg-black text-white flex flex-col justify-center items-center px-4 py-10 rounded-md hover:bg-slate-900">
      <h1 className="text-2xl font-bold mb-6 hover:text-green-100">KYC</h1>
      <h2 className="text-lg font-semibold mb-4 hover:text-green-100">Select Document</h2>
      
      <div className="space-y-4 w-full max-w-sm">
        {/* Radio Buttons for selecting a document */}
        <label className="flex items-center space-x-3 bg-gray-800 p-4 rounded-full  outline-blue-800 outline outline-3  cursor-pointer flex-row-reverse">
          <input
            type="radio"
            name="document"
            value="National ID Card"
            checked={selectedDocument === 'National ID Card'}
            onChange={handleDocumentSelect}
            className="w-6 h-6 text-orange-500 text-transparent max-w-screen-xl border-gray-500"
          />
          <span className='pr-[190.4px] font-serif hover:text-green-100'>National ID Card</span>
        </label>
        <label className="flex items-center space-x-3 bg-gray-800 p-4 rounded-full outline outline-3  outline-blue-800  cursor-pointer flex-row-reverse">
          <input
            type="radio"
            name="document"
            value="Passport"
            checked={selectedDocument === 'Passport'}
            onChange={handleDocumentSelect}
            className="w-6 h-6 text-orange-500 border-gray-500"
          />
          <span className='pr-[250px] font-serif hover:text-green-100'>Passport</span>
        </label>

        <label className="flex items-center space-x-3 bg-gray-800 p-4 outline  outline-blue-800  outline-3 rounded-full cursor-pointer flex-row-reverse">
          <input
            type="radio"
            name="document"
            value="Driver's license"
            checked={selectedDocument === "Driver's license"}
            onChange={handleDocumentSelect} 
            className="w-6 h-6 text-orange-600 border-gray-500 border-solid border-[50px]"
          />
          <span className='pr-[200px] flex flex-row font-serif hover:text-green-100'>Driver's License</span>
        </label>
      </div>

      
    
     {/* Upload Document Section */}
     <div className="text-center mb-6">
     <h3 className="text-2xl font-bold mt-9 hover:text-green-100">Upload Document</h3>

     {/* Front Document Upload */}
     <div className="mb-4 mt-9">
       <input
         type="file"
         accept="image/*, .pdf"
         onChange={(e) => handleFileChange(e, setFrontDocument)}
         className="hidden"
         id="frontDocument"
       />
       <label
         htmlFor="frontDocument"
         className="flex items-center space-x-3 bg-gray-800  outline outline-blue-800 outline-3 p-4 rounded-md cursor-pointer w-96  font-bold"
       >
         {frontDocument ? frontDocument.name : 'Upload front document '}  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faCloudUploadAlt} className='flex-row-reverse  text-orange-500  text-3xl font-bold'/>
       </label>
     </div>

     {/* Back Document Upload */}
     <div className="mb-6 mt-9 ">
       <input
         type="file"
         accept="image/*, .pdf"
         onChange={(e) => handleFileChange(e, setBackDocument)}
         className="hidden"
         id="backDocument"
       />
       <label
         htmlFor="backDocument"
         className="flex items-center space-x-3 bg-gray-800  outline outline-blue-800 outline-3 p-4 rounded-md cursor-pointer w-96  font-bold"
       >
         {backDocument ? backDocument.name : 'Upload back document'} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faCloudUploadAlt} className='flex-row-reverse text-orange-500  text-3xl font-bold'/>
       </label>
     </div>
   </div>

   {/* Next Button */}
   <div className="flex justify-center">
     <button className="bg-blue-800 text-white py-3 px-12  rounded-lg font-bold hover:text-green-100">
       Next
     </button>
   </div>
 </div>
  );
};

export default KYCForm;
