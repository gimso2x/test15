var Page_top_area;
$(document).ready(function () {
(function(){
var vbox,v=this,page={};
Page_top_area={
"fng": function(vb){vbox=vb},"thisPage":v,
"scalemode":"none","position":"relative","css":{"width":1382,"height":80},"autoscalesize":{"width":"0","height":"0"}
,
"vbox" :
{
  "timer1": {
    "type": "timer",
    "duration": 5000,
    "autorun": true
  },
  "image1": {
    "type": "image",
    "optdata": "",
    "src": "../img/logo.png",
    "css": {
      "anchor": "Top, Left",
      "left": 12,
      "top": 5,
      "width": "576",
      "height": "69",
      "position": "absolute"
    },
    "stylename": ""
  },
  "texttime": {
    "type": "text",
    "value": "",
    "optdata": "",
    "stylename": "t_time",
    "css": {
      "anchor": "Top, Left",
      "left": 1040,
      "top": 18,
      "width": "316",
      "height": "48",
      "position": "absolute"
    },
    "format": "",
    "stylecss": ""
  }
}
,
		"event" : {
			 "complete" : function (vbox, vboxinit){
/* vbox var */ 
vbox.page = page; 
var timer1 = vbox.nm("timer1");
var image1 = vbox.nm("image1");
var texttime = vbox.nm("texttime");


/* vbox custom script */ 

/* vbox custom script end*/ 

/* vbox event */
var eventinit = function(){ 
	timer1.e.on("execute",function(event){ 
 		texttime.value(getDate());   
	}); 

};if(vboxinit!=false){eventinit()};  
/* vbox event end*/ 

			}
		}
	};
// ** Onload function BEGIN **

// ** Onload function END **
$("#top_area").vbox3(Page_top_area);
})();
});
