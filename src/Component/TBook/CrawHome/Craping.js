const rp = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const axios = require('axios');
const { S_IFLNK } = require("constants");

axios.get('https://vietstock.vn/chung-khoan.htm').then( async (Response) =>  {
    const section = [];
    const $  = await cheerio.load(Response.data);

    $("#channel-container .row").each((index , element )=>{
        
        const title =  $(element).find(".channel-title a").text().trim();
        const link =  $(element).find(".channel-title a").attr("href");
        const image =  $(element).find(".thumb .img-responsive").attr("src");
        const time =  $(element).find(".meta .date").text();
        const Description =  $(element).find(".channel-head").text();
        
        section.push({
            title,image,time,link,Description
        }); 
    });

    fs.writeFileSync('data.json', JSON.stringify(section))
    console.log(section);
})
