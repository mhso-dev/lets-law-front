import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import DaumPostcode from "react-daum-postcode";

const CharacterWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  h1 {
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    color: ${props => props.theme.blackColor};
  }
`;

const CharacterCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CharacterCardBox = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  padding: 12px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.bgColor}
  border-radius: 10px;
  
`;

const CharacterCardInput = styled.input`
  all: unset;
  font-size: 18px;
  padding: 10px;
  ::placeholder {
    color: ${props => props.theme.lightGreyColor};
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  ${({ name }) =>
    name === "address1" &&
    `
    :hover {
      cursor:pointer;
      box-shadow: 1px 1px 1px 1px ${props => props.theme.blackColor}
     }
  `};
  border-bottom: 1px solid ${props => props.theme.blackColor};
`;

const CharacterAddLine = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: rgba(129, 236, 236, 0.5);

  :hover {
    transition: 0.3s ease-in-out;
    box-shadow: 1px 1px 1px 1px rgba(99, 110, 114, 0.8);
    cursor: pointer;
  }
`;

const Postcode = ({ handleComplete }) => {
  const style = {
    position: "fixed",
    margin: "auto",
    top: "50%",
    left: "50%",
    zIndex: "9999"
  };

  return (
    <>
      <DaumPostcode
        onComplete={handleComplete}
        width={300}
        autoClose={true}
        style={style}
      />
    </>
  );
};

const CharacterPresenter = ({
  characterList,
  _handleChange,
  _handleAddCharacter,
  _handleChangeAddress1
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const currentIndex = useRef();
  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
      _handleChangeAddress1(fullAddress, currentIndex.current);
    }
    setModalOpen(false);
  };
  const _openKakaoAddress = index => {
    setModalOpen(true);
    currentIndex.current = index;
  };

  return (
    <>
      <CharacterWrapper>
        <h1>등장인물 정보를 입력하세요</h1>

        <CharacterCardWrapper>
          {characterList.map((character, index) => (
            <CharacterCardBox key={index}>
              <CharacterCardInput
                name={"characterName"}
                type={"text"}
                placeholder={"이름 또는 회사명"}
                onChange={e => _handleChange(e, index)}
                value={character.characterName}
                disabled={character.role === "본인"}
              />
              <CharacterCardInput
                name={"characterAddress1"}
                type={"text"}
                value={character.characterAddress1}
                placeholder={"주소를 입력하세요"}
                onFocus={() => _openKakaoAddress(index)}
                readOnly
                onChange={e => _handleChange(e, index)}
              />
              <CharacterCardInput
                name={"characterAddress2"}
                type={"text"}
                placeholder={"상세 주소를 입력하세요"}
                value={character.characterAddress2}
                onChange={e => _handleChange(e, index)}
              />
              <CharacterCardInput
                name={"characterRelationDescription"}
                type={"text"}
                placeholder={"등장인물과의 관계"}
                value={character.relation}
                onChange={e => _handleChange(e, index)}
              />
            </CharacterCardBox>
          ))}
          <CharacterAddLine onClick={_handleAddCharacter}>
            등장인물 추가하기
          </CharacterAddLine>
        </CharacterCardWrapper>
      </CharacterWrapper>
      {modalOpen && (
        <Postcode setModalOpen={setModalOpen} handleComplete={handleComplete} />
      )}
    </>
  );
};

export default CharacterPresenter;
