export default {
  multipass: false,
  datauri: "base64",
  js2svg: {
    indent: 4,
    pretty: false,
  },
  plugins: [
    "preset-default",
    "prefixIds",
    {
      name: "prefixIds",
      params: {
        prefix: "uwu",
      },
    },
  ],
};
