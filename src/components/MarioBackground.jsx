import { useMemo } from 'react';

const CUBE_TYPES = ['?', '?', '?', 'B', 'B', 'B', 'B', '?', 'B', 'B'];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function MarioBackground() {
  const cubes = useMemo(() => {
    const rows = [10, 22, 35, 50, 63, 76, 88];
    const items = [];
    rows.forEach((top, ri) => {
      const count = 6 + ri;
      for (let i = 0; i < count; i++) {
        items.push({
          id: `${ri}-${i}`,
          type: CUBE_TYPES[Math.floor(Math.random() * CUBE_TYPES.length)],
          top,
          size: randomBetween(24, 44),
          duration: randomBetween(14, 32),
          delay: -randomBetween(0, 32),
          opacity: randomBetween(0.10, 0.22),
        });
      }
    });
    return items;
  }, []);

  return (
    <>
      <style>{`
        .mario-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .mario-sky {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(255, 200, 0, 0.09) 0%,
            rgba(255, 150, 0, 0.05) 50%,
            transparent 100%
          );
        }
        .mario-ground {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: repeating-linear-gradient(
            90deg,
            rgba(255, 180, 0, 0.12) 0px,
            rgba(255, 180, 0, 0.12) 32px,
            transparent 32px,
            transparent 36px
          );
        }
        .mario-pipe-row {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: rgba(255, 160, 0, 0.06);
        }
        .mario-cube {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Press Start 2P', monospace;
          border-radius: 2px;
          animation: mario-scroll linear infinite;
          will-change: transform;
        }
        .mario-cube.q {
          background: linear-gradient(135deg, rgba(255, 210, 0, 0.32), rgba(255, 150, 0, 0.22));
          border: 2px solid rgba(255, 220, 0, 0.45);
          color: rgba(255, 230, 0, 0.85);
          box-shadow: 0 0 12px rgba(255, 210, 0, 0.25), inset 0 0 8px rgba(255, 200, 0, 0.15);
          text-shadow: 0 0 6px rgba(255, 230, 0, 0.6);
        }
        .mario-cube.b {
          background: linear-gradient(135deg, rgba(210, 130, 50, 0.28), rgba(160, 80, 20, 0.18));
          border: 2px solid rgba(220, 140, 60, 0.35);
          color: rgba(230, 150, 70, 0.7);
          box-shadow: inset 0 0 6px rgba(0,0,0,0.4), 0 0 8px rgba(210, 130, 50, 0.15);
        }
        /* brick lines */
        .mario-cube.b::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px) 0 0 / 100% 50%,
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px) 0 0 / 50% 100%;
        }
        @keyframes mario-scroll {
          from { transform: translateX(110vw); }
          to   { transform: translateX(-120px); }
        }
        /* star particles */
        .mario-star {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 220, 60, 0.25);
          border-radius: 50%;
          animation: star-drift linear infinite;
          box-shadow: 0 0 6px rgba(255, 220, 60, 0.3);
        }
        @keyframes star-drift {
          0%   { transform: translateX(105vw) translateY(0); opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { transform: translateX(-20px) translateY(-40px); opacity: 0; }
        }
        /* scan line overlay for retro feel */
        .mario-scan {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent 0px,
            transparent 3px,
            rgba(0,0,0,0.04) 3px,
            rgba(0,0,0,0.04) 4px
          );
          pointer-events: none;
        }
      `}</style>

      <div className="mario-bg">
        <div className="mario-sky" />
        <div className="mario-scan" />

        {cubes.map(c => (
          <div
            key={c.id}
            className={`mario-cube ${c.type === '?' ? 'q' : 'b'}`}
            style={{
              top: `${c.top}%`,
              width: c.size,
              height: c.size,
              fontSize: c.size * 0.35,
              animationDuration: `${c.duration}s`,
              animationDelay: `${c.delay}s`,
              opacity: c.opacity * (c.type === '?' ? 2.2 : 1.4),
            }}
          >
            {c.type === '?' ? '?' : ''}
          </div>
        ))}

        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="mario-star"
            style={{
              top: `${randomBetween(5, 95)}%`,
              animationDuration: `${randomBetween(20, 50)}s`,
              animationDelay: `${-randomBetween(0, 50)}s`,
              width: randomBetween(2, 5),
              height: randomBetween(2, 5),
            }}
          />
        ))}

        <div className="mario-ground" />
        <div className="mario-pipe-row" />
      </div>
    </>
  );
}
