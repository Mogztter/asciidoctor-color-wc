import { _ as __decorate } from '../common/tslib.es6-ebc9ead2.js';
import { c as css, L as LitElement, h as html, p as property } from '../common/lit-element-169ba542.js';

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
#root{min-height:var(--spectrum-statuslight-height,var(--spectrum-alias-single-line-height));display:flex;flex-direction:row;align-items:flex-start;padding:calc(var(--spectrum-global-dimension-size-65) - 1px) 0 calc(var(--spectrum-global-dimension-size-65) + 1px) 0;box-sizing:border-box;font-size:var(--spectrum-statuslight-text-size,var(--spectrum-alias-font-size-default));font-weight:var(--spectrum-statuslight-text-font-weight,var(--spectrum-alias-body-text-font-weight));line-height:1.44;color:var(--spectrum-statuslight-text-color,var(--spectrum-alias-text-color))}#root:before{content:"";flex-grow:0;flex-shrink:0;display:inline-block;width:var(--spectrum-statuslight-dot-size,var(--spectrum-global-dimension-size-100));height:var(--spectrum-statuslight-dot-size,var(--spectrum-global-dimension-size-100));border-radius:50%;margin:calc(var(--spectrum-global-dimension-size-65) + 1px) var(--spectrum-statuslight-text-gap,var(--spectrum-global-dimension-size-150)) calc(var(--spectrum-global-dimension-size-65) - 1px) var(--spectrum-statuslight-text-gap,var(--spectrum-global-dimension-size-150));-ms-high-contrast-adjust:none;forced-color-adjust:none}:host([variant=neutral]) #root{font-style:italic;color:var(--spectrum-statuslight-neutral-text-color,var(--spectrum-global-color-gray-700))}#root[disabled],:host([disabled]) #root{color:var(--spectrum-statuslight-text-color-disabled,var(--spectrum-alias-text-color-disabled))}:host([variant=negative]) #root:before{background-color:var(--spectrum-statuslight-negative-dot-color,var(--spectrum-semantic-negative-color-status))}:host([variant=notice]) #root:before{background-color:var(--spectrum-statuslight-notice-dot-color,var(--spectrum-semantic-notice-color-status))}:host([variant=positive]) #root:before{background-color:var(--spectrum-statuslight-positive-dot-color,var(--spectrum-semantic-positive-color-status))}.spectrum-StatusLight--active:before,:host([variant=info]) #root:before{background-color:var(--spectrum-statuslight-info-dot-color,var(--spectrum-semantic-informative-color-status))}:host([variant=neutral]) #root:before{background-color:var(--spectrum-statuslight-neutral-dot-color,var(--spectrum-global-color-gray-500))}:host([variant=celery]) #root:before{background-color:var(--spectrum-statuslight-dot-color-label-celery,var(--spectrum-global-color-celery-400))}:host([variant=yellow]) #root:before{background-color:var(--spectrum-statuslight-dot-color-label-yellow,var(--spectrum-global-color-yellow-400))}:host([variant=fuchsia]) #root:before{background-color:var(--spectrum-statuslight-dot-color-label-fuchsia,var(--spectrum-global-color-fuchsia-400))}:host([variant=indigo]) #root:before{background-color:var(--spectrum-statuslight-dot-color-label-indigo,var(--spectrum-global-color-indigo-400))}:host([variant=seafoam]) #root:before{background-color:var(--spectrum-statuslight-dot-color-label-seafoam,var(--spectrum-global-color-seafoam-400))}:host([variant=chartreuse]) #root:before{background-color:var(--spectrum-statuslight-dot-color-label-chartreuse,var(--spectrum-global-color-chartreuse-400))}:host([variant=magenta]) #root:before{background-color:var(--spectrum-statuslight-dot-color-label-magenta,var(--spectrum-global-color-magenta-400))}:host([variant=purple]) #root:before{background-color:var(--spectrum-statuslight-dot-color-label-purple,var(--spectrum-global-color-purple-400))}#root[disabled]:before,:host([disabled]) #root:before{background-color:var(--spectrum-statuslight-dot-color-disabled,var(--spectrum-global-color-gray-400))}
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
 * A Spectrum status light control.
 * @element sp-status-light
 */
class StatusLight extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * A status light in a disabled state shows that a status exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that a status may become available later.
         */
        this.disabled = false;
        /**
         * The visual variant to apply to this status light.
         */
        this.variant = 'info';
    }
    static get styles() {
        return [styles];
    }
    render() {
        return html `
            <div id="root">
                <slot></slot>
            </div>
        `;
    }
}
__decorate([
    property({ type: Boolean, reflect: true })
], StatusLight.prototype, "disabled", void 0);
__decorate([
    property({ reflect: true })
], StatusLight.prototype, "variant", void 0);

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
if (!customElements.get('sp-status-light')) {
    customElements.define('sp-status-light', StatusLight);
}

export { StatusLight };
