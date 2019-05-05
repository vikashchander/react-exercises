function choice(value){
    console.log(value);
    let ranInx = Math.floor(Math.random() * value.length);
    return value[ranInx];
};

export {choice};
