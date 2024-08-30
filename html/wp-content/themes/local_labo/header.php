<?php
/**
 * The header template file
 *
 * @package WordPress
 * @subpackage Template
 */

$header_type = $args['header_type'];
if ( empty( $header_type ) ) {
	$header_type = 'default';
}
?>
<!DOCTYPE html>
<html lang="ja"
<?php
if ( 'news' === $header_type ) {
	echo ' class="p-news__scroll-rule"';
}
?>
>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="UTF-8">
	<meta name="format-detection" content="telephone=no">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<!-- preload -->
	<?php if ( ! is_home() ) : ?>
	<link rel="preload" as="image" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/background/<?php echo esc_html( $header_type ); ?>.webp">
	<?php endif; ?>
	<link rel="preload" as="image" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/background/filter.png">
	<link rel="preload" as="image" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/icon/hbg-on.svg">
	<link rel="preload" as="image" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/icon/mail.svg">
	<link rel="preload" as="image" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/icon/operator.svg">
	<link rel="preload" as="image" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/icon/off.svg">
	<link rel="preload" as="image" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/decoration/arrow-bottom.svg">
	<link rel="preload" as="image" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/decoration/arrow-right.svg">
	<!-- google font -->
	<?php wp_head(); ?>
</head>
<body>
	<!-- hbg menu -->
	<button class="p-hbg-menu__button js-hbg-menu-button"></button>
	<div class="p-hbg-menu js-hbg-menu">
		<div class="p-hbg-menu__content">
			<button class="p-foreign-nav__button js-foreign-button">日本語</button>
			<ul class="p-foreign-nav__list js-foreign-nav">
				<li>
					<a href="<?php echo esc_url( home_url() ); ?>"
					class="p-foreign-nav__item js-lang-item is-selected" data-lang="ja">日本語</a>
				</li>
				<li>
					<a href="https://translate.google.com/translate?sl=ja&tl=en&u=http%3A%2F%2Fferryyakusima2.com%2F"
					class="p-foreign-nav__item js-lang-item" target="_blank" rel="noreferrer noopener" data-lang="en">English</a>
				</li>
				<li>
					<a href="https://translate.google.com/translate?sl=ja&tl=ko&u=http%3A%2F%2Fferryyakusima2.com%2F"
					class="p-foreign-nav__item js-lang-item" target="_blank" rel="noreferrer noopener" data-lang="ko">한국어</a>
				</li>
				<li>
					<a href="https://translate.google.com/translate?sl=ja&tl=zh-TW&u=http%3A%2F%2Fferryyakusima2.com%2F"
					class="p-foreign-nav__item js-lang-item" target="_blank" rel="noreferrer noopener" data-lang="zh-TW">繁體字</a>
				</li>
				<li>
					<a href="https://translate.google.com/translate?sl=ja&tl=zh-CW&u=http%3A%2F%2Fferryyakusima2.com%2F"
					class="p-foreign-nav__item js-lang-item" target="_blank" rel="noreferrer noopener" data-lang="zh-CW">简体字</a>
				</li>
			</ul>
			<?php get_template_part( 'part/menu' ); ?>
			<ul class="p-bottom-nav__list p-bottom-nav__list--hbg l-container u-mt-30">
				<li>
					<a href="/contact/" class="p-bottom-nav__item p-bottom-nav__item--discount">
						<p class="p-bottom-nav__item-text p-en-font-12">県外から車で利用する際にお得な割引</p>
					</a>
				</li>
				<li>
					<a href="/about#art2" class="p-bottom-nav__item p-bottom-nav__item--reservation">
						<p class="p-bottom-nav__item-text p-en-font-12">乗船予約</p>
					</a>
				</li>
				<li>
					<a href="/about#art2" class="js-mail p-bottom-nav__item p-bottom-nav__item--contact">
						<p class="p-bottom-nav__item-text p-en-font-12">お問い合わせ</p>
					</a>
				</li>
			</ul>
		</div>
	</div>

	<img class="c-scroll-animation__title" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/decoration/scroll-animation.svg" width="9" height="79" alt="SCROLL DOWN">
	<div class="c-scroll-animation"></div>

	<?php if ( is_home() ) : ?>

	<!-- home contents -->
	<div class="p-home__content-wrap">
		<!-- background -->
		<img class="p-home__background-map" width="576" height="510" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/background/home-map.svg" alt="">
		<div class="p-home__background-movie" id="js-background-movie"></div>
		<div class="p-home__background-filter"></div>
		<!-- home-text -->
		<div class="p-home__text">
			<div class="p-home__text-description">
				洋々と航く<br aria-hidden="true">
				世界遺産<br aria-hidden="true">
				屋久島の旅。
			</div>
			<h1 class="p-home__text-heading">
				<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/logo/home-logo.png"
				alt="フェリー屋久島2" width="625" height="83">
			</h1>
		</div>
	</div>


	<!-- loading -->
	<div class="p-home__loading js-loading">
	<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/logo/loading-logo.png"
	alt="フェリー屋久島2" width="500" height="90">
	</div>
	<?php endif; // is-home. ?>

	<!-- header -->
	<div class="p-header__fixed">
		<a href="/">
		<picture>
			<source media="(min-width: 1024px)" srcset="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/logo/header-logo-pc.svg">
			<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/logo/header-logo-sp.png"
			alt="折田汽船株式会社" width="190" height="38">
		</picture>
		</a>
		<!-- operation status -->
		<?php
		$status_page = get_page_by_path( 'oparation-status' );
		$status_page_id = $status_page->ID;
		$operation_status = get_field( 'operation-status', $status_page_id );
		if ( isset( $operation_status ) ) {
			$status_label = $operation_status['label'];
			$status_value = $operation_status['value'];
		} else {
			$status_label = '';
			$status_value = 'default';
		}
		?>
		<figure class="p-status">
			<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/status/<?php echo esc_html( $status_value ); ?>.svg" alt="" width="24" height="24">
			<figcaption class="p-status__label"><?php echo esc_html( $status_label ); ?></figcaption>
		</figure>
	</div>
	<header class="p-header p-header--<?php echo esc_html( $header_type ); ?>">
	</header>
