import React, { useEffect } from "react";
import styled from "styled-components";

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  margin-top: 16px;
  h1 {
    font-size: 36px;
    font-weight: 600;
    color: ${props => props.theme.blackColor};
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
`;

const CategoryItem = styled.button`
  color: ${props =>
    props.category === props.value ? props.theme.blackColor : `lightgray`};
  padding: 10px;
  border: 1px solid lightgray;
  transition: 0.5s ease-in-out;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  :focus {
    outline: 0;
  }
  :hover {
    color: ${props => props.theme.blackColor};
    background-color: rgba(199, 199, 199, 1);
  }
  background-color: ${props =>
    props.category === props.value
      ? `rgba(199, 199, 199, 1)`
      : `rgba(199, 199, 199, 0.3)`};
`;

const CategoryPresenter = ({ category, _handleCategory }) => {
  return (
    <CategoryWrapper>
      <h1>내용증명의 카테고리를 선택해 주세요</h1>
      <CategoryGrid>
        <CategoryItem value="1" onClick={_handleCategory} category={category}>
          채권채무
        </CategoryItem>
        <CategoryItem value="2" onClick={_handleCategory} category={category}>
          부동산(주거,상가,건물)
        </CategoryItem>
        <CategoryItem value="3" onClick={_handleCategory} category={category}>
          일반계약(이행 및 해지)
        </CategoryItem>
        <CategoryItem value="4" onClick={_handleCategory} category={category}>
          손해배상(권리침해,신체침해)
        </CategoryItem>
        <CategoryItem value="5" onClick={_handleCategory} category={category}>
          명예훼손(모욕)
        </CategoryItem>
        <CategoryItem value="6" onClick={_handleCategory} category={category}>
          노무관련(임금채불)
        </CategoryItem>
        <CategoryItem value="7" onClick={_handleCategory} category={category}>
          경매관련(명도,강제이행)
        </CategoryItem>
        <CategoryItem value="8" onClick={_handleCategory} category={category}>
          기타(재판,확정판결등)
        </CategoryItem>
      </CategoryGrid>
    </CategoryWrapper>
  );
};

export default CategoryPresenter;
