export default function handler(req, res) {
  const id = +req.query.id;

  res.status(200).json({
    id,
    nome: 'Mopa',
    email: '123deoliveira4123123123casdasd@mopadasilda.com'
  })
}