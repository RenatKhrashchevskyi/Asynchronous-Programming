//resize event

function resize() {
    let element = document.getElementById('display');
    element.innerHTML = element.innerHTML + ' that tickles!';
}

window.onresize = resize;

let addOne = function (x) {
    return x + 1;
};
let six = addOne(5);
console.log(six);

