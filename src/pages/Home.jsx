import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Marquee from '../components/Marquee.jsx';
import { ORDER_URL } from '../data.js';

export default function Home() {
  return (
    <>
      <style>{`
        /* ── HERO ── */
        .hero{
          position:relative;min-height:100vh;padding:100px 48px 60px;
          display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;
          max-width:1400px;margin:0 auto;
          overflow:visible;
        }
        .hero::before{content:'';position:fixed;inset:0;background:repeating-linear-gradient(0deg,rgba(242,107,26,.025) 0px,rgba(242,107,26,.025) 1px,transparent 1px,transparent 4px);pointer-events:none;z-index:0;}

        .hero-left{position:relative;z-index:1;display:flex;flex-direction:column;gap:28px;}
        .hero-title{font-family:'Press Start 2P',monospace;font-size:clamp(36px,7vw,88px);line-height:1.05;letter-spacing:1px;color:var(--cream);text-shadow:0 0 30px rgba(242,107,26,.4);text-transform:uppercase;}
        .hero-title .ital{color:var(--orange-neon);}
        .hero-title .line{display:block;}

        .hero-meta{font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--muted);line-height:1.7;border:1px solid rgba(242,107,26,.3);padding:12px 14px;border-radius:4px;background:rgba(42,12,9,.4);display:inline-flex;flex-direction:column;gap:4px;}
        .hero-desc{font-size:15px;line-height:1.7;color:var(--cream);opacity:.85;max-width:480px;}
        .hero-cta{display:inline-flex;align-items:center;gap:12px;padding:14px 28px;background:linear-gradient(135deg,var(--orange),var(--orange-neon));color:var(--dark);border:none;border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;cursor:pointer;transition:all .3s;box-shadow:0 0 15px var(--orange),0 4px 12px rgba(0,0,0,.4);position:relative;overflow:hidden;align-self:flex-start;}
        .hero-cta::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent);transform:translateX(-100%);transition:transform .5s;}
        .hero-cta:hover::before{transform:translateX(100%);}
        .hero-cta:hover{transform:translateY(-3px);box-shadow:0 0 25px var(--orange),0 8px 20px rgba(0,0,0,.5);}

        .hero-right{position:relative;z-index:1;display:flex;flex-direction:column;align-items:flex-end;gap:20px;}
        .hero-img-wrap{position:relative;width:100%;max-width:520px;}
        .hero-img-wrap img{width:100%;border-radius:12px;border:2px solid var(--orange);box-shadow:0 0 40px rgba(242,107,26,.4),0 20px 50px rgba(0,0,0,.6);animation:float 8s ease-in-out infinite;}
        @keyframes float{0%,100%{transform:translateY(0) rotate(-1deg);}50%{transform:translateY(-16px) rotate(1deg);}}
        .hero-badge{background:linear-gradient(135deg,rgba(42,12,9,.9),rgba(10,10,10,.95));border:2px solid var(--orange);border-radius:4px;padding:14px 18px;font-family:'Press Start 2P',monospace;text-align:center;box-shadow:0 0 20px rgba(242,107,26,.3);align-self:flex-end;}
        .hero-badge .big{font-size:22px;color:var(--orange-neon);display:block;margin-bottom:6px;}
        .hero-badge .sm{font-size:9px;color:var(--orange);letter-spacing:2px;}

        /* ── PHILOSOPHY ── */
        .philo{padding:100px 48px;max-width:1400px;margin:0 auto;position:relative;}
        .philo::before{content:'';position:absolute;left:0;right:0;top:0;height:2px;background:linear-gradient(90deg,transparent,var(--orange),transparent);}
        .philo-grid{display:grid;grid-template-columns:260px 1fr;gap:80px;align-items:start;}
        .philo h2{font-family:'Press Start 2P',monospace;font-size:clamp(22px,3.5vw,42px);line-height:1.2;letter-spacing:1px;color:var(--cream);text-transform:uppercase;}
        .philo h2 em{color:var(--orange-neon);font-style:normal;}
        .philo p{font-size:15px;line-height:1.7;color:var(--cream);opacity:.8;margin-bottom:14px;}

        /* ── FEATURED ── */
        .featured{padding:80px 48px;max-width:1400px;margin:0 auto;}
        .feat-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:48px;border-bottom:2px solid var(--orange);padding-bottom:24px;flex-wrap:wrap;gap:16px;}
        .feat-head h2{font-family:'Press Start 2P',monospace;font-size:clamp(22px,3.5vw,42px);letter-spacing:1px;color:var(--cream);text-transform:uppercase;}
        .feat-head h2 em{color:var(--orange);}
        .feat-head a{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--orange);text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid var(--orange);padding-bottom:2px;transition:color .2s;}
        .feat-head a:hover{color:var(--orange-neon);}
        .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
        .feat-card{position:relative;aspect-ratio:3/4;overflow:hidden;border:2px solid rgba(242,107,26,.5);border-radius:4px;background:linear-gradient(135deg,rgba(42,12,9,.5),rgba(10,10,10,.8));transition:all .4s cubic-bezier(.2,.8,.2,1);display:block;box-shadow:0 0 20px rgba(242,107,26,.15);}
        .feat-card:hover{transform:translateY(-8px);border-color:var(--orange);box-shadow:0 0 30px var(--orange),0 12px 30px rgba(0,0,0,.5);}
        .feat-card img{width:100%;height:100%;object-fit:cover;transition:transform .8s,filter .5s;}
        .feat-card:hover img{transform:scale(1.06);filter:brightness(.6);}
        .feat-card .info{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:20px;background:linear-gradient(180deg,transparent 40%,rgba(5,5,5,.95) 100%);}
        .feat-card .info h3{font-family:'Press Start 2P',monospace;font-size:14px;color:var(--orange-neon);line-height:1.3;letter-spacing:.5px;text-transform:uppercase;margin-bottom:6px;}
        .feat-card .info .idx{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--cream);opacity:.6;text-transform:uppercase;letter-spacing:1px;}
        .feat-card .tag{position:absolute;top:12px;left:12px;background:linear-gradient(135deg,var(--orange),var(--orange-neon));color:var(--dark);padding:5px 10px;border-radius:2px;font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:1px;text-transform:uppercase;font-weight:700;box-shadow:0 0 10px var(--orange);}

        /* ── STATS ── */
        .stats{padding:80px 48px;max-width:1400px;margin:60px auto 0;position:relative;}
        .stats::before{content:'';position:absolute;left:0;right:0;top:0;height:2px;background:linear-gradient(90deg,transparent,var(--orange),transparent);}
        .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;}
        .stat-item{border-left:3px solid var(--orange);padding-left:20px;}
        .stat-item .num{font-family:'Press Start 2P',monospace;font-size:clamp(26px,4vw,48px);line-height:.9;color:var(--orange-neon);letter-spacing:1px;margin-bottom:10px;}
        .stat-item .lbl{font-size:13px;line-height:1.5;color:var(--cream);opacity:.75;max-width:180px;}

        /* ── CTA FINAL ── */
        .cta-big{padding:100px 48px;text-align:center;max-width:1200px;margin:60px auto 0;}
        .cta-big h2{font-family:'Press Start 2P',monospace;font-size:clamp(28px,6vw,56px);line-height:1.1;letter-spacing:2px;color:var(--cream);text-transform:uppercase;margin-bottom:40px;}
        .cta-big h2 .nonital{color:var(--orange-neon);}
        .cta-big .links{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;}
        .cta-link{padding:14px 28px;border:2px solid var(--orange);background:transparent;color:var(--orange);border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;transition:all .3s;box-shadow:0 0 10px rgba(242,107,26,.2);}
        .cta-link:hover{background:var(--orange);color:var(--dark);box-shadow:0 0 20px var(--orange);transform:translateY(-2px);}
        .cta-link.primary{background:linear-gradient(135deg,var(--orange),var(--orange-neon));color:var(--dark);border-color:var(--orange-neon);box-shadow:0 0 15px var(--orange);}
        .cta-link.primary:hover{box-shadow:0 0 25px var(--orange);transform:translateY(-3px);}

        @media(max-width:900px){
          .hero{grid-template-columns:1fr;padding:100px 24px 50px;gap:40px;}
          .hero-right{align-items:center;}
          .hero-img-wrap{max-width:360px;}
          .philo{padding:70px 24px;}
          .philo-grid{grid-template-columns:1fr;gap:30px;}
          .featured{padding:60px 24px;}
          .feat-grid{grid-template-columns:1fr 1fr;gap:16px;}
          .stats{padding:60px 24px;}
          .stats-grid{grid-template-columns:1fr 1fr;gap:24px;}
          .cta-big{padding:70px 24px;}
        }
        @media(max-width:520px){
          .hero-title{font-size:clamp(28px,10vw,56px);}
          .feat-grid{grid-template-columns:1fr;}
          .stats-grid{grid-template-columns:1fr 1fr;}
        }
      `}</style>

      <section className="hero">
        <div className="hero-left">
          <div className="eyebrow">● TANGER · ARCADE MODE ●</div>

          <h1 className="hero-title">
            <span className="line">PRESS</span>
            <span className="line"><span className="ital">START</span></span>
            <span className="line">TO EAT</span>
          </h1>

          <div className="hero-meta">
            <span>🎮 Pain brioché fait maison</span>
            <span>🎮 Steak kefta du boucher</span>
            <span>🎮 Tenders crispy frais</span>
          </div>

          <p className="hero-desc">
            Bienvenue dans le fast-food d'arcade. Chaque burger est un niveau. Viandes du boucher, pains briochés maison, sauces secrètes.
          </p>

          <Link to="/produits" className="hero-cta">
            VOIR MENU →
          </Link>
        </div>

        <div className="hero-right">
          <div className="hero-img-wrap">
            <img src="/images/produits/produit_1_c6eda482-cb31-426b-86b4-8c37b8094e79.jpg" alt="Burger Play" />
          </div>
          <div className="hero-badge">
            <span className="big">LV.01</span>
            <span className="sm">● DEBUT ●</span>
          </div>
        </div>
      </section>

      <Marquee />

      <Reveal as="section" className="philo">
        <div className="philo-grid">
          <div className="eyebrow">● PHILOSOPHY ●</div>
          <div>
            <h2>UN <em>BURGER</em> N'EST PAS UN REPAS.</h2>
            <p style={{ marginTop: 24 }}>C'est une partie. Borne d'arcade, viande du boucher, énergie de jeu. Chaque recette = un niveau. Textures calibrées, goûts qui s'enchaînent.</p>
            <p>Pain brioché pétri le matin. Frites fraîches. Aucune prise de raccourci. Du jeu, du vrai.</p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="featured">
        <div className="feat-head">
          <h2>SIGNATURES <em>★</em></h2>
          <Link to="/produits">Voir la carte complète →</Link>
        </div>
        <div className="feat-grid">
          {[
            { tag: 'BOSS', title: 'MONSTER MOZZA', level: 'LV.4', img: '/images/produits/produit_3_2aa6f99d-35b9-4530-a072-cff54ea45cfd.jpg' },
            { tag: 'HOT', title: 'ŒUF BACON', level: 'LV.2', img: '/images/produits/produit_5_13a8d0c2-32de-4aaa-8903-d7d5ab73bae2.jpg' },
            { tag: 'NEW', title: 'POULET CORÉEN', level: 'LV.3', img: '/images/produits/produit_21_6c6a27cf-4196-4e1d-b47b-a24fe20e0308.jpg' },
          ].map((c, i) => (
            <Link key={i} to="/produits" className="feat-card">
              <img src={c.img} alt={c.title} />
              <div className="info">
                <h3>{c.title}</h3>
                <span className="idx">{c.level}</span>
              </div>
              <div className="tag">{c.tag}</div>
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="stats">
        <div className="stats-grid">
          {[
            ['40+', 'Recettes Signatures'],
            ['100%', 'Pain Brioché Frais'],
            ['120g', 'Steak Kefta Boucher'],
            ['4.9★', 'Rating Glovo'],
          ].map(([n, l], i) => (
            <div key={i} className="stat-item">
              <div className="num">{n}</div>
              <div className="lbl">{l}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="cta-big">
        <h2>READY TO <span className="nonital">PLAY</span>?</h2>
        <div className="links">
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="cta-link primary">COMMANDER MAINTENANT</a>
          <Link to="/franchise" className="cta-link">DEVENIR FRANCHISÉ</Link>
        </div>
      </Reveal>
    </>
  );
}
