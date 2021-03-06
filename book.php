<?php
require_once('workflows.php');
$w = new Workflows();
$query = urlencode( "{query}" );
$api = "01068bdd0c3168a70313a397249439f5";
$url = "https://api.douban.com/v2/book/search?count=20&apikey=$api&q=$query";
$suggestions = $w->request( $url );
$suggestions = json_decode( $suggestions );
function get_name($i) {
   return $i->name;
}
foreach( $suggestions->books as $suggest ):
	$w->result( $suggest->id, $suggest->alt, $suggest->title, '作者: '. implode(",", $suggest->author) .' 评分: '. $suggest->rating->average .'/'. $suggest->rating->numRaters .' 标签: '. implode(",", array_map('get_name', $suggest->tags)), 'book.png' );
endforeach;

if ( count( $w->results() ) == 0 ):
      	$w->result( 'dobanbook', 'http://book.douban.com/subject_search?search_text='. $query, '糟糕…', '没找到符合条件的书籍, 去豆瓣搜搜看？', 'icon.png', 'yes' );
endif;

echo $w->toxml();



require_once('workflows.php');
$w = new Workflows();
$query = urlencode( "{query}" );
$api = "01068bdd0c3168a70313a397249439f5";
$url = "https://api.douban.com/v2/movie/search?count=20&apikey=$api&q=$query";
$suggestions = $w->request( $url );
$suggestions = json_decode( $suggestions );
foreach( $suggestions->subjects as $suggest ):
	$w->result( $suggest->id, $suggest->alt, $suggest->title, '年份: '. $suggest->year .' 评分: '. $suggest->rating->average .' 类型: '. $suggest->subtype .' 别名: '. $suggest->original_title, '4E86472A-FB8F-4F64-975F-785BF66B9F08.png' );
endforeach;

if ( count( $w->results() ) == 0 ):
      	$w->result( 'dobanmusic', 'http://movie.douban.com/subject_search?search_text='. $query, '糟糕...', '没找到符合条件的电影, 去豆瓣搜搜看？', 'icon.png', 'yes' );
endif;

echo $w->toxml();
