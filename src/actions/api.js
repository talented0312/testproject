export const getData = (page = 1) => {
    return new Promise((resolve, reject) => {
        fetch(`https://stg.starzly.io/api/featured-videos?page=${page}&per_page=2&app=1&new=1`,
            {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                }
            }
        )
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => {
                console.log("error", err);
                reject(err)
            })
    })
}