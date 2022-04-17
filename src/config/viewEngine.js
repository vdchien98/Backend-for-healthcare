import express from 'express';

let configViewEngine = (app) => {
    //arow funcition
    app.use(express.static('./src/public'));
    app.set('views engine', 'ejs');
    app.set('views', './src/views');
};

module.exports = configViewEngine;
