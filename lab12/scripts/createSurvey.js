const choices = ["like", "neutral", "dislike"];

const preferenceSurveyDiv = document.getElementById("preference-survey");

// Include your answer to Q1 here
const fetchData = async function(filepath) { // fetches and parses a JSON file
    try {
      const response = await fetch(filepath); // asynchronously fetch the file
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json(); // parse the result as JSON
    } catch (error) {
      console.error('Error reading the JSON file:', error);
      throw error;
    }
  }
  

  const promise = fetchData("data/keywords.json");

  promise.then(keywords => {
    for (const kw of keywords.data) {
  
      const myQuestion = document.createElement("div");
  
      const myKeyword = document.createElement("p");
      myKeyword.innerText = kw.keyword;
      myKeyword.setAttribute("id", "video-id-" + kw.id);
      myKeyword.setAttribute("class", "keywords");
      myQuestion.appendChild(myKeyword);
  
      const myDescription = document.createElement("p");
      myDescription.innerText = kw.explanation;
      myDescription.setAttribute("class", "description");
      myQuestion.appendChild(myDescription);
  
      const myChoiceElement = createChoiceElements(kw.id);
      myQuestion.appendChild(myChoiceElement);
  
      preferenceSurveyDiv.appendChild(myQuestion);

    }
  });
  

  function createChoiceElements(keywordId) {
    const choices = ["like", "neutral", "dislike"];
    const container = document.createElement("div");
  
    choices.forEach((choice, index) => {
      const input = document.createElement("input");
      input.value = choice;
      input.id = `preference-${keywordId}-${index}`;
      input.name = `preference-${keywordId}`;
      input.type = "radio";
      input.required = true;
  
      const label = document.createElement("label");
      label.setAttribute("for", input.id);
      label.innerText = choice;
  
      container.appendChild(input);
      container.appendChild(label);
    });
  
    return container;
  }
  