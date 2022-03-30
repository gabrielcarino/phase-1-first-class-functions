function Spy() {
    return "I've been summoned";
}
function receivesAFunction(Spy) {
    return Spy();
}
function returnsANamedFunction() {
    return function namedFunction() {
        console.log("I've been returned")
    };
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log("I'm anonymous");
    };
}