function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{RSsZ:function(e,t,r){"use strict";r.r(t),r.d(t,"BilletRougeFrModule",(function(){return h}));var i=r("tyNb"),a=r("RQXf"),n=r("fas0");function o(e,t,r,i){return{key:"".concat(e,".etat-d-ame.").concat(t),x:r,y:i,width:2.5,styleToggle:["cross","filled-circle"],type:"checkbox"}}function c(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return[{key:"competences".concat(i,".").concat(e,"_label"),x:t,y:r,width:23.8,type:"text-input"},{key:"competences".concat(i,".").concat(e,"_value"),x:t+26.5,y:r,width:8,type:"number-input"}]}var s,u,p={gameId:"billet-rouge",sheetId:"fr",pageConfig:{pages:["page-1.png","page-2.png"],pageFormat:"A5",pageOrientation:"portrait",pageWidth:100},content:{pageCount:2,page1:[{key:"characterName",x:50,y:14.2,width:26,type:"text-input"},{key:"profil-quotidien-1",x:60,y:19.8,width:27,type:"text-input"},{key:"profil-quotidien-2",x:39.5,y:23.5,width:47.5,type:"text-input"},{key:"profil-quotidien-3",x:39.5,y:27.3,width:47.5,type:"text-input"},o("vertu","colere-4",25.5,35.05),o("vertu","colere-3",31.35,35.05),o("vertu","colere-2",37.2,35.05),o("vertu","colere-1",43.05,35.05),o("vertu","colere-flegme-0",48.9,35.05),o("vertu","flegme-1",54.75,35.05),o("vertu","flegme-2",60.6,35.05),o("vertu","flegme-3",66.45,35.05),o("vertu","flegme-4",72.3,35.05),o("vertu","peur-4",25.5,40.55),o("vertu","peur-3",31.35,40.55),o("vertu","peur-2",37.2,40.55),o("vertu","peur-1",43.05,40.55),o("vertu","peur-determination-0",48.9,40.55),o("vertu","determination-1",54.75,40.55),o("vertu","determination-2",60.6,40.55),o("vertu","determination-3",66.45,40.55),o("vertu","determination-4",72.3,40.55),o("vertu","egoisme-4",25.5,46.05),o("vertu","egoisme-3",31.35,46.05),o("vertu","egoisme-2",37.2,46.05),o("vertu","egoisme-1",43.05,46.05),o("vertu","egoisme-empathie-0",48.9,46.05),o("vertu","empathie-1",54.75,46.05),o("vertu","empathie-2",60.6,46.05),o("vertu","empathie-3",66.45,46.05),o("vertu","empathie-4",72.3,46.05),o("vertu","desespoir-4",25.5,51.55),o("vertu","desespoir-3",31.35,51.55),o("vertu","desespoir-2",37.2,51.55),o("vertu","desespoir-1",43.05,51.55),o("vertu","desespoir-esperance-0",48.9,51.55),o("vertu","esperance-1",54.75,51.55),o("vertu","esperance-2",60.6,51.55),o("vertu","esperance-3",66.45,51.55),o("vertu","esperance-4",72.3,51.55),{key:"vertu.sante.blessure-grave",x:63.8,y:56.9,width:2.5,style:"cross",type:"checkbox"},{key:"vertu.sante.blessure-legere",x:68.5,y:56.9,width:2.5,style:"cross",type:"checkbox"},{key:"vertu.sante.malus",x:74,y:58.5,width:10.7,type:"number-input"}].concat(_toConsumableArray(c("1",15,60.6)),_toConsumableArray(c("2",15,64.35)),_toConsumableArray(c("3",15,68.1)),_toConsumableArray(c("4",15,71.85)),_toConsumableArray(c("5",15,75.6)),_toConsumableArray(c("6",15,79.35)),_toConsumableArray(c("7",15,83.1)),_toConsumableArray(c("8",15,86.85)),_toConsumableArray(c("1",52.3,68.1,"-vice-alterees")),_toConsumableArray(c("2",52.3,71.85,"-vice-alterees")),_toConsumableArray(c("3",52.3,75.6,"-vice-alterees")),[{key:"confiance.oeil-de-londres",x:73,y:85,width:10.7,type:"number-input"},{key:"confiance.edimbourg",x:73,y:90,width:10.7,type:"number-input"}]),page2:[{key:"vice.identite",x:28.4,y:14.4,width:37,type:"text-input"},{key:"profil-criminel.1",x:36.2,y:18.2,width:29,type:"text-input"},{key:"profil-criminel.2",x:18,y:21.9,width:47,type:"text-input"},{key:"tentation.1",x:29.8,y:25.5,width:35,type:"text-input"},{key:"tentation.2",x:36.4,y:29.2,width:28.8,type:"text-input"},{key:"tentation.malus",x:25.8,y:29.5,width:7.5,type:"number-input"},o("vice","colere_4",25.5,35.05),o("vice","colere_3",31.35,35.05),o("vice","colere_2",37.2,35.05),o("vice","colere_1",43.05,35.05),o("vice","colere-flegme_0",48.9,35.05),o("vice","flegme_1",54.75,35.05),o("vice","flegme_2",60.6,35.05),o("vice","flegme_3",66.45,35.05),o("vice","flegme_4",72.3,35.05),o("vice","peur_4",25.5,40.55),o("vice","peur_3",31.35,40.55),o("vice","peur_2",37.2,40.55),o("vice","peur_1",43.05,40.55),o("vice","peur-determination_0",48.9,40.55),o("vice","determination_1",54.75,40.55),o("vice","determination_2",60.6,40.55),o("vice","determination_3",66.45,40.55),o("vice","determination_4",72.3,40.55),o("vice","egoisme_4",25.5,46.05),o("vice","egoisme_3",31.35,46.05),o("vice","egoisme_2",37.2,46.05),o("vice","egoisme_1",43.05,46.05),o("vice","egoisme-empathie_0",48.9,46.05),o("vice","empathie_1",54.75,46.05),o("vice","empathie_2",60.6,46.05),o("vice","empathie_3",66.45,46.05),o("vice","empathie_4",72.3,46.05),o("vice","desespoir_4",25.5,51.55),o("vice","desespoir_3",31.35,51.55),o("vice","desespoir_2",37.2,51.55),o("vice","desespoir_1",43.05,51.55),o("vice","desespoir-esperance_0",48.9,51.55),o("vice","esperance_1",54.75,51.55),o("vice","esperance_2",60.6,51.55),o("vice","esperance_3",66.45,51.55),o("vice","esperance_4",72.3,51.55),{key:"vice.sante.blessure-grave",x:29.1,y:56.9,width:2.5,style:"cross",type:"checkbox"},{key:"vice.sante.blessure-legere",x:33.9,y:56.9,width:2.5,style:"cross",type:"checkbox"},{key:"vice.sante.malus",x:39.5,y:58.5,width:10.7,type:"number-input"}].concat(_toConsumableArray(c("1",17.6,68.1,"-vice")),_toConsumableArray(c("2",17.6,71.85,"-vice")),_toConsumableArray(c("3",17.6,75.6,"-vice")),[{key:"equipements",x:15,y:82,width:39,height:10,type:"text-zone"},{key:"notes",x:56.5,y:60,width:39,height:32,type:"text-zone"}])}},y=r("fXoL"),l=r("Tah3"),v=r("dYBa"),m=r("b864"),d=[{path:"",component:(s=function e(t){_classCallCheck(this,e),this.sheetConfig=p,this.characterData=t.init(this.sheetConfig)},s.\u0275fac=function(e){return new(e||s)(y.Nb(l.a))},s.\u0275cmp=y.Hb({type:s,selectors:[["app-fr"]],decls:2,vars:2,consts:[[3,"sheetConfig","characterData"]],template:function(e,t){1&e&&(y.Tb(0,"app-sheet-wrapper"),y.Ob(1,"app-two-pages",0),y.Sb()),2&e&&(y.Cb(1),y.jc("sheetConfig",t.sheetConfig)("characterData",t.characterData))},directives:[v.a,m.a],styles:[""]}),s)}],h=((u=function e(){_classCallCheck(this,e)}).\u0275mod=y.Lb({type:u}),u.\u0275inj=y.Kb({factory:function(e){return new(e||u)},imports:[[n.a,i.d.forChild(d),a.a]]}),u)}}]);