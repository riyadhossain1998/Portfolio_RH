import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          {/* Your logo goes here */}
          <img src="logo.png" alt="Logo" className="h-8" />
        </div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex">
            <li className="mr-6"><a href="#home" className="hover:text-white">Home</a></li>
            <li className="mr-6"><a href="#about" className="hover:text-white">About</a></li>
            <li className="mr-6"><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </nav>
        <div>
          {/* Your social media icons or links go here */}
          <a href="#" className="text-gray-300 hover:text-white mr-4"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-gray-300 hover:text-white mr-4"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-300 hover:text-white mr-4"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Your Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
