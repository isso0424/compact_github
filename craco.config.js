module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  jest: {
    configure: {
      rootDir: 'tests/',
    },
    moduleFileExtensions: [
      "ts",
      "js",
    ],
    moduleNameMapper: {
      "~": "src/",
    },
  },
};
