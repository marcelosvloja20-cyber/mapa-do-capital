import { useEffect, useState } from "react"

export default function Home() {
  const [btc, setBtc] = useState(null)
  const [usd, setUsd] = useState(null)

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice/BRL.json")
      .then(res => res.json())
      .then(data => setBtc(data.bpi.BRL.rate))

    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
      .then(res => res.json())
      .then(data => setUsd(data.USDBRL.bid))
  }, [])

  return (
    <main style={{
      background: "#0b0b0f",
      minHeight: "100vh",
      color: "white",
      padding: "28px",
      fontFamily: "Arial"
    }}>
      <h1 style={{ color: "#FFD700", fontSize: "2.4rem" }}>
        Mapa do Capital
      </h1>

      <p style={{ opacity: .7 }}>
        Mercado financeiro em tempo real
      </p>

      <section style={{
        marginTop: "32px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
        gap: "18px"
      }}>

        <Card title="Bitcoin" value={btc ? `R$ ${btc}` : "Carregando..."} />
        <Card title="Dólar" value={usd ? `R$ ${usd}` : "Carregando..."} />
        <Card title="Status" value="Mercado ativo 📈" />

      </section>
    </main>
  )
}

function Card({ title, value }) {
  return (
    <div style={{
      background: "#14141c",
      padding: "22px",
      borderRadius: "18px",
      border: "1px solid #222",
      boxShadow: "0 0 18px rgba(255,215,0,.18)"
    }}>
      <p style={{ opacity: .7 }}>{title}</p>
      <h2 style={{ color: "#FFD700", marginTop: "8px" }}>
        {value}
      </h2>
    </div>
  )
}
