<template>
  <div>
    <div class="block">
      <span class="demonstration"></span>
      <el-carousel trigger="click"
                   height="423px"
                   width="100%">
        <el-carousel-item v-for="item in listImg"
                          :key="item">
          <img :src="item.url" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-navBar">
      <div class="home-jia">
        <div class="home-jiaDown">
          <div @click="tabId=0"
               class="tabId0">
            <i class="so">
              <img src="http://www.qumei.com/public/images/e5/b7/6a/ba260e184833088221ead19c3db98574e400dc5a.png?1466508034#w"
                   alt="">
            </i>
            <h3 class="">沙发</h3>
          </div>
          <div @click="tabId=1"
               class="tabId1">
            <i class="so1">
              <img src="http://www.qumei.com/public/images/9b/01/ad/270348a67f9c03c3a7b902d5be183deba43e5077.png?1466508062#w"
                   alt="">
            </i>
            <h3 class="ke">客厅</h3>
          </div>
          <div @click="tabId=2"
               class="tabId2">
            <i class="so2">
              <img src="http://www.qumei.com/public/images/80/30/c5/b7778b13a6188f0b1dfc25820aca8a4cac429e24.png?1466508092#w"
                   alt="">
            </i>
            <h3 class="sleep">卧室</h3>
          </div>
          <div @click="tabId=3"
               class="tabId3"
               v-on:click="CLZFCJMJ()"
               ref="clzfcjmj">
            <i class="so3">
              <img src="http://www.qumei.com/public/images/07/1f/a7/0e7345187958bd098986e5c2e61eade01526eb32.png?1466508102#w"
                   alt="">
            </i>
            <h3 class="eat">餐厅</h3>
          </div>
          <div @click="tabId=4"
               class="tabId4">
            <i class="soo">
              <img src="http://www.qumei.com/public/images/9f/c9/67/d56e0e7a290cdc627f20617f2a0dbf381c750b66.png?1466508115#w"
                   alt="">
            </i>
            <h3 class="bool">书房</h3>
          </div>
          <div @click="tabId=5"
               class="tabId5">
            <i class="so5">
              <img src="http://www.qumei.com/public/images/66/40/88/845eb341bc0093dbdd910cef595ddb1b428ea2e4.png?1466508128#w"
                   alt="">
            </i>
            <h3 class="bool1">儿童房</h3>
          </div>
          <div @click="tabId=6"
               class="tabId6"></div>
          <div @click="tabId=7"
               class="tabId7"></div>

        </div>
        <div class="home-jiaUp">
          <div v-show="tabId===0"
               class="tabId0-0"><span class="home-sofa">沙发分类：<span style="font-size:16px">布艺沙发 转角沙发 三人位 双人位 单人位</span> </span></div>
          <div v-show="tabId===1"
               class="tabId1-1">
            <span class="home-lie">客厅分类：<span style="font-size:16px">沙发 茶几 电视柜 厅柜 休闲椅 衣架 鞋柜 隔断 抽屉柜 边几 灯 花架 跑柜 小件 饰品柜 围屏 搁几 炕几 茶海 炕桌 门厅柜 脚踏 多用架 茶凳 </span> </span>
          </div>
          <div v-show="tabId===2"
               class="tabId2-1">
            <span class="home-run"> 卧室分类：<span style="font-size:16px">床 衣柜 床头柜 衣架 隔断 抽屉柜 边几 梳妆台 梳妆椅 灯 花架 跑柜 床尾凳 独立袋装簧床垫 纯棕床垫 小件 饰品柜 围屏 要财柜 挂墙镜 假山墩 搁几 炕几 卧室低柜</span> </span>
          </div>
          <div v-show="tabId===3"
               class="tabId3-1">
            <span class="home-eat">
              餐厅分类：<span style="font-size:16px">厅柜 餐桌 餐椅 休闲椅 餐边柜 酒柜 酒吧车 隔断 抽屉柜 边几 灯 跑柜 小件 香几 佛盒</span>
            </span>
          </div>
          <div v-show="tabId===4"
               class="tabId4-1">
            <span class="home-book">
              书房分类：<span style="font-size:16px">厅柜 书柜 字台 休闲椅 书架 字台椅 隔断 抽屉柜 灯 花架 小件 饰品柜 香几 要财柜 佛盒 多用架</span>
            </span>
          </div>
          <div v-show="tabId===5"
               class="tabId5-1">
            <span class="home-child">
              儿童房分类：<span style="font-size:16px">无</span>
            </span>
          </div>
          <div v-show="tabId===6"
               class="tabId6-1">
            <span class="home-pin">
              饰品分类：
              <span style="font-size:16px"> 灯
                花架
                小件
                挂墙镜
                佛盒</span>
            </span>
          </div>
          <div v-show="tabId===7"
               class="tabId7-1">
            <span class="home-gn">多功能厅分类：<span style="font-size:16px">几 书柜 字台 休闲椅 书架 字台椅 酒吧车 隔断 抽屉柜 灯 花架 小件 饰品柜 围屏 条案 香几 要财柜 挂墙镜 佛盒 假山墩 搁几 炕几 茶海 炕桌 脚踏 多用架 茶凳</span> </span>
          </div>
        </div>
      </div>
    </div>
    <div class="home-container">
      <div class="home-week">
        <div class="home-weekdown">

          <img src="http://www.qumei.com/public/images/b7/c4/ef/86d76a0ed5b672717f4d094bdf513879785976da.png?1465395348#w"
               alt="">
        </div>

        <div class="home-weekup">
          <div class="home-chair">
            <div class="chair-down">
              <div class="pi">
                <img src="http://www.qumei.com/public/images/48/19/98/f1006b1d9808139e44384185d7a154eec707ff8e.png?1539327863#w"
                     alt=""
                     class="ty">
              </div>
            </div>
            <div class="chair-up">
              <span class="price">￥1592</span>
              <span class="price1">维格尚品—休闲椅</span>
              <a target="_blank"
                 href="http://www.qumei.com/index.php/product-7673.html"
                 class="more">点击查看详情 &gt;&gt;</a>
            </div>
          </div>
          <div class="home-chair">
            <div class="chair-down">
              <div class="pi">
                <img src="http://www.qumei.com/public/images/93/9e/7b/67aabb31c90b3dfd0128ffe6453e619e37f3b944.png?1539328013#w"
                     alt=""
                     class="ty1">
              </div>
            </div>
            <div class="chair-up">
              <span class="price">￥2098</span>
              <span class="price1">自在空间-餐椅</span>
              <a target="_blank"
                 href="http://www.qumei.com/index.php/product-7673.html"
                 class="more">点击查看详情 &gt;&gt;</a>
            </div>
          </div>
          <div class="home-chair">
            <div class="chair-down">
              <div class="pi">
                <img src="http://www.qumei.com/public/images/86/bc/68/99cc43acbfd80cb29b9bda89dd35a7209d6eac76.png?1539328666#w"
                     alt=""
                     class="ty">
              </div>
            </div>
            <div class="chair-up">
              <span class="price">￥5035</span>
              <span class="price1">北欧阳光--鞋柜</span>
              <a target="_blank"
                 href="http://www.qumei.com/index.php/product-7673.html"
                 class="more">点击查看详情 &gt;&gt;</a>
            </div>
          </div>
          <div class="home-chair">
            <div class="chair-down">
              <div class="pi">
                <img src="http://www.qumei.com/public/images/0e/08/d8/a277d143ec31f88f0df836c0f262651b04d1f53c.png?1539328878#w"
                     alt=""
                     class="ty">
              </div>
            </div>
            <div class="chair-up">
              <span class="price">￥7962</span>
              <span class="price1">古诺凡希生活馆-电视柜</span>
              <a target="_blank"
                 href="http://www.qumei.com/index.php/product-7673.html"
                 class="more">点击查看详情 &gt;&gt;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-container1">
      <div class="home-dan">
        <div class="homedown">
          <img src="http://www.qumei.com/public/images/89/40/62/42c19324a76fd6063cdfda5f38b129e328e06054.png?1466580934#w"
               alt="">
        </div>
        <div class="home-up">
          <div class="item1">
            <div class="pic">
              <img src="http://www.qumei.com/public/images/2e/d0/0d/1884f1018f6c1d66e4fb388d62fb50de522c5acd.png?1539330499#w"
                   alt="">
            </div>
            <div class="text">
              <span class="price">￥2153</span>
              <span class="price1">北欧阳光-茶几</span>
              <a target="_blank"
                 href="http://www.qumei.com/index.php/product-7673.html"
                 class="more">点击查看详情 &gt;&gt;</a>
            </div>
          </div>
          <div class="item1">
            <div class="pic">
              <img src="http://www.qumei.com/public/images/fd/18/88/a8507228031c71a73ed4a0409bbe8f1316689cb0.png?1539330600#w"
                   alt="">
            </div>
            <div class="text">
              <span class="price">￥5858</span>
              <span class="price1">北欧阳光-字台</span>
              <a target="_blank"
                 href="http://www.qumei.com/index.php/product-7148.html"
                 class="more">点击查看详情 &gt;&gt;</a>
            </div>
          </div>
          <div class="item1">
            <div class="pic">
              <img src="http://www.qumei.com/public/images/cc/e6/b9/73577f99739d1c4029b0701d4e595bc637582eb2.png?1475928801#w"
                   alt="">
            </div>
            <div class="text">
              <span class="price">￥1005</span>
              <span class="price1">维格尚品-梳妆台</span>
              <a target="_blank"
                 href="http://www.qumei.com/index.php/product-5326.html"
                 class="more">点击查看详情 &gt;&gt;</a>
            </div>
          </div>
          <div class="item1">
            <div class="pic">
              <img src="http://www.qumei.com/public/images/a0/b5/2f/ce1b1b3806909f5a5e6c1baafd6b9ebd68179ee0.png?1475928809#w"
                   alt="">
            </div>
            <div class="text">
              <span class="price">￥3246</span>
              <span class="price1">维格尚品-餐桌</span>
              <a target="_blank"
                 href="http://www.qumei.com/index.php/product-5393.html"
                 class="more">点击查看详情 &gt;&gt;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pin">
      <div class="rec">
        <div class="rec-font">
          <img src="http://www.qumei.com/public/images/2d/38/9c/66703149fe4de4669c44f2f222070a1d3582d021.png?1466581091#w"
               alt="">
        </div>
        <div class="rec-wgdown">
          <div class="hide">
            <img src="http://www.qumei.com/public/images/1b/93/63/e751c5d321a4d82c8f66a309d72ea3a9a4eb5780.jpg?1476252895#w"
                 alt="">
            <div class="mask">
              <div class="home-we">
                <span class="sof">维格商品沙发</span>
                <span class="sof1">￥4322</span>
                <hr>
                <a target="_blank"
                   href="http://www.qumei.com/index.php/product-7693.html"
                   class="mor">点击查看详情 &gt;&gt;</a>
              </div>
            </div>
          </div>
        </div>
        <div class="rec-wgup">
          <div class="rec-wgupleft">
            <img src="http://www.qumei.com/public/images/15/45/5b/02df322ccff029152eeb781e3c2bc5548acfe179.jpg?1476252477#w"
                 alt="">
            <div class="mask1">
              <div class="home-we">
                <span class="sof">维格尚品-休闲椅</span>
                <span class="sof1">￥2740</span>
                <hr>
                <a target="_blank"
                   href="http://www.qumei.com/index.php/product-7693.html"
                   class="mor">点击查看详情 &gt;&gt;</a>
              </div>
            </div>
          </div>
          <div class="rex-wgupright">
            <img src="http://www.qumei.com/public/images/bf/17/e2/464ca9a11b1b52d12c6fa5217507ca18cd2d9f9b.jpg?1476253154#w"
                 alt="">
            <div class="mask2">
              <div class="home-we">
                <span class="sof">自在生活馆-椅子</span>
                <span class="sof1">￥2198</span>
                <hr>
                <a target="_blank"
                   href="http://www.qumei.com/index.php/product-6990.html"
                   class="mor">点击查看详情 &gt;&gt;</a>
              </div>
            </div>
          </div>

        </div>
        <div class="rec-three">
          <img src="http://www.qumei.com/public/images/b9/65/d8/36283ef6e05dee78596d4acea470612625c1122e.jpg?1476252492#w"
               alt="">
          <div class="mask3">
            <div class="home-we">
              <span class="sof">维格尚品-三人沙发</span>
              <span class="sof1">￥7275</span>
              <hr>
              <a target="_blank"
                 href="http://www.qumei.com/index.php/product-6188.html"
                 class="mor">点击查看详情 &gt;&gt;</a>
            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="gray">
    </div>
    <div class="home-wanw">
      <div class="wanwu">
        <div class="wanwuleft">
          <div class="wanwuleft-down">
            <img src="http://www.qumei.com/public/images/28/50/97/697ac8abb162c3e42fc7ff66f0df677b7dfccd89.jpg?1466509192#w"
                 alt="">
            <div class="mask11">
              <div class="home-we">
                <span class="sof1">维格尚品生活馆</span>
                <a target="_blank"
                   href="http://www.qumei.com/index.php/product-6188.html"
                   class="mor">点击查看详情 &gt;&gt;</a>
              </div>
            </div>
          </div>
          <div class="wanwuleft-up">
            <img src="http://www.qumei.com/public/images/c1/64/84/d321d6bd592db0a4daa8a6e2c45142470e5efd36.jpg?1466509257#w"
                 alt="">
            <div class="mask12">
              <div class="home-we">
                <span class="sof1">万物生活馆</span>
                <a target="_blank"
                   href="http://www.qumei.com/index.php/gallery-index.html?cat_id=150&types=screen&orderBy=&is_store=&page=1"
                   class="mor">点击查看详情 &gt;&gt;</a>
              </div>
            </div>
          </div>
        </div>
        <div class="wanwuleft">
          <div class="bo-down">
            <div class="bodown-left">

            </div>
            <div class="bodown-right">

            </div>
          </div>
          <div class="bo-up">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabId: 0,
      listImg: [
        {
          url:
            "http://www.qumei.com/public/images/85/59/5c/c655751e7aa3234883154a8e0de6148bb6df190f.jpg?1475928298#w"
        },
        {
          url:
            "http://www.qumei.com/public/images/0f/8a/be/70ce7241849388fd978ee8854cfcd501ad8e19b5.jpg?1475928378#w"
        },
        {
          url:
            "http://www.qumei.com/public/images/8e/c3/6d/ef0b6b42b39453e9209d613aae6c269b21c78873.jpg?1475928431#w"
        },
        {
          url:
            "http://www.qumei.com/public/images/85/59/5c/c655751e7aa3234883154a8e0de6148bb6df190f.jpg?1475928298#w"
        },
        {
          url:
            "http://www.qumei.com/public/images/85/59/5c/c655751e7aa3234883154a8e0de6148bb6df190f.jpg?1475928298#w"
        },
        {
          url:
            "http://www.qumei.com/public/images/8e/c3/6d/ef0b6b42b39453e9209d613aae6c269b21c78873.jpg?1475928431#w"
        }
      ]
    };
  }
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.home-navBar {
  width: 100%;
  height: 520px;
}
.home-jia {
  width: 1280px;
  height: 436px;
  margin: 42px 71px;
  position: relative;
  border: 1px solid #dddddd;
}
.home-jiaDown {
  width: 1118px;
  height: 106px;
  /* border: 1px solid red; */
  margin: 37px 86px;
  position: absolute;
}
.home-jiaUp {
  width: 1130px;
  height: 195px;
  background: #f6f6f6;
  margin: 190px 86px;
  position: absolute;
}
.tabId0.tabId1,
.tabId2,
.tabId3,
.tabId4,
.tabId5,
.tabId6,
.tabId7 {
  width: 108px;
  height: 108px;
  background: #282828;
  border-radius: 50%;
  float: left;
  margin: 0px 35px;
  position: relative;
}
.home-sofa {
  display: inline-block;
  /* margin-left: -1px; */
  margin-top: 41px;
}
.so img {
  position: absolute;
  /* color: #ffff; */
  top: 24px;
  left: 71px;
  z-index: 2;
}
h3 {
  width: 40px;
  height: 16px;
  font-size: 14px;
  margin-top: 60px;
  margin-left: 69px;
  color: #ffffff;
  position: absolute;
  z-index: 1;
}
.so1 {
  position: absolute;
  /* color: #ffff; */
  top: 24px;
  left: 248px;
  z-index: 2;
}
.ke {
  width: 40px;
  height: 16px;
  font-size: 14px;
  margin-top: 60px;
  margin-left: 246px;
  color: #ffffff;
  position: absolute;
  z-index: 1;
}
.so2 {
  position: absolute;
  /* color: #ffff; */
  top: 24px;
  left: 391px;
  z-index: 2;
}
.sleep {
  width: 40px;
  height: 16px;
  font-size: 14px;
  margin-top: 60px;
  margin-left: 389px;
  color: #ffffff;
  position: absolute;
  z-index: 1;
}
.so3 {
  position: absolute;
  /* color: #ffff; */
  top: 24px;
  left: 393px;
  z-index: 2;
}
.eat {
  width: 40px;
  height: 16px;
  font-size: 14px;
  margin-top: 60px;
  margin-left: 392px;
  color: #ffffff;
  position: absolute;
  z-index: 1;
}
.soo {
  position: absolute;
  /* color: #ffff; */
  top: 24px;
  left: 394px;
  z-index: 2;
}
.bool {
  width: 40px;
  height: 16px;
  font-size: 14px;
  margin-top: 60px;
  margin-left: 392px;
  color: #ffffff;
  position: absolute;
  z-index: 1;
}
.so5 {
  position: absolute;
  /* color: #ffff; */
  top: 24px;
  left: 391px;
  z-index: 2;
}
.bool1 {
  width: 44px;
  height: 16px;
  font-size: 14px;
  margin-top: 60px;
  margin-left: 388px;
  color: #ffffff;
  position: absolute;
  z-index: 1;
}
.home-container {
  width: 100%;
  height: 750px;
  background: #ffffff;
}
.home-week {
  width: 1244px;
  height: 736px;
  /* border: 1px solid red; */
  margin: 0 auto;
  position: relative;
}
.home-weekdown {
  width: 182px;
  height: 89px;
  /* border: 1px solid red; */
  margin: 74px auto;
}
.home-weekup {
  width: 1212px;
  height: 496px;
  /* border: 1px solid red; */
  margin-left: 17px;
}
.home-chair {
  width: 301px;
  height: 489px;
  /* background: pink; */
  float: left;
  /* border: 1px solid blue; */
}
.chair-down {
  width: 302px;
  height: 302px;
}
/* .chair-down :hover {
  border: 1px solid #dddddd;
} */
.chair-up {
  width: 206px;
  height: 138px;
  margin: 35px 50px;
  /* border: 1px solid yellow; */
}
.ty {
  width: 204px;
  height: 135px;
  margin-top: 85px;
}
.ty1 {
  width: 204px;
  height: 135px;
  margin-top: 85px;
}
.price {
  display: block;
  font-size: 30px;
}
.price1 {
  display: block;
  margin-top: 10px;
  font-size: 14px;
}
.more {
  width: 180px;
  height: 40px;
  text-align: center;
  border-radius: 25px;
  border: 1px solid #dddddd;
  line-height: 40px;
  margin: 0 auto;
  font-size: 14px;
  display: block;
  margin-top: 20px;
  color: #909190;
  text-decoration: none;
}
.more:hover {
  border: 1px solid #bc121a;
  color: #eeac91;
}
.home-container1 {
  width: 100%;
  height: 800px;
  background: #f6f6f6;
  position: relative;
}
.home-dan {
  width: 1233px;
  height: 650px;
  /* border: 1px solid #ccc; */
  position: absolute;
  margin-top: 77px;
  margin-left: 67px;
}
.homedown {
  width: 225px;
  height: 92px;
  margin: 0px auto;
  /* border: 1px solid red; */
}
.pi {
  width: 300px;
  height: 300px;
}
.pi:hover {
  border: 1px solid #dddddd;
}
.home-up {
  width: 1212px;
  height: 484px;
  /* border: 1px solid red; */
  margin-left: 10px;
  margin-top: 72px;
}
.item1 {
  width: 301px;
  height: 484px;
  float: left;
  cursor: pointer;
  /* border: 1px solid #ccc; */
}
.item1:hover {
  background: #ffffff;
  border: 1px solid #bc121a;
  color: #be3b38;
}
.pic {
  width: 301px;
  height: 144px;
  margin-top: 182px;
}
.text {
  width: 301px;
  height: 133px;
  /* border: 1px solid red; */
}
.pin {
  width: 100%;
  height: 1660px;
  /* background: pink; */
  position: relative;
}
.rec {
  width: 1214px;
  height: 1560px;
  /* border: 1px solid red; */
  margin: 80px 71px;
  position: absolute;
}
.hide {
  position: relative;
  float: left;
  margin-bottom: 40px;
}
.rec-font {
  width: 227px;
  height: 96px;
  /* border: 1px solid red; */
  margin: 80px auto;
}
.rec-wgdown {
  width: 1204px;
  height: 400px;
  overflow: hidden;
  border: 1px solid #ccc;
}
.mask {
  width: 1204px;
  height: 400px;
  text-align: center;
  position: absolute;
  display: none;
  background: rgb(87, 86, 86, 0.5);
  left: 0;
  top: 0;
}
.hide:hover .mask {
  display: block;
}
.home-we {
  width: 367px;
  height: 147px;
  margin: 122px auto;
  /* border: 1px solid red; */
}
.sof {
  font-size: 15px;
  color: #fff;
  display: block;
}
.sof1 {
  font-size: 35px;
  color: #fff;
  font-weight: light;
}
.mor {
  width: 206px;
  height: 53px;
  text-align: center;
  border-radius: 25px;
  border: 1px solid #dddddd;
  line-height: 53px;
  margin: 0 auto;
  font-size: 17px;
  display: block;
  margin-top: 15px;
  color: #fff;
  text-decoration: none;
}
.rec-wgup {
  width: 1204px;
  height: 400px;
  margin-top: 40px;
}
.rec-wgupleft {
  width: 582px;
  height: 400px;
  position: relative;
  margin-bottom: 40px;
  float: left;
}

.mask1 {
  width: 582px;
  height: 400px;
  text-align: center;
  position: absolute;
  display: none;
  background: rgb(87, 86, 86, 0.5);
  left: 0;
  top: 0;
}
.rec-wgupleft:hover .mask1 {
  display: block;
}
.rex-wgupright {
  width: 582px;
  height: 400px;
  position: relative;
  margin-bottom: 40px;
  margin-left: 40px;
  float: left;
}
.mask2 {
  width: 582px;
  height: 400px;
  text-align: center;
  position: absolute;
  display: none;
  background: rgb(87, 86, 86, 0.5);
  left: 0;
  top: 0;
}
.rex-wgupright:hover .mask2 {
  display: block;
}
.rec-three {
  width: 1204px;
  height: 400px;
  position: relative;
  float: left;
  margin-bottom: 40px;
}
.mask3 {
  width: 1204px;
  height: 400px;
  text-align: center;
  position: absolute;
  display: none;
  background: rgb(87, 86, 86, 0.5);
  left: 0;
  top: 0;
}
.rec-three:hover .mask3 {
  display: block;
}
.gray {
  width: 100%;
  height: 119px;
  margin-top: 70px;
  background: #f6f6f6;
}
.home-wanw {
  width: 100%;
  height: 1000px;
  margin-top: 83px;
  background: pink;
  position: relative;
}
.wanwu {
  width: 1212px;
  height: 900px;
  border: 1px solid red;
  margin: 83px 73px;
  position: absolute;
}
.wanwuleft {
  width: 566px;
  height: 900px;
  float: left;
  border: 1px solid red;
  margin-left: 25px;
  background: yellow;
}
.wanwuleft-down {
  width: 566px;
  height: 300px;
  position: relative;
  float: left;
  margin-bottom: 40px;
}
.mask11 {
  width: 566px;
  height: 300px;
  text-align: center;
  position: absolute;
  display: none;
  background: rgb(87, 86, 86, 0.5);
  left: 0;
  top: 0;
}
.wanwuleft-down:hover .mask11 {
  display: block;
}
.sof1 {
  font-size: 32px;
  color: #ffffff;
}
.wanwuleft-up {
  width: 562px;
  height: 562px;
  position: relative;
  float: left;
  margin-bottom: 40px;
}
.mask12 {
  width: 566px;
  height: 562px;
  text-align: center;
  position: absolute;
  display: none;
  background: rgb(87, 86, 86, 0.5);
  left: 0;
  top: 0;
}
.wanwuleft-up:hover .mask12 {
  display: block;
}
</style>
