<template>
  <footer class="app_footer">
    <!-- 联系我们 -->
    <div class="contact">
      <div class="container" style="text-align: center;">
        <dl>
          <dt>客户服务</dt>
          <dd><i class="iconfont icon-kefu"></i> 在线客服</dd>
          <dd><i class="iconfont icon-question"></i> 问题反馈</dd>
        </dl>
        <!-- <dl>
          <dt>关注我们</dt>
          <dd><i class="iconfont icon-weixin"></i> 公众号</dd>
          <dd><i class="iconfont icon-weibo"></i> 微博</dd>
        </dl>
        <dl>
          <dt>下载APP</dt>
          <dd class="qrcode"><img src="@/assets/images/qrcode.jpg" /></dd>
          <dd class="download">
            <span>扫描二维码</span>
            <span>立马下载APP</span>
            <a href="javascript:;">下载页面</a>
          </dd>
        </dl> -->
        <dl>

        </dl>
      </div>
    </div>
    <!-- 其它 -->
    <div class="extra">
      <div class="container">

        <div class="slogan">
          <div>
            <p>热线电话：</p>
            <p>025-84659345 86626095</p>
          </div>
          <div>
            <p>公司传真：</p>
            <p>(86)025-84299530</p>
          </div>
          <div>
            <p>公司邮箱：</p>
            <p>qc84659345@163.com</p>
          </div>
          <div>
            <p>公司备案号：</p>
            <p>苏ICP备10202193号</p>
          </div>
          <div>
            <p>地址：</p>
            <p>南京市玄武区柳营100号</p>
          </div>
          <div>
            <p>邮政编码：</p>
            <p>210008</p>
          </div>


        </div>
        <!-- 版权信息 -->
        <div class="copyright">
          <p>
            <RouterLink to="/qa/about">关于我们</RouterLink>
            <RouterLink to="/qa/after-service">售后服务</RouterLink>
            <RouterLink to="/qa/business-cooperation">商务合作</RouterLink>
            <RouterLink to="/qa/remittance-info">汇款资料</RouterLink>
            <RouterLink to="/qa/faqs">常见问题</RouterLink>
            <RouterLink to="/qa/privacy-statement">隐私声明</RouterLink>
            <RouterLink to="/qa/delivery-instructions">配送说明</RouterLink>
            <RouterLink to="/qa/purchase-release">采购发布</RouterLink>
            <RouterLink to="/qa/business-hours">营业时间</RouterLink>
          </p>
          <p>国内机电产品及日本原装进口工业设备仪器仪表专业供应商：南京千川机电有限公司</p>
          <p>CopyRight © 南京千川</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app_footer {
  overflow: hidden;
  background-color: #f5f5f5;
  padding-top: 20px;

  .contact {
    background: #fff;

    .container {
      padding: 60px 0 40px 25px;
      display: flex;
    }

    dl {
      height: 190px;
      text-align: center;
      padding: 0 72px;
      border-right: 1px solid #f2f2f2;
      color: #999;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        border-right: none;
        padding-right: 0;
      }
    }

    dt {
      line-height: 1;
      font-size: 18px;
    }

    dd {
      margin: 36px 12px 0 0;
      float: left;
      width: 92px;
      height: 92px;
      padding-top: 10px;
      border: 1px solid #ededed;

      .iconfont {
        font-size: 36px;
        display: block;
        color: #666;
      }

      &:hover {
        .iconfont {
          color: $xtxColor;
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .qrcode {
      width: 92px;
      height: 92px;
      padding: 7px;
      border: 1px solid #ededed;
    }

    .download {
      padding-top: 5px;
      font-size: 14px;
      width: auto;
      height: auto;
      border: none;

      span {
        display: block;
      }

      a {
        display: block;
        line-height: 1;
        padding: 10px 25px;
        margin-top: 5px;
        color: #fff;
        border-radius: 2px;
        background-color: $xtxColor;
      }
    }

    .hotline {
      padding-top: 20px;
      font-size: 22px;
      color: #666;
      width: auto;
      height: auto;
      border: none;

      small {
        display: block;
        font-size: 15px;
        color: #999;
      }
    }
  }

  .extra {
    background-color: #333;
  }

  .slogan {
    height: 178px;
    line-height: 25px;
    padding: 60px 100px;
    border-bottom: 1px solid #434343;
    display: flex;
    justify-content: space-between;
    color: #fff;

    a {
      height: 35px;
      line-height: 25px;
      color: #fff;
      font-size: 28px;

      i {
        font-size: 50px;
        vertical-align: middle;
        margin-right: 10px;
        font-weight: 100;
      }

      span {
        vertical-align: middle;
        text-shadow: 0 0 1px #333;
      }
    }
  }

  .copyright {
    height: 170px;
    padding-top: 40px;
    text-align: center;
    color: #999;
    font-size: 15px;

    p {
      line-height: 1;
      margin-bottom: 20px;
    }

    a {
      color: #999;
      line-height: 1;
      padding: 0 10px;
      border-right: 1px solid #999;

      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
