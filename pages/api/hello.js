
export default async function handler (req,res){
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
