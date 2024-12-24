import { Home, Menu, Search, ShoppingBag } from "lucide-react";



export default function Headers(){
    return(
        <div className="flex justify-evenly items-center bg-slate-500 h-[60px]  w-full">
            <div className="logo text-4xl font-bold ">
            Titok
           
            </div>
           
            <div className=" hidden md:flex gap-5 text-xl items-center">
                <h1>HOME</h1>
                <h1>ABOUT</h1>
                <h1>CONTACT</h1>
            </div>
            <div className="icon text-2xl flex gap-5 ">
       <span className="flex ">  <Search/>  </span>
       <span className=" text-2xl"> <Home/></span> 
       <span className="text-2xl "> <ShoppingBag/></span> 
       <span className="text-2xl  md:hidden"><Menu/></span>
        
            </div>
           
        </div>
      
        
    
    ) 
}