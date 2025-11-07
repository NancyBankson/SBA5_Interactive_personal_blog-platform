// Declarations
let title = document.getElementById("title-el");
let body = document.getElementById("body-el");
let saveButton = document.getElementById("button-el");
let container = document.getElementById("container-el");

let blogArray = [];
let blogId = 1;

// Event listeners
saveButton.addEventListener("click", function () {
    let blogObject = {};
    blogObject.Number = blogId;

    blogObject.Title = title.value;
    let blogTitle = document.createElement("h2");
    blogTitle.id = `titl${blogId}`;
    blogTitle.textContent = title.value;
    container.appendChild(blogTitle);

    blogObject.Body = body.value;
    let blogBody = document.createElement("p");
    blogBody.id = `body${blogId}`;
    blogBody.textContent = body.value;
    container.appendChild(blogBody);

    let blogButton = document.createElement("button");
    blogButton.id = `butt${blogId}`;
    blogButton.textContent = "Delete";
    container.appendChild(blogButton);
    
    blogArray.push(blogObject);
    blogId++;
    console.log(blogArray);
    title.value = "";
    body.value = "";
})