import React, { useEffect, useState } from "react";
import WriteDocumentPresenter from "./WriteDocumentPresenter";
import produce from "immer";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { ME } from "../../../SharedQueries";
import { gql } from "apollo-boost";
import client from "../../../Apollo/Client";
import { CREATE_DOCUMENT } from "./WriteDocumentQueries";

export default () => {
  const meQuery = gql`
    {
      me {
        username
        email
      }
    }
  `;

  const { data: userInfo, loading } = useQuery(meQuery);
  const [category, setCategory] = useState("1");
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const [createDocument] = useMutation(CREATE_DOCUMENT);
  const [characterList, setCharacterList] = useState([
    {
      characterName: `${userInfo?.me?.username || ""}  ( 발신자 수정 불가 )`,
      characterAddress1: userInfo?.me?.address?.address1 || "",
      characterAddress2: userInfo?.me?.address?.address2 || "",
      isReceive: false,
      isSender: true,
      characterRelationDescription: "본인"
    },
    {
      characterName: "",
      isReceive: true,
      isSender: false,
      characterAddress1: "",
      characterAddress2: "",
      characterRelationDescription: ""
    }
  ]);

  useEffect(() => {
    if (!loading) {
      setCharacterList(
        produce(draft => {
          draft[0].characterName = userInfo.me.username;
          return draft;
        })
      );
    }
  }, [loading, userInfo]);

  const _handleChangeAddress1 = (value, index) => {
    setCharacterList(
      produce(characterList, draft => {
        draft[index] = {
          ...draft[index],
          characterAddress1: value
        };
        return draft;
      })
    );
  };

  const _handleChange = (e, index) => {
    setCharacterList(
      produce(characterList, draft => {
        draft[index] = {
          ...draft[index],
          [e.target.name]: e.target.value
        };
        return draft;
      })
    );
  };

  useEffect(() => {
    console.log(characterList);
  }, [characterList]);

  const _handleAddCharacter = () => {
    const newCharacter = {
      characterName: "",
      isReceive: true,
      isSender: false,
      characterAddress1: "",
      characterAddress2: "",
      characterRelationDescription: ""
    };

    setCharacterList(
      produce(characterList, draft => draft.concat(newCharacter))
    );
  };
  const _handleCategory = e => {
    setCategory(e.target.value);
  };

  const _onChangeEditor = e => {
    setMarkdown(e.target.value);
  };

  const _onChangeTitle = e => {
    setTitle(e.target.value);
  };

  const _onSubmit = async () => {
    // console.log({ title, text: markdown, appearingCharacter: characterList });
    const result = await createDocument({
      variables: {
        title,
        text: markdown,
        appearingCharacter: characterList,
        evidenceFiles: [],
        sendAs: "sender"
      }
    });

    window.location = "/";
  };

  return (
    <WriteDocumentPresenter
      userInfo={userInfo}
      category={category}
      characterList={characterList}
      setCharacterList={setCharacterList}
      _handleChange={_handleChange}
      _handleCategory={_handleCategory}
      _handleAddCharacter={_handleAddCharacter}
      _handleChangeAddress1={_handleChangeAddress1}
      _onChangeEditor={_onChangeEditor}
      markdown={markdown}
      title={title}
      _onSubmit={_onSubmit}
      _onChangeTitle={_onChangeTitle}
    />
  );
};
