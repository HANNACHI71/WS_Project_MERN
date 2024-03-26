const express = require("express");
const Contact = require("../Model/Contact");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Hello everyone saha chribtkom");
});
// add contact
router.post("/add", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newContact = new Contact({ name, email, phone });
    await newContact.save();
    res.status(200).send({ message: "contact added successfully", newContact });
  } catch (error) {
    res.status(400).send({ message: "cannot add this " });
  }
});
// display all contact
router.get("/allcontact", async (req, res) => {
  try {
    const listContact = await Contact.find();
    res.status(200).send({ message: "All contact list", listContact });
  } catch (error) {
    res.status(400).send({ message: "Empty list " });
  }
})


// get one contact
router.get('/:_id',async (req ,res)=>{
try {
  const contactToGet = await  Contact.findOne({_id : req.params._id})
  res.status(200).send({ message: "I got the Contact", contactToGet });
} 
catch (error) {
  res.status(400).send({ message: "Contact Not Found "});
}
})

//delete contact
router.delete('/:_id', async (req ,res)=> {
  try {
    const { _id }= req.params ;
    await Contact.findOneAndDelete({_id })
    res.status(200).send({message:"Deleted Successfully"})
  } catch (error) {
    res.status(400).send({ message: "Contact Not Deleted"});
  }
})

//update contact
router.put('/:_id', async  (req ,res) =>{
  try {
    const {_id} = req.params;
    const result = await Contact.updateOne({_id},{$set:{...req.body}})
    res.status(200).send({message:"Update Successfully",result})
  } catch (error) {
    res.status(400).send({ message: "cannot update Contact"});
  }
} )

module.exports = router;
