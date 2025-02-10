import request from '@/utils/request'

// 获取商品详情
export const getDetailAPI = (id) => {
  return request({
    url: `/product/${id}`,
    method: 'get'
  });
}

// 获取热榜商品
export const fetchHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return request({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  });
}

// 新增：获取同品牌商品
export const fetchProductsByBrandAPI = (brandId) => {
  return request({
    url: `/products/brand/${brandId}`,
    method: 'get'
  });
}

// 新增：获取同分类商品
export const fetchProductsByCategoryAPI = (categoryId) => {
  return request({
    url: `/products/category/${categoryId}`,
    method: 'get'
  });
}
