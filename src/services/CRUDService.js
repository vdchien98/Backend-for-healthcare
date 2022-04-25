import db from '../models/index';

import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

// Bắt đầu hash password vaf tạo người dùng
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                // Tạo dữ liệu trong data bằng hàm create
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                // image: data.image,
                roleId: data.roleId,
                // positionId: data.email,
            });
            resolve('ok! create'); // chạy ra khỏi hàm Promise
        } catch (e) {
            reject(e);
        }
    });

    // console.log('data from services');
    // console.log(data);
    // console.log(hashPasswordFromBcrypt);
};
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
};

// kết thúc hashPassword

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true,
            });
            resolve(users);
        } catch (e) {
            reject(e);
        }
    });
};
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
};
