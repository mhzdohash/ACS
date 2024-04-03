function Form(){
    return(
        <div>
            <label htmlFor="nome">Nome:</label>
            <input type="text" name="nome" required/><br/>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" required/><br/>
            <label htmlFor="mensagem">Mensagem:</label><br/>
            <textarea id="mensagem" name="mensagem" rows="4" required></textarea><br/>
            <input type="submit" value="Enviar"></input>
        </div>
    )
}

export default Form