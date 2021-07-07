const ip = require("ip").address()
    , db = require('../../_db/conn/sqlite3/sqlite.conn');
    ;

module.exports = (req, res) => {

    let tenant = {

        remoteAddress: ip,
        url: req.rawHeaders[1],
        userAgente: req.rawHeaders[15],
        cookie: {
            sessionId: req.rawHeaders[31]
        }
    } || req.cookie('tenant');

    res.cookie('tenant', tenant, {
        path: process.env.COOKIE_PATH,
        expires: new Date(Date.now() + 8 * 3600000),
        domain: process.env.COOKIE_DOMAIN,
        secure: process.env.COOKIE_SECURE,
        httpOnly: process.env.COOKIE_HTTPONLY,
        samesite: process.env.COOKIE_SAMESITE
    })
    
    res.render('home', {tenant: tenant, db: db(tenant) });

};