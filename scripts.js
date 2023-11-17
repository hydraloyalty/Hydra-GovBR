@charset "utf-8";
/* CSS Document */

/* No início do seu arquivo CSS */
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.tela {
    display: flex; /* Isso alinhará as divs lado a lado */
    align-items: start; /* Isso alinhará as divs ao topo */
    width: 100%; /* Defina a largura do container para preencher a tela ou o valor desejado */
}

.header {
    height: 84px; /* Define a altura do header */
    display: flex; /* Ativa Flexbox */
    align-items: center; /* Alinha itens verticalmente ao centro */
    background-color: #fff; /* Cor de fundo do header (opcional) */
    width: 1152px;
    justify-content: space-between;
}

.pagina {
    width: 1152px;
    justify-content: center;
}

.config {
    width: 240px;
    justify-content: center;
    margin-left: 40px;
}

input {
    border: none;
    background-color: transparent;
}

.menu-paginas {
    justify-content: flex-end;
    align-items: center;
    gap: 19px;
    display: flex;
}

.paginas-opcoes {
    color: #1351B4;
    font-size: 15px;
    font-family: 'Raleway';
    font-weight: 400;
    white-space: nowrap;
}

.menu-extras {
    margin-left: 30px;
    margin-right: 30px;
    width: 54px;
    justify-content: space-between;
}

.usuario {
    height: 32px;
    align-items: center;
    gap: 9px;
    display: flex;
    cursor: pointer;
}

.usuario-nome {
    color: #636363;
    font-size: 14px;
    font-family: 'Raleway';
    font-weight: 700;
    white-space: nowrap;
}

.linha1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 58px;
    gap: 564px;
}

.receita {
    color: #333333;
    display: flex;
    gap: 9px;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-family: 'Raleway';
    font-weight: 400;
}

.pesquisa {
    width: 364px;
    height: 56px;
    border-radius: 8px;
    background: #EDEDED;
    align-items: center;
    display: flex;
    padding-right: 20px;
    justify-content: space-between;
}

.pesquisa-texto {
    color: #333333;
    font-size: 16px;
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 400;
    margin-left: 33px;
}

.linha2 {
    display: flex;
    align-items: center;
    margin-top: 9px;
    gap: 12px;
    font-size: 14px;
    font-family: 'Raleway';
    height: 56px;
}

.divisoria {
    height: 1px;
    width: 100%;
    background-color: #E6E6E6; /* Cor da divisória */
    margin-right: 20px; /* Distância desejada da borda direita */
}

.empresa {
    height: 174px;
    justify-content: center;
    align-items: center;
    margin-top: 54px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.empresa-rs {
    color: #1351B4;
    font-size: 32px;
    font-family: 'Raleway';
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    font-feature-settings: 'pnum' on, 'lnum' on;
    width: 100%;
}

.dados {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 9px;
    gap: 16px;
    width: 100%;
}

.natureza-juridica {
    text-align: right;
    color: #1351B4;
    font-size: 18px;
    font-family: 'Raleway';
    font-weight: 400;
    font-feature-settings: 'pnum' on, 'lnum' on;
}

.cnpj {
    text-align: left;
    font-size: 18px;
    font-family: 'Raleway';
    font-weight: 700;
    font-feature-settings: 'pnum' on, 'lnum' on;
	color: #1351B4;
}

.area-cards {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 40px;
    gap: 20px;
}

.card {
    height: 218px;
    width: 218px;
    background: #F2F2F2;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.20);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.card-tipo {
    display: inline-flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    align-items: center;
    margin-top: 24px;
}

.card-titulo {
    color: #0C326F;
    font-size: 16px;
    font-family: 'Raleway';
    font-weight: 600;
    text-align: center;
}

.card-conteudo {
    height: 110px;
    justify-content: center;
    gap: 7px;
    display: inline-flex;
    flex-direction: column;
    position: absolute;
    top: 105px;
}

.card-info {
    color: #0C326F;
    font-size: 16px;
    font-family: 'Raleway';
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    font-feature-settings: 'pnum' on, 'lnum' on;
}

.material-switch {
    position: relative;
    display: inline-block;
    width: 40px; /* Largura do switch */
    height: 24px; /* Altura do switch */
    padding-left: 8px;
    padding-right: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
}

.material-switch input {
    display: none;
}

.material-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff; /* Cor de fundo inicial */
    border: 2px solid #606060; /* Borda */
    border-radius: 16px;
}

.material-slider:before {
    position: absolute;
    content: "";
    height: 16px; /* Altura do pseudo-elemento */
    width: 16px; /* Largura do pseudo-elemento */
    background-color: #606060; /* Cor do pseudo-elemento */
    border-radius: 8px; /* Arredondamento do pseudo-elemento */
    top: 6px;
    left: 6px;
}

input:checked + .material-slider {
    background-color: #4CAF50; /* Cor de fundo quando ativado */
    border: none; /* Sem borda quando ativado */
}

input:checked + .material-slider:before {
    transform: translateX(16px); /* Mover para a direita */
    width: 24px; /* Largura do pseudo-elemento quando ativado */
    height: 24px; /* Altura do pseudo-elemento quando ativado */
    background-color: #fff; /* Cor do pseudo-elemento quando ativado */
    border-radius: 12px;
    left: 8px;
    top: 4px;
}

.config {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 260px;
    border-left: solid 1px;
    border-color: #808080;
    padding-left: 20px;
}

.config1 {
    padding: 18px;
    border: 1px solid #888888;
    border-radius: 10px;
    gap: 10px;
    display: flex;
    flex-direction: column;
}

.config2 {
    padding: 18px;
    border: 1px solid #888888;
    border-radius: 10px;
    gap: 10px;
    display: flex;
    flex-direction: column;
}

.config3 {
    padding: 18px;
    border: 1px solid #888888;
    border-radius: 10px;
    gap: 10px;
    display: flex;
    flex-direction: column;
}

.config4 {
    padding: 18px;
    border: 1px solid #888888;
    border-radius: 10px;
    gap: 10px;
    display: flex;
    flex-direction: column;
}

.config5 {
    padding: 18px;
    border: 1px solid #888888;
    border-radius: 10px;
    gap: 10px;
    display: flex;
    flex-direction: column;
}

.config-head {
    font-family: 'Raleway';
    font-feature-settings: 'pnum' on, 'lnum' on;
    font-weight: 700;
}

.switch {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.switch-dependente {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#switch-descricao1 {
    font-family: 'Raleway';
    font-feature-settings: 'pnum' on, 'lnum' on;
    font-size: 16px;
    font-weight: 500;
}

#switch-descricao2 {
    font-family: 'Raleway';
    font-feature-settings: 'pnum' on, 'lnum' on;
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
}

#switch-descricao3 {
    font-family: 'Raleway';
    font-feature-settings: 'pnum' on, 'lnum' on;
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
}

#switch-descricao4 {
    font-family: 'Raleway';
    font-feature-settings: 'pnum' on, 'lnum' on;
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
}

#switch-descricao5 {
    font-family: 'Raleway';
    font-feature-settings: 'pnum' on, 'lnum' on;
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
}

#switch-descricao6 {
    font-family: 'Raleway';
    font-feature-settings: 'pnum' on, 'lnum' on;
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
    bottom: 40px;
}

#switch-descricao7 {
    font-family: 'Raleway';
    font-feature-settings: 'pnum' on, 'lnum' on;
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
}

#switch-descricao8 {
    font-family: 'Raleway';
    font-feature-settings: 'pnum' on, 'lnum' on;
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
}

#switch-descricao9 {
    font-family: 'Raleway';
    font-feature-settings: 'pnum' on, 'lnum' on;
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
    }

#botao-imprimir {
    background-color: #4CAF50; /* Cor de fundo */
    color: white; /* Cor do texto */
    padding: 10px 20px; /* Padding */
    margin: 10px 0; /* Margem */
    border: none; /* Sem borda */
    cursor: pointer; /* Cursor como ponteiro */
    border-radius: 5px; /* Bordas arredondadas */
    font-weight: 600;
    font-family: 'Raleway';
    font-size: 16px;
}

.ocultar-na-impressao {
    display: none !important;
}

.config0 {
    gap: 16px;
    display: flex;
    flex-direction: column;
}

.config-dados {
    background-color: #EDEDED;
    border-radius: 6px;
    border: 1px solid #ABABAB;
    height: 30px;
    font-weight: 400;
    font-family: 'Raleway';
    font-size: 16px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #333333;
    padding-top: 10px;
    padding-left: 18px;
    padding-right: 18px;
    padding-bottom: 10px;
}

#switch-dependente-container-1 {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#switch-dependente-container-2 {
    align-items: center;
    display: flex;
    flex-direction: row;
}

#switch-dependente-container-3 {
    align-items: center;
    display: flex;
    flex-direction: row;
}

#switch-dependente-container-4 {
    align-items: center;
    display: flex;
    flex-direction: row;
}

#switch-dependente-container-5 {
    align-items: center;
    display: flex;
    flex-direction: row;
}
