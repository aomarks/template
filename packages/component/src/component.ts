/**
 * @license
 * Copyright 2023 Alexander Marks
 * SPDX-License-Identifier: Apache-2.0
 */

import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('my-element')
export class MyComponent extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }
  `;

  override render() {
    return html`<p>Hello Web</p>`;
  }
}
