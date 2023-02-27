var Page_map_area;
$(document).ready(function () {
(function(){
var vbox,v=this,page={};
Page_map_area={
"fng": function(vb){vbox=vb},"thisPage":v,
"scalemode":"none","position":"relative","css":{"width":844,"height":1000},"autoscalesize":{"width":"0","height":"0"}
,
"vbox" :
{
  "divcontent1": {
    "type": "divcontent",
    "contents": {},
    "stylename": "ui-vbox-divcontent",
    "css": {
      "anchor": "Top, Left",
      "left": 0,
      "top": 0,
      "width": "844",
      "height": "1000",
      "position": "absolute"
    }
  },
  "signalload1": {
    "type": "signalload",
    "src": [
      "../img/sign_c_r.png",
      "../img/sign_c_b.png"
    ],
    "css": {
      "anchor": "Top, Left",
      "left": 307,
      "top": 520,
      "width": "64",
      "height": "64",
      "position": "absolute"
    },
    "stylename": ""
  },
  "signalload2": {
    "type": "signalload",
    "src": [
      "../img/sign_c_r.png",
      "../img/sign_c_b.png"
    ],
    "index": 1,
    "css": {
      "anchor": "Top, Left",
      "left": 398,
      "top": 520,
      "width": "64",
      "height": "64",
      "position": "absolute"
    },
    "stylename": ""
  }
}
,
		"event" : {
			 "complete" : function (vbox, vboxinit){
/* vbox var */ 
vbox.page = page; 
var divcontent1 = vbox.nm("divcontent1");
var signalload1 = vbox.nm("signalload1");
var signalload2 = vbox.nm("signalload2");


/* vbox custom script */ 

var mapContainer = document.getElementById("layout_divcontent4_divcontent1"), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(37.419888, 127.126603), // 지도의 중심좌표
        level: 9 // 지도의 확대 레벨
};
var map = new daum.maps.Map(mapContainer, mapOption); 
window.map = map;
var positions = [
	{
		title : '수정구 고산동길',
		latlng : new daum.maps.LatLng(37.424505, 127.09422)
	},
	{
		title : '중원구 희망로',
		latlng : new daum.maps.LatLng(37.433385, 127.15989)
	},
	{
		title : '중원구 중앙공원로',
		latlng : new daum.maps.LatLng(37.380352, 127.128692)
	}
];
var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new daum.maps.Size(24, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new daum.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
}
/* vbox custom script end*/ 

/* vbox event */
var eventinit = function(){ 
};if(vboxinit!=false){eventinit()};  
/* vbox event end*/ 

			}
		}
	};
// ** Onload function BEGIN **

// ** Onload function END **
$("#map_area").vbox3(Page_map_area);
})();
});
