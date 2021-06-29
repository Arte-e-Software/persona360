// cpa.js

function cpa(rota, index, agrupamento) {

    let getCpa = new XMLHttpRequest();
    getCpa.open("GET", rota, true);
    getCpa.onload = function(e) {
    let cpa = JSON.parse(getCpa.response); 
    console.log(index);
    console.log(agrupamento);
    console.log(cpa.agente[index]);
    console.log(cpa.agente[index].showTurmaCurso);
    console.log(cpa.agente[index].questionario);
    }
    getCpa.send();

}