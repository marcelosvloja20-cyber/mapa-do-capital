"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [market, setMarket] = useState(null)

  useEffect(() => {
    fetch("/api/market")
      .then(res => res.json())
      .then(data => setMarket(data))
  }, [])

  return (
    <main style={{
      background: "#0b0b0f",
      minHeight: "100vh",
      color: "white",
      padding: "20px"
    }}>
      <h1 style={{ color: "#FFD700" }}>Mapa do Capital</h1>

      <div style={{ marginTop: "24px" }}>
        <Card title="Bitcoin" value={market ? `$ ${market.bitcoin}` : "Carregando..."} />
        <Card title="Dólar" value={market ? `R$ ${market.dolar}` : "Carregando..."} />
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
      marginBottom: "14px",
      boxShadow: "0 0 12px rgba(255,215,0,.15)"
    }}>
      <p style={{ opacity: .7 }}>{title}</p>
      <h2 style={{ color: "#FFD700" }}>{value}</h2>
    </div>
  )
}
