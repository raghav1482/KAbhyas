import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4 f-col">
            <h5 className='sp-font'>About Us</h5>
            <p>KARO ABHYAS<br/>112, ELECTRONIC CITY<br/>BANGALORE , INDIA</p>
          </div>
          <div className="col-md-4 f-col">
            <h5 className='sp-font'>Contact Us</h5>
            <ul>
              <li>Email: example@example.com</li>
              <li>Phone: 123-456-7890</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
