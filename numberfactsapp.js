let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numberInput = document.querySelector('#numberInput')

numberInput.addEventListener('input', getAjax);
    
function getAjax(e) {
    let result = e.target.value;
    let yourNumber = document.querySelector('#yourNumber');
    let getNumber = numberInput.value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/'+getNumber);
    
    xhr.onload = function() {
        if (this.status == 200) {
            if (result !== "") {
                console.log(result);
                fact.style.display = 'block';
                yourNumber.innerHTML = result;
                factText.innerHTML = this.responseText;
            } 
            else {
                fact.style.display = 'none';
            }

        }
    }
    xhr.send();
}