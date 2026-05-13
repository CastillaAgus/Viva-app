function TeamCard ({nombre, puesto, imagen, email,telefono}) {


    return (

        <div>
            <div>
                <h1>{nombre}</h1>
                <p>{puesto}</p>
                <p>{email}</p>
                <p>{telefono}</p>

            </div>
            <div>
                <img  src={imagen}/>

            </div>

        </div>
    )
};

export default TeamCard;