import { useEffect, useState } from 'react';
import ColecaoCliente from '../backend/db/ColecaoCliente';
import Cliente from '../core/Cliente';
import ClienteRepositorio from '../core/ClienteRepositorio';
import useTableaOuForm from './useTableaOuForm';

export default function useClientes () {

  const repo: ClienteRepositorio = new ColecaoCliente();

  const { formularioVisivel, tabelaVisivel, exibirTabela, exibirForm } = useTableaOuForm();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);


  useEffect(() => {
    obterTodos();
  }, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes);
      exibirTabela();
    });
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirForm();
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    exibirForm();
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }

  return {
    cliente,
    clientes,
    tabelaVisivel,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    exibirTabela
  }
}