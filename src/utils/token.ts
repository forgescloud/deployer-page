// Gera um token no front (por exemplo, quando o backend responder)
export function generateVerificationUrl(baseUrl, email, token, expiresAt) {
  const url = new URL(baseUrl);
  url.searchParams.set("email", email);
  url.searchParams.set("token", token);
  url.searchParams.set("expiresAt", expiresAt.toString());
  return url.toString();
}

// Valida no front (quando o usuário acessar o link)
export function validateVerificationParams() {
  const params = new URLSearchParams(window.location.search);
  const email = params.get("email");
  const token = params.get("token");
  const expiresAt = params.get("expiresAt");

  if (!email || !token || !expiresAt) {
    return { status: "error", message: "Parâmetros inválidos." };
  }

  const now = Date.now();
  if (now > parseInt(expiresAt)) {
    return { status: "error", message: "Link expirado." };
  }

  return { status: "success", email, token };
}

// Exemplo de uso no front-end:
//
// Na página de verificação (ex: /verify/index.html):
//
// import { validateVerificationParams } from "./utils/token.js";
//
// window.addEventListener("DOMContentLoaded", () => {
//   const result = validateVerificationParams();
//   const container = document.getElementById("verify-result");
//
//   if (result.status === "success") {
//     container.innerText = `E-mail ${result.email} confirmado com sucesso!`;
//   } else {
//     container.innerText = result.message;
//   }
// });
