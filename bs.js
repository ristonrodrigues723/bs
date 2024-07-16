const array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const container = document.getElementById('array-container');

function createBoxes() {
    array.forEach(num => {
        const box = document.createElement('div');
        box.className = 'box';
        box.textContent = num;
        container.appendChild(box);
    });
}

createBoxes();

async function binarySearch(target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const boxes = document.querySelectorAll('.box');
        
        boxes.forEach(box => box.classList.remove('selected', 'found', 'not-found'));
        boxes[mid].classList.add('selected');

   

    document.querySelectorAll('.box').forEach(box => box.classList.add('not-found'));
    return -1;
}

function startSearch() {
    const target = parseInt(document.getElementById('search-input').value);
    binarySearch(target);
}