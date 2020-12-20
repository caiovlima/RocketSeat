const mongoose = require('mongoose');
const Product = moongose.model('Product');

module.exports = {
    //basicamente busca todos
    async index(req, res){
        //mantém página 1 por default na url
        const { page = 1 } = req.query;
        //page = página atual, limit = quantidade de objetos retornados
        //{ posso colocar minha condição.. where etc aqui dentro }
        const products = await Product.paginate({ }, { page, limit: 10});

        return res.json(products);
    },

    //post
    async store(req, res){
        //req possui todo o corpo do objeto (id, desc etc..)
        //basta passar o req.body e depois retornar o objeto que foi criado
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async show(req, res){
        //req traz a infor, params.id pega quando passa o id como parametro
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async update(req, res){
        //show + store, ele busca pelo id, e atualizando com o req.body (depois da vírgula)
        //com o new true ele retorna atualizado o produto
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    async destroy(req, res){
        const product = await Product.findByIdAndRemove(req.params.id);

        return res.send();

    }
};