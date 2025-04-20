const formDefinition = {
    title: "User Registration",
    fields: [
      {
        label: "first name",
        type: "text",
        name: "firstName",
        required: true
      },
      {
        label: "last name",
        type: "text",
        name: "lastName",
        required: true
      },
      {
        label: "email",
        type: "email",
        name: "email",
        required: true
      },
      {
        label: "password",
        type: "password",
        name: "password",
        required: true
      },
      {
        label: "age",
        type: "number",
        name: "age",
        required: false,
        min: 0
      }
    ],
    submitText: "Register"
  };
  
  //task2
  function createFormFromJson(json) {
    const form = document.createElement("form");
  
    json.fields.forEach(field => {
      const label = document.createElement("label");
      label.textContent = field.label;
      label.setAttribute("for", field.name);
  
      const input = document.createElement("input");
      input.type = field.type;
      input.name = field.name;
      input.id = field.name;
      if (field.required) input.required = true;
      if (field.type === "number" && field.min !== undefined) {
        input.min = field.min;
      }
  
      const errorSpan = document.createElement("span");
      errorSpan.className = "error";
      errorSpan.id = `error-${field.name}`;
  
      form.appendChild(label);
      form.appendChild(input);
      form.appendChild(errorSpan);
    });
  
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = json.submitText;
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(submitBtn);
  
    document.getElementById("form-container").appendChild(form);
  
    return form;
  }
  
  //task4
  function validateForm(json) {
    let checkValid = true;
  
    json.fields.forEach(field => {
      const input = document.getElementById(field.name);
      const errorSpan = document.getElementById(`error-${field.name}`);
      errorSpan.textContent = ""; 
  
      if (field.required && !input.value.trim()) {
        errorSpan.textContent = `${field.label} is required`;
        checkValid = false;
      }
  
      if (field.type == "email" && input.value) {
        var re = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/;
        if (!re.test(input.value)) {
          errorSpan.textContent = `Please enter a valid email.`;
          checkValid = false;
        }
      }
  
      if (field.type == "number" && input.value) {
        const value = parseFloat(input.value);
        if (field.min != undefined && value < field.min) {
          errorSpan.textContent = `Value must be at least  ${field.min}.`;
          checkValid = false;
        }
      }
    });
  
    return checkValid; //true
  }
  
  //task5
  function displayResults(data) {
    const container = document.getElementById("submitted-data");
    container.innerHTML = ""; // clear previous
  
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    th1.textContent = "Field";
    th2.textContent = "Value";
    headerRow.appendChild(th1);
    headerRow.appendChild(th2);
    table.appendChild(headerRow);
  
    for (let key in data) {
      const row = document.createElement("tr");
      const cell1 = document.createElement("td");
      const cell2 = document.createElement("td");
  
      cell1.textContent = key;
      cell2.textContent = data[key];
  
      row.appendChild(cell1);
      row.appendChild(cell2);
      table.appendChild(row);
    }
  
    container.appendChild(table);
  }
  
  // Task 3: Form submission event
  const form = createFormFromJson(formDefinition);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if (validateForm(formDefinition)) {
      const formData = {};
      formDefinition.fields.forEach(field => {
        formData[field.label] = document.getElementById(field.name).value;
      });
      displayResults(formData);
      form.reset();
    }

    // form.setAtteibute(“novalidate”, “true”);
  });
  