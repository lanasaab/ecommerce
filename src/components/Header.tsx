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
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-5xl font-bold text-black mb-4">Beauty Pronounced</h1>
        <p className="text-2xl text-black">A Whole New Look</p>
        <button className="mt-8 text-lg font-semibold text-white bg-black rounded-md px-6 py-3 shadow-lg transition-all duration-300 hover:bg-white hover:text-black hover:border-black border border-transparent">
          View More
        </button>
      </div>

    </header>
  );
};

export default Header;
