function addItem() {
    let textElement = document.getElementById('newItemText').value;
    let valueElement = document.getElementById('newItemValue').value;

    let optionElement = document.createElement('option');
    optionElement.textContent = textElement;
    optionElement.setAttribute('value', valueElement);
    document.getElementById('menu').appendChild(optionElement);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
    
}