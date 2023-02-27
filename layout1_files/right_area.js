var Page_right_area;
$(document).ready(function () {
(function(){
var vbox,v=this,page={};
Page_right_area={
"fng": function(vb){vbox=vb},"thisPage":v,
"scalemode":"none","stylename":"right_area","position":"relative","css":{"width":538,"height":1000},"autoscalesize":{"width":"0","height":"0"}
,
"vbox" :
{
  "ArrayDataSet2": {
    "type": "ArrayDataSet",
    "page": 1,
    "records": 4,
    "columns": "Column1,Column2,Column3,Column4",
    "rows": [
      {
        "Column1": "4",
        "Column2": "4",
        "Column3": "54",
        "Column4": "34"
      },
      {
        "Column1": "11",
        "Column2": "11",
        "Column3": "",
        "Column4": ""
      },
      {
        "Column1": "54",
        "Column2": "54",
        "Column3": "",
        "Column4": ""
      },
      {
        "Column1": "34",
        "Column2": "34",
        "Column3": "",
        "Column4": ""
      }
    ],
    "total": 4
  },
  "ArrayDataSet1": {
    "type": "ArrayDataSet",
    "page": 1,
    "records": 7,
    "columns": "Column1,Column2,Column3",
    "rows": [
      {
        "Column1": "5/25",
        "Column2": "150",
        "Column3": ""
      },
      {
        "Column1": "5/26",
        "Column2": "200",
        "Column3": ""
      },
      {
        "Column1": "5/27",
        "Column2": "150",
        "Column3": ""
      },
      {
        "Column1": "5/28",
        "Column2": "160",
        "Column3": ""
      },
      {
        "Column1": "5/29",
        "Column2": "170",
        "Column3": ""
      },
      {
        "Column1": "5/30",
        "Column2": "180",
        "Column3": ""
      },
      {
        "Column1": "5/31",
        "Column2": "100",
        "Column3": ""
      }
    ],
    "total": 7
  },
  "text7": {
    "type": "text",
    "value": "",
    "optdata": "",
    "stylename": "r_value",
    "css": {
      "anchor": "Top, Left",
      "left": 18,
      "top": 297,
      "width": "500",
      "height": "151",
      "position": "absolute"
    },
    "format": "",
    "stylecss": ""
  },
  "group1": {
    "type": "group",
    "contents": {
      "text12": {
        "type": "text",
        "value": "",
        "optdata": "",
        "stylename": "r_value",
        "css": {
          "anchor": "Top, Left",
          "left": 18,
          "top": 53,
          "width": "500",
          "height": "460",
          "position": "absolute"
        },
        "format": "",
        "stylecss": ""
      },
      "piechart1": {
        "type": "piechart",
        "dataProvider": "ArrayDataSet2",
        "css": {
          "anchor": "Top, Left",
          "left": 16,
          "top": 3,
          "width": "506",
          "height": "412",
          "position": "absolute"
        },
        "contents": {
          "dataset": "ArrayDataSet2",
          "chart": {},
          "colors": [
            "#0064AB",
            "#596D90",
            "#8BC745",
            "#FF3131",
            "#1AADCE",
            "#492970",
            "#F28F43",
            "#77A1E5",
            "#C42525",
            "#A6C96A"
          ],
          "title": {
            "text": ""
          },
          "tooltip": {
            "backgroundColor": "rgba(255,255,255,1)",
            "borderColor": "rgba(170,170,170,1)",
            "style": {
              "color": "#274B6D",
              "fontFamily": "Verdana",
              "fontSize": "12px",
              "fontWeight": "normal"
            }
          },
          "xAxis": {
            "categories": {
              "Field": "Column1"
            }
          },
          "plotOptions": {
            "pie": {
              "borderColor": "rgba(255,255,255,0)",
              "innerSize": 135,
              "animation": {
                "duration": 1000
              },
              "dataLabels": {
                "enabled": true,
                "distance": -28,
                "softConnector": false,
                "connectorPadding": 0,
                "connectorColor": "rgba(0,0,0,1)",
                "format": "{point.percentage:.1f}%",
                "y": 0,
                "color": "#FFFFFF",
                "style": {
                  "fontSize": "20px"
                }
              }
            }
          },
          "legend": {
            "enabled": false,
            "backgroundColor": "rgba(255,255,255,1)",
            "borderColor": "rgba(144,144,144,1)",
            "itemStyle": {
              "color": "#274B6D",
              "fontFamily": "Verdana",
              "fontSize": "12px",
              "fontWeight": "normal"
            },
            "itemHoverStyle": {
              "color": "rgba(12,204,204,1)",
              "fontSize": "12px"
            },
            "itemHiddenStyle": {
              "color": "rgba(0,0,0,1)",
              "fontSize": "12px"
            }
          },
          "series": [
            {
              "name": "",
              "type": "pie",
              "data": [
                {
                  "Field": "Column1"
                },
                {
                  "Field": "Column2"
                }
              ]
            }
          ]
        }
      },
      "text10": {
        "type": "text",
        "value": "<em>처분대상</em>",
        "optdata": "",
        "stylename": "r_value_nbg align_c",
        "css": {
          "anchor": "Top, Left",
          "left": 143,
          "top": 103,
          "width": "253",
          "height": "132",
          "position": "absolute"
        },
        "format": "",
        "stylecss": ""
      },
      "text9": {
        "type": "text",
        "value": "전월 실적",
        "optdata": "",
        "stylename": "l_sub_tit2",
        "css": {
          "anchor": "Top, Left",
          "left": 20,
          "top": 10,
          "width": "353",
          "height": "37",
          "position": "absolute"
        },
        "format": "",
        "stylecss": ""
      },
      "text13": {
        "type": "text",
        "value": "11<i>건</i>",
        "optdata": "",
        "stylename": "r_value_nbgs align_r",
        "css": {
          "anchor": "Top, Left",
          "left": 107,
          "top": 379,
          "width": "153",
          "height": "45",
          "position": "absolute"
        },
        "format": "",
        "stylecss": ""
      },
      "text14": {
        "type": "text",
        "value": "305<i>건</i>",
        "optdata": "",
        "stylename": "r_value_nbgs align_r",
        "css": {
          "anchor": "Top, Left",
          "left": 107,
          "top": 457,
          "width": "153",
          "height": "45",
          "position": "absolute"
        },
        "format": "",
        "stylecss": ""
      },
      "text16": {
        "type": "text",
        "value": "142<i>건</i>",
        "optdata": "",
        "stylename": "r_value_nbgs align_r",
        "css": {
          "anchor": "Top, Left",
          "left": 356,
          "top": 457,
          "width": "153",
          "height": "45",
          "position": "absolute"
        },
        "format": "",
        "stylecss": ""
      },
      "text15": {
        "type": "text",
        "value": "34<i>건</i>",
        "optdata": "",
        "stylename": "r_value_nbgs align_r",
        "css": {
          "anchor": "Top, Left",
          "left": 356,
          "top": 379,
          "width": "153",
          "height": "45",
          "position": "absolute"
        },
        "format": "",
        "stylecss": ""
      },
      "text17": {
        "type": "text",
        "value": "<em>■</em>경고창",
        "optdata": "",
        "stylename": "r_legend01",
        "css": {
          "anchor": "Top, Left",
          "left": 34,
          "top": 379,
          "width": "143",
          "height": "44",
          "position": "absolute"
        },
        "format": "",
        "stylecss": ""
      },
      "text18": {
        "type": "text",
        "value": "<em>■</em>과태료",
        "optdata": "",
        "stylename": "r_legend02",
        "css": {
          "anchor": "Top, Left",
          "left": 34,
          "top": 457,
          "width": "143",
          "height": "44",
          "position": "absolute"
        },
        "format": "",
        "stylecss": ""
      },
      "text19": {
        "type": "text",
        "value": "<em>■</em>처분안함",
        "optdata": "",
        "stylename": "r_legend03",
        "css": {
          "anchor": "Top, Left",
          "left": 281,
          "top": 379,
          "width": "143",
          "height": "44",
          "position": "absolute"
        },
        "format": "",
        "stylecss": ""
      },
      "text20": {
        "type": "text",
        "value": "<em>■</em>미처분",
        "optdata": "",
        "stylename": "r_legend04",
        "css": {
          "anchor": "Top, Left",
          "left": 281,
          "top": 457,
          "width": "143",
          "height": "44",
          "position": "absolute"
        },
        "format": "",
        "stylecss": ""
      },
      "divcontent1": {
        "type": "divcontent",
        "contents": {},
        "stylename": "line_st_h2",
        "css": {
          "anchor": "Top, Left",
          "left": 19,
          "top": 359,
          "width": "500",
          "height": "2",
          "position": "absolute"
        }
      },
      "text11": {
        "type": "text",
        "value": "205",
        "optdata": "",
        "stylename": "r_value_nbg align_c",
        "css": {
          "anchor": "Top, Left",
          "left": 143,
          "top": 158,
          "width": "253",
          "height": "132",
          "position": "absolute"
        },
        "format": "",
        "stylecss": ""
      },
      "divcontent2": {
        "type": "divcontent",
        "contents": {},
        "stylename": "line_st_v2",
        "css": {
          "anchor": "Top, Left",
          "left": 268,
          "top": 361,
          "width": "2",
          "height": "153",
          "position": "absolute"
        }
      },
      "divcontent3": {
        "type": "divcontent",
        "contents": {},
        "stylename": "line_st_h2",
        "css": {
          "anchor": "Top, Left",
          "left": 19,
          "top": 441,
          "width": "500",
          "height": "2",
          "position": "absolute"
        }
      }
    },
    "stylename": "right_area",
    "css": {
      "anchor": "Top, Left",
      "left": -1,
      "top": 466,
      "width": "538",
      "height": "532",
      "position": "absolute"
    }
  },
  "text8": {
    "type": "text",
    "value": "상태",
    "optdata": "",
    "stylename": "l_sub_tit2",
    "css": {
      "anchor": "Top, Left",
      "left": 19,
      "top": 0,
      "width": "353",
      "height": "37",
      "position": "absolute"
    },
    "format": "",
    "stylecss": ""
  },
  "text1": {
    "type": "text",
    "value": "어제의 통행량",
    "optdata": "",
    "stylename": "l_sub_tit2",
    "css": {
      "anchor": "Top, Left",
      "left": 19,
      "top": 87,
      "width": "353",
      "height": "37",
      "position": "absolute"
    },
    "format": "",
    "stylecss": ""
  },
  "text4": {
    "type": "text",
    "value": "어제의 단속 건수",
    "optdata": "",
    "stylename": "l_sub_tit2",
    "css": {
      "anchor": "Top, Left",
      "left": 19,
      "top": 174,
      "width": "353",
      "height": "37",
      "position": "absolute"
    },
    "format": "",
    "stylecss": ""
  },
  "text6": {
    "type": "text",
    "value": "일별 단속 추이",
    "optdata": "",
    "stylename": "l_sub_tit2",
    "css": {
      "anchor": "Top, Left",
      "left": 19,
      "top": 261,
      "width": "353",
      "height": "37",
      "position": "absolute"
    },
    "format": "",
    "stylecss": ""
  },
  "columnchart1": {
    "type": "columnchart",
    "gridProvider": {},
    "dataProvider": "ArrayDataSet1",
    "css": {
      "anchor": "Top, Left",
      "left": 7,
      "top": 288,
      "width": "524",
      "height": "176",
      "position": "absolute"
    },
    "contents": {
      "dataset": "ArrayDataSet1",
      "chart": {
        "plotBackgroundColor": "rgba(255,200,200,0)",
        "backgroundColor": "rgba(255,255,255,0)",
        "borderColor": "rgba(255,255,255,0)"
      },
      "colors": [
        "#6b1c9d",
        "#3d3d9c",
        "#4b6fe2",
        "#3396fe",
        "#25c2fe",
        "#4b74a1",
        "#317631",
        "#ffbe35",
        "#fe7046",
        "#b34646"
      ],
      "credits": {},
      "title": {},
      "xAxis": {
        "categories": {
          "Field": "Column1"
        },
        "lineWidth": 0,
        "alternateGridColor": "rgba(255,255,255,0)",
        "tickLength": 0,
        "labels": {
          "enabled": false,
          "style": {
            "color": "#303030",
            "fontFamily": "Verdana",
            "fontSize": "24px",
            "fontWeight": "bold"
          }
        }
      },
      "yAxis": [
        {
          "opposite": false,
          "gridLineWidth": 0,
          "alternateGridColor": "rgba(255,255,255,0)",
          "title": {
            "align": "middle"
          },
          "labels": {
            "style": {
              "color": "#505050",
              "fontFamily": "Verdana",
              "fontSize": "0px",
              "fontWeight": "normal"
            }
          }
        }
      ],
      "tooltip": {
        "backgroundColor": "rgba(255,255,255,0.85)",
        "borderColor": "rgba(255,255,255,1)",
        "style": {
          "color": "#3E576F",
          "fontFamily": "Verdana",
          "fontSize": "18px",
          "fontWeight": "normal"
        },
        "crosshairs": true
      },
      "plotOptions": {
        "series": {
          "shadow": false,
          "lineWidth": 2,
          "allowPointSelect": false,
          "borderColor": "#FFFFFF",
          "borderWidth": 0,
          "borderRadius": 0,
          "barType": "none",
          "animation": {
            "duration": 1000
          },
          "marker": {},
          "dataLabels": {
            "inside": false,
            "allowOverlap": false,
            "style": {
              "color": "#0064AB",
              "fontFamily": "Verdana",
              "fontSize": "24px",
              "fontWeight": "bold"
            }
          },
          "point": {
            "events": {}
          }
        }
      },
      "legend": {
        "enabled": false,
        "backgroundColor": "rgba(255,255,255,0)",
        "borderColor": "rgba(144,144,144,1)",
        "itemStyle": {
          "color": "#274B6D",
          "fontFamily": "Verdana",
          "fontSize": "12px",
          "fontWeight": "normal"
        }
      },
      "series": [
        {
          "name": "단속건수",
          "color": "#0064AB",
          "type": "column",
          "showInLegend": true,
          "stacking": "",
          "stack": "g1",
          "yAxis": 0,
          "marker": {
            "enabled": false
          },
          "dataLabels": {
            "enabled": true
          },
          "data": [
            {
              "Field": "Column2"
            }
          ]
        }
      ]
    },
    "filterField": "",
    "filterValue": ""
  },
  "group2": {
    "type": "group",
    "contents": {
      "text3": {
        "type": "text",
        "value": "532644",
        "optdata": "",
        "stylename": "r_value",
        "css": {
          "anchor": "Top, Left",
          "left": 0,
          "top": 0,
          "width": "345",
          "height": "47",
          "position": "absolute"
        },
        "format": "#,###.",
        "stylecss": ""
      },
      "text21": {
        "type": "text",
        "value": "건",
        "optdata": "",
        "stylename": "r_value_u align_l",
        "css": {
          "anchor": "Top, Left",
          "left": 351,
          "top": 7,
          "width": "83",
          "height": "37",
          "position": "absolute"
        },
        "format": "",
        "stylecss": ""
      }
    },
    "stylename": "r_value_box",
    "css": {
      "anchor": "Top, Left",
      "left": 18,
      "top": 122,
      "width": "500",
      "height": "47",
      "position": "absolute"
    }
  },
  "group3": {
    "type": "group",
    "contents": {
      "text23": {
        "type": "text",
        "value": "205",
        "optdata": "",
        "stylename": "r_value",
        "css": {
          "anchor": "Top, Left",
          "left": 0,
          "top": 0,
          "width": "345",
          "height": "47",
          "position": "absolute"
        },
        "format": "#,###.",
        "stylecss": ""
      },
      "text22": {
        "type": "text",
        "value": "건",
        "optdata": "",
        "stylename": "r_value_u align_l",
        "css": {
          "anchor": "Top, Left",
          "left": 351,
          "top": 7,
          "width": "83",
          "height": "37",
          "position": "absolute"
        },
        "format": "",
        "stylecss": ""
      }
    },
    "stylename": "r_value_box",
    "css": {
      "anchor": "Top, Left",
      "left": 18,
      "top": 209,
      "width": "500",
      "height": "47",
      "position": "absolute"
    }
  },
  "group4": {
    "type": "group",
    "contents": {
      "text24": {
        "type": "text",
        "value": "상시 단속 중",
        "optdata": "",
        "stylename": "r_value align_c",
        "css": {
          "anchor": "Top, Left",
          "left": 0,
          "top": 0,
          "width": "503",
          "height": "47",
          "position": "absolute"
        },
        "format": "",
        "stylecss": ""
      }
    },
    "stylename": "r_value_box",
    "css": {
      "anchor": "Top, Left",
      "left": 18,
      "top": 35,
      "width": "500",
      "height": "47",
      "position": "absolute"
    }
  }
}
,
		"event" : {
			 "complete" : function (vbox, vboxinit){
/* vbox var */ 
vbox.page = page; 
var ArrayDataSet2 = vbox.nm("ArrayDataSet2");
var ArrayDataSet1 = vbox.nm("ArrayDataSet1");
var text7 = vbox.nm("text7");
var group1 = vbox.nm("group1");
var text12 = vbox.nm("text12");
var piechart1 = vbox.nm("piechart1");
var text10 = vbox.nm("text10");
var text9 = vbox.nm("text9");
var text13 = vbox.nm("text13");
var text14 = vbox.nm("text14");
var text16 = vbox.nm("text16");
var text15 = vbox.nm("text15");
var text17 = vbox.nm("text17");
var text18 = vbox.nm("text18");
var text19 = vbox.nm("text19");
var text20 = vbox.nm("text20");
var divcontent1 = vbox.nm("divcontent1");
var text11 = vbox.nm("text11");
var divcontent2 = vbox.nm("divcontent2");
var divcontent3 = vbox.nm("divcontent3");
var text8 = vbox.nm("text8");
var text1 = vbox.nm("text1");
var text4 = vbox.nm("text4");
var text6 = vbox.nm("text6");
var columnchart1 = vbox.nm("columnchart1");
var group2 = vbox.nm("group2");
var text3 = vbox.nm("text3");
var text21 = vbox.nm("text21");
var group3 = vbox.nm("group3");
var text23 = vbox.nm("text23");
var text22 = vbox.nm("text22");
var group4 = vbox.nm("group4");
var text24 = vbox.nm("text24");


/* vbox custom script */ 
text3.numbering("532644");
text23.numbering("205");
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
$("#right_area").vbox3(Page_right_area);
})();
});
