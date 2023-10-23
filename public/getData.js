/** @format */

function getData() {
	const url = '/data';
	const header = document.getElementById('header');
	superagent.get(url).end(function (err, res) {
		if (err) {
			console.log(err);
		} else {
			html = '<div class="grid-container">';
			// res.body is he data stored in the db.json
			console.log(res.body.length);
			if (res.body.length === 0) {
				html += `
								<h1 class="display-4 bg-warning text-center"> THE USER LIST IS EMPTY, ADD USERS </h1>
								</div>
						`;
			} else {
				html += `
								<h1 class="display-4 bg-info text-center"> TOTAL USERS IN THE LIST IS = ${res.body.length}</h1>
								</div>
						`;
			}
		}
		header.innerHTML = html;
	});
}
getData();
