require("dotenv").config();
const envFile = process.env

describe('Database Configuration', () => {
    it('Should export valid database confiuration', () => {
        expect(envFile).toHaveProperty('MYSQL_HOST');;
        expect(envFile).toHaveProperty("MYSQL_PORT");
        expect(envFile).toHaveProperty("MYSQL_USERNAME");
        expect(envFile).toHaveProperty("MYSQL_PASSWORD");
        expect(envFile).toHaveProperty("MYSQL_DATABASE");
    });
});
