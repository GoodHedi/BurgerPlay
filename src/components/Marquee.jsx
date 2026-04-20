export default function Marquee() {
  const items = [
    { t: 'Press start to eat' },
    { t: '-30% sur sélection', italic: true },
    { t: 'Pain brioché maison' },
    { t: 'Boss level burgers', italic: true },
  ];
  const renderRow = (key) =>
    items.map((it, i) => (
      <span key={`${key}-${i}`}>
        <span>{it.italic ? <em style={{ fontStyle: 'italic' }}>{it.t}</em> : it.t}</span>
        <span className="dot-sep"> ● </span>
      </span>
    ));

  return (
    <div className="marquee">
      <div className="track">
        {renderRow('a')}
        {renderRow('b')}
        {renderRow('c')}
        {renderRow('d')}
      </div>
    </div>
  );
}
