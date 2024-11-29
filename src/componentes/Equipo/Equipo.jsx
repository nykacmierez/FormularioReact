import "./equipo.css";


const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo} = props.datos; //desestructura los valores y crea var con esos valores desde props.datos

    const estiloCard = { backgroundColor: colorSecundario }; //se puede llamar a la var con el valor de la desestructuracion anterior

    const estiloTitulo = { borderColor: colorPrimario };


    return (
        <section className="equipo" style={ estiloCard }> 
            
            <h3 style={estiloTitulo}> { titulo } </h3>
            
            <div className="colaboradores"> 

            </div>
        </section>
    )
};

export default Equipo;