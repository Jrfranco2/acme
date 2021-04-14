const Employee = require("./Employee");

const d = document,
    $files = d.getElementById("file");

const abrirArchivo = (file) => {
    if(file){
        const fileReader = new FileReader();
        fileReader.addEventListener("loadend",e=>{
            let contenido = e.target.result;
            let lineas = contenido.split('\n');
            for(const linea of lineas){
                const employee = new Employee(data);
                console.log(employee.getName());
            } 
        });
        fileReader.readAsText(file);
    }
};

d.addEventListener("change",e=>{
    if(e.target === $files){
        let archivo = e.target.files[0];
        abrirArchivo(archivo);
    }
});
