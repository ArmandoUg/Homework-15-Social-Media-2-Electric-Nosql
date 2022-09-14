
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
router.get('/:thoughtId', async (req,res)=> {
try{
    let thoughtData = await Thought.findOne({_id: req.params.thoughtId})
    res.status(200).json(thoughtData)
}
catch(err){
    res.status(500).json(err)
}
});

//TODO: ROUTE TO UPDATE A THOUGHT
router.put('/:thoughtId', async(req,res)=> {
    try{
        let thoughtData = await Thought.updateOne({_id: req.params.thoughtId}, {$set: req.body})
        res.status(200).json(thoughtData)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//TODO: ROUTE TO DELETE A THOUGHT BASED ON THOUGHT ID
router.delete('/:thoughtId',async (req,res)=> {
    try{
        let thoughtData = await Thought.deleteOne({_id: req.params.thoughtId})
        res.status(200).json(thoughtData)
    }
    catch(err){
        res.status(500).json(err)
    }
});

//TODO: ROUTE TO ADD REACTION TO A THOUGHT
router.post('/:thoughtId/reactions', async(req,res)=> {
    try{
        let newReaction = await Reaction.create(req.body);

    let thoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      {
        $push: { reactions: newReaction._id },
      }
    );
    console.log(thoughtData);
    res.status(200).json(thoughtData);    
}
    catch(err){
        res.status(500).json(err)
    }
});

//TODO: ROUTE TO DELETE A REACTION ON A THOUGHT
router.delete('/:thoughtId/reactions/:reactionId', async (req,res)=> {
    try{
        let reaction = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            {
              $pullAll: {
                reactions: [{ _id: req.params.reactionId }],
              },
            }
          );
          console.log(reaction);
        res.status(200).json(reaction)
    }
    catch(err){
        res.status(500).json(err)
    }
});


module.exports = router;
