import { createClient } from 'newt-client-js';

const newtClient = createClient({
  spaceUid: process.env.NEWT_SPACE_ID || '',
  token: process.env.NEWT_CDN_API_TOKEN || '',
  apiType: 'cdn',
});

export default newtClient;
