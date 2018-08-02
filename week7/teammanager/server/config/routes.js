const players = require('../controllers/player.js')
const gamesDefault = '/games/1';

module.exports = app => {
    app.post('/api/players', (req, res, next) => players.addPlayer(req, res, next));

    app.get('/api/players', (req, res, next) => players.getPlayers(req, res, next));

    app.delete('/api/players/delete/:id', (req, res, next) => players.deletePlayer(req, res, next));

    app.put('/api/games', (req, res, next) => players.updateGameStatus(req, res, next));

    app.all('*', (req, res, next) => {
        if (new RegExp('^\/games\/').test(req.url)) {
            if (new RegExp('^\/games\/[0-9]$').test(req.url)) {
                if (!new RegExp('^\/games\/[1-3]$').test(req.url)) {
                    return res.redirect(gamesDefault);
                }
            } else {
                return res.redirect(gamesDefault);
            }
        }
        players.index(req, res, next)
    });
};