<template>
    <div class="white-board" v-show='show'>
        <div id="boardToolContainer" class="boardToolContainer">
            <div class="left-tool">
                <div id="pencil" title="Brush" class="boardBtn tool"><i class="iconfont icon-pencil"></i></div>
                <div id="eraser" title="Eraser" class="boardBtn tool"><i class="iconfont icon-eraser"></i></div>
                <div id="clear" title="Clear Board" class="boardBtn"><i class="iconfont icon-refresh"></i></div>
                <div id="text" title="Text" class="boardBtn tool"><i class="iconfont icon-text"></i></div>
                <div id="bucket" title="Paint Bucket" class="boardBtn tool" hidden="hidden">F</div>

                <div id="line" title="Line" class="boardBtn tool"><i class="iconfont icon-line"></i></div>
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
        <div class="canvas-container" >
            <canvas id="layer" class="cnvs" style="z-index:1; cursor:crosshair;background: transparent;"></canvas>
            <canvas id="canvas2" class="cnvs" style="z-index:0;background: transparent;"></canvas>
            <canvas id="canvas" class="cnvs" style="z-index:3;background: #fff;"></canvas>
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
                canvas:null,
                currentLineSize:0,
                dataUrl:'',
                show:this.isShow
            }
        },
        mounted(){
            const self = this;              
            self.init(self.backgroundImage);            
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
            // colseBoard(){
            //     this.show = false;
            //     this.$emit('showBoard',false);
            //     socket.emit('showBoard',false);

            //     socket.on('showBoard',function(data){
            //         console.log('showBoard:',data)
            //     })
            // },
            init(url){
                const self = this;
                var canvas,canvasBg;
                var currentLineSize;

                if(!this.isShow){
                    return
                }
                canvas = $("#canvas")[0];
                // canvasBg = $('#canvasBg')[0];

                var layer = $("#layer")[0];
                var width = $("#canvas").width();
                var height = $("#canvas").height();
                var ctx = canvas.getContext("2d");
                var lCtx = layer.getContext('2d');
                var tool, currentColor, currentBrushSize, currentEraserSize, currentFont;
                var tempDraw = [];
                var socket = io('http://192.168.8.31:8080');
                console.log('id:',socket)
                // for(var i in socket){
                //     console.log(i)
                // }
                var mouseDown = false;
                var iX, iY, fX, fY;
                var isConfirm = false;
                createImage();

                // $(".cnvs").mousedown(function (event) {
                //     makeMouseDown(event);
                // })

                $(".cnvs").on('mousedown touchstart',function(event){
                        if($('.mobile-table').css('display') == 'block'){
                            $('#colorContainer').hide();
                        }
                        var pageX = event.pageX || event.originalEvent.targetTouches[0].pageX;
                        var pageY = event.pageY || event.originalEvent.targetTouches[0].pageY;

                        makeMouseDown(pageX,pageY);
                        socket.emit('touchstart', {x:pageX,y:pageY});
                    }
                )
                socket.on('touchstart', function (data) { 
                    if($('.mobile-table').css('display') == 'block'){
                        $('#colorContainer').hide();
                    }
                    makeMouseDown(data.x,data.y);           
                })                
                        

                $('#closeBoard').on('click',function(){
                    self.show = false;
                    console.log('show:',self.show);
                    self.$emit('showBoard',false);
                    // socket.emit('hideBoard',false);                    
                });

                socket.on('hideBoard',function(data){
                    console.log('hideBoard:',data);
                    self.show = data;
                })

                // $(".cnvs").mouseup(function () {
                //     makeMouseUp();
                // });

                $(".cnvs").on('mouseup touchend',function(){
                    makeMouseUp();    
                    socket.emit('touchend', 'touchend');   
                });   
                socket.on('touchend', function (data) { 
                    makeMouseUp();           
                }) 

                // $(".cnvs").mousemove(function (event) {
                //     makeMouseMove(event);
                // });

                $(".cnvs").on('mousemove touchmove',function(event){
                    event.preventDefault();
                    var pageX = event.pageX || event.originalEvent.targetTouches[0].pageX;
                    var pageY = event.pageY || event.originalEvent.targetTouches[0].pageY;
                    makeMouseMove(pageX,pageY);
                    socket.emit('touchmove', {x:pageX,y:pageY})
                });

                socket.on('touchmove', function (data) {        
                    makeMouseMove(data.x,data.y);           
                })

                $(".tool").click(function () {        
                    changeTool($(this).attr("id"));
                    socket.emit('changeTool',$(this).attr('id'))
                });

                socket.on('changeTool',function(data){
                    changeTool(data)
                })


                //text controls///////////////////////////////   
                $("#txtInsert").click(function (e) {
                    var pageX = e.pageX || e.originalEvent.targetTouches[0].pageX;
                    var pageY = e.pageY || e.originalEvent.targetTouches[0].pageY;
                    insertText({x:pageX,y:pageY});
                    socket.emit('textInsert',{x:pageX,y:pageY})
                });

                socket.on('textInsert',function(data){
                    insertText(data)
                })

                $("#txtValue").keydown(function (e) {

                    //insert text on ENTER        
                    if (e.keyCode === 13) insertText();

                });

                $("#txtCancel").click(function () {
                    $("#txtDialog").hide(100);
                    $("#txtValue").val("");
                    socket.emit('textCancel','textCancel')
                });

                socket.on('textCancel',function(data){
                    $("#txtDialog").hide(100);
                    $("#txtValue").val("");
                })
                //////////////////////////////////////////////

                function insertText(event) {
                    $("#txtDialog").hide();
                    lCtx.font = $("#txtFontStyle").val() + " " + $("#txtFontSize").val() + "px " + $("#txtFontFamily").val();
                    ctx.font = $("#txtFontStyle").val() + " " + $("#txtFontSize").val() + "px " + $("#txtFontFamily").val();
                    currentFont = ctx.font;
                    // var pos = getMousePos(canvas, event);
                    var pos = event;

                    socket.emit('textValue',$("#txtValue").val())

                    lCtx.fillText($("#txtValue").val(), pos.x, pos.y);
                    tempDraw.push({
                        txtData: $("#txtValue").val()
                    });
                    $("#txtValue").val("");
                    mouseDown = true;

                }

                socket.on('textValue',function(data){
                    // $("#txtDialog").hide();
                    lCtx.font = $("#txtFontStyle").val() + " " + $("#txtFontSize").val() + "px " + $("#txtFontFamily").val();
                    ctx.font = $("#txtFontStyle").val() + " " + $("#txtFontSize").val() + "px " + $("#txtFontFamily").val();
                    currentFont = ctx.font;
                    // var pos = getMousePos(canvas, event);
                    var pos = event;
                    lCtx.fillText(data, pos.x, pos.y);
                    tempDraw.push({
                        txtData: data
                    });
                    $("#txtValue").val("");
                    mouseDown = true;
                })



                $(".color").click(function () {
                    changeColor($(this).css("background-color"));
                    $(".currentColor").css("background-color", $(this).css("background-color"));
                    socket.emit('changeColor',$(this).css('background-color'));
                });

                socket.on('changeColor',function(data){
                    changeColor(data);
                    $(".currentColor").css("background-color",data);
                })


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

                $("#toolWidth").change(function () {
                    changeSize($(this).val().toString(), tool);
                    socket.emit('changeToolWidth',{value:$(this).val().toString(),tool:tool});
                });

                socket.on('changeToolWidth',function(data){
                    changeSize(data.value,data.tool);
                })

                $('#showColor').on('touchend',function(){
                    $('#colorContainer').toggle();
                    socket.emit('showColor','showColor')
                })
                socket.on('showColor',function(data){
                    $('#colorContainer').toggle();
                })

                $("#clear").click(function () {
                    $('#confirm-box').show();  
                });

                socket.on('clearScreen',function(data){
                    clear('canvas');
                    clear('layer');
                });

                $('#confirm-ok').on('click',function(){
                    $(this).parents('#confirm-box').hide();        
                    clear('canvas');
                    clear('layer');
                    socket.emit('clear');
                    socket.emit('clearScreen','clearScreen');
                });

                $('#confirm-cancel').on('click',function(){
                    $(this).parents('#confirm-box').hide();
                    isConfirm = false;                    
                });

                function createImage(){
                    var img = new Image();
                    img.src = url;
                    img.onload = drawImg;
                    function drawImg(){
                        // let ctx2 = document.querySelector('#canvasBg').getContext('2d');
                        // ctx2.drawImage(img,0,0,canvas.width,canvas.height);
                        
                        ctx.drawImage(img,0,0,canvas.width,canvas.height)
                        // lCtx.drawImage(img,0,0,canvas.width,canvas.height)
                    }
                }

                function makeMouseMove(pageX,pageY) {
                    if (mouseDown) {
                        draw(pageX,pageY-60);
                    }
                }

                function makeMouseDown(x,y) {
                    mouseDown = true;
                    // iX = getMousePos(canvas, event).x;
                    // iY = getMousePos(canvas, event).y;

                    // iX = getMousePos(canvas, event).x || event.originalEvent.targetTouches[0].pageX;
                    // iY = getMousePos(canvas, event).y || event.originalEvent.targetTouches[0].pageY;
                    iX = x;
                    iY = y-60;

                    if (tool === 'text') {
                        //set the moving text on mouse down
                        clear('layer');
                        ctx.fillText(tempDraw[0].txtData, iX, iY);
                        socket.emit('text', {
                            text: tempDraw[0].txtData,
                            x: iX,
                            y: iY,
                            color: currentColor,
                            font: ctx.font
                        })
                        switchBoard('normal');
                        changeTool('pencil');
                    } else if (tool === 'line' || tool === 'rectangle' || tool === 'ellipse' || tool === 'select') {
                        switchBoard('inverse');
                    } else if (tool === 'eraser') {
                        //make eraser independent ot currentLineSize and currentColor
                        lCtx.strokeStyle = "black";
                        lCtx.lineWidth = "1";

                        ctx.fillStyle = "white";

                        switchBoard('inverse');
                    }

                    tempDraw = [];
                }

                function changeTool(t) {

                    tool = t;

                    if (tool === 'pencil') {
                        // changeCursor("url(images/brush.png), auto");
                        $("#toolWidth").val(currentBrushSize);
                        ctx.strokeStyle = currentColor;
                        ctx.lineWidth = currentBrushSize;
                    } else if (tool === 'eraser') {
                        //change cursor
                        // changeCursor("url(images/eraser.png), auto");
                        $("#toolWidth").val(currentEraserSize);
                        switchBoard('inverse');

                    } else if (tool === 'line' || tool === 'rectangle' || tool === 'ellipse' || tool === 'select') {

                        changeCursor("crosshair");
                        ctx.lineWidth = currentLineSize;
                        lCtx.lineWidth = currentLineSize;
                        $("#toolWidth").val(currentLineSize);
                        switchBoard('inverse');

                    } else if (tool === 'text') {
                        $("#txtDialog").show(100);
                        changeCursor("text");
                        ctx.fillStyle = currentColor;
                        switchBoard('inverse');

                        socket.emit('changeCursor','text')
                        socket.emit('switchBoard','inverse')
                    }

                }

                socket.on('changeCursor',function(data){
                    changeCursor(data);
                    ctx.fillStyle = currentColor;
                })

                socket.on('switchBoard',function(data){
                    switchBoard(data)
                })

                function makeMouseUp() {
                    mouseDown = false;

                    if (tool === 'pencil') {
                        socket.emit("pencil", {
                            boardData: tempDraw,
                            brushSize: currentBrushSize,
                            brushColor: currentColor
                        });
                    } else if (tool === 'eraser') {

                        socket.emit('eraser', {
                            eraserData: tempDraw,
                            eraserSize: currentEraserSize
                        });
                        clear('layer');
                        switchBoard('normal');

                        lCtx.fillStyle = currentColor;
                        ctx.fillStyle = currentColor;

                    } else if (tool === 'line') {

                        // draw in real canvas

                        ctx.lineWidth = currentLineSize;
                        ctx.beginPath();
                        ctx.moveTo(iX, iY);
                        ctx.lineTo(fX, fY);
                        ctx.stroke();

                        //hide the layer
                        switchBoard('normal');
                        clear('layer');


                        tempDraw.push({
                            x: iX,
                            y: iY
                        }); //store in array
                        tempDraw.push({
                            x: fX,
                            y: fY
                        }); //''''
                        socket.emit('line', {
                            points: tempDraw,
                            lineSize: currentLineSize,
                            lineColor: currentColor
                        });


                    } else if (tool === 'rectangle') {

                        ctx.beginPath();
                        ctx.rect(iX, iY, fX - iX, fY - iY);
                        ctx.stroke();

                        //hide the layer
                        $("#canvas").css("z-index", 1);
                        $("#layer").css("z-index", 0);
                        clear('layer');


                        tempDraw.push({
                            x: iX,
                            y: iY,
                            w: (fX - iX),
                            h: (fY - iY)
                        }); //store in array
                        socket.emit('rectangle', {
                            points: tempDraw,
                            lineSize: currentLineSize,
                            lineColor: currentColor
                        });


                    } else if (tool === 'ellipse') {


                        var radius = ((fX - iX) + (fY - iY)) / 4;

                        ctx.beginPath();
                        ctx.moveTo(iX, iY);
                        ctx.bezierCurveTo(iX, fY, fX, fY, fX, iY);
                        ctx.moveTo(iX, iY);
                        ctx.bezierCurveTo(iX, fY - 2 * (fY - iY), fX, fY - 2 * (fY - iY), fX, iY);
                        ctx.stroke();


                        //hide the layer
                        $("#canvas").css("z-index", 1);
                        $("#layer").css("z-index", 0);
                        clear('layer');


                        socket.emit('ellipse', {
                            points: {
                                ix: iX,
                                iy: iY,
                                fx: fX,
                                fy: fY,
                                r: radius
                            },
                            lineSize: currentLineSize,
                            lineColor: currentColor
                        });


                    } else if (tool === 'select') {

                        tempDraw.push({
                            selectedPart: ctx.getImageData(iX, iY, fX - iX, fY - iY),
                            selected: true
                        });

                    }

                    // clear the array when work is finished
                    tempDraw = [];
                }

                function changeColor(color) {

                    ctx.strokeStyle = color;
                    lCtx.strokeStyle = color;
                    ctx.fillStyle = color;
                    lCtx.fillStyle = color;
                    currentColor = color;

                }

                function changeCursor(cursor) {
                    $(".cnvs").css("cursor", cursor);
                }

                function changeSize(size, tool) {

                    if (tool === 'pencil') {
                        ctx.lineWidth = size;
                        currentBrushSize = size;

                    } else if (tool === 'eraser') {
                        // prevent eraser size from enlarging more than screen
                        currentEraserSize = (10 * size) / 2;
                    } else if (tool === 'line' || tool === 'rectangle' || tool === 'ellipse') {

                        currentLineSize = size;
                        ctx.lineWidth = size;
                        lCtx.lineWidth = size;
                    }

                }

                function clear(element) {
                    //清除之前确认
                    if (element === 'layer') {
                        lCtx.clearRect(0, 0, width, height);
                    } else if (element === 'canvas') {
                        ctx.clearRect(0, 0, width, height);
                        createImage();
                    }
                }

                function resetLineWidth() {
                    //reset default line width, stroke style, fill style
                    if (tool === 'line' || tool === 'rectangle' || tool === 'ellipse') {
                        ctx.lineWidth = currentLineSize;
                        lCtx.lineWidth = currentLineSize;
                    } else if (tool === 'pencil') {
                        ctx.lineWidth = currentBrushSize;
                        lCtx.lineWidth = currentBrushSize;
                    }

                    lCtx.strokeStyle = currentColor;
                    ctx.strokeStyle = currentColor;

                }

                function switchBoard(type) {
                    if (type === 'normal') {
                        $("#canvas").css("z-index", 1);
                        $("#layer").css("z-index", 0);
                    } else if (type === 'inverse') {
                        $("#canvas").css("z-index", 0);
                        $("#layer").css("z-index", 1);
                    }
                }

                function getMousePos(canvas, evt) {

                    return {
                        x: evt.pageX,
                        y: evt.pageY
                    };

                }

                function draw(pageX,pageY) {

                    // var pos = getMousePos(canvas, e);

                    // var pos = {
                    //         x:e.pageX || e.originalEvent.targetTouches[0].pageX,
                    //         y:e.pageY || e.originalEvent.targetTouches[0].pageY
                    //     }

                    var pos = {
                        x:pageX,
                        y:pageY
                    }

                    if (tool === "pencil") {

                        tempDraw.push({
                            x: iX,
                            y: iY
                        });
                        fX = pos.x;
                        fY = pos.y;
                        tempDraw.push({
                            x: fX,
                            y: fY
                        });
                        ctx.beginPath();
                        ctx.moveTo(iX, iY);
                        ctx.lineTo(fX, fY);
                        ctx.stroke();
                        iX = fX;
                        iY = fY;

                    } else if (tool === "eraser") {

                        clear('layer');
                        lCtx.beginPath();
                        lCtx.arc(pos.x + 8, pos.y + 8, currentEraserSize, 0, 2 * Math.PI);
                        lCtx.stroke();

                        ctx.beginPath();

                        var into = $("#canvas2")[0];
                        var ctx2 = into.getContext('2d');
                        var image = new Image();
                        image.src = url;
                        ctx2.drawImage(image,0,0,width,height);
                        var pattern = ctx.createPattern(into, "no-repeat");
                        ctx.fillStyle = pattern;
                        
                        ctx.arc(pos.x + 8, pos.y + 8, currentEraserSize, 0, 2 * Math.PI);
                        ctx.fill();

                        tempDraw.push({
                            x: pos.x + 8,
                            y: pos.y + 8
                        });

                    } else if (tool === 'line') {

                        clear('layer');
                        fX = pos.x;
                        fY = pos.y;
                        lCtx.beginPath();
                        lCtx.moveTo(iX, iY);
                        lCtx.lineTo(fX, fY);
                        lCtx.stroke();
                    } else if (tool === 'rectangle') {

                        clear('layer');
                        fX = pos.x;
                        fY = pos.y;
                        lCtx.beginPath();
                        lCtx.rect(iX, iY, fX - iX, fY - iY);
                        lCtx.stroke();

                    } else if (tool === 'ellipse') {

                        clear('layer');
                        fX = pos.x;
                        fY = pos.y;

                        lCtx.beginPath();
                        lCtx.moveTo(iX, iY);
                        lCtx.bezierCurveTo(iX, fY, fX, fY, fX, iY); // upper curve
                        lCtx.moveTo(iX, iY);
                        lCtx.bezierCurveTo(iX, fY - 2 * (fY - iY), fX, fY - 2 * (fY - iY), fX, iY); // lower curve
                        lCtx.stroke();

                    } else if (tool === 'text') {

                        clear('layer');
                        lCtx.fillText(tempDraw[0].txtData, pos.x, pos.y);
                    } else if (tool === 'select') {

                        clear('layer');

                        if (tempDraw.length === 0 && mouseDown) { // if nothing is selected

                            fX = pos.x;
                            fY = pos.y;
                            lCtx.lineWidth = 0.1;
                            lCtx.setLineDash([4, 4]);
                            lCtx.beginPath();
                            lCtx.rect(iX, iY, fX - iX, fY - iY);
                            lCtx.stroke();

                        }

                        //already selected
                        else {

                            lCtx.putImageData(tempDraw[0].selectedPart, pos.x, pos.y);
                        }

                    }

                }

                socket.on('pencil', function (data) {

                    ctx.lineWidth = data.brushSize;
                    ctx.strokeStyle = data.brushColor;

                    for (var i = 0; i <= data.boardData.length - 2; i += 2) {
                        iX = data.boardData[i]['x'];
                        iY = data.boardData[i]['y'];
                        fX = data.boardData[parseInt(i + 1)]['x'];
                        fY = data.boardData[parseInt(i + 1)]['y'];

                        ctx.beginPath();
                        ctx.moveTo(iX, iY);
                        ctx.lineTo(fX, fY);
                        ctx.stroke();

                    }

                    resetLineWidth();

                });

                socket.on('eraser', function (data) {

                    ctx.fillStyle = 'white';

                    for (var i = 0; i < data.eraserData.length; i++) {
                        ctx.beginPath();
                        ctx.arc(data.eraserData[i].x, data.eraserData[i].y, data.eraserSize, 0, 2 * Math.PI);
                        ctx.fill();

                    }

                });

                socket.on('line', function (data) {

                    ctx.strokeStyle = data.lineColor;
                    ctx.lineWidth = data.lineSize;
                    ctx.beginPath();
                    ctx.moveTo(data.points[0].x, data.points[0].y);
                    ctx.lineTo(data.points[1].x, data.points[1].y);
                    ctx.stroke();

                    resetLineWidth();

                });

                socket.on('rectangle', function (data) {

                    ctx.strokeStyle = data.lineColor;
                    ctx.lineWidth = data.lineSize;
                    ctx.beginPath();
                    ctx.rect(data.points[0].x, data.points[0].y, data.points[0].w, data.points[0].h);
                    ctx.stroke();

                    resetLineWidth();

                });

                socket.on('ellipse', function (data) {

                    ctx.strokeStyle = data.lineColor;
                    ctx.lineWidth = data.lineSize;
                    ctx.beginPath();
                    ctx.moveTo(data.points.ix, data.points.iy);
                    ctx.bezierCurveTo(data.points.ix, data.points.fy, data.points.fx, data.points.fy, data.points.fx, data.points.iy);
                    ctx.moveTo(data.points.ix, data.points.iy);
                    ctx.bezierCurveTo(data.points.ix, data.points.fy - 2 * (data.points.fy - data.points.iy), data.points.fx, data.points.fy - 2 * (data.points.fy - data.points.iy), data.points.fx, data.points.iy);
                    ctx.stroke();

                    resetLineWidth();

                });

                socket.on('text', function (data) {

                    //set passed values
                    ctx.font = data.font;
                    ctx.fillStyle = data.color;
                    ctx.fillText(data.text, data.x, data.y);

                    //reset default values
                    ctx.font = currentFont;
                    ctx.fillStyle = currentColor;
                });

                socket.on('clear', function () {
                    ctx.clearRect(0, 0, width, height);
                });

                function setDefaults() {

                    //set defaults
                    changeColor("black");
                    changeSize(2, 'pencil');
                    changeSize(2, 'line');
                    changeSize(10, 'eraser');
                    changeTool("pencil");

                    //make brush smooth
                    ctx.lineJoin = 'round';
                    ctx.lineCap = 'round';
                    lCtx.lineJoin = 'round';
                    lCtx.lineCap = 'round';

                    $("#txtDialog").hide();
                }

                // $(window).resize(function () {
                //     fixWidth();
                // });

                function fixWidth() {

                    width = $(window).width();
                    height = $(window).height()-60;

                    $(".cnvs").attr("width", width);
                    $(".cnvs").attr("height", height);

                    //on resize all settings are cleared
                    setDefaults();

                }

                fixWidth();

                $(window).on('beforeunload', function () {
                    socket.close();
                });
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
        