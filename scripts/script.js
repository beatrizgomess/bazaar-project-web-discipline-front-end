
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

        let {nome, endereco, telefone, horarioFuncionamento, descricao} = data
        divmain.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">${nome}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            Endereço: ${endereco}
            <br>
            Descrição: ${descricao} 
            <br>
            Horario de Funcionamento: ${horarioFuncionamento}
            <br>
            Telefone para contato: ${telefone}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>`
    })
    .catch(erro => {alert(erro)})
    

})





//========================= BUSCAR FISCALIZADOR ========================= //  



//========================= BUSCAR PRODUTO ========================= //  

