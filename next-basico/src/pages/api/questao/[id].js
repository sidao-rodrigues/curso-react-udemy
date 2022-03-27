export default function questao(req, res) {
  if (req.method === 'GET') {
    const id = req.query.id;
    res.status(200).json({
      id,
      enunciado: 'Cor prefereida',
      respostas: [
        'Branca', 'Vermelha', 'Amarela', 'Verde'
      ]
    })
  } else {
    res.status(405).send();
  }
}