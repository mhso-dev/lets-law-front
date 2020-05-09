import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const SectionTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  color: ${props => props.theme.blackColor};
`;

const TitleInput = styled(TextareaAutosize)`
  all: unset;
  font-size: 24px;
  font-weight: 600;
  width: 100%;
  &::placeholder {
    font-weight: 600;
    color: ${props => props.theme.blackColor};
  }
`;

const ContentInput = styled(TextareaAutosize)`
  all: unset;
  font-size: 18px;
  margin-top: 12px;
  width: 100%;
  min-height: 300px;
  ::placeholder {
    color: ${props => props.theme.blackColor};
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const DocumentEditor = ({ _onChangeEditor, _onChangeTitle }) => {
  return (
    <>
      <SectionTitle>내용증명 작성하기</SectionTitle>
      <>
        <TitleContainer>
          <TitleInput
            placeholder={"제목을 입력해 주세요"}
            name={"title"}
            onChange={_onChangeTitle}
          />
        </TitleContainer>
        <ContentInput
          placeholder={
            "내용증명을 작성해 주세요! 마크다운 문법을 사용할 수 있습니다."
          }
          onChange={_onChangeEditor}
        />
      </>
    </>
  );
};

export default DocumentEditor;
