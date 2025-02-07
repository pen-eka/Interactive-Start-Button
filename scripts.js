document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("checkbox");
  
    document.querySelector(".switch").addEventListener("click", function () {
      checkbox.checked = !checkbox.checked; // Manually toggle the checkbox state
    });
  });
  