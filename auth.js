// Basic auth system using composition pattern

// generate token from scratch
const crypto = require('crypto');

function generateToken() {
    return {
        token: crypto.randomBytes(12).toString('hex'),
        refreshToken: "",
        tokenType: 'Bearer',
        expiresIn: 3600,
        scope: 'read write',

    }
}

/// refresh token
const refreshToken = () => crypto.randomBytes(10).toString('hex');

//  when user login set token and refresh token and on every request check if token is valid or not

class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
        this.token = "";
        this.refreshToken = "";
        this.tokenType = '';
        this.expiresIn = 0;
        this.scope = 'read write';
    }
}


class System {
    constructor() {
        this.users = [];
    }

    login(user) {
        const token = generateToken();
        user.name = user.name;
        user.role = user.role;
        user.token = token.token;
        user.refreshToken = token.refreshToken;
        user.tokenType = token.tokenType;
        user.expiresIn = token.expiresIn;
        user.scope = token.scope;
        this.users.push(user);
        return user;
    }

    logout(user) {
        this.users = this.users.filter(u => u !== user);
    }

    isTokenValid(user) {
        return user.token !== "";
    }

    refreshToken(user) {
        user.refreshToken = refreshToken();
    }

    showUsers() {
        console.log(this.users);
    }
}

// const system = new System();
function text() {
    const system = new System();

    const user = system.login(new User('John', 'admin'));
    // check if is valid user have tokne then add refresh token
    if (system.isTokenValid(user)) {
        system.refreshToken(user);
    }

    // another user
    const user2 = system.login(new User('hamza', 'admin'));
    if (system.isTokenValid(user2)) {
        system.refreshToken(user2);
    }

    // logout user
    system.logout(user2);

    system.showUsers();
}

text();


