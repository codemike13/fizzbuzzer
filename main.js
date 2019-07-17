const submitButton = document.querySelector(".submit");
const userInput = document.querySelector("#input");
submitButton.onclick = fizzBuzz;

function fizzBuzz(event) {
  event.preventDefault();
  clearList();
  let num = parseInt(userInput.value);
  let done = false;

  while (!done) {
    for (let i = 1; i < num + 1; i++) {
      let fizbuz = "";
      const noFiz = "";
      if (i % 3 === 0) {
        fizbuz = "fizz";
      }
      if (i % 5 === 0) {
        fizbuz = fizbuz + "buzz";
      }
      if (fizbuz.length > 0) {
        if (i % 2 === 0) {
          printValueStrong(fizbuz);
        } else {
          printValue(fizbuz);
        }
        fizbuz = noFiz;
      } else {
        if (i % 2 === 0) {
          printValueStrong(i);
        } else {
          printValue(i);
        }
      }
      if (i === num) {
        done = true;
      }
    }
  }
  if (done) {
    document.getElementById("input").value = "";
  }
}

function printValue(value) {
  const listItem = document.createElement("li");
  // Put its value as its contents.
  listItem.innerText = value;
  listItem.style.color = "blue";
  listItem.style.fontSize = "2em";
  listItem.style.marginTop = "5px";
  const list = document.querySelector(".list");
  list.appendChild(listItem);
}

function printValueStrong(value) {
  // Create a list item.
  const listItem = document.createElement("li");
  // Put the uppercased value as its contents and make it bold.
  listItem.innerText = value.toString().toUpperCase();
  listItem.style.fontWeight = "bold";

  // Stretch goal TODO: copy and paste the styling code from `printValue` here.
  // Otherwise we'll only get the styling on half the items!
  listItem.style.color = "blue";
  listItem.style.fontSize = "2em";
  listItem.style.marginTop = "5px";
  // Find the unordered list we've made into a results console.
  const list = document.querySelector(".list");
  // Append our list item to it.
  list.appendChild(listItem);
}

function clearList() {
  // Find the unordered list we've made into a results console.
  const list = document.querySelector(".list");

  // Remove its list items.
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
