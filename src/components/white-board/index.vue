<template>
    <div class="white-board" v-show='show'>
        <div id="boardToolContainer" class="boardToolContainer">
            <div class="left-tool">
                <div id="pencil" title="Brush" class="boardBtn tool"><i class="iconfont icon-pencil" ></i></div>
                <div id="eraser"   title="Eraser" class="boardBtn tool"><i class="iconfont icon-eraser"></i></div>
                <div id="clear" title="Clear Board" class="boardBtn"><i class="iconfont icon-refresh"></i></div>
                <div id="text"  title="Text" class="boardBtn tool"><i class="iconfont icon-text"></i></div>
                <div id="bucket"  title="Paint Bucket" class="boardBtn tool" hidden="hidden">F</div>

                <div id="line" title="Line"  class="boardBtn tool"><i class="iconfont icon-line"></i></div>
                <div id="rectangle" title="Rectangle" class="boardBtn tool"><i class="iconfont icon-rectangle"></i></div>
                <div id="ellipse" title="Ellipse" class="boardBtn tool"><i class="iconfont icon-circle"></i></div>
                <div style="margin:0 5px;">
                    <select id="toolWidth" class="form-control">
                        <option value="1">1</option>
                        <option value="2" selected='selected'>2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div class="boardBtn tool">
                    <span id="save" title="Save to local storage" class="boardBtn"><i class="iconfont icon-save"></i></span>
                </div>   
                <div class="boardBtn">
                    <i class="iconfont icon-close" id='closeBoard'></i>
                </div>             
            </div> 
            <div class='show-color' id='showColor'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>            
            <!--拾色板-->
            <div id="colorContainer" class="colorContainer">
                <div class="color-inner">
                    <table class='pc-table'>
                        <tr>
                            <td rowspan="2">
                                <div class="currentColor"></div>
                            </td>
                            <td>
                                <div class="color" style="background-color:black"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:white"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:red"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:blue"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:green"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:crimson"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:skyblue"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:deepskyblue"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:purple"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:slateblue"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:brown"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:saddlebrown"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:dodgerblue"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:olive"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:forestgreen"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:ornage"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:gold"> </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="color" style="background-color:gray"></div>
                            </td>
                            <td>
                                <div class="color" style="background-color:darkgray"></div>
                            </td>
                            <td>
                                <div class="color" style="background-color:whitesmoke"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:azure"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:pink"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:burlywood"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:coral"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:chocolate"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:firebrick"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:slateblue"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:darkorange"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:darksalmon"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:deeppink"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:violet"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:darkturquoise"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:turquoise"> </div>
                            </td>
                            <td>
                                <div class="color" style="background-color:cornflowerblue"> </div>
                            </td>
                        </tr>
                    </table>
                    <ul class='mobile-table'>
                        <li>
                            <div rowspan="4">
                                <div class="currentColor"></div>
                            </div>
                            <div>
                                <div class="color" style="background-color:black"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:white"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:red"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:blue"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:green"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:crimson"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:skyblue"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:deepskyblue"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:purple"> </div>
                            </div>
                        
                            <div>
                                <div class="color" style="background-color:slateblue"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:brown"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:saddlebrown"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:dodgerblue"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:olive"> </div>
                            </div>

                            <div>
                                <div class="color" style="background-color:forestgreen"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:ornage"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:gold"> </div>
                            </div>
                        
                        
                            <div>
                                <div class="color" style="background-color:gray"></div>
                            </div>
                            <div>
                                <div class="color" style="background-color:darkgray"></div>
                            </div>
                            <div>
                                <div class="color" style="background-color:whitesmoke"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:azure"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:pink"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:burlywood"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:coral"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:chocolate"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:firebrick"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:slateblue"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:darkorange"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:darksalmon"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:deeppink"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:violet"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:darkturquoise"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:turquoise"> </div>
                            </div>
                            <div>
                                <div class="color" style="background-color:cornflowerblue"> </div>
                            </div>
                        </li>
                    </ul>
                    </table>
                </div>                
            </div>
        </div>
        <div class="canvas-container">
            <canvas id="layer" @touchstart='drawStart' @touchmove.prevent='drawMove' @touchend='drawEnd' class="cnvs" style="z-index:1; cursor:crosshair;background: transparent;"></canvas>
            <canvas id="canvas2" @touchstart='drawStart' @touchmove.prevent='drawMove' @touchend='drawEnd' class="cnvs" style="z-index:0;background: transparent;"></canvas>
            <canvas id="canvas" @touchstart='drawStart' @touchmove.prevent='drawMove' @touchend='drawEnd' class="cnvs" style="z-index:3;background: #fff;"></canvas>
        </div>
        <div class="confirm-box" id='confirm-box'>
            <div class="box-inner">
                <div class='confirm-box-header'>确认框</div>
                <div class="confirm-box-content">是否清除面板所有内容？</div>
                <div class="confirm-box-footer">
                    <span id='confirm-cancel'>取消</span>
                    <span id='confirm-ok'>确认</span>
                </div>
            </div>            
        </div>
        <div id="txtDialog">
            <input type="text" id="txtValue" placeholder="请输入文字" />
            <select id="txtFontSize">
                <option>8</option>
                <option>10</option>
                <option>12</option>
                <option>14</option>
                <option selected>16</option>
                <option>18</option>
                <option>20</option>
                <option>24</option>
                <option>28</option>
                <option>30</option>
                <option>32</option>
                <option>34</option>
                <option>36</option>
                <option>48</option>
                <option>72</option>
            </select>
            <select id="txtFontStyle">
                <option>Bold</option>
                <option>Italic</option>
                <option selected>Normal</option>

            </select>
            <button id="txtCancel">取消</button>
            <button id="txtInsert">插入</button>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery'
    var config = require('../../../config')
    var port = process.env.PORT || config.dev.port;
    import { Loading } from 'vux'
    export default{
        data(){
            return {
                currentLineSize:0,
                dataUrl:'',
                show:this.isShow,
                currentLineSize:0,
                dataUrl:'',
                show:this.isShow,
                canvas:null,
                layer:null,
                currentLineSize:4,
                width:0,
                height:0,
                ctx:null,
                lCtx:null,
                tool:'pencil',
                currentColor:'',
                currentBrushSize:0,
                currentEraserSize:0,
                currentFont:0,
                tempDraw:[],
                socket:null,
                mouseDown:false,
                iX:0,
                iY:0,
                fX:0,
                fY:0,
                isConfirm:false,
                imageUrl:''
            }
        },
        mounted(){
            const self = this;   
        },
        props:{
            isShow:{
                type:Boolean,
                default:true
            },
            backgroundImage:{
                type:String,
                default:''
            },
            showMenu:{
                type:Boolean,
                default:true
            }
        },
        methods:{
            init(options){
                const self = this;
                self.canvas = document.querySelector('#canvas');
                self.layer = document.querySelector('#layer');

                self.width = self.canvas.width;
                self.height = self.canvas.height;

                self.ctx = self.canvas.getContext('2d');
                self.lCtx = self.canvas.getContext('2d');
                self.socket = io(options.socketHost);
                self.imageUrl = options.backgroundImage;
                self.createImage(self.imageUrl);
                console.log('imageUrl:',self.imageUrl)

                self.canvas.width = document.documentElement.clientWidth;
                self.canvas.height = document.documentElement.clientHeight;

                document.querySelector('.cnvs').width = self.canvas.width;
                document.querySelector('.cnvs').height = self.canvas.height;
                self.fixWidth();

                $("#save").click(function () {    
                    self.$vux.loading.show({
                        text: ' '
                    })                
                    self.dataUrl = canvas.toDataURL('image/png');
                    self.$emit('save',self.dataUrl);
                    setTimeout(()=>{
                        self.$vux.loading.hide();
                    },3500)
                });

                $(".tool").click(function () {        
                    self.changeTool($(this).attr("id"));
                    self.socket.emit('changeTool',$(this).attr('id'))
                });

                $("#toolWidth").change(function () {
                    self.changeSize($(this).val().toString(), self.tool);
                    self.socket.emit('changeToolWidth',{value:$(this).val().toString(),tool:self.tool});
                });

                $("#clear").click(function () {
                    $('#confirm-box').show();  
                });

                $("#txtInsert").click(function (e) {
                    var pageX = e.pageX || e.targetTouches[0].pageX;
                    var pageY = e.pageY || e.targetTouches[0].pageY;
                    self.insertText({x:pageX,y:pageY});
                    self.socket.emit('textInsert',{x:pageX,y:pageY})
                });

                /** socket.io **/
                self.socket.on('touchstart', function (data) { 
                    if($('.mobile-table').css('display') == 'block'){
                        $('#colorContainer').hide();
                    }
                    self.makeMouseDown(data.x,data.y);           
                });
                self.socket.on('touchmove', function (data) {        
                    self.makeMouseMove(data.x,data.y);           
                });

                self.socket.on('touchend', function (data) { 
                    self.makeMouseUp();           
                })

                self.socket.on('changeTool',function(data){
                    self.changeTool(data)
                })
                self.socket.on('textInsert',function(data){
                    self.insertText(data)
                })
                self.socket.on('textCancel',function(data){
                    $("#txtDialog").hide(100);
                    $("#txtValue").val("");
                })
                self.socket.on('textValue',function(data){
                    // $("#txtDialog").hide();
                    self.lCtx.font = $("#txtFontStyle").val() + " " + $("#txtFontSize").val() + "px " + $("#txtFontFamily").val();
                    self.ctx.font = $("#txtFontStyle").val() + " " + $("#txtFontSize").val() + "px " + $("#txtFontFamily").val();
                    self.currentFont = self.ctx.font;
                    // var pos = getMousePos(canvas, event);
                    var pos = event;
                    self.lCtx.fillText(data, pos.x, pos.y);
                    self.tempDraw.push({
                        txtData: data
                    });
                    $("#txtValue").val("");
                    self.mouseDown = true;
                })
                self.socket.on('changeColor',function(data){
                    self.changeColor(data);
                    $(".currentColor").css("background-color",data);
                })
                self.socket.on('changeToolWidth',function(data){
                    self.changeSize(data.value,data.tool);
                })
                self.socket.on('showColor',function(data){
                    $('#colorContainer').toggle();
                })

                self.socket.on('clearScreen',function(data){
                    self.clear('canvas');
                    self.clear('layer');
                });
            },
            createImage(url){
                const self = this;
                var img = new Image();
                img.src = url;
                img.onload = drawImg;
                function drawImg(){                     
                    self.ctx.drawImage(img,0,0,self.canvas.width,self.canvas.height)
                }
            },

            drawStart(event){
                const self = this;
                if($('.mobile-table').css('display') == 'block'){
                    $('#colorContainer').hide();
                }
                var pageX = event.pageX || event.targetTouches[0].pageX;
                var pageY = event.pageY || event.targetTouches[0].pageY;

                self.makeMouseDown(pageX,pageY);
                self.socket.emit('touchstart', {x:pageX,y:pageY});                 
            },
            drawMove(event){
                const self = this;

                var pageX = event.pageX || event.targetTouches[0].pageX;
                var pageY = event.pageY || event.targetTouches[0].pageY;
                self.makeMouseMove(pageX,pageY);
                self.socket.emit('touchmove', {x:pageX,y:pageY})                
            },
            drawEnd(){
                const self = this;
                self.makeMouseUp();
                self.socket.emit('touchend', 'touchend');                  
            },
            makeMouseDown(x,y){
                const self = this;
                self.mouseDown = true;
                self.iX = x;
                self.iY = y-60;

                if (self.tool === 'text') {
                    //set the moving text on mouse down
                    self.clear('layer');
                    self.ctx.fillText(self.tempDraw[0].txtData, self.iX, self.iY);
                    self.socket.emit('text', {
                        text: self.tempDraw[0].txtData,
                        x: self.iX,
                        y: self.iY,
                        color: self.currentColor,
                        font: self.ctx.font
                    })
                    self.switchBoard('normal');
                    self.changeTool('pencil');
                } else if (self.tool === 'line' || self.tool === 'rectangle' || self.tool === 'ellipse' || self.tool === 'select') {
                    console.log('mousedown line')
                    self.switchBoard('inverse');
                } else if (self.tool === 'eraser') {
                    //make eraser independent ot currentLineSize and currentColor
                    self.lCtx.strokeStyle = "black";
                    self.lCtx.lineWidth = "1";

                    self.ctx.fillStyle = "white";

                    self.switchBoard('inverse');
                }
                self.tempDraw = [];
            },
            clear(element){
                const self = this;
                //清除之前确认
                if (element === 'layer') {
                    self.lCtx.clearRect(0, 0, self.width, self.height);
                } else if (element === 'canvas') {
                    self.ctx.clearRect(0, 0, self.width, self.height);
                    self.createImage(self.imageUrl);
                    console.log('clear: imageUr',self.imageUrl)
                }
            },
            switchBoard(type) {
                const self = this;
                if (type === 'normal') {
                    $("#canvas").css("z-index", 1);
                    $("#layer").css("z-index", 0);
                } else if (type === 'inverse') {
                    $("#canvas").css("z-index", 0);
                    $("#layer").css("z-index", 1);
                }
            },
            changeTool(t) {
                const self = this;
                self.tool = t;
                console.log('tool:',self.tool)

                if (self.tool === 'pencil') {
                    // changeCursor("url(images/brush.png), auto");
                    $("#toolWidth").val(self.currentBrushSize);
                    self.ctx.strokeStyle = self.currentColor;
                    self.ctx.lineWidth = self.currentBrushSize;
                } else if (self.tool === 'eraser') {
                    //change cursor
                    // changeCursor("url(images/eraser.png), auto");
                    $("#toolWidth").val(self.currentEraserSize);
                    self.switchBoard('inverse');

                } else if (self.tool === 'line' || self.tool === 'rectangle' || self.tool === 'ellipse' || self.tool === 'select') {

                    // self.changeCursor("crosshair");
                    self.ctx.lineWidth = self.currentLineSize;
                    self.lCtx.lineWidth = self.currentLineSize;

                    $("#toolWidth").val(self.currentLineSize);
                    self.switchBoard('inverse');

                } else if (self.tool === 'text') {
                    $("#txtDialog").show(100);
                    self.changeCursor("text");
                    self.ctx.fillStyle = self.currentColor;
                    self.switchBoard('inverse');

                    self.socket.emit('changeCursor','text')
                    self.socket.emit('switchBoard','inverse')
                }
            },
            makeMouseUp() {
                const self = this;
                self.mouseDown = false;

                if (self.tool === 'pencil') {
                    self.socket.emit("pencil", {
                        boardData: self.tempDraw,
                        brushSize: self.currentBrushSize,
                        brushColor: self.currentColor
                    });
                } else if (self.tool === 'eraser') {

                    self.socket.emit('eraser', {
                        eraserData: self.tempDraw,
                        eraserSize: self.currentEraserSize
                    });
                    self.clear('layer');
                    self.switchBoard('normal');

                    self.lCtx.fillStyle = self.currentColor;
                    self.ctx.fillStyle = self.currentColor;

                } else if (self.tool === 'line') {

                    // draw in real canvas

                    self.ctx.lineWidth = self.currentLineSize;
                    self.ctx.beginPath();
                    self.ctx.moveTo(self.iX, self.iY);
                    self.ctx.lineTo(self.fX, self.fY);
                    self.ctx.stroke();

                    //hide the layer
                    self.switchBoard('normal');
                    self.clear('layer');


                    self.tempDraw.push({
                        x: self.iX,
                        y: self.iY
                    }); //store in array
                    self.tempDraw.push({
                        x: self.fX,
                        y: self.fY
                    }); //''''
                    self.socket.emit('line', {
                        points: self.tempDraw,
                        lineSize: self.currentLineSize,
                        lineColor: self.currentColor
                    });


                } else if (self.tool === 'rectangle') {

                    self.ctx.beginPath();
                    self.ctx.rect(self.iX, self.iY, self.fX - self.iX, self.fY - self.iY);
                    self.ctx.stroke();

                    //hide the layer
                    $("#canvas").css("z-index", 1);
                    $("#layer").css("z-index", 0);
                    self.clear('layer');


                    self.tempDraw.push({
                        x: self.iX,
                        y: self.iY,
                        w: (self.fX - self.iX),
                        h: (self.fY - self.iY)
                    }); //store in array
                    self.socket.emit('rectangle', {
                        points: self.tempDraw,
                        lineSize: self.currentLineSize,
                        lineColor: self.currentColor
                    });


                } else if (self.tool === 'ellipse') {


                    var radius = ((self.fX - self.iX) + (self.fY - self.iY)) / 4;

                    self.ctx.beginPath();
                    self.ctx.moveTo(self.iX, self.iY);
                    self.ctx.bezierCurveTo(self.iX, self.fY, self.fX, self.fY, self.fX, self.iY);
                    self.ctx.moveTo(self.iX, self.iY);
                    self.ctx.bezierCurveTo(self.iX, self.fY - 2 * (self.fY - self.iY), self.fX, self.fY - 2 * (self.fY - self.iY), self.fX, self.iY);
                    self.ctx.stroke();


                    //hide the layer
                    $("#canvas").css("z-index", 1);
                    $("#layer").css("z-index", 0);
                    self.clear('layer');


                    self.socket.emit('ellipse', {
                        points: {
                            ix: self.iX,
                            iy: self.iY,
                            fx: self.fX,
                            fy: self.fY,
                            r: radius
                        },
                        lineSize: self.currentLineSize,
                        lineColor: self.currentColor
                    });


                } else if (self.tool === 'select') {

                    self.tempDraw.push({
                        selectedPart: self.ctx.getImageData(self.iX, self.iY, self.fX - self.iX, self.fY - self.iY),
                        selected: true
                    });

                }
                // clear the array when work is finished
                self.tempDraw = [];
            },
            makeMouseMove(pageX,pageY) {
                const self = this;
                if (self.mouseDown) {
                    self.draw(pageX,pageY-60);
                }
            },
            draw(pageX,pageY) {
                const self = this;
                var pos = {
                    x:pageX,
                    y:pageY
                }
                if (self.tool === "pencil") {
                    self.tempDraw.push({
                        x: self.iX,
                        y: self.iY
                    });
                    self.fX = pos.x;
                    self.fY = pos.y;
                    self.tempDraw.push({
                        x: self.fX,
                        y: self.fY
                    });
                    self.ctx.beginPath();
                    self.ctx.moveTo(self.iX, self.iY);
                    self.ctx.lineTo(self.fX, self.fY);
                    self.ctx.stroke();
                    self.iX = self.fX;
                    self.iY = self.fY;

                } else if (self.tool === "eraser") {

                    self.clear('layer');
                    self.lCtx.beginPath();
                    self.lCtx.arc(pos.x + 8, pos.y + 8, self.currentEraserSize, 0, 2 * Math.PI);
                    self.lCtx.stroke();

                    self.ctx.beginPath();

                    var into = $("#canvas2")[0];
                    var ctx2 = into.getContext('2d');
                    var image = new Image();
                    image.src = self.imageUrl;

                    ctx2.drawImage(image,0,0,self.canvas.width,self.canvas.height);
                    var pattern = self.ctx.createPattern(into, "no-repeat");
                    self.ctx.fillStyle = pattern;

                    self.ctx.arc(pos.x + 8, pos.y + 8, self.currentEraserSize, 0, 2 * Math.PI);
                    self.ctx.fill();

                    self.tempDraw.push({
                        x: pos.x + 8,
                        y: pos.y + 8
                    });

                } else if (self.tool === 'line') {

                    self.clear('layer');
                    self.fX = pos.x;
                    self.fY = pos.y;
                    self.lCtx.beginPath();
                    self.lCtx.moveTo(self.iX, self.iY);
                    self.lCtx.lineTo(self.fX, self.fY);
                    self.lCtx.stroke();

                } else if (self.tool === 'rectangle') {

                    self.clear('layer');
                    self.fX = pos.x;
                    self.fY = pos.y;
                    self.lCtx.beginPath();
                    self.lCtx.rect(self.iX, self.iY, self.fX - self.iX, self.fY - self.iY);
                    self.lCtx.stroke();

                } else if (self.tool === 'ellipse') {

                    self.clear('layer');
                    self.fX = pos.x;
                    self.fY = pos.y;

                    self.lCtx.beginPath();
                    self.lCtx.moveTo(self.iX, self.iY);
                    self.lCtx.bezierCurveTo(self.iX, self.fY, self.fX, self.fY, self.fX, self.iY); // upper curve
                    self.lCtx.moveTo(self.iX, self.iY);
                    self.lCtx.bezierCurveTo(self.iX, self.fY - 2 * (self.fY - self.iY), self.fX, self.fY - 2 * (self.fY - self.iY), self.fX, self.iY); // lower curve
                    self.lCtx.stroke();

                } else if (self.tool === 'text') {

                    self.clear('layer');
                    self.lCtx.fillText(self.tempDraw[0].txtData, pos.x, pos.y);
                } else if (self.tool === 'select') {

                    self.clear('layer');

                    if (self.tempDraw.length === 0 && self.mouseDown) { // if nothing is selected

                        self.fX = pos.x;
                        self.fY = pos.y;
                        self.lCtx.lineWidth = 0.1;
                        self.lCtx.setLineDash([4, 4]);
                        self.lCtx.beginPath();
                        self.lCtx.rect(self.iX, self.iY, self.fX - self.iX, self.fY - self.iY);
                        self.lCtx.stroke();
                    }
                    //already selected
                    else {
                        self.lCtx.putImageData(self.tempDraw[0].selectedPart, pos.x, pos.y);
                    }
                }
            },
            changeCursor(cursor) {
                $(".cnvs").css("cursor", cursor);
            },
            changeSize(size, tool) {
                const self = this;
                if (self.tool === 'pencil') {
                    self.ctx.lineWidth = size;
                    self.currentBrushSize = size;

                } else if (self.tool === 'eraser') {
                    // prevent eraser size from enlarging more than screen
                   self.currentEraserSize = (10 * size) / 2;
                } else if (self.tool === 'line' || self.tool === 'rectangle' || self.tool === 'ellipse') {

                    self.currentLineSize = size;
                    self.ctx.lineWidth = size;
                    self.lCtx.lineWidth = size;
                }
            },
            resetLineWidth() {
                const self = this;
                //reset default line width, stroke style, fill style
                if (self.tool === 'line' || self.tool === 'rectangle' || self.tool === 'ellipse') {
                    self.ctx.lineWidth = self.currentLineSize;
                    self.lCtx.lineWidth = self.currentLineSize;
                } else if (self.tool === 'pencil') {
                    self.ctx.lineWidth = self.currentBrushSize;
                    self.lCtx.lineWidth = self.currentBrushSize;
                }

                self.lCtx.strokeStyle = self.currentColor;
                self.ctx.strokeStyle = self.currentColor;
            },
            getMousePos(canvas, evt) {
                return {
                    x: evt.pageX,
                    y: evt.pageY
                };
            },
            fixWidth() {
                const self = this;
                self.width = $(window).width();
                self.height = $(window).height()-60;

                $(".cnvs").attr("width", self.width);
                $(".cnvs").attr("height", self.height);

                //on resize all settings are cleared
                self.setDefaults();
            },
            setDefaults() {
                const self = this;
                //set defaults
                self.changeColor("black");
                self.changeSize(2, 'pencil');
                self.changeSize(2, 'line');
                self.changeSize(10, 'eraser');
                self.changeTool("pencil");

                //make brush smooth
                self.ctx.lineJoin = 'round';
                self.ctx.lineCap = 'round';
                self.lCtx.lineJoin = 'round';
                self.lCtx.lineCap = 'round';

                $("#txtDialog").hide();
            },
            changeColor(color) {
                const self = this;
                self.ctx.strokeStyle = color;
                self.lCtx.strokeStyle = color;
                self.ctx.fillStyle = color;
                self.lCtx.fillStyle = color;
                self.currentColor = color;
            },
            insertText(event) {
                const self = this;
                $("#txtDialog").hide();
                self.lCtx.font = $("#txtFontStyle").val() + " " + $("#txtFontSize").val() + "px " + $("#txtFontFamily").val();
                self.ctx.font = $("#txtFontStyle").val() + " " + $("#txtFontSize").val() + "px " + $("#txtFontFamily").val();
                self.currentFont = self.ctx.font;
                // var pos = getMousePos(canvas, event);
                var pos = event;

                self.socket.emit('textValue',$("#txtValue").val())

                self.lCtx.fillText($("#txtValue").val(), pos.x, pos.y);
                self.tempDraw.push({
                    txtData: $("#txtValue").val()
                });
                $("#txtValue").val("");
                self.mouseDown = true;

            }
        }
    }
</script>
<style>
.weui-toast{width: auto !important;padding-left: 1rem;padding-right: 1rem;}
  .weui-toast__content{font-size: 1.4rem !important;}
  .weui-icon_toast.weui-loading{margin: 0 !important}
  .vux-loading .weui-toast{min-height: 5rem !important;display: flex;align-items: center;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}
  .weui-toast.weui-toast_text{width: auto !important;}
    .white-board{
        height: 100%;
    }

    .cnvs{  
        position: absolute;
        top: 60px;
        left: 0;   
    }

    #txtDialog{
        position: absolute;
        top: 100px;
        left: 10px;
        border-style: none;
        border-radius: 5px;
        background-color: whitesmoke;
        z-index: 10;
        text-align:left;
        font-family:sans-serif;
        padding: 10px;
        box-shadow: 2px 2px 2px #ccc;
        box-sizing: border-box;
        width: 93%;
    }

    #txtDialog > button, #txtDialog > select{
        border-style: solid;
        border-width: 1px;
        border-color: saddlebrown;
        background-color: whitesmoke;    
        color: saddlebrown; 
        border-radius: 5px;
        padding: 5px;
        outline: none;
        margin-bottom: 5px;
    }

    #txtDialog button:hover{
        
        border-color: saddlebrown;
        border-color: saddlebrown;
        background-color: saddlebrown;
        color: whitesmoke;
        cursor: pointer;
    }

    #txtDialog input{
        
        border-style: solid;
        border-width: 1px;
        border-color: saddlebrown;
        background-color: whitesmoke;    
        color: black; 
        border-radius: 5px;
        padding: 5px 5px 5px 5px;
        outline: none;
        font-weight:lighter;
    }

    .color{
        width: 15px;
        height: 15px;
        margin: 1px;
        border-radius: 10px;
        float: left; 
        border-style: solid;
        border-width: 1px;
        border-color: dimgray;
    }

    .color:hover{
        cursor: pointer;
        opacity: 0.6;
    }

    .currentColor{
        
        width: 35px;
        height: 35px;
        border-radius: 17px;
        background-color: black;
        border-style: solid;
        border-width: 1px;
        /*margin-right: 5px;*/
       
    }

    #colorContainer{
         float: right;
         margin-top: -3px;
    }

    .boardBtn{
        width: auto;
        height: auto;
        background-color: white;
        color: saddlebrown;
        font-size: 20px;
        border-style: none;
        float: left;
        /*margin-left: 5px;*/
        text-align: center;
        padding: 5px;    
    }

    .boardBtn:hover{   
        cursor: pointer;
        color:black;
        color:#2e6da4;
        font-weight: bold;
    }

    #toolWidth{
        width: 60px;
        padding-left: 0px;
        height: 30px;
        /*margin-left: 5px;*/
        /*margin-right: 5px;    */
        float: left;
        font-family: sans-serif;
        border-radius: 2px !important;
        font-weight: lighter !important;
        font-size: 1.4rem !important;
        background: #fff;
        text-align: center;
    }

    .seperator{
        width: 1px;
        height: 100%;
        background-color: #ccc;
        /*margin-left: 5px;*/
        /*margin-right: 5px;*/
        float: left;
    }

    #boardToolContainer{
        box-sizing: border-box;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 5;
        margin-bottom: 5px;
        width: 100%;
        height: 40px;
        background-color: white;    
        box-shadow: 1px 1px 5px 1px #ccc;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;      
    }
    .boardToolContainer{height: 60px !important;}
    .left-tool{height: 100%;display: flex;flex-flow: row;align-items: center;}

    .show-color{position: fixed;right: 1rem;bottom: 1rem;width: 3rem;display: none;}
    .show-color>span{display: block;float:left;width: 1rem;height: 1rem;margin:1px;}
    .show-color>span:nth-child(1){/*border-radius:4px 0 0 0;*/background: #00aaeb;}
    .show-color>span:nth-child(2){/*border-radius:0 4px 0 0;*/background: #ffae45;}
    .show-color>span:nth-child(3){/*border-radius:0 0 0 4px;*/background: #33d246;}
    .show-color>span:nth-child(4){/*border-radius:0 0 4px 0;*/background: #ff623b;}
    .mobile-table{display: none;}
    .pc-table{display: block;}

    ul{margin:0;padding: 0;}
    ul li{list-style: none;overflow: hidden;}
    
    .left-tool .iconfont{font-size: 20px;}

    .confirm-box{display: none;position: fixed;left: 0;bottom: 0;height: 100%;width: 100%;content: '';background: rgba(0,0,0,.5);z-index: 999;font-size: 1rem;}
    .box-inner{position: fixed;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);min-width: 300px;min-height: 170px;background: #fff;z-index: 999;border-radius:.2rem;}
    .confirm-box-header{padding:1rem;width: 100%;text-align: center;box-sizing: border-box;border-bottom: 1px solid #ddd;}
    .confirm-box-content{padding: 1rem;}
    .confirm-box-footer{position: absolute;bottom: 1rem;right: 1rem;}
    .confirm-box-footer>span{display: inline-block;padding: .5rem 1.5rem;border:1px solid #ddd;text-align: center;border-radius: .2rem;}
    .confirm-box-footer>span:nth-child(2){background: #409eff;color:#fff;border:1px solid #409eff;}

    .canvas-container{height: 100%;}
    @media screen and (max-width: 1024px){
        .left-tool{width: 100%;}
        .show-color{display: block;}
        .colorContainer{display: none;}
        .left-tool>div{flex: 1;}
        .colorContainer{/*position: fixed;bottom: 0;left:0;height: 100%;width: 100%;background: rgba(0,0,0,.5)*/position: fixed;bottom: 0;left: 0;background: #fff;padding:5px;width: 100%;border-top: 1px solid #ddd;}
        
        .mobile-table{display: block;}
        .pc-table{display: none;}
        .color{height: 30px;width: 30px;border-radius: 100%;margin:2px;}
        .currentColor{width: 80px;border:none;margin: 5px auto 10px auto;}
    }
</style>
        