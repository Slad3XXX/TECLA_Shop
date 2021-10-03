const sequelize = require("../db/conexion")

module.exports = class Users{
    constructor(user){
        this.user=user;
    }
    

    async readUser(){
        let result = await sequelize.query("SELECT * FROM users");
        return result;
    }
    async createUser(usuario,nombre,primer_ap,segundo_ap,password,correo,num_cel){
        let result = await sequelize.query("INSERT INTO  users (usuario,nombre,primer_ap,segundo_ap,password,correo,num_cel)VALUES('"+usuario+"','"+nombre+"','"+primer_ap+"','"+segundo_ap+"','"+password+"','"+correo+"','" +num_cel+"')");
        return result
        
    }
    async deleteUser(usuario){
        let result = await sequelize.query("DELETE FROM users WHERE usuario =  '"+usuario+"'");
    }

    async updateUser(user){
        let result = await sequelize.query("UPDATE users SET [nombre] = '"+user.nombre+"',[primer_ap] = '"+user.primer_ap+"',[segundo_ap] = '"+user.segundo_ap+"',[password] = '"+user.password+"',[correo] = '"+user.correo+"',[num_cel] = '"+user.num_cel+"' WHERE [usuario]= '"+user.usuario+"';" );
        return result
    }
}