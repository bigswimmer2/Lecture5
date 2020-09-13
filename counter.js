let counter = 0;

function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;

    if (counter % 10 === 0){
        alert(`Count is now ${counter}`)
    }
}
    //lets the whole content load before using
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').onclick = count;
});