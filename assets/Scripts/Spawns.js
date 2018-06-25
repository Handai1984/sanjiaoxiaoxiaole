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
        clumPre:{
            type: cc.Prefab,
            default:[]
        }
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        //生成障碍
            this.SpawClums();

    },

    SpawClums(){
        var rnd =cc.random0To1() * this.clumPre.length;
        
            rnd = Math.floor(rnd);
            console.log(rnd);
        var clum = cc.instantiate(this.clumPre[rnd]);
        this.node.addChild(clum);
        this.scheduleOnce(this.SpawClums,2);
    },

    start () {

    },

    

    // update (dt) {},
});
