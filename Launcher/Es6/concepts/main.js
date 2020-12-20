class Matematica{

    static soma(a, b){
        return a+b;
    }
}
console.log(Matematica.soma(1,2));


//MAP
const arr = [1,2,'e',3,4,'i',5,6,8,'a'];

const newArr = arr.map(item=>{
    return item *2;
    //return item + index;
});

console.log(newArr);

//somando um item com o próximo
const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

//trazendo numeros pares
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

//verificar se existe uma info noa rray
const find = arr.find(function(item){
    return item === 4;
});

console.log(find);

//Arrow function
const teste = () => ({ nome: 'Caio'});
console.log(teste());

//desestruturação de objeto
const usuario = {
    nome: 'Caio',
    idade: 23,
    endereco: {
        cidade: 'SJRP',
        estado: 'SP'
    },
};

console.log(usuario);

//pegar o nome e idade
const { nome, idade, endereco: {cidade}} = usuario;
console.log(nome, idade, cidade);

function mostraNome({nome, idade}){
    console.log(nome, idade);
}

mostraNome(usuario);

//operadores rest spred
//1° instalar: yarn add @babel/plugin-proposal-object-rest-spread

//rest, pega o resto das propriedades, ou seja, tudo depois do...
const{ nome2, ...resto} = usuario;
console.log(nome2) //exibe nome
console.log(resto) //exibe idade, endereco, cidade etc..

//exemplo em vetor
const vetor = [1,2,3,4];
const [a, b, ...c] = vetor;
console.log(a);
console.log(b);
console.log(c);

//exemplo em função
function adicao(...params){
    return params.reduce((total, next) => total + next);
}

console.log(adicao(1,2,3));

// spread = repassa a informação para outra estrutura
const arr1 = [1, 2, 3, 4];
const arr2 = ['a', 'b', 'c', 'd'];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const user1 = {
    nome: 'Caio',
    idade: 23,
    empresa: 'Solar',
};

//podemos sobrepor a informação
const user2 = {...user1, nome: 'Vinicius'};
console.log(user2);

//template literal
const fulano = 'Caio';
const funcao = 'Desenvolvedor';
console.log('Meu nome é '+fulano+ ' e sou '+funcao+' muito prazer');
//template literal
console.log(`Meu nome é ${fulano} e sou ${funcao} muito prazer!`);
