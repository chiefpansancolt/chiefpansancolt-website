import "bridgetown-quick-search"
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import TabsController from "stimulus-tabs"
import Prism from "prismjs"

import "../styles/index.css"

const application = Application.start()
application.register("tabular", TabsController)
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelectorAll(".prose").length !== 0) {
        Prism.highlightAll()
    }
})

var tabNav = document.getElementById("tabNavigation")

var afterClick = function () {
    const results = document.querySelector("#tabNavigation")
    const selectedTab = results.dataset.tabularSelectedTab
    const previousTab = results.dataset.tabularPreviousTab

    console.log(previousTab)
};

tabNav.addEventListener('click', afterClick, false);