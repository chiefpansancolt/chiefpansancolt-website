/* eslint-disable max-len */
import 'bridgetown-quick-search';
import {Application} from 'stimulus';
import {definitionsFromContext} from 'stimulus/webpack-helpers';
import TabsController from 'stimulus-tabs';
import Prism from 'prismjs';

import '../styles/index.scss';

const application = Application.start();
application.register('tabular', TabsController);
const context = require.context('./controllers', true, /\.js$/);
application.load(definitionsFromContext(context));

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelectorAll('.prose').length !== 0) {
    Prism.highlightAll();
  }
});

var tabNav = document.getElementById('tabNavigation');

if (tabNav) {
  var afterClick = function() {
    const results = document.querySelector('#tabNavigation');
    const selectedTab = results.dataset.tabularSelectedTab;
    const previousTab = results.dataset.tabularPreviousTab;

    if (selectedTab != previousTab) {
      document.getElementById(selectedTab).classList = 'w-1/4 py-4 px-1 text-center border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700';
      document.getElementById(previousTab).classList = 'w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300';
    }
  };

  tabNav.addEventListener('click', afterClick, false);
}

var mybutton = document.getElementById('back-to-top');

if (mybutton) {
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  }

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 25);
    }
  };
  mybutton.addEventListener('click', scrollToTop, false);
}

var tags = document.querySelectorAll('.pop-badge');
var popList = document.querySelectorAll('.pop');
var dotSvg = '<svg class="-ml-0.5 mr-1.5 h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>';

var tagClick = function(event) {
  const name = event.target.dataset.name;
  for (let index = 0; index < tags.length; index++) {
    var element = tags[index];
    if (element.childNodes.length > 1) {
      element.childNodes[0].remove();
    }
  }

  event.target.insertAdjacentHTML('afterbegin', dotSvg);
  for (let index = 0; index < popList.length; index++) {
    var element = popList[index];
    if (name == 'All') {
      element.style.display = 'block';
    } else {
      console.log(element.dataset.group);
      if (element.dataset.group != name) {
        element.style.display = 'none';
      } else {
        element.style.display = 'block';
      }
    }
  }
};

for (let index = 0; index < tags.length; index++) {
  const element = tags[index];
  element.addEventListener('click', tagClick, false);
}
