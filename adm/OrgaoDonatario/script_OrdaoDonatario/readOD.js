

document.getElementById("btnBusca").addEventListener("click", async function(){
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

        let {nome, endereco, telefone, horario_Funcionamento, descricao} = data
        divmain.innerHTML = `<h3>${nome}</h3>
                                        Endereço: ${endereco}<br/>
                                        Telefone: ${telefone}
                                        Horario de Funcionamento: ${horario_Funcionamento}<br/>
                                        Descrição: ${descricao}`
    })
    .catch(erro => {alert(erro)})
    

})
