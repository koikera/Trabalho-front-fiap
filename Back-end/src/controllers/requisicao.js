const axios = require ('axios')

const repositoriesbyuser =async (username)=>{
    try {
        const retorno = await axios.get(`https://api.github.com/users/${username}/repos`);
        return retorno.data
    } catch (error) {
        return error
    }
}

module.exports = {
    repositoriesbyuser
}