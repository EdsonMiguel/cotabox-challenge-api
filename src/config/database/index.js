import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

const connectionString = process.env?.COTABOX_DATABASE_URL;

mongoose.connect(connectionString, config);
mongoose.Promise = global.Promise;
// TODO: Tratar com try/catch e criar uma mensagem de erro.

export default mongoose;
