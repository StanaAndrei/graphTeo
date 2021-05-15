let from, to;
let allActors;;
let edges = [];
const getMovies = async () => {
    const url = './data.json';
    let res = await fetch(url);
    let json = await res.json();
    return json.movies;
}
//--------------------------------------

const mkdefined = (actor) => {
    if (edges[actor] == undefined) {
        edges[actor] = [];
        console.log(1);
    }
}

const getLink = async (from, to) => {
    let movies = await getMovies();
    from = this.from;
    to = this.to;
    console.log(movies[0]);
    for (let i = 0; i < movies.length; i++) {
        let title = movies[i].title;
        let cast = movies[i].cast;
        for (let i = 0; i < cast.length; i++) {
            for (let j = i + 1; j < cast.length; j++) {
                mkdefined(cast[i]);
                mkdefined(cast[j]);
                edges[cast[i]].push({
                    to: cast[j],
                    movie: title,
                });
                edges[cast[j]].push({
                    to: cast[i],
                    movie: title,
                });
            }
        }
    }
    //console.log(edges['Steve Guttenberg']);
    return 1;
}