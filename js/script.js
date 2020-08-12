function f1() {
    let div = document.querySelector('#one');
    div.innerHTML = div.innerHTML + ' Hello';
}
f1();

let c = document.querySelector('#two');
function f2() {
    c.innerHTML += ' Hello';

}
f2();
c = document.querySelector('#three');
f2();

function f4(a) {
    let d = document.querySelector('#' + a);
    d.innerHTML += ' Eee';
}
f4('one');
f4('two');
function summ(a,b=3){
    return a*b;
}
console.log( summ(3));