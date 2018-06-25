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
       clumpSpeed: 0,
       timer: 0,
       pos :cc.p(),
    },

   

    // onLoad () {},

    start () {
        var act = cc.moveTo(this.timer,cc.p(0,-1000));
        var end_func = cc.callFunc(function(){
            this.node.destroy();
            console.log("Destory");
        },this);
        var seq = cc.sequence(act,end_func);
        this.node.runAction(seq);

    },
    onCollisionEnter(other,self){
        if(self.node.groupIndex === other.node.groupIndex){
            console.log("消失");
            self.node.destroy();
        }else{
            console.log("游戏结束");
            jsb.reflection.callStaticMethod("AppController", "game2NativeShow");
        }
    },

    update (dt) {
        var temppos = this.clumpSpeed *dt;
       // this.node.y -= temppos;
    },
});
