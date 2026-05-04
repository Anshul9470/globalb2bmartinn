import React from 'react';

const SupplierSkeleton = () => {
  return (
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
              <div className="supplier-meta-grid" style={{ marginTop: '12px' }}>
                <div className="skeleton-box" style={{ width: '30%', height: '20px', borderRadius: '6px' }}></div>
                <div className="skeleton-box" style={{ width: '40%', height: '20px', borderRadius: '6px' }}></div>
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
  );
};

export default SupplierSkeleton;
