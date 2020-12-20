// const minhaPromise = () => new Promise((resolve, reject) =>{
//     setTimeout(() => {resolve('OK')}, 2000);
// });

// async function executaPromise() {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());

// }

// executaPromise();

import axios from 'axios';

class Api{
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);

            console.log(response);

        } catch(err){
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo('caiovlima');


//exercicios
//1.1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo(){
    await delay();
    console.log('1s');

    await delay();
    console.log('2s');

    await delay();
    console.log('3s');
    
}

umPorSegundo();

//1.2
async function getUserFromGitHub(user){
    try{
        const response = await axios.get(`https://api.github.com/users/${username}`);

        console.log(response);

    } catch(err){
        console.warn('Erro na API');
    }

}

//1.3 
async function getRepositories(repo){
    try{
        const response = await axios.get(`https://api.github.com/repos/${repo}`);

        console.log(response);
    } catch(err){
        console.warn('Erro na API');
    }
}

Github.getRepositories("rocketseat/rocketseat.com.br");
