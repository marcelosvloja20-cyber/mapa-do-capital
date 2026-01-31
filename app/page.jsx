export default function Home() {
  return (
    <main style={{
      background: "#0b0b0f",
      minHeight: "100vh",
      color: "white",
      padding: "20px",
      fontFamily: "system-ui, Arial"
    }}>

      <header style={{ marginBottom: "24px" }}>
        <h1 style={{ color: "#FFD700", fontSize: "2rem" }}>
          Mapa do Capital
        </h1>
        <p style={{ opacity: .7 }}>
          Seu radar financeiro em tempo real
        </p>
      </header>

      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "16px"
      }}>

        <Card title="Mercado Hoje" value="+1,42%" />
        <Card title="Bitcoin" value="R$ 348.200" />
        <Card title="Carteira" value="R$ 52.800" />
        <Card title="Dividendos" value="R$ 1.240/mês" />

      </section>

      <div style={{
        marginTop: "28px",
        padding: "20px",
        borderRadius: "18px",
        background: "linear-gradient(135deg, #FFD700, #ffb700)",
        color: "#000",
        fontWeight: "bold",
        textAlign: "center"
      }}>
        📊 Controle total do seu dinheiro em um só lugar
      </div>

    </main>
  )
}

function Card({ title, value }) {
  return (
    <div style={{
      background: "#14141c",
      padding: "18px",
      borderRadius: "16px",
      border: "1px solid #222",
      boxShadow: "0 0 14px rgba(255,215,0,.15)"
    }}>
      <p style={{ opacity: .7, fontSize: ".9rem" }}>{title}</p>
      <h2 style={{ color: "#FFD700", marginTop: "6px", fontSize: "1.4rem" }}>
        {value}
      </h2>
    </div>
  )
}
