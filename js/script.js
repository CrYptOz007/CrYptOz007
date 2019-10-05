// JavaScript Document

$('a.nav-link').click(function(e) {
	e.preventDefault();
	var goTo = this.getAttribute("href");
	$("body").addClass('transitionOut-animation');
	setTimeout(function() {
		$("body").removeClass('transitionOut-animation');
		$("body").addClass('transitionOut-animation');
	}, 999);
	setTimeout(function() {
		$("body").removeClass('transitionOut-animation');
	}, 1499);
	setTimeout(function() {
		window.location = goTo;
	}, 1000);
});

$('a#btn-primary').click(function(e) {
	e.preventDefault();
	var goTo = this.getAttribute("href");
	$("body").addClass('transitionOut-animation');
	setTimeout(function() {
		$("body").removeClass('transitionOut-animation');
		$("body").addClass('transitionOut-animation');
	}, 999);
	setTimeout(function() {
		$("body").removeClass('transitionOut-animation');
	}, 1499);
	setTimeout(function() {
		window.location = goTo;
	}, 1000);
});

// Type Writer
var i = 0;
var count = 0;
var speed = 200;
var introLanguage = ['Hello', 'Bonjour', 'Hola', 'Hallo', 'Ciao', 'Olá', 'नमस्ते', 'سلام', 'こんにちは', '여보세요', 'Merhaba', '你好', 'مرحبا']

function check() {
	if (count == 3) {
		var count = 0;
	}
}

function typeWriter() {
	if (i < introLanguage[count].length) {
		document.getElementById('introText').innerText += introLanguage[count].charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	} else {
		setTimeout(erase, speed);
	}
}
setTimeout(typeWriter, speed);

function erase() {
	if(i >= 0) {
		var temp = introLanguage[count].substring(0, i)
		document.getElementById('introText').innerText = temp
		i--;
		setTimeout(erase, speed);
	} else {
		setTimeout(typeWriter, speed);
		count++;
		console.log(count)
	}
}
