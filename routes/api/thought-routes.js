
const router = require('express').Router();
const { Thought, Reaction} = require('../../models')

//TODO: ROUTE TO GET ALL THOUGHTS
router.get('/', async (req,res)=> {
    try{
        let thoughtData = await Thought.find({})
        res.status(200).json(thoughtData)
    }
    catch(err){
        res.status(500).json(err)
    }

})

//TODO: ROUTE TO CREATE A NEW THOUGHT
router.post('/', async (req,res)=> {
    try{
        let thoughtData = await Thought.create(req.body)
        res.status(200).json(thoughtData)
    }
    catch(err){
        res.status(500).json(err)
    }


});

//TODO: ROUTE TO GET SINGLE THOUGHT BASED ON THOUGHT ID
router.get('/:thoughtId', (req,res)=> {

})

//TODO: ROUTE TO UPDATE A THOUGHT
router.put('/', (req,res)=> {

})

//TODO: ROUTE TO DELETE A THOUGHT BASED ON THOUGHT ID
router.delete('/:thoughtId', (req,res)=> {

});

//TODO: ROUTE TO ADD REACTION TO A THOUGHT
router.post('/:thoughtId/reactions', (req,res)=> {

});

//TODO: ROUTE TO DELETE A REACTION ON A THOUGHT
router.delete('/:thoughtId/reactions/:reactionId', (req,res)=> {

})

module.exports = router;
