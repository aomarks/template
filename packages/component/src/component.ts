/**
 * @license
 * Copyright 2024 Alexander Marks
 * SPDX-License-Identifier: Apache-2.0
 */

import {LitElement, html, css, type CSSResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-component')
export class MyComponent extends LitElement {
  static override styles: CSSResult[] = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  #greeting = 'Hello';

  @property()
  accessor name = 'Web';

  override render(): unknown {
    return html`<p>$${this.#greeting} ${this.name}</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-component': MyComponent;
  }
}
