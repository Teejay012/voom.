import product from "@/app/public/assets/product.png"
import Image from 'next/image';
import { BsBalloonHeart } from "react-icons/bs";

const Product = ({ image, name, price}) => {
  return (
    <a href="./product-page">
        <div className="rounded-[15px] overflow-hidden w-[160px] h-[171px] relative mb-3">
            <Image
                src={image}
                alt={name}
                className="w-full h-full object-center"
            />

            <BsBalloonHeart className="absolute top-[15px] right-[15px] font-bold text-[17px]"/>
        </div>

        <p className="text-[11px] text-[#1D1E20] font-[500]">{name}</p>
        <h3 className="text-[13px] text-[#1D1E20] font-[600]">{price}</h3>
    </a>
  )
}

export default Product