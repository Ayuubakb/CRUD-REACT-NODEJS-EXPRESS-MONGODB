const express=require('express');
const route=express.Router()
const User=require('../Models/User');
const session = require('express-session');

route.get('/', (req, res) =>{
    if (req.session.authentificate) {
        res.status(200).json({ flag: true,inf:req.session.authentificate });
    } else {
        res.status(401).json({ flag: false });
    }
});

route.post('/edit',async function(req,res){
    console.log('you are in',req.body)
    await User.updateOne({userName:req.session.authentificate.username},{pic:req.body.pic,userName:req.body.username,fn:req.body.firstName,ln:req.body.lastName,email:req.body.email})
    .then(
        (response)=>{
            if(response.modifiedCount !== 0){
                if(req.session.authentificate){
                    console.log('updated'); 
                    req.session.authentificate=req.body;
                    res.status(200).json({message:'Data Updated'})
                }else{
                    res.status(400).json({message:'Session Expired ,Login Again'})
                }
                
            }else{
                res.status(404).json({message:'No Data Found'})
            }
        })
    .catch(
        (err)=>{
            console.log('err')
            res.status(500).json({message:err})
        }
    )
})

route.delete('/delete',async(req,res)=>{
    if(req.session.authentificate){
        await User.findOne(
            {userName:req.session.authentificate.username},
            'password'
            ).then(
                async (result)=>{
                    if(result){
                        if(result.password === req.body.passwordOne){
                            await User.deleteOne({userName:req.session.authentificate.username})
                            .then(
                                ()=>{
                                    req.session.destroy((err)=>{
                                        err?
                                        res.status(500).json({message:err})
                                        :
                                        res.status(301).json({})
                                    })
                                }
                            ).catch(
                                ()=>{
                                    console.log("Unknown Error");
                                }
                            )
                        }else{
                            res.status(200).json({message:'Incorrect Password'})
                        }
                    }else{
                        res.status(404).json({message:'No Data Found'})
                    }
                }
            )
    }else{
        res.status(400).json('Session Expired, Login Again')
    }
})

module.exports = route;