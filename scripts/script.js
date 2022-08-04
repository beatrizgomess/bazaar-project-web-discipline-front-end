
//========================= BUSCAR DONATÁRIO ========================= // 

document.getElementById("btnbusca").addEventListener("click", async function(){
    const id = document.getElementById("id").value
    const divmain = document.getElementById("mainDiv")

    fetch(`http://localhost:8080/OrgaoDonatario/${id}`,
    {Method: "GET"})
    .then(response => {return response.json()})
    .then(data => {
        if(data.status == 404){
            mainDiv.innerHTML = "Pão não encontrado"
            return
        }else if(data.status == 500){
            mainDiv.innerHTML = "Problema com a requisição"
            return
        }

        let {nome, endereco, telefone, horario_funcionamento, descricao} = data
        divmain.innerHTML = `<h3>${nome}</h3>
                                        Endereço: ${endereco}<br/>
                                        Telefone: ${telefone}
                                        Horario de Funcionamento: ${horario_funcionamento}<br/>
                                        Descrição: ${descricao}`
    })
    .catch(erro => {alert(erro)})
    

})

//========================= BUSCAR FISCALIZADOR ========================= //  

document.getElementById("btn-busca-fiscalizador").addEventListener("click", async function(){
    const idFiscalizador = document.getElementById("input-fiscalizador").value
    const divMainZ = document.getElementById("divMain")

    fetch(`http://localhost:8080/OrgaoFiscalizador/${idFiscalizador}`, 
    {Method: "GET"})
    .then(response => {return response.json()})
    .then(data => {
        if(data.status == 400){
            divMain.innerHTML = `Órgão Fiscalizador não encontrado!!`
            return
        } else if(data.status == 500){
            divMain.innerHTML = `Problema com a requisição!!`
            return
        }

        let {nome, descricao} = data
        divMainZ.innerHTML = `<h3>${nome}</h3><br>
                            Descrição: ${descricao}`


    }).catch(erro => {alert(erro)})
})

//========================= BUSCAR FISCALIZADOR ========================= //  