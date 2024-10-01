import { RiMenu4Fill } from "react-icons/ri";
import { RiShoppingBag4Line } from "react-icons/ri";

const Header = () => {
  return (
    <div className="flex items-center gap-3 py-5">
        <div className="h-[32px] w-[32px] bg-[#F5F6FA] rounded-[50%] flex justify-center items-center cursor-pointer">
            <RiMenu4Fill  className="font-bold text-[17px]"/>
        </div>

        <div className="mr-auto">
            <p className="text-[12px] font-[300]">Hello!</p>
            <h3 className="text-[14px] font-[600]">Stranger 👋</h3>
        </div>

        <a href="#" className="h-[32px] w-[32px] bg-[#F5F6FA] rounded-[50%] flex justify-center items-center cursor-pointer">
            <RiShoppingBag4Line  className="font-bold text-[17px]" />
        </a>
    </div>
  )
}

export default Header