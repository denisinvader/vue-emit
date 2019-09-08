const babel = require('rollup-plugin-babel');
const { uglify } = require('rollup-plugin-uglify');
const meta = require('./package.json');

const config = {
  input: 'emit.js',
  output: {
    file: `dist/${meta.name}.js`,
    name: meta.name,
    format: 'umd',
  },
  plugins: [
    babel(),
  ],
};

module.exports = [
  config,
  {
    ...config,
    output: {
      ...config.output,
      file: `dist/${meta.name}.min.js`,
    },
    plugins: [
      ...config.plugins,
      uglify(),
    ],
  },
];
