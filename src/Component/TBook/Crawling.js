const rp = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const axios = require('axios');
const { S_IFLNK } = require("constants");

axios.get('https://vietstock.vn/chung-khoan.htm').then( async (Response) =>  {
    const section = [];
    const $  = await cheerio.load(Response.data);

    $('.container').each((index , element )=>{
        const title =  $(element).find('.panel').find('.panel-heading').text();
        
        section.push({
            title,
            
        });
    });
    fs.writeFileSync('crawling.json', JSON.stringify(section))
    console.log(section);
})