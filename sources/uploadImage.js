var option = {
  "autoConfig": false,

  "isUsed": function (generation) {
    return (generation.customImages != null && generation.customImages.length>0);
  },

  "computePrice": function (prices, generation) {
    var price = 0;
    if (generation.customImages) {
      price = prices.customImageUSD * generation.customImages.length;
    }
    return price;
  },

  "getContent": function (generation) {
    return generation.customImages;
  },

  "widget": "upload",
  "widgetConf": {
    "name": "uploadPictures",
    "label": "option.uploadImage.widgetConf.label",
    "validExtension": ".png, .jpg, .jpeg",
    "namespace": "image",
    "handler": function(generation,result) {
      if(generation.customImages == null)
        generation.customImages = [];
      var pictureFiles = generation.customImages;
      var pictureAlreadyExists = false;
      for(var i = 0; i < customImages.length && !pictureAlreadyExists; i++){
        if(pictureFiles[i].url == result.content.url)
          pictureAlreadyExists = true;
      }
      if(!pictureAlreadyExists)
        generation.customImages.push(result.content);
    }
  },

  "optionDescription" : {
    "name": "option.uploadImage.name",
    "icon": "images/options/uploadImageIcon.png",
    "type": "data",
    "contentTag" : {
      "tag": "image",
      "location": "customImages"
    },
    "price": customImagePrice
  }
};
