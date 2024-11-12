import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

const PLAID_CLIENT_ID="672ee224f6f1df001a8d7206"
const PLAID_SECRET="33486b91fdf87ac0db353b92180fca"
const PLAID_ENV="sandbox"
const PLAID_PRODUCTS="auth, transactions, identity"
const PLAID_COUNTRY_CODES="JP"

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
      'PLAID-SECRET': PLAID_SECRET,
    }
  }
})

export const plaidClient = new PlaidApi(configuration);
