import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="flex justify-center">
        <img alt="Logo" src="/logo.jpg" className="w-36 h-24 rounded-lg mt-2.5" />
      </div>
      <nav>
        <ul className="flex justify-center list-none">
          <li className="mx-4"><a href="#home" className="text-black no-underline p-3.5 block">Home</a></li>
          <li className="mx-4"><a href="#shop" className="text-black no-underline p-3.5 block">Shop</a></li>
          <li className="mx-4"><a href="#contact" className="text-black no-underline p-3.5 block">Contact</a></li>
          <li className="mx-4"><a href="#about" className="text-black no-underline p-3.5 block">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
