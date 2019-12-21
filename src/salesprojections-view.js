import { html, render } from 'lit-html';

class SalesView extends HTMLElement {
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
        <h2>Sales projections content here</h2>
        <p>
          Suspendisse congue sodales est. Suspendisse nisl ex, consectetur vel cursus sed, cursus sit amet sapien. Cras consequat massa venenatis nunc volutpat lobortis. Donec ornare blandit diam eget efficitur. Cras varius aliquet leo, nec finibus odio tincidunt non. Pellentesque mauris massa, accumsan quis tortor vitae, consectetur sollicitudin massa. Fusce eget vestibulum lacus, nec mollis orci. Vestibulum mauris velit, luctus vel lorem luctus, luctus porttitor dolor. Aenean iaculis ex eu ornare malesuada. Donec pellentesque lorem sit amet nisi congue, sit amet fringilla urna euismod. Vivamus consectetur mauris eu ligula blandit tristique. Nullam arcu mi, accumsan sit amet ipsum nec, scelerisque malesuada nisl.

Donec maximus nulla risus, a euismod mauris ornare quis. Maecenas interdum lorem vitae felis convallis, eu fermentum eros sagittis. Integer vel metus id sem faucibus hendrerit. Duis in vulputate nisl. Curabitur a tincidunt justo. Praesent tincidunt tortor in lectus semper mattis. Nullam at facilisis nisi. Praesent eget enim ultrices, imperdiet felis a, fringilla risus. Integer faucibus ut enim nec dignissim. Sed congue ex nisl, vel fringilla metus finibus at. Duis sed iaculis elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin at blandit lorem. Etiam sollicitudin augue et odio maximus ullamcorper eu ac lorem.
        </p>
      </section>
      `;
  }
}

customElements.define('sales-view', SalesView);
