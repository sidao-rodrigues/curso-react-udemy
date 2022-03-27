import { useEffect, useRef, useState } from 'react';
import QuestaoModel from '../model/questao'
import Questionario from '../components/Questionario';
import { useRouter } from 'next/router';

const BASE_URL = 'http://localhost:3000/api';

export default function Home() {

  const router = useRouter();

  const [idsDasQuestoes, setidsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>();
  const [respostasCertas, setRespostasCertas] = useState<number>(0);

  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    setidsDasQuestoes(idsDasQuestoes);
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao);
  }

  useEffect(() => {
    carregarIdsDasQuestoes();
  }, []);

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]);
  }, [idsDasQuestoes]);

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida);
    const acertou = questaoRespondida.acertou;
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
  }

  function idProximaPergunta() {
    const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
    return idsDasQuestoes[proximoIndice];
  }

  function irParaProximoPasso() {
    const proximoId = idProximaPergunta();
    proximoId ? irParaProximaQuestao(proximoId) : finalizar();
  }

  function irParaProximaQuestao(id: number) {
    carregarQuestao(id);
  }

  function finalizar() {
    router.push({
      pathname: '/resultado',
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas
      }
    });
  }

  return (questao ?
      <Questionario
        questao={questao}
        ultimaPergunta={idProximaPergunta() === undefined}
        questaoRespondida={questaoRespondida}
        irParaProximoPasso={irParaProximoPasso}
      /> : false
  )
}
