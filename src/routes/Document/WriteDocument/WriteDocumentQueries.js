import { gql } from "apollo-boost";

export const CREATE_DOCUMENT = gql`
  mutation createDocument(
    $title: String!
    $text: String!
    $appearingCharacter: [CharacterInfo!]!
    $evidenceFiles: [EvidenceFileInfo!]!
    $sendAs: String!
  ) {
    createDocument(
      title: $title
      text: $text
      appearingCharacter: $appearingCharacter
      evidenceFiles: $evidenceFiles
      sendAs: $sendAs
    ) {
      id
    }
  }
`;
