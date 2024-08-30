<?php
/**
 * The footer template file
 *
 * @package WordPress
 * @subpackage Template
 */

?>
		<!-- to top -->
		<button class="c-button-to-top js-to-top" onclick="window.location.href='#'">
			<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/icon/arrow-double-top.svg"
			alt="ページトップへ" width="21" height="25">
		</button>
		<footer class="l-footer">
			<div class="l-footer__inner">
				<div class="l-container">
					<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/logo/footer-logo.png"
					alt="折田汽船株式会社" width="280" height="55">
				</div>
				<?php get_template_part( 'part/menu' ); ?>
				<small class="c-copyright">&copy; 折田汽船株式会社 All rights reserved.</small>
			</div>
		</footer>
	</div>
	<!---- /.l-page ---->

	<!-- bottom nav -->
	<nav class="p-bottom-nav" aria-label="予約、お問い合わせ">
		<ul class="p-bottom-nav__list">
			<li>
				<a href="/contact/" class="p-bottom-nav__item p-bottom-nav__item--discount">
					<p class="p-bottom-nav__item-text">
						県外から車で利用する際に<br aria-hidden="true" class="p-en-hidden">
						お得な割引
					</p>
				</a>
			</li>
			<li>
				<a href="/about#art2" class="p-bottom-nav__item p-bottom-nav__item--reservation">
					<p class="p-bottom-nav__item-text">乗船予約</p>
				</a>
			</li>
			<li>
				<a href="/about#art2" class="p-bottom-nav__item p-bottom-nav__item--contact js-mail">
					<p class="p-bottom-nav__item-text">
						<span class="u-pc">お問い合わせ</span>
						<span class="u-sp">お問合せ</span>
					</p>
				</a>
			</li>
		</ul>
	</nav>
	<?php wp_footer(); ?>
</body>
</html>
