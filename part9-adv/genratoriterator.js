function* numberGenrator(){
    yield 1;
    yield 2;
    yield 3;
}
let gen = numberGenrator();
console.log(gen);