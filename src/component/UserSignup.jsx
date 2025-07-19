import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { UserContext } from '../context/UserContext';

const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referralId, setReferralId] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const { fetchUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if(!firstName || !lastName || !email || !password || !confirmPassword || !country) {      
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all required fields.',
        icon: 'error',
      });
      setLoading(false);
      return;
    }
    
    if (password !== confirmPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Passwords do not match.',
        icon: 'error',
      });
      setLoading(false);
      return;
    }

    try {
      console.log({ firstName, lastName, email, password, confirmPassword, country, referralId });
      const res = await axios.post('https://uootes.onrender.com/api/v1/signUp', 
        { firstName, lastName, email, password, confirmPassword, country, referralId },
        { headers: {
            'Content-Type' : 'application/json',
          },
        }        
      ) 
      const { token } = res.data;
      Cookies.set('userToken', token, { expires: 1/24 });
      await fetchUser();
      
      Swal.fire({
        title: 'OTP Sent!',
        text: 'A verification code has been sent to your email.',
        icon: 'success',
        timer: 1500,
      });

      navigate('/User_Verifymail', {state: { email }});
    } catch (error) {
      Swal.fire({
        title: 'Oops!',
        text: error.response?.data?.message || 'Unable to create account. Please try again.',
        icon: 'error',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='w-full h-[100vh]  align-middle '>
        <div className='w-full h-[100%] my-auto flex justify-center '>
            <div className='w-full sm:w-[90vh] md:w-[80%]  lg:w-[60%] h-[100vh] sm:h-[90vh] md:h-[90vh] lg:h-[90vh] rounded-xl bg-gray-100 my-auto  pr-0 flex flex-row justify-between '>
                
                {/* Left Side */}

                <div className='ExSideImg w-[50%] h-[100%]  rounded-xl justify-center align-middle hidden lg:flex '>
                    <div className='w-[] h-[]  bg-[#002853] rounded-xl opacity-95 '>

                      <div className='ExSideLogo mt-[50px] scale-50'></div>

                      <div className='bg-transparent ml-[23px] w-auto mt-[10px]'>
                        <h2 className='font-semibold text-[28px] text-white'>Create Your <br /> Account </h2>
                        <div className='w-[80px] h-[2px] bg-gray-400 mt-[20px]'></div>
                      </div>

                      <div>
                        <p className='text-white w-[90%] ml-[20px] mt-[40px]'>Sign up to experience the freedom to earn easily and go borderless.</p>
                      </div>

                    </div>
                </div> {/** #f47133 for learn more button */} 

                {/* Right Side */}

                <div className='w-[100%] lg:w-[50%]'>
                  <div className='w-[100%] flex justify-center'>
                    <h2 className='text-[25px] font-semibold mt-[15px] text-[#002853]'>Sign Up</h2>
                  </div>

                    <form action="" onSubmit={handleSubmit} className='w-[100%] h-[90%] flex flex-col gap-y-5 md:gap-y-4 lg:gap-y-2 mt-4 lg:mt-2 overflow-auto'>
                      <input 
                        type="text"
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)}
                        className=' outline-none w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[30px] bg-transparent shadow-lg shadow-gray-300 text-[13px] font-semibold rounded-md mx-auto border-[1px] pl-[10px] border-[#002853]' 
                        placeholder='First Name'
                        required
                      />
                      <input 
                        type="text"
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)}
                        className=' outline-none w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[30px] bg-transparent shadow-lg shadow-gray-300 text-[13px] font-semibold rounded-md mx-auto border-[1px] pl-[10px] border-[#002853]' 
                        placeholder='Last Name'
                        required
                      />

<select
  name=""
  id=""
  value={country}
  onChange={(e) => setCountry(e.target.value)}
  className="outline-none w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[30px] bg-transparent shadow-lg shadow-gray-300 text-[13px] font-semibold rounded-md mx-auto border-[1px] pl-[10px] border-[#002853] text-black"
  placeholder="Select Country"
>
  <option value="" className="text-black">Select Country</option>
  {[
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus",
    "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
    "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada",
    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Brazzaville)",
    "Congo (Kinshasa)", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
    "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (formerly Swaziland)", "Ethiopia", "Fiji",
    "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
    "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India",
    "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan",
    "Kenya", "Kiribati", "North Korea", "South Korea", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
    "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Macedonia (also known as North Macedonia)",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
    "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
    "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
    "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
    "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
    "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
    "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste (East Timor)", "Togo", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
    "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
    "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ].map((countryName) => (
    <option key={countryName} value={countryName} className="text-black">
      {countryName}
    </option>
  ))}
</select>


                      <input 
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className=' outline-none w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[30px] bg-transparent shadow-lg shadow-gray-300 text-[13px] font-semibold rounded-md mx-auto border-[1px] pl-[10px] border-[#002853]' 
                        placeholder='Email'
                        required
                      />

                      <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=' outline-none w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[30px] bg-transparent shadow-lg shadow-gray-300 text-[13px] font-semibold rounded-md mx-auto border-[1px] pl-[10px] border-[#002853]' 
                        placeholder='Password'
                        required
                      />

                      <input 
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className=' outline-none w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[30px] bg-transparent shadow-lg shadow-gray-300 text-[13px] font-semibold rounded-md mx-auto border-[1px] pl-[10px] border-[#002853]' 
                        placeholder='Confirm Password'
                        required
                      />

                      <input 
                        type="text" 
                        value={referralId}
                        onChange={(e) => setReferralId(e.target.value)}
                        className=' outline-none w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[30px] bg-transparent shadow-lg shadow-gray-300 text-[13px] font-semibold rounded-md mx-auto border-[1px] pl-[10px] border-[#002853]' 
                        placeholder='Referal ID (Optional)'
                        
                      />


                      <div className='flex w-[80%] md:w-[60%] lg:w-[80%] mx-auto'>
                        <input type="checkbox" />
                        <h2 className='ml-[5px] text-[14px] text-gray-500 font-semibold'>Accept <Link to="/terms"><span className='text-blue-500'>Terms & Conditions</span></Link></h2>
                      </div>

                      <div className='w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[37px] mx-auto rounded-md bg-[#002853]'>
                        <button
                          type="submit"
                          disabled={loading}
                          className='w-full md:w-full lg:w-full h-full lg:h-full mx-auto rounded-md bg-[#002853] text-white font-normal'>
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>
                      </div>

                      <div className='w-[80%] md:w-[60%] lg:w-[80%] mx-auto flex justify-evenly align-middle mt-[10px]'>
                        <div className='w-[100px] h-[1px] bg-gray-400 my-auto'></div>
                        <h2 className='text-[12px] text-gray-600'>Or</h2>
                        <div className='w-[100px] h-[1px] bg-gray-400 my-auto '></div>
                      </div>

                      <div className='w-[80%] mx-auto'>
                        <Link to="/Login">
                          <h2 className='text-center text-[13px] font-semibold text-gray-700'>Already have an accout? <a href="#" className='text-blue-500'>Login</a></h2>
                        </Link>
                      </div>

                      <div className='w-[100%] pb-4 md:pb-0  flex flex-col justify-center gap-y-2 mt-[2px]'>
                        <button className='w-[80%] md:w-[60%] lg:w-[80%] h-[30px] mx-auto rounded-md  bg-transparent shadow-lg shadow-gray-300 border-[#002853] border-[1px] text-[14x] font-normal'>Sign Up With Google</button>
                        <button className='w-[80%] md:w-[60%] lg:w-[80%] h-[30px] mx-auto rounded-md bg-[#002853] text-white text-[14x] font-normal'>Sign Up With Apple</button>
                      </div>
                    </form>
          
                </div>
             </div>
        </div>
    </div>
  )
}

export default UserSignup;
