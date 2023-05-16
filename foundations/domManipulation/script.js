const container = document.querySelector('#container');

const content = document.createElement('div');
container.appendChild(content);

// Linka o content no container:

const para = document.createElement('p');
para.textContent = "Hey I'm red"
para.style.cssText = 'color: red;';
content.appendChild(para);

const h3 = document.createElement('h3');
h3.style.cssText = 'color: blue;';
h3.textContent = "I'm a blue h3!";
content.appendChild(h3);

// 3 - create a div with a black border and pink background color, with the elements:
    // h1 <- "I'm in a div"
    // p <- "ME TOO"
    // append these elements on the div BEFORE appending the div to the container.

const anotherDiv = document.createElement('div');

const anotherH1 = document.createElement('h1');
anotherDiv.style.cssText = 'border: 2px solid black; background-color: pink;';
anotherH1.textContent = "I'm in a DIV!";
const anotherPara = document.createElement('p');
anotherPara.textContent = 'ME TOO'


anotherDiv.appendChild(anotherH1);
anotherDiv.appendChild(anotherPara);
container.appendChild(anotherDiv);

// callback function;
const btn = document.querySelector('#btn3');
btn.addEventListener('click', () => {
    alert('oi');
});