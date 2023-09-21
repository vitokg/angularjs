export const userService = () => {
  let usersList = [
      {
        username: 'mperry19921',
        firstName: 'Matthew',
        lastName: 'Perry',
        email: 'matthew@mail.com',
        type: 'Administrator',
        password: ''
      },
      {
        username: 'mperry19922',
        firstName: 'Matthew',
        lastName: 'Perry',
        email: 'matthew@mail.com',
        type: 'Administrator',
        password: ''
      },
      {
        username: 'mperry19923',
        firstName: 'Matthew',
        lastName: 'Perry',
        email: 'matthew@mail.com',
        type: 'Administrator',
        password: ''
      },
      {
        username: 'mperry19924',
        firstName: 'Matthew',
        lastName: 'Perry',
        email: 'matthew@mail.com',
        type: 'Administrator',
        password: ''
      }
    ];

  return {
    getUserById: (id) => usersList.find(item => item.username === id),
    getAllUsers: () => usersList,
    createUser: (user) => usersList.push(user),
    updateUser: (user) => {
      const index = usersList
        .findIndex(item => item.username === user.username);
      usersList[index] = {...usersList[index], ...user};
    },
    deleteUser: (userId) => {
      usersList = usersList.filter(item => item.username !== userId)
    }
}
}
