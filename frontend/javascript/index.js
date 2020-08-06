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

    if(selectedTab != previousTab) {
        document.getElementById(selectedTab).classList = "w-1/4 py-4 px-1 text-center border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700"
        document.getElementById(previousTab).classList = "w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
    }
};

tabNav.addEventListener('click', afterClick, false);