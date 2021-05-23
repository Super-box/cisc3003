/* add code here  */
document.addEventListener("DOMContentLoaded", function (event) {
  // DOM elements
  var hilightable = document.getElementsByClassName("hilightable");
  var required = document.getElementsByClassName("required");
  var form = document.getElementById("mainForm");
  /* cannot use convert htmlcollection into array easily so just use a for loop, this is stupid*/
  for (let i = 0; i < hilightable.length; ++i) {
    let element = hilightable[i];
    element.addEventListener("focus", function () {
      element.classList.add("highlight");
    });
    element.addEventListener("blur", function () {
      element.classList.remove("highlight");
    });
  }
  for (let i = 0; i < required.length; ++i) {
    let element = required[i];
    element.addEventListener("change", function (e) {
      element.classList.remove("error");
    });
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    for (let i = 0; i < required.length; ++i) {
      let element = required[i];
      if (!element.value) {
        element.classList.add("error");
      }
    }
  });
});
