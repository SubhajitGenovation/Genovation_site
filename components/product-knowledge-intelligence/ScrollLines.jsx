export default function ScrollLines() {
  return (
    <div className="scroll-lines-wrap" aria-hidden="true">
      <div className="scroll-line" id="sLine1">
        <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="sl1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#0ea5e9" stopOpacity="0"/>
              <stop offset="8%"   stopColor="#0ea5e9"/>
              <stop offset="30%"  stopColor="#06b6d4"/>
              <stop offset="55%"  stopColor="#0ea5e9"/>
              <stop offset="80%"  stopColor="#06b6d4"/>
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M200,0 C240,350 80,650 180,1100 C280,1550 60,1850 200,2400 C340,2950 80,3300 160,3900 C240,4500 40,4800 200,5400 C360,6000 80,6400 160,7000 C240,7600 60,7900 200,8500 C340,9100 120,9500 200,10000"
            stroke="url(#sl1)" strokeWidth="2" strokeOpacity="0.14" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="scroll-line" id="sLine2">
        <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="sl2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#06b6d4" stopOpacity="0"/>
              <stop offset="10%"  stopColor="#06b6d4"/>
              <stop offset="40%"  stopColor="#8b5cf6"/>
              <stop offset="70%"  stopColor="#06b6d4"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M1260,0 C1220,450 1360,850 1240,1400 C1120,1950 1340,2400 1280,3000 C1220,3600 1380,4000 1260,4600 C1140,5200 1360,5700 1280,6300 C1200,6900 1380,7400 1260,8000 C1140,8600 1340,9200 1260,10000"
            stroke="url(#sl2)" strokeWidth="1.5" strokeOpacity="0.1" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="scroll-line" id="sLine3">
        <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="sl3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#10b981" stopOpacity="0"/>
              <stop offset="15%"  stopColor="#10b981" stopOpacity="0.5"/>
              <stop offset="45%"  stopColor="#0ea5e9" stopOpacity="0.35"/>
              <stop offset="75%"  stopColor="#10b981" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M720,0 C800,500 640,1100 750,1700 C860,2300 620,2800 700,3400 C780,4000 660,4600 740,5200 C820,5800 640,6400 720,7000 C800,7600 660,8200 720,8800 L720,10000"
            stroke="url(#sl3)" strokeWidth="1" strokeOpacity="0.07" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}
