var fonts = [
  "Noto Sans JP",
  "Noto Serif JP",
  "M PLUS 1p",
  "Sawarabi Mincho",
  "M PLUS Rounded 1c",
  "Sawarabi Gothic",
  "Kosugi Maru",
  "Kosugi"
];
var template = [
  "{{imports}}",
  "",
  "/* Background colors*/",
  "body {",
  "  overflow: hidden;",
  "  {{background-color}}",
  "}",
  "/* Transparent background. */",
  "yt-live-chat-renderer {",
  "  background-color: transparent !important;",
  "}",
  "{{message-background-color}}",
  "{{owner-message-background-color}}",
  "{{moderator-message-background-color}}",
  "{{member-message-background-color}}",
  "",
  "yt-live-chat-author-chip #author-name {",
  "  background-color: transparent !important;",
  "}",
  "/* Outlines */",
  "yt-live-chat-renderer * {",
  "  {{show-outlines}}",
  '  font-family: "{{chat-font-family}}";',
  "  font-size: {{message-font-size}}px !important;",
  "  line-height: {{message-line-height}}px !important;",
  "}",
  "",
  "yt-live-chat-text-message-renderer #content,",
  "yt-live-chat-legacy-paid-message-renderer #content {",
  "  overflow: initial !important;",
  "}",
  "",
  "/* Hide scrollbar. */",
  "yt-live-chat-item-list-renderer #items{",
  "  overflow: hidden !important;",
  "}",
  "",
  "yt-live-chat-item-list-renderer #item-scroller{",
  "  overflow: hidden !important;",
  "}",
  "",
  "/* Hide header and input. */",
  "yt-live-chat-header-renderer,",
  "yt-live-chat-message-input-renderer {",
  "  display: none !important;",
  "}",
  "",
  "/* Reduce side padding. */",
  "yt-live-chat-text-message-renderer,",
  "yt-live-chat-legacy-paid-message-renderer {",
  "  {{padding}}",
  "}",
  "",
  "yt-live-chat-paid-message-renderer #header {",
  "  {{padding}}",
  "}",
  "",
  "/* Avatars. */",
  "yt-img-shadow #img,",
  "yt-live-chat-text-message-renderer #author-photo,",
  "yt-live-chat-paid-message-renderer #author-photo,",
  "yt-live-chat-legacy-paid-message-renderer #author-photo {",
  "  {{show-avatars}}",
  "  width: {{avatar-size}}px !important;",
  "  height: {{avatar-size}}px !important;",
  "  border-radius: {{avatar-size}}px !important;",
  "  margin-right: {{avatar-margin-right}}px !important;",
  "}",
  "",
  "/* Member Badge. */",
  "img.yt-live-chat-author-badge-renderer,",
  "div #image,",
  "svg.yt-icon {",
  "  width: {{member-badge-size}}px !important;",
  "  height: {{member-badge-size}}px !important;",
  "}",
  "",
  "/* Emoji. */",
  "img.yt-live-chat-text-message-renderer {",
  "  width: {{emoji-size}}px !important;",
  "  height: {{emoji-size}}px !important;",
  "}",
  "",
  "/* Hide badges. */",
  " yt-live-chat-text-message-renderer #author-badges {",
  "  {{hide-badges}}",
  "  vertical-align: text-top !important;",
  "}",
  "",
  "/* Timestamps. */",
  "yt-live-chat-text-message-renderer #timestamp {",
  "  {{show-timestamps}}",
  "  color: {{timestamp-color}} !important;",
  '  font-family: "{{chat-font-family}}";',
  "  font-size: {{timestamp-font-size}}px !important;",
  "  line-height: {{timestamp-line-height}}px !important;",
  "}",
  "",
  "/* Badges. */",
  'yt-live-chat-text-message-renderer #author-name[type="owner"],',
  "yt-live-chat-text-message-renderer #author-name.owner,",
  'yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="owner"] {',
  "  color: {{author-owner-color}} !important;",
  "}",
  "",
  'yt-live-chat-text-message-renderer #author-name[type="moderator"],',
  "yt-live-chat-text-message-renderer #author-name.moderator,",
  'yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="moderator"] {',
  "  color: {{author-moderator-color}} !important;",
  "}",
  "",
  'yt-live-chat-text-message-renderer #author-name[type="member"],',
  "yt-live-chat-text-message-renderer #author-name.member,",
  'yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="member"] {',
  "  color: {{author-member-color}} !important;",
  "}",
  "",
  "/* Channel names. */",
  "yt-live-chat-text-message-renderer #author-name {",
  "  {{show-chname}}",
  "  color: {{author-color}} !important;",
  '  font-family: "{{chat-font-family}}";',
  "  font-size: {{author-font-size}}px !important;",
  "  line-height: {{author-line-height}}px !important;",
  "}",
  "{{show-colon}}",
  "",
  "/* Messages. */",
  "yt-live-chat-text-message-renderer #message,",
  "yt-live-chat-text-message-renderer #message * {",
  "  color: {{message-color}} !important;",
  '  font-family: "{{chat-font-family}}";',
  "  font-size: {{message-font-size}}px !important;",
  "  line-height: {{message-line-height}}px !important;",
  "}",
  "{{message-newline}}",
  "",
  "/* SuperChat/Fan Funding Messages. */",
  "yt-live-chat-paid-message-renderer #author-name,",
  "yt-live-chat-paid-message-renderer #author-name *,",
  "yt-live-chat-legacy-paid-message-renderer #event-text,",
  "yt-live-chat-legacy-paid-message-renderer #event-text * {",
  "  color: {{fan-funding-first-line-color}} !important;",
  '  font-family: "{{chat-font-family}}";',
  "  font-size: {{fan-funding-first-line-font-size}}px !important;",
  "  line-height: {{fan-funding-first-line-line-height}}px !important;",
  "}",
  "",
  "yt-live-chat-paid-message-renderer #purchase-amount,",
  "yt-live-chat-paid-message-renderer #purchase-amount *,",
  "yt-live-chat-legacy-paid-message-renderer #detail-text,",
  "yt-live-chat-legacy-paid-message-renderer #detail-text * {",
  "  color: {{fan-funding-second-line-color}} !important;",
  '  font-family: "{{chat-font-family}}";',
  "  font-size: {{fan-funding-second-line-font-size}}px !important;",
  "  line-height: {{fan-funding-second-line-line-height}}px !important;",
  "}",
  "",
  "yt-live-chat-paid-message-renderer #content,",
  "yt-live-chat-paid-message-renderer #content * {",
  "  color: {{super-chat-content-color}} !important;",
  '  font-family: "{{chat-font-family}}";',
  "  font-size: {{super-chat-content-font-size}}px !important;",
  "  line-height: {{super-chat-content-line-height}}px !important;",
  "}",
  "",
  "yt-live-chat-paid-message-renderer {",
  "  margin: 4px 0 !important;",
  "}",
  "",
  "yt-live-chat-legacy-paid-message-renderer {",
  "  {{show-fan-funding-background}}",
  "}",
  "",
  "yt-live-chat-text-message-renderer a,",
  "yt-live-chat-legacy-paid-message-renderer a {",
  "  text-decoration: none !important;",
  "}",
  "",
  "yt-live-chat-text-message-renderer[is-deleted],",
  "yt-live-chat-legacy-paid-message-renderer[is-deleted] {",
  "  display: none !important;",
  "}",
  "",
  "yt-live-chat-ticker-renderer {",
  "  background-color: transparent !important;",
  "  box-shadow: none !important;",
  "}",
  "{{ticker}}",
  "",
  "yt-live-chat-ticker-paid-message-item-renderer,",
  "yt-live-chat-ticker-paid-message-item-renderer *,",
  "yt-live-chat-ticker-sponsor-item-renderer,",
  "yt-live-chat-ticker-sponsor-item-renderer * {",
  "  color: {{fan-funding-second-line-color}} !important;",
  '  font-family: "{{chat-font-family}}";',
  "}",
  "",
  "yt-live-chat-mode-change-message-renderer, ",
  "yt-live-chat-viewer-engagement-message-renderer, ",
  "yt-live-chat-restricted-participation-renderer {",
  "  display: none !important;",
  "}",
  "",
  "{{animations}}",
  "",
  "yt-live-chat-viewer-engagement-message-renderer{",
  "  display: none !important;",
  "}"
].join("\n");
var mustacheRegex = /{{(.*?)}}/g;
var getValue = function(id) {
  var input = document.querySelector("#" + id);
  if (input) {
    return input.value;
  }
  return id;
};
var isChecked = function(id) {
  return document.querySelector("#" + id).checked;
};
var textShadow = function(x, y, color) {
  return x + "px " + y + "px " + getValue("outline-color");
};
var callbacks = {
  imports: function() {
    return (
      '@import url("https://fonts.googleapis.com/css?family=' +
      getValue("chat-font-family").replace(/ /g, "+") +
      '&display=swap");'
    );
  },
  "chat-font-family": function() {
    return getValue("chat-font-family");
  },
  "show-outlines": function(id) {
    if (isChecked(id)) {
      var size = getValue("outline-size");
      if (size == 0) {
        return "";
      }
      var color = getValue("outline-color");
      var shadow = [];
      for (var x = -size; x <= size; x += Math.ceil(size / 4)) {
        for (var y = -size; y <= size; y += Math.ceil(size / 4)) {
          shadow.push(textShadow(x, y, color));
        }
      }
      return "text-shadow: " + shadow.join(",") + ";";
    }
    return "";
  },
  "outline-size": function() {
    return isChecked("show-outlines") ? getValue("outline-size") : 0;
  },
  "show-avatars": function(id) {
    if (!isChecked(id)) {
      return "display: none !important;";
    }
    return "";
  },
  "avatar-margin-right": function() {
    return getValue("avatar-size") / 4;
  },
  "show-chname": function(id) {
    if (!isChecked(id)) {
      return "display: none !important;";
    }
    return "";
  },
  "show-timestamps": function(id) {
    if (isChecked(id)) {
      return "display: inline !important;";
    }
    return "";
  },
  "hide-badges": function(id) {
    if (isChecked(id)) {
      return "display: none !important;";
    }
    return "";
  },
  "show-colon": function(id) {
    if (isChecked(id)) {
      return [
        "",
        "yt-live-chat-text-message-renderer #author-name::after {",
        '  content: ":";',
        "  margin-left: " + getValue("outline-size") + "px;",
        "}"
      ].join("\n");
    }
    return "";
  },
  "message-newline": function(id) {
    if (isChecked(id)) {
      return [
        "",
        "yt-live-chat-text-message-renderer #message {",
        "  display: block !important;",
        "}"
      ].join("\n");
    }
    return "";
  },
  "show-fan-funding-background": function(id) {
    if (isChecked(id)) {
      return [
        "background-color: " + getValue("author-member-color") + " !important;",
        "  margin: 4px 0 !important;"
      ].join("\n");
    } else {
      return [
        "background-color: transparent !important;",
        "  box-shadow: none !important;",
        "  margin: 0 !important;"
      ].join("\n");
    }
  },
  "member-badge-size": function() {
    return getValue("member-badge-size");
  },
  "emoji-size": function() {
    return getValue("emoji-size");
  },
  "author-line-height": function() {
    return (
      Number(getValue("author-line-height")) || getValue("author-font-size")
    );
  },
  "message-line-height": function() {
    return (
      Number(getValue("message-line-height")) || getValue("message-font-size")
    );
  },
  "timestamp-line-height": function() {
    return (
      Number(getValue("timestamp-line-height")) ||
      getValue("timestamp-font-size")
    );
  },
  "fan-funding-first-line-line-height": function() {
    return (
      Number(getValue("fan-funding-first-line-line-height")) ||
      getValue("fan-funding-first-line-font-size")
    );
  },
  "fan-funding-second-line-line-height": function() {
    return (
      Number(getValue("fan-funding-second-line-line-height")) ||
      getValue("fan-funding-second-line-font-size")
    );
  },
  "super-chat-content-line-height": function() {
    return (
      Number(getValue("super-chat-content-line-height")) ||
      getValue("super-chat-content-font-size")
    );
  },
  "background-color": function() {
    return (
      "background-color: " +
      getColorWithAlpha(
        getValue("background-color"),
        getValue("background-opacity")
      ) +
      ";"
    );
  },
  "message-background-color": function() {
    return getMessageColor();
  },
  "owner-message-background-color": function() {
    return getMessageColor("owner");
  },
  "moderator-message-background-color": function() {
    return getMessageColor("moderator");
  },
  "member-message-background-color": function() {
    return getMessageColor("member");
  },
  padding: function() {
    if (isChecked("background-color-bars")) {
      return "  padding-left: 20px !important;\n  padding-right: 4px !important;";
    } else {
      return "  padding-left: 4px !important;\n  padding-right: 4px !important;";
    }
  },
  ticker: function() {
    var ret = "";
    if (!isChecked("show-ticker")) {
      ret += [
        "yt-live-chat-ticker-renderer {",
        "  display: none !important;",
        "}",
        ""
      ].join("\n");
    }
    if (!isChecked("show-everything")) {
      ret += [
        "yt-live-chat-item-list-renderer {",
        "  display: none !important;",
        "}",
        ""
      ].join("\n");
    }
    return ret;
  },
  animations: function() {
    var ain = isChecked("animation-in");
    var aout = isChecked("animation-out");
    if (!ain && !aout) {
      return "";
    }

    var inTime = Number(getValue("animation-in-time"));
    var waitTime = Number(getValue("animation-wait-time")) * 1000;
    var outTime = Number(getValue("animation-out-time"));

    var time = 0;
    if (ain) {
      time += inTime;
    }

    if (aout) {
      time += waitTime;
      time += outTime;
    }

    var keyframes = [];
    var runningTime = 0;

    if (ain) {
      keyframes.push("0% { " + inStyle() + " }");
      runningTime += inTime;
      keyframes.push(
        (runningTime / time) * 100 + "% { opacity: 1; transform: none;}"
      );
    }

    if (aout) {
      runningTime += waitTime;
      keyframes.push(
        (runningTime / time) * 100 + "% { opacity: 1; transform: none;}"
      );
      runningTime += outTime;
      keyframes.push((runningTime / time) * 100 + "% { " + outStyle() + " }");
    }

    return [
      "@keyframes anim {",
      keyframes.join("\n"),
      "}",
      "",
      "yt-live-chat-text-message-renderer,",
      "yt-live-chat-legacy-paid-message-renderer {",
      "  animation: anim " + time + "ms;",
      "  animation-fill-mode: both;",
      "}",
      ""
    ].join("\n");
  }
};
var slide = function(scalar) {
  return (isChecked("animation-slide") ? 16 : -16) * scalar;
};
var inStyle = function() {
  var style = "opacity: 0;";
  if (isChecked("animation-slide") || isChecked("animation-reverse")) {
    style += " transform: translateX(" + slide(-1) + "px);";
  }
  return style;
};
var outStyle = function() {
  var style = "opacity: 0;";
  if (isChecked("animation-slide") || isChecked("animation-reverse")) {
    style += " transform: translateX(" + slide(1) + "px);";
  }
  return style;
};
var getColorWithAlpha = function(color, opacity) {
  var c = color.substring(1);
  return (
    "rgba(" +
    parseInt(c.substring(0, 2), 16) +
    "," +
    parseInt(c.substring(2, 4), 16) +
    "," +
    parseInt(c.substring(4, 6), 16) +
    "," +
    opacity +
    ")"
  );
};
var getMessageColor = function(type) {
  var typeSelector = "";
  var prefix = "";
  if (type) {
    typeSelector = '[author-type="' + type + '"]';
    prefix = type + "-";
  }

  var p = [];

  var opacity = getValue(prefix + "message-background-opacity");
  if (opacity != 0) {
    var color = getColorWithAlpha(
      getValue(prefix + "message-background-color"),
      opacity
    );

    if (isChecked("background-color-bars")) {
      p = [
        "yt-live-chat-text-message-renderer" + typeSelector + ",",
        "yt-live-chat-text-message-renderer" +
          typeSelector +
          "[is-highlighted] {",
        "  background-color: transparent !important;",
        "}",
        "",
        "yt-live-chat-text-message-renderer" + typeSelector + "::after {",
        "  border: 2px solid " + color + ";",
        '  content: "";',
        "  position: absolute;",
        "  display: block;",
        "  left: 8px;",
        "  top: 4px;",
        "  bottom: 4px;",
        "  width: 1px;",
        "  box-sizing: border-box;",
        "  border-radius: 2px;",
        "}",
        ""
      ];
    } else {
      p = [
        "yt-live-chat-text-message-renderer" + typeSelector + ",",
        "yt-live-chat-text-message-renderer" +
          typeSelector +
          "[is-highlighted] {",
        "  background-color: " + color + " !important;",
        "}",
        ""
      ];
    }
  } else {
    p = [
      "yt-live-chat-text-message-renderer" + typeSelector + ",",
      "yt-live-chat-text-message-renderer" +
        typeSelector +
        "[is-highlighted] {",
      "  background-color: transparent !important;",
      "}",
      ""
    ];
  }
  return p.join("\n");
};
var update = function(event) {
  var style = template.replace(mustacheRegex, function(match) {
    var id = match.substring(2, match.length - 2);
    if (callbacks[id]) {
      return callbacks[id](id);
    }
    return getValue(id);
  });
  document.querySelector("#output").value = style;
  var exampleStyle =
    style + "#fakebody {" + callbacks["background-color"]() + "}";

  if (event && event.target.id.indexOf("animation") != -1) {
    var style = "";
    if (isChecked("animation-in")) {
      style = inStyle();
    }
    document.querySelector("#example-styles").innerHTML =
      exampleStyle +
      "yt-live-chat-text-message-renderer, yt-live-chat-legacy-paid-message-renderer { animation: none !important; " +
      style +
      "}";
    window.setTimeout(function() {
      document.querySelector("#example-styles").innerHTML =
        exampleStyle +
        "yt-live-chat-text-message-renderer, yt-live-chat-legacy-paid-message-renderer { animation-delay: 200ms; }";
    }, 1);
  } else {
    document.querySelector("#example-styles").innerHTML =
      exampleStyle +
      "yt-live-chat-text-message-renderer, yt-live-chat-legacy-paid-message-renderer { animation: none !important; }";
  }
};
var inputs = document.querySelectorAll("input");
inputs.forEach(function(input) {
  input.addEventListener("change", update);
  input.addEventListener("input", update);
});
var selects = document.querySelectorAll("select");
selects.forEach(function(select) {
  fonts.forEach(function(font) {
    var option = document.createElement("option");
    if (font == select.dataset.default) {
      option.selected = true;
    }
    option.textContent = font;
    select.appendChild(option);
  });
  select.addEventListener("change", update);
});
document.querySelector("#animation-trigger").addEventListener("click", update);
update();
