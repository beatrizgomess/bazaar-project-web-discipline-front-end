///RECUPERAR ORGAO DONATARIO
/// RECUPERAR ORGAO FISCALIZADOR
/// RECUPERAR LOTE


/// E ENTAO UTILIZAR NO CADASTRO DE PRODUTO

const listOD = document.querySelector('ul');

    fetch(`http://localhost:8080/OrgaoDonatario`)
    .then((response) => response.json())
    .then((data) => data.forEach(od => {
        listOD.insertAdjacentHTML('beforeend', `<h4 id="idDona">${od.id}</h4>`)
        listOD.insertAdjacentHTML('beforeend', `<h3>${od.nome}</h3>`)
        listOD.insertAdjacentHTML('beforeend', `<li>${od.endereco}</li> `)
        listOD.insertAdjacentHTML('beforeend', `<li>${od.telefone}</li> `)
        listOD.insertAdjacentHTML('beforeend', `<li>${od.horarioFuncionamento}</li> `)
        listOD.insertAdjacentHTML('beforeend', `<li>${od.descricao}</li> `)

    }));


const listOF = document.getElementById('of')
fetch(`http://localhost:8080/OrgaoFiscalizador`)
.then((response) => response.json())
.then((data) => data.forEach(of => {
    listOF.insertAdjacentHTML('beforeend', `<h4 id="idFiscal">${of.id}</h4>`)
    listOF.insertAdjacentHTML('beforeend', `<li>${of.nome}</li>`)
    listOF.insertAdjacentHTML('beforeend', `<li>${of.descricao}</li> `)

}));


//CADASTRO DE UM LOTE


/// Teria que fazer um foreach para percorrer a lista de OF E OD???

const idFiscalizador = document.getElementById('id_orgao_fiscalizador').value
const idDonatario = document.getElementById('id_orgao_donatario').value
const dataEntrega = document.getElementById('dataEntrega').value
const observacao = document.getElementById('observacao').value

fetch(`http://localhost:8080/OrgaoFiscalizador`)
.then((response) => response.json())
.then((data) => data.forEach(of => {
    if(idFiscalizador == of.id){
        listOF.insertAdjacentHTML('beforeend', `<h4 id="idFiscal">${of.id}</h4>`)
    
    }
    listOF.insertAdjacentHTML('beforeend', `<h4 id="idFiscal">${of.id}</h4>`)
    listOF.insertAdjacentHTML('beforeend', `<li>${of.nome}</li>`)
    listOF.insertAdjacentHTML('beforeend', `<li>${of.descricao}</li> `)

}));


document.getElementById('btnCadastro').addEventListener("click",
    function(target){
        target.preventDefault();
        const json = {}
        const dataForm = new FormData(document.forms[0])

        for(let [name, value] of dataForm){
            json[name] = value 
        }
        
        alert(idFiscalizador)
        alert(idDonatario)
        fetch(`http://localhost:8080/Lote`,{
            method: "POST",
            body: JSON.stringify({
                id_orgao_fiscalizador: idFiscalizador,
                id_orgao_donatario: idDonatario,
                dataEntrega: '2022-08-04',
                observacao: observacao
            }),
            headers:{
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


document.getElementById("btnCadastro").addEventListener("click",
    function(target){
        target.preventDefault();
        const json = {}
        const dataForm = new FormData(document.forms[1])

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