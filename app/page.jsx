import { useEffect, useState } from "react"

export default function Home() {
  const [btc, setBtc] = useState(null)

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice/BRL.json")
      .then(res => res.json())
      .then(data => {
        setBtc(data.bpi.BRL.rate)
      })
  }, [])

  return (
    <main style={{
      backgroundColor: "#0b0b0f",
      minHeight: "100vh",
      color: "white",
      padding: "28px",
      fontFamily: "Arial"
    }}>
      <h1 style={{ color: "#FFD700" }}>Mapa do Capital</h1>

      <div style={{
        marginTop: "40px",
        background: "#14141c",
        padding: "24px",
        borderRadius: "18px",
        boxShadow: "0 0 16px rgba(255,215,0,.2)"
      }}>
        <p>Bitcoin agora</p>
        <h2 style={{ color: "#FFD700" }}>
          {btc ? `R$ ${btc}` : "Carregando..."}
        </h2>
      </div>
    </main>
  )
}

