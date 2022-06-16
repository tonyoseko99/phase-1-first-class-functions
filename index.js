function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    let fn = function(){}
        return fn;
}

function returnsAnAnonymousFunction(){
    return function(){}
}