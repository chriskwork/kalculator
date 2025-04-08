const input = document.querySelector("#input");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let btnValue = e.target.dataset.value;

    if (btnValue !== "=") {
      input.value += btnValue;
    } else {
      try {
        const result = eval(input.value);
        input.value = result;
      } catch (error) {
        input.value = "#Error!";
      }
    }

    if (btnValue === "C") {
      input.value = "";
    }
  });
});
