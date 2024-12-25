document.getElementById("input").addEventListener("change", () => {
  const file = document.getElementById("input").files.item(0);
  if (file) {
    processFile(file);
  }
});

const processFile = (file) => {
  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onerror = errorHandler;
  reader.onabort = () => changeStatus("Annulé !");
  reader.onloadstart = () => changeStatus("Lecture en cours...");
  reader.onload = () => changeStatus("Lecture terminée");
  reader.onprogress = setProgress;
};

const setProgress = (e) => {
  const loadingPercentage = (100 * e.loaded) / e.total;
  document.getElementById("progress-bar").value = loadingPercentage;
};

const changeStatus = (status) => {
  document.getElementById("status").innerText = status;
};

const errorHandler = (err) => {
  changeStatus(`Erreur : ${err}`);
};
