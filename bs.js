let array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const container = document.getElementById('array-container');
const messageBox = document.getElementById('message-box');

function createBoxes() {
    container.innerHTML = '';
    array.sort((a, b) => a - b);
    array.forEach(num => {
        const box = document.createElement('div');
        box.className = 'box';
        box.textContent = num;
        container.appendChild(box);
    });
}

function updateMessage(message) {
    messageBox.textContent = message;
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

        await new Promise(resolve => setTimeout(resolve, 1000));

        if (array[mid] === target) {
            boxes[mid].classList.add('found');
            updateMessage(`Element ${target} found at index ${mid}`);
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    document.querySelectorAll('.box').forEach(box => box.classList.add('not-found'));
    updateMessage(`Element ${target} not found in the array`);
    return -1;
}

function startSearch() {
    const target = parseInt(document.getElementById('search-input').value);
    binarySearch(target);
}

function addNumber() {
    const num = parseInt(document.getElementById('add-input').value);
    if (!isNaN(num) && !array.includes(num)) {
        array.push(num);
        createBoxes();
        updateMessage(`Added ${num} to the array`);
    }
    document.getElementById('add-input').value = '';
}

function removeNumber() {
    const num = parseInt(document.getElementById('remove-input').value);
    const index = array.indexOf(num);
    if (index > -1) {
        array.splice(index, 1);
        createBoxes();
        updateMessage(`Removed ${num} from the array`);
    }
    document.getElementById('remove-input').value = '';
}

function clearArray() {
    array = [];
    createBoxes();
    updateMessage('Array cleared');
}

function generateRandomArray() {
    const size = Math.floor(Math.random() * 10) + 5; // Random size between 5 and 14
    array = Array.from({length: size}, () => Math.floor(Math.random() * 100) + 1);
    createBoxes();
    updateMessage(`Generated new random array with ${size} elements`);
}