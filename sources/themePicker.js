var option = {
  "autoConfig": false,

  "isUsed": function (generation) {
    return (generation.customTheme != null && generation.customTheme != "dark");
  },

  "getContent": function (generation) {
    return generation.customTheme;
  },

  "widget": "picker",
  "widgetConf": {
    "name": "picker",
    "label": "option.picker.widgetConf.label",
    "content": ["dark", "orange", "blue"],
    "handler": function(generation,result) {
      if(generation.customTheme != "dark") {
        generation.customTheme = result.content;
      }
    }
  },

  "optionDescription" : {
    "name": "option.themePicker.name",
    "icon": "images/options/themePickerIcon.png",
    "type": "enabler",
    "contentTag" : {
      "tag": "image",
      "location": "customTheme"
    },
    "price": customThemePrice
  }

};
