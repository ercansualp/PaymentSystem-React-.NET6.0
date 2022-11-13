import React from "react";
import ReactStars from 'react-stars'
import { AiOutlineHeart,AiOutlineShoppingCart } from "react-icons/ai";

class Item extends React.Component {

    render() {
        return (
            <a href="https://www.google.com" className=" shadow-lg  shadow-slate-500/50 flex flex-col  border border-solid rounded-2xl font-semibold p-3 w-64 z-10 cursor-pointer text-center">
                <AiOutlineHeart className="justify-end"/>
                <img alt="" className="w-32 p-2 m-auto " src="https://productimages.hepsiburada.net/s/80/550/110000021825598.jpg/format:webp"/>
                <h3 className="text-xs m-1">Samsung LC24F396FHRXUF 23,5" 60Hz 4ms (Analog+HDMI) FreeSync Full HD Curved LED Monitör</h3>
                <div className="flex flex-row m-auto">
                <ReactStars
                        count={5}
                        className="m-auto"
                        size={24}
                        color2={'#ffd700'} value={2} />
                    <p className="items-center flex p-2">(18)</p>
                </div>

                <p className="font-bold text-s m-1">2.335,00 TL</p>
                <button className="bg-blue-800  border z-20 border-solid rounded-md text-white p-1 m-2">
                    <div className="m-auto w-100 flex items-center  text-center"><p><AiOutlineShoppingCart /></p>
                    <p>Add To Cart</p></div></button>
            </a> 
        )
    }

}

export default Item;