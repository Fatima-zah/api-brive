var searchInput = document.getElementById("tran");
var moreResult = document.getElementsByClassName("movies");
var search = "mission";

fetch("https://imdb8.p.rapidapi.com/auto-complete?q=" + search, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "d0d5bcf725msh7b95ee40d290fa4p17f0ddjsned92422155de"
	}
})
.then(response => response.json())
.then(data => {
    // console.log(data);
    // console.log(data.d);
    // console.log(data.q);
    var moviesDiv = document.getElementsByClassName("movies")[0];
    for(var i=0 ; i<data.d.length ; i++){
        // console.log(data.d[i].l); // titre
        // console.log(data.d[i].i.imageUrl); // url de l'image
        moviesDiv.innerHTML += "<div class='col-4 card'><h1>"+data.d[i].l+"</h1>" + 
        "<img src='"+data.d[i].i.imageUrl+"'></div>";
    }   
})


.catch(err => {
	console.error(err);
});