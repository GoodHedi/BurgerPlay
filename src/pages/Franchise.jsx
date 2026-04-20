import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';

export default function Franchise() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => e.target.reset(), 300);
  };

  return (
    <>
      <style>{`
        .f-hero{min-height:100vh;padding:120px 32px 60px;display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:center;max-width:1400px;margin:0 auto;position:relative;}
        .f-hero h1{font-family:'Press Start 2P',monospace;font-size:clamp(40px,8vw,72px);line-height:1;letter-spacing:2px;color:var(--cream);text-transform:uppercase;margin-bottom:20px;}
        .f-hero h1 em{color:var(--orange-neon);}
        .f-hero .lead{font-size:16px;line-height:1.7;color:var(--cream);opacity:.85;max-width:500px;margin-top:30px;}
        .f-hero .cta-btn{margin-top:30px;display:inline-flex;align-items:center;gap:12px;padding:14px 28px;background:linear-gradient(135deg, var(--orange), var(--orange-neon));color:var(--dark);border:none;border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;cursor:pointer;transition:all .3s;box-shadow:0 0 15px var(--orange);}
        .f-hero .cta-btn:hover{transform:translateY(-3px);box-shadow:0 0 25px var(--orange);}
        .f-hero .side{aspect-ratio:3/4;border-radius:4px;overflow:hidden;background:var(--bordeaux);position:relative;border:2px solid var(--orange);box-shadow:0 0 30px rgba(242,107,26,.3);}
        .f-hero .side img{width:100%;height:100%;object-fit:cover;animation:kenburns 24s ease-in-out infinite;}
        @keyframes kenburns{0%{transform:scale(1);}100%{transform:scale(1.1);}}
        .f-hero .side .badge{position:absolute;bottom:20px;left:20px;right:20px;background:linear-gradient(135deg, rgba(242,107,26,.2), rgba(255,140,0,.15));border:2px solid var(--orange);border-radius:4px;padding:16px;color:var(--cream);display:flex;justify-content:space-between;align-items:end;font-family:'JetBrains Mono',monospace;font-size:11px;text-transform:uppercase;letter-spacing:1px;z-index:2;}
        .f-hero .side .badge .big{font-family:'Press Start 2P',monospace;font-size:28px;color:var(--orange-neon);line-height:1;display:block;margin-bottom:6px;}

        .stats-row{max-width:1400px;margin:40px auto;padding:0 32px;display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .stats-row .s{padding:28px;border-radius:4px;background:linear-gradient(135deg, rgba(42,12,9,.5), rgba(10,10,10,.8));border:2px solid var(--orange);box-shadow:0 0 15px rgba(242,107,26,.2);}
        .stats-row .s .n{font-family:'Press Start 2P',monospace;font-size:clamp(28px,4vw,48px);line-height:.95;color:var(--orange-neon);letter-spacing:1px;margin-bottom:8px;}
        .stats-row .s p{font-size:13px;line-height:1.5;color:var(--cream);opacity:.75;}

        .pitch{max-width:1200px;margin:120px auto;padding:0 32px;text-align:center;}
        .pitch h2{font-family:'Press Start 2P',monospace;font-size:clamp(28px,5vw,52px);line-height:1.1;letter-spacing:2px;color:var(--cream);text-transform:uppercase;}
        .pitch h2 em{color:var(--orange-neon);}

        .pillars{max-width:1400px;margin:0 auto;padding:60px 32px;display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--orange);border-top:2px solid var(--orange);border-bottom:2px solid var(--orange);}
        .pillars article{background:linear-gradient(135deg, rgba(10,10,10,.9), rgba(42,12,9,.7));padding:30px;display:flex;flex-direction:column;gap:12px;transition:all .3s;}
        .pillars article:hover{background:linear-gradient(135deg, rgba(242,107,26,.15), rgba(42,12,9,.8));}
        .pillars .num{font-family:'Press Start 2P',monospace;font-size:32px;color:var(--orange-neon);line-height:1;letter-spacing:1px;}
        .pillars h3{font-family:'Press Start 2P',monospace;font-size:clamp(14px,2vw,18px);color:var(--cream);text-transform:uppercase;letter-spacing:1px;margin-top:8px;}
        .pillars p{font-size:13px;line-height:1.6;color:var(--cream);opacity:.75;}

        .timeline{max-width:1200px;margin:120px auto;padding:0 32px;}
        .timeline-head{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:50px;border-bottom:2px solid var(--orange);padding-bottom:24px;flex-wrap:wrap;}
        .timeline-head h2{font-family:'Press Start 2P',monospace;font-size:clamp(24px,4vw,40px);letter-spacing:1px;line-height:1;color:var(--cream);text-transform:uppercase;}
        .timeline-head h2 em{color:var(--orange);}
        .steps{display:flex;flex-direction:column;}
        .step{display:grid;grid-template-columns:80px 1fr auto;gap:30px;padding:24px 0;border-top:1px solid rgba(242,107,26,.2);align-items:baseline;transition:all .3s;}
        .step:hover{border-top-color:var(--orange);}
        .step:last-child{border-bottom:1px solid rgba(242,107,26,.2);}
        .step .nn{font-family:'Press Start 2P',monospace;font-size:20px;color:var(--orange-neon);text-align:center;}
        .step h3{font-family:'Press Start 2P',monospace;font-size:clamp(14px,2vw,18px);color:var(--cream);text-transform:uppercase;letter-spacing:1px;}
        .step .desc{grid-column:2;max-width:600px;margin-top:8px;font-size:13px;line-height:1.6;color:var(--cream);opacity:.75;}
        .step .eta{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--orange);text-transform:uppercase;letter-spacing:1px;font-weight:600;}

        .form-wrap{background:linear-gradient(135deg, var(--darker) 0%, var(--bordeaux) 100%);border-top:2px solid var(--orange);border-bottom:2px solid var(--orange);padding:100px 32px;margin-top:80px;}
        .form-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1.3fr;gap:60px;align-items:start;}
        .form-inner .intro h2{font-family:'Press Start 2P',monospace;font-size:clamp(24px,4vw,40px);line-height:1;letter-spacing:1px;color:var(--cream);text-transform:uppercase;margin:16px 0 20px;}
        .form-inner .intro h2 em{color:var(--orange-neon);}
        .form-inner .intro p{font-size:15px;line-height:1.6;color:var(--cream);opacity:.8;max-width:420px;}
        .form-inner .contact{margin-top:30px;font-family:'JetBrains Mono',monospace;font-size:12px;display:flex;flex-direction:column;gap:8px;}
        .form-inner .contact a{color:var(--orange);transition:color .2s;}
        .form-inner .contact a:hover{color:var(--orange-neon);}

        form{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
        form .full{grid-column:1 / -1;}
        form label{display:flex;flex-direction:column;gap:8px;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--orange);text-transform:uppercase;letter-spacing:.1em;}
        form input, form select, form textarea{font:16px 'Inter',sans-serif;background:transparent;color:var(--cream);border:none;border-bottom:1px solid rgba(242,107,26,.3);padding:10px 0;outline:none;transition:border-color .3s;}
        form input:focus, form select:focus, form textarea:focus{border-color:var(--orange);}
        form textarea{min-height:80px;resize:vertical;}
        form select option{background:var(--bordeaux);color:var(--cream);}
        form button{grid-column:1 / -1;justify-self:start;padding:14px 28px;background:linear-gradient(135deg, var(--orange), var(--orange-neon));color:var(--dark);border:none;border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;cursor:pointer;transition:all .3s;box-shadow:0 0 15px var(--orange);}
        form button:hover{transform:translateY(-2px);box-shadow:0 0 25px var(--orange);}
        .success{grid-column:1 / -1;font-family:'Press Start 2P',monospace;font-size:14px;color:var(--orange-neon);padding:16px 0;border-top:1px solid rgba(242,107,26,.3);text-transform:uppercase;letter-spacing:1px;}

        .faq{max-width:1100px;margin:120px auto;padding:0 32px;}
        .faq h2{font-family:'Press Start 2P',monospace;font-size:clamp(28px,5vw,48px);line-height:1;letter-spacing:2px;color:var(--cream);text-transform:uppercase;margin-bottom:50px;}
        .faq h2 em{color:var(--orange);}
        details{border-top:1px solid rgba(242,107,26,.2);padding:24px 0;cursor:pointer;transition:all .3s;}
        details[open]{padding-bottom:30px;}
        details summary{font-family:'Press Start 2P',monospace;font-size:clamp(12px,1.8vw,16px);color:var(--cream);text-transform:uppercase;letter-spacing:1px;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:20px;}
        details summary::-webkit-details-marker{display:none;}
        details summary::after{content:'+';color:var(--orange);transition:transform .3s;}
        details[open] summary::after{transform:rotate(45deg);}
        details p{margin-top:16px;font-size:14px;line-height:1.7;color:var(--cream);opacity:.8;max-width:750px;}

        @media(max-width:900px){
          .f-hero{grid-template-columns:1fr;padding:100px 20px 50px;}
          .f-hero .side{max-height:400px;}
          .stats-row{grid-template-columns:1fr;padding:0 20px;}
          .pillars{grid-template-columns:1fr;padding:40px 20px;}
          .timeline{padding:0 20px;margin:80px auto;}
          .step{grid-template-columns:1fr;}
          .step .eta{grid-row:2;margin-top:6px;}
          .form-wrap{padding:80px 20px;}
          .form-inner{grid-template-columns:1fr;gap:40px;}
          form{grid-template-columns:1fr;}
          .faq{padding:0 20px;}
        }
      `}</style>

      <section className="f-hero">
        <div>
          <div className="eyebrow">● FRANCHISE ●</div>
          <h1>REJOINS <em>LA PARTIE</em></h1>
          <p className="lead">
            Burger Play ouvre son réseau. Entrepreneurs, cherchons-nous : obsession pour le burger fait maison, univers gaming authentique, rentabilité garantie. Dépôt initial 350K MAD. Accompagnement 90 jours.
          </p>
          <a href="#form" className="cta-btn">POSTULER MAINTENANT →</a>
        </div>
        <Reveal className="side">
          <img src="/images/logo/banniere.jpg" alt="Burger Play" />
          <div className="badge">
            <div>
              <div className="big">1ER</div>
              <div>TANGER</div>
            </div>
            <div style={{textAlign:'right'}}>EST 2024</div>
          </div>
        </Reveal>
      </section>

      <Reveal as="section" className="stats-row">
        {[
          ['350K', 'Apport Initial\n(MAD)'],
          ['60m²', 'Surface Min\nCorner'],
          ['90j', 'To Launch'],
        ].map(([n, l], i) => (
          <div key={i} className="s">
            <div className="n">● {n} ●</div>
            <p>{l}</p>
          </div>
        ))}
      </Reveal>

      <Reveal as="section" className="pitch">
        <div className="eyebrow" style={{justifyContent:'center',display:'inline-flex',marginBottom:24}}>● CONCEPT ●</div>
        <h2>BURGER + ARCADE = <em>IDENTITÉ</em></h2>
      </Reveal>

      <Reveal as="section" className="pillars">
        {[
          {n:'01',t:'Produit',d:'Pain brioché fait maison, steak kefta 120g, tenders panés sur place. Zéro industriel.'},
          {n:'02',t:'Univers',d:'Direction artistique gaming reconnaissable. Codes rétro, palette signature, photos calibrées.'},
          {n:'03',t:'Support',d:'Formation 3 semaines, cahier des charges complet, approvisionnement négocié, marketing digital.'},
          {n:'04',t:'Modèle',d:'Ticket moyen élevé, marge maîtrisée, rentabilité 18–24 mois.'},
          {n:'05',t:'Digital',d:'Glovo, agrégateurs, site e-commerce, campagnes sociales pilotées du siège.'},
          {n:'06',t:'Territoire',d:'Exclusivité géographique garantie + droits de préférence adjacents.'},
        ].map((p, i) => (
          <article key={i}>
            <div className="num">{p.n}</div>
            <h3>{p.t}</h3>
            <p>{p.d}</p>
          </article>
        ))}
      </Reveal>

      <Reveal as="section" className="timeline">
        <div className="timeline-head">
          <h2>PARCOURS <em>●</em> 90j</h2>
          <span className="eyebrow">04 ÉTAPES</span>
        </div>
        <div className="steps">
          {[
            {n:'01',t:'Candidature',e:'Sem 1',d:'Formulaire, CV, zone, apport. Réponse 5j.'},
            {n:'02',t:'Immersion',e:'Sem 2–4',d:'Visio + journée Tanger. Signature DIP.'},
            {n:'03',t:'Travaux',e:'Sem 5–10',d:'Validation local, plans, équipement.'},
            {n:'04',t:'Ouverture',e:'Sem 11–13',d:'Formation équipe, soft opening, launch.'},
          ].map((s, i) => (
            <div key={i} className="step">
              <span className="nn">{s.n}</span>
              <h3>{s.t}</h3>
              <span className="eta">{s.e}</span>
              <p className="desc">{s.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <section className="form-wrap" id="form">
        <div className="form-inner">
          <Reveal className="intro">
            <div className="eyebrow">● APPLICATION ●</div>
            <h2>ENVOIE TON <em>CV</em></h2>
            <p>5 questions, 5 jours réponse. Notre équipe franchise t'appelle.</p>
            <div className="contact">
              <span>→ franchise@burgerplay.ma</span>
              <span>→ Tanger, Maroc</span>
            </div>
          </Reveal>

          <form onSubmit={onSubmit}>
            <label>Prénom<input type="text" name="prenom" required /></label>
            <label>Nom<input type="text" name="nom" required /></label>
            <label className="full">Email<input type="email" name="email" required /></label>
            <label>Téléphone<input type="tel" name="tel" required /></label>
            <label>Ville visée<input type="text" name="ville" placeholder="Casablanca, Rabat..." required /></label>
            <label className="full">Budget
              <select name="capital" required defaultValue="">
                <option value="" disabled>Sélectionner</option>
                <option>&lt;300K</option>
                <option>300–500K</option>
                <option>500K–1M</option>
                <option>&gt;1M</option>
              </select>
            </label>
            <label className="full">Expérience
              <textarea name="exp" placeholder="Parlons-nous de votre parcours, motivation, projet..." />
            </label>
            {!sent && <button type="submit">ENVOYER CANDIDATURE</button>}
            {sent && <div className="success">✓ REÇU. ON REVIENT DANS 5J.</div>}
          </form>
        </div>
      </section>

      <Reveal as="section" className="faq">
        <div className="eyebrow" style={{marginBottom:24}}>● FAQ ●</div>
        <h2>QUESTIONS <em>●</em></h2>
        {[
          {q:'Faut-il une expérience resto?',a:'Pas obligatoire, mais management requis. On forme à l\'opérationnel. Cherchons : entrepreneur investi sur le terrain.'},
          {q:'Combien de redevances?',a:'Droits d\'entrée forfaitaires + redevances % CA. Détail au DIP après sélection.'},
          {q:'Ouvrir plusieurs restos?',a:'Oui. Après 1 an réussi, contrat multi-unités possible dès signature pour profils ambitieux.'},
          {q:'Autres villes / pays?',a:'Oui. Feuille de route : Casablanca → Rabat → Marrakech, puis export. Master-franchises étudiées.'},
          {q:'Comment l\'appro?',a:'Circuit centralisé : pain, sauces, viandes (qualité garantie). Frais locaux via partenaires agréés.'},
        ].map((f, i) => (
          <details key={i}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </Reveal>
    </>
  );
}
