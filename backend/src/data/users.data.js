const users = [];
function createUser({ nome, email, senha }) { const user = { id: Date.now(), nome, email: String(email).toLowerCase(), senha, createdAt: new Date().toISOString() }; users.push(user); return user; }
function findUserByEmail(email) { return users.find((user) => user.email === String(email).toLowerCase()); }
function publicUser(user) { if (!user) return null; return { id: user.id, nome: user.nome, email: user.email }; }
module.exports = { createUser, findUserByEmail, publicUser };
