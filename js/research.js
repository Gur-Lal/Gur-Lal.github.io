function initResearch() {
  const btn = document.getElementById("personaBtn");

  if (btn) {
    btn.addEventListener("click", () => {
      alert("Research loaded correctly!");
    });
  }
}