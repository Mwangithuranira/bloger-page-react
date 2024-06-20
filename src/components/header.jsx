import  { useState } from 'react';
import '../App.css';
// this is the header component

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      <div className="main">
        <div className="header">
          <div className="headercontent">
            <h2>Blogr</h2>
            <ul onMouseEnter={() => toggleDropdown('product')} onMouseLeave={() => toggleDropdown(null)}>
              <h6>Product</h6>
              {openDropdown === 'product' && (
                <>
                  <li><a href="">Overview</a></li>
                  <li><a href="">Pricing</a></li>
                  <li><a href="">Marketplace</a></li>
                  <li><a href="">Features</a></li>
                  <li><a href="">Integrations</a></li>
                </>
              )}
            </ul>
            <ul onMouseEnter={() => toggleDropdown('company')} onMouseLeave={() => toggleDropdown(null)}>
              <h6>Company</h6>
              {openDropdown === 'company' && (
                <>
                  <li><a href="">About</a></li>
                  <li><a href="">Team</a></li>
                  <li><a href="">Blog</a></li>
                  <li><a href="">Careers</a></li>
                </>
              )}
            </ul>
            <ul onMouseEnter={() => toggleDropdown('connect')} onMouseLeave={() => toggleDropdown(null)}>
              <h6>Connect</h6>
              {openDropdown === 'connect' && (
                <>
                  <li><a href="">Contact</a></li>
                  <li><a href="">Newsletter</a></li>
                  <li><a href="https://www.linkedin.com/feed/">LinkedIn</a></li>
                </>
              )}
            </ul>
          </div>
          <div className="headers">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
        <h5>A modern publishing platform</h5>
        <p className="color">Grow your audience and build your online brand</p>
        <button>Start for Free</button>
        <button>Learn More</button>
      </div>
    </>
  );
}

export default Header;
