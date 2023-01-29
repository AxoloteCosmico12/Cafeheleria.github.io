class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
       Equipo 4
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
