import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>Main Street</p>
            <p>Ujjain, Madhya Pradesh</p>
            <p>
              Email:{" "}
              <a
                href="mailto:Flickopedia@example.com"
                className="text-gray-400 hover:text-white"
              >
                Flickopedia@example.com
              </a>
            </p>
            <p>Phone: +91 9876543210</p>
          </div>


          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;