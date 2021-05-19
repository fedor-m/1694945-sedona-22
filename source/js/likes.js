const likeButtons = document.querySelectorAll(".photo__likes-button");
const likes = document.querySelectorAll(".photo__likes-number");
for (let i = 0; i < likeButtons.length; i++)
  likeButtons[i].addEventListener("click", function () {
    const number = Number(likes[i].textContent);
    if (likes[i].classList.contains("liked")) {
      likes[i].textContent = number - 1;
      likes[i].classList.remove("liked");
    }
    else {
      likes[i].textContent = number + 1;
      likes[i].classList.add("liked");
    }
  });
