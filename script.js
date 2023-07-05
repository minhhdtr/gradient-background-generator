// close the collapse when clicking outside of it
$(document).on("click", function (event) {
  if ($(event.target).closest(".collapse").length == 0) {
    $(".collapse").collapse("hide");
  }
});

$("#light-mode").on("click", () => {
  document.documentElement.setAttribute("data-bs-theme", "light");
});
$("#dark-mode").on("click", () => {
  document.documentElement.setAttribute("data-bs-theme", "dark");
});

let color1 = $(".color-1"),
  color2 = $(".color-2");

// generate random colors
const randomColor = () => {
  let color = Math.random().toString(16).slice(2, 8);
  return `#${color}`;
};

//
const setGradientBackground = () => {
  $(".gradient-background").css(
    "background",
    `linear-gradient(${color1.val()}, ${color2.val()})`
  );
  $(".bg-code").text(
    `background: linear-gradient(${color1.val()}, ${color2.val()});`
  );
};

color1.on("input", () => {
  setGradientBackground();
});

color2.on("input", () => {
  setGradientBackground();
});

$(".btn-random").on("click", () => {
  color1.val(randomColor());
  color2.val(randomColor());
  setGradientBackground();
});
