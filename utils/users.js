const users = [];

function joinRoom(id, username, room) {
  const user = { id, username, room };

  users.push(user);

  return user;
}
function currentUser(id) {
  return users.find(user => user.id === id);
}
function leaveRoom(id) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}
function roomUsers(room) {
  return users.filter(user => user.room === room);
}

module.exports = { joinRoom, currentUser, leaveRoom, roomUsers};
