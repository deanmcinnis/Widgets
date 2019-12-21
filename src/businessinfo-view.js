import { html, render } from 'lit-html';

class BusinessInfoView extends HTMLElement {
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
        <h2>Business Info view here</h2>
        <p>
          Donec maximus nulla risus, a euismod mauris ornare quis. Maecenas interdum lorem vitae felis convallis, eu fermentum eros sagittis. Integer vel metus id sem faucibus hendrerit. Duis in vulputate nisl. Curabitur a tincidunt justo. Praesent tincidunt tortor in lectus semper mattis. Nullam at facilisis nisi. Praesent eget enim ultrices, imperdiet felis a, fringilla risus. Integer faucibus ut enim nec dignissim. Sed congue ex nisl, vel fringilla metus finibus at. Duis sed iaculis elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin at blandit lorem. Etiam sollicitudin augue et odio maximus ullamcorper eu ac lorem.

Vivamus pretium erat dolor, sit amet semper metus gravida in. Vivamus porta sit amet dolor vel consequat. Aenean mattis, erat eu rhoncus volutpat, quam nibh venenatis lorem, laoreet lobortis neque neque ut tellus. Phasellus varius maximus elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ultricies nibh sed hendrerit mollis. Donec accumsan arcu non felis auctor, at sollicitudin neque mattis. Donec sagittis orci dolor, eu laoreet leo congue sed. Nam sodales nec justo id fringilla. Mauris mi orci, vulputate et efficitur id, pharetra eu ex. Nullam vel orci lobortis, pharetra mauris eget, varius sem. Proin quis gravida nisi.
        </p>
      </section>
      `;
  }
}

customElements.define('businessinfo-view', BusinessInfoView);
