let nomeObj = [{ 
  nome: "Ilmo",
  nomeDoMeio: "Klaus",
  sobrenome: "Cleynibi",
  animal:{
    gato:{
      nome:"miau"
    },
    cachorro:{
      nome:"auu"
    }
  
  }
},{ 
  nome: "qualquer",
  nomeDoMeio: "Klaus",
  sobrenome: "Cleynibi",
  animal:{
    gato:{
      nome:"auuu"
    },
    cachorro:{
      nome:"miau"
    }
  
  }
}]
let result = nomeObj[1].nome +" "+ nomeObj[0].nomeDoMeio +" "+ nomeObj[0].sobrenome
console.log(result)
console.log(nomeObj[1].animal.cachorro.nome)