document.getElementById("btnCadastroDonatario").addEventListener("click",
    function(target){
        target.preventDefault();
        const json = {}
        const dataForm = new FormData(document.forms[0])

        for(let [name, value] of dataForm){
            json[name] = value
        }

        fetch("http://localhost:8080/OrgaoDonatario",{
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
