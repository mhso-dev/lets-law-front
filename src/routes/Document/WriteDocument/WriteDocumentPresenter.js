import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CategoryPresenter from "./Category/CategoryPresenter";
import CharacterPresenter from "./Character/CharacterPresenter";
import MarkdownRenderer from "react-markdown-renderer/dist";
import SplitterLayout from "react-splitter-layout";
import SplitPane from "react-split-pane";
import DocumentEditor from "./Editor/DocumentEditor";

const Container = styled.div`
  padding: 50px 10px 10px 10px;
  height: 100vh;
  background: linear-gradient(to top, #bdc3c7, #2c3e50);
  overflow: auto;
  display: flex;

  /* This is added to change the orientation of elements from 
     left-right (row) to top-bottom (column). */
  flex-direction: column;
`;

const WriteDocumentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  overflow: scroll;
  height: 90vh;
  padding: 0px 10px 10px 10px;
  border: 1px solid ${props => props.theme.blackColor};
  margin-right: 10px;
`;

const MarkdownRendererContainer = styled.div`
  margin-left: 10px;
  border: 1px solid ${props => props.theme.blackColor};
`;

const StyledMarkdownRenderer = styled(MarkdownRenderer)`
  position: static;
  padding: 10px;
`;

const StyledSplitPane = styled(SplitPane)`
  height: 100%;
`;

const WriteDocumentPresenter = ({
  category,
  characterList,
  _handleCategory,
  _handleChange,
  _handleAddCharacter,
  _handleChangeAddress1,
  _onChangeEditor,
  markdown,
  _onChangeTitle,
  title,
  _onSubmit
}) => {
  return (
    <Container>
      <StyledSplitPane
        split="vertical"
        minSize={"50%"}
        defaultSize={"50%"}
        style={{ position: "static" }}
      >
        <WriteDocumentWrapper>
          <CategoryPresenter
            _handleCategory={_handleCategory}
            category={category}
          />
          {category && (
            <>
              <CharacterPresenter
                characterList={characterList}
                _handleChange={_handleChange}
                _handleAddCharacter={_handleAddCharacter}
                _handleChangeAddress1={_handleChangeAddress1}
                category={category}
              />
              <DocumentEditor
                _onChangeEditor={_onChangeEditor}
                title={title}
                _onChangeTitle={_onChangeTitle}
              />
              <button onClick={_onSubmit}>검수</button>
            </>
          )}
        </WriteDocumentWrapper>
        <MarkdownRendererContainer>
          <StyledMarkdownRenderer markdown={markdown} title={title} />
        </MarkdownRendererContainer>
      </StyledSplitPane>
    </Container>
  );
};

export default WriteDocumentPresenter;
