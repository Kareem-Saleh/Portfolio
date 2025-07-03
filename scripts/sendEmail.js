const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  emailjs.sendForm("service_79gier9", "template_wj2ffwl", "#form").then(
    () => {
      console.log("message sent");
    },
    (error) => {
      console.log(`message failed to send, ERROR: ${error}`);
    }
  );

  name.value = "";
  email.value = "";
  message.value = "";
});
