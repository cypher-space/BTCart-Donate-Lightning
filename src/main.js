import { defineCustomElement } from 'vue'

import Widget from './components/Widget.ce.vue'

const LightningWidgetDonateElement = defineCustomElement(Widget)

customElements.define('lightning-donate', LightningWidgetDonateElement)
