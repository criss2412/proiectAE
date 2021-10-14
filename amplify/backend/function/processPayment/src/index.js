

const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = "<userpool_id>";
const stripe = require("stripe")("sk_test_51Jj2SPCvu5JfFUZ4SDhI0AWGtozlAMfMd7mJGiqVvfiA1fqNQ87qH7yWZiRpI7ZwuTxwC67VY3gyoRxSWPoO4JiA00SQJEC75e");

const getUserEmail = async (event) => {
  const params = {
    UserPoolId: USER_POOL_ID,
    Username: event.identity.claims.username
  };
  const user = await cognitoIdentityServiceProvider.adminGetUser(params).promise();
  const { Value: email } = user.UserAttributes.find((attr) => {
    if (attr.Name === "email") {
      return attr.Value;
    }
  });
  return email;
};

/*
 * Get the total price of the Comanda
 * Charge the customer
 */
exports.handler = async (event) => {
  try {
    const { id, cart, total, address, token } = event.arguments.input;
    const { username } = event.identity.claims;
    const email = await getUserEmail(event);

    await stripe.charges.create({
      amount: total * 100,
      currency: "usd",
      source: token,
      description: `Comanda ${new Date()} by ${email}`
    });
    return { id, cart, total, address, username, email };
  } catch (err) {
    throw new Error(err);
  }
};
