export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '50px', backgroundColor: '#f4f4f9' }}>
      <h1 style={{ color: '#0070f3', fontSize: '3rem' }}>Welkom bij Thieu.ai</h1>
      <p style={{ color: '#333', fontSize: '1.5rem', margin: '20px 0' }}>
        Ontdek de kracht van AI en innovatie op één plek.
      </p>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1rem',
        }}
        onClick={() => alert('Meer functies komen eraan!')}
      >
        Ontdek Meer
      </button>
    </div>
  );
}
