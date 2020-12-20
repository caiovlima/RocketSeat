const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

const funcionario = usuarios.filter( 
    usuario => usuario.idade >= 18 && usuario.empresa === 'Rocketseat' );
console.log(funcionario);

const google = usuarios.find(
    usuario => usuario.empresa === 'Google'
);
console.log(google);

const multIdade = usuarios
    .map(usuario => ({...usuario, idade: usuario.idade *2}))
    .filter(usuario => usuario.idade <= 50);

console.log(multIdade);