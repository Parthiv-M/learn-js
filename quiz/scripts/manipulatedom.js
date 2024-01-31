window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt, index) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createButtonNode(index, textNode) {
  const button = document.createElement("button")
  button.innerHTML = "Edit text";
  button.addEventListener("click", (e) => {
    changeCurrRowToInput(e, index, textNode)
  })
  return button;
}


function changeCurrRowToInput(e, index, textNode) {
  const cellToReplace = document.getElementById("col-" + index);
  cellToReplace.removeChild(textNode);
  const textField = document.createElement("input");
  textField.type = "text";
  textField.setAttribute("placeholder", "Enter Cell (0, " + (index + 1) + ")");
  cellToReplace.insertBefore(textField, e.target);
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    const textNode = createTxtNode("Cell (" + i + ", 0)", i);
    let col1 = createTDNode(textNode);
    col1.setAttribute("id", "col-" + i);
    col1.appendChild(createButtonNode(i, textNode));
    tableNode.appendChild(createTRNode([col1]));
  }
  document.getElementById("root").appendChild(tableNode);
}
