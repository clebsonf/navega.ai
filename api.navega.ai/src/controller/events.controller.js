const {postsService} = require('../service');

const creatEvents = async(req, res)=>{
    const { title } = req.body;
    const post = await postsService.createPost({title});
    res.json(post);
}

const getAllEvents = async(req, res) => {
    const posts = await postsService.getAll();
    res.json(posts);
}

module.exports = {creatEvents, getAllEvents}