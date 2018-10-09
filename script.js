function changeText() {
	// console.log('działa')
	const sizeScroll = $(document).scrollTop();
	// console.log(sizeScroll);
	const heightSection1 = $('.section1').innerHeight();
	const heightSection2 = $('.section2').outerHeight();
	const heightSection3 = $('.section3').outerHeight(true);
	const heightSection4 = $('.section4').height();	

	const initialDistanceOfSection1 = $('.section1').offset().top;
	const initialDistanceOfSection2 = $('.section2').offset().top;
	const initialDistanceOfSection3 = $('.section3').offset().top;
	const initialDistanceOfSection4 = $('.section4').offset().top;

	if(sizeScroll < heightSection1) {
		$('div.info').text('section 1')
	} 
	else if(sizeScroll < heightSection2 + initialDistanceOfSection2) {
		$('div.info').text('section 2')
	}
	else if(sizeScroll < heightSection3 + initialDistanceOfSection3) {
		$('div.info').text('section 3')
	}
	else {
		$('div.info').text('section 4')
	}
}

$(document).on('scroll', changeText) 