// close the collapse when clicking outside of it
$(document).on("click", function (event) {
  if ($(event.target).closest(".collapse").length == 0) {
    $(".collapse").collapse("hide");
  }
});

// toggle light/dark mode
$(".btn.btn-toggle").on("click", () => {
  if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
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

// change title gradient color on hover
const setGradientTitle = (color1, color2) => {
  $("#title").hover(function () {
    $("#title").css("background", `linear-gradient(${color1}, ${color2})`);
    $("#title").css("color", "transparent");
    $("#title").css("-webkit-background-clip", "text");
  });
  $("#title").mouseleave(function () {
    $("#title").css("background", "none");
    $("#title").css("color", "inherit");
  });
};

// set gradient background and change color code content
const setGradientBackground = (color1, color2, direction) => {
  $(".gradient-background").css(
    "background",
    `linear-gradient(${direction}, ${color1}, ${color2})`
  );
  $(".color-code-1 pre code").text(color1);
  $(".color-code-2 pre code").text(color2);
};

// change css code content
const setCssCode = (color1, color2, direction) => {
  $(".code-preview code").text(
    `background: linear-gradient(${direction}, ${color1}, ${color2});`
  );
};

// change title, gradient background and css code content
const helper = (color1, color2, direction) => {
  setGradientTitle(color1, color2);
  setGradientBackground(color1, color2, direction);
  setCssCode(color1, color2, direction);
};

color1.on("input", () => {
  helper(
    color1.val(),
    color2.val(),
    directions[$('input[name="direction"]:checked').val()]
  );
});

color2.on("input", () => {
  helper(
    color1.val(),
    color2.val(),
    directions[$('input[name="direction"]:checked').val()]
  );
});

$("#btn-random-1").on("click", () => {
  color1.val(randomColor());
  helper(
    color1.val(),
    color2.val(),
    directions[$('input[name="direction"]:checked').val()]
  );
});

$("#btn-random-2").on("click", () => {
  color2.val(randomColor());
  helper(
    color1.val(),
    color2.val(),
    directions[$('input[name="direction"]:checked').val()]
  );
});

$('input[name="direction"]').on("change", () => {
  helper(
    color1.val(),
    color2.val(),
    directions[$('input[name="direction"]:checked').val()]
  );
});
