const path = require('path')
module.exports = {
  version: 3.7,
  title: "vid2pose",
  description: "Video to Openpose & DWPose (All OS supported) https://github.com/sdbds/vid2pose",
  icon: "icon.gif",
  menu: async (kernel, info) => {
    let installed = info.exists("app/env")
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js")
    }
    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (installed) {
      if (running.start) {
        let local = info.local("start.js")
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
          }, {
            icon: 'fa-solid fa-terminal',
            text: `Terminal (${local.type})`,
            href: "start.js",
          }]
        } else {
          return [{
            default: true,
            icon: 'fa-solid fa-terminal',
            text: `Terminal (${local.type})`,
            href: "start.js",
          }]
        }
       } else if (running.update) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Updating",
          href: "update.js",
        }]
      } else if (running.reset) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Resetting",
          href: "reset.js",
        }] 
      } else {
        return [{
          icon: "fa-solid fa-power-off",
          text: "Openpose",
          href: "start.js",
          params: {
            type: "openpose"
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "Openpose Hand",
          href: "start.js",
          params: {
            type: "openpose_hand"
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "Openpose Face",
          href: "start.js",
          params: {
            type: "openpose_face"
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "Openpose Full",
          href: "start.js",
          params: {
            type: "openpose_full"
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "DWPose",
          href: "start.js",
          params: {
            type: "dwpose"
          }
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        }, {
          icon: "fa-solid fa-broom",
          text: "Factory Reset",
          href: "reset.js",
        }]
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
