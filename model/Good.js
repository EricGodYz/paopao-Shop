// 商品列表的数据的伪造，首先是对于mongoose的解构
const {model} = require('mongoose');

// 进行goods商品列表的创建

module.exports =  model('goods',{
    // 商品列表的属性
    goodsId:{
        type:Number,
        require:true,
    },
    goodsName:{
        type:String,
        require:true,
    },
    goodsPrice:{
        type:Number,
        require:true,
    },
    goodsImage:{
       type:Array,
       default:[]

    },
    goodsCategory:{
        type:String,
        require:true,
    },
    goodsSales:{
        type:Number,
        default:0,
    }

})