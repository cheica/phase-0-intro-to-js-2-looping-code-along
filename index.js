// Code your solutions in this file
const newMssg = [];

function writeCards(names,event){
    for (let i= 0; i < names.length; i++) {
       newMssg.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);

       debugger;
       
       
    }

    return newMssg;
}


//countDown()
function countDown(){
let countDown = 10; 
    while (countDown >= 0){
        console.log(countDown--);
    }

    return countDown;
}