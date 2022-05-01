import db from '../models/index';
import bcrypt from 'bcryptjs';

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                //nguoi dung da ton tai thi den b2
                //b2 la compare password
                let user = await db.User.findOne({
                    where: { email: email },
                    attributes: ['email', 'roleId', 'password'],
                    raw: true,
                });
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password); // false

                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'OK';
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong Password';
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `user's not found `;
                }
            } else {
                //return error
                userData.errCode = 1;
                userData.errMessage = `Your's Email isn't exist in your system `;
            }
            resolve(userData);
        } catch (e) {
            reject(e);
        }
    });
};

// let compareUserPassword = () => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let user = await db.User.findOne({
//                 where: { email: userEmail },
//             });
//             if (user) {
//                 resolve(true);
//             } else {
//                 resolve(false);
//             }
//         } catch (e) {
//             reject(e);
//         }
//     });
// };

let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail },
            });
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    handleUserLogin: handleUserLogin,
};
