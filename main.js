//consumir dado direto do endpoint/ api

//url
//TODO fetch
//REQUISIÇÃO
//axios

//async e await

const url = "https://jsonplaceholder.typicode.com/posts";
async function getPost() {
  const response = await fetch(url);

  //ARMAZENO
  const posts = await response.json();

  const postList = document.getElementById("post-list");

  posts.forEach((post) => {
    const liList = document.createElement("li");
    liList.textContent = post.title;
    liList.textContent = post.body;
    postList.appendChild(liList);
  });
  //
}

getPost();

// fetch(url)
//   .then((resposta) => {
//     if (resposta.status === 200) {
//       const data = resposta.json();
//       console.log(data);
//       return data;
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });
