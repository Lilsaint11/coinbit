const Profile = () => {
    return ( 
        <div  className="pl-80 bg-gradient-to-tl from-blue-900 to-black px-28 w-full h-screen">
            <div className="pt-20 flex flex-col items-center gap-5 justify-center mb-10">
                <h3 className=" text-white text-6xl font-semibold">Edit Profile</h3>
                <form action="" className=" w-full px-5 flex flex-col gap-5 justify-center text-white">
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder="First Name" className="bg-transparent border-[1px] w-full text-[13px] focus:outline-none py-3 pl-3 rounded-lg" value="John"/>
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder="Last Name"  className="bg-transparent border-[1px] w-full text-[13px] focus:outline-none py-3 pl-3 rounded-lg" value="Doe" />
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Email"  className="bg-transparent border-[1px] w-full text-[13px] focus:outline-none py-3 pl-3 rounded-lg" value="johndoe@yahoo.com"/>
                        <p className="text-white underline text-[13px]">Change Password?</p>
                        <button className=" w-full bg-gradient-to-tl from-blue-900 to-sky-500 h-12 rounded-full shadow-sm shadow-slate-800">Save Changes</button>
                    </form>
            </div>
        </div>
     );
}
 
export default Profile;