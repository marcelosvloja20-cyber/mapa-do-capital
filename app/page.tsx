
export default function Home() {
  return (
    <main style={{
      backgroundColor: "#0b0b0f",
      minHeight: "100vh",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "24px"
    }}>
      
      <h1 style={{ color: "#FFD700", fontSize: "2.2rem", marginBottom: "8px" }}>
        Mapa do Capital
      </h1>

      <p style={{ opacity: 0.8, marginBottom: "32px" }}>
        Visualize dinheiro, investimentos e economia em tempo real
      </p>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "16px"
      }}>
        
        {[
          { title: "Mercados", value: "+1.42%" },
          { title: "Criptomoedas", value: "BTC $68.400" },
          { title: "Carteira", value: "R$ 52.800" },
          { title: "Dividendos", value: "R$ 1.240/mês" }
        ].map((card, i) => (
          <div key={i} style={{
            background: "#14141c",
            borderRadius: "16px",
            padding: "20px",
            border: "1px solid #222",
            boxShadow: "0 0 12px rgba(255,215,0,0.15)"
          }}>
            <p style={{ opacity: 0.7 }}>{card.title}</p>
            <h2 style={{ color: "#FFD700", marginTop: "8px" }}>
              {card.value}
            </h2>
          </div>
        ))}
      </section>

      <div style={{
        marginTop: "40px",
        padding: "24px",
        background: "linear-gradient(135deg, #FFD700, #ffb700)",
        color: "#000",
        borderRadius: "18px",
        fontWeight: "bold"
      }}>
        Central de inteligência financeira em tempo real 🚀
      </div>

    </main>
  )
}

