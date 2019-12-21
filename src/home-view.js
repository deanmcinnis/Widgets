import { html, render } from 'lit-html';

class HomeView extends HTMLElement {
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
        <h2>Some landing page content goes here</h2>
        <p>
          Quisque porta metus in tortor vulputate tempus. Maecenas finibus, nulla vitae feugiat porta, enim felis malesuada tellus, et efficitur sapien lectus sed metus. Vivamus non faucibus elit. Morbi finibus turpis eu tincidunt vulputate. Cras pharetra risus diam, sit amet vehicula augue eleifend ut. Sed non venenatis libero. Curabitur auctor arcu sagittis libero gravida, nec sodales tortor vulputate. Vivamus risus mi, scelerisque sit amet pharetra ac, fringilla a odio. Suspendisse aliquet ultrices luctus. Phasellus fringilla, est in pellentesque venenatis, dui mauris tempor ligula, in maximus velit enim vitae nulla.

Suspendisse congue sodales est. Suspendisse nisl ex, consectetur vel cursus sed, cursus sit amet sapien. Cras consequat massa venenatis nunc volutpat lobortis. Donec ornare blandit diam eget efficitur. Cras varius aliquet leo, nec finibus odio tincidunt non. Pellentesque mauris massa, accumsan quis tortor vitae, consectetur sollicitudin massa. Fusce eget vestibulum lacus, nec mollis orci. Vestibulum mauris velit, luctus vel lorem luctus, luctus porttitor dolor. Aenean iaculis ex eu ornare malesuada. Donec pellentesque lorem sit amet nisi congue, sit amet fringilla urna euismod. Vivamus consectetur mauris eu ligula blandit tristique. Nullam arcu mi, accumsan sit amet ipsum nec, scelerisque malesuada nisl.
        </p>
      </section>
      `;
  }
}

customElements.define('home-view', HomeView);
