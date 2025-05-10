import template from "../blog/blog.html";
export default function initBlog() {
    const blogElement = document.getElementById("blog");
    if (!blogElement) return;
    blogElement.innerHTML = template;
};