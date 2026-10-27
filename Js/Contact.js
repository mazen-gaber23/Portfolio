const form = document.querySelector("form");
const statusTxt = document.getElementById("status");
const submitBtn = form.querySelector("button[type='submit']");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); 

  statusTxt.innerHTML = "Sending...";
  statusTxt.style.color = "blue";
  submitBtn.disabled = true; 

  const data = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" }
  })
    .then((response) => {
      if (response.ok) {
        statusTxt.innerHTML = "Message sent successfully! 🎉";
        statusTxt.style.color = "green";
        form.reset();
      } else {
        statusTxt.innerHTML = "Oops! Something went wrong.";
        statusTxt.style.color = "red";
      }
    })
    .catch(() => {
      statusTxt.innerHTML = "Network error. Try again later.";
      statusTxt.style.color = "red";
    })
    .finally(() => {
      submitBtn.disabled = false; 
      setTimeout(() => {
        statusTxt.innerHTML = ""; 
      }, 5000);
    });
});
