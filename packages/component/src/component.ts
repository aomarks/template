/**
 * @license
 * Copyright 2024 Alexander Marks
 * SPDX-License-Identifier: Apache-2.0
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyComponent extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }
  `;

  #greeting = 'Hello';

  @property()
  accessor name = 'Web';

  override render() {
    return html`<p>$${this.#greeting} ${this.name}</p>`;
  }
}
