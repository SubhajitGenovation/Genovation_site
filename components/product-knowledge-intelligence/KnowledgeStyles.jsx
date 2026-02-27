export default function KnowledgeStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
      :root{--emerald:#10b981;--cyan:#06b6d4;--blue:#3b82f6;--violet:#8b5cf6;--amber:#fbbf24;--sky:#0ea5e9;--bg:#f5f3f0;--surface:#edeae6;--border:rgba(0,0,0,0.1);}
      *{font-family:'Urbanist',sans-serif;box-sizing:border-box;}
      html{scroll-behavior:auto;}
      body{background:var(--bg);color:#1a1a2e;overflow-x:hidden;-webkit-font-smoothing:antialiased;}
      section,footer,nav,.divider-enhanced{position:relative;z-index:2;}
      .font-mono{font-family:'Space Mono',monospace!important;}

      #scrollProgress{position:fixed;top:0;left:0;height:2px;z-index:200;transform-origin:left;width:100%;transform:scaleX(0);background:linear-gradient(90deg,#0ea5e9,#06b6d4,#0ea5e9);}
      #scrollProgress::after{content:'';position:absolute;right:0;top:-2px;width:80px;height:6px;background:radial-gradient(ellipse at right,rgba(14,165,233,0.6),transparent);}

      .mesh-bg{background-image:linear-gradient(rgba(14,165,233,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.04) 1px,transparent 1px);background-size:100px 100px;}
      .orb{position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none;}
      .display-hero{font-weight:300;letter-spacing:-0.05em;line-height:0.95;}
      .display-section{font-weight:300;letter-spacing:-0.04em;line-height:1.0;}
      .body-light{font-weight:300;letter-spacing:-0.01em;}

      .text-gradient{background:linear-gradient(135deg,#059669 0%,#0891b2 50%,#2563eb 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
      .text-gradient-sky{background:linear-gradient(135deg,#0284c7 0%,#06b6d4 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
      .text-gradient-violet{background:linear-gradient(135deg,#7c3aed 0%,#a78bfa 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
      .text-gradient-emerald{background:linear-gradient(135deg,#059669 0%,#10b981 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
      .text-gradient-amber{background:linear-gradient(135deg,#d97706 0%,#f59e0b 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
      .text-gradient-cyan{background:linear-gradient(135deg,#0891b2 0%,#22d3ee 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}

      .scroll-lines-wrap{position:fixed;top:0;left:0;width:100%;height:100vh;pointer-events:none;z-index:0;overflow:visible;}
      .scroll-line{position:absolute;top:0;left:0;width:100%;height:1000vh;will-change:transform;}
      .scroll-line svg{width:100%;height:100%;}

      .divider-enhanced{height:1px;position:relative;z-index:2;background:linear-gradient(90deg,transparent 0%,rgba(14,165,233,0.12) 20%,rgba(6,182,212,0.25) 50%,rgba(14,165,233,0.12) 80%,transparent 100%);}
      .divider-enhanced::before{content:'';position:absolute;top:-16px;left:15%;right:15%;height:33px;background:linear-gradient(90deg,transparent,rgba(14,165,233,0.03),rgba(6,182,212,0.05),rgba(14,165,233,0.03),transparent);filter:blur(16px);}
      .divider-enhanced::after{content:'';position:absolute;top:-1px;left:40%;right:40%;height:3px;background:linear-gradient(90deg,transparent,rgba(14,165,233,0.15),transparent);border-radius:2px;}

      .card{background:rgba(255,255,255,0.9);box-shadow:0 1px 3px rgba(0,0,0,0.04);border:1px solid var(--border);border-radius:24px;transition:all 0.6s cubic-bezier(0.23,1,0.32,1);position:relative;overflow:hidden;}
      .card:hover{transform:translateY(-10px);border-color:rgba(14,165,233,0.18);box-shadow:0 50px 120px -25px rgba(14,165,233,0.12),0 25px 60px -15px rgba(0,0,0,0.06);}
      .card-static{background:rgba(255,255,255,0.85);box-shadow:0 1px 3px rgba(0,0,0,0.04);border:1px solid var(--border);border-radius:20px;}

      .terminal{background:rgba(255,255,255,0.92);border:1px solid rgba(0,0,0,0.08);border-radius:20px;overflow:hidden;box-shadow:0 60px 120px -30px rgba(0,0,0,0.08);}
      .terminal-header{display:flex;align-items:center;justify-content:space-between;padding:12px 20px;border-bottom:1px solid rgba(0,0,0,0.06);background:rgba(248,247,245,0.6);}

      .dark-terminal{background:linear-gradient(135deg,rgba(8,8,14,0.98),rgba(12,12,20,0.96));border:1px solid rgba(255,255,255,0.06);border-radius:24px;overflow:hidden;box-shadow:0 60px 140px -30px rgba(0,0,0,0.2);position:relative;}
      .dark-terminal-header{display:flex;align-items:center;justify-content:space-between;padding:12px 20px;border-bottom:1px solid rgba(255,255,255,0.06);background:linear-gradient(180deg,rgba(20,20,28,0.9),rgba(15,15,22,0.95));}

      .compare-bad{background:rgba(255,255,255,0.85);border:1px solid rgba(239,68,68,0.15);border-radius:24px;transition:all 0.5s ease;}
      .compare-bad:hover{border-color:rgba(239,68,68,0.25);box-shadow:0 20px 60px -15px rgba(239,68,68,0.08);}
      .compare-good{background:rgba(255,255,255,0.85);border:1px solid rgba(16,185,129,0.15);border-radius:24px;position:relative;overflow:hidden;transition:all 0.5s ease;}
      .compare-good:hover{border-color:rgba(16,185,129,0.25);box-shadow:0 20px 60px -15px rgba(16,185,129,0.08);}

      .industry-mock{background:rgba(255,255,255,0.92);border:1px solid rgba(0,0,0,0.1);border-radius:20px;overflow:hidden;transition:all 0.5s cubic-bezier(0.23,1,0.32,1);}
      .industry-mock:hover{border-color:rgba(14,165,233,0.25);box-shadow:0 30px 70px -20px rgba(0,0,0,0.1);}
      .im-header{display:flex;align-items:center;gap:6px;padding:10px 14px;border-bottom:1px solid rgba(0,0,0,0.08);background:rgba(0,0,0,0.03);border-radius:20px 20px 0 0;}
      .im-dot{width:7px;height:7px;border-radius:50%;}
      .im-dot.r{background:rgba(255,95,87,0.8);}
      .im-dot.y{background:rgba(254,188,46,0.8);}
      .im-dot.g{background:rgba(40,200,64,0.8);}

      .dept-tab{display:inline-flex;align-items:center;gap:7px;padding:11px 24px;border-radius:100px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.025);color:rgba(255,255,255,0.4);font-size:13px;font-weight:300;cursor:pointer;transition:all 0.4s cubic-bezier(0.23,1,0.32,1);font-family:'Urbanist',sans-serif;backdrop-filter:blur(12px);}
      .dept-tab:hover{background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.8);border-color:rgba(255,255,255,0.1);}
      .dept-tab.active{background:linear-gradient(135deg,rgba(14,165,233,0.1),rgba(6,182,212,0.1));color:#7dd3fc;border-color:rgba(14,165,233,0.2);box-shadow:0 0 50px -12px rgba(14,165,233,0.25);}
      .dept-panel{display:none;}
      .dept-panel.active{display:block;animation:panelFadeIn 0.6s cubic-bezier(0.23,1,0.32,1);}
      @keyframes panelFadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}

      .dept-stat-bar{display:flex;align-items:center;gap:24px;padding:22px 36px;border-radius:24px;background:rgba(255,255,255,0.025);border:1px solid rgba(255,255,255,0.06);backdrop-filter:blur(16px);}
      .dept-stat-item{text-align:center;flex:1;}
      .dept-stat-value{font-size:24px;font-weight:200;letter-spacing:-0.03em;}
      .dept-stat-label{font-size:10px;font-weight:300;color:rgba(255,255,255,0.4);margin-top:2px;letter-spacing:0.05em;}
      .dept-stat-divider{width:1px;height:32px;background:rgba(255,255,255,0.06);flex-shrink:0;}

      .outcome-card{background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.15);border-radius:24px;backdrop-filter:blur(16px);padding:2rem;transition:all 0.5s ease;}
      .outcome-card:hover{background:rgba(255,255,255,0.18);transform:translateY(-4px);}

      @keyframes softPulse{0%,100%{opacity:0.25;transform:scale(1)}50%{opacity:0.6;transform:scale(1.2)}}
      .soft-pulse{animation:softPulse 3.5s ease-in-out infinite;}
      @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
      @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
      .typing-cursor{display:inline-block;width:1.5px;height:12px;background:linear-gradient(180deg,rgba(14,165,233,0.8),rgba(6,182,212,0.4));margin-left:2px;animation:blink 1s step-end infinite;vertical-align:middle;border-radius:1px;}

      .hero-cta-primary{background:linear-gradient(135deg,#0ea5e9 0%,#06b6d4 50%,#0ea5e9 100%);background-size:200% 100%;box-shadow:0 0 30px -5px rgba(14,165,233,0.2);transition:all 0.4s cubic-bezier(0.23,1,0.32,1);}
      .hero-cta-primary:hover{background-position:100% 0;transform:translateY(-2px);}

      .char{display:inline-block;opacity:0;transform:translateY(100%) rotateX(-90deg) skewX(-8deg);transform-origin:bottom center;}
      .r-up{opacity:0;transform:translateY(80px);}
      .r-left{opacity:0;transform:translateX(-100px);}
      .r-right{opacity:0;transform:translateX(100px);}
      .r-scale{opacity:0;transform:scale(0.8);}

      .section-sky{background-image:radial-gradient(circle at 20% 50%,rgba(14,165,233,0.03) 0%,transparent 50%),radial-gradient(circle at 80% 30%,rgba(6,182,212,0.03) 0%,transparent 50%);}
      .section-emerald{background-image:radial-gradient(circle at 20% 50%,rgba(16,185,129,0.03) 0%,transparent 50%),radial-gradient(circle at 80% 70%,rgba(5,150,105,0.03) 0%,transparent 50%);}
      .section-cyan{background-image:radial-gradient(circle at 30% 40%,rgba(6,182,212,0.03) 0%,transparent 50%),radial-gradient(circle at 70% 60%,rgba(14,165,233,0.03) 0%,transparent 50%);}

      ::-webkit-scrollbar{width:4px;}
      ::-webkit-scrollbar-track{background:var(--bg);}
      ::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.15);border-radius:2px;}
    `}</style>
  );
}
