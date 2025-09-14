// Gera um token no front (por exemplo, quando o backend responder)
export function generateVerificationUrl(baseUrl, email, token, expiresAt) {
  const url = new URL(baseUrl);
  url.searchParams.set("a", email);
  url.searchParams.set("token", token);
  url.searchParams.set("expiresAt", expiresAt.toString());
  return url.toString();
}

// Valida no front (quando o usuário acessar o link)
export function validateVerificationParams() {
  const params = new URLSearchParams(window.location.search);
  const email = params.get("a");
  // const token = params.get("t");

  // if (!email || !token ) {
  //   return { status: "error", message: "Parâmetros inválidos." };
  // }

  if (!email) {
    return { status: "error", message: "Parâmetros inválidos." };
  }

  return { status: "success", email};
}
