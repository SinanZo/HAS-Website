import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to Hilmi Abu Sham</h1>
      <p>Your trusted partner in business solutions.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
          <h3>Safety Helmets</h3>
          <ul>
            <li>Zircon1</li>
            <li>Diamond5</li>
            <li>QUARTZ UP III</li>
            <li>QUARTZ UP IV</li>
          </ul>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
          <h3>Disposable Masks</h3>
          <ul>
            <li>M1200VBC FFP2</li>
            <li>M1200VWC FFP2</li>
            <li>M1300VBC FFP3</li>
          </ul>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
          <h3>Ear Muffs</h3>
          <ul>
            <li>SPA 3</li>
            <li>Magny Course</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
