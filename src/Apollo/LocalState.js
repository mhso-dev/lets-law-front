export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("token")) || false,
  user: null
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token, user }, { cache }) => {
      console.log(user);
      localStorage.setItem("token", token);
      cache.writeData({
        data: {
          isLoggedIn: true,
          user: user
        }
      });
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("token");
      window.location = "/";
      return null;
    }
  },
  Query: {
    isLoggedIn: (_, __, { cache }) => {
      return cache.read("isLoggedIn");
    }
  }
};
