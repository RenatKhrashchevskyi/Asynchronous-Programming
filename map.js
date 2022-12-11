window.onload = init;
function init() {
    let map = document.getElementById('map');
    map.onmousemove = showCoords;
}

function showCoords(eventObj) {
    let map = document.getElementById('coords');
        let x = eventObj.clientX;
        let y = eventObj.clientY;
        map.innerHTML = 'Map coordinates: ' + x + ', ' + y;
    
}

