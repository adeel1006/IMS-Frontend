let accessToken = localStorage.getItem("accessToken");

export const bearerTokenAccess = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};
