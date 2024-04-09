var abc = [{
    'fname' : 'Atul',
    'lname' : 'Agnihotri',
    'desg' : 'Software Engineer'
},
{
    'fname' : 'Kapil',
    'lname' : 'Agnihotri',
    'desg' : 'Civil Engineer' 
},
{
    'fname' : 'Vishal',
    'lname' : 'Agnihotri',
    'desg' : 'Electrical Engineer'
}
]

const homeController = (req, res)=>{    
    // res.render('');
    res.render('index.ejs', {info:abc});
}

export {homeController}