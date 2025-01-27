import React from 'react';

const EMaisPage = () => {
  return (
    <div>
      <section>
        <h2>PASSO A PASSO:</h2>
        <ol>
          <li> 1. Você deve estar com sua fatura de energia em mãos
e levar ao posto de coleta mais próximo com os
resíduos limpos e separados;</li>
          <li> 2. No posto, o atendente irá pesar cada resíduo
separadamente, gerando um bônus a ser creditado
na fatura de energia;</li>
          <li> 3. Ao final, você receberá um comprovante da
transação para conferência junto à fatura no mês
seguinte.</li>
        </ol>
      </section>
        <section>
            <h2>Materiais recicláveis
            recebidos no posto de coleta:</h2>

            <div>
             <div>
                <h3>Papel</h3>
                <p>Livros, revistas, papelão, encartes
                e Tetra Pak.</p>
             </div>

             <div>
                <h3>Plástico</h3>
                <p>PET, plástico filme, PVC...</p>
             </div>

             <div>
                <h3>Vidro</h3>
                <p>Garrafas e tampas plásticas.</p>
             </div>

             <div>
                <h3>Metal</h3>
                <p>Aço inox, alumínio, ferro.</p>
                <p>* Recebemos
                também óleo de cozinha usado.</p>
             </div>

            </div>
        </section>

        <section>
            <h2>Quais materiais NÃO
            recebemos:</h2>
            <ul>
                <li> ‣ Cabos e fios, CDs, fitas K7 e de vídeo, cobre...</li>
                <li> ‣ Embalagens plásticas metalizadas...</li>
                <li> ‣ Restos de alimentos, tecidos, e outros...</li>
            </ul>
        </section>


    </div>
  );
};

export default EMaisPage;