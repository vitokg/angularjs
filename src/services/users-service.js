export const userService = () => {
  let usersList = [
      {
        username: 'mperry1992',
        firstName: 'Matthew',
        lastName: 'Perry',
        email: 'matthew@mail.com',
        type: 'Administrator',
      },
      {
        username: 'mperry1992',
        firstName: 'Matthew',
        lastName: 'Perry',
        email: 'matthew@mail.com',
        type: 'Administrator'
      },
      {
        username: 'mperry1992',
        firstName: 'Matthew',
        lastName: 'Perry',
        email: 'matthew@mail.com',
        type: 'Administrator'
      },
      {
        username: 'mperry1992',
        firstName: 'Matthew',
        lastName: 'Perry',
        email: 'matthew@mail.com',
        type: 'Administrator'
      }
    ];

  return {
  getAllUsers: () => usersList,
  createUser: (user) => usersList.push(user),
  updateUser: (user) => {
    const index = usersList
      .findIndex(item => this.matchUser(item, user));
    this.usersList[index] = user;
  },
  deleteUser: (user) => {
    this.usersList = usersList.filter(item => !this.matchUser(item, user))
  },
  matchUser: (user1, user2) => user1.username === user2.username && user1.type === user2.type
}
}
