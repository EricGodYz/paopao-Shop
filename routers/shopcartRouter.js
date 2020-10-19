const {Router} = require('express');
const Goods = require('../model/Good');
const ShopCart = require('../model/shopCart');


const router = new Router();



// 购物车商品的添加
router.post('/shopcart_add',async(req,res)=>{
    const {id} = req.body;
    const goodData = await Goods.findOne({goodsId:id});
    const result = await ShopCart.findOne({goodId:id});
    if(result){
        // console.log(result);
        await ShopCart.updateOne({goodId:id},{goodSales:result.goodSales+1}) ;
        // await ShopCart.UpdateOne({goodId:id},{goodSales:result.goodSales+1}); 
        // console.log(result.goodSales);
    }else{
        const newShopGood = new ShopCart({goodId:id,goodName:goodData.goodsName,goodPrice:goodData.goodsPrice,goodImage:goodData.goodsImage});
        newShopGood.save()
        .then(data=>{
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    res.status(200).json({code:1,message:'添加成功了'})
});
//购物车信息的查询
router.post('/shopcart_info',async(req,res)=>{
    // const {id} = req.body;
    const goodsData =await ShopCart.find();
    res.status(200).json({code:1,data:{goodsData}})
})
// 购物车的标记
router.post('/shopcart_flag',async(req,res)=>{
    const {item,type} = req.body;
    if(type=='pre'){
        // console.log(item.goodId);
        await ShopCart.updateOne({goodId:item.goodId},{goodSales:item.goodSales-1});
        // console.log(item.goodSales);
    }
    if(type=='next'){
        await ShopCart.updateOne({goodId:item.goodId},{goodSales:item.goodSales+1})
        console.log(item.goodSales);
    }
    res.status(200).json({code:1,message:'修改成功'})
})





module.exports = router;