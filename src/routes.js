const{ Router }= require("express");
const { createUser } = require("./controllers/users");

const routes = Router();

//cria uma rota get pra testar a api(=> funcao call back)
routes.get("/health", (request, response) => {
    return response.status(200).json("seja bem vindo ao site teste");
});
    
//cria um array para simular um banco de dadoscls
    let users = [];

//cria uma rota post para inserir um novo suuario
routes.post("/users" ,createUser);
    
    //cria uma rota get para listar todos os usuários
    routes.get("/users", listUsers);     

    //cria uma rota get pra listar um usuario especifico
    routes.get('/users/:id', (request, response) => {
        const currentUser = users.find(
            (user) => user.id === parseInt(request.params.id)
        );  
    
        if(!currentUser) 
            return response.status(404).json('Esse usuário não foi encontrado'); 
    
        return response.status(200).json(currentUser);
    });
    
    //Criar uma rota pra deletar um usuário
    routes.delete('/users/:id', (request, response) => {
        const index = users.findIndex(
            (user) => user.id === parseInt(request.params.id)
        );  
    
        if(index === -1) 
            return response.status(404).json('Usuário não encontrado'); 
        
        users.splice(0, index);
        return response.status(200).json("Usuário excluído com Sucesso!");
    });
    
    //Cria uma rota para atualizar um usuário(editar)
    routes.put('/users/:id', (request, response) => {
        const { age, name} = request.body 
        const index = users.findIndex(
            (user) => user.id === parseInt(request.params.id)
        );  
    
        if(index === -1) 
            return response.status(404).json('Usuário não encontrado'); 
        
        const updatedUser = {
            id: users[index].id, 
            age, 
            name, 
        }
    
        users[index] = updatedUser; 
    
        return response.status(200).json(updatedUser);
    });
    module.exports = routes;