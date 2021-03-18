import client from "./client";
// is better to pass an object userInfo instead of (name, email, password) BC if latter I want to add a new param eg birthday, I don't
// need to change anything here
const register = (userInfo) => client.post("/users", userInfo);

export default { register };
// export default register ;  // WO {} CREATES ERRORS
// I MUST EXPORT WITH {} other wise creates an error like 'Unhandled error was caught