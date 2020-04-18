const asciidoctor = require('@asciidoctor/core')()

const registry = asciidoctor.Extensions.create()
registry.inlineMacro(function () {
  const self = this
  self.named('color')
  self.process(function (parent, target) {
    return self.createBlock(parent, 'pass', `<x-color target="${target}"></x-color>`).convert()
  })
})
registry.inlineMacro(function () {
  const self = this
  self.named('status')
  self.process(function (parent, target, attrs) {
    const variant = attrs && attrs.variant ?  ` variant="${attrs.variant}"` : ''
    return self.createBlock(parent, 'pass', `<sp-status-light${variant}>${target}</sp-status-light>`).convert()
  })
})
registry.docinfoProcessor(function () {
  const self = this
  self.process((doc) => {
    if (doc.getBackend() !== 'html5') {
      return ''
    }
    return `<script type="module" src="./color-element.js"></script>
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-global.css">
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-medium.css">
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-light.css">
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/components/spectrum-statuslight.css">
<link rel="stylesheet" href="node_modules/@spectrum-css/statuslight/dist/vars.css">
<script type="module" src="./web_modules/@spectrum-web-components/status-light.js"></script>`
  })
})

asciidoctor.convert(`= Asciidoctor x Web Components

status:approved[variant=positive]

color:#FF5733[]
`, { standalone: true, extension_registry: registry, to_file: 'index.html' })
