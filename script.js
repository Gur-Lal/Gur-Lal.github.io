function loadSection(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    });
}

loadSection("research-content", "sections/research.html", initResearch);
loadSection("journey-content", "sections/journey.html", initJourney);
loadSection("sketches-content", "sections/sketches.html", initSketches);
loadSection("wireframe-content", "sections/wireframe.html", initWireframe);
loadSection("testing-content", "sections/testing.html", initTesting);
loadSection("reflection-content", "sections/reflection.html", initReflection);