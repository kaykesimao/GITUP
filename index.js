const name = "kayke";
const h1 = document.querySelector("h1");
let i = 1

h1.addEventListener("click", () => something())

function something() {
  console.log(name + i++)
}
