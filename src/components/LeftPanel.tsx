import React from 'react';
import './styles.css';
const LeftPanel = () => {
  return (
    <div className="left-panel">
      <h2 style={{marginTop:'1vw'}}>Filters</h2>
      <section className="category-section">
        <div className="category-title">CATEGORIES</div>
        <div className="category-list">
          <h4>Footwear</h4>
          <a href="/footwear/womens-footwear">Women's Footwear</a>
          <a href="/footwear/kids-infant-footwear">Kids' & Infant Footwear</a>
          <a href="/footwear/mens-footwear">Men's Footwear</a>
        </div>
      </section>

      <section className="gender-section">
      
        <div className="category-list">
          <h4>Gender</h4>
          <a href="/male">Male</a>
          <a href="Female">Female</a>
          
        </div>
      </section>

      {/* Add more sections for other filters */}

      <section className="availability-section">
        <div className="availability-title">Availability</div>
        {/* Add your availability filter options here */}
      </section>
    </div>
  );
};

export default LeftPanel;
