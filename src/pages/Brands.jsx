import React from 'react';
import { Link } from '../components/Shared';
import { productBrands } from '../data/productsData';

export default function Brands() {
  return (
    <div className="products-page">
      <section className="section page-header">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span /> OUR PARTNERS</div>
              <h2>World-leading <em>brands.</em></h2>
            </div>
            <p>Teknomac partners with world-class manufacturers to deliver the finest power transmission and industrial automation solutions. Each brand brings unique expertise and innovation to every application.</p>
          </div>
        </div>
      </section>

      <div className="container brand-grid">
        {productBrands.map(brand => (
          <div key={brand.brandName} className="brand-card">
            <div className="brand-visual">
              <h3 className="brand-title">{brand.brandName}</h3>
              <p className="brand-desc">{brand.brandDesc}</p>
            </div>
            <div className="brand-products">
              {brand.sections.slice(0, 3).map(section => (
                <div key={section.sectionName} className="product-item">
                  <span>{section.sectionName}</span>
                  <span>{section.types.length} types</span>
                </div>
              ))}
              <div className="product-item">
                <span>View all</span>
                <span>{brand.sections.length} sections</span>
              </div>
            </div>
            <Link to={`/products#${brand.brandName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="brand-link">
              Explore products →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}