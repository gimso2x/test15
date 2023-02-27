var Page_layout;
$(document).ready(function () {
(function(){
var vbox,v=this,page={};
Page_layout={
"fng": function(vb){vbox=vb},"thisPage":v,
"scalemode":"scalewidth","position":"relative","css":{"width":1920,"height":1080},"autoscalesize":{"width":"0","height":"0"}
,
"vbox" :
{
  "ArrayDataSet1": {
    "type": "ArrayDataSet",
    "page": 1,
    "records": 32,
    "columns": "Column1,Column2,Column3",
    "rows": [
      {
        "Column1": "수원시",
        "Column2": "37.263359",
        "Column3": "127.028599"
      },
      {
        "Column1": "성남시",
        "Column2": "37.419935",
        "Column3": "127.126533"
      },
      {
        "Column1": "용인시",
        "Column2": "37.241062",
        "Column3": "127.177738"
      },
      {
        "Column1": "안양시",
        "Column2": "37.392316",
        "Column3": "126.951456"
      },
      {
        "Column1": "안산시",
        "Column2": "37.321669",
        "Column3": "126.830843"
      },
      {
        "Column1": "과천시",
        "Column2": "37.429246",
        "Column3": "126.987858"
      },
      {
        "Column1": "광명시",
        "Column2": "37.458863",
        "Column3": "126.869992"
      },
      {
        "Column1": "광주시",
        "Column2": "37.416651",
        "Column3": "127.257267"
      },
      {
        "Column1": "군포시",
        "Column2": "37.343374",
        "Column3": "126.923694"
      },
      {
        "Column1": "부천시",
        "Column2": "37.502810",
        "Column3": "126.770076"
      },
      {
        "Column1": "시흥시",
        "Column2": "37.380049",
        "Column3": "126.802156"
      },
      {
        "Column1": "김포시",
        "Column2": "37.615491",
        "Column3": "126.714353"
      },
      {
        "Column1": "안성시",
        "Column2": "37.007982",
        "Column3": "127.279613"
      },
      {
        "Column1": "오산시",
        "Column2": "37.149828",
        "Column3": "127.077117"
      },
      {
        "Column1": "의왕시",
        "Column2": "37.344949",
        "Column3": "126.969512"
      },
      {
        "Column1": "이천시",
        "Column2": "37.272579",
        "Column3": "127.435377"
      },
      {
        "Column1": "평택시",
        "Column2": "37.065768",
        "Column3": "127.064566"
      },
      {
        "Column1": "하남시",
        "Column2": "37.541287",
        "Column3": "127.214452"
      },
      {
        "Column1": "화성시",
        "Column2": "37.199365",
        "Column3": "126.831566"
      },
      {
        "Column1": "여주시",
        "Column2": "37.297971",
        "Column3": "127.637198"
      },
      {
        "Column1": "양평군",
        "Column2": "37.491692",
        "Column3": "127.487848"
      },
      {
        "Column1": "고양시",
        "Column2": "37.656882",
        "Column3": "126.831762"
      },
      {
        "Column1": "구리시",
        "Column2": "37.594403",
        "Column3": "127.130032"
      },
      {
        "Column1": "남양주시",
        "Column2": "37.635664",
        "Column3": "127.217039"
      },
      {
        "Column1": "동두천시",
        "Column2": "37.903587",
        "Column3": "127.060632"
      },
      {
        "Column1": "양주시",
        "Column2": "37.785259",
        "Column3": "127.046043"
      },
      {
        "Column1": "의정부시",
        "Column2": "37.738117",
        "Column3": "127.041112"
      },
      {
        "Column1": "파주시",
        "Column2": "37.758501",
        "Column3": "126.776010"
      },
      {
        "Column1": "포천시",
        "Column2": "37.896285",
        "Column3": "127.202602"
      },
      {
        "Column1": "연천군",
        "Column2": "38.096294",
        "Column3": "127.075446"
      },
      {
        "Column1": "가평군",
        "Column2": "37.831119",
        "Column3": "127.509855"
      },
      {
        "Column1": "서울시",
        "Column2": "37.566400",
        "Column3": "126.978432"
      }
    ],
    "total": 32
  },
  "divcontent4": {
    "type": "divcontent",
    "contents": {},
    "stylename": "map_area",
    "content": "map_area",
    "css": {
      "anchor": "Top, Left",
      "left": 538,
      "top": 80,
      "width": "844",
      "height": "1000",
      "position": "absolute"
    }
  },
  "divcontent2": {
    "type": "divcontent",
    "contents": {},
    "stylename": "right_area",
    "content": "right_area",
    "css": {
      "anchor": "Top, Left",
      "left": 1382,
      "top": 80,
      "width": "538",
      "height": "1000",
      "position": "absolute"
    }
  },
  "divcontent3": {
    "type": "divcontent",
    "contents": {},
    "stylename": "top_area",
    "content": "top_area",
    "css": {
      "anchor": "Top, Left",
      "left": 538,
      "top": 0,
      "width": "1382",
      "height": "80",
      "position": "absolute"
    }
  },
  "group_map": {
    "type": "group",
    "contents": {
      "mapchart1": {
        "type": "mapchart",
        "dataProvider": "",
        "mapclick": "##mapchart1_mapclick##",
        "mapmouseover": "",
        "mapmouseout": "",
        "contents": {
          "maptype": "sido_j",
          "rollovercolor": "0x186DAA",
          "selectcolor": "0x186DAA"
        },
        "stylename": "map_style",
        "css": {
          "anchor": "Top, Left",
          "left": -28,
          "top": -7,
          "width": "428",
          "height": "401",
          "position": "absolute"
        }
      }
    },
    "stylename": "group_map",
    "css": {
      "anchor": "Top, Left",
      "left": 550,
      "top": 96,
      "width": "372",
      "height": "387",
      "display": "none",
      "position": "absolute"
    }
  },
  "divcontent1": {
    "type": "divcontent",
    "contents": {},
    "stylename": "left_area",
    "content": "left_area",
    "css": {
      "anchor": "Top, Left",
      "left": 0,
      "top": 0,
      "width": "538",
      "height": "1080",
      "position": "absolute"
    }
  },
  "button1": {
    "type": "button",
    "text": " ",
    "selected": true,
    "toggles": true,
    "optdata": "",
    "groupname": "",
    "stylename": "map_tit_btn",
    "css": {
      "anchor": "Top, Left",
      "left": 560,
      "top": 107,
      "width": "32",
      "height": "32",
      "position": "absolute"
    },
    "stylecss": ""
  },
  "demo": {
    "type": "text",
    "value": "",
    "optdata": "",
    "stylename": "",
    "css": {
      "anchor": "Top, Left",
      "left": 705,
      "top": 708,
      "width": "157",
      "height": "45",
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
var ArrayDataSet1 = vbox.nm("ArrayDataSet1");
var divcontent4 = vbox.nm("divcontent4");
var divcontent2 = vbox.nm("divcontent2");
var divcontent3 = vbox.nm("divcontent3");
var group_map = vbox.nm("group_map");
var mapchart1 = vbox.nm("mapchart1");
var divcontent1 = vbox.nm("divcontent1");
var button1 = vbox.nm("button1");
var demo = vbox.nm("demo");


/* vbox custom script */ 
var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function panTo(data1, data2) {
    // 이동할 위도 경도 위치를 생성합니다 
    var moveLatLon = new daum.maps.LatLng(data1, data2);
    //var moveLatLon = new daum.maps.LatLng(33.450580, 126.574942);
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon);            
}        
/* vbox custom script end*/ 

/* vbox event */
var eventinit = function(){ 
	mapchart1.e.on("mapclick",function(event,obj){ 
 		var data1 = null;
				var data2 = null;
				var name = null;
				for(var i=0; i<ArrayDataSet1.rows().length; i++){
					if(ArrayDataSet1.rows()[i].Column1 == obj.data.name){
						data1 = ArrayDataSet1.rows()[i].Column2;
						data2 = ArrayDataSet1.rows()[i].Column3;
						name = ArrayDataSet1.rows()[i].Column1;
					}
				};
				panTo(data1, data2);
				text3.value(name);
				text3.e.addClass("l_area_ani");
				
				setTimeout(function(){text3.e.removeClass("l_area_ani");},5000)
	}); 

	button1.e.on("click",function(event){ 
 		group_map.show();
				if(button1.selected() != "true"){
					group_map.e.addClass("activemenu")
					}else{
					group_map.e.removeClass("activemenu")
								}
	}); 

};if(vboxinit!=false){eventinit()};  
/* vbox event end*/ 

			}
		}
	};
// ** Onload function BEGIN **

// ** Onload function END **
$("#layout").vbox3(Page_layout);
})();
});
