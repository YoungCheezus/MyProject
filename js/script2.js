function MyClick() {
    console.log('click');
  //  console.log(event.target);
    console.log(this);
}
// document.querySelector('#one').onclick = MyClick;

document.onclick = function (event) {
    if (event.target.id == 'one') {
        console.log ('нажали на one');
    } else if (event.target.id == 'two'){
        console.log('нажили на two');
        } else { 
        console.log('Нажили на three');
    }
}
