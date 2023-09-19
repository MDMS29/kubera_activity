const headerLocal = JSON.parse(localStorage.getItem('headers'));
const headers = {
    "access-token": headerLocal.accessToken,
    "client": headerLocal.client,
    "expired": headerLocal.expires,
    "uid": headerLocal.uid
}
let awards = []
const baseUrl = 'http://sena.kubera.work/api/v3';

const premios = async () => {
    const res = await axios.get(`${baseUrl}/awards`, { headers })
        .then((resp) => {
            return resp.data.awards
        })

    awards = res

    const divAwards = document.querySelector('#div-awards')
    let cadena = ''

    for (let i = 0; i < awards.length; i++) {
        const { description, name, image, kuboinz, created_at } = awards[i]
        cadena += ` <div class="card text-decoration-none text-dark pointer">
                        <div class="position-absolute rounded-pill bg-warning bg-opacity-50 top-0 end-0 me-2 mt-1">
                            <span class="ps-2" style="color">${kuboinz}</span> <img src="public/assets/kuboints.jpeg">
                        </div>
                        <img src="${image}" class="card-img-top" alt="${name}" height="250">
                        <div class="card-body">
                        <p class="card-text text-center fw-bold capitalize fs-5">${name}</p>
                        <p class="card-text">${description}</p>
                        <div class="w-100 d-flex justify-content-end">
                            <small class="text-secondary">Redimido: ${created_at.split('T')[0]}</small>
                        </div>
                        </div>
                    </div>`
    }
    divAwards.innerHTML = cadena
}

premios()



