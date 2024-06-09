import React from 'react';

const Footer = () => {
  return (
    // <footer className="px-8 flex items-center justify-center fixed z-10 inset-x-0 bottom-0 bg-customBlack text-black h-8">
    <footer className="mt-auto px-8 flex items-center justify-center bg-customBlack h-8" style={{ color: 'rgb(100, 10, 10)' }}>
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-sm">&copy; 2024 Home Maker. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;