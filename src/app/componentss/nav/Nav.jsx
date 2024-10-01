import { RiHomeSmile2Fill } from "react-icons/ri";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdHomeRepairService } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";

const Nav = () => {
  return (
    <div className="fixed left-0 bottom-0 z-30 h-[70px] p-3 w-[390px] bg-[#fff] rounded-[15px] shadow-md">
        <ul className="flex justify-between items-center w-full h-full">
            <li>
                <a href="#" className="flex flex-col items-center justify-center gap-2 text-secondary-color">
                    <RiHomeSmile2Fill className="text-[25px] font-bold"/>
                    <p className="text-[12px] text-[#8891A5] font[500]">Home</p>
                </a>
            </li>

            <li>
                <a href="#" className="flex flex-col items-center justify-center gap-2">
                    <BiSolidCategoryAlt className="text-[25px] font-bold"/>
                    <p className="text-[12px] text-[#8891A5] font[500]">Categories</p>
                </a>
            </li>

            <li>
                <a href="#" className="flex flex-col items-center justify-center gap-2">
                    <MdHomeRepairService className="text-[25px] font-bold"/>
                    <p className="text-[12px] text-[#8891A5] font[500]">Services</p>
                </a>
            </li>

            <li>
                <a href="#" className="flex flex-col items-center justify-center gap-2">
                    <MdMoreVert className="text-[25px] font-bold"/>
                    <p className="text-[12px] text-[#8891A5] font[500]">More</p>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Nav