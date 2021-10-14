/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComanda = /* GraphQL */ `
  query GetComanda($id: ID!) {
    getComanda(id: $id) {
      id
      user
      date
      total
      Produss {
        items {
          id
          Produs_id
          Comanda_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listComenzi = /* GraphQL */ `
  query ListComenzi(
    $filter: ModelComandaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComenzi(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        Produss {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listProduss = /* GraphQL */ `
  query ListProduss(
    $filter: ModelProdusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProduss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        firma
        featured
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProdus = /* GraphQL */ `
  query GetProdus($id: ID!) {
    getProdus(id: $id) {
      id
      title
      description
      image
      firma
      featured
      price
      Comenzi {
        items {
          id
          Produs_id
          Comanda_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
