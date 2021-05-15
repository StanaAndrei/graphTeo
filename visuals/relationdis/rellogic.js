let from, to;
let allActors;;
const getMovies = async () => {
    const url = './data.json';
    let res = await fetch(url);
    let json = await res.json();
    return json.movies;
}
//--------------------------------------
const getLink = async (from, to) => {
    let movies = await getMovies();
    from = this.from;
    to = this.to;
    console.log(movies[0]);
    return 1;
}