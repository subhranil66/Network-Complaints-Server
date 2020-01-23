const express=require('express');
const logger=require('morgan');

const { androidRouter }=require('./routes/android');
const { webRouter }=require('./routes/web');


const app=express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use('/android', androidRouter);
app.use('/web', webRouter);


app.listen(3000, function()
{
    console.log('Running on 3000');
})