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
// 产品列表接口
export const getSubCategoryListAPI = (data) => {
  return request({
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

// 分类列表
export function getCategoryList(data) {
  return request({
    url: '/category/page',
    method: 'post',
    data: {
      pageNo: data.pageNo || 1,
      pageSize: data.pageSize || 10,
      condition: {
        code: data.code || '',
        name: data.name || '',
        parentCode: data.parentCode || '',
        groupCode: data.groupCode || ''
      }
    }
  });
}

// 相册列表
export function getAlbumList(data) {
  return request({
    url: '/album/page',
    method: 'post',
    data: {
      pageNo: data.pageNo || 1,
      pageSize: data.pageSize || 10,
      condition: {
        name: data.name || ''
      }
    }
  });
}
