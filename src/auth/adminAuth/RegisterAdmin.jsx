import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function RegisterAdmin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [schoolCode, setSchoolCode] = useState("")
  const [schoolName,setSchool] = useState("")
  const [schoolType,setSchoolType] = useState("")
  const [establishedYear,setEstablishedYear] = useState("")
  const navigate = useNavigate()

  const handaleFormData =()=>{
    navigate("/das-bord")
  }
  return (
    <div className=' h-[100dvh]'>
      <div className=' h-[100%] bg-linear-to-t from-blue-950 to-black'>

        {/* =========for laptop=============== */}
        <div className=' h-[100%] flex flex-col lg:flex-row items-center gap-6 p-6'>



          <div className='h-[80%] w-[50%] shadow-lg/30 rounded-2xl flex flex-col items-center justify-center'>
            <div className=' flex flex-col gap-3 justify-center items-center'>
              <img src={`${email.includes(".com")? "close.png":"eye.png"}`} alt="" className={` h-10 ${email.length>1 ? " block":" hidden"}`} />
                

                 <input
                value={schoolName}
                onChange={e => setSchool(e.target.value)}
                type="text" placeholder='school Name'
                className=' bg-linear-to-l from-blue-300 to-green-100/60 placeholder:font-bold text-black px-18 py-3 rounded-2xl outline-none shadow-lg/30 shadow-amber-50/60'
              />
              <div className=' flex flex-row justify-around gap-2'>
                <input
                value={schoolType}
                onChange={e => setSchoolType(e.target.value)}
                type="text" placeholder='school Type'
                className=' bg-linear-to-l w-39 from-blue-300 to-green-100/60 placeholder:font-bold text-black px-4 py-3 rounded-2xl outline-none shadow-lg/30 shadow-amber-50/60'
              />
              <input
                value={establishedYear}
                onChange={e => setEstablishedYear(e.target.value)}
                type="text" placeholder=' Established Year'
                className=' bg-linear-to-l w-39 from-blue-300 to-green-100/60 placeholder:font-bold placeholder:text-sm text-black px-1 py-2 rounded-2xl outline-none shadow-lg/30 shadow-amber-50/60'
              />

              </div>

              

              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="text" placeholder='school01@gmail.com'
                className=' bg-linear-to-l from-blue-300 to-green-100/60 placeholder:font-bold text-black px-18 py-3 rounded-2xl outline-none shadow-lg/30 shadow-amber-50/60'
              />
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="text" placeholder='school-password'
                className=' bg-linear-to-l from-blue-300 to-green-100/60 placeholder:font-bold text-black px-18 py-3 rounded-2xl outline-none shadow-lg/30 shadow-amber-50/60'
              />
              <input
                value={schoolCode}
                onChange={e => setSchoolCode(e.target.value)}
                type="text" placeholder='school-code'
                className=' bg-linear-to-l from-blue-300 to-green-100/60 placeholder:font-bold text-black px-18 py-3 rounded-2xl outline-none shadow-lg/30 shadow-amber-50/60'
              />

              <button type="text"
                onClick={handaleFormData}
                className='  bg-linear-to-l from-blue-800 to-green-800/60 font-bold px-15 py-2 rounded-2xl text-xl hover:shadow-amber-50 shadow-lg/30'
              >
                Register
              </button>
              <p className=' font-bold text-white/80'>Register your school to start managing it digitally</p>

              <p className="text-white text-sm">
                You have an account?
                <span
                  onClick={() => navigate("/admin-login")}
                  className="text-red-400 font-semibold ml-2 cursor-pointer hover:text-red-300 transition"
                >
                  Log-in your school
                </span>
              </p>

            </div>

          </div>
          {/* -------------------------------------image div----------------------- */}
          <div className=' h-[80%] w-[100%] lg:w-[50%]  rounded-2xl flex shadow-lg/30 relative'>
            {email.length > 0 ?
              <div className=" box-animate rounded-lg backdrop-blur-sm  h-35 w-50 justify-center ml-[] mb-[]  absolute flex items-center">
                <img src="gmail.png" alt="" className={` box-animate ${password.length > 1 ? " h-20 w-20" : ""} `} />
                {password.length > 1 ? (<img src="password.png" alt="" className={` box-animate  rounded-[100%] w-30 h-30 `} />) : ""}

              </div> : ("")
            }
            <img src="admin.png" alt="" className='box-animate mt-5' />


          </div>


        </div>

      </div>

    </div>
  )
}

export default RegisterAdmin