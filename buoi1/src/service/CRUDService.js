const connection = require('../config/database');

const getAllUsers = async () => {
    let [result, fields] = await connection.query('select * from Users');
    return result;
}

const getUserId = async (userId) => {
    let [result, fields] = await connection.query('select * from Users where id = ?', [userId]);
    let user = result && result.length > 0 ? result[0] : {};
    return user;
}

const updateUser = async (email, name, city, userId) => {
    let [result, fields] = await connection.query(
        `UPDATE Users 
        SET email =?,name =?, city = ?
        WHERE id = ?`, [email, name, city, userId]
    );
  
}

const deleteUser = async (id) => {
    let [result, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`, [id]
    );
}


module.exports = { getAllUsers , getUserId, updateUser, deleteUser}