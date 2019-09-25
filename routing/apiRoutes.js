app.get("/api/friends", (req, res) => {
    res.json(friendsData);
});