function choice(dice){
    let ranInx = Math.floor(Math.random() * dice.length);
     return dice[ranInx];
}

export {choice};