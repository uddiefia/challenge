const express = require('express');
const commentRoutes = require('./routes/comments')
const bodyParser = require('body-parser');
const errorController = require('./controllers/error')
const mongoose = require('mongoose');

const port = 3000
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/work-effort',commentRoutes);
app.use(errorController.get404)

mongoose.connect('')
.then(result => {
    console.log('Connected!');
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
})
.catch(err => {
    console.log(err);
});
