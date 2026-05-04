import React from 'react';

const FullPageSkeleton = () => {
  return (
    <div className="marketplace-layout">
      <aside className="filters-sidebar">
        <div className="filter-group-container">
          <div className="filter-group">
            <div className="skeleton-box" style={{ width: '40%', height: '12px', marginBottom: '15px' }}></div>
            <div className="checkbox-group">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="checkbox-item">
                  <div className="skeleton-box" style={{ width: '16px', height: '16px', borderRadius: '4px' }}></div>
                  <div className="skeleton-box" style={{ width: '60%', height: '14px' }}></div>
                </div>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <div className="skeleton-box" style={{ width: '50%', height: '12px', marginBottom: '15px' }}></div>
            <div className="skeleton-box" style={{ width: '100%', height: '45px', borderRadius: '10px' }}></div>
          </div>
          <div className="skeleton-box" style={{ width: '100%', height: '45px', borderRadius: '10px', marginTop: '10px' }}></div>
          <div className="skeleton-box" style={{ width: '100%', height: '180px', borderRadius: '16px', marginTop: '30px' }}></div>
        </div>
      </aside>

      <main className="content-area">
        <div className="category-chips-bar">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="category-chip" style={{ opacity: 0.8 }}>
              <div className="skeleton-box" style={{ width: '64px', height: '64px', borderRadius: '50%' }}></div>
              <div className="skeleton-box" style={{ width: '40px', height: '12px', marginTop: '10px' }}></div>
            </div>
          ))}
        </div>

        <div className="product-grid">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="product-card" style={{ opacity: 0.6 }}>
              <div className="card-image-wrapper">
                <div className="skeleton-box" style={{ width: '100%', height: '100%' }}></div>
              </div>
              <div className="card-body">
                <div className="skeleton-box" style={{ width: '80%', height: '24px', marginBottom: '12px' }}></div>
                <div className="supplier-section">
                  <div className="skeleton-box" style={{ width: '40%', height: '10px', marginBottom: '12px' }}></div>
                  <div className="supplier-brand-row">
                    <div className="skeleton-box" style={{ width: '44px', height: '44px', borderRadius: '10px' }}></div>
                    <div style={{ flex: 1 }}>
                      <div className="skeleton-box" style={{ width: '60%', height: '16px', marginBottom: '4px' }}></div>
                      <div className="skeleton-box" style={{ width: '30%', height: '12px' }}></div>
                    </div>
                  </div>
                </div>
                <div className="card-actions">
                  <div className="skeleton-box" style={{ flex: 1, height: '45px', borderRadius: '8px' }}></div>
                  <div className="skeleton-box" style={{ flex: 1, height: '45px', borderRadius: '8px' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FullPageSkeleton;
