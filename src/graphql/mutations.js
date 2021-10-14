/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processComanda = /* GraphQL */ `
  mutation ProcessComanda($input: ProcessComandaInput!) {
    processComanda(input: $input)
  }
`;
export const createProdus = /* GraphQL */ `
  mutation CreateProdus(
    $input: CreateProdusInput!
    $condition: ModelProdusConditionInput
  ) {
    createProdus(input: $input, condition: $condition) {
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
export const updateProdus = /* GraphQL */ `
  mutation UpdateProdus(
    $input: UpdateProdusInput!
    $condition: ModelProdusConditionInput
  ) {
    updateProdus(input: $input, condition: $condition) {
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
export const deleteProdus = /* GraphQL */ `
  mutation DeleteProdus(
    $input: DeleteProdusInput!
    $condition: ModelProdusConditionInput
  ) {
    deleteProdus(input: $input, condition: $condition) {
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
export const createProdusComanda = /* GraphQL */ `
  mutation CreateProdusComanda(
    $input: CreateProdusComandaInput!
    $condition: ModelProdusComandaConditionInput
  ) {
    createProdusComanda(input: $input, condition: $condition) {
      id
      Produs_id
      Comanda_id
      Comanda {
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
      createdAt
      updatedAt
      Produs {
        id
        title
        description
        image
        firma
        featured
        price
        Comenzi {
          nextToken
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateProdusComanda = /* GraphQL */ `
  mutation UpdateProdusComanda(
    $input: UpdateProdusComandaInput!
    $condition: ModelProdusComandaConditionInput
  ) {
    updateProdusComanda(input: $input, condition: $condition) {
      id
      Produs_id
      Comanda_id
      Comanda {
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
      createdAt
      updatedAt
      Produs {
        id
        title
        description
        image
        firma
        featured
        price
        Comenzi {
          nextToken
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteProdusComanda = /* GraphQL */ `
  mutation DeleteProdusComanda(
    $input: DeleteProdusComandaInput!
    $condition: ModelProdusComandaConditionInput
  ) {
    deleteProdusComanda(input: $input, condition: $condition) {
      id
      Produs_id
      Comanda_id
      Comanda {
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
      createdAt
      updatedAt
      Produs {
        id
        title
        description
        image
        firma
        featured
        price
        Comenzi {
          nextToken
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const createComanda = /* GraphQL */ `
  mutation CreateComanda(
    $input: CreateComandaInput!
    $condition: ModelComandaConditionInput
  ) {
    createComanda(input: $input, condition: $condition) {
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
export const updateComanda = /* GraphQL */ `
  mutation UpdateComanda(
    $input: UpdateComandaInput!
    $condition: ModelComandaConditionInput
  ) {
    updateComanda(input: $input, condition: $condition) {
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
export const deleteComanda = /* GraphQL */ `
  mutation DeleteComanda(
    $input: DeleteComandaInput!
    $condition: ModelComandaConditionInput
  ) {
    deleteComanda(input: $input, condition: $condition) {
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
