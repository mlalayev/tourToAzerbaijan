// import PARK from './WhatToDo/Park/Park.jsx';
import i18n from './Components/I18N/I18N.jsx';
import MULTIDAY from './WhatToDo/WhatToDo.jsx';
import { I18nextProvider } from 'react-i18next';
import BAKU from './Destinations/Baku/Baku.jsx';
import GUBA from './Destinations/Guba/Guba.jsx';
import LAKES from './WhatToDo/Carpet/Carpet.jsx';
import UNESCO from './WhatToDo/UNESCO/UNESCO.jsx';
import HIKING from './WhatToDo/Hiking/Hiking.jsx';
import SPORTS from './WhatToDo/Sports/Sports.jsx';
import ONEDAY from './OneDayTours/OneDayTours.jsx';
import KHIZI from './Destinations/Khizi/Khizi.jsx';
import LERIK from './Destinations/Lerik/Lerik.jsx';
import React, { useState, useEffect } from 'react';
import SHAKI from './Destinations/Shaki/Shaki.jsx';
import GANJA from './Destinations/Ganja/Ganja.jsx';
import GUSAR from './Destinations/Gusar/Gusar.jsx';
import FOOTER from './Components/Footer/Footer.jsx';
import MUSEUM from './WhatToDo/Museums/Museums.jsx';
import CUISINE from './WhatToDo/Cuisine/Cuisine.jsx';
import BAZAARS from './WhatToDo/Bazaars/Bazaars.jsx';
import WINERIES from './WhatToDo/Wineries/Wineries.jsx';
import MAINPAGE from './Components/MainPage/MainPage.jsx';
import RELIGIOUS from './WhatToDo/Religious/Religious.jsx';
import DESTINATIONS from './Destinations/Destinations.jsx';
import LANKARAN from './Destinations/Lankaran/Lankaran.jsx';
import SHAMAKHY from './Destinations/Shamakhy/Shamakhy.jsx';
import ISMAILLY from './Destinations/Ismailly/Ismailly.jsx';
import WATERFALL from './WhatToDo/Waterfalls/Waterfall.jsx';
import UPPERPART from './Components/UpperPart/UpperPart.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ARCHITECTURE from './WhatToDo/Architecture/Architecture.jsx';

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
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path='/museums'
            element={<MUSEUM />}
          />

          <Route path='/lakes'
            element={<LAKES />}
          />

          <Route path='/unescoheritage'
            element={<UNESCO />}
          />

          <Route path='/religious'
            element={<RELIGIOUS />}
          />

          {/* <Route path='/parks'
            element={<PARK />}
          /> */}

          <Route path='/hiking'
            element={<HIKING />}
          />

          <Route path='/sportandentertaiment'
            element={<SPORTS />}
          />

          <Route path='/cuisine'
            element={<CUISINE />}
          />

          <Route path='/wineries'
            element={<WINERIES />}
          />

          <Route path='/waterfall'
            element={<WATERFALL />}
          />

          <Route path='/bazaars'
            element={<BAZAARS />}
          />

          <Route path='/architecture'
            element={<ARCHITECTURE />}
          />

          <Route path="/mltdytrs"
            element={<><MULTIDAY /><FOOTER /></>}
          />

          <Route path="/sngldytrips"
            element={<><ONEDAY /><FOOTER /></>}
          />

          <Route path="/dstntns"
            element={<><DESTINATIONS /><FOOTER /></>}
          />

          <Route path="/"
            element={<><UPPERPART /><MAINPAGE /><FOOTER /></>} />

          <Route path="/home"
            element={<><UPPERPART /><MAINPAGE /><FOOTER /></>} />

          <Route path="/baku"
            element={<><BAKU /></>} />

          <Route path="/lankaran"
            element={<><LANKARAN /></>}
          />

          <Route path="/shamakhy"
            element={<><SHAMAKHY /></>}
          />

          <Route path="/guba"
            element={<><GUBA /></>}
          />

          <Route path="/shaki"
            element={<><SHAKI /></>}
          />

          <Route path="/ganja"
            element={<><GANJA /></>}
          />

          <Route path="/gusar"
            element={<><GUSAR /></>}
          />

          <Route path="/khizi"
            element={<><KHIZI /></>}
          />

          <Route path="/ismailly"
            element={<><ISMAILLY /></>}
          />

          <Route path="/lerik"
            element={<><LERIK /></>}
          />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;