import React from 'react';
import { Icon, Link } from '../components/Shared';

const offers = [
  {
    name: 'Complete Freewheels',
    category: 'RINGSPANN · Freewheels',
    image: '/uploads/ringspann/complete-freewheels.png',
    discount: 'Save up to 15%',
    description: 'Reliable overrunning and indexing solutions, completely enclosed with bearing support.',
    offer: 'Volume order offer',
  },
  {
    name: 'Industrial Brake Calipers',
    category: 'RINGSPANN · Industrial Brakes',
    image: '/uploads/ringspann/Industrial-Brake-Calipers.jpg',
    discount: 'Save up to 12%',
    description: 'Industrial braking options for demanding applications, with multiple actuation and release types.',
    offer: 'Selected models',
  },
  {
    name: 'Shrink Discs',
    category: 'RINGSPANN · Shaft-Hub Connections',
    image: '/uploads/ringspann/shrink-discs.png',
    discount: 'Save up to 10%',
    description: 'Backlash-free external clamping connections for securing hollow shafts or hubs to shafts.',
    offer: 'Project pricing',
  },
  {
    name: 'Elastomer Couplings',
    category: 'RINGSPANN · Couplings',
    image: '/uploads/ringspann/elastomer-couplings-backlash-free.png',
    discount: 'Save up to 10%',
    description: 'Backlash-free coupling solutions to suit precision drive and motion-control applications.',
    offer: 'Multi-unit offer',
  },
];

export default function Deals() {
  return (
    <div className="deals-page">
      <section className="deals-hero">
        <div className="container deals-hero-inner">
          <div className="deals-hero-copy">
            <div className="eyebrow"><span /> TEKNOMAC ENGINEERS · LIMITED-TIME OFFERS</div>
            <h1>Better value for your <em>next project.</em></h1>
            <p>Explore current savings on selected power transmission products. Tell us what your application needs and our team will confirm the right model and available offer.</p>
            <Link to="/#contact" className="btn primary">Ask about an offer <Icon name="arrow" size={18} /></Link>
          </div>
          <div className="deals-hero-card">
            <span className="deals-hero-icon">%</span>
            <span className="deals-hero-kicker">SELECTED PRODUCTS</span>
            <strong>Special pricing<br />for your project</strong>
            <span className="deals-hero-note">Ask us about quantity and application-based savings.</span>
          </div>
        </div>
      </section>

      <section className="deals-listing section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span /> CURRENT DEALS</div>
              <h2>Featured <em>product offers.</em></h2>
            </div>
            <p>Offers are subject to model availability, order quantity and confirmation by our team. Contact us for a project-specific quote.</p>
          </div>

          <div className="deals-grid">
            {offers.map((offer, index) => (
              <article className="deal-card" key={offer.name} style={{ '--delay': `${index * 60}ms` }}>
                <div className="deal-visual">
                  <img src={offer.image} alt={offer.name} />
                  <span className="deal-discount">{offer.discount}</span>
                  <span className="deal-category">{offer.category}</span>
                </div>
                <div className="deal-info">
                  <span className="deal-offer">{offer.offer}</span>
                  <h3>{offer.name}</h3>
                  <p>{offer.description}</p>
                  <Link to="/#contact" className="deal-link">Get offer details <Icon name="arrow" size={16} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deals-note">
        <div className="container deals-note-inner">
          <div>
            <span>Need a different product?</span>
            <p>We can help source the right solution for your application.</p>
          </div>
          <Link to="/products" className="btn ghost">Browse all products <Icon name="arrow" size={18} /></Link>
        </div>
      </section>
    </div>
  );
}
