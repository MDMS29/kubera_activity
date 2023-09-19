
//Variables 

const loginData = {
    email: "usuario5@gmail.com",
    password: "kuberausuario5"
};
var marcas = []
var productos = []

const headerLocal = JSON.parse(localStorage.getItem('headers'));
const headers = {
    "access-token": headerLocal.accessToken,
    "client": headerLocal.client,
    "expired": headerLocal.expires,
    "uid": headerLocal.uid
}
//Login

const baseUrl = 'http://sena.kubera.work/api/v3';

axios.post(`${baseUrl}/auth/sign_in`, loginData, { mode: "cors" })
    .then((resp) => {
        const headers = {
            accessToken: resp.headers['access-token'],
            client: resp.headers['client'],
            expires: resp.headers['expires'],
            uid: resp.headers['uid']
        }
        localStorage.setItem('headers', JSON.stringify(headers));
    });
//Listado  Marcas Multicatalogo Kubera
let cadena = ''
const divBrands = document.querySelector('#div-brands')

const MarcasMulticatalogo = async () => {
    cadena = ''
    const res = await axios.get(`${baseUrl}/brands`, { headers })
        .then((resp) => {
            return resp.data.brands
        })
    marcas = res
    console.log(marcas[0])
    for (let i = 0; i < marcas.length; i++) {
        const { id, name, logo } = marcas[i]
        cadena += ` <div onclick="productosBrand(${id})" class="card text-decoration-none text-dark">
                        <img src="${logo}" class="card-img-top" alt="${name}" height="250">
                        <div class="card-body">
                        <p class="card-text text-center fw-bold capitalize fs-5">${name}</p>
                        </div>
                    </div>
            `
    }
    divBrands.innerHTML = cadena
}
MarcasMulticatalogo();

const productosBrand = async (id) => {
    cadena = ''
    const res = await axios.get(`${baseUrl}/brands/${id}/products`, { headers })
        .then((resp) => {
            return resp.data.products
        })
    productos = res
    console.log(productos[0])
    for (let i = 0; i < productos.length; i++) {
        const { name, image, kuboinz } = productos[i]
        cadena += ` <div class="card text-decoration-none text-dark pointer" onclick="redimir(${id}, ${productos[i].id}, ${kuboinz})">
                        <div class="position-absolute rounded-pill bg-warning bg-opacity-50 top-0 end-0 me-2 mt-1">
                            <span class="ps-2" style="color">${kuboinz}</span> <img src="public/assets/kuboints.jpeg">
                        </div>
                        <img src="${image}" class="card-img-top" alt="${name}" height="250">
                        <div class="card-body">
                        <p class="card-text text-center fw-bold capitalize fs-5">${name}</p>
                        </div>
                    </div>
            `
    }
    divBrands.innerHTML = cadena
}

const redimir = async (idMarca, idProducto, points ) => {
    if( points < puntuacionGlobal)
    try {
        const url = `${baseUrl}/brands/${idMarca}/products/${idProducto}/redeem`;
        const resp = await fetch(url, { headers, method: 'POST' });
        const result = await resp.json();
        
    } catch (error) {
        console.log(error)
    }
    
    
    
    // hp://sena.kubera.work/api/v3/brands/(id_marca)/products/(id_producto)/redeem
    // console.log(res)
}







