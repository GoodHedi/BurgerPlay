import { useState, useMemo } from 'react';
import { CATEGORIES, TOTAL_PRODUCTS, ORDER_URL } from '../data.js';

export default function Products() {
  const [filter, setFilter] = useState('all');

  const visible = useMemo(
    () => (filter === 'all' ? CATEGORIES : CATEGORIES.filter(c => c.id === filter)),
    [filter]
  );

  const onFilter = (id) => {
    setFilter(id);
    requestAnimationFrame(() => {
      const el = document.getElementById('products');
      if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
    });
  };

  return (
    <>
      <style>{`
        .page-head{padding:120px 32px 40px;max-width:1400px;margin:0 auto;border-bottom:2px solid var(--orange);padding-bottom:40px;}
        .page-head h1{font-family:'Press Start 2P',monospace;font-size:clamp(40px,8vw,80px);line-height:1;letter-spacing:2px;color:var(--cream);text-transform:uppercase;margin-bottom:16px;}
        .page-head h1 em{color:var(--orange-neon);}
        .page-head .meta{font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--orange);text-transform:uppercase;letter-spacing:1px;}
        .page-head .count{font-family:'Press Start 2P',monospace;font-size:28px;color:var(--orange-neon);display:block;margin-bottom:8px;}

        .filters-wrap{position:sticky;top:0;z-index:50;background:rgba(10,10,10,.95);backdrop-filter:blur(20px);border-top:1px solid var(--orange);border-bottom:2px solid var(--orange);padding:12px 32px;box-shadow:0 0 20px rgba(242,107,26,.2);}
        .filters{max-width:1400px;margin:0 auto;display:flex;gap:8px;overflow-x:auto;padding:4px 0;}
        .filters::-webkit-scrollbar{height:4px;}
        .filters::-webkit-scrollbar-track{background:rgba(242,107,26,.1);}
        .filters::-webkit-scrollbar-thumb{background:var(--orange);border-radius:2px;}
        .filters button{flex-shrink:0;padding:10px 16px;border:2px solid rgba(242,107,26,.4);background:transparent;color:var(--cream);border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;transition:all .25s;cursor:pointer;}
        .filters button:hover{border-color:var(--orange);color:var(--orange);box-shadow:0 0 10px rgba(242,107,26,.3);}
        .filters button.active{background:linear-gradient(135deg, var(--orange), var(--orange-neon));color:var(--dark);border-color:var(--orange-neon);box-shadow:0 0 15px var(--orange);}

        .products{padding:60px 32px;max-width:1400px;margin:0 auto;}
        .category-block{margin-bottom:80px;}
        .category-head{display:flex;justify-content:space-between;align-items:end;gap:20px;padding-bottom:20px;border-bottom:2px solid var(--orange);margin-bottom:40px;flex-wrap:wrap;}
        .category-head h2{font-family:'Press Start 2P',monospace;font-size:clamp(24px,3.5vw,40px);letter-spacing:1px;line-height:1;color:var(--cream);text-transform:uppercase;}
        .category-head h2 em{color:var(--orange);}
        .category-head .idx{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--orange);text-transform:uppercase;letter-spacing:1px;}

        .prod-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
        .prod{background:linear-gradient(135deg, rgba(42,12,9,.5), rgba(10,10,10,.8));border:2px solid;border-image:linear-gradient(135deg, var(--orange), rgba(242,107,26,.3)) 1;border-radius:4px;overflow:hidden;display:flex;flex-direction:column;transition:all .4s cubic-bezier(.2,.8,.2,1);box-shadow:0 0 15px rgba(242,107,26,.1);}
        .prod:hover{transform:translateY(-6px);border-image:linear-gradient(135deg, var(--orange-neon), var(--orange)) 1;box-shadow:0 0 30px var(--orange), 0 10px 25px rgba(0,0,0,.4);}

        .prod .media{aspect-ratio:4/3;overflow:hidden;background:var(--bordeaux);position:relative;border-bottom:1px solid rgba(242,107,26,.3);}
        .prod .media img{width:100%;height:100%;object-fit:cover;transition:transform .8s;}
        .prod:hover .media img{transform:scale(1.08);}
        .prod .placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:80px;background:linear-gradient(135deg, var(--bordeaux) 0%, #4A1810 100%);}
        .prod .tag{position:absolute;top:10px;left:10px;background:linear-gradient(135deg, var(--orange), var(--orange-neon));color:var(--dark);padding:6px 10px;border-radius:2px;font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:1px;text-transform:uppercase;font-weight:600;box-shadow:0 0 10px var(--orange);}

        .prod .body{padding:16px;display:flex;flex-direction:column;gap:8px;flex:1;}
        .prod h3{font-family:'Press Start 2P',monospace;font-size:clamp(12px,1.5vw,14px);line-height:1.2;letter-spacing:.5px;color:var(--orange-neon);text-transform:uppercase;}
        .prod p{font-size:13px;line-height:1.5;color:var(--cream);opacity:.75;flex:1;}

        .prod .foot{display:flex;justify-content:space-between;align-items:center;margin-top:8px;padding-top:10px;border-top:1px solid rgba(242,107,26,.2);}
        .prod .lvl{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;}
        .prod .order-btn{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:600;padding:8px 12px;background:linear-gradient(135deg, var(--orange), var(--orange-neon));color:var(--dark);border-radius:2px;text-transform:uppercase;letter-spacing:.1em;cursor:pointer;transition:all .3s;box-shadow:0 0 10px var(--orange);border:none;}
        .prod:hover .order-btn{box-shadow:0 0 15px var(--orange);transform:translateY(-2px);}
        .prod .order-btn:active{transform:translateY(0);}

        .prod.lite .media{aspect-ratio:16/9;}
        .prod.lite .placeholder{font-size:60px;}

        @media(max-width:980px){
          .prod-grid{grid-template-columns:repeat(2,1fr);}
        }
        @media(max-width:620px){
          .page-head{padding:100px 20px 30px;}
          .filters-wrap{padding:10px 20px;}
          .products{padding:40px 20px;}
          .prod-grid{grid-template-columns:1fr;gap:16px;}
          .prod .media{aspect-ratio:16/9;}
          .category-head{flex-direction:column;align-items:flex-start;}
        }
      `}</style>

      <section className="page-head">
        <div>
          <span className="eyebrow">● MENU ●</span>
          <h1>CHOISIS TON <em>NIVEAU</em></h1>
          <div className="meta">
            <span className="count">{String(TOTAL_PRODUCTS).padStart(2, '0')}</span>
            RECETTES / 11 NIVEAUX
          </div>
        </div>
      </section>

      <div className="filters-wrap">
        <div className="filters">
          <button
            className={filter === 'all' ? 'active' : ''}
            onClick={() => onFilter('all')}
          >
            TOUS ({TOTAL_PRODUCTS})
          </button>
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              className={filter === c.id ? 'active' : ''}
              onClick={() => onFilter(c.id)}
            >
              {c.nom.toUpperCase()} ({c.produits.length})
            </button>
          ))}
        </div>
      </div>

      <main className="products" id="products">
        {visible.map(cat => (
          <section key={cat.id} className="category-block" id={cat.id}>
            <div className="category-head">
              <h2 dangerouslySetInnerHTML={{ __html: cat.nom.replace(/Level/i, '<em>LEVEL</em>').toUpperCase() }} />
              <span className="idx">● {cat.level} ● {String(cat.produits.length).padStart(2, '0')} ●</span>
            </div>
            <div className="prod-grid">
              {cat.produits.map((p, i) => (
                <article key={i} className={`prod ${p.img ? '' : 'lite'}`}>
                  <div className="media">
                    {p.img
                      ? <img src={p.img} alt={p.nom} loading="lazy" />
                      : <div className="placeholder">{p.emoji || '🎮'}</div>}
                    {p.tag && <div className="tag">● {p.tag.toUpperCase()} ●</div>}
                  </div>
                  <div className="body">
                    <h3>{p.nom}</h3>
                    <p>{p.desc}</p>
                    <div className="foot">
                      <span className="lvl">{cat.level} #{String(i + 1).padStart(2, '0')}</span>
                      <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="order-btn">+ PANIER</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
