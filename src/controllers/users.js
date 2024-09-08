function createUser(request, response){
    const { name, age } = request.body;
        
    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1, 
        name, 
        age,
    };
    users.push(newUser);
    return response.status(201).json(newUser);
}

function listUsers(request, response){
    return response.status(200).json(users);
}

module.exports = { createUser , listUsers };