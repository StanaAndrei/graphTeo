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

const dfs = (start, end) => {
    console.log(start)
    let visited = [];
    let link = [];
    let minDis = Number.POSITIVE_INFINITY;
    const utilDFS = (node, dis, paramLink) => {
        visited[node] = true;
        let clink = _.cloneDeep(paramLink);
        clink.push(node);
        if (node === end && minDis > dis) {
            console.log(123);
            minDis = dis;
            link = clink;
            return;
        }
        //console.log(43);
        for (let i = 0; i < edges[node].length; i++) {
            const to = edges[node][i];
            if (visited[to.end] != undefined) {
                continue;
            }
            //console.log(to.end)
            utilDFS(to.end, dis + 1, clink);
        }//*/
    }
    utilDFS(start, 0, []);
    console.log(link);
    return link;
}

/*main*/
const getLink = async (start, end) => {
    //#region init
    movies = await getMovies();
    mkGraph();
    sortEdges();
    //#endregion init
    start = 'Kathryn Dowling';
    end = 'Michael Tucker';
    //end = start;
    let link = dfs(start, end);
    return 1;
    //console.log(edges['Paul Reiser']);
}