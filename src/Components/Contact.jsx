import React, { useState } from "react";

export default function Contact() {

  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
 function handleSubmit(e){
    e.preventDefault(); 
  }

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-center items-center relative">
          <h1 className="py-3 text-center pt-5 font-bold text-3xl relative text-capitalize text-[#2C3E50] afterH1">
            Contact Us
          </h1>
        </div>

        <div className="container mx-auto sm:px-4 md:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-center mt-10">
            <div className="w-full max-w-md">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className={userName?"text-[#00D492] capitalize":"hidden"}>user name : </div>
                <input type="text" placeholder="User Name" onChange={(e)=>{setUserName(e.target.value)}} className=" py-3 px-4 w-full shadow outline-0 my-3" />
                <div className={userAge?"text-[#00D492] capitalize":"hidden"}>user age : </div>
                <input type="number" placeholder="User Age" onChange={(e)=>{setUserAge(e.target.value)}} className=" py-3 px-4 w-full shadow outline-0 my-3" />
                <div className={email?"text-[#00D492] capitalize":"hidden"}>email : </div>
                <input type="email" placeholder="E-Mail" onChange={(e)=>{setEmail(e.target.value)}} className=" py-3 px-4 w-full shadow outline-0 my-3" />
                <div className={password?"text-[#00D492] capitalize":"hidden"}>password : </div>
                <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} className=" py-3 px-4 w-full shadow outline-0 my-3" />
                <input type="button" value="Send Message" onClick={()=> handleSubmit ()} className=" mx-2 mt-5 cursor-pointer shadow rounded-2xl px-4 py-2 text-white bg-[#00D492]" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
