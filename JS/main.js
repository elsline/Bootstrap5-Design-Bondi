let lis = document.querySelectorAll(".our-work ul li");
let imgs = document.querySelectorAll(".our-work .col-sm-6");
console.log(imgs);
lis.forEach((li) => {
  li.addEventListener("click", () => {
    lis.forEach((l) => {
      l.classList.remove("active");
    });
    li.classList.add("active");
    category(li);
    if (lis[0].classList.contains("active")) {
      imgs.forEach((img) => {
        img.style.display = "block";
      });
    }
  });
});
function category(li) {
  const liData = li.dataset.cat;
  let lis = document.querySelectorAll(".our-work ul li");

  imgs.forEach((img) => {
    const imgData = img.dataset.cat1;
    if (liData === imgData) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}

let copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);
