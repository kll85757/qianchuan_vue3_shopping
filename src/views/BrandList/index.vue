<template>
  <div class="brand-page">
    <!-- 字母导航 -->
    <div class="alphabet-nav">
      <button
        v-for="letter in alphabet"
        :key="letter"
        @click="scrollTo(letter)"
      >
        {{ letter }}
      </button>
    </div>

    <!-- 品牌列表 -->
    <div
      v-for="(brands, letter) in sortedBrands"
      :key="letter"
      :id="`section-${letter}`"
    >
      <h2 class="topTitle">{{ letter }}</h2>
      <ul class="brandListLg">
        <li v-for="brand in brands" :key="brand.id">
          <RouterLink
            :to="`/listByBrand?brandCode=${brand.code}&brandName=${brand.name}`"
          >
            {{ brand.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { getBrandList } from '@/apis/category'
import pinyin from 'pinyin'

export default {
  setup() {
    const alphabet = ref('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''))
    const brands = ref([])

    // 在页面初始化时调用 getBrandList
    onMounted(async () => {
      try {
        const response = await getBrandList({
          pageNo: 1,
          pageSize: 100, // 设置合适的数量，或加载所有品牌
          condition: {
            title: '',
            categoryCode: '',
            status: '1'
          }
        })
        brands.value = response.data.records || [] // 假设返回的数据在 response.data 中
        console.log('品牌列表:', brands.value)
      } catch (error) {
        console.error('获取品牌列表出错:', error)
      }
    })

    // 将品牌按拼音首字母分组并排序
    const sortedBrands = computed(() => {
      const brandGroups = {}

      // 初始化每个字母的组
      alphabet.value.forEach((letter) => {
        brandGroups[letter] = []
      })
      brandGroups['#'] = [] // 数字和其他字符组

      // 设置汉字排序规则
      const collator = new Intl.Collator('zh-Hans-CN', { sensitivity: 'base' })

      // 将品牌按拼音首字母分组
      brands.value.forEach((brand) => {
        const firstChar = brand.name[0]
        let initialLetter

        // 如果品牌名称是汉字，使用拼音首字母
        if (/[\u4e00-\u9fa5]/.test(firstChar)) {
          // 获取品牌名称的拼音首字母，拼音库会返回首字母大写
          initialLetter = pinyin(brand.name, {
            style: pinyin.STYLE_FIRST_LETTER,
            heteronym: false
          })[0][0].toUpperCase()
        } else if (firstChar.match(/[A-Za-z]/)) {
          // 如果是字母，直接使用字母
          initialLetter = firstChar.toUpperCase()
        } else {
          // 否则归为 # 组
          initialLetter = '#'
        }

        // 将品牌添加到对应的组
        if (alphabet.value.includes(initialLetter)) {
          brandGroups[initialLetter].push(brand)
        } else {
          brandGroups['#'].push(brand)
        }
      })

      // 对每个组进行排序
      Object.keys(brandGroups).forEach((letter) => {
        brandGroups[letter].sort((a, b) => collator.compare(a.name, b.name))
      })

      return brandGroups
    })

    // 将品牌按字母分组并排序
    // const sortedBrands = computed(() => {
    //   const brandGroups = {};

    //   // 初始化每个字母的组
    //   alphabet.value.forEach(letter => {
    //     brandGroups[letter] = [];
    //   });
    //   brandGroups['#'] = []; // 数字和其他字符组

    //   // 将品牌按首字母分组
    //   brands.value.forEach(brand => {
    //     const firstChar = brand.name[0].toUpperCase();
    //     if (alphabet.value.includes(firstChar)) {
    //       brandGroups[firstChar].push(brand);
    //     } else {
    //       brandGroups['#'].push(brand); // 其他字符归为 #
    //     }
    //   });

    //   // 对每个组进行排序
    //   Object.keys(brandGroups).forEach(letter => {
    //     brandGroups[letter].sort((a, b) => a.name.localeCompare(b.name));
    //   });

    //   return brandGroups;
    // });

    // 滚动到对应字母部分
    const scrollTo = (letter) => {
      const section = document.getElementById(`section-${letter}`)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }

    return {
      alphabet,
      sortedBrands,
      scrollTo
    }
  }
}
</script>

<style scoped>
.brand-page {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

/* 字母导航样式 */
.alphabet-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
}

.alphabet-nav button {
  margin: 5px;
  padding: 8px 12px;
  font-size: 14px;
  border: none;
  background-color: #0083ff;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.alphabet-nav button:hover {
  background-color: #005bb5;
}

/* 品牌列表样式 */
h2 {
  font-size: 18px;
  color: #333;
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
  font-size: 16px;
  color: #555;
}

.topTitle {
  text-align: start;
  border-bottom: #005bb5;
  margin-top: 25px;
  color: #0080ff;
}

.brandListLg {
  position: relative;
}

.brandListLg > li {
  display: inline-block;
  width: auto;
  margin-right: 15px;
  border-bottom: 1px solid #bbb;
}

.brandListLg > li:hover {
  display: inline-block;
  width: auto;
  margin-right: 15px;
  border-bottom: 1px solid #4fadff;
  cursor: pointer;
  color: #0083ff;
}
</style>
