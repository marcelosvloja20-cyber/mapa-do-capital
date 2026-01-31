export default function Home() {
  return (
    <main style={{
      backgroundColor: "#0b0b0f",
      minHeight: "100vh",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "28px"
    }}>

      <h1 style={{
        color: "#FFD700",
        fontSize: "2.4rem",
        marginBottom: "6px"
      }}>
        Mapa do Capital
      </h1>

      <p style={{ opacity: 0.7, marginBottom: "32px" }}>
        Central de inteligência financeira em tempo real
      </p>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "18px"
      }}>

        {[
          { title: "Mercados Hoje", value: "+1,42%" },
          { title: "Bitcoin", value: "R$ 348.200" },
          { title: "Sua Carteira", value: "R$ 52.800" },
          { title: "Dividendos", value: "R$ 1.240/mês" }
        ].map((card, i) => (
          <div key={i} style={{
            background: "#14141c",
            padding: "22px",
            borderRadius: "18px",
            border: "1px solid #222",
            boxShadow: "0 0 18px rgba(255,215,0,0.18)",
            transition: "transform .2s"
          }}>
            <p style={{ opacity: 0.7 }}>{card.title}</p>
            <h2 style={{ color: "#FFD700", marginTop: "10px" }}>
              {card.value}
            </h2>
          </div>
        ))}

      </section>

      <div style={{
        marginTop: "42px",
        padding: "26px",
        borderRadius: "20px",
        background: "linear-gradient(135deg, #FFD700, #ffb700)",
        color: "#000",
        fontWeight: "bold",
        fontSize: "1.1rem"
      }}>
        📈 O mercado em um só lugar — simples, rápido e inteligente
      </div>

    </main>
  )
}
