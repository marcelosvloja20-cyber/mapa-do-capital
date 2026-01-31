export async function GET() {
  const btcRes = await fetch(
    "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
  )
  const btcData = await btcRes.json()

  const usdRes = await fetch(
    "https://economia.awesomeapi.com.br/json/last/USD-BRL"
  )
  const usdData = await usdRes.json()

  return Response.json({
    bitcoin: btcData.price,
    dolar: usdData.USDBRL.bid
  })
}
