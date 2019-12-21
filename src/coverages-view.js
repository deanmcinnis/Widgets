import { html, render } from 'lit-html';

class CoveragesView extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    render(this.template(), this._shadowRoot, {eventContext: this});
  }

  template() {
    return html`
      <section>
        <h2>Implement Coverages content here</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc tellus, fringilla id vestibulum vel, interdum et enim. Nulla vehicula arcu in eros faucibus, quis ultrices tellus semper. Nulla ut ante libero. Cras ut tortor in enim eleifend pharetra. Duis vulputate scelerisque felis, vel malesuada mauris sollicitudin in. Maecenas nisi ligula, mollis consectetur lacinia at, mollis vel augue. Mauris id ante vulputate, condimentum turpis sollicitudin, volutpat erat. Proin at turpis non neque viverra mattis non eu turpis. Curabitur in mi lacinia, mollis lorem ut, molestie eros. In vel iaculis tortor. Curabitur bibendum suscipit tortor ac egestas.

Quisque porta metus in tortor vulputate tempus. Maecenas finibus, nulla vitae feugiat porta, enim felis malesuada tellus, et efficitur sapien lectus sed metus. Vivamus non faucibus elit. Morbi finibus turpis eu tincidunt vulputate. Cras pharetra risus diam, sit amet vehicula augue eleifend ut. Sed non venenatis libero. Curabitur auctor arcu sagittis libero gravida, nec sodales tortor vulputate. Vivamus risus mi, scelerisque sit amet pharetra ac, fringilla a odio. Suspendisse aliquet ultrices luctus. Phasellus fringilla, est in pellentesque venenatis, dui mauris tempor ligula, in maximus velit enim vitae nulla.
        </p>
      </section>
      `;
  }
}

customElements.define('coverages-view', CoveragesView);
