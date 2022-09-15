
const router = require('express').Router();
const {User} = require("../../models")

//TODO - ROUTE THAT GETS ALL THE USERS, include friends?
router.get('/', async (req,res)=> {
    try{
        let userData = await User.find({})
        res.status(200).json(userData)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//TODO - ROUTE THAT CREATES A NEW USER
router.post('/', async (req,res)=> {
    try{
        let userData = await User.create(req.body)
        res.status(200).json(userData)
    }
    catch(err){
        res.status(500).json(err)
    }
});

//TODO - ROUTE THAT GETS A SINGLE USER BASED ON USER ID
router.get('/:userId', async (req,res) => {
    try{
        let userData = await User.findOne({_id: req.params.userId})
        res.status(200).json(userData)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//TODO - ROUTE THAT UPDATES A SINGLE USER
router.put('/:userId', async (req,res)=> {
    try{
        let userData = await User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true})
        res.status(200).json("User updated")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//TODO - ROUTE THAT DELETES A SINGLE USER BASED ON USER ID
router.delete('/:userId', async (req,res)=> {
    try{
        let userData = await User.deleteOne({_id: req.params.userId})
        res.status(200).json("User deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
});

//TODO - ROUTE THAT ADDS A FRIEND TO A USER
router.put('/:userId/friends/:friendId', async (req,res)=> {
    try{
        let userData = await User.findOneAndUpdate({_id: req.params.userId}, {$push: {friends: req.params.friendId}}, {new: true})
        res.status(200).json(userData)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//TODO - ROUTE THAT DELETES A FRIEND FROM A USER'S FRIENDS, DONT DELETE THE FRIEND AS A USER THOUGH!
router.delete('/:userId/friends/:friendId', async (req,res)=> {
    try{
        let userData = await User.findOneAndUpdate({_id: req.params.userId}, {$pull: {friends: req.params.friendId}}, {new: true})
        res.status(200).json(userData)
    }
    catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;
