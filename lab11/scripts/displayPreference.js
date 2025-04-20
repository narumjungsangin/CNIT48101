document.getElementById("submit").addEventListener('click', (event) => {
    event.preventDefault();
  
    const formData = new FormData(document.getElementById("survey"));
  
    const displayDiv = document.createElement("div");
    displayDiv.setAttribute("id", "result-display");
  
    const choices = {
      like: [],
      neutral: [],
      dislike: []
    };
  
    for (const [key, value] of formData.entries()) {
      choices[value].push(key);
    }
  
    for (const category in choices) {
      const resultPara = document.createElement("p");
      resultPara.innerText = `${category.toUpperCase()}: ${choices[category].join(", ")}`;
      displayDiv.appendChild(resultPara);
    }
  
    const oldResult = document.getElementById("result-display");
    if (oldResult) {
      oldResult.remove();
    }
  
    document.getElementById("submit").after(displayDiv);
  });
  