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
})({"index.js":[function(require,module,exports) {
//this would be the object shape for storing the questions  
//you can change the questions to your own taste or even add more questions..
var questions = [{
  question: "How many days makes a week ?",
  optionA: "10 days",
  optionB: "14 days",
  optionC: "5 days",
  optionD: "7 days",
  correctOption: "optionD"
}, {
  question: "How many players are allowed on a soccer pitch ?",
  optionA: "10 players",
  optionB: "11 players",
  optionC: "9 players",
  optionD: "12 players",
  correctOption: "optionB"
}, {
  question: "Who was the first President of USA ?",
  optionA: "Donald Trump",
  optionB: "Barack Obama",
  optionC: "Abraham Lincoln",
  optionD: "George Washington",
  correctOption: "optionD"
}, {
  question: "30 days has ______ ?",
  optionA: "January",
  optionB: "December",
  optionC: "June",
  optionD: "August",
  correctOption: "optionC"
}, {
  question: "How manay hours can be found in a day ?",
  optionA: "30 hours",
  optionB: "38 hours",
  optionC: "48 hours",
  optionD: "24 hours",
  correctOption: "optionD"
}, {
  question: "Which is the longest river in the world ?",
  optionA: "River Nile",
  optionB: "Long River",
  optionC: "River Niger",
  optionD: "Lake Chad",
  correctOption: "optionA"
}, {
  question: "_____ is the hottest Continent on Earth ?",
  optionA: "Oceania",
  optionB: "Antarctica",
  optionC: "Africa",
  optionD: "North America",
  correctOption: "optionC"
}, {
  question: "Which country is the largest in the world ?",
  optionA: "Russia",
  optionB: "Canada",
  optionC: "Africa",
  optionD: "Egypt",
  correctOption: "optionA"
}, {
  question: "Which of these numbers is an odd number ?",
  optionA: "Ten",
  optionB: "Twelve",
  optionC: "Eight",
  optionD: "Eleven",
  correctOption: "optionD"
}, {
  question: "\"You Can't see me\" is a popular saying by",
  optionA: "Eminem",
  optionB: "Bill Gates",
  optionC: "Chris Brown",
  optionD: "John Cena",
  correctOption: "optionD"
}, {
  question: "Where is the world tallest building located ?",
  optionA: "Africa",
  optionB: "California",
  optionC: "Dubai",
  optionD: "Italy",
  correctOption: "optionC"
}, {
  question: "The longest river in the United Kingdom is ?",
  optionA: "River Severn",
  optionB: "River Mersey",
  optionC: "River Trent",
  optionD: "River Tweed",
  correctOption: "optionA"
}, {
  question: "How many permanent teeth does a dog have ?",
  optionA: "38",
  optionB: "42",
  optionC: "40",
  optionD: "36",
  correctOption: "optionB"
}, {
  question: "Which national team won the football World cup in 2018 ?",
  optionA: "England",
  optionB: "Brazil",
  optionC: "Germany",
  optionD: "France",
  correctOption: "optionD"
}, {
  question: "Which US state was Donald Trump Born ?",
  optionA: "New York",
  optionB: "California",
  optionC: "New Jersey",
  optionD: "Los Angeles",
  correctOption: "optionA"
}, {
  question: "How man states does Nigeria have ?",
  optionA: "24",
  optionB: "30",
  optionC: "36",
  optionD: "37",
  correctOption: "optionC"
}, {
  question: "____ is the capital of Nigeria ?",
  optionA: "Abuja",
  optionB: "Lagos",
  optionC: "Calabar",
  optionD: "Kano",
  correctOption: "optionA"
}, {
  question: "Los Angeles is also known as ?",
  optionA: "Angels City",
  optionB: "Shining city",
  optionC: "City of Angels",
  optionD: "Lost Angels",
  correctOption: "optionC"
}, {
  question: "What is the capital of Germany ?",
  optionA: "Georgia",
  optionB: "Missouri",
  optionC: "Oklahoma",
  optionD: "Berlin",
  correctOption: "optionD"
}, {
  question: "How many sides does an hexagon have ?",
  optionA: "Six",
  optionB: "Sevene",
  optionC: "Four",
  optionD: "Five",
  correctOption: "optionA"
}, {
  question: "How many planets are currently in the solar system ?",
  optionA: "Eleven",
  optionB: "Seven",
  optionC: "Nine",
  optionD: "Eight",
  correctOption: "optionD"
}, {
  question: "Which Planet is the hottest ?",
  optionA: "Jupitar",
  optionB: "Mercury",
  optionC: "Earth",
  optionD: "Venus",
  correctOption: "optionB"
}, {
  question: "where is the smallest bone in human body located?",
  optionA: "Toes",
  optionB: "Ears",
  optionC: "Fingers",
  optionD: "Nose",
  correctOption: "optionB"
}, {
  question: "How many hearts does an Octopus have ?",
  optionA: "One",
  optionB: "Two",
  optionC: "Three",
  optionD: "Four",
  correctOption: "optionC"
}, {
  question: "How many teeth does an adult human have ?",
  optionA: "28",
  optionB: "30",
  optionC: "32",
  optionD: "36",
  correctOption: "optionC"
}];
var shuffledQuestions = []; //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() {
  //function to shuffle and push 10 questions to shuffledQuestions array
  //app would be dealing with 10questions per session
  while (shuffledQuestions.length <= 9) {
    var random = questions[Math.floor(Math.random() * questions.length)];
    if (!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random);
    }
  }
}
var questionNumber = 1; //holds the current question number
var playerScore = 0; //holds the player score
var wrongAttempt = 0; //amount of wrong answers picked by player
var indexNumber = 0; //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
  handleQuestions();
  var currentQuestion = shuffledQuestions[index];
  document.getElementById("question-number").innerHTML = questionNumber;
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("display-question").innerHTML = currentQuestion.question;
  document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
}
function checkForAnswer() {
  var currentQuestion = shuffledQuestions[indexNumber]; //gets current Question 
  var currentQuestionAnswer = currentQuestion.correctOption; //gets current Question's answer
  var options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  var correctOption = null;
  options.forEach(function (option) {
    if (option.value === currentQuestionAnswer) {
      //get's correct's radio input with correct answer
      correctOption = option.labels[0].id;
    }
  });

  //checking to make sure a radio input has been checked or an option being chosen
  if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
    document.getElementById('option-modal').style.display = "flex";
  }

  //checking if checked radio button is same as answer
  options.forEach(function (option) {
    if (option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.backgroundColor = "green";
      playerScore++; //adding to player's score
      indexNumber++; //adding 1 to index so has to display next question..
      //set to delay question number till when next question loads
      setTimeout(function () {
        questionNumber++;
      }, 1000);
    } else if (option.checked && option.value !== currentQuestionAnswer) {
      var wrongLabelId = option.labels[0].id;
      document.getElementById(wrongLabelId).style.backgroundColor = "red";
      document.getElementById(correctOption).style.backgroundColor = "green";
      wrongAttempt++; //adds 1 to wrong attempts 
      indexNumber++;
      //set to delay question number till when next question loads
      setTimeout(function () {
        questionNumber++;
      }, 1000);
    }
  });
}

//called when the next button is called
function handleNextQuestion() {
  checkForAnswer(); //check if player picked right or wrong option
  unCheckRadioButtons();
  //delays next question displaying for a second just for some effects so questions don't rush in on player
  setTimeout(function () {
    if (indexNumber <= 9) {
      //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
      NextQuestion(indexNumber);
    } else {
      handleEndGame(); //ends game if index number greater than 9 meaning we're already at the 10th question
    }

    resetOptionBackground();
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  var options = document.getElementsByName("option");
  options.forEach(function (option) {
    document.getElementById(option.labels[0].id).style.backgroundColor = "";
  });
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  var options = document.getElementsByName("option");
  for (var i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

// function for when all questions being answered
function handleEndGame() {
  var remark = null;
  var remarkColor = null;

  // condition check for player remark and remark color
  if (playerScore <= 3) {
    remark = "Bad Grades, Keep Practicing.";
    remarkColor = "red";
  } else if (playerScore >= 4 && playerScore < 7) {
    remark = "Average Grades, You can do better.";
    remarkColor = "orange";
  } else if (playerScore >= 7) {
    remark = "Excellent, Keep the good work going.";
    remarkColor = "green";
  }
  var playerGrade = playerScore / 10 * 100;

  //data to display to score board
  document.getElementById('remarks').innerHTML = remark;
  document.getElementById('remarks').style.color = remarkColor;
  document.getElementById('grade-percentage').innerHTML = playerGrade;
  document.getElementById('wrong-answers').innerHTML = wrongAttempt;
  document.getElementById('right-answers').innerHTML = playerScore;
  document.getElementById('score-modal').style.display = "flex";
}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
  questionNumber = 1;
  playerScore = 0;
  wrongAttempt = 0;
  indexNumber = 0;
  shuffledQuestions = [];
  NextQuestion(indexNumber);
  document.getElementById('score-modal').style.display = "none";
}

//function to close warning modal
function closeOptionModal() {
  document.getElementById('option-modal').style.display = "none";
}
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45225" + '/');
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
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/Brief_Quizz_Js.e31bb0bc.js.map