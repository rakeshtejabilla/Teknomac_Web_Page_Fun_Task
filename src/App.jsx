import React, { useState, useEffect } from 'react';
import { Icon, Link } from './components/Shared';
import Home from './pages/Home';
import Products from './pages/Products';
import Industries from './pages/Industries';
import { productBrands } from './data/productsData';

export default function App() {
  const [menu, setMenu] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  let page;
  if (currentPath === '/products') {
    page = <Products />;
  } else if (currentPath === '/industries') {
    page = <Industries />;
  } else {
    page = <Home />;
  }
  
  return (
    <div>
      <div className="topbar">
        <div>TEKNOMAC ENGINEERS · Experience the Power Transmission Solutions at its finest</div>
        <div className="top-links">
          <span>📞 +91 9441204774 / 9100930177</span>
          <span>✉ info@teknomac.in</span>
          <span>📍 Habsiguda, Hyderabad</span>
        </div>
      </div>
      
      <header className="header">
        <div className="container nav">
          <Link to="/" className="brand" onClick={() => setMenu(false)}>
            <img src="/assets/teknomac-logo.png" alt="Teknomac Engineers" />
          </Link>
          
          <nav className={menu ? 'open' : ''}>
            <Link to="/" onClick={() => setMenu(false)}>Home</Link>
            
            <div className="nav-item has-dropdown">
              <Link to="/products" onClick={() => setMenu(false)}>Products</Link>
              <div className="dropdown-menu">
                {productBrands.map(brand => (
                  <div key={brand.brandName} className="dropdown-item has-sub-dropdown">
                    <Link 
                      to={`/products#${brand.brandName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} 
                      onClick={() => setMenu(false)}
                    >
                      {brand.brandName}
                    </Link>
                    <div className="sub-dropdown-menu">
                      {brand.sections.map(section => {
                        const sectionId = `${brand.brandName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${section.sectionName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
                        return (
                          <Link 
                            key={section.sectionName} 
                            to={`/products#${sectionId}`} 
                            onClick={() => setMenu(false)}
                          >
                            {section.sectionName}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/industries" onClick={() => setMenu(false)}>Industries</Link>
            <Link to="/#about" onClick={() => setMenu(false)}>About</Link>
            <Link to="/#contact" onClick={() => setMenu(false)}>Contact</Link>
          </nav>
          
          <Link to="/#contact" className="nav-cta" onClick={() => setMenu(false)}>
            Request a Quote <Icon name="arrow" size={17} />
          </Link>
          
          <button className="hamb" onClick={() => setMenu(!menu)}>
            {menu ? <Icon name="x" /> : <Icon name="menu" />}
          </button>
        </div>
      </header>

      <main>
        {page}
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/assets/teknomac-logo-footer.png" alt="Teknomac Engineers" />
            </div>
            <p><strong>TEKNOMAC ENGINEERS</strong> — Experience the Power Transmission Solutions at its finest. Engineered machinery and power transmission solutions for demanding industries.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link to="/products">Products</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/#about">About Us</Link>
            <Link to="/#contact">Contact Us</Link>
          </div>
          <div>
            <h4>Solutions</h4>
            <span>Power Transmission</span>
            <span>Braking & Safety Systems</span>
            <span>Shaft-Hub Connections</span>
            <span>Industrial Gearboxes</span>
          </div>
          <div>
            <h4>Contact Details</h4>
            <span><strong>M.A. Choudary</strong></span>
            <span style={{ color: 'var(--lime)', fontSize: '11px', fontWeight: '600' }}>Founder & Director - Technical</span>
            <span>📞 +91-9441204774</span>
            <span>📞 9100930177 / 7989084748</span>
            <span>✉ mac@teknomac.in</span>
            <span>✉ info@teknomac.in</span>
            {/* <span>🌐 www.teknomac.in</span> */}
            <span style={{ marginTop: '8px', lineHeight: '1.5', display: 'block', color: '#c5d8cd' }}>
              📍 #1-3-79, F.No. 17, 2nd Floor, Jaya Nagar, St. No. 6, Habsiguda, Hyderabad-500 007. Telangana, India.
            </span>
          </div>
        </div>
        <div className="container copyright">
          <span>© 2026 TEKNOMAC ENGINEERS. All rights reserved.</span>
          <span>Experience the Power Transmission Solutions at its finest</span>
        </div>
      </footer>
    </div>
  );
}
