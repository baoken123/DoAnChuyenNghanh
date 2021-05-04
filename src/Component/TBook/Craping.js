
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
        const groupTitle =  $(element).find("a .cat").text().trim();
        const LinkGroupTitle =  $(element).find("a").attr("href").trim();
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
    $('.col-md-4 .side-widget').each((index , element )=>{
        const TitleRead =  $(element).find(".heading-1 span").text();
        const trendingImage =  $(element).find(".layout_1--item a .img-responsive").attr("src");
        const trendingTitle =  $(element).find(".trending").text();
        section.push({
            TitleRead,trendingImage,trendingTitle


        });
    });

    fs.writeFileSync('data.json', JSON.stringify(section))
    console.log(section);
})

