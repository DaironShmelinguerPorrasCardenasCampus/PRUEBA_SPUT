const url = 'http://localhost:4000/Empleados'

export const getEmpleatos = async () =>{
    try {
        const resultados = await fetch(url);
        const datosUsuario = await resultados.json();
        return datosUsuario;

    } catch (error) {
        console.log(error);
    }

}
export const IngresarUsuario = async(registro , url) => {
    try {
        await fetch (url,{
            method:'POST',
            body: JSON.stringify(registro),
            headers: {
                'Content-Type': 'application/json'
            }
        });

    } catch (error) {
        console.log(error);
    }
}