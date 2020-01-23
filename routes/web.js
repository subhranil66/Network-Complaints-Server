const webRouter=require('express').Router();

webRouter.get('/data', (request, response)=>
{
    console.log(request.body);
})


module.exports={
    webRouter
}