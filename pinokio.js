module.exports = {
  start: "start.json",
  update: async (kernel) => {
    return "update.json"
  },
  menu: [{
    html: "Install",
    href: "install.json"
  }]
}
