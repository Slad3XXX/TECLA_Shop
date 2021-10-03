const modelProducts = require('../model/modelProdu')

module.exports.createP=async(producto)=>{
    let id = new modelProducts();
    let data = await id.createProduct(producto.id,producto.nombre,producto.categoria,producto.precio,producto.cantidad,producto.descripcion);

}

module.exports.updateP=async(producto)=>{
    let id = new modelProducts();
    let data = await id.updateProduct(id);

}

module.exports.deleteU=async(id)=>{
    let response = new modelProducts;
    let result =await response.deleteProduct(id)
    return result;
}

module.exports.readP= async()=>{
    let response = new modelProducts();
    let result = await response.readProduct();
    return result;
}