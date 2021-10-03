const sequelize = require("../db/conexion")

module.exports=class Products{
    constructor(producto){
        this.producto=producto;
    }

    async readProduct(){
        let result = await sequelize.query("SELECT * FROM productos");
        return result;
    }
    async createProduct(id,nombre,categoria,precio,cantidad,descripcion){
        let result = await sequelize.query("INSERT INTO  productos (id,nombre,categoria,precio,cantidad,descripcion)VALUES('"+id+"','"+nombre+"','"+categoria+"','"+precio+"','"+cantidad+"','"+descripcion+"')");
        return result
        
    }
    async deleteProduct(producto){
        let result = await sequelize.query("DELETE FROM productos WHERE id =  '"+producto+"'");
    }

    async updateProduct(id){
        let result = await sequelize.query("UPDATE productos SET [nombre] = '"+id.nombre+"',[categoria] = '"+id.categoria+"',[precio] = '"+id.precio+"',[cantidad] = '"+id.cantidad+"',[descripcion] = '"+id.descripcion+"' WHERE [id]= '"+id.id+"';" );
        return result
    }
}