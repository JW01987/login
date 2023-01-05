'use strict'

class UserStorage{
    static #users = {
        id: ['123', '456', '789'],
        psword: ['123', '456', '789'],
        name:['qqq','www','eee']
    }

    static getUsers(...변수명){
        return this.#users
    }
}

module.exports=UserStorage