<template>
    <div class="qa-page">

        <!-- 根据 section 参数渲染不同的内容 -->
        <div v-if="section === 'about'">
            <div class="about-container">
                <h1 class="about-title">关于我们</h1>

                <div class="about-content">
                    <div class="about-img">
                    </div>

                    <div class="about-text">
                        <p>南京千川机电有限公司是一家综合性直销贸易公司，主要代理日本品牌五金工具、焊接工具、电气动工具、汽保工具、扭力工具、仪器仪表、测量设备、防静电产品、小型自动设备、光学仪器和整合配套工具。
                        </p>

                        <p>南京千川机电有限公司拥有良好、快捷的供货渠道，并为各类电子加工企业提供一系列产品服务和技术咨询，具备优良信誉的专业代理销售公司。主营产品包括日本原装进口仪器仪表工业设备，知名品牌如PANASONIC（national）、TRUSCO、TOSHIBA、IZUMI（泉精器）、TASCO、日本理研等。我公司还提供以下品牌产品：日本积水胶带、日本富士保险丝、日本AS-1产品等。
                        </p>

                        <p>南京千川机电有限公司在日本通过多年的努力，已与千代田机工株式会社、杉本商事株式会社等大型产品集成商建立了良好的合作关系。公司主要经营范围包括工厂用各种作业工具、检测仪器、化学试剂、包装用品、安全用品、搬运工具等。无论产品大小、货值多少，本公司秉承专业、高效、物美、价廉的宗旨，尽心尽力提供最好的产品和服务。
                        </p>

                        <p>公司主要代理的厂商有：株式会社石崎電機製作所、藤井電工株式会社、住友重機械工業株式会社、富士インパルス株式会社、カートン光学株式会社等千余家。</p>

                        <h2>欢迎广大客户来电咨询、洽谈！</h2>

                        <p><strong>开户行：</strong>工商银行南京山西路支行 <strong>账号：</strong>4301 0243 09100 130995</p>

                        <p><strong><a href="http://www.njgs.gov.cn/" target="_blank">南京工商行政管理局</a></strong></p>

                        <p><strong><a href="http://service.customs.gov.cn/default.aspx?tabid=9408"
                                    target="_blank">中国海关</a> 南京千川机电海关编码：3201963836</strong></p>

                        <p><strong>江苏地区公司信用查询网站：</strong><a href="http://www.jsgsj.gov.cn:58888/province/"
                                target="_blank">点击查询</a></p>

                        <p><strong>江苏发票查询（查询近三个月的发票）：</strong><a
                                href="http://www.jsnj-n-tax.gov.cn/fpyzcxInternet/indexAction.do"
                                target="_blank">点击查询</a></p>
                    </div>
                </div>
            </div>

        </div>

        <div v-if="section === 'after-service'">
            <div class="about-container">
                <h1 class="about-title">售后服务</h1>

                <div class="about-content">
                    <div class="about-text">
                        <h2>服务说明</h2>

                        <h3>一、质量说明</h3>
                        <p>1. 我公司对所销售的仪器仪表均提供质保，保质期为12至36个月（具体期限视设备原厂配置情况而定）。</p>
                        <p>2. 对于因质量问题（不含人为因素）在30天内发生故障的仪器仪表，我公司负责退换。</p>
                        <p>3. 用户购买时可获得保修证书及仪器出厂合格证（如有编号亦可代替；进口设备的文件或配置说明以原厂规定为准）。</p>
                        <p>4. 对因运输引起的质量问题，我公司不承担责任，建议用户按实价投保。</p>

                        <h3>二、计量说明</h3>
                        <p>1. 我公司所售的国产仪器仪表，均按国家计量法规要求配有MC计量生产许可标志。</p>
                        <p>2. 根据计量法规，进口仪器仪表需经型式批准后方可销售。</p>
                        <p>3. 用户如需特定计量单位检定合格证书，请提前预约，交款后5日内交付。</p>
                        <p>4. 我公司提供有关计量法规知识的咨询服务。</p>

                        <h3>三、价量说明</h3>
                        <p>1. 所有仪器仪表公开报价均含计量费及增值税。</p>
                        <p>2. 用户如需特定计量单位的检定合格证书，费用由用户自行承担；如不合格则由我公司负责退换。</p>
                        <p>3. 本公司可代办托运，运费和保险费由用户自行承担。</p>

                        <h3>四、投诉电话</h3>
                        <p>如有任何疑问或投诉，请致电：<strong>025-84659345</strong></p>
                    </div>
                </div>
            </div>

        </div>

        <div v-if="section === 'business-cooperation'">
            <h2>商务合作</h2>
            <p>这里是商务合作的内容...</p>
        </div>

        <div v-if="section === 'remittance-info'">
            <div class="about-container">
                <h1 class="about-title">汇款资料</h1>
                <div class="about-content">
                    <div class="about-text">

                        <p>名称：南京千川机电有限公司
                        </p>
                        <p>税号：913201025520927679
                        </p>
                        <p>开户行：工商银行南京城中支行
                        </p>
                        <p>账号：4301024309100130995
                        </p>
                        <p>开票地址：南京市玄武区柳营100号

                        </p>
                        <p>电话：025-84659345

                        </p>


                    </div>
                </div>

            </div>
        </div>

        <div v-if="section === 'faqs'">
            <h2>常见问题</h2>
            <p>这里是常见问题的内容...</p>
        </div>

        <div v-if="section === 'privacy-statement'">
            <h2>隐私声明</h2>
            <p>这里是隐私声明的内容...</p>
        </div>

        <div v-if="section === 'delivery-instructions'">
            <h2>配送说明</h2>
            <p>这里是配送说明的内容...</p>
        </div>

        <div v-if="section === 'purchase-release'">
            <h2>采购发布</h2>
            <p>这里是采购发布的内容...</p>
        </div>

        <div v-if="section === 'business-hours'">
            <h2>营业时间</h2>
            <p>这里是营业时间的内容...</p>
        </div>
    </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
    name: 'QA',
    setup() {
        const route = useRoute()
        const section = ref(route.params.section)

        // Watch for changes to route params and update `section` accordingly
        watch(
            () => route.params.section,
            (newSection) => {
                section.value = newSection
            },
            { immediate: true }
        )

        return {
            section
        }
    }
}
</script>

<style scoped>
.qa-page {
    padding: 20px;
}

/* 页面整体容器 */
.about-container {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 40px auto;
    max-width: 900px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 标题样式 */
.about-title {
    font-size: 32px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
}

/* 内容区域 */
.about-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* 图片样式 */
.about-img img {
    width: 100%;
    max-width: 395px;
    height: auto;
    border-radius: 8px;
    display: block;
    margin: 0 auto;
}

/* 文本样式 */
.about-text p {
    font-size: 16px;
    color: #555;
    margin-bottom: 15px;
    text-indent: 2em;
}

.about-text h2 {
    font-size: 18px;
    color: #333;
    margin-top: 20px;
    text-align: center;
}

/* 链接样式 */
.about-text a {
    color: #0083ff;
    text-decoration: none;
    font-weight: bold;
}

.about-text a:hover {
    text-decoration: underline;
}

/* 强调文字 */
.about-text strong {
    font-weight: bold;
}

/* 增加适应屏幕的宽度 */
@media (max-width: 768px) {
    .about-container {
        padding: 15px;
    }

    .about-img img {
        max-width: 100%;
    }
}
</style>