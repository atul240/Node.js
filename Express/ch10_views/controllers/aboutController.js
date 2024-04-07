
import {join} from 'path'

const aboutController = (req,res)=>{
    // res.write('<h1>About-Page</h1>')
    // res.write('<p>I\'m inside About Page</p>')
    // res.send();
    // res.sendFile('D:\Nodejs\Express\ch10_views\views\about.html')
    res.sendFile(join(process.cwd(), 'views', 'about.html'))

}

export {aboutController}