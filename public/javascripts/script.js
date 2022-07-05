window.onload = () => { //colocar dentro deste objeto para carregar o js quando a página já estiver carregada
  let fieldName = document.getElementById('name');
  let fieldMessage = document.getElementById('message');
  
  //blur quando sair do campo
  fieldName.addEventListener('blur', () => {
    console.log('Saiu do campo nome');
  })

  //focus quando estiver dentro do campo
  fieldMessage.addEventListener('focus', () => {
    console.log("o campo message recebeu foco")
  })

  //change verificar mudança
  fieldMessage.addEventListener('change', () => {
    console.log("o campo message teve seu valor alterado")
  })
}