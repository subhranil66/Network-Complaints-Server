const androidRouter=require('express').Router();


androidRouter.post('/netinfo', (request, response)=>
{
    console.log(request.body);
})


module.exports={
    androidRouter
}