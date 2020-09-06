var tossCoin = function(){
    var random = Math.random();
    console.log(random);

    // if(random > 0.5){
    //     console.log('Sap');
    // .....
    // }
    // else {
    //     console.log('Ngua');
    // }
    var result = (random > 0.5) ? 'Sap' : 'Ngua';
    // console.log(result);
    
}

tossCoin();