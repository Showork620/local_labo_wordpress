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
			'3': 1,
			'4': 2,
			'5': 2,
			'6': 3,
			'7': 3,
			'8': 4,
			'9': 4,
			'0': 5,
			'-': 5,
			'^': 6,
			'¥': 6,

			'q': 1,
			'w': 1,
			'e': 2,
			'r': 2,
			't': 3,
			'y': 3,
			'u': 4,
			'i': 4,
			'o': 5,
			'p': 5,
			'@': 6,
			'[': 6,

			'a': 7,
			's': 7,
			'd': 8,
			'f': 8,
			'g': 9,
			'h': 9,
			'j': 10,
			'k': 10,
			'l': 11,
			';': 11,
			':': 12,
			']': 12,

			'lshift': 7,
			'z': 7,
			'x': 8,
			'c': 8,
			'v': 9,
			'b': 9,
			'n': 10,
			'm': 10,
			',': 11,
			'.': 11,
			'/': 12,
			'rshift': 12,
		};
		// keyName が keyMap に存在しない場合は ランダム値 を代入
		const randomNumber = Math.floor( Math.random() * 24 ) + 1;
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