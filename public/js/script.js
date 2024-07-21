document.getElementById('like-song').onclick = function() {
    app.get("/collection/tracks", (req,res) => {
        res.render("like-song.ejs");
    })
}