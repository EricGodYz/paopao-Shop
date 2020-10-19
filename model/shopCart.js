const {model} = require('mongoose');

module.exports = model('shopcart',{
    goodId:{
        type:String,
        require:true,
    },
    goodName:{
        type:String,
        require:true,
    },
    goodPrice:{
        type:Number,
        require:true,
    },
    goodImage:{
        type:Array,
        default:[]
    },
    // 商品的销量
    goodSales:{
        type:Number,
        default:1,
    }
})