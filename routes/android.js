const androidRouter=require('express').Router();


androidRouter.post('/netinfo', (request, response)=>
{
    // console.log(request.body);
    let { address, latitude, logitude,sim_info }=request.body;
    address=JSON.parse(address);
    sim_info=JSON.parse(sim_info);
    console.log(address);
    console.log(sim_info);

})


module.exports={
    androidRouter
}