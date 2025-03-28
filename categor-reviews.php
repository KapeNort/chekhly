<?php
/**
 * Шаблон рубрики (category.php)
 * @package WordPress
 * @subpackage your-clean-template
 */
get_header(); // подключаем header.php ?> 
<section>
<div class="container">
	<h1 style="margin-bottom: 50px;"><?php single_cat_title(); // название категории ?></h1>
	<?php if (have_posts()) : while (have_posts()) : the_post(); // если посты есть - запускаем цикл wp ?>
		<?php get_template_part('loop'); // для отображения каждой записи берем шаблон loop.php ?>
	<?php endwhile; // конец цикла
	else: echo '<h2>Нет записей.</h2>'; endif; // если записей нет, напишим "простите" ?>	 
	<?php pagination(); // пагинация, функция нах-ся в function.php ?>
</div>
</section>
<?php get_footer(); // подключаем footer.php ?>