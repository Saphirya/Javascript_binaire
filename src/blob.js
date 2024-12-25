const lien = document.createElement("a");
lien.download = "texte.txt";

const blob = new Blob(["Coucou !"], { type: "text/plain" });

lien.href = URL.createObjectURL(blob);

lien.click();

URL.revokeObjectURL(lien.href);
