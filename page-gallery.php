<?php
/**
 * Шаблон обычной страницы (page.php)
 * @package WordPress
 * @subpackage your-clean-template
 */
get_header(); // подключаем header.php ?>
<?php 
if ( is_page(961)):
	get_template_part('inc/whyme');
	the_content();
	else: ?>
<section>
	<div class="container">
		<?php if ( have_posts() ) while ( have_posts() ) : the_post(); // старт цикла ?>
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>> <?php // контэйнер с классами и id ?>
				<h1 style="margin-bottom: 30px"><?php the_title(); // заголовок ?></h1>
				<?php the_content(); // контент ?>
			</article>
		<?php endwhile; // конец цикла ?>
	</div>
	<!-- /.container -->
</section>
<?php endif; ?>
<?php 
if ( is_page(1256)):
	the_field('галерея');
	endif; ?>
<?php get_footer(); // подключаем footer.php ?>