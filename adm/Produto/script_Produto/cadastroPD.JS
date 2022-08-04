///RECUPERAR ORGAO DONATARIO
/// RECUPERAR ORGAO FISCALIZADOR
/// RECUPERAR LOTE


/// E ENTAO UTILIZAR NO CADASTRO DE PRODUTO

 const mainDiv = document.getElementById("mainDiv")
const msgDiv = document.getElementById("msgDiv")
fetch("http://localhost:8080/Lote",{method: "GET"})
.then(response => response.json())
.then(data => {

    data.forEach(element => {
        
        const {id} = element

       mainDiv.innerHTML += `(${id})`

    });

})
const cadastroFornada = (id_lote) => {
    const data = {Lote: {id}}

    fetch("http://localhost:8080/Produto",{
        method: "POST",
        headers: {
                'Content-Type': 'application/json',
                
            },
        body: JSON.stringify(data)
    }).then(response => {

        if (response.status == 200){
            msgDiv.innerHTML = `<h3>Fornada do pão , inserida</h3>`
        }else{
            msgDiv.innerHTML = "Falha ao cadastrar, contate sua divindade preferida e se vire!"
        }
    }
    )
   
}

    document.getElementById("btnCadastro").addEventListener("click",
    function(target){
        target.preventDefault();
        const json = {}
        const dataForm = new FormData(document.forms[0])

        for(let [name, value] of dataForm){
            json[name] = value
        }

        fetch("http://localhost:8080/Produto",{
            method: "POST",
            body: JSON.stringify(json),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response){return response.text()})
        .then(function(data){
            alert(data)
        }).catch(function(erro){
            alert(erro)
        })
    }
)