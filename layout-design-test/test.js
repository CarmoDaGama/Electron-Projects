function add () {
    let go ="came";
    let ha ="Gama";
    return {go, ha}
}

function print(){
    let {go, ha} = add();
    console.log(`${go} and ${ha}`);
}

print();