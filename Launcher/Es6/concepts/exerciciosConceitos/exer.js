class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }
}

class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha){

            this.admin = true;
        }
    }
}

isAdmin(){
    return this.admin === true;
    }



const User1 = new Usuario('email@teste.com', 'senha123');
const Admin1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());