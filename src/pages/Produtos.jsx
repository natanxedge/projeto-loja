import { useState, useEffect } from 'react'
import ProdutoCard from '../components/ProdutoCard'
import ProdutoForm from '../components/ProdutoForm'

function Produtos() {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProdutos([
        {
          id: 1,
          nome: 'Notebook',
          preco: 3500,
          descricao: 'Notebook para trabalho e estudos.'
        },
        {
          id: 2,
          nome: 'Smartphone',
          preco: 1800,
          descricao: 'Smartphone com excelente desempenho.'
        },
        {
          id: 3,
          nome: 'Headset',
          preco: 250,
          descricao: 'Headset confortável para jogos.'
        }
      ])

      setCarregando(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Adicionar produto
  function adicionarProduto(novoProduto) {
    setProdutos((produtosAtuais) => [
      ...produtosAtuais,
      novoProduto
    ])
  }

  // Remover produto
  function removerProduto(id) {
    setProdutos((produtosAtuais) =>
      produtosAtuais.filter((produto) => produto.id !== id)
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Menu de navegação */}
      <nav className="w-full bg-gray-900 text-white p-5 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">
            Minha Loja
          </h1>
        </div>
      </nav>

      <main className="w-full p-6">

        {/* Cadastro de produtos */}
        <section className="flex justify-center mb-10">
          <div className="w-full max-w-sm">
            <ProdutoForm adicionarProduto={adicionarProduto} />
          </div>
        </section>

        {/* Produtos disponíveis */}
        <section className="max-w-6xl mx-auto flex flex-col items-center">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Produtos disponíveis
          </h2>

          {carregando ? (
            <p className="text-gray-500 text-lg">
              Carregando produtos...
            </p>
          ) : (
            <div className="flex flex-col items-center gap-4 w-full">

              {produtos.map((produto) => (
                <ProdutoCard
                  key={produto.id}
                  id={produto.id}
                  nome={produto.nome}
                  preco={produto.preco}
                  descricao={produto.descricao}
                  removerProduto={removerProduto}
                />
              ))}

              {produtos.length === 0 && (
                <p className="text-gray-500">
                  Nenhum produto cadastrado.
                </p>
              )}

            </div>
          )}

        </section>

      </main>
    </div>
  )
}

export default Produtos