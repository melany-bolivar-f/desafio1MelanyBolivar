class ProductManager{
    products=[]
    //---------------------------------------------------------
    addProduct(title,description,price,thumbnail,code,stock){
        let id=0;
        for (let i = 0; i < this.products.length; i++) {
            const element =this.products[i];
            if (element.id>id){
                id=element.id;
            } 
        }
        id++;

        const encontrarcode=this.products.find((x)=>x.code==code);
        if (encontrarcode){
            console.log("error codigo repetido")
        }else{
            this.products.push({id:id,title,description,price,thumbnail,code,stock})
        }  
    }
    //---------------------------------------------------------------------------
    getProducts(){
        console.log(this.products)
    }
    //---------------------------------------------------------------------------
    getProductById(id){
        const idEncontrado=this.products.find((x)=>x.id==id);
        if (idEncontrado){
            console.log(...idEncontrado)
        }else{
            console.error("Not found")
        }

    }
}

const productos=new ProductManager();
productos.getProducts();
productos.addProduct("producto prueba","este es un producto prueba",200,"sin imagen","abc123",25);
productos.getProducts();
productos.addProduct("producto prueba","este es un producto prueba",200,"sin imagen","abc123",25);
productos.getProductById(3);