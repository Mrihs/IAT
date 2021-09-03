// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "keypress(Space)": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Welcome_Page",
      "content": "\u003Cheader style = \"font-size: x-large\"\u003E\n  \u003Ch1\u003E Zurodnungsaufgabe \u003Ch1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-horizontal-space-around content-vertical-center\" style = \"font-size: x-large\"\u003E\n  \n  \u003Cdiv\u003E Als nächstes erfolgt eine Zurodnungsaufgabe. \u003Cbr\u003E\n    Diese Aufgabe besteht aus drei Durchgängen. \u003Cbr\u003E  \n    Bei diesen Aufgaben werden Sie verschiedene Wörter sehen, die Sie in verschiedene Kategorien einteilen müssen.  \u003Cbr\u003E \n    Für die Einteilung in die Kategorien werden Sie jeweils die Tasten \u003Cstrong\u003E \u003Ckbd\u003E F \u003C\u002Fkbd\u003E \u003C\u002Fstrong\u003E und \u003Cstrong\u003E \u003Ckbd\u003E J \u003C\u002Fkbd\u003E \u003C\u002Fstrong\u003E verwenden. \n  \u003Cbr\u003E\n  \u003Cbr\u003E  \n  \u003Cbr\u003E\n  \u003Cbr\u003E  \nSie werden vor jedem Durchgang nochmals eine genaue Anweisung erhalten.\n\u003Cbr\u003E \nBitte Lesen Sie die Anweisungen jeweils genau durch. \n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\n\u003Cfooter style = \"font-size: x-large\"\u003E\n    Drücken Sie die \u003Ckbd\u003E Leertaste \u003C\u002Fkbd\u003E um weiter zu fahren. \n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "keypress(Space)": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Real_Fake_Introduction",
      "content": "\u003Cheader style = \"font-size: x-large\"\u003E\n  \u003Ch1\u003E Es erfolgt nun der erste Durchgang \u003Ch1\u003E\n\u003C\u002Fheader\u003E\n\n\n\n\u003Cmain class=\"content-horizontal-space-around content-vertical-space-between\" style = \"font-size: x-large\"\u003E\n  \u003Cdiv class = w-100\u003E Sie werden verschiedene Wörter sehen. Diese können entweder der Kategorie \u003Cstrong\u003Ewahr\u003C\u002Fstrong\u003E oder \u003Cstrong\u003Eunwahr\u003C\u002Fstrong\u003E zugeordnet werden. \u003Cbr\u003E\n  Weisen Sie die Wörter der entsprechenden Kategorie zu.\n    \u003Cbr\u003E\n    \u003Cbr\u003E\n    \u003Cbr\u003E\n\n  Bitte drücken Sie die folgenden Tasten zur Zuordnung: \n    \u003Cbr\u003E\n  Drücken Sie die Taste \u003Cstrong\u003E \u003Ckbd\u003E F \u003C\u002Fkbd\u003E \u003C\u002Fstrong\u003E um ein Wort der Kategorie \u003Cstrong\u003Ewahr\u003C\u002Fstrong\u003E zuzordnen.\n    \u003Cbr\u003E\n  Drücken Sie die Taste \u003Cstrong\u003E \u003Ckbd\u003E J \u003C\u002Fkbd\u003E \u003C\u002Fstrong\u003E um ein Wort der Kategorie \u003Cstrong\u003Efalsch\u003C\u002Fstrong\u003E zuzordnen.\n  \u003Cbr\u003E\n  \u003Cbr\u003E\n  \u003Cbr\u003E\n  \u003Cbr\u003E\n\n\n  \u003Cstrong\u003E Bitten antworten Sie so schnell und so korrekt wie möglich. \u003C\u002Fstrong\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\n\n\u003Cfooter style = \"font-size: x-large\"\u003E\nDücken Sie die \u003Ckbd\u003E Leertaste \u003C\u002Fkbd\u003E zum Starten. \n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Real_Fake_Start_Keyframe",
      "timeout": "500"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "word": "wahr",
          "Button": "Left"
        },
        {
          "word": "echt",
          "Button": "Left"
        },
        {
          "word": "wirklich",
          "Button": "Left"
        },
        {
          "word": "existent",
          "Button": "Left"
        },
        {
          "word": "unwahr",
          "Button": "Right"
        },
        {
          "word": "fiktiv",
          "Button": "Right"
        },
        {
          "word": "imaginär",
          "Button": "Right"
        },
        {
          "word": "illusorisch",
          "Button": "Right"
        }
      ],
      "sample": {
        "mode": "draw",
        "n": "40"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Real_Fake",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Real_Fake_Trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 775,
                "height": 75,
                "stroke": "#dddddd",
                "strokeWidth": 1,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 37.38,
                "height": 72.32,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "64",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -325,
                "top": 250,
                "angle": 0,
                "width": 115,
                "height": 65,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "rect",
                "left": 325,
                "top": 250,
                "angle": 0,
                "width": 115,
                "height": 65,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 300,
                "top": 250,
                "angle": 0,
                "width": 40.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "irreal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -300,
                "top": 250,
                "angle": 0,
                "width": 30.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "real",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": 350,
                "top": 250,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 350,
                "top": 250,
                "angle": 0,
                "width": 28.68,
                "height": 29.29,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Taste\nJ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "12",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -350,
                "top": 250,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": -350,
                "top": 250,
                "angle": 0,
                "width": 28.68,
                "height": 29.29,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Taste\nJ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "12",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Real_Fake_Fixation_Cross",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 775,
                "height": 75,
                "stroke": "#dddddd",
                "strokeWidth": 1,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 601.16,
                "height": 72.32,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${parameters.word}",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "64",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -325,
                "top": 250,
                "angle": 0,
                "width": 115,
                "height": 65,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "rect",
                "left": 325,
                "top": 250,
                "angle": 0,
                "width": 115,
                "height": 65,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 300,
                "top": 250,
                "angle": 0,
                "width": 40.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "irreal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -300,
                "top": 250,
                "angle": 0,
                "width": 30.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "real",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": 350,
                "top": 250,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 350,
                "top": 250,
                "angle": 0,
                "width": 28.68,
                "height": 29.29,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Taste\nJ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "12",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -350,
                "top": 250,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": -350,
                "top": 250,
                "angle": 0,
                "width": 28.68,
                "height": 29.29,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Taste\nJ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "12",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(f)": "Left",
              "keypress(j)": "Right"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Real_Fake_Stimuli"
          }
        ]
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Real_Fake_End_Keyframe",
      "timeout": "500"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "keypress(Space)": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "RealGod_Fake_Introduction",
      "content": "\u003Cheader style = \"font-size: x-large\"\u003E\n  \u003Ch1\u003E Nun erfolgt der zweite Durchgang \u003Ch1\u003E\n\u003C\u002Fheader\u003E\n\n\n\n\u003Cmain class=\"content-horizontal-space-around content-vertical-space-between\" style = \"font-size: x-large\"\u003E\n  \u003Cdiv class = w-100\u003E Sie werden verschiedene Wörter sehen. Diese können entweder der Kategorie \u003Cstrong\u003Ewahr\u003C\u002Fstrong\u003E, \u003Cstrong\u003Eunwahr\u003C\u002Fstrong\u003E oder \u003Cstrong\u003EGott\u003C\u002Fstrong\u003E zugeordnet werden. \u003Cbr\u003E\n  Weisen Sie die Wörter der entsprechenden Kategorie zu.\n  \u003Cbr\u003E\n  \u003Cbr\u003E\n  \u003Cbr\u003E\n\n  Bitte drücken Sie die folgenden Tasten zur Zuordnung: \n  \u003Cbr\u003E\n  Drücken Sie die Taste \u003Cstrong\u003E \u003Ckbd\u003E F \u003C\u002Fkbd\u003E \u003C\u002Fstrong\u003E um ein Wort den Kategorien \u003Cstrong\u003E wahr \u003C\u002Fstrong\u003E oder \u003Cstrong\u003E Gott \u003C\u002Fstrong\u003E zuzordnen.\n  \u003Cbr\u003E\n  Drücken Sie die Taste \u003Cstrong\u003E \u003Ckbd\u003E J \u003C\u002Fkbd\u003E \u003C\u002Fstrong\u003E um ein Wort der Kategorie \u003Cstrong\u003E falsch \u003C\u002Fstrong\u003E zuzordnen.\n  \u003Cbr\u003E\n  \u003Cbr\u003E\n  \u003Cbr\u003E\n  \u003Cbr\u003E\n\n\n  \u003Cstrong\u003E Bitten antworten Sie so schnell und so korrekt wie möglich. \u003C\u002Fstrong\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\n\n\u003Cfooter style = \"font-size: x-large\"\u003E\nDücken Sie die \u003Ckbd\u003E Leertaste \u003C\u002Fkbd\u003E zum Starten. \n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "RealGod_Fake_Start_Keyframe",
      "timeout": "500"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "word": "wahr",
          "Button": "Left"
        },
        {
          "word": "echt",
          "Button": "Left"
        },
        {
          "word": "wirklich",
          "Button": "Left"
        },
        {
          "word": "existent",
          "Button": "Left"
        },
        {
          "word": "unwahr",
          "Button": "Right"
        },
        {
          "word": "fiktiv",
          "Button": "Right"
        },
        {
          "word": "imaginär",
          "Button": "Right"
        },
        {
          "word": "illusorisch",
          "Button": "Right"
        },
        {
          "word": "unwahr",
          "Button": "Right"
        },
        {
          "word": "fiktiv",
          "Button": "Right"
        },
        {
          "word": "imaginär",
          "Button": "Right"
        },
        {
          "word": "illusorisch",
          "Button": "Right"
        },
        {
          "word": "Gott",
          "Button": "Left"
        },
        {
          "word": "Herr",
          "Button": "Left"
        },
        {
          "word": "Allmächtiger",
          "Button": "Left"
        },
        {
          "word": "Schöpfer",
          "Button": "Left"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "80"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "RealGod_Fake_Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "RealGod_Fake_Trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 775,
                "height": 75,
                "stroke": "#dddddd",
                "strokeWidth": 1,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 37.38,
                "height": 72.32,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "64",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -325,
                "top": 250,
                "angle": 0,
                "width": 115,
                "height": 65,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "rect",
                "left": 325,
                "top": 250,
                "angle": 0,
                "width": 115,
                "height": 65,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 300,
                "top": 250,
                "angle": 0,
                "width": 40.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "irreal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -300,
                "top": 250,
                "angle": 0,
                "width": 34.01,
                "height": 43.93,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Gott\nreal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": 350,
                "top": 250,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 350,
                "top": 250,
                "angle": 0,
                "width": 28.68,
                "height": 29.29,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Taste\nJ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "12",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -350,
                "top": 250,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": -350,
                "top": 250,
                "angle": 0,
                "width": 28.68,
                "height": 29.29,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Taste\nJ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "12",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "RealGod_Fake_Fixation_Cross",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 775,
                "height": 75,
                "stroke": "#dddddd",
                "strokeWidth": 1,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 601.16,
                "height": 72.32,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${parameters.word}",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "64",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -325,
                "top": 250,
                "angle": 0,
                "width": 115,
                "height": 65,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "rect",
                "left": 325,
                "top": 250,
                "angle": 0,
                "width": 115,
                "height": 65,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 300,
                "top": 250,
                "angle": 0,
                "width": 40.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "irreal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -300,
                "top": 250,
                "angle": 0,
                "width": 34.01,
                "height": 43.93,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Gott\nreal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": 350,
                "top": 250,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 350,
                "top": 250,
                "angle": 0,
                "width": 28.68,
                "height": 29.29,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Taste\nJ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "12",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -350,
                "top": 250,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": -350,
                "top": 250,
                "angle": 0,
                "width": 28.68,
                "height": 29.29,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Taste\nJ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "12",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(f)": "Left",
              "keypress(j)": "Right"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "RealGod_Fake_Stimuli"
          }
        ]
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "RealGod_Fake_End_Keyframe",
      "timeout": "500"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "keypress(Space)": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Real_FakeGod_Introduction",
      "content": "\u003Cheader style = \"font-size: x-large\"\u003E\n  \u003Ch1\u003E Nun erfolgt der dritte Durchgang \u003Ch1\u003E\n\u003C\u002Fheader\u003E\n\n\n\n\u003Cmain class=\"content-horizontal-space-around content-vertical-space-between\" style = \"font-size: x-large\"\u003E\n  \u003Cdiv class = w-100\u003E Sie werden verschiedene Wörter sehen. Diese können entweder der Kategorie \u003Cstrong\u003Ewahr\u003C\u002Fstrong\u003E, \u003Cstrong\u003Eunwahr\u003C\u002Fstrong\u003E oder \u003Cstrong\u003EGott\u003C\u002Fstrong\u003E zugeordnet werden. \u003Cbr\u003E\n  Weisen Sie die Wörter der entsprechenden Kategorie zu.\n    \u003Cbr\u003E\n    \u003Cbr\u003E\n    \u003Cbr\u003E\n\n  Bitte drücken Sie die folgenden Tasten zur Zuordnung: \n    \u003Cbr\u003E\n  Drücken Sie die Taste \u003Cstrong\u003E \u003Ckbd\u003E F \u003C\u002Fkbd\u003E \u003C\u002Fstrong\u003E um ein Wort der Kategorie \u003Cstrong\u003Ewahr\u003C\u002Fstrong\u003E zuzordnen.\n    \u003Cbr\u003E\n  Drücken Sie die Taste \u003Cstrong\u003E \u003Ckbd\u003E J \u003C\u002Fkbd\u003E \u003C\u002Fstrong\u003E um ein Wort den Kategorien \u003Cstrong\u003Efalsch\u003C\u002Fstrong\u003E oder \u003Cstrong\u003EGott\u003C\u002Fstrong\u003E zuzordnen.\n  \u003Cbr\u003E\n  \u003Cbr\u003E\n  \u003Cbr\u003E\n  \u003Cbr\u003E\n\n\n  \u003Cstrong\u003E Bitten antworten Sie so schnell und so korrekt wie möglich. \u003C\u002Fstrong\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\n\n\u003Cfooter style = \"font-size: x-large\"\u003E\nDücken Sie die \u003Ckbd\u003E Leertaste \u003C\u002Fkbd\u003E zum Starten. \n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Real_FakeGod_Start_Keyframe",
      "timeout": "500"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "word": "wahr",
          "Button": "Left"
        },
        {
          "word": "echt",
          "Button": "Left"
        },
        {
          "word": "wirklich",
          "Button": "Left"
        },
        {
          "word": "existent",
          "Button": "Left"
        },
        {
          "word": "wahr",
          "Button": "Left"
        },
        {
          "word": "echt",
          "Button": "Left"
        },
        {
          "word": "wirklich",
          "Button": "Left"
        },
        {
          "word": "existent",
          "Button": "Left"
        },
        {
          "word": "unwahr",
          "Button": "Right"
        },
        {
          "word": "fiktiv",
          "Button": "Right"
        },
        {
          "word": "imaginär",
          "Button": "Right"
        },
        {
          "word": "illusorisch",
          "Button": "Right"
        },
        {
          "word": "Gott",
          "Button": "Right"
        },
        {
          "word": "Herr",
          "Button": "Right"
        },
        {
          "word": "Allmächtiger",
          "Button": "Right"
        },
        {
          "word": "Schöpfer",
          "Button": "Right"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "80"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Real_FakeGod_Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Real_FakeGod",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 775,
                "height": 75,
                "stroke": "#dddddd",
                "strokeWidth": 1,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 37.38,
                "height": 72.32,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "64",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -325,
                "top": 250,
                "angle": 0,
                "width": 115,
                "height": 65,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "rect",
                "left": 325,
                "top": 250,
                "angle": 0,
                "width": 115,
                "height": 65,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 300,
                "top": 250,
                "angle": 0,
                "width": 40.01,
                "height": 43.93,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Gott\nirreal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -300,
                "top": 250,
                "angle": 0,
                "width": 30.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "real",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": 350,
                "top": 250,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 350,
                "top": 250,
                "angle": 0,
                "width": 28.68,
                "height": 29.29,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Taste\nJ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "12",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -350,
                "top": 250,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": -350,
                "top": 250,
                "angle": 0,
                "width": 28.68,
                "height": 29.29,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Taste\nJ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "12",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Real_FakeGod_Fixation_Cross",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 775,
                "height": 75,
                "stroke": "#dddddd",
                "strokeWidth": 1,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 601.16,
                "height": 72.32,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${parameters.word}",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "64",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -325,
                "top": 250,
                "angle": 0,
                "width": 115,
                "height": 65,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "rect",
                "left": 325,
                "top": 250,
                "angle": 0,
                "width": 115,
                "height": 65,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 300,
                "top": 250,
                "angle": 0,
                "width": 40.01,
                "height": 43.93,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Gott\nirreal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -300,
                "top": 250,
                "angle": 0,
                "width": 30.01,
                "height": 20.34,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "real",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "18",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": 350,
                "top": 250,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": 350,
                "top": 250,
                "angle": 0,
                "width": 28.68,
                "height": 29.29,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Taste\nJ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "12",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -350,
                "top": 250,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": "#d6d6d6",
                "strokeWidth": 2,
                "fill": "#ebebeb"
              },
              {
                "type": "i-text",
                "left": -350,
                "top": 250,
                "angle": 0,
                "width": 28.68,
                "height": 29.29,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Taste\nJ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "12",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(f)": "Left",
              "keypress(j)": "Right"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Real_FakeGod_Fake_Stimuli"
          }
        ]
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Real_FakeGod_End_Keyframe",
      "timeout": "500"
    }
  ]
})

// Let's go!
study.run()