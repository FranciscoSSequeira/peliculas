const server = require(`./src/server`);
const router = require(`./src/routes/movies`);
const dbConfig = require(`./src/config/DBconfig`);

const PORT = process.env.PORT || 3000;

server.use(router);

dbConfig().then(() => {
        server.listen( PORT, () => {
            console.log(`listen port`, PORT);
        })
    }).catch(err => console.log(err));


