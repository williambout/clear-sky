(function(scope) {var Partly_Cloudy_Night = new Layer({"name":"Partly Cloudy Night","gradient":new Gradient({angle: 180, start: new Color('hsl(204, 32%, 82%)').multiplyAlpha(1), end: new Color('hsl(204, 63%, 20%)').multiplyAlpha(1)}),"backgroundColor":null,"width":375,"x":4750,"height":812,"constraintValues":{"left":4750,"height":812,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var Partly_Cloudy_Day = new Layer({"name":"Partly Cloudy Day","gradient":new Gradient({angle: 180, start: new Color('hsl(204, 32%, 82%)').multiplyAlpha(1), end: new Color('hsl(194, 66%, 76%)').multiplyAlpha(1)}),"backgroundColor":null,"width":375,"x":4275,"height":812,"constraintValues":{"left":4275,"height":812,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var Cloudy = new Layer({"name":"Cloudy","gradient":new Gradient({angle: 180, start: new Color('hsl(204, 32%, 82%)').multiplyAlpha(1), end: new Color('hsl(194, 52%, 93%)').multiplyAlpha(1)}),"backgroundColor":null,"width":375,"x":3800,"height":812,"constraintValues":{"left":3800,"height":812,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var Fog = new Layer({"name":"Fog","gradient":new Gradient({angle: 180, start: new Color('hsl(0, 0%, 100%)').multiplyAlpha(1), end: new Color('hsl(204, 15%, 86%)').multiplyAlpha(1)}),"backgroundColor":null,"width":375,"x":3325,"height":812,"constraintValues":{"left":3325,"height":812,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var Wind = new Layer({"name":"Wind","gradient":new Gradient({angle: 205, start: new Color('hsl(204, 19%, 62%)').multiplyAlpha(1), end: new Color('hsl(204, 24%, 84%)').multiplyAlpha(1)}),"backgroundColor":null,"width":375,"x":2850,"height":812,"constraintValues":{"left":2850,"height":812,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var Sleet = new Layer({"name":"Sleet","gradient":new Gradient({angle: 180, start: new Color('hsl(204, 21%, 37%)').multiplyAlpha(1), end: new Color('hsl(204, 12%, 50%)').multiplyAlpha(1)}),"backgroundColor":null,"width":375,"x":2375,"height":812,"constraintValues":{"left":2375,"height":812,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var Snow = new Layer({"name":"Snow","gradient":new Gradient({angle: 180, start: new Color('hsl(204, 100%, 97%)').multiplyAlpha(1), end: new Color('hsl(204, 54%, 96%)').multiplyAlpha(1)}),"backgroundColor":null,"width":375,"x":1900,"height":812,"constraintValues":{"left":1900,"height":812,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var Rain = new Layer({"name":"Rain","gradient":new Gradient({angle: 180, start: new Color('hsl(204, 21%, 37%)').multiplyAlpha(1), end: new Color('hsl(204, 12%, 50%)').multiplyAlpha(1)}),"backgroundColor":null,"width":375,"x":1425,"height":812,"constraintValues":{"left":1425,"height":812,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var Clear_Night = new Layer({"name":"Clear Night","gradient":new Gradient({angle: 180, start: new Color('hsl(0, 0%, 0%)').multiplyAlpha(1), end: new Color('hsl(204, 78%, 28%)').multiplyAlpha(1)}),"backgroundColor":null,"width":375,"x":950,"height":812,"constraintValues":{"left":950,"height":812,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var Clear_Day = new Layer({"name":"Clear Day","gradient":new Gradient({angle: 180, start: new Color('hsl(204, 100%, 59%)').multiplyAlpha(1), end: new Color('hsl(194, 100%, 95%)').multiplyAlpha(1)}),"backgroundColor":null,"width":375,"x":475,"height":812,"constraintValues":{"left":475,"height":812,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var Apple_iPhone_X = new Layer({"backgroundColor":"rgba(255,255,255,1)","width":375,"height":812,"constraintValues":{"height":812,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var gradient = new Layer({"parent":Apple_iPhone_X,"name":"gradient","gradient":new Gradient({angle: 180, start: new Color('hsl(204, 100%, 65%)').multiplyAlpha(1), end: new Color('hsl(194, 74%, 90%)').multiplyAlpha(1)}),"backgroundColor":null,"width":375,"height":812,"constraintValues":{"height":812,"centerAnchorX":0.5,"width":375,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid"});var info = new Layer({"parent":gradient,"name":"info","backgroundColor":null,"width":318,"x":24,"height":228,"constraintValues":{"left":24,"height":228,"centerAnchorX":0.48799999999999999,"width":318,"right":33,"top":null,"centerAnchorY":0.19211822660098521},"blending":"normal","clip":false,"borderStyle":"solid","y":42});var __layer_0__ = new SVGLayer({"parent":info,"name":".SVGLayer","backgroundColor":"hsl(0, 0%, 100%)","width":11,"strokeWidth":2,"htmlIntrinsicSize":{"height":11,"width":11},"rotation":null,"height":11,"fill":"hsl(0, 0%, 100%)","opacity":null,"y":162,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"11\" height=\"11\"><path d=\"M 11 0 L 5.789 11 L 5.5 5.789 L 0 5.211 Z\" name=\"Shape\"><\/path><\/svg>"});var Current_City = new TextLayer({"parent":info,"name":"Current City","backgroundColor":null,"width":111,"x":16,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"17px","WebkitTextFillColor":"rgb(255, 255, 255)","whiteSpace":"pre","letterSpacing":"-0.4px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Medium\", \"SFProText-Medium\", \"SFUIText-Medium\", \".SFUIText-Medium\", sans-serif"},"startIndex":0,"endIndex":13}],"text":"San Francisco"}],"alignment":"left"},"height":20,"constraintValues":{"left":16,"height":20,"centerAnchorX":0.22484276729559749,"width":111,"bottom":51,"top":null,"centerAnchorY":0.73245614035087714},"blending":"normal","autoSize":true,"y":157});var current_weather = new TextLayer({"parent":info,"name":"current_weather","shadows":[{"x":0,"type":"text","y":1,"blur":4,"color":"hsla(0, 0%, 0%, 0.08)"}],"backgroundColor":null,"width":205,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"44px","WebkitTextFillColor":"rgb(255, 255, 255)","whiteSpace":"pre","letterSpacing":"0.5px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSDisplay-Bold\", \"SFProDisplay-Bold\", \"SFUIDisplay-Bold\", \".SFUIDisplay-Bold\", sans-serif"},"startIndex":0,"endIndex":10}],"text":"Light Rain"}],"alignment":"center"},"height":52,"constraintValues":{"height":52,"centerAnchorX":0.32232704402515722,"width":205,"bottom":141,"top":null,"centerAnchorY":0.26754385964912281},"blending":"normal","autoSize":true,"y":35});var probability_value = new TextLayer({"parent":info,"name":"probability_value","shadows":[{"x":0,"type":"text","y":1,"blur":4,"color":"hsla(0, 0%, 0%, 0.03)"}],"backgroundColor":null,"width":99,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"44px","WebkitTextFillColor":"hsla(0, 0%, 100%, 0.5)","whiteSpace":"pre","letterSpacing":"0.5px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Bold\", \"SFProText-Bold\", \"SFUIText-Bold\", \".SFUIText-Bold\", sans-serif"},"startIndex":0,"endIndex":3}],"text":"33%"}],"alignment":"center"},"height":52,"constraintValues":{"height":52,"centerAnchorX":0.15566037735849056,"width":99,"bottom":80,"top":null,"centerAnchorY":0.53508771929824561},"blending":"normal","autoSize":true,"y":96});var Time_Indicator = new TextLayer({"parent":info,"name":"Time Indicator","backgroundColor":null,"width":87,"x":142,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"17px","WebkitTextFillColor":"hsl(0, 0%, 100%)","whiteSpace":"pre","letterSpacing":"-0.4px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Medium\", \"SFProText-Medium\", \"SFUIText-Medium\", \".SFUIText-Medium\", sans-serif"},"startIndex":0,"endIndex":10}],"text":"10 minutes"}],"alignment":"left"},"height":20,"constraintValues":{"left":142,"height":20,"centerAnchorX":0.58333333333333337,"width":87,"bottom":46,"top":null,"centerAnchorY":0.75438596491228072},"blending":"normal","autoSize":true,"y":162});var spinner = new Layer({"parent":Apple_iPhone_X,"name":"spinner","backgroundColor":null,"width":28,"x":174,"height":28,"constraintValues":{"left":null,"height":28,"centerAnchorX":0.5013333333333333,"width":28,"top":28,"centerAnchorY":0.051724137931034482},"blending":"normal","clip":false,"borderStyle":"solid","y":28});var __layer_1__ = new SVGLayer({"parent":spinner,"name":".SVGLayer","backgroundColor":"hsl(0, 0%, 100%)","width":2,"strokeWidth":1,"x":13,"htmlIntrinsicSize":{"height":8,"width":2},"rotation":null,"height":8,"fill":"hsl(0, 0%, 100%)","opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"2\" height=\"8\"><path d=\"M 1 0 C 1.552 0 2 0.448 2 1 L 2 7 C 2 7.552 1.552 8 1 8 C 0.448 8 0 7.552 0 7 L 0 1 C 0 0.448 0.448 0 1 0 Z\" opacity=\"0\" name=\"Path\"><\/path><\/svg>"});var __layer_2__ = new SVGLayer({"parent":spinner,"name":".SVGLayer","backgroundColor":"hsl(0, 0%, 100%)","width":5.000333950508292,"strokeWidth":1,"x":16.499833024745797,"htmlIntrinsicSize":{"height":7.1964863732149098,"width":5.000333950508292},"rotation":null,"height":7.1964863732149098,"fill":"hsl(0, 0%, 100%)","opacity":null,"y":1.741502775548156,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"5\" height=\"7.196\"><path d=\"M 4.5 0.134 C 4.978 0.41 5.142 1.022 4.866 1.5 L 1.866 6.696 C 1.59 7.175 0.978 7.338 0.5 7.062 C 0.022 6.786 -0.142 6.175 0.134 5.696 L 3.134 0.5 C 3.41 0.022 4.022 -0.142 4.5 0.134 Z\" opacity=\"0\" name=\"Path\"><\/path><\/svg>"});var __layer_3__ = new SVGLayer({"parent":spinner,"name":".SVGLayer","backgroundColor":"hsl(0, 0%, 100%)","width":7.196486373214924,"strokeWidth":1,"x":19.062010851236906,"htmlIntrinsicSize":{"height":5.000333950508284,"width":7.196486373214924},"rotation":null,"height":5.000333950508284,"fill":"hsl(0, 0%, 100%)","opacity":null,"y":6.4998330247459029,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"7.196\" height=\"5\"><path d=\"M 7.062 0.5 C 7.338 0.978 7.175 1.59 6.696 1.866 L 1.5 4.866 C 1.022 5.142 0.41 4.978 0.134 4.5 C -0.142 4.022 0.022 3.41 0.5 3.134 L 5.696 0.134 C 6.175 -0.142 6.786 0.022 7.062 0.5 Z\" opacity=\"0\" name=\"Path\"><\/path><\/svg>"});var __layer_4__ = new SVGLayer({"parent":spinner,"name":".SVGLayer","backgroundColor":"hsl(0, 0%, 100%)","width":8,"strokeWidth":1,"x":20,"htmlIntrinsicSize":{"height":2,"width":8},"rotation":null,"height":2,"fill":"hsl(0, 0%, 100%)","opacity":null,"y":13,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"8\" height=\"2\"><path d=\"M 8 1 C 8 1.552 7.552 2 7 2 L 1 2 C 0.448 2 0 1.552 0 1 C 0 0.448 0.448 0 1 0 L 7 0 C 7.552 0 8 0.448 8 1 Z\" opacity=\"0\" name=\"Path\"><\/path><\/svg>"});var __layer_5__ = new SVGLayer({"parent":spinner,"name":".SVGLayer","backgroundColor":"hsl(0, 0%, 100%)","width":7.1964863732149382,"strokeWidth":1,"x":19.062010851236892,"htmlIntrinsicSize":{"height":5.0003339505082813,"width":7.1964863732149382},"rotation":null,"height":5.0003339505082813,"fill":"hsl(0, 0%, 100%)","opacity":null,"y":16.499833024745897,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"7.196\" height=\"5\"><path d=\"M 7.062 4.5 C 6.786 4.978 6.175 5.142 5.696 4.866 L 0.5 1.866 C 0.022 1.59 -0.142 0.978 0.134 0.5 C 0.41 0.022 1.022 -0.142 1.5 0.134 L 6.696 3.134 C 7.175 3.41 7.338 4.022 7.062 4.5 Z\" opacity=\"0\" name=\"Path\"><\/path><\/svg>"});var __layer_6__ = new SVGLayer({"parent":spinner,"name":".SVGLayer","backgroundColor":"hsl(0, 0%, 100%)","width":5.0003339505082955,"strokeWidth":1,"x":16.499833024745797,"htmlIntrinsicSize":{"height":7.1964863732149311,"width":5.0003339505082955},"rotation":null,"height":7.1964863732149311,"fill":"hsl(0, 0%, 100%)","opacity":null,"y":19.062010851236909,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"5\" height=\"7.196\"><path d=\"M 4.5 7.062 C 4.022 7.338 3.41 7.175 3.134 6.696 L 0.134 1.5 C -0.142 1.022 0.022 0.41 0.5 0.134 C 0.978 -0.142 1.59 0.022 1.866 0.5 L 4.866 5.696 C 5.142 6.175 4.978 6.786 4.5 7.062 Z\" opacity=\"0\" name=\"Path\"><\/path><\/svg>"});var __layer_7__ = new SVGLayer({"parent":spinner,"name":".SVGLayer","backgroundColor":"hsl(0, 0%, 100%)","width":2,"strokeWidth":1,"x":13,"htmlIntrinsicSize":{"height":8,"width":2},"rotation":null,"height":8,"fill":"hsl(0, 0%, 100%)","opacity":null,"y":20,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"2\" height=\"8\"><path d=\"M 1 8 C 0.448 8 0 7.552 0 7 L 0 1 C 0 0.448 0.448 0 1 0 C 1.552 0 2 0.448 2 1 L 2 7 C 2 7.552 1.552 8 1 8 Z\" opacity=\"0\" name=\"Path\"><\/path><\/svg>"});var __layer_8__ = new SVGLayer({"parent":spinner,"name":".SVGLayer","backgroundColor":"hsl(0, 0%, 100%)","width":5.000333950508292,"strokeWidth":1,"x":6.4998330247458238,"htmlIntrinsicSize":{"height":7.1964863732149205,"width":5.000333950508292},"rotation":null,"height":7.1964863732149205,"fill":"hsl(0, 0%, 100%)","opacity":null,"y":19.062010851236902,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"5\" height=\"7.196\"><path d=\"M 0.5 7.062 C 0.022 6.786 -0.142 6.175 0.134 5.696 L 3.134 0.5 C 3.41 0.022 4.022 -0.142 4.5 0.134 C 4.978 0.41 5.142 1.022 4.866 1.5 L 1.866 6.696 C 1.59 7.175 0.978 7.338 0.5 7.062 Z\" opacity=\"0\" name=\"Path\"><\/path><\/svg>"});var __layer_9__ = new SVGLayer({"parent":spinner,"name":".SVGLayer","backgroundColor":"hsl(0, 0%, 100%)","width":7.1964863732149258,"strokeWidth":1,"x":1.7415027755481121,"htmlIntrinsicSize":{"height":5.0003339505082813,"width":7.1964863732149258},"rotation":null,"height":5.0003339505082813,"fill":"hsl(0, 0%, 100%)","opacity":null,"y":16.499833024745794,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"7.196\" height=\"5\"><path d=\"M 0.134 4.5 C -0.142 4.022 0.022 3.41 0.5 3.134 L 5.696 0.134 C 6.175 -0.142 6.786 0.022 7.062 0.5 C 7.338 0.978 7.175 1.59 6.696 1.866 L 1.5 4.866 C 1.022 5.142 0.41 4.978 0.134 4.5 Z\" opacity=\"0\" name=\"Path\"><\/path><\/svg>"});var __layer_10__ = new SVGLayer({"parent":spinner,"name":".SVGLayer","backgroundColor":"hsl(0, 0%, 100%)","width":8,"strokeWidth":1,"htmlIntrinsicSize":{"height":2,"width":8},"rotation":null,"height":2,"fill":"hsl(0, 0%, 100%)","opacity":null,"y":13,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"8\" height=\"2\"><path d=\"M 0 1 C 0 0.448 0.448 0 1 0 L 7 0 C 7.552 0 8 0.448 8 1 C 8 1.552 7.552 2 7 2 L 1 2 C 0.448 2 0 1.552 0 1 Z\" opacity=\"0\" name=\"Path\"><\/path><\/svg>"});var __layer_11__ = new SVGLayer({"parent":spinner,"name":".SVGLayer","backgroundColor":"hsl(0, 0%, 100%)","width":7.1964863732149258,"strokeWidth":1,"x":1.7415027755481121,"htmlIntrinsicSize":{"height":5.0003339505082867,"width":7.1964863732149258},"rotation":null,"height":5.0003339505082867,"fill":"hsl(0, 0%, 100%)","opacity":null,"y":6.4998330247459002,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"7.196\" height=\"5\"><path d=\"M 0.134 0.5 C 0.41 0.022 1.022 -0.142 1.5 0.134 L 6.696 3.134 C 7.175 3.41 7.338 4.022 7.062 4.5 C 6.786 4.978 6.175 5.142 5.696 4.866 L 0.5 1.866 C 0.022 1.59 -0.142 0.978 0.134 0.5 Z\" opacity=\"0\" name=\"Path\"><\/path><\/svg>"});var __layer_12__ = new SVGLayer({"parent":spinner,"name":".SVGLayer","backgroundColor":"hsl(0, 0%, 100%)","width":5.0003339505082911,"strokeWidth":1,"x":6.4998330247458229,"htmlIntrinsicSize":{"height":7.1964863732149063,"width":5.0003339505082911},"rotation":null,"height":7.1964863732149063,"fill":"hsl(0, 0%, 100%)","opacity":null,"y":1.7415027755481718,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"5\" height=\"7.196\"><path d=\"M 0.5 0.134 C 0.978 -0.142 1.59 0.022 1.866 0.5 L 4.866 5.696 C 5.142 6.175 4.978 6.786 4.5 7.062 C 4.022 7.338 3.41 7.175 3.134 6.696 L 0.134 1.5 C -0.142 1.022 0.022 0.41 0.5 0.134 Z\" opacity=\"0\" name=\"Path\"><\/path><\/svg>"});if(Sleet !== undefined){Sleet.__framerInstanceInfo = {"deviceName":"Apple iPhone X","framerClass":"Layer","hash":"#vekter|Sleet","targetName":"Sleet","vekterClass":"FrameNode","deviceType":"apple-iphone-x-space-gray"}};if(__layer_9__ !== undefined){__layer_9__.__framerInstanceInfo = {"hash":"#vekter|__layer_9__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(Fog !== undefined){Fog.__framerInstanceInfo = {"deviceName":"Apple iPhone X","framerClass":"Layer","hash":"#vekter|Fog","targetName":"Fog","vekterClass":"FrameNode","deviceType":"apple-iphone-x-space-gray"}};if(Clear_Day !== undefined){Clear_Day.__framerInstanceInfo = {"deviceName":"Apple iPhone X","framerClass":"Layer","hash":"#vekter|Clear_Day","targetName":"Clear_Day","vekterClass":"FrameNode","deviceType":"apple-iphone-x-space-gray"}};if(__layer_10__ !== undefined){__layer_10__.__framerInstanceInfo = {"hash":"#vekter|__layer_10__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_0__ !== undefined){__layer_0__.__framerInstanceInfo = {"hash":"#vekter|__layer_0__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(Snow !== undefined){Snow.__framerInstanceInfo = {"deviceName":"Apple iPhone X","framerClass":"Layer","hash":"#vekter|Snow","targetName":"Snow","vekterClass":"FrameNode","deviceType":"apple-iphone-x-space-gray"}};if(__layer_12__ !== undefined){__layer_12__.__framerInstanceInfo = {"hash":"#vekter|__layer_12__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(Apple_iPhone_X !== undefined){Apple_iPhone_X.__framerInstanceInfo = {"deviceName":"Apple iPhone X","framerClass":"Layer","hash":"#vekter|Apple_iPhone_X","targetName":"Apple_iPhone_X","vekterClass":"FrameNode","deviceType":"apple-iphone-x-space-gray"}};if(Rain !== undefined){Rain.__framerInstanceInfo = {"deviceName":"Apple iPhone X","framerClass":"Layer","hash":"#vekter|Rain","targetName":"Rain","vekterClass":"FrameNode","deviceType":"apple-iphone-x-space-gray"}};if(Wind !== undefined){Wind.__framerInstanceInfo = {"deviceName":"Apple iPhone X","framerClass":"Layer","hash":"#vekter|Wind","targetName":"Wind","vekterClass":"FrameNode","deviceType":"apple-iphone-x-space-gray"}};if(__layer_4__ !== undefined){__layer_4__.__framerInstanceInfo = {"hash":"#vekter|__layer_4__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(info !== undefined){info.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|info","targetName":"info","vekterClass":"FrameNode"}};if(Partly_Cloudy_Night !== undefined){Partly_Cloudy_Night.__framerInstanceInfo = {"deviceName":"Apple iPhone X","framerClass":"Layer","hash":"#vekter|Partly_Cloudy_Night","targetName":"Partly_Cloudy_Night","vekterClass":"FrameNode","deviceType":"apple-iphone-x-space-gray"}};if(Time_Indicator !== undefined){Time_Indicator.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|Time_Indicator","targetName":"Time_Indicator","vekterClass":"TextNode","text":"10 minutes"}};if(Clear_Night !== undefined){Clear_Night.__framerInstanceInfo = {"deviceName":"Apple iPhone X","framerClass":"Layer","hash":"#vekter|Clear_Night","targetName":"Clear_Night","vekterClass":"FrameNode","deviceType":"apple-iphone-x-space-gray"}};if(Partly_Cloudy_Day !== undefined){Partly_Cloudy_Day.__framerInstanceInfo = {"deviceName":"Apple iPhone X","framerClass":"Layer","hash":"#vekter|Partly_Cloudy_Day","targetName":"Partly_Cloudy_Day","vekterClass":"FrameNode","deviceType":"apple-iphone-x-space-gray"}};if(gradient !== undefined){gradient.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|gradient","targetName":"gradient","vekterClass":"FrameNode"}};if(__layer_7__ !== undefined){__layer_7__.__framerInstanceInfo = {"hash":"#vekter|__layer_7__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(probability_value !== undefined){probability_value.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|probability_value","targetName":"probability_value","vekterClass":"TextNode","text":"33%"}};if(__layer_2__ !== undefined){__layer_2__.__framerInstanceInfo = {"hash":"#vekter|__layer_2__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(spinner !== undefined){spinner.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|spinner","targetName":"spinner","vekterClass":"FrameNode"}};if(__layer_8__ !== undefined){__layer_8__.__framerInstanceInfo = {"hash":"#vekter|__layer_8__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(Cloudy !== undefined){Cloudy.__framerInstanceInfo = {"deviceName":"Apple iPhone X","framerClass":"Layer","hash":"#vekter|Cloudy","targetName":"Cloudy","vekterClass":"FrameNode","deviceType":"apple-iphone-x-space-gray"}};if(__layer_11__ !== undefined){__layer_11__.__framerInstanceInfo = {"hash":"#vekter|__layer_11__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(current_weather !== undefined){current_weather.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|current_weather","targetName":"current_weather","vekterClass":"TextNode","text":"Light Rain"}};if(__layer_1__ !== undefined){__layer_1__.__framerInstanceInfo = {"hash":"#vekter|__layer_1__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(Current_City !== undefined){Current_City.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|Current_City","targetName":"Current_City","vekterClass":"TextNode","text":"San Francisco"}};if(__layer_6__ !== undefined){__layer_6__.__framerInstanceInfo = {"hash":"#vekter|__layer_6__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_3__ !== undefined){__layer_3__.__framerInstanceInfo = {"hash":"#vekter|__layer_3__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_5__ !== undefined){__layer_5__.__framerInstanceInfo = {"hash":"#vekter|__layer_5__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {Partly_Cloudy_Night, Partly_Cloudy_Day, Cloudy, Fog, Wind, Sleet, Snow, Rain, Clear_Night, Clear_Day, Apple_iPhone_X, gradient, info, Current_City, current_weather, probability_value, Time_Indicator, spinner});scope["__vekterVariables"] = ["Partly_Cloudy_Night", "Partly_Cloudy_Day", "Cloudy", "Fog", "Wind", "Sleet", "Snow", "Rain", "Clear_Night", "Clear_Day", "Apple_iPhone_X", "gradient", "info", "Current_City", "current_weather", "probability_value", "Time_Indicator", "spinner"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);