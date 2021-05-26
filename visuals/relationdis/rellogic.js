let movies;
let actors = new Set([]);
let edges = [];
const getMovies = async () => {
    const url = './data.json';
    let res = await fetch(url);
    let json = await res.json();
    return json.movies;
}
//--------------------------------------

const mkdefined = acendr => {
    if (edges[acendr] == undefined) {
        edges[acendr] = [];
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
                    end: cast[j],
                    movie: title,
                });
                edges[cast[j]].push({
                    end: cast[i],
                    movie: title,
                });
            }
        }
    }
}

const sortEdges = () => {
    for (let key in edges) {
        edges[key].sort((a, b) => {
            if (a.end < b.end) {
                return -1;
            }
            if (a.end > b.end) {
                return 1;
            }
            return 0;//*/
        });
    }//*/
}

const mkUnique = () => {
    
}

const bfs = (start, end) => {
    let link = [];
    let q = new Queue();
    q.push(start);
    //console.log(q.front());
    while (!q.isempty()) {
        let front = q.pop();
        for (let to of edges[front]) {

        }
    }//*/
}

/*main*/
const getLink = async (start, end) => {
    //#region init
    movies = await getMovies();
    mkGraph();
    sortEdges();
    //#endregion init
    bfs(start, end);
    //console.log(edges['Paul Reiser']);
    return 1;
}