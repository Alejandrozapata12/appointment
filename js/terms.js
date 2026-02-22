// ===== PRIVACY MODAL =====
const privacyModal = document.getElementById("modal-privacidad");
const privacyBtn = privacyModal.querySelector(".saas_btn_primary");

privacyBtn.addEventListener("click", () => {

  // Guardar consentimiento
  localStorage.setItem("privacyAccepted", "true");

  // Cerrar modal
  privacyModal.style.display = "none";

});


// ===== TERMS MODAL =====
const termsModal = document.getElementById("modal-terminos");

const termsAcceptBtn = termsModal.querySelector(".saas_btn_primary");
const termsDeclineBtn = termsModal.querySelector(".saas_btn_secondary");

// ACCEPT
termsAcceptBtn.addEventListener("click", () => {

  localStorage.setItem("termsAccepted", "true");

  termsModal.style.display = "none";

});

// DECLINE
termsDeclineBtn.addEventListener("click", () => {

  localStorage.removeItem("termsAccepted");

  // Opcional: bloquear acceso
  // window.location.href = "/access-denied.html";

  termsModal.style.display = "none";

});


// ===== SECURITY MODAL =====
const securityModal = document.getElementById("modal-seguridad");
const securityBtn = securityModal.querySelector(".saas_btn_primary");

securityBtn.addEventListener("click", () => {

  localStorage.setItem("securityAcknowledged", "true");

  securityModal.style.display = "none";

});
