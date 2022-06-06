/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRequset = /* GraphQL */ `
  query GetRequset($id: ID!) {
    getRequset(id: $id) {
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
export const listRequsets = /* GraphQL */ `
  query ListRequsets(
    $filter: ModelRequsetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequsets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
