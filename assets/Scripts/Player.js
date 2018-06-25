// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        agle: 0,//旋转角度
        agleSpeed: 0,//旋转速度
        
    },

   RoataeMove(){
       if(this.is_thouch){ //判定是否在旋转中
           return;
       }
    var rota = cc.rotateBy(this.agleSpeed,this.agle); //在多长时间内旋转多少度
    this.is_thouch = true;
    // 回调函数，用来控制重复旋转的
    var end_func = cc.callFunc(function(){
        this.is_thouch = false;
    },this );

    //加入容器动作
    var seq = cc.sequence(rota,end_func);
        //  执行动画
    this.node.runAction(seq);
   },

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START,function(e){
            console.log("touch");
            this.RoataeMove();   //每次点击进行旋转
           
        },this);

       
        
    },

    start () {

    },

     update (dt) {
       

     },
});
