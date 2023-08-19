"use client"
import { db } from "../firebase";
import { useEffect, useState } from "react";
import {  onAuthStateChanged, getAuth } from "firebase/auth";
import {
    doc,
    updateDoc,
    getDoc
  } from "firebase/firestore";
const Profile = () => {
   const [userId, setUserId] = useState();
   const auth = getAuth()
   
   const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    });

    const {firstName,lastName,email} = formData;

    function onChange(e){
        setFormData((prevState) => ({
            ...prevState,[e.target.id]: e.target.value
        }))
    }

   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        setUserId(user.uid)
        async function fetchDetails(){
            const docRef = doc(db, "users", user.uid)
            const docSnap = await getDoc(docRef)
            setFormData(docSnap.data())
        }
    fetchDetails()
    })
    
    },[db])

   async function onSubmit(e){
    e.preventDefault();
       try {
        const formDataCopy = {
            ...formData
          };
          delete formDataCopy.password;
          delete formDataCopy.confirmPassword;
        const docRef = doc(db, "users", userId);
        await updateDoc(docRef, formDataCopy);
        alert("Details Edited");
           
       } catch (error) {
           console.log(error)
       }
   
   }
    
    //console.log(userId)
    return ( 
        <div  className=" bg-gradient-to-tl from-blue-900 to-black px-28 max-[610px]:px-20 max-[472px]:px-10 max-[390px]:px-5  w-full pb-5">
            <div className="pt-20 flex flex-col items-center gap-5 justify-center mb-10">
                <h3 className=" text-white text-6xl max-[650px]:text-5xl max-[550px]:text-4xl font-semibold">Edit Profile</h3>
                <form action="" className=" w-full px-5 flex flex-col gap-5 justify-center text-white" onSubmit={onSubmit}>
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder="First Name" className="bg-transparent border-[1px] w-full text-[13px] focus:outline-none py-3 pl-3 rounded-lg capitalize" value={firstName} id="firstName" onChange={onChange} />
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder="Last Name"  className="bg-transparent border-[1px] w-full text-[13px] focus:outline-none py-3 pl-3 rounded-lg capitalize" value={lastName} id="lastName" onChange={onChange} />
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Email"  className="bg-transparent border-[1px] w-full text-[13px] focus:outline-none py-3 pl-3 rounded-lg" value={email} id="email" onChange={onChange} />
                        <p className="text-white underline text-[13px]">Change Password?</p>
                        <button onClick={onSubmit} className=" w-full bg-gradient-to-tl from-blue-900 to-sky-500 h-12 rounded-full shadow-sm shadow-slate-800">Save Changes</button>
                    </form>
            </div>
        </div>
     );
}
 
export default Profile;