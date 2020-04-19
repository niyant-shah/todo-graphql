import axios from "axios";

const apiUrl = "http://localhost:4000/graphql";

export const indexTodo = () => {
  return axios
    .post(
      `${apiUrl}`,
      {
        query: `
            query {
                todos {
                    id
                    name
                    isStatus
                }
            }
          `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const filterTodo = (status) => {
  return axios
    .post(
      `${apiUrl}`,
      {
        query: `
              query {
                todoStatus(isStatus: ${status}) {
                      id
                      name
                      isStatus
                  }
              }
            `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const storeTodo = (todo) => {
  return axios
    .post(
      `${apiUrl}`,
      {
        query: `
            mutation {
                addTodo(name: "${todo.name}", isStatus: ${todo.isStatus}) {
                    id
                    name
                    isStatus
                }
            }
          `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const updateTodo = (id, isStatus) => {
  return axios
    .post(
      `${apiUrl}`,
      {
        query: `
            mutation {
                updateStatus(id: ${id}, isStatus: ${isStatus}) {
                  id
                  name
                  isStatus
              }
          }
        `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      throw error;
    });
};
