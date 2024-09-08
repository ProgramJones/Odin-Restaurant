function contactFactory() {
  // Select Elements
  const content = document.querySelector("#content");

  function createPrompt() {
    // Create Elements
    const contactH1 = document.createElement("h1");

    contactH1.textContent = "Send a Message";
    contactH1.className = "contactH1";

    content.appendChild(contactH1);
  }

  function createForm() {
    // Create Elements
    const form = document.createElement("form");
    const ul = document.createElement("ul");
    const button = document.createElement("button");

    // Edit Elements
    form.setAttribute("action", "");
    button.setAttribute("type", "submit");
    button.textContent = "Submit";

    function appendListItem(ul, forNameID, labelText, inputType = "textarea") {
      const li = document.createElement("li");
      const label = document.createElement("label");

      label.setAttribute("for", forNameID);
      label.textContent = labelText;

      li.appendChild(label);

      if ((inputType = "textarea")) {
        const textarea = document.createElement("textarea");
        textarea.setAttribute("name", forNameID);
        textarea.setAttribute("id", forNameID);
        li.appendChild(textarea);
      } else {
        const input = document.createElement("input");
        input.setAttribute("type", inputType);
        input.setAttribute("name", forNameID);
        input.setAttribute("id", forNameID);
        li.appendChild(input);
      }

      ul.appendChild(li);
    }

    appendListItem(ul, "senderName", "Name", "text");
    appendListItem(ul, "senderEmail", "Email", "email");
    appendListItem(ul, "senderMessage", "Message");
    form.appendChild(ul);

    form.appendChild(button);
    content.appendChild(form);
  }

  function render() {
    createPrompt();
    createForm();
  }

  return { render };
}

const contact = contactFactory();
export { contact };
