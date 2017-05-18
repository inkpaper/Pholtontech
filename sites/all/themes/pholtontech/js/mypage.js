/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    // Place your code here.
    //传页面的title值给视图
    var url = location.search;
    var theRequest = new Object();
    if(url.indexOf("?") != -1){
    	var str = url.substr(1);
    	var node_id = str.split("&")[0].split("=")[1];
    	var title_str = unescape(str.split("&")[1].split("=")[1]);
    	$('#page-title').html(title_str);
    }

    
    $("[href^='/product_type/']").each(function(){
    	var link = $(this).attr('href');
    	link_id = link.split("/")[2];
    	if(link_id == node_id){
    		$(this).addClass("active");
    	}
    });
  }
};


})(jQuery, Drupal, this, this.document);
