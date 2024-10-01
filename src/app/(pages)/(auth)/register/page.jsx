import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const Register = () => {
  return (
    <div>
        <h2 className='text-[28px] font-[600] my-5'>Create account</h2>

        <form action="#">
          <div className='my-5'>
            <label htmlFor="" className='text-[16px] font-[600] mb-5'>Full name</label>
            <input type="text" required placeholder='Insert full name' className='h-[52px] px-5 rounded-[8px] w-full bg-[#C4C4C436] text-[#5D5D5D70] outline-none'/>
          </div>

          <div className='my-5'>
            <label htmlFor="" className='text-[16px] font-[600] mb-5'>Email</label>
            <input type="text" required placeholder='Insert email address' className='h-[52px] px-5 rounded-[8px] w-full bg-[#C4C4C436] text-[#5D5D5D70] outline-none'/>
          </div>

          <div className='my-5 relative'>
            <label htmlFor="" className='text-[16px] font-[600] mb-5'>Password</label>
            <input type="text" required placeholder='Create password ' className='h-[52px] px-5 rounded-[8px] w-full bg-[#C4C4C436] text-[#5D5D5D70] outline-none'/>
            <IoEyeOutline className="absolute bottom-[15px] right-[15px] text-[#5D5D5D70] text-[17px]"/>
          </div>

          <div className='my-5 relative'>
            <label htmlFor="" className='text-[16px] font-[600] mb-5'>Confirm password</label>
            <input type="text" required placeholder='Re-enter password' className='h-[52px] px-5 rounded-[8px] w-full bg-[#C4C4C436] text-[#5D5D5D70] outline-none'/>
            <IoEyeOutline className="absolute bottom-[15px] right-[15px] text-[#5D5D5D70] text-[17px]"/>
          </div>

          <p className="text-[12px] font-[600]">By creating an account you accept our <a href="#" className="text-secondary-color">Terms of Service</a> and <a href="#" className="text-secondary-color">Privacy Policy</a></p>

          <button className="my-5 text-[18px] font-[600] bg-secondary-color h-[52px] w-full rounded-[8px] text-[#fff] transform hover:scale-105 duration-300">Create account</button>
        </form>

        <span className="flex items-center justify-center">
          <p className="text-[12px] font-[600]">Already have an Account?</p>
          <a href="#" className="text-[#8E6CEF] text-[12px] font-[600] gap-2">Sign In</a>
        </span>
    </div>
  )
}

export default Register