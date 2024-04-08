const homeController = (req,res)=>{
    // res.send("Home page h ye.")
    res.render('index', {'firstname' : 'Atul', 'lastname':'Agnihotri'})
}

export {homeController}