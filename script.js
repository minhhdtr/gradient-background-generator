// close the collapse when clicking outside of it
$(document).on("click", function (event) {
  if ($(event.target).closest(".collapse").length == 0) {
    $(".collapse").collapse("hide");
  }
});

// toggle light/dark mode
$(".btn.btn-toggle").on("click", () => {
  if (document.documentElement.getAttribute("data-bs-theme") === "dark") {
    $(".btn-toggle i").removeClass("fa-sun").addClass("fa-moon");
    document.documentElement.setAttribute("data-bs-theme", "light");
  } else {
    $(".btn-toggle i").removeClass("fa-moon").addClass("fa-sun");
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
});

let color1 = $(".color-1"),
  color2 = $(".color-2");

const directions = ["to bottom", "to top", "to left", "to right"];

// generate random colors
const randomColor = () => {
  let color = Math.random().toString(16).slice(2, 8);
  return `#${color}`;
};

// change css code content
const setCssCode = (color1, color2, direction) => {
  $(".code-preview").text(
    `background: linear-gradient(${direction}, ${color1}, ${color2});`
  );
};

// set gradient background and change css code content
const setGradientBackground = (color1, color2, direction) => {
  $(".gradient-background").css(
    "background",
    `linear-gradient(${direction}, ${color1}, ${color2})`
  );
  $(".color-code-1 pre code").text(color1);
  $(".color-code-2 pre code").text(color2);
};

color1.on("input", () => {
  setGradientBackground(color1.val(), color2.val(), directions[0]);
  setCssCode(color1.val(), color2.val(), directions[0]);
});

color2.on("input", () => {
  setGradientBackground(color1.val(), color2.val(), directions[0]);
  setCssCode(color1.val(), color2.val(), directions[0]);
});

$("#btn-random-1").on("click", () => {
  color1.val(randomColor());
  setGradientBackground(color1.val(), color2.val(), directions[0]);
  setCssCode(color1.val(), color2.val(), directions[0]);
});

$("#btn-random-2").on("click", () => {
  color2.val(randomColor());
  setGradientBackground(color1.val(), color2.val(), directions[0]);
  setCssCode(color1.val(), color2.val(), directions[0]);
});
