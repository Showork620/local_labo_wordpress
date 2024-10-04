<?php
/**
 * The main template file
 *
 * @package WordPress
 * @subpackage Template
 */

get_header();
?>
	<div class="l-page">
		<header>
			<h1>hello</h1>
			<p>キー: <span id="js-key-name">なし</span></p>
			<p>番号: <span id="js-key-number">なし</span></p>
		</header>
		<main>
			<div class="p-keyboard-pallet">
				<?php // 12*4 のbox要素を配置. ?>
				<?php for ($i = 1; $i <= 12; $i++) : ?>
					<div class="p-keyboard-pallet__cell js-pallet-cell" data-key-number="<?php echo $i ?>" data-pressed-count="0">
					</div>
				<?php endfor; ?>
			</div>
		</main>
		<footer></footer>
	</div>
<?php
get_footer();
