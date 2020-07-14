const index = (req, res) => {
	res.status(200).send({
        status: 'success',
        statusCode: '2XX',
        data: 'pong'
    })
};

module.exports = {
    index: index
};