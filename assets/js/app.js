const hexNumber = ['0', '1', '2', '3', '4', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const hexBtn = document.querySelector(".hexBtn");
const bdyBcg = document.querySelector("body");
const hex = document.querySelector(".hex")

hexBtn.addEventListener('click', function name(params) {
    let hexCol = '#';

    for (i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexNumber.length);
        hexCol += hexNumber[random];
        // console.log(hexCol);
    }
    bdyBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
})