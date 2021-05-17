let from, to, movies;
let allActors;;
let edges = [];
const getMovies = async () => {
    const url = './data.json';
    let res = await fetch(url);
    let json = await res.json();
    return json.movies;
}
//--------------------------------------

const mkdefined = actor => {
    if (edges[actor] == undefined) {
        edges[actor] = [];
    }
}

const mkGraph = () => {
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
}

const sortEdges = () => {
    for (let key in edges) {
        edges[key].sort((a, b) => {
            if (a.to < b.to) {
                return -1;
            }
            if (a.to > b.to) {
                return 1;
            }
            return 0;//*/
        });
    }//*/
}

const mkUnique = () => {
    
}

/*main*/
const getLink = async (from, to) => {
    //#region init
    movies = await getMovies();
    from = this.from;
    to = this.to;
    mkGraph();
    sortEdges();
    //#endregion init
    console.log(edges['Paul Reiser']);
    return 1;
}