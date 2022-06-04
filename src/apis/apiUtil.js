export const baseUrl =
  process.env.NODE_ENV === "production"
    ? " https://cms-app-server-deutsche.herokuapp.com/api/v1/cms"
    : " https://cms-app-server-deutsche.herokuapp.com/api/v1/cms";
