const header = document.querySelector("header");
const navIcon = document.querySelector(".navIcon");
const navList = document.querySelectorAll(".nav li");
const tab2 = document.querySelectorAll(".tab2 div");
const tab = document.querySelectorAll(".tab div");
const qnaBtn = document.querySelector(".qnaBtn");

navIcon.addEventListener("click", function () {
  if (header.classList.contains("activeNav")) {
    header.classList.add("nend");
    header.classList.remove("activeNav");
  } else {
    header.classList.add("activeNav");
    header.classList.remove("nend");
  }
});

tabAnimation(tab, "btnColor");
tabAnimation(tab2, "btnColor");
tabAnimation(navList, "active");

function tabAnimation(arr, cls) {
  arr.forEach((el, i) => {
    el.addEventListener("click", function (e) {
      console.log("1");
      arr.forEach((e) => {
        e.classList.remove(cls);
      });
      el.classList.add(cls);
    });
  });
}
("default");
qnaBtn.addEventListener("click", function (e) {
    let qna = document.querySelector(".qnaCard");
  let qnacard = document.querySelector(".qna");

  if (qna.classList.contains("default")) {
    qna.classList.add("activeqna");
    qna.classList.remove("default");
    qnacard.classList.add("activeqna");
    qnacard.classList.remove("default");
  } else {
    qna.classList.remove("activeqna");
    qna.classList.add("default");
    qnacard.classList.remove("activeqna");
    qnacard.classList.add("default");
  }
});
