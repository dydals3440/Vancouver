import React, { useEffect, useContext, useReducer, createContext } from 'react';
import reducer from '../reducers/filter_reducer';
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';
import { useProductsContext } from './products_context';

const initialState = {
  // 필터링된 제품(값을 바꿀 시 늘 바뀌는 배열) 초기값 설정
  filtered_products: [],
  // 필터 초기화시 원래 제품의 배열을 보여주는 값 설정
  all_products: [],
  // grid / list view어떤거 할지 고르는 것
  grid_view: true,
  // 정렬 옵션 기준 첫번쨰 기본 값
  sort: 'price-lowest',
  // 전체 필터 default value 설정 이 조건에 해당하는 아이템을 출력
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    // 1. 필터링 => 2. 정렬
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    // 증명
    // const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // Products페이지, Category클릭시에, 빈값을 value로 받아오는 것을 확인할 수 있음
    // 버튼이 있을때는 버튼안의 텍스트에 접근할 수 없음 textContent를 통해 접근, Filters.jsx에서 우리가 map형태로 Categories를 받아와서, 하나씩 버튼형태로 바꿔주었는데, 이떄 name에 접근할 수 없게 됨 (버튼형태이기 때문에)
    if (name === 'category') {
      value = e.target.textContent;
    }
    // html의 data-set 속성으로 우리는 color hexcode 정의
    if (name === 'color') {
      value = e.target.dataset.color;
    }
    console.log(value);
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = (e) => {};

  return (
    // 우리가 initialState에서 받아온 값들을 value로 받아오는 것
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};

// 모든 제품 정보와, Default value가 필요함(필터를 비웠을때 원래 전체 제품 보기란으로 복귀)
