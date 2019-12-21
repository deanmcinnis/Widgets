import { html, render } from 'lit-html'; 
import { installRouter } from '../node_modules/pwa-helpers/router.js';

import './home-view.js';
import './coverages-view.js';
import './businessinfo-view.js';
import './operations-view.js';
import './salesprojections-view.js';


class CannabisApp extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
    this._pathname = "/";
  }

  get pathname() {
    return this._pathname;
  }
  set pathname(val) {
    this._pathname = val;
  }

  _handleNavigation(pathname) {
    switch (pathname) {
      case "/":
      case "/coverages":
      case "/businessinfo":
      case "/operations":
      case "/sales":
        break;
      default:
        pathname = "/";
    }
    this.pathname = pathname;
    render(this.template(), this._shadowRoot, {eventContext: this});
  }

  async connectedCallback() {
    render(this.template(), this._shadowRoot, {eventContext: this});

    // set up window.location listener on body
    installRouter((location) => this._handleNavigation(location.pathname));

    window.history.pushState({}, "", "/");
    this._handleNavigation();

 }

  disconnectedCallback() {
    this.removeEventListener("user", (e) => this._getUserName(e), false);
  }

  /* Dean your navigation control functions here */

  _openNav() {
    console.log("_openNav() invoked");
    this._shadowRoot.querySelector("div#mySidenav").style.width = "250px";
    this._shadowRoot.querySelector("main").style.marginLeft = "250px";
    this._shadowRoot.querySelector("div#button").style.display = "none";
  }

  _closeNav() {
    this._shadowRoot.querySelector("div#mySidenav").style.width = "0";
    this._shadowRoot.querySelector("main").style.marginLeft = "0";
    this._shadowRoot.querySelector("div#button").style.display = "block";
  }



  template() {
    return html`
      <style>
        :host {
          display: block;
        }

        a {
          text-decoration: none;
        }

        header {
          width: 100%;
          min-height: 80px;
          background-color: #a1a1a1;
          padding-top: 10px;
          margin-bottom: 20px;
        }

        /* workaround for IE11 displaying <main> as inline */
        main {
          display: block;
        }

        .main-content {
          padding-top: 64px;
          padding-left: 3em;
          min-height: 100vh;
          width: 70%;
          margin-left: auto;
          margin-right: auto;
        }

        .pathname {
          display: none;
        }

        .pathname[active] {
          display: block;
        }
        /********* Dean, this is where I added your css ***/

        .sidenav {
          height: 100%;
          width: 0;
          position: fixed;
          z-index: 1;
          top: 0;
          left: 0;
          background-color: #111;
          overflow-x: hidden;
          transition: 0.5s;
          padding-top: 60px;
        }
        
        .sidenav a {
          padding: 8px 8px 8px 32px;
          text-decoration: none;
          font-size: 25px;
          color: #818181;
          display: block;
          transition: 0.3s;
        }
        
        .sidenav a:hover {
          color: #f1f1f1;
        }
        
        .sidenav .closebtn {
          position: absolute;
          top: 0;
          right: 25px;
          font-size: 36px;
          margin-left: 50px;
        }
        
        /* Dean, took out your main div
        #main {
          transition: margin-left .5s;
          padding: 16px;
        }
        */
        
        @media screen and (max-height: 450px) {
          .sidenav {padding-top: 15px;}
          .sidenav a {font-size: 18px;}
        }
      </style>

      <header>
        <!-- navigation bar -->
        <nav class="toolbar">
        </nav>
      </header>
      
      <!-- Dean, this is where I added your markup for sidenav  -->

      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" @click=${this._closeNav}>&times;</a>
        <a href="/coverages">Coverages</a>
        <a href="/businessinfo">Business Info</a>
        <a href="/operations">Operations</a>
        <a href="sales">Sales Projections</a>
      </div>
      
      <div id="button">
        <span style="font-size:30px;cursor:pointer" @click=${this._openNav}>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &#9776; open</span>
        
      </div>

      <!-- main content -->
      <main role="main" class="main-content">
        <home-view class="pathname" ?active="${this.pathname === '/'}"></home-view>
        <coverages-view class="pathname" ?active="${this.pathname === '/coverages'}"></coverages-view>
        <businessinfo-view class="pathname" ?active="${this.pathname === '/businessinfo'}"></businessinfo-view>
        <operations-view class="pathname" ?active="${this.pathname === '/operations'}"></operations-view>
        <sales-view class="pathname" ?active="${this.pathname === '/sales'}"></sales-view>
      </main>
    `;
  }

}

customElements.define('cannabis-app', CannabisApp);
