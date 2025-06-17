import React from "react";
import { IoGift } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoBagSharp } from "react-icons/io5";;

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 lg:ms-10 md:ms-5 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Row 1: Logo + Description + Payments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="KH-SHOP Logo" className="w-27 h-22" />
              <span className="text-2xl font-bold">KH-SHOP</span>
              {/* <img src="/image.png" alt="No image" className="w-50 h-50" /> */}
            </div>
            <p className="text-xl">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div>
              <h4 className="font-bold text-2xl mb-2">Accepted Payments</h4>
              <div className="flex flex-wrap gap-2">
                  <img src="https://help.zazzle.com/hc/article_attachments/360010513393" alt="No-Image"
                      className="w-68 h-15"
                />
                {/* {[
                  "stripe",
                  "visa",
                  "mastercard",
                  "amazon",
                  "klarna",
                  "paypal",
                  "applepay",
                  "googlepay",
                ].map((method) => (
                  <img
                    key={method}
                    src={`/payments/${method}.png`}
                    alt={method}
                    className="w-10 h-6 object-contain"
                  />
                ))} */}
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Department + About + Services + Help (2 columns on mobile) */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Department */}
          <div>
            <h4 className="font-bold mb-4">Department</h4>
            <ul className="space-y-1 text-sm">
              {[
                "Fashion",
                "Education Product",
                "Frozen Food",
                "Beverages",
                "Organic Grocery",
                "Office Supplies",
                "Beauty Products",
                "Books",
                "Electronics & Gadget",
                "Travel Accessories",
                "Fitness",
                "Sneakers",
                "Toys",
                "Furniture",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-1 text-sm">
              {[
                "About Shopcart",
                "Careers",
                "News & Blog",
                "Help",
                "Press Center",
                "Shop By Location",
                "Shopcart Brands",
                "Affiliate & Partners",
                "Ideas & Guides",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-1 text-sm">
              {[
                "Gift Card",
                "Mobile App",
                "Shipping & Delivery",
                "Order Pickup",
                "Account Signup",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className=" space-y-1 text-sm  ">
              {[
                "Shopcart Help",
                "Returns",
                "Track Orders",
                "Contact Us",
                "Feedback",
                "Security & Fraud",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom: 2 Rows on Phones */}
          <div className="border-t pt-6 text-sm text-center space-y-6 md:space-y-0">
      <div className="flex flex-col md:flex-row md:justify-between gap-y-10 md:gap-y-0 md:items-center">
        
        {/* Icons Section */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
          <div className="flex items-center gap-2">
            <IoBagSharp className="text-pink-500 w-5 h-5" />
            <span className=" hover:text-pink-600 duration-150 ease-in-out">Become Seller</span>
          </div>
          <div className="flex items-center gap-2">
            <IoGift className="text-pink-500 w-5 h-5" />
            <span className=" hover:text-pink-600 duration-150 ease-in-out">Gift Cards</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMdHelpCircleOutline className="text-pink-500 w-5 h-5" />
            <span className=" hover:text-pink-600 duration-150 ease-in-out">Help Center</span>
          </div>
        </div>

        {/* Text Links Section */}
        <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-6 mt-6 md:mt-0 text-center md:text-left">
          <span className=" hover:text-pink-600 duration-150 ease-in-out">Terms of Service</span>
          <span className=" hover:text-pink-600 duration-150 ease-in-out">Privacy & Policy</span>
          <span >
            All Rights Reserved by Musemind{" "}
            <a href="#" className="text-pink-600 underline">ui/ux design</a> agency | 2022
          </span>
        </div>
      </div>
    </div>



      </div>
    </footer>
  );
};

export default Footer;
