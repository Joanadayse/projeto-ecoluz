import React from 'react';


const Simulador = () => {
  return (
    <div>
      <h1>Simule o consumo
      de energia dos seus eletrodomésticos</h1>
      <form>
      <input type="text" placeholder="Tipo de Eletrodoméstico"/>
      <input type="text" placeholder="Consumo (Watts)"/>
      <input type="text" placeholder="Horas de uso por dia"/>
      <input type="text" placeholder="Dias de uso por mês"/>
        <button>Calcular</button>
        <button>Limpar</button>
      </form>
      <div>
        <p>Consumo total: 0 kWh</p>
        <p>Custo estimado: R$ 0,00</p>
      </div>
    </div>
  );
};

export default Simulador;