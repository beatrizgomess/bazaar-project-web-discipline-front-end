///RECUPERAR ORGAO DONATARIO
/// RECUPERAR ORGAO FISCALIZADOR
/// RECUPERAR LOTE


/// E ENTAO UTILIZAR NO CADASTRO DE PRODUTO


const loteSelect = document.getElementById('loteSelect').value;
const pNome = document.getElementById('pNome').value;
const pDescricao = document.getElementById('pDescricao').value;


document.getElementById("btnCadastro").addEventListener("click",
async function(target){
        target.preventDefault();
        const json = {}
        const dataForm = new FormData(document.forms[0])

        for(let [name, value] of dataForm){
            if(name !== "passs"){
                json[name] = value
            }
        }
        alert('passou')
        await fetch("http://localhost:8080/Produto",{
            method: "POST",
            body: JSON.stringify
            ({
                id_lote: loteSelect,
                nome: pNome,
                descricao: pDescricao

            }),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(function(response){return response.text()})
        .then(function(data){
            alert(data)
        }).catch(function(erro){
            alert(erro)
        })
        alert('passou')
    }
)