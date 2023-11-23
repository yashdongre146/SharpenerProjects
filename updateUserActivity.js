const posts = [{ title: "POST1" }, { title: "POST2" }];

function printPost() {
  posts.forEach((post) => {
    console.log(post.title);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.pop();
      resolve();
    }, 1000);
  });
}
function createPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "POST3" });
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentTime = new Date().toISOString();
        resolve(currentTime);
      }, 1000);
    });
  }

  // Using Promise.all to wait for both promises to resolve
Promise.all([createPost(), updateLastUserActivityTime()])
.then((values) => {
    printPost();
    console.log(values[1]);
    deletePost().then(()=>{
        printPost();
    })
})
.catch((error) => {
    console.error("Error occurred:", error);
});
