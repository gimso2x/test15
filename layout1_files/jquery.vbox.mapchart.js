
$.vbox_mapchart = function(el, options, th){

        var base = this;
        base.$el = $(el);
        base.el = el;
		
        base.$el.data("vbox_mapchart", base);
		base.$el.data("th", base);
		base.options = $.extend(true,{},{"contents":$.vbox_mapchart.defaultOptions}, options);
		base.th = th;
		
		//console.log($.vbox_mapchart.defaultOptions,options,base.options);

		base.options.contents.rollovercolor=base.options.contents.rollovercolor.replace(/0x/g,"#");
		base.options.contents.selectcolor=base.options.contents.selectcolor.replace(/0x/g,"#");
		
		base.rootsvg;
		base.svggroup;
		base.rootmap;
		base.backmap;
		base.labelmap;
		base.lineargradient;

		base.translate = [0,0];
		base.scale=1;
		
		base.mapdata;
		base.providerdata;

        base.content = "";
		base.contentelem;
		
		base.selectedItem ;
		
		var getpath = getPath();
		
        base.init = function(){

			
	
			var maptype = base.options.contents.maptype;

			//if(maptype == null || maptype == "") return;
			if(maptype == null || maptype == "") {
				maptype = "korea";
			};
			
			$v.util.createScript(function(th){
			
				var idstr = base.$el.attr("id");//base.options.orgID;
				
				base.rootsvg = d3.select(base.el).append("svg:svg")
				.attr("width", "100%")
				.attr("height", "100%");
				//.attr('id', 'koreaMap');
				base.createDefs(base.rootsvg.append('svg:defs'));
				base.createGradient(base.rootsvg.append('linearGradient'));
				
				base.svggroup = base.rootsvg.append("g");
				base.backmap =  base.svggroup.append("g").attr("id", idstr+"back");
				base.rootmap = base.svggroup.append("g").attr("id", idstr+"maps")
					.attr('filter', 'url(#'+idstr+'_dropShadow)');
				base.labelmap =  base.svggroup.append("g").attr("id", idstr+"label");

				//줌이동
				if(base.options.zoom){			
					base.rootsvg.call(base.zoom());
				}

				var mapdata =  window["mapchart_"+maptype+"_data"];

				base.dataBind(mapdata);
				base.mapdata = mapdata;
				base.mapsize = base.mapdata.size;
				
				var mapsize = base.mapsize;//398 585
				base.rootsvg.attr("viewBox" , "0 0 "+mapsize[0]+" "+mapsize[1]);

				//base.rootsvg.attr("preserveAspectRatio" , "none");//"xMinYMin meet"
				//base.resize(base);
				//base.$el.on("resize",base.resize);
				
				
				base.dataLoad();

			//},{content:getpath+"js/lib/mapchart/mapchart_"+maptype, th : base});
			},{content:"../js/lib/mapchart/mapchart_"+maptype, th : base});
			/*
			if(base.content != null && base.content != ""){
				//console.log("##",base.content)
				$v.util.createScript(function(th){
					//base.contentelem 
					//console.log("@@Page3...");
				},base);
			}
			*/
		};

		$v.util.createScript(function(th){
			base.init();
			base.dataProvider();
		//},{content : getpath+"js/lib/d3.min" });
		},{content : "../js/lib/d3.min" });
		
		//console.log("getPath : "+getPath())
		
	 };
	 
	 $.vbox_mapchart.prototype = {

		parentDiv : function(){
			return $(this).parent().parent();
		},

		reload : function (urldata){
			this.destory();
			this.options.contents.maptype = urldata;
			this.init();
		},
		destory : function(){
			/*
			.on('mouseover',this._mouseover)
			.on('mouseout', this._mouseout)
			.on('click',this._click)
			roottg.$el.trigger("mapclick",eventObj);
			*/

			if(this.rootmap){
				this.rootmap.remove();
			};
			if(this.backmap){
				this.backmap.remove();
			};
			if(this.labelmap){
				this.labelmap.remove();
			};
			if(this.svggroup){
				this.svggroup.remove();
			};
			if(this.rootsvg){
				this.rootsvg.remove();
			};
			
			this.$el.off("scriptComplete");
			//this.$el.off("mapclick");
		},
		createDefs : function(defs) {
			
			var fx=3,fy=3,fcolor="#000000",fopacity=0.7,fdeviation=2
			
			if(this.options.contents.fx != null){
				fx = this.options.contents.fx;
			};
			if(this.options.contents.fy != null){
				fy = this.options.contents.fy;
			};
			if(this.options.contents.fcolor != null){
				fcolor = this.options.contents.fcolor;
			};
			if(this.options.contents.fopacity != null){
				fopacity = this.options.contents.fopacity;
			};
			if(this.options.contents.fdeviation != null){
				fdeviation = this.options.contents.fdeviation;
			};
			
			
			var idstr = this.$el.attr("id");//this.options.orgID;
			var dropShadowFilter = defs.append('svg:filter')
				  .attr('id', idstr+'_dropShadow')
				  .attr('filterUnits', "userSpaceOnUse")
				  .attr('width', '250%')
				  .attr('height', '250%');
				 /* 201709 */
				dropShadowFilter.append('svg:feGaussianBlur')
				  .attr('in', 'SourceAlpha') //SourceAlpha SourceGraphic
				  .attr('stdDeviation', 2)
				  .attr('result', 'blur-out');

				//dropShadowFilter.append('svg:feColorMatrix')
				//  .attr('in', 'blur-out') 
				//  .attr('type', 'hueRotate')
				//  .attr('values', 180)	
				//  .attr('result', 'color-out');  
				dropShadowFilter.append('svg:feOffset')
				  .attr('in1', 'color-out')
				  .attr('dx', 1)
				  .attr('dy', 1)
				  .attr('result', 'the-shadow');
				 
				dropShadowFilter.append('svg:feBlend')
				  .attr('in', 'SourceGraphic')
				  .attr('in2', 'the-shadow')
				  .attr('mode', 'normal');
				  
				/* 익스플로워에서는 안먹는다.
				dropShadowFilter.append('svg:feDropShadow')
				  .attr('dx', fx)
				  .attr('dy', fy)
				  .attr('stdDeviation', fdeviation)
				  .attr('flood-color', fcolor)
				  .attr('flood-opacity', fopacity);
				// <feDropShadow dx="4" dy="8" stdDeviation="4" flood-color="#008000" flood-opacity="0.9"/>
				  */
		},
		createGradient : function(grad){
			
			var idstr = this.$el.attr("id");//base.options.orgID;
			
			var mapcolor = ["#f2f2f2","#f6f6f6"]; //["#ff0000","#ff3300"]; //
			if(this.options.contents.mapcolor != null){
				mapcolor = this.options.contents.mapcolor;
			};
			
			grad.attr("id",idstr+"_gradient").attr("gradientUnits","userSpaceOnUse");
			grad.append("stop").attr("offset",0).attr("stop-color",mapcolor[0]); /*201709 , 9BDCF9, 62BBE9*/
			grad.append("stop").attr("offset",1).attr("stop-color",mapcolor[1]);
			
			/*
			<linearGradient xmlns="http://www.w3.org/2000/svg" id="area-34_2_" gradientUnits="userSpaceOnUse" x1="77.585" y1="-13.7466" x2="77.5849" y2="376.3449">
				<stop offset="0" style="stop-color:#9BDCF9"/>
				<stop offset="1" style="stop-color:#62BBE9"/>
			</linearGradient>
			*/
			
			
		},
		zoom : function(){
		  var th = this;
		  return d3.behavior.zoom()
			   .scaleExtent([0, 5])
			   .on("zoom", function(){
				   th.scalezoom();
			   });
		},
		
		scalezoom: function(th){

			if(d3.event == null) return;

			var th = this;
			th.translate = d3.event.translate;
			th.scale = d3.event.scale;

			//전체적으로 확대
			th.svggroup.attr("transform", "translate(" + th.translate + ")scale(" + th.scale + ")");

			//svgGroup.attr("transform", "translate(" + [0,0] + ")scale(" + d3.event.scale + ")");
			/*
			글자는 확대하지말고 위치만 변경...
			koreaMap.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
			var x = d3.event.translate[0]*d3.event.scale;
			var y = d3.event.translate[1]*d3.event.scale;
			//labelMap.attr("transform", "translate(" + [x,y] + ")");
			console.log(d3.event.translate,d3.event.scale)
			*/
		},
		resize : function(base){
			//var base = this;
			if(base == null){
				base = $(this).closest("svg").parent().data("th");
				if(base == null) return false;
			}

			var w = base.mapdata.size[0];
			var h = base.mapdata.size[1];

			base.rootsvg.attr("width", w)
						.attr("height", h);

			var orgsize=[base.$el.width(),base.$el.height()];
			base.svggroup.attr("transform", "scale(" + orgsize[0]/w + ")");
			
		},
		dataProvider : function(){
			var th = this;
			/**/
			if(this.options.dataProvider != null && this.options.dataProvider != ""){
				
				var datasetel = $(this.th.id(this.options.dataProvider));
				
				// ArrayDataSet경우 선언이 늦어서 지가갈 수 있다.
				if(datasetel[0].data != null){
					th.providerdata = datasetel[0].data;
					//th.dataLoad(); js를 가져오면 바인딩한다.
				}
				datasetel.on("resultSet", function (obj, data) {
					th.providerdata = data;
					th.dataLoad();
				});
			}
			
		},
		dataLoad:function(){
			
			if(this.providerdata != null){
				var th = this;
				
				var mapalpha = th.options.contents.mapalpha;
				
				if(th.providerdata != null && th.providerdata != ""){

					$.each(th.providerdata.rows,function(idx,obj){

						var _code  = (obj.code == null)? obj.CODE:obj.code;
						var _color = (obj.color == null)? obj.COLOR:obj.color;
						var _label = (obj.label == null)? obj.LABEL:obj.label;

						var area      = th.rootmap.select('#area-'+_code);
						var arealabel = th.labelmap.select('#label-'+_code);

						if(area[0][0] == null) return;

						//color
						if(_color != "" && _color != null){
							
							_color = _color.replace(/0x/g,"#");
							area.attr("_fill",_color);
							area.attr("fill",_color);
							
							if(_color == "none"){
								area.attr("opacity",0);
								arealabel.attr("opacity",0);
							}else{
								if(mapalpha==null){
									mapalpha = 1;
								}
								area.attr("opacity",mapalpha);
								arealabel.attr("opacity",1);
							}
						};

						//label
						if(th.options.label){	
							if(_label != "" && _label != null){
								arealabel.html(_label);
								//var pos = arealabel[0][0].getBoundingClientRect();
								//$("#Page1_sub_v_pt").css({left:pos.left, top:pos.top}); 
								//$( ".hello" ).clone().appendTo( ".goodbye" );
								//arealabel.attr("fill","#ff0000");  
							}
						}
						
						//console.log(th.mapdata)
						$.each(th.mapdata.map ,function(i,o){
							if(_code == o.code){
								o.data=obj;
								return false;
							};
						});
						
					});
				};

			}
		},
		dataBind : function (data){

			var idstr = this.$el.attr("id");//base.options.orgID;
			/*
			this.backmap.append('svg:image')
				.attr({
				  'xlink:href': "../js/lib/mapchart/"+this.options.contents.background,  
				  x: 0,
				  y: 0
				});
			*/
			
			var mapstroke = "#777977";
			if(this.options.contents.mapborder != null){
				mapstroke = this.options.contents.mapborder;
			};
			
			var mapstrokewidth = 1;
			if(this.options.contents.mapbordersize != null){
				mapstrokewidth = this.options.contents.mapbordersize;
			};
			
			if(data == null) return;

			 this.rootmap.selectAll("path")
			.data(data.map).enter().append("path")
			.attr("d",function(d){ return d.path })
			.attr("id", function(d) { return 'area-'+d.code; })
			.attr("role","area")
			.attr("fill", function (d) {
				return "url(#"+idstr+"_gradient)"//"#89d2f4";//getColor(Math.random() * 1000);
			})
			.attr("stroke", mapstroke)/*201709 , 165579, 01367d*/
			.attr("stroke-width", mapstrokewidth) /*201709 , 0.2, 0.5*/
			.attr("_fill",function (d){
					return $(this).attr("fill")
			})
			.on('mouseover',this._mouseover)
			.on('mousemove',this._mouseover)
			.on('mouseout', this._mouseout)
			.on('click',this._click);
			if(this.options.contents.mapalpha){
				this.rootmap.selectAll("path").attr("opacity",this.options.contents.mapalpha);
			};

			if(this.options.contents.label && data.label != null){	
				  /*
				  this.labelmap.selectAll("text")
				  .data(data.label).enter().append("text")
				  .attr("id", function(d) { return 'label-'+d.code; })
				  .attr("x", function(d) { return d.path[0]; })
				  .attr("y", function(d) { return d.path[1]; })
				  .attr('text-anchor', 'middle')
				  .attr("font-size",11)
				  .attr("fill","#ffffff")  
				  .text(function(d) {return d.name; })
				  .on('mouseover', this._mouseover)
				  .on('mousemove',this._mouseover)
				  .on('mouseout', this._mouseout)
				  .on('click',this._click)
				  .style("cursor", "default");
					   //.attr('filter', 'url(#dropShadow)')
				*/
				var fontsize = this.options.contents.fontsize;
				if(fontsize == null){
					fontsize = 14;
				};
				var fontcolor = this.options.contents.fontcolor;
				if(fontcolor == null){
					fontcolor = "#686d76";
				};

				 this.labelmap.selectAll("g")
				 .data(data.label).enter().append("g").append("text")
				  .attr("id", function(d) { return 'label-'+d.code; })
				  .attr("x", function(d) { return d.path[0]; })
				  .attr("y", function(d) { return d.path[1]; })
				  .attr('text-anchor', 'middle')
				  .attr("font-size",fontsize)
				  .attr("fill",fontcolor)  
				  .text(function(d) {return d.name; })
				  .on('mouseover', this._mouseover)
				  .on('mousemove',this._mouseover)
				  .on('mouseout', this._mouseout)
				  .on('click',this._click);
				//추가.....>
				function clone(selector) {
					var node = d3.select(selector).node();
					return d3.select(node.parentNode.insertBefore(node.cloneNode(true), node.nextSibling));
				}   
			}
			//$(koreaSvg).trigger("completeJson");
		},
		_th : function (d,_this){
			var th;
			if(d["code"]){
				th = "#area-"+d["code"]
			}
			if(d["type"] == "Feature"){
				th = _this;
			};
			//console.log(d,th,_this)
			return th;
		},
		_mouseover : function  (d,i,a){ //over, move 같이 사용.
			var roottg = $(this).closest("svg").parent().data("th");
			if(roottg == null) return false;

			var th = roottg._th(d,this);
			if(th){
				th = "#"+ roottg.$el.attr("id") + " " + th;
				//d3.select(th).style('fill', roottg.options.contents.rollovercolor);
				d3.select(th).style('fill', roottg.options.contents.selectcolor);
			}

			//var eventObj = roottg.pointxy(roottg,th,d);			
			//if(d.data){
				roottg.$el.trigger("mapmouseover",{event:d3.event,data:d.data});
			//}else{
			//	console.log(d)
			//}
		},
		_mouseout : function (d,i){

			var roottg = $(this).closest("svg").parent().data("th");
			if(roottg == null) return false;

			var th = roottg._th(d,this);
			th = "#"+ roottg.$el.attr("id") + " " + th;

			try{
				if(d3.select(th).attr("select") == "active"){
					d3.select(th).style('fill', roottg.options.contents.selectcolor);
					return false;
				} 
			} catch(e){ /* 처리방법 담에찾자. */ }
			
			d3.select(th).style('fill',  function(d){
				return $(th).attr("_fill");
			});
			
			roottg.$el.trigger("mapmouseout",{"roottg":roottg,"th":th,"d":d});
		},
		_index : function(code){
			if(code != null && this.mapdata != null){
				var d;
				$.each(this.mapdata.map ,function(i,o){
					if(code == o.code){
						d = o;
						return false;
					};
				});

				if(d != null){
					this._click(d,-1,this);
				}
			}else{
				//d3th.attr("select","active");
			}
			
		},
		_click : function (d,i,_root){

			var roottg = $(this).closest("svg").parent().data("th");
			if(typeof _root  === "object"){
				roottg = _root;
			}
			if(roottg == null) return false;
			
			var th = roottg._th(d,this);
			th = "#"+ roottg.$el.attr("id") + " " + th;
						
			d3.selectAll('path')
			.attr("select","no-active")
			.style({
				'fill': function(d){
					return $(this).attr("_fill");
				}
			});
			
			var d3th = d3.select(th);
			
			d3th.style('fill', roottg.options.contents.selectcolor);
			d3th.attr("select","active");
			
			roottg.selectedItem = {elem:d3th,data:d3th.data()[0]};
			
			//console.log(d3.event.clientX,d3.event.pageX,d3.event.pageY,translate,scale);
			
			var scale = roottg.scale;
			var translate = roottg.translate;
			
			/**위치 잡기.*/
			/*
			//현재 메인 좌표 위치
			var pos = roottg.$el.position();
			
			//스크린좌표(스크롤 적용)
			var dX = d3.event.pageX;
			var dY = d3.event.pageY;
			
			var scale = roottg.scale;
			var translate = roottg.translate;
			
			//위치 잡기.
			//현재 메인 좌표 위치
			var pos = roottg.$el.position();
			
			//스크린좌표(스크롤 적용)
			var dX = d3.event.pageX;
			var dY = d3.event.pageY;
			
			var scale_xy = 1/scale;
			
			var mx = -(pos.left/scale) + (dX/scale) - (translate[0]/scale);
			var my = -(pos.top/scale)  + (dY/scale) - (translate[1]/scale)

			//console.log(scale,scale_xy,(dX*scale_xy),(dY*scale_xy),mx,my)
			//---------------------------------------------------------------
			*/

			var eventObj = roottg.pointxy(roottg, th, /*d*/d3th.data()[0]);
			roottg.$el.trigger("mapclick",eventObj);
		},
		pointxy : function(roottg,th,d){

			var dX=0,dY=0;
			if(d3.event != null){
				dX = d3.event.pageX;
				dY = d3.event.pageY;
			}

			var mapsize = roottg.mapsize;
			var mapscale = roottg.rootmap[0][0].getBoundingClientRect();
			var mappostion = $(roottg.rootmap[0]).position();

			var scalex = 1/(mapscale.width/mapsize[0]);
			var scaley = 1/(mapscale.height/mapsize[1]);

			//console.log("==========================")
			//192 ,87
			var mx = (dX - mappostion.left )  * scalex  ;
			var my = (dY - mappostion.top )  * scaley  ;
			//console.log(mx,my)

			//좌표 복호화
			var _mx = (mx/scalex) + mappostion.left;
			var _my = (my/scaley) + mappostion.top;

			//rectangle1.e.css({"left" : _mx , "top" : _my} );

			var eventObj ={};
			eventObj.event = d3.event;
			eventObj.pageX = dX;
			eventObj.pageY = dY;
			eventObj.mapsize = mapsize;
			eventObj.roottg = roottg;
			eventObj.mapscale = mapscale;
			eventObj.scale = [scalex, scaley];
			eventObj.x = mx;
			eventObj.y = my;
			eventObj.dx = _mx;
			eventObj.dy = _my;
			eventObj.data = d;
			eventObj.id = th;
			eventObj.item = d.data;
			return eventObj;
		}
	 };

	$.vbox_mapchart.defaultOptions = {
		maptype:"",
		defaultcolor : "#9BDCF9,#62BBE9",
		defaultspaceonuse  : true,
        selectcolor : "#186daa",
		rollovercolor : "#186daa",
		zoom : false,
		label: true,
		labelfontsize: 10
    };

	$.fn.vbox_mapchart = function(options,th){
		if($.type(options) === "undefined"){
			return $(this).data('vbox_mapchart');
		}
		return this.each(function (idx) {
			if (undefined === $(this).data('vbox_mapchart')) {
				$(this).data('vbox_mapchart', new $.vbox_mapchart(this, options,th));
			};
		})
    };