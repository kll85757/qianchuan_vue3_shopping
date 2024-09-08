import request from '@/utils/request'

// 获取分类id的数据
export const getTopCategoryAPI = (id) => {
  return request({
    url: '/category',
    params: { id }
  })
}
// 分类数据获取
export const getBannerAPI = (params = {}) => {
  // 默认为1 商品为2
  const { distributionSite = '1' } = params
  return request({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}
// 二级分类数据获取
export const getSubCategoryAPI = (id) => {
  return request({
    url: '/category/sub/filter',
    params: { id }
  })
}
// 分类基础列表数据获取
export const getSubCategoryListAPI = (data) => {
  return request({
    // url: '/category/goods/temporary',
    url: '/product/page',
    method: 'POST',
    data
  })
}
//品牌列表
export function getBrandList(data) {
  return request({
    url: '/brand/page',
    method: 'post',
    data: {
      pageNo: data.pageNo || 1,
      pageSize: data.pageSize || 10,
      condition: {
        title: data.title || '',
        categoryCode: data.categoryCode || '',
        status: data.status || '1'
      }
    }
  });
}

