import Image from 'next/image';
import Product from '@/app/componentss/product/Product';
import shoe from "@/app/public/assets/shoe.png"
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";


const products = [
    {
        image: shoe,
        name: "Nike Sportswear Club Fleece",
        price: "$99",
    },
    {
        image: shoe,
        name: "Nike Sportswear Club Fleece",
        price: "$99",
    },
    {
        image: shoe,
        name: "Nike Sportswear Club Fleece",
        price: "$99",
    },
    {
        image: shoe,
        name: "Nike Sportswear Club Fleece",
        price: "$99",
    },
    {
        image: shoe,
        name: "Nike Sportswear Club Fleece",
        price: "$99",
    },
    {
        image: shoe,
        name: "Nike Sportswear Club Fleece",
        price: "$99",
    },
    {
        image: shoe,
        name: "Nike Sportswear Club Fleece",
        price: "$99",
    },
]

const page = () => {
  return (
    <div className='pb-[100px]'>
        <div className='w-full h-[363px] rounded-[10px] overflow-hidden relative'>
            <Image
                src={shoe}
                alt="google"
                className="w-full h-full"
            />

            <button className='h-[32px] w-[32px] flex justify-center items-center rounded-[50%] bg-[#EEF3FF] absolute top-[54px] left-[20px] z-10'>
                <IoIosArrowBack className='text-[17px]'/>
            </button>

            <button className='h-[32px] w-[32px] flex justify-center items-center rounded-[50%] bg-[#EEF3FF] absolute top-[54px] right-[20px] z-10'>
                <FaHeart className='text-[17px] text-[#8E6CEF]'/>
            </button>
            
        </div>

        <div className='flex items-center justify-between my-5'>
            <div className='flex flex-col justify-start gap-2'>
                <h3 className='text-[16px] font-[600]'>Nike Shoes</h3>
                <span className='flex items-center justify-start gap-1'>
                    <FaStar className='text-[17px] text-[#FDCC0D]'/>
                    <FaStar className='text-[17px] text-[#FDCC0D]'/>
                    <FaStar className='text-[17px] text-[#FDCC0D]'/>
                    <FaStar className='text-[17px] text-[#FDCC0D]'/>
                    <FaStar className='text-[17px]'/>

                    <p className='text-[11px] font-[500] text-[#A1A1AB]'>110 Reviews</p>
                </span>
            </div>

            <h3 className='text-[15px] font-[600] text-[#8E6CEF]'>$430</h3>
        </div>

        <div className='flex flex-col justify-start gap-2 my-5'>
            <h3 className='text-[16px] font-[600]'>Description</h3>
            <p className='text-[11px] font-[500] text-[#9B9999]'>Culpa aliquam consequuntur veritatis at consequuntur praesentium beatae temporibus nobis. Velit dolorem facilis neque autem. Itaque voluptatem expedita qui eveniet id veritatis eaque. Blanditiis quia placeat nemo. Nobis laudantium nesciunt perspiciatis sit eligendi.</p>
        </div>
        
        <div className='flex flex-col justify-start gap-2 my-5'>
            <h3 className='text-[16px] font-[600]'>Size</h3>

            <div className='flex items-center justify-start gap-2'>
                <div className='h-[44px] w-[44px] text-[14px] rounded-[10px] font-[600] flex items-center justify-center border-[1px] border-[#CFCDCD]'>8</div>
                <div className='h-[44px] w-[44px] text-[14px] rounded-[10px] font-[600] flex items-center justify-center border-[1px] border-[#CFCDCD]'>8</div>
                <div className='h-[44px] w-[44px] text-[14px] rounded-[10px] font-[600] flex items-center justify-center border-[1px] border-[#CFCDCD]'>8</div>
                <div className='h-[44px] w-[44px] text-[14px] rounded-[10px] font-[600] flex items-center justify-center border-[1px] border-[#CFCDCD]'>8</div>
            </div>
        </div>

        <div className='flex items-center justify-between my-10'>
            <div className='flex items-center justify-start gap-2'>
                <div className='w-[44px] rounded-[50%] h-[44px] overflow-hidden'>
                    <Image
                        src={shoe}
                        alt='shoe'
                        className="h-full w-full object-center"
                    />
                </div>

                <div className="flex flex-col justify-start">
                    <h3 className='text-[16px] font-[600]'>Jay Store</h3>
                    <p className='text-[11px] font-[500] text-[#5cb85c]'>Open</p>
                </div>
            </div>

            <h3 className='text-[15px] font-[600] text-[#8E6CEF]'>2Km Away</h3>
        </div>  


        <div className='mt-5'>
            <h3 className='text-[16px] font-[600]'>Similar Products</h3>

            <div className="flex items-start justify-between overflow-auto gap-3 my-3">
            {products.map((content) => (
                <div>
                    <Product 
                        image={content.image}
                        name={content.name}
                        price={content.price}
                    />
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default page