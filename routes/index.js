exports.index = function(req, res) {
	res.render('default',
		{title: 'Home',
		classname: 'home',
		  users: ['elnas','comfy','jaden']
		});
}

exports.about =  function(req, res) {
	res.render('default',
		{title: 'About Us',
		  classname: 'about'
		});

}

