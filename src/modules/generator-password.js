import { generatorPassword } from "./form-generator";
const div = document.querySelector(".result-password");
const inputAmount = document.querySelector(".sizeInput-Number");
const inputNumbers = document.querySelector(".addNumbers");
const inputSmallLetter = document.querySelector(".addSmallLetters");
const inpuCapitalLetter = document.querySelector(".addCapitalLetters");
const inputAddSymbols = document.querySelector(".addSymbols");

export function resultGenerator() {
  document.addEventListener("click", (e) => {
    const el = e.target;
    if (el.classList.contains("btn")) {
      const result = generatorPassword(
        inputAmount.value,
        inputNumbers.checked,
        inputSmallLetter.checked,
        inpuCapitalLetter.checked,
        inputAddSymbols.checked
      );
      if (!result) {
        div.innerText = "choose your options for generate u password!";
        div.classList.remove("msgSucess");
        div.classList.add("msgError");
        return;
      }
      div.classList.remove("msgError");
      div.classList.add("msgSucess");
      div.innerText = result;
    }
  });
}
