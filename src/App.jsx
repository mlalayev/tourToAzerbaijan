import './App.css';
import ONEDAY from './onedaytours/onedaytour.jsx';
import MULTIDAY from './multidaytours/multidaytour.jsx';
import React, { useState, useEffect } from 'react';
import FOOTER from './components/footer/footer.jsx';
import HEADER from './components/header/header.jsx';
import MAINPAGE from './components/mainpage/mainpage.jsx';
import DESTINATIONS from './destinations/destinations.jsx';
import BAKU from './destinations/baku/baku.jsx';
import LANKARAN from './destinations/lankaran/lankaran.jsx';
import SHAMAKHY from './destinations/shamakhy/shamaky.jsx';
import GANJA from './destinations/ganja/ganja.jsx';
import GUSAR from './destinations/gusar/gusar.jsx';
import GUBA from './destinations/guba/guba.jsx';
import ISMAILLY from './destinations/ismailly/ismailly.jsx';
import KHIZY from './destinations/khizy/khizy.jsx';
import LERIK from './destinations/lerik/lerik.jsx';
import SHAKI from './destinations/shaki/shaki.jsx';
import UPPERPART from './components/upperpart/upperpart.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  if (loading) {
    return (
      <div className="loadingscreen">
        <svg className="pl" viewBox="0 0 160 160" width="160px" height="160px" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#000"></stop>
              <stop offset="100%" stopColor="#fff"></stop>
            </linearGradient>
            <mask id="mask1">
              <rect x="0" y="0" width="160" height="160" fill="url(#grad)"></rect>
            </mask>
            <mask id="mask2">
              <rect x="28" y="28" width="104" height="104" fill="url(#grad)"></rect>
            </mask>
          </defs>
          <g>
            <g className="pl__ring-rotate">
              <circle className="pl__ring-stroke" cx="80" cy="80" r="72" fill="none" stroke="hsl(223,90%,55%)" strokeWidth="16" strokeDasharray="452.39 452.39" strokeDashoffset="452" strokeLinecap="round" transform="rotate(-45,80,80)"></circle>
            </g>
          </g>
          <g mask="url(#mask1)">
            <g className="pl__ring-rotate">
              <circle className="pl__ring-stroke" cx="80" cy="80" r="72" fill="none" stroke="hsl(193,90%,55%)" strokeWidth="16" strokeDasharray="452.39 452.39" strokeDashoffset="452" strokeLinecap="round" transform="rotate(-45,80,80)"></circle>
            </g>
          </g>
          <g>
            <g strokeWidth="4" strokeDasharray="12 12" strokeDashoffset="12" strokeLinecap="round" transform="translate(80,80)">
              <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-135,0,0) translate(0,40)"></polyline>
              <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-90,0,0) translate(0,40)"></polyline>
              <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-45,0,0) translate(0,40)"></polyline>
              <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(0,0,0) translate(0,40)"></polyline>
              <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(45,0,0) translate(0,40)"></polyline>
              <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(90,0,0) translate(0,40)"></polyline>
              <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(135,0,0) translate(0,40)"></polyline>
              <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(180,0,0) translate(0,40)"></polyline>
            </g>
          </g>
          <g mask="url(#mask1)">
            <g strokeWidth="4" strokeDasharray="12 12" strokeDashoffset="12" strokeLinecap="round" transform="translate(80,80)">
              <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-135,0,0) translate(0,40)"></polyline>
              <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-90,0,0) translate(0,40)"></polyline>
              <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-45,0,0) translate(0,40)"></polyline>
              <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(0,0,0) translate(0,40)"></polyline>
              <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(45,0,0) translate(0,40)"></polyline>
              <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(90,0,0) translate(0,40)"></polyline>
              <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(135,0,0) translate(0,40)"></polyline>
              <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(180,0,0) translate(0,40)"></polyline>
            </g>
          </g>
          <g>
            <g transform="translate(64,28)">
              <g className="pl__arrows" transform="rotate(45,16,52)">
                <path fill="hsl(3,90%,55%)" d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"></path>
                <path fill="hsl(223,10%,90%)" d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"></path>
              </g>
            </g>
          </g>
          <g mask="url(#mask2)">
            <g transform="translate(64,28)">
              <g className="pl__arrows" transform="rotate(45,16,52)">
                <path fill="hsl(333,90%,55%)" d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"></path>
                <path fill="hsl(223,90%,80%)" d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mltdytrs" element={<><MULTIDAY /><FOOTER /></>} />

        <Route path="/sngldytrips" element={<><ONEDAY /><FOOTER /></>} />

        <Route path="/dstntns" element={<><DESTINATIONS /><FOOTER /></>} />

        <Route path="/" element={<><UPPERPART /><MAINPAGE /><FOOTER /></>} />

        <Route path="/home" element={<><UPPERPART /><MAINPAGE /><FOOTER /></>} />

        <Route path="/baku" element={<><BAKU /></>} />

        <Route path="/lankaran" element={<><LANKARAN /><FOOTER /></>} />

        <Route path="/shamakhy" element={<><SHAMAKHY /><FOOTER /></>} />

        <Route path="/guba" element={<><GUBA /><FOOTER /></>} />

        <Route path="/shaki" element={<><SHAKI /><FOOTER /></>} />

        <Route path="/ganja" element={<><GANJA /><FOOTER /></>} />

        <Route path="/gusar" element={<><GUSAR /><FOOTER /></>} />

        <Route path="/ismailly" element={<><ISMAILLY /><FOOTER /></>} />

        <Route path="/khizi" element={<><KHIZY /><FOOTER /></>} />

        <Route path="/lerik" element={<><LERIK /><FOOTER /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;