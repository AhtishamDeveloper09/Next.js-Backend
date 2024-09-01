const { usernamee, passwordd } = process.env;
export const connectionStr =
  "mongodb+srv://" +
  usernamee +
  ":" +
  passwordd +
  "@next-project.thac9.mongodb.net/productDB?retryWrites=true&w=majority&appName=next-project";
