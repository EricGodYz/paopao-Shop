const { Router } = require('express');
const Goods = require('../model/Good');
const { mock } = require('mockjs');
const { Random } = require('mockjs');
const router = new Router();




// 商品添加进入数据库
// const result = mock({
//     'list|50': [
//         {   
//             'goodsId|+1':1,
//             'goodsName|1': '@ctitle(3,4)', 
//             'goodsImage|1': ['https://yanxuan-item.nosdn.127.net/d1b359216aefc28dab8fb1a316ab9741.png?type=webp&imageView&quality=75&thumbnail=750x0','https://yanxuan-item.nosdn.127.net/366e59a71055d160153b038a8b66aa1d.png?type=webp&imageView&quality=75&thumbnail=750x0'],
//             'goodsPrice|50-300': 0,
//             'goodsCategory|1': ['推荐专区','新品专区','居家生活','服饰鞋包','美食酒水','个人清洁','母婴亲子','运动旅行','数码家电'],
//             'goodsSales|200-400': 0
//         }
//     ]
// }).list;
// // console.log(result);

// // 将50条数据保存到数据库中
// const arr = result.map(item => {
//     return new Goods(item).save();
// });
// // console.log(arr);
// Promise.all(arr).then(res => {
//     console.log(res);
// })
//     .catch(err => {
//         console.log(err);
//     })

router.post('/goods_info', async (req, res) => {
    const {index} = req.body;
    const goodsPart = await Goods.find().skip(index*10).limit(10);
    const goodsAll = await Goods.find();
    // console.log(goodsAll);
    res.status(200).json({ code: 1, data: { goodsPart,goodsAll }})

});

router.post('/goods_del',async(req,res)=>{
    const {id} = req.body;
    await Goods.deleteOne({_id:id});
    res.status(200).json({code:1,message:'删除成功'})
});

router.post('/goods_add',async(req,res)=>{
    const {id,name,price,category} = req.body;
    const newGood = new Goods({goodsId:id,goodsName:name,goodsPrice:price,goodsCategory:category});
    newGood.save()
    .then(data=>{
        console.log();
    })
    .catch(err=>{
        console.log(err);
    });
    res.status(200).json({code:1,message:'添加成功'})
})
// 查询商品的类别
router.post('/goods_category',async(req,res)=>{
    const {category} = req.body;
    const goodsCate =  await Goods.find({goodsCategory:category});
    res.status(200).json({code:1,data:{goodsCate}})
});
// 查询商品的id
router.post('/goods_id',async(req,res)=>{
    const {id} = req.body;
    const goodsShow =  await Goods.find({goodsId:id});
    res.status(200).json({code:1,data:{goodsShow}})
})


module.exports = router;