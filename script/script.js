let a = document.querySelectorAll('.btn');

for (let i = 0; i < a.length; i++) {
	a[i].addEventListener('click', function (e) {
		let block1 = document.querySelector('.poster1');
		let block2 = document.querySelector('.poster2');

		function reverse_pictures() {
			let block1_img_path = block1.querySelector('img').getAttribute('src');
			let block2_img_path = block2.querySelector('img').getAttribute('src');
			block2.querySelector('img').setAttribute('src', block1_img_path);
			block1.querySelector('img').setAttribute('src', block2_img_path);
		}

		if (this.id == "btn1") {
			block1.classList.add('animation_poster1_prev');
			block2.classList.add('animation_poster2_prev');
			this.setAttribute('disabled', 'disabled');
			window.setTimeout(function () {
				console.log("inside setInterval");
				block1.classList.remove('animation_poster1_prev');
				block2.classList.remove('animation_poster2_prev');
				reverse_pictures();
				document.querySelector('#btn1').removeAttribute('disabled');
			}, 500);
		}
		else {
			block2.classList.add('animation_poster2_next');
			block1.classList.add('animation_poster1_next');
			this.setAttribute('disabled', 'disabled');
			window.setTimeout(function () {
				block2.classList.remove('animation_poster2_next');
				block1.classList.remove('animation_poster1_next');
				reverse_pictures();
				document.querySelector('#btn2').removeAttribute('disabled');
			}, 500);
        }
    })
};