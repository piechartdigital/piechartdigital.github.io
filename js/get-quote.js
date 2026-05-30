// Get quote form validation
const quoteForm = document.querySelector("[data-quote-form]");
const quoteError = document.querySelector("[data-quote-error]");

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    const checkedServices = quoteForm.querySelectorAll('input[name="Needs help with[]"]:checked');

    if (!checkedServices.length) {
      event.preventDefault();

      if (quoteError) {
        quoteError.hidden = false;
      }

      const serviceSection = quoteForm.querySelector(".quote-fieldset");

      if (serviceSection) {
        serviceSection.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    } else if (quoteError) {
      quoteError.hidden = true;
    }
  });
}
