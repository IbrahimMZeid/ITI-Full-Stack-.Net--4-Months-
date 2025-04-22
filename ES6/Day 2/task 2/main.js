let container = document.querySelector(".container");
let post_container = document.querySelector(".posts");
async function fetchUsers() {
  let users = [];
  let reponse = await fetch("https://jsonplaceholder.typicode.com/users");
  users = await reponse.json();

  for (let index = 0; index < users.length; index++) {
    let btn = document.createElement("button");
    btn.innerText = users[index].name;
    btn.classList.add("btn", "btn-primary", "m-2");
    btn.addEventListener("click", () => {
      showPosts(users[index].id);
    });
    post_container.before(btn);
    }
  return users;
}
async function showPosts(userId) {
  post_container.innerHTML = "";
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  let posts = await response.json();
  for (let index = 0; index < posts.length; index++) {
    let card = document.createElement("div");
    let post_title = document.createElement("h3");
    let post_body = document.createElement("p");
    post_title.innerText = posts[index].title;
    post_body.innerText = posts[index].body;
    card.classList.add("card", "m-2", "p-2");
    post_title.classList.add("card-title");
    post_body.classList.add("card-body");
    card.append(post_title, post_body);
    post_container.append(card);
  }
}
window.onload = () => {
  fetchUsers();
};


// async function tmp() {
//     let result = await fetchUsers();
//     console.log(result);
// }
// tmp();