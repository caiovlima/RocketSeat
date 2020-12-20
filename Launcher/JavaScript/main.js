
// //promises
// var minhaPromise = function(){
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/caiovlima');
//         xhr.send(null);

//         xhr.onreadystatechange = function(){
//             if(xhr.readyState === 4){
//                 if(xhr.status === 200){
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     reject('ERRO NA REQUISIÇÃO');
//                 }
//             }
//         }

//     });
// }

//utilizando axios
//1° pegar script cdn
//2° utilizar axios.nome do método e passar a url
axios.get('https://api.github.com/users/caiovlima')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });


