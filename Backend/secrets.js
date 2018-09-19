const secrets = {
    dbUri: process.env.MONGODB_URI
};
export const getSecret = key => secrets[key];