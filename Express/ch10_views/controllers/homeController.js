
import {join} from 'path'

const homeController = (req,res)=>{
    // res.write('<h1>Home-Page</h1>')
    // res.write('<p>I\'m inside Home Page</p>')
    // res.send()
    // res.sendFile('D:\Nodejs\Express\ch10_views\views\index.html')
    res.sendFile(join(process.cwd(), 'views', 'index.html'))
}

export {homeController}