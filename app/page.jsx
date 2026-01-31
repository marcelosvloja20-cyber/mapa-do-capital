import React from "react";
import { motion } from "framer-motion";

export default function MapaDoCapital() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex justify-between items-center px-8 py-4 border-b border-yellow-500">
        <h1 className="text-2xl font-bold text-yellow-400">MAPA DO CAPITAL</h1>
        <nav className="space-x-6 text-sm">
          <a>Mercado</a>
          <a>Minha Carteira</a>
          <a>Notícias</a>
          <a>Análises</a>
          <a>Ferramentas</a>
        </nav>
        <div className="space-x-2">
          <button className="px-4 py-1 border border-yellow-400 rounded">Entrar</button>
          <button className="px-4 py-1 bg-yellow-400 text-black rounded">Cadastrar</button>
        </div>
      </header>

      <section className="px-10 py-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold"
        >
          Onde o <span className="text-yellow-400">dinheiro</span> encontra <span className="text-yellow-400">direção</span>
        </motion.h2>
        <p className="text-gray-400 mt-2">Inteligência financeira para investir melhor</p>

        <div className="grid grid-cols-4 gap-4 mt-10">
          {[
            ["IBOVESPA", "123.450", "+0,55%"],
            ["DÓLAR", "R$5,32", "-0,24%"],
            ["BITCOIN", "$42.350", "+2,10%"],
            ["SELIC", "11,75%", "a.a"],
          ].map((item) => (
            <div key={item[0]} className="bg-zinc-900 p-4 rounded-xl shadow">
              <p className="text-sm text-gray-400">{item[0]}</p>
              <p className="text-xl font-semibold">{item[1]}</p>
              <p className="text-green-400 text-sm">{item[2]}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="bg-zinc-900 p-6 rounded-2xl">Selic sobe para 11,75%</div>
          <div className="bg-zinc-900 p-6 rounded-2xl">Balanços do trimestre</div>
          <div className="bg-zinc-900 p-6 rounded-2xl">Oportunidade em Cripto</div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-10">
          <div className="bg-zinc-900 p-5 rounded-xl">Simulador de Investimentos</div>
          <div className="bg-zinc-900 p-5 rounded-xl">Calculadora de Aposentadoria</div>
          <div className="bg-zinc-900 p-5 rounded-xl">Comparar Ativos</div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-14">
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-yellow-400 font-semibold mb-2">Minha Carteira</h3>
            <p>Patrimônio: R$ 158.750</p>
            <p>Dividendos no mês: R$ 780</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-yellow-400 font-semibold mb-2">Alertas</h3>
            <p>Petrobras: hora de vender?</p>
            <p>Tesouro IPCA com nova taxa</p>
          </div>
        </div>
      </section>
    </div>
  );
}

