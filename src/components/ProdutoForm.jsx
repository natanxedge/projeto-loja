import { useState } from 'react'

function ProdutoForm({ adicionarProduto }) {

  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [descricao, setDescricao] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    adicionarProduto({
      id: crypto.randomUUID(),
      nome,
      preco,
      descricao
    })

    setNome('')
    setPreco('')
    setDescricao('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white p-4 rounded-xl shadow-sm border border-gray-200 space-y-4"
    >

      <h2 className="text-xl font-bold text-gray-800">
        Cadastrar produto
      </h2>

      <input
        type="text"
        placeholder="Nome do produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
        className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        min="0.01"
        step="0.01"
        required
        className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        placeholder="Descrição do produto"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
        className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
      >
        Adicionar produto
      </button>

    </form>
  )
}

export default ProdutoForm