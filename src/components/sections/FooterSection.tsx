import React from "react";
import { Separator } from "../ui/separator";

function FooterSection() {

  const email = "touristjunction8@gmail.com";
  const phone = "8669124213"; 


  return (
    <section className="flex flex-col gap-[1.9rem] w-full mt-[10.44rem]">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <img src="/images/icon.png" alt="footer logo" className="w-20 h-50"/>
        </div>
        <div className="text-lightBlue text-[1rem] font-serif">
          © 2024 Tourists Junction. All rights reserved.
        </div>
        <div className="text-lightBlue text-[1rem] font-serif">
               Email: touristjunction8@gmail.com
          </div>
        <div className="text-lightBlue text-[1rem] font-serif">
         Mob No - 8669124213
        </div>
       
        {/* <div className="flex gap-4">
          <p className="text-lightBlue text-[1rem]">Portfolio</p>
          <p className="text-lightBlue text-[1rem]">How it Works</p>
          <p className="text-lightBlue text-[1rem]">Pricing</p>
          <p className="text-lightBlue text-[1rem]">About</p>
          <p className="text-lightBlue text-[1rem]">Login</p>
        </div> */}
      </div>
      <Separator />
      <div className="pb-[2.56rem]">
        <p className="text-customGray">
        Tourist Junction – Your gateway to a smarter, more efficient travel business!
        </p>
        
      </div>
    </section>
  );
}

export default FooterSection;
