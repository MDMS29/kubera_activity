
//Variables 

const loginData = {
    email: "usuario5@gmail.com",
    password: "kuberausuario5"
};

//Login

const baseUrl = 'http://sena.kubera.work/api/v3';

axios.post(`${baseUrl}/auth/sign_in`, loginData, { mode: "cors" })
.then(( resp ) => { 
    const headers = {
        accessToken: resp.headers['access-token'],
        client: resp.headers['client'],
        expires: resp.headers['expires'],
        uid: resp.headers['uid']
    }
    localStorage.setItem('headers', JSON.stringify( headers ));
});


//Listado  Marcas Multicatalogo Kubera
function MarcasMulticatalogo() {
    const headerLocal = JSON.parse(localStorage.getItem('headers'));
    const headers = {
        "access-token": headerLocal.accessToken,
        "client": headerLocal.client,
        "expired": headerLocal.expires,
        "uid": headerLocal.uid
    }
    console.log( headers );
    axios.get(`${baseUrl}/brands`,{ headers })    
    .then(( resp ) => console.log( resp.data.brands ))
}
MarcasMulticatalogo();







