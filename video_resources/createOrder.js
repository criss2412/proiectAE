const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

const Comanda_TABLE = "<Comanda_table_name>";
const Comanda_TYPE = "Comanda";
const Produs_Comanda_TABLE = "<Produs_Comanda_table name>";
const Produs_Comanda_TYPE = "ProdusComanda";

const createComanda = async (payload) => {
  const { Comanda_id, username, email, total } = payload;
  var params = {
    TableName: Comanda_TABLE,
    Item: {
      id: Comanda_id,
      __typename: Comanda_TYPE,
      customer: email,
      user: username,
      total: total,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString()
    }
  };
  console.log(params);
  await documentClient.put(params).promise();
};

const createProdusComanda = async (payload) => {
  let ProdusComenzi = [];
  for (i = 0; i < payload.cart.length; i++) {
    const cartItem = payload.cart[i];
    ProdusComenzi.push({
      PutRequest: {
        Item: {
          id: uuidv4(),
          __typename: Produs_Comanda_TYPE,
          Produs_id: cartItem.id,
          Comanda_id: payload.Comanda_id,
          customer: payload.email,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      }
    });
  }
  let params = {
    RequestItems: {}
  };
  params["RequestItems"][Produs_Comanda_TABLE] = ProdusComenzi;
  console.log(params);
  await documentClient.batchWrite(params).promise();
};

/*
 * Get Comanda details from processPayment lambda
 * Create an Comanda
 * Link Produss to the Comanda - Users can see the past Comenzi and admins can view Comenzi by user
 * Email the invoice (Will be added later)
 */
exports.handler = async (event) => {
  try {
    let payload = event.prev.result;
    payload.Comanda_id = uuidv4();

    // create a new Comanda
    await createComanda(payload);

    // links Produss with the Comanda
    await createProdusComanda(payload);

    // Note - You may add another function to email the invoice to the user

    return "SUCCESS";
  } catch (err) {
    console.log(err);
    return new Error(err);
  }
};
