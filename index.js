// function Monday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
// }
// function Tuesday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
// }
// function Wednesday() {
//     console.log("Go for a five-mile run");
//     console.log("Go for a five-mile run");
// }
// function Thursday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
// }
// function Friday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
// }

// Friday();
// Thursday();
// Wednesday();

function runFiveMiles(){
    console.log("Go for a five-mile run");
}

// function swimFortyLaps(){
//     console.log("Swim 40 laps");
// }
// function liftWeights(){
//     console.log("Pump iron");
// }

// function Monday(){
//     runFiveMiles();
//     liftWeights();
// }
// Monday();

// function exerciseRoutine(postRunActivity){
//     runFiveMiles();
//     postRunActivity();
// }


function receivesAFunction(callback){
callback();
}

function returnsANamedFunction(){
    return function namedFunction(){
        console.log("this is a named function");       
    };
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("this is an anonymous function");
    };
}