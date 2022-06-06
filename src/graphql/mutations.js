/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRequset = /* GraphQL */ `
  mutation CreateRequset(
    $input: CreateRequsetInput!
    $condition: ModelRequsetConditionInput
  ) {
    createRequset(input: $input, condition: $condition) {
      id
      title
      explane
      pay
      time
      videoUrl
      downloadUrl
      setting {
        length
        ratio
        tag
        subtitle
      }
      owner {
        name
        id
      }
      keepUser {
        name
        id
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRequset = /* GraphQL */ `
  mutation UpdateRequset(
    $input: UpdateRequsetInput!
    $condition: ModelRequsetConditionInput
  ) {
    updateRequset(input: $input, condition: $condition) {
      id
      title
      explane
      pay
      time
      videoUrl
      downloadUrl
      setting {
        length
        ratio
        tag
        subtitle
      }
      owner {
        name
        id
      }
      keepUser {
        name
        id
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRequset = /* GraphQL */ `
  mutation DeleteRequset(
    $input: DeleteRequsetInput!
    $condition: ModelRequsetConditionInput
  ) {
    deleteRequset(input: $input, condition: $condition) {
      id
      title
      explane
      pay
      time
      videoUrl
      downloadUrl
      setting {
        length
        ratio
        tag
        subtitle
      }
      owner {
        name
        id
      }
      keepUser {
        name
        id
      }
      createdAt
      updatedAt
    }
  }
`;
