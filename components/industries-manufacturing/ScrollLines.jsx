"use client";

export default function ScrollLines() {
  return (
    <div
      className="scroll-lines-wrap"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "visible",
      }}
    >
      <div
        id="sLine1"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "1000vh",
          willChange: "transform",
          contain: "layout style",
        }}
      >
        <svg
          viewBox="0 0 1440 10000"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%" }}
        >
          <defs>
            <linearGradient id="sl1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
              <stop offset="8%" stopColor="#f59e0b" />
              <stop offset="35%" stopColor="#d97706" />
              <stop offset="60%" stopColor="#10b981" />
              <stop offset="85%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M180,0 C220,400 60,700 200,1200 C340,1700 80,2000 160,2600 C240,3200 40,3500 180,4100 C320,4700 60,5200 200,5800 C340,6400 100,6800 160,7500 C220,8200 60,8600 180,9200 L180,10000"
            stroke="url(#sl1)"
            strokeWidth="2"
            strokeOpacity="0.12"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div
        id="sLine2"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "1000vh",
          willChange: "transform",
          contain: "layout style",
        }}
      >
        <svg
          viewBox="0 0 1440 10000"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%" }}
        >
          <defs>
            <linearGradient id="sl2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d97706" stopOpacity="0" />
              <stop offset="12%" stopColor="#d97706" />
              <stop offset="45%" stopColor="#06b6d4" />
              <stop offset="80%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M1280,0 C1240,500 1380,900 1260,1500 C1140,2100 1360,2600 1300,3200 C1240,3800 1400,4200 1280,4800 C1160,5400 1380,5900 1300,6500 C1220,7100 1400,7600 1280,8200 L1280,10000"
            stroke="url(#sl2)"
            strokeWidth="1.5"
            strokeOpacity="0.1"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div
        id="sLine3"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "1000vh",
          willChange: "transform",
          contain: "layout style",
        }}
      >
        <svg
          viewBox="0 0 1440 10000"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%" }}
        >
          <defs>
            <linearGradient id="sl3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="15%" stopColor="#10b981" stopOpacity="0.5" />
              <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.3" />
              <stop offset="75%" stopColor="#10b981" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M720,0 C800,600 640,1200 750,1800 C860,2400 620,3000 700,3600 C780,4200 660,4800 740,5400 C820,6000 640,6600 720,7200 C800,7800 660,8400 720,9000 L720,10000"
            stroke="url(#sl3)"
            strokeWidth="1"
            strokeOpacity="0.07"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}