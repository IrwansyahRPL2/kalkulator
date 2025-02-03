function append(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('%', '/100'));
    } catch {
        display.value = 'Error';
    }
}