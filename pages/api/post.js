export default async function handler (req,res){
    res.statusCode = 200
    const data=req.body;
    res.json(data )
  }