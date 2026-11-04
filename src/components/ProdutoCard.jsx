function ProdutoCard({ id, nome, preco, descricao, removerProduto }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-sm border border-gray-200 p-4">

      {/* Nome e botão remover */}
      <div className="flex items-center justify-between gap-3">

        <h2 className="text-lg font-bold text-gray-800 break-words">
          {nome}
        </h2>

        <button
          type="button"
          onClick={() => removerProduto(id)}
          className="text-red-600 text-sm font-semibold hover:text-red-800 transition shrink-0"
        >
          Remover
        </button>

      </div>

      <p className="text-sm text-gray-500 mt-2">
        {descricao}
      </p>

      <p className="text-green-600 font-bold text-lg mt-3">
        R$ {Number(preco).toFixed(2).replace('.', ',')}
      </p>

    </div>
  )
}

export default ProdutoCard