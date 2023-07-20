module.exports = {
  title: "Xorbits Inference",
  description: "LLM Web UI and API",
  update: async (kernel) => {
    return "update.json"
  },
  menu: [{
    html: '<i class="fa-solid fa-microchip"></i> Install',
    href: "install.json"
  }, {
    html: '<i class="fa-solid fa-rocket"></i> Launch',
    href: "start.json"
  }]
}
