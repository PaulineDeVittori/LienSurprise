const CODE_SECRET = "amourENSIM100224"; // ← Modifie le code secret ici

function verifierCode() {
  const saisie = document.getElementById("codeInput").value.trim();
  const message = document.getElementById("message");
  const lienSecret = document.getElementById("secret-link");

  if (saisie === CODE_SECRET) {
    message.textContent = "";
    lienSecret.style.display = "block";
  } else {
    message.textContent = "Ce n'est pas le bon code, mais tu peux réessayer mon amour <3 <3 <3";
    lienSecret.style.display = "none";
  }
}

function genererCoeur() {
  const coeur = document.createElement("div");
  coeur.classList.add("heart");
  coeur.textContent = "💜";

  // Position aléatoire horizontale
  coeur.style.left = Math.random() * window.innerWidth + "px";
  coeur.style.top = window.innerHeight + "px";

  document.body.appendChild(coeur);

  // Supprimer le cœur après l'animation
  setTimeout(() => {
    coeur.remove();
  }, 5000);
}

// Générer des cœurs toutes les 300ms
setInterval(genererCoeur, 800);

