function buttonChangeColor(buttonId) {
    const btn = document.getElementById(buttonId);

    btn.addEventListener('click', function onClick() {
        btn.style.backgroundColor = 'gray';

    });
}
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}