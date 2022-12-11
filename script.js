// function pageLoader () {
//     alert ('I`m alive!');
// }

// window.onload = pageLoader;


window.onload = function () {
    let images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = reblur;
    }
};


function showAnswer (eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = name + '.jpg';
    image.src = name;


}

function reblur(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = name + 'blur.jpg';
    image.src = name;

}



