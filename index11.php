<?php
require_once('workflows.php');
$w = new Workflows();
$query = urlencode( "生活大爆炸" );
$api = "01068bdd0c3168a70313a397249439f5";
$url = "https://api.douban.com/v2/book/search?count=20&apikey=$api&q=$query";
echo "$url";

$suggestions = $w->request( $url );

echo $suggestions;
$suggestions = json_decode( $suggestions );

// var_dump($suggestions);

function get_name($i) {
   return $i->name;
}
foreach( $suggestions->books as $suggest ):
	$w->result( $suggest->id, $suggest->alt, $suggest->title, '作者: '. implode(",", $suggest->author) .' 评分: '. $suggest->rating->average .'/'. $suggest->rating->numRaters .' 标签: '. implode(",", array_map('get_name', $suggest->tags)), 'book.png' );
endforeach;
// echo $w->toxml();
// echo $w[1];
foreach($w->results[1]  as $key=>$value):
  // echo "aa";
  // echo $key."=>".$value,"</br>";

endforeach;

// var_dump($w->results[0]);

if ( count( $w->results() ) == 0 ):
      	$w->result( 'dobanbook', 'http://book.douban.com/subject_search?search_text='. $query, '糟糕…', '没找到符合条件的书籍, 去豆瓣搜搜看？', 'icon.png', 'yes' );
endif;

// var_dump($w);
