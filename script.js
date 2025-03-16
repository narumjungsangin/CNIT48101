const example = document.getElementById('example');
const output = document.getElementById('output');

// textContent button
document.getElementById('textContentBtn').onclick = function() {
  output.textContent = example.textContent;
};

// innerText button
document.getElementById('innerTextBtn').onclick = function() {
  output.textContent = example.innerText;
};

// innerHTML button
document.getElementById('innerHTMLBtn').onclick = function() {
  output.textContent = example.innerHTML;
};