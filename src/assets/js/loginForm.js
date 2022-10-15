function loginForm() {
  const labels = document.getElementsByTagName("label");
  const inputs = document.getElementsByTagName("input");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", () => {
      labels[i].classList.add("hidden");
    });

    inputs[i].addEventListener("focusout", () => {
      if (inputs[i].value === "") {
        labels[i].classList.remove("hidden");
      }
    });
  }
}
