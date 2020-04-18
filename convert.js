const asciidoctor = require('@asciidoctor/core')()

const registry = asciidoctor.Extensions.create()
registry.inlineMacro(function () {
  const self = this
  self.named('x-color')
  self.process(function (parent, target) {
    return self.createBlock(parent, 'pass', `<x-color target="${target}"></x-color>`).convert()
  })
})
registry.docinfoProcessor(function () {
  const self = this
  self.process((doc) => {
    if (doc.getBackend() !== 'html5') {
      return ''
    }
    return `<script type="module" src="./color-element.js"></script>`
  })
})

asciidoctor.convert(`= Asciidoctor x Web Components

x-color:#FF5733[]
`, { standalone: true, extension_registry: registry, to_file: 'index.html' })
