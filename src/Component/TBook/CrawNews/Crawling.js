const rp = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const axios = require('axios');
const { S_IFLNK } = require("constants");

axios.get('https://tinnhanhchungkhoan.vn/nhan-dinh/').then( async (Response) =>  {
    const section = [];
    const $  = await cheerio.load(Response.data);

    $('.rank-2 .story').each((index , element )=>{
       
        const titleReader = $(element).find('.story__heading a').text();
        const LinkTitleReader = $(element).find('.story__heading a').attr('href');
        const ImageTitleReader = $(element).find('a').find('. lazyloaded').attr('src');
        const timeReader = $(element).find('.story__meta time').text();
        
        section.push({
            titleReader,LinkTitleReader,timeReader,ImageTitleReader
        });
    });
    
    fs.writeFileSync('data1.json', JSON.stringify(section))
    console.log(section);
})

