export default [
  {
    input: 'src/main.js',
    output: {
      file: 'index.cjs',
      format: 'cjs'
    }
  },
  {
    input: 'src/main.js',
    output: {
      file: 'index.esm.js',
      format: 'es'
    }
  },
  {
    input: 'src/main.js',
    output: {
      file: 'index.umd.js',
      name: 'BeepBeepBoop',
      format: 'umd'
    }
  }
]
