'use strickt'

const openMdal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "Erica",
    email: "ericadebemm@gmail.com",
    celular: "0123088990",
    cidade: "Weimar"
}  

const getLocalStorage = () => JSON.parse(localStorage.getItem('dbClient')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("dbClient", JSON.stringify(dbClient))

// CRUD - create read update delete

const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClient = getLocalStorage(dbClient)
    dbClient.push(client)
    setLocalStorage(dbClient)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

//interacao layout
const saveClient = () => {
    if (isValidFields()) {
        console.log("cadastrando clientes")
    }
}

//eventos

document.getElementById('cadastrarCliente')
    .addEventListener('click', closeModal)
    
document.getElementById('modalClose')
    .addEventListener('click', closeModal)    

document.getElementById('salvar')
    .addEventListener('click', saveClient)