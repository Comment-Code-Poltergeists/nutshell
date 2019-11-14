import { buildRegisterHTML, buildLoginHTML } from "./buildDOM";

export const renderRegisterModal = () => {
  const registerContainer = document.querySelector("#login-container")
  registerContainer.innerHTML = `${buildRegisterHTML()}${buildLoginHTML()}`
}
