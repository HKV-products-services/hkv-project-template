import vegaEmbed from "vega-embed";

export function createVega(element, spec, loadCallback) {
  if (!spec) { spec = {}; }

  const vegaEmbedObject = vegaEmbed(element, spec, {
    theme: "vox",
    defaultStyle: true,
    renderer: "svg",
    actions: {
      export: true,
      source: false,
      compiled: false,
      editor: false
    },
    i18n: {
      PNG_ACTION: "Exporteer als png",
      SVG_ACTION: "Exporteer als svg"
    }
  })
    .then(function (result) {
      loadCallback(result.view)
    })
    .catch(console.error);

  return vegaEmbedObject;
}
