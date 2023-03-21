function receivesAFunction (callbackFunc){
    callbackFunc()
}

function returnsANamedFunction(){
    return function func(){}
}

function returnsAnAnonymousFunction(){
    return ()=>{}
}