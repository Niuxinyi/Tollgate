import express from 'express';
import router from './routes';
import history from 'connect-history-api-fallback';
// import Statistic from './middlewares/statistic'

const app = express();

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true); //可以带cookies
    res.header("X-Powered-By", '3.2.1')
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});
router(app);
// app.use(Statistic.apiRecord)
// const MongoStore = connectMongo(session);
// app.use(cookieParser());
// app.use(session({
//     name: config.session.name,
//     secret: config.session.secret,
//     resave: true,
//     saveUninitialized: false,
//     cookie: config.session.cookie,
//     store: new MongoStore({
//         url: config.url
//     })
// }))

app.use(history());
app.use(express.static('./public'));
app.listen(8010);
