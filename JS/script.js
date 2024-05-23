var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
var submitButton = document.getElementById("submit");
var table = document.getElementById("tableBody");
var deleteBtn = document.getElementById("delete");

var tableContent = [];
function submit() {
  var todo = {
    name: siteName.value,
    site: siteURL.value,
  };
  tableContent?.push(todo);

  var todoRow = ``;
  for (var i = 0; i < tableContent.length; i++) {
    todoRow += `
    <tr>
        <td class="fw-bold p-3">${tableContent[i].name}</td> 
        <td class="fw-bold p-3">${tableContent[i].site}</td> 
        <td class="fw-bold p-3"> <button class="btn btn-success" id="edit" onclick="edit(${i})">Edit</button</td> 
        <td class="fw-bold p-3">
        <a class="text-info text-decoration-none" href=${tableContent[i].site} target="_blank">View</a>
        </td>
       <td class="fw-bold p-3"><button  class="btn btn-danger"  id="delete" onclick="deletefn(${i})">Delete</button></td>
    </tr>
    `;
  }

  table.innerHTML = todoRow;
}

submitButton.addEventListener("click", submit);

function deletefn(i) {
  tableContent?.splice(i, 1);
  var todoRow = ``;
  for (var i = 0; i < tableContent.length; i++) {
    todoRow += `
      <tr>
          <td class="fw-bold p-3">${tableContent[i].name}</td> 
          <td class="fw-bold p-3">${tableContent[i].site}</td> 
          <td class="fw-bold p-3"> <button class="btn btn-success" id="edit" onclick="edit(${i})">Edit</button></td> 
          <td class="fw-bold p-3">
          <a class="text-info text-decoration-none" href=${tableContent[i].site} target="_blank">View</a></td>
         <td class="fw-bold p-3"><button class="btn btn-danger" id="delete" onclick="deletefn(${i})">Delete</button></td>
      </tr>
      `;
  }
  table.innerHTML = todoRow;
}

function edit(i) {
  tableContent[i] ={
    name:prompt("Edit Name"),
    site:prompt("Edit Site"),
  };
  var todoRow = ``;
  for (var i = 0; i < tableContent.length; i++) {
    todoRow += `
      <tr>
          <td>${tableContent[i].name}</td> 
          <td>${tableContent[i].site}</td> 
          <td class="fw-bold p-3"> <button class="btn btn-success" id="edit" onclick="edit(${i})">Edit</button></td> 
          <td class="fw-bold p-3">
          <a class="text-info text-decoration-none"href=${tableContent[i].site} target="_blank">View</a></td>
          <td><button id="delete"class="btn btn-danger" onclick="deletefn(${i})">Delete</button></td>
      </tr>
      `;
  }
  table.innerHTML = todoRow;
}
