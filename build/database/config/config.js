"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    "development": {
        "dialect": "sqlite",
        "storage": "development.db"
    },
    "test": {
        "dialect": "sqlite",
        "storage": "test.db"
    },
    "production": {
        "dialect": "sqlite",
        "storage": "production.db"
    }
};
