function PopUpdate(props){
    const popUpdate = {
        backgroundColor: 'white',
        padding: '10px',
        position: 'absolute',
        zIndex: '3'
    }

    return (
        <div style={popUpdate}>
            <h2>{props.info} alterada com sucesso!</h2>
            <button>Ok</button>
        </div>
    )
}

export default PopUpdate;