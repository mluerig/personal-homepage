document.addEventListener("DOMContentLoaded", function() {
  const tagList = document.getElementById("tag-list");
  const postList = document.getElementById("post-list");
  const tags = tagList.getElementsByClassName("tag");

  Array.from(tags).forEach(tag => {
    tag.addEventListener("click", function(event) {
      event.preventDefault();
      const selectedTag = this.getAttribute("data-tag");
      filterPosts(selectedTag);
    });
  });

  function filterPosts(tag) {
    const posts = postList.getElementsByClassName("post-item");

    Array.from(posts).forEach(post => {
      const postTags = post.getAttribute("data-tags").split(",");
      if (postTags.includes(tag)) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });
  }
});
