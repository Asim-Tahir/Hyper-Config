// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: 'stable',

    // default font size in pixels for all tabs
    fontSize: 18,

    // font family with optional fallbacks
    fontFamily: 'Ubuntu Mono derivative Powerline',

    // default font weight: 'normal' or 'bold'
    fontWeight: 'normal',

    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: 'bold',

    // line height as a relative unit
    lineHeight: 1,

    // letter spacing as a relative unit
    letterSpacing: 0,

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: '#00ff91',

    // terminal text color under BLOCK cursor
    cursorAccentColor: '#00ff91',

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: 'BEAM',

    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: true,

    // color of the text
    foregroundColor: '#0de86c',

    // terminal background color
    // opacity is only supported on macOS
    backgroundColor: 'rgb(54, 54, 54)',

    // terminal selection color
    selectionColor: 'rgba(255, 255, 255, 0.3)',

    // border color (window, tabs)
    borderColor: '#0de86c',

    // custom CSS to embed in the main window
    css: '',

    // custom CSS to embed in the terminal window
    termCSS: '',

    // if you're using a Linux setup which show native menus, set to false
    // default: `true` on Linux, `true` on Windows, ignored on macOS
    showHamburgerMenu: 'true',

    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: 'true',

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: '14px 16px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#222',
      red: '#f22121',
      green: '#02db63',
      yellow: '#fcdf23',
      blue: '#232efc',
      magenta: '#6022fc',
      cyan: '#20C5C6',
      white: '#C7C7C7',
      lightBlack: '#333',
      lightRed: '#f93e3e',
      lightGreen: '#35fc8e',
      lightYellow: '#fff53f',
      lightBlue: '#5461f7',
      lightMagenta: '#f756f6',
      lightCyan: '#49c6c6',
      lightWhite: '#FFFFFF'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // PowerShell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    //shellArgs: ["-ExecutionPolicy", "Bypass", "-NoLogo", "-NoProfile", "-NoExit", "-Command", "Invoke-Expression '. $env:ConEmuDir''\\..\\profile.ps1'''"], //cmder for powershell
    //shellArgs: ['/k', '%ConEmuDir%\\..\\init.bat'], cmder for cmd
  shellArgs: ['-i','--login'],
    //shellArgs: [''], //default args
    // for environment variables
    env: {
      'TERM':'cygwin',
      'HYPER_PASTE_SEPARATOR': ' & ',
    },

    // set to `false` for no bell
    //bell: 'SOUND',
    bell: 'SOUND',
    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: true,

    // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: true,

    // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    quickEdit: true,

    // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
    // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
    // (inside tmux or vim with mouse mode enabled for example).
    macOptionSelectionMode: 'force',

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // Whether to use the WebGL renderer. Set it to false to use canvas-based
    // rendering (slower, but supports transparent backgrounds)
    webGLRenderer: true,

    // for advanced config flags please refer to https://hyper.is/#cfg

    hyperBorder: {
      borderColors: ['#CFFF00', '#2AF598'],
      borderWidth: '5px',
      animate: true,
      animate: { duration: '10s',  /*default is 16s*/ },
      borderRadiusOuter: '15px',
      borderRadiusInner: '10px',
      borderAngle: '270deg'
     },

     hyperTabs: {
      trafficButtons: true,
      border: false,
      tabIcons: true,
      tabIconsColored: true,
      closeAlign: 'left',
      activityPulse: false
    },

    hyperStatusLine: {
      dirtyColor: 'salmon',
      aheadColor: 'ivory',
      footerTransparent: true
    },

    opacity: 0.93,

    systray: {
      hotkey: 'Ctrl+Shift+Space'
    },

    'hyper-stylesheet': {
       autoReload: true
    },

    hyperTabsMove: {
      moveLeft: 'ctrl+ğ',
      moveRight: ['ctrl+ü', 'r i g h t']
    }
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hyperpower',
    'hyperborder',
    'hyperterm-tabs',
    'hyperlinks',
    'hyper-fileio',
    'hyper-alt-click',
    'hyper-material-theme',
    'hyper-tabs-enhanced',
    'hyperterm-close-on-left',
    'hyper-tab-icons',
    //'hyper-vibrance',
    //'hyperterm-safepaste',
    'hyper-stylesheet',
    'hypertheme',
    'hyper-statusline',
    'hyper-opacity',
    'hyper-blink'
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  }
};
