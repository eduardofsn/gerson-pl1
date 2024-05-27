import { Produto } from "./produto";

export class ProdutoService {
    private produtos: Produto[] = [];

    public criarProduto(produto: Produto): void {
        this.produtos.push(produto);
    }

    public atualizarProduto(produto: Produto): void {
        const index = this.produtos.findIndex((p) => p.id === produto.id);
        if(index !== -1){
            this.produtos[index] = produto;
        }
    }

    public excluirProduto(id: number): void{
        this.produtos = this.produtos.filter((p) => p.id !== id);
    }    

    public obterProduto(id: number): Produto | undefined {
        return this.produtos.find((p) => p.id === id);
    }

    public obterProdutos(): Produto[]{
        return this.produtos;
    }
}