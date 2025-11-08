// Declarations
let title = document.getElementById("title-el");
let body = document.getElementById("body-el");
let saveButton = document.getElementById("form-el");
let container = document.getElementById("container-el");

let blogArray = [];
let blogId = 1;

window.addEventListener('load', () => {
    let retrievedArray = [];
    const retrievedString = localStorage.getItem("thearray");
    retrievedArray = JSON.parse(retrievedString);
    if (retrievedArray) {
        for (let i = 0; i < retrievedArray.length; i++) {
            // let blogObject = {};
            blogId = 1;
            // blogObject.Number = blogId;

            let newBlogDiv = document.createElement("div");
            newBlogDiv.setAttribute("class", "blog-container");
            container.appendChild(newBlogDiv);

            // blogObject.Title = retrievedArray[i].Title;
            let blogTitle = document.createElement("h2");
            blogTitle.id = `titl${blogId}`;
            blogTitle.textContent = retrievedArray[i].Title;
            newBlogDiv.appendChild(blogTitle);

            // blogObject.Body = retrievedArray[i].Body;
            let blogBody = document.createElement("p");
            blogBody.id = `body${blogId}`;
            blogBody.textContent = retrievedArray[i].Body;
            newBlogDiv.appendChild(blogBody);

            let blogButton = document.createElement("button");
            blogButton.id = `butt${blogId}`;
            blogButton.setAttribute("class", "remove");
            blogButton.textContent = "Delete";
            newBlogDiv.appendChild(blogButton);

            blogArray = retrievedArray;
        }
    }
})

// Event listeners
saveButton.addEventListener("submit", function (event) {
    event.preventDefault();
    let blogObject = {};
    // blogObject.Number = blogId;

    let newBlogDiv = document.createElement("div");
    newBlogDiv.setAttribute("class", "blog-container");
    container.appendChild(newBlogDiv);

    blogObject.Title = title.value;
    let blogTitle = document.createElement("h2");
    blogTitle.id = `titl${blogId}`;
    blogTitle.textContent = title.value;
    newBlogDiv.appendChild(blogTitle);

    blogObject.Body = body.value;
    let blogBody = document.createElement("p");
    blogBody.id = `body${blogId}`;
    blogBody.textContent = body.value;
    newBlogDiv.appendChild(blogBody);

    let blogButton = document.createElement("button");
    blogButton.id = `butt${blogId}`;
    blogButton.setAttribute("class", "remove");
    blogButton.textContent = "Delete";
    newBlogDiv.appendChild(blogButton);
    blogArray.push(blogObject);
    localStorage.setItem("thearray", JSON.stringify(blogArray));
    blogId++;
    title.value = "";
    body.value = "";
})

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
        const blogToRemove = event.target.closest("div");
        let blogToRemoveId = event.target.closest("button").id;
        let itemId = parseInt(blogToRemoveId.slice(4));
        itemId--;
        blogArray.splice(itemId, 1);
        localStorage.setItem("thearray", JSON.stringify(blogArray));
        blogToRemove.remove();
    } 
})