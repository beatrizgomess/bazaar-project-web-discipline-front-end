///RECUPERAR ORGAO DONATARIO
/// RECUPERAR ORGAO FISCALIZADOR
/// RECUPERAR LOTE


/// E ENTAO UTILIZAR NO CADASTRO DE PRODUTO







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