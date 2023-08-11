import { Produto } from "../models/Produto.js"

export const produtoIndex = async(req, res) => {
    //obtém todos os dados da model (tabela) produto
    const produtos = await Produto.findAll()
    // retorna (responde) com os dados obtidos no formato json
    res.status(200).json(produtos)
}