const rp = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const axios = require('axios');
const { S_IFLNK } = require("constants");

axios.get('https://vietstock.vn/chung-khoan.htm').then( async (Response) =>  {
    const section = [];
    const $  = await cheerio.load(Response.data);

    $('#channel-container section').each((index , element )=>{
        const title =  $(element).find(".channel-title").text().trim();
        const link =  $(element).find(".channel-title a").attr("href");
        const Description =  $(element).find(".channel-head").text();
        const time =  $(element).find(".meta .date").text();
        const image =  $(element).find(".thumb .img-responsive").attr("src");
        const Stock =  $(element).find(".stock-list a").text();
        const StockIndex =  $(element).find(".stock-list span.color-up").text();
        const StockLink =  $(element).find(".stock-list a").attr("href");
        section.push({
            title,link,Description,time,image,Stock,StockIndex,StockLink,
        });
    });
    

    fs.writeFileSync('data.json', JSON.stringify(section))
    console.log(section);
})
