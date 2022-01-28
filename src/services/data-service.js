import { createClient } from 'contentful';

const client = createClient({
  space: process.env.VUE_APP_SPACE_ID,
  environment: process.env.VUE_APP_ENVIRONMENT,
  accessToken: process.env.VUE_APP_ACCESS_TOKEN,
});

const getSettings = async () => {
  const entryID = process.env.VUE_APP_SETTINGS_ENTRY_ID;
  try {
    const response = await client.getEntry(entryID);
    return response.fields;
  } catch (error) {
    console.error(error);
  }
};

const getEntries = async () => {
  try {
    const response = await client.getEntries({ include: 2 });
    return response.items;
  } catch (error) {
    console.error(error);
  }
};

export const dataService = {
  getSettings,
  getEntries,
};
