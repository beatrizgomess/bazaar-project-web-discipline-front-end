

document.getElementById("btnCadastro").addEventListener("click",
    function(target){
        target.preventDefault();
        const json = {}
        const dataForm = new FormData(document.forms[0])

        for(let [name, value] of dataForm){
            json[name] = value
        }

        fetch("http://localhost:8080/OrgaoFiscalizador",{
            method: "POST",
            body: JSON.stringify(json),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response){return response.text()}).then(window.location.href = 'indexOF.html')
    }
)