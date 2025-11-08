// Declarations
let title = document.getElementById("title-el");
let body = document.getElementById("body-el");
let saveButton = document.getElementById("form-el");
let container = document.getElementById("container-el");

let blogArray = [];
console.log(Array.isArray(blogArray));
let blogId = 1;

window.addEventListener('load', () => {
    let retrievedArray = [];
    const retrievedString = localStorage.getItem("thearray");
    retrievedArray = JSON.parse(retrievedString);
    console.log(retrievedArray);
    if (retrievedArray) {
    for (let i = 0; i < retrievedArray.length; i++) {
        // let blogObject = {};
        blogId = 1;
        // blogObject.Number = blogId;

        // blogObject.Title = retrievedArray[i].Title;
        let blogTitle = document.createElement("h2");
        blogTitle.id = `titl${blogId}`;
        blogTitle.textContent = retrievedArray[i].Title;
        container.appendChild(blogTitle);

        // blogObject.Body = retrievedArray[i].Body;
        let blogBody = document.createElement("p");
        blogBody.id = `body${blogId}`;
        blogBody.textContent = retrievedArray[i].Body;
        container.appendChild(blogBody);

        let blogButton = document.createElement("button");
        blogButton.id = `butt${blogId}`;
        blogButton.textContent = "Delete";
        container.appendChild(blogButton);

        blogArray = retrievedArray;
    }}
    console.log("i made it here");
})

// Event listeners
saveButton.addEventListener("submit", function(event) {
    console.log(blogArray);
    event.preventDefault();
    
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
    console.log(blogArray);
    blogArray.push(blogObject);
    localStorage.setItem("thearray", JSON.stringify(blogArray));
    blogId++;
    console.log(blogArray);
    title.value = "";
    body.value = "";
})