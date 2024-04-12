const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });
var app = require('express')();
var path = require('path');
var http = require('http').Server(app);
// import Router file
var pageRouter = require('./routes/routes');
var user = require("./models/UserModel");
var session = require('express-session');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var urlencodeParser = bodyParser.urlencoded({ extended: true });

const caption_show = 'true'; // [ false , true ]
const dark_navbar = 'false'; // [ false , true ]
const preset_theme = 'preset-1'; // [ preset-1 to preset-10 ]
const dark_layout = 'false'; // [ false , true , default ]
const rtl_layout = 'false'; // [ false , true ]
const box_container = 'false'; // [ false , true ]
const version = 'v1.0';

if (rtl_layout == "true") {
    var rtltemp = "rtl"
} else {
    var rtltemp = "ltr"
}

if (dark_layout == 'true') {
    var darklayouttemp = "dark"
} else {
    var darklayouttemp = "light"
}
if (dark_navbar == 'true') {
    var darknavbartemp = "dark"
} else {
    var darknavbartemp = "light"
}

const layoutsetup = {
    pc_caption_show: caption_show,
    pc_preset_theme: preset_theme,
    pc_dark_navbar: dark_navbar,
    pc_dark_layout: dark_layout,
    pc_rtl_layout: rtl_layout,
    pc_box_container: box_container,
    pc_theme_version: version,
    bodySetup: 'data-pc-preset="' + preset_theme + '" data-pc-sidebar-theme="' + darknavbartemp + '" data-pc-sidebar-caption="' + caption_show + '" data-pc-direction="' + rtltemp + '" data-pc-theme="' + darklayouttemp + '"',
};

app.use(urlencodeParser);
app.use(session({ resave: false, saveUninitialized: true, secret: 'nodedemo' }));
app.use(flash());
/* ---------for database connection---------- */
const DB = process.env.DATABASE_URL;
mongoose.connect(DB, {
    useNewUrlParser: true
}).then((con) => console.log("DB connection successfully..!"));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use('/public', express.static('public'));
app.set('layout', 'layout/layout');
var expressLayouts = require('express-ejs-layouts');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
// Define All Route 
pageRouter(app);

app.all('*', function (req, res) {
    res.locals = { title: '404 Page Not Found' };
    res.render('auth/error-404', { layout: "layout/layout-without-nav", ...layoutsetup });
});

http.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
