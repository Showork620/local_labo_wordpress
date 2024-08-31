// 即時関数
( function () {
    
	// キーダウンイベント
	document.addEventListener( 'keydown', function ( event ) {

		// shiftの左右を区別する
		let keyName = event.key;
		if( keyName === 'Shift' ) {
			keyName = event.location === 1 ? 'lshift' : 'rshift';
		}

		// keyを数値に変換するMap
		const keyMap = {
			'2': 1,
			'3': 2,
			'4': 3,
			'5': 4,
			'6': 5,
			'7': 6,
			'8': 7,
			'9': 8,
			'0': 9,
			'-': 10,
			'^': 11,
			'¥': 12,
			'q': 13,
			'w': 14,
			'e': 15,
			'r': 16,
			't': 17,
			'y': 18,
			'u': 19,
			'i': 20,
			'o': 21,
			'p': 22,
			'@': 23,
			'[': 24,
			'a': 25,
			's': 26,
			'd': 27,
			'f': 28,
			'g': 29,
			'h': 30,
			'j': 31,
			'k': 32,
			'l': 33,
			';': 34,
			':': 35,
			']': 36,
			'lshift': 37,
			'z': 38,
			'x': 39,
			'c': 40,
			'v': 41,
			'b': 42,
			'n': 43,
			'm': 44,
			',': 45,
			'.': 46,
			'/': 47,
			'rshift': 48,
		};
		// keyName が keyMap に存在しない場合は ランダム値 を代入
		const randomNumber = Math.floor( Math.random() * 48 ) + 1;
		const keyNumber = keyMap[keyName] ? keyMap[keyName] : randomNumber;

		// キー名を表示
		const keyNameElement = document.getElementById( 'js-key-name' );
		const keyNumberElement = document.getElementById( 'js-key-number' );
		keyNameElement.textContent = keyNumber;
		keyNumberElement.textContent = keyName;
		
		// 押された keyNumber と一致する js-pallet-cell を active にする
		const pressedCellElement = document.querySelector( '.js-pallet-cell[data-key-number="' + keyNumber + '"]' );
		const pressedCount = Number( pressedCellElement.dataset.pressedCount );

		if( pressedCellElement.classList.contains( 'is-active' ) ) {

			
			if ( 5 > pressedCount ) {
				pressedCellElement.dataset.pressedCount ++;

				if ( pressedCellElement.dataset.pressedCount == 5 ) {
					setTimeout( function () {
						pressedCellElement.classList.remove( 'is-active' );
						pressedCellElement.dataset.pressedCount = 0;
					}, 600 );
				}
			}
		}
		else {
			pressedCellElement.classList.add( 'is-active' );
		}
	} );
}() );