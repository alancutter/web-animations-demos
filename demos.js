var demos = [
  {
    name: 'Starfield',
    polyfill: [
      {path: '/starfield-planes-polyfill.html', name: 'Parallax Starfield'},
      {path: '/starfield-indiv-polyfill.html', name: '500 Individual Stars'},
    ],
    native: [
      {path: '/starfield-planes.html', name: 'Parallax Starfield'},
      {path: '/starfield-indiv.html', name: '500 Individual Stars'},
    ],
  },
  {
    name: 'Rolio',
    description: [
      "Demonstrates seeking and redirecting a running animation. Press the arrow keys to direct the rolling ball.",
      "Note: This demo isn't interactive on a mobile device.",
    ],
  },
  // FIXME: Doesn't animate.
  // {name: 'Globe'},
  {
    name: 'Countries',
    path: 'countries',
  },
  {
    name: 'Animate.css',
    path: 'animate_css',
    polyfill: ['/?polyfill'],
    native: ['/'],
  },
  {
    name: 'Touch',
    description: [
        "Records touch events then plays them back as a keyframe animation.",
        "Note: Requires a touch screen.",
        ],
  },
  {name: 'Walking'},
  {
    name: 'Bounce',
    path: 'bounce-timing-function',
  },
  {name: 'Breakout'},
  {
    name: 'Rhythm',
    description: "Note: This demo isn't interactive on a mobile device.",
  },
  {name: 'Snowfall'},
  {
    name: 'Spinning Dots',
    path: 'spin',
    polyfill: ['/?polyfill'],
    native: ['/'],
  },

  //'components/web-animations-tools/wat-wat': 'wat',
  //'components/web-animations-tools/wat-bezier': 'Bezier',
  //'components/web-animations-tools/wat-step': 'Step',
  //'components/web-animations-tools/wat-keyframe-inspector': 'Keyframes',
  //'components/web-animations-tools/wat-tree': 'TreeView',
  //'components/web-animations-tools/wat-timeline': 'Timeline',
  //'components/web-animations-tools/wat-player-controls': 'Controls',
];
