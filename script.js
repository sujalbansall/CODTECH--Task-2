let blogs = []; // Array to store blogs

function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.section').forEach((el) => {
        el.style.display = 'none';
    });
    document.getElementById('contact-info').style.display = 'none'; // Hide email

    // Show the selected section
    if (section === 'home') {
        document.getElementById('home').style.display = 'block';
    } else if (section === 'about') {
        document.getElementById('about').style.display = 'block';
    } else if (section === 'contact') {
        document.getElementById('contact').style.display = 'block';
        document.getElementById('contact-info').style.display = 'block'; // Show email
    } else if (section === 'myBlogs') {
        displayBlogs(); // Show stored blogs
        document.getElementById('myBlogs').style.display = 'block';
    }
}

document.getElementById("blogForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the title, content, and author from the form
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
    const author = document.getElementById("author").value.trim();
    const date = new Date().toLocaleDateString(); // Get the current date

    // Check for empty fields
    if (title && content && author) {
        // Create a new blog object
        const blog = { title, content, author, date };
        blogs.push(blog); // Store the blog in the array

        // Clear the form
        document.getElementById("blogForm").reset();
        
        // Optionally show the blog immediately after submission
        displayBlogs();

        alert("Blog submitted successfully!"); // Notify user of successful submission
    } else {
        alert("Please fill out all fields."); // Alert if any field is empty
    }
});

// Function to display blogs in the My Blogs section
function displayBlogs() {
    const blogsContainer = document.getElementById("blogs-container");
    blogsContainer.innerHTML = ''; // Clear existing blogs

    blogs.forEach(blog => {
        const blogPost = document.createElement("div");
        blogPost.className = "blog-post"; // Class for styling

        blogPost.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.content}</p>
            <p><em>Written on ${blog.date} by ~${blog.author}</em></p>
        `;

        blogsContainer.appendChild(blogPost);
    });
}

// Show home section by default
showSection('home');
