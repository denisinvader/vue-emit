const rollup = require('rollup')
const configFactory = require('./rollup.config')

async function build(option) {
  const bundle = await rollup.rollup(option.input)
  await bundle.write(option.output)
}

(async () => {
  try {
    build(configFactory({
      input: './emit.js',
      fileName: './dist/vue-emit.min.js'
    }))
  } catch (e) {
    console.error(e)
  }
})()
