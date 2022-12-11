const path = require('path');
const dotenv = require('dotenv');
const envPath = path.join(process.cwd(), '.common.env');

dotenv.config({ path: envPath });
