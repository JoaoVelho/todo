const addButton = document.querySelector("button");
const removes = document.querySelectorAll("span");
const ul = document.querySelector("ul");
const input = document.querySelector("input");

addButton.addEventListener("click", () => {
  const text = input.value;

  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <li>${text}</li>
    <span>X</span>
  `;
  ul.appendChild(note);

  remove = note.childNodes[3];
  remove.addEventListener("click", (e) => {
    ul.removeChild(e.target.parentNode);
  });
});

removes.forEach((remove) =>
  remove.addEventListener("click", (e) => {
    const li = e.target.parentNode;
    ul.removeChild(li);
  })
);
