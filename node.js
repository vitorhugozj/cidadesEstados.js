const estadosCidades=require('./modulo/estados_cidades')

const getListaDeEstados=function(){
    let SiglasJSON={}
    let SiglasARRAY=[]
    let counter=0;
    while(counter < 27){

        SiglasARRAY.push(estadosCidades.estadosCidades.estados[counter].sigla)
        counter++ 
    }
    SiglasJSON.uf=SiglasARRAY
    SiglasJSON.qtd=SiglasARRAY.length
    return SiglasJSON
}
const getDadosEstados=function(){
    let DadosJSON={}
    let filtrarEstados='SP'
    let counter=0;
    loop: while(true){
        
       if(filtrarEstados==estadosCidades.estadosCidades.estados[counter].sigla){
            DadosJSON.uf=estadosCidades.estadosCidades.estados[counter].sigla
            DadosJSON.desc=estadosCidades.estadosCidades.estados[counter].nome
            DadosJSON.regiao=estadosCidades.estadosCidades.estados[counter].regiao
            DadosJSON.cidades=estadosCidades.estadosCidades.estados[counter].cidades
            break loop
        }
        counter++
     }
     return DadosJSON
}
const getCapitalEstados=function(){
    let CapitalJSON={}
    let filtrarEstados='AC'
    let counter=0
    loop: while(true){
        if(filtrarEstados==estadosCidades.estadosCidades.estados[counter].sigla){
        CapitalJSON.uf=estadosCidades.estadosCidades.estados[counter].sigla
        CapitalJSON.desc=estadosCidades.estadosCidades.estados[counter].nome
        CapitalJSON.capital=estadosCidades.estadosCidades.estados[counter].capital
        break loop
        }
        counter++ 
     }
     return CapitalJSON
}
const getEstadosRegioes=function(){
    
    let RegiaoARRAY=[]
    let filtrarRegiao='SUL'
    let counter=0
    while(counter < 27){
        
        if(filtrarRegiao.toUpperCase()==estadosCidades.estadosCidades.estados[counter].regiao.toUpperCase()){
        RegiaoJSON={}
        RegiaoJSON.uf=estadosCidades.estadosCidades.estados[counter].sigla
        RegiaoJSON.nome=estadosCidades.estadosCidades.estados[counter].nome
        RegiaoARRAY.push(RegiaoJSON)
        }
       counter++
     }
     return RegiaoARRAY
    
}
const getCapitalPais=function(){
    let CapitaisJSON = {}
    let CapitaisARRAY = []
    let counter = 0;
    while(counter < 27){
        if(estadosCidades.estadosCidades[counter].estados_cidades){
            CapitaisJSON.capital_atual=estadosCidades.estadosCidades.estados[counter].capital_pais.capital
            CapitaisJSON.uf=estadosCidades.estadosCidades.estados[counter].sigla
            CapitaisJSON.capital=estadosCidades.estadosCidades.estados[counter].capital
            CapitaisJSON.descricao=estadosCidades.estadosCidades.estados[counter].nome
            CapitaisJSON.regiao=estadosCidades.estadosCidades.estados[counter].regiao
            CapitaisJSON.capital_pais_ano_inicio=estadosCidades.estadosCidades.estados[counter].capital_pais_ano_inicio
            CapitaisJSON.capital_pais_ano_termino=estadosCidades.estadosCidades.estados[counter].capital_pais_ano_termino
            CapitaisARRAY.push(CapitaisJSON)
        }
        counter++
    }
    CapitaisJSON.capital=CapitaisARRAY
    return CapitaisJSON
}
const getCidades=function(){
    let CidadesJSON = {}
    let CidadesARRAY = []
    let filtrarEstados = 'AC'
    let counterCidades=0
    let counterEstados=0
    while(true){
        if(filtrarEstados==estadosCidades.estadosCidades.estados[counterEstados].sigla){
            while(CidadesARRAY.length<estadosCidades.estadosCidades.estados[counterEstados].cidades.length){
                CidadesARRAY.push(estadosCidades.estadosCidades.estados[counterEstados].cidades[counterCidades].nome)
                counterCidades++
            }
            break
        }
        counterCidades++
    }
    counterEstados=0
    while(true){
         if(filtrarEstados==estadosCidades.estadosCidades.estados[counterEstados].sigla){
            CidadesJSON.uf=estadosCidades.estadosCidades.estados[counterEstados].sigla
            CidadesJSON.descricao=estadosCidades.estadosCidades.estados[counterEstados].nome
            CidadesJSON.quantidade_cidades=estadosCidades.estadosCidades.estados[counterEstados].cidades.length
            CidadesJSON.cidades=CidadesARRAY
            break
         }
         counterEstados++
    }
    return CidadesJSON
}
console.log(getCidades());
// console.log(getCapitalPais());
// console.log(getEstadosRegioes());
// console.log(getCapitalEstados());
//console.log(getDadosEstados());
// console.log(getListaDeEstados());
