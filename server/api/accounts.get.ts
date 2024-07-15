import { Account } from '../model/account';

export default defineEventHandler(async event => {
  const query = getQuery(event);

  if (query.id) {
    const account = await Account.findById(query.id);
    return { account };
  }

  const accounts = await Account.find(
    {},
    {
      no: true,
      name: true,
      price: true,
      status: true,
    }
  );

  return { accounts };
});
