function loadSection(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

loadSection("research-content", "sections/research.html");
loadSection("journey-content", "sections/journey.html");
loadSection("wireframe-content", "sections/wireframe.html");
loadSection("testing-content", "sections/testing.html");
loadSection("reflection-content", "sections/reflection.html");