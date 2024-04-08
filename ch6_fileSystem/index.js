// File System promise API
import * as fs from 'fs/promises';

//creating directory path should be there

try{
    await fs.mkdir("D:\\Nodejs\\ch6_fileSystem\\test\\demo");
    console.log("created...");
}catch(err){
    console.log(err);
}