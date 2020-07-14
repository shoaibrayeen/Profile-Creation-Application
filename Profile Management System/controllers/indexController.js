const index = (req, res) => {
	res.render('index', { title: 'Welcome to Profile Management System' });
};

module.exports = {
    index: index
};