// App.js
import React from 'react';
import './About.css'; // Import your CSS file

function App() {
  return (
    <>
      <div className="container1">
        {/* <div className="navbar">
          <img style={{float: 'left'}} className="logo" src="th (2).jpg" alt="Logo" />
        </div> */}
        <div className="content">
          <h1>Developed by VIT-BHOPAL STUDENTS</h1><br /> {/* Corrected typo in heading */}
          <p>An application where students can purchase a pass for college events. Upon
            payment, a unique QR code will be generated, allowing access to the event. If a QR
            code has already been scanned, it will indicate that it has been used.
            <br />a unique QR code will be generated, allowing access to the event. If a QR
            code has already been scanned, it will indicate that it has been used.</p>
          <div>
            <button type="button"><span></span> START NOW</button> {/* Corrected button text */}
            <button type="button"><span></span> COURSES</button>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="flex">
          <div className="circle">BOX 1</div>
          <div className="circle">BOX 2</div>
          <div className="circle">BOX 3</div>
          <div className="circle">BOX 4</div>
        </div>
        <div className="text-box">
          <div className="box">text here</div>
          <div className="box">text here</div>
          <div className="box">text here</div>
          <div className="box">text here</div>
        </div>
      </div>
    </>
  );
}

export default App;
