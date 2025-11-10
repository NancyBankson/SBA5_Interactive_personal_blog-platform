// Declarations
const title = document.getElementById("title-el");
const body = document.getElementById("body-el");
const saveButton = document.getElementById("form-el");
const container = document.getElementById("container-el");
const titleError = document.getElementById("title-error-el");
const bodyError = document.getElementById("body-error-el");

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

            let editButton = document.createElement("button");
            editButton.id = `edit${blogId}`;
            editButton.setAttribute("class", "edit");
            editButton.textContent = "Edit";
            newBlogDiv.appendChild(editButton);

            let blogButton = document.createElement("button");
            blogButton.id = `butt${blogId}`;
            blogButton.setAttribute("class", "remove");
            blogButton.textContent = "Delete";
            newBlogDiv.appendChild(blogButton);

            blogArray = retrievedArray;
        }
    }
})

// Check validity of title
title.addEventListener("input", function (event) {
    if (title.validity.valueMissing) {
        title.setCustomValidity("Please enter a title for your blog entry");
    } else {
        title.setCustomValidity("");
    }
    titleError.textContent = title.validationMessage;
})

// Check validity of body
body.addEventListener("input", function (event) {
    if (body.validity.valueMissing) {
        body.setCustomValidity("Please enter a body for your blog entry");
    } else {
        body.setCustomValidity("");
    }
    bodyError.textContent = body.validationMessage;
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

    let editButton = document.createElement("button");
    editButton.id = `edit${blogId}`;
    editButton.setAttribute("class", "edit");
    editButton.textContent = "Edit";
    newBlogDiv.appendChild(editButton);

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
    if (event.target.classList.contains("edit")) {
        const blogToEdit = event.target.closest("div");
        let blogToEditId = event.target.closest("button").id;
        let itemId = parseInt(blogToEditId.slice(4));
        itemId--;
        let titleToEdit = blogArray[itemId].Title;
        let bodyToEdit = blogArray[itemId].Body;
        // blogArray.splice(itemId, 1);
        // localStorage.setItem("thearray", JSON.stringify(blogArray));
        blogToEdit.remove();
        let editDiv = document.createElement("div");
        editDiv.innerHTML =    
        `<form id="form-edit">
            <label>Blog title</label>
            <textarea id="title-edit" required>${titleToEdit}</textarea>
            <span class="error-message" id="title-edit-error"></span>
            <label>Blog body</label>
            <textarea id="body-edit" required>${bodyToEdit}</textarea>
            <span class="error-message" id="body-edit-error"></span>
            <button type="submit" id="button-edit">Save blog entry</button>
        </form>`;
        container.appendChild(editDiv);
        let saveEditButton = document.getElementById("form-edit");
        document.getElementById("title-edit").focus();
        saveEditButton.addEventListener("submit", function() {
            let blogObject = {};
            let newTitle = document.getElementById("title-edit");
            let newBody = document.getElementById("body-edit");
            blogObject.Title = newTitle.value;
            blogObject.Body = newBody.value;
            blogArray.push(blogObject);
            blogArray.splice(itemId, 1);
            localStorage.setItem("thearray", JSON.stringify(blogArray));
        })
        
    }
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