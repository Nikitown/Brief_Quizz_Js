// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.ts":[function(require,module,exports) {
// Constants of the main containers
var startWrapper = document.getElementById("start-wrapper");
var quizWrapper = document.getElementById("quiz-wrapper");
var leaderboardWrapper = document.getElementById("leaderboard-wrapper");
// Constants of the start container
var username = document.getElementById("username");
var startBtn = document.getElementById("start-btn");
// Constants of the quiz container
var question = document.getElementById("question");
var answersWrapper = document.getElementById("answers-wrapper");
var nextBtn = document.getElementById("next-btn");
var progressBar = document.getElementById("progress-bar");
var retryBtn = document.getElementById("retry-btn");
var currentQuestion = 0;
var score = 0;
var progress = 0;
// Q&A
var questions = [{
  question: "Quel est le plus gros titre d'une page HTML?",
  answer1: "&lt;h1&gt;",
  answer2: "&lt;h6&gt;",
  answer3: "&lt;heading&gt;",
  correctAnswer: "a-1"
}, {
  question: "Quel élément HTML utilise t'on pour faire un line break?",
  answer1: "&lt;break&gt;",
  answer2: "&lt;br&gt;",
  answer3: "&lt;lb&gt;",
  correctAnswer: "a-2"
}, {
  question: "Choissisez l'élement HTML qui souligne l'importance d'un texte:",
  answer1: "&lt;b&gt;",
  answer2: "&lt;strong&gt;",
  answer3: "&lt;important&gt;",
  correctAnswer: "a-2"
}, {
  question: "Comment ouvre t-on un lien vers un nouvel onglet/fenêtre ?",
  answer1: "&lt;a href='url' target='new'&gt;",
  answer2: "&lt;a href='url' new&gt;",
  answer3: "&lt;a href='url' target='_blank'&gt;",
  correctAnswer: "a-3"
}, {
  question: "Parmi ces propositions, quels élements font tous parti de la famille <table>",
  answer1: "&lt;table&gt; &lt;tr&gt; &lt;td&gt;",
  answer2: "&lt;thead&gt; &lt;body&gt; &lt;tr&gt;",
  answer3: "&lt;table&gt; &lt;tr&gt; &lt;tt&gt;",
  correctAnswer: "a-1"
}, {
  question: "Les éléments en ligne sont normalement affichés sans commencer une nouvelle ligne.",
  answer1: "False",
  answer2: "True",
  answer3: "It depends...",
  correctAnswer: "a-2"
}, {
  question: "How do you add a background color for all &lt;h1&gt; elements?",
  answer1: "h1 {background-color: #FFFFFF;}",
  answer2: "h1.all {background-color: #FFFFFF;}",
  answer3: "all.h1 {background-color: #FFFFFF;}",
  correctAnswer: "a-1"
}, {
  question: "Quelle propriété CSS contrôle la taille de la police?",
  answer1: "font-size",
  answer2: "text-size",
  answer3: "text-style",
  correctAnswer: "a-1"
}, {
  question: "Comment affiche t-on un hyperlien sans l'underline?",
  answer1: "a {text-decoration: no-underline;}",
  answer2: "a {underline: none;}",
  answer3: "a {text-decoration: none;}",
  correctAnswer: "a-3"
}, {
  question: "Comment mettre en majuscule la première lettre de chaque phrase?",
  answer1: "text-style: capitalize",
  answer2: "text-transform: capitalize",
  answer3: "You can't do that with CSS",
  correctAnswer: "a-2"
}, {
  question: "When using the padding property; are you allowed to use negative values?",
  answer1: "Yes",
  answer2: "No",
  answer3: "It depends...",
  correctAnswer: "a-2"
}, {
  question: "How do you make a list that lists its items with squares?",
  answer1: "list-style-type: square;",
  answer2: "list: square;",
  answer3: "list-type: square;",
  correctAnswer: "a-1"
}, {
  question: "How do you write an IF statement?",
  answer1: "if i = 5",
  answer2: "if i == 5 then",
  answer3: "if (i == 5)",
  correctAnswer: "a-3"
}, {
  question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
  answer1: "if i <> 5",
  answer2: "if (i != 5)",
  answer3: "if (i <> 5)",
  correctAnswer: "a-2"
}, {
  question: "How does a FOR loop start?",
  answer1: "for (i = 0; i <= 5)",
  answer2: "for (i = 0; i <= 5; i++)",
  answer3: "for (i <= 5; i++)",
  correctAnswer: "a-2"
}, {
  question: "What is the correct way to write a JavaScript array?",
  answer1: 'var colors = ["red", "green", "blue"]',
  answer2: 'var colors = (1:"red", 2:"green", 3:"blue")',
  answer3: 'var colors = "red", "green", "blue"',
  correctAnswer: "a-1"
}, {
  question: "How do you round the number 7.25, to the nearest integer?",
  answer1: "Math.round(7.25)",
  answer2: "Math.rnd(7.25)",
  answer3: "round(7.25)",
  correctAnswer: "a-1"
}, {
  question: "How can you detect the client's browser name?",
  answer1: "client.navName",
  answer2: "navigator.appName",
  answer3: "browser.name",
  correctAnswer: "a-2"
}, {
  question: "What will the following code return: Boolean(10 > 9)",
  answer1: "true",
  answer2: "NaN",
  answer3: "false",
  correctAnswer: "a-1"
}, {
  question: "Is JavaScript case-sensitive?",
  answer1: "Yes",
  answer2: "No",
  answer3: "It depends...",
  correctAnswer: "a-1"
}];
// Username placeholder fade
username === null || username === void 0 ? void 0 : username.addEventListener("focus", function () {
  var usernamePlaceholder = document.getElementById("username-placeholder");
  if ((username === null || username === void 0 ? void 0 : username.value) == "") {
    usernamePlaceholder.style.cssText = "opacity: 0;";
  }
  username === null || username === void 0 ? void 0 : username.addEventListener("keypress", function (e) {
    if (e.keyCode == 13 && (username === null || username === void 0 ? void 0 : username.value) != "") {
      startBtn === null || startBtn === void 0 ? void 0 : startBtn.click();
    } else if (e.keyCode == 13 && (username === null || username === void 0 ? void 0 : username.value) == "") {
      startBtn === null || startBtn === void 0 ? void 0 : startBtn.click();
    }
  });
  username === null || username === void 0 ? void 0 : username.addEventListener("keypress", function () {
    if (usernamePlaceholder) {
      usernamePlaceholder.style.cssText = "opacity: 0;";
    }
  });
});
username === null || username === void 0 ? void 0 : username.addEventListener("blur", function () {
  var usernamePlaceholder = document.getElementById("username-placeholder");
  if ((username === null || username === void 0 ? void 0 : username.value) == "") {
    usernamePlaceholder.style.cssText = "opacity: 1;";
  }
});
// Start button action
startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener("click", function () {
  var username = document.getElementById("username");
  var usernamePlaceholder = document.getElementById("username-placeholder");
  // If the username is empty, don't show quiz
  if ((username === null || username === void 0 ? void 0 : username.value) == "") {
    username.style.cssText = "animation: enterUsername .5s ease-out; background: #f9e6e6; border-color: #f9dcdc;";
    if (usernamePlaceholder) {
      usernamePlaceholder.style.cssText = "animation: enterUsername .5s ease-out; color: #e8a1a1;";
    }
    // If it isn't empty, continue to quiz
  } else {
    if (startWrapper) {
      startWrapper.style.cssText = "display: none";
      if (quizWrapper) quizWrapper.style.cssText = "display: flex; flex-direction: column; justify-content: center;";
    }
  }
  setTimeout(function () {
    if (username) username.style.cssText = "animation: none";
    if (usernamePlaceholder) usernamePlaceholder.style.cssText = "animation: none";
  }, 500);
});
// Set a question and its answers
function setQuestions() {
  if (question) question.innerHTML = questions[currentQuestion].question;
  if (answersWrapper) answersWrapper.innerHTML = '<div id="answers-js-wrapper"><div class="answer-wrapper"><input type="radio" name="answers" class="answer-input" id="answer-1" checked><span class="checkmark"></span><label for="answer-1" class="answer" id="a-1">' + questions[currentQuestion].answer1 + '</label></div>' + '<div class="answer-wrapper"><input type="radio" name="answers" class="answer-input" id="answer-2"><span class="checkmark"></span><label for="answer-2" class="answer" id="a-2">' + questions[currentQuestion].answer2 + '</label></div>' + '<div class="answer-wrapper"><input type="radio" name="answers" class="answer-input" id="answer-3"><span class="checkmark"></span><label for="answer-3" class="answer" id="a-3">' + questions[currentQuestion].answer3 + '</label></div></div>';
}
setQuestions();
// // // Hide the question section & show "Right Answer" & "Wrong Answer" with a next button
// var quizzWrapper = document.getElementById("quizz-wrapper")
// Progress Bar
function addProgress() {
  if (progressBar) progressBar.style.cssText = "width:" + progress + "%";
  var progressCSS = document.getElementById("progress-css");
  var progressJS = document.getElementById("progress-js");
  // Add to the progress bar
  if (progress < 33) {
    progress += 4;
  } else if (progress >= 33 && progress < 60) {
    progress += 5;
  } else if (progress >= 60) {
    progress += 3.2;
  }
  // Change the background of the sections when the progress bar reaches them.
  if (progress >= 33) {
    progressCSS.style.cssText = "background: #e7ecfb; border-color: #d3dcf8; animation: progressSection 250ms ease-out;";
  } else {
    progressCSS.style.cssText = "background: #f3f5fc; border-color: #e7ecfb";
  }
  if (progress >= 60) {
    progressJS.style.cssText = "background: #e7ecfb; border-color: #d3dcf8; animation: progressSection 250ms ease-out;";
  } else {
    progressJS.style.cssText = "background: #f3f5fc; border-color: #e7ecfb";
  }
}
addProgress();
// See if the checked answer is correct
function checkAnswer() {
  var answerWrapper = document.querySelectorAll(".answers-wrapper");
  checkedAnswer = questions[currentQuestion].answer1;
  for (var i = 0; i < answerWrapper.length; i++) {
    answerWrapper[i].addEventListener("click", function (e) {
      try {
        thisAnswer = e.target;
        checkedAnswer = thisAnswer.closest("label").innerHTML;
      } catch (Exception) {}
    });
  }
}
checkAnswer();
// Next button click
nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener("click", function () {
  // Get the correct answer for the current question and check the first answer as the default one
  var correctAnswer = document.getElementById(questions[currentQuestion].correctAnswer).innerHTML;
  // If the current question isn't the last one, show the next one with its answers
  var lastQuestion = questions.length;
  if (currentQuestion + 1 != lastQuestion) {
    currentQuestion++;
    question.innerHTML = questions[currentQuestion].question;
    document.getElementById("a-1").innerHTML = questions[currentQuestion].answer1;
    document.getElementById("a-2").innerHTML = questions[currentQuestion].answer2;
    document.getElementById("a-3").innerHTML = questions[currentQuestion].answer3;
    // Check if the question is correct, if it is, add .5 to the global score
    if (checkedAnswer == correctAnswer) {
      score += .5;
    }
    setQuestions();
    // If the current question is the last question, check if it is correct
  } else {
    if (checkedAnswer == correctAnswer) {
      score += .5;
    }
    // Hide the quiz and show the leaderboard
    leaderboard();
  }
  checkAnswer();
  addProgress();
});
function leaderboard() {
  quizWrapper.style.display = "none";
  leaderboardWrapper.style.display = "block";
  var table = document.getElementById("table");
  table.innerHTML = table.innerHTML + "<tr><td class='table-username'>" + username.value + "</td> <td class='table-score'>" + score + "</td></tr>";
}
// Sort the leaderboard by score
sorted = false;
function sortScore() {
  if (!sorted) {
    sorted = true;
    var table = void 0,
      rows = void 0,
      switching = void 0,
      i = void 0,
      x = void 0,
      y = void 0,
      shouldSwitch = void 0;
    table = document.getElementById("table");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  } else if (sorted) {
    sorted = false;
    var table = void 0,
      rows = void 0,
      switching = void 0,
      i = void 0,
      x = void 0,
      y = void 0,
      shouldSwitch = void 0;
    table = document.getElementById("table");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
}
// Reset everything when the retry button is clicked
retryBtn === null || retryBtn === void 0 ? void 0 : retryBtn.addEventListener("click", function () {
  currentQuestion = 0;
  score = 0;
  progress = 0;
  leaderboardWrapper.style.display = "none";
  startWrapper.style.display = "block";
  username.value = "";
  setQuestions();
  checkAnswer();
  addProgress();
});
},{}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35813" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/Brief_Quizz_Js.77de5100.js.map