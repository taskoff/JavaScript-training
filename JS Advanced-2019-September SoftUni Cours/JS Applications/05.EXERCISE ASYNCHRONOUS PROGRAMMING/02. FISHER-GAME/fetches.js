let fetches = function () {
    let rootUrl = 'https://fisher-game.firebaseio.com/catches/';

    const get = () => fetch(rootUrl + '.json').then(r => r.json());
    
    const post = (data)=> fetch(rootUrl + '.json', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data)
    })

    const del = id => fetch(rootUrl + `${id}` + '.json', {
        method: 'DELETE'
    })

    const put = (id, data) => fetch(rootUrl + `${id}` + '.json', {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data)
    })

    return {
        get,
        post,
        del,
        put
    }
}()

export { fetches};