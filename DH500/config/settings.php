<?php
/**
 * settings.php - site wide generic settings for 402 framework
 */
 
 global $settings;
 
 //project defined settings
 $settings['project_title'] = "Strange Fruit";
 $settings['project_director'] = "Caitlin Pollock";
 $settings['project_logo'] = "logo.png";

 //HTML meta
 $settings['meta_keywords'] = "digh,500,framework";
 $settings['meta_charset'] = "utf-8";
 $settings['meta_description'] = "framework for digh 500";

 //framework settings
 $settings['language_id'] = "en";
 $settings['url'] = str_replace(basename($_SERVER['PHP_SELF']), '', 'http://'.$_SERVER['HTTP_HOST'].dirname($_SERVER['SCRIPT_NAME'])."/");
 $settings['request_uri'] = "$_SERVER[REQUEST_URI]";
 
?>