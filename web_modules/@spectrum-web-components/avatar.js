import { _ as __decorate } from '../common/tslib.es6-ebc9ead2.js';
import { d as directive, A as AttributePart, c as css, L as LitElement, h as html, p as property } from '../common/lit-element-169ba542.js';

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const previousValues = new WeakMap();
/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */
const ifDefined = directive((value) => (part) => {
    const previousValue = previousValues.get(part);
    if (value === undefined && part instanceof AttributePart) {
        // If the value is undefined, remove the attribute, but only if the value
        // was previously defined.
        if (previousValue !== undefined || !previousValues.has(part)) {
            const name = part.committer.name;
            part.committer.element.removeAttribute(name);
        }
    }
    else if (value !== previousValue) {
        part.setValue(value);
    }
    previousValues.set(part, value);
});

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
const styles = css `
:host{width:var(--spectrum-avatar-small-width,var(--spectrum-global-dimension-size-200));height:var(--spectrum-avatar-small-height,var(--spectrum-global-dimension-size-200));border-radius:var(--spectrum-avatar-small-border-radius,50%);border-style:none;-webkit-user-drag:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--spectrum-avatar-small-opacity,1)}:host([disabled]){opacity:var(--spectrum-avatar-small-opacity-disabled,.3)}:host{display:block;overflow:hidden}img{width:100%;height:auto;vertical-align:top}
`;

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
/**
 * Avatar component
 */
class Avatar extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.src = '';
    }
    static get styles() {
        return [styles];
    }
    render() {
        return html `
            <img alt=${ifDefined(this.label || undefined)} src=${this.src} />
        `;
    }
}
__decorate([
    property()
], Avatar.prototype, "label", void 0);
__decorate([
    property()
], Avatar.prototype, "src", void 0);

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
/* istanbul ignore else */
if (!customElements.get('sp-avatar')) {
    customElements.define('sp-avatar', Avatar);
}

export { Avatar };
