var express=require('express')
var router=express.Router()
const user =require('../Models/User')

router.post('/login',async function (req,res){
    const Email = req.body.email;
    await user.findOne(
        {email:Email},
        "userName fn ln password pic"
    ).then(
        (results)=>{
            if(results){
                if(results.password==req.body.password){
                    const objct={
                        username:results.userName,
                        firstName:results.fn,
                        lastName:results.ln,
                        pic:results.pic,
                        email:Email
                    }
                    req.session.authentificate=objct;
                    req.session.save()
                    res.status(201).json(req.session.authentificate)
                }else{
                    res.status(401).json({message:'Invalid Password'})
                };
            }else{
                res.status(404).json({message:'No User Found With This Email'})
            }
        },
        ()=>{
            res.status(500).json({message:'A Database Problem accured'})
        }
    )
})
router.post('/signup',async function(req,res){
    const userAdd=new user(req.body);
    await userAdd.save().then(
        ()=>{
            res.status(200).json({})
        },
        ()=>{
            res.status(500).json({message:'A Database Problem accured'})
        }
    );
})

router.delete('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        err?
        res.status(500).json({message:err})
        :
        res.status(301).json({})
    })
})
module.exports = router