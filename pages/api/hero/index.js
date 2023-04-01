import dbconnect from "../../../db/dbconnect";
import Hero from "../../../models/superhero";

dbconnect()





export default async(req,res)=>{
    const {method} = req
    switch (method) {
        case 'GET':
            try {
                const heros =  await Hero.find({})
                res.status(200).json({success:true,hero:heros})
            } catch (error) {
                console.log(error)
                res.status(400).json({success:false})
            }
            
            break;
    
        case 'POSt':
            try {
                const hero=await Hero.create(req.body)
                res.status(200).json({success:true,hero:hero})
            } catch (error) {
                console.log("printing post")
                res.status(400).json({success:false})
            }
            
            break;
    
        default:
            console.log("printing default")
            res.status(400).json({success:false})
            break;
    }
}