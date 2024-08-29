import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl pb-2 font-bold">Abstract</h3>
            <ul>
              <li className='py-1'><a href="#">Branches</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl pb-2 font-bold">Resources</h3>
            <ul>
              <li className='py-1'><a href="#">Blog</a></li>
              <li className='py-1'><a href="#">Help Center</a></li>
              <li className='py-1'><a href="#">Release Notes</a></li>
              <li className='py-1'><a href="#">Status</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl pb-2 font-bold">Community</h3>
            <ul>
              <li className='py-1'><a href="#">Twitter</a></li>
              <li className='py-1'><a href="#">LinkedIn</a></li>
              <li className='py-1'><a href="#">Facebook</a></li>
              <li className='py-1'><a href="#">Dribbble</a></li>
              <li className='py-1'><a href="#">Podcast</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl pb-2 font-bold">Company</h3>
            <ul>
              <li className='py-1'><a href="#">About Us</a></li>
              <li className='py-1'><a href="#">Careers</a></li>
              <li className='py-1'><a href="#">Legal</a></li>
              <li className='py-1'><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4 pt-6">
          <p>&copy; Copyright 2022 Abstract Studio Design <br /> Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;