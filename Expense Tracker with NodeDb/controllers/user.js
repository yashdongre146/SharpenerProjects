const User = require('../models/user');

exports.addUser = (req, res) => {
    User.create({
        item: req.body.item,
        amount: req.body.amount,
    }).then(()=>{
        res.redirect('/')
    }).catch((err)=>{
        console.log(err);
    })
}
exports.showUser = (req, res) => {
    User.findAll().then((users)=>{
        res.render('index', {users})
    }).catch(err=>console.log(err))
}
exports.editUser = (req, res) => {
    const userId = req.params.userId;
    User.findByPk(userId).then((user)=>{
        res.render('index', { editUser: user})
    }).catch((err)=>console.log(err))
}
exports.updateDetails = (req, res) => {
    const userId = req.body.userId;
    User.findByPk(userId).then((user)=>{
        user.item = req.body.item;
        user.amount = req.body.amount;
        return user.save();
    }).then(()=>{
        res.redirect('/')
    }).catch((err)=>console.log(err))
}
exports.deleteUser = (req, res) => {
    const userId = req.params.userId;
    User.findByPk(userId).then((user)=>{
        user.destroy();
        res.redirect('/')
    }).catch((err)=>console.log(err))
}