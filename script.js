var list = 'team'; // this list no longer exists
var listOwner = 'twitter';
var imageSrc = "twitter_newbird_blue.png";
var CHARSIZE = 20;

var tweets;
var BG_VISIBILITY = 0.8;
var gridWidth;
var gridHeight;
var grid = [];
var $grid;

$(function() {
//  Twitter's API requires auth now - let's just use a hardcoded set of tweets
//  $.getJSON('https://api.twitter.com/1/lists/statuses.json?slug='+list+'&owner_screen_name='+listOwner+'&per_page=100&callback=?', function(data) {
    tweets = [{"created_at":"2015/12/19 23:00:30 +0000","id":"678349214489968640","id_str":"678349214489968640","text":"<div class=\"dir-ltr\" dir=\"ltr\">Tuning in to the <a href=\"/search?q=DemDebate&s=hash\" class=\"twitter-hashtag dir-ltr\" dir=\"ltr\"><s>#</s>DemDebate</a>? Follow <a href=\"/gov\" class=\"twitter-atreply dir-ltr\" data-screenname=\"gov\" dir=\"ltr\"><s>@</s>gov</a> for a flurry of highlights and data around tonight's conversation. <a href=\"https://t.co/6RoOX2tCun\" class=\"twitter-timeline-link activeLink dir-ltr\" data-url=\"https://vine.co/v/iKhx1nrPYTx\" dir=\"ltr\" rel=\"nofollow\" target=\"_blank\">vine.co/v/iKhx1nrPYTx</a></div>","source":"<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":783214,"id_str":"783214","name":"Twitter","screen_name":"twitter","location":"San Francisco, CA","description":"<div class=\"dir-ltr\" dir=\"ltr\">Your official source for news, updates and tips from Twitter, Inc.\n\n\nNeed help? Visit <a href=\"http://t.co/qq1HEzvnrA\" class=\"twitter-timeline-link activeLink dir-ltr tco-link\" data-url=\"http://support.twitter.com\" dir=\"ltr\" rel=\"nofollow\" target=\"_blank\">support.twitter.com</a>.</div>","url":"<div class=\"dir-ltr\" dir=\"ltr\"><a href=\"http://t.co/5iRhy7wTgu\" class=\"twitter-timeline-link activeLink dir-ltr tco-link\" data-url=\"http://blog.twitter.com/\" dir=\"ltr\" rel=\"nofollow\" target=\"_blank\">blog.twitter.com</a></div>","entities":{"url":{"urls":[{"url":"http://t.co/5iRhy7wTgu","expanded_url":"http://blog.twitter.com/","display_url":"blog.twitter.com","indices":[0,22]}]},"description":{"urls":[{"url":"http://t.co/qq1HEzvnrA","expanded_url":"http://support.twitter.com","display_url":"support.twitter.com","indices":[86,108]}]}},"protected":false,"followers_count":49317040,"fast_followers_count":7039,"normal_followers_count":49310001,"friends_count":141,"listed_count":89035,"created_at":"Tue Feb 20 14:35:54 +0000 2007","favourites_count":135,"utc_offset":-28800,"time_zone":"Pacific Time (US & Canada)","geo_enabled":true,"verified":true,"statuses_count":2295,"media_count":200,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"ACDED6","profile_background_image_url":"http://pbs.twimg.com/profile_background_images/657090062/l1uqey5sy82r9ijhke1i.png","profile_background_image_url_https":"https://pbs.twimg.com/profile_background_images/657090062/l1uqey5sy82r9ijhke1i.png","profile_background_tile":true,"profile_image_url":"http://pbs.twimg.com/profile_images/666407537084796928/YBGgi9BO_normal.png","profile_image_url_https":"https://pbs.twimg.com/profile_images/666407537084796928/YBGgi9BO_normal.png","profile_banner_url":"https://pbs.twimg.com/profile_banners/783214/1449510861","profile_link_color":"226699","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"F6F6F6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"has_custom_timelines":true,"following":true,"follow_request_sent":false,"notifications":false,"full_url":"http://t.co/5iRhy7wTgu"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":192,"favorite_count":689,"entities":{"hashtags":[{"text":"DemDebate","indices":[17,27]}],"symbols":[],"user_mentions":[{"screen_name":"gov","name":"Twitter Government","id":222953824,"id_str":"222953824","indices":[36,40]}],"urls":[{"url":"https://t.co/6RoOX2tCun","expanded_url":"https://vine.co/v/iKhx1nrPYTx","display_url":"vine.co/v/iKhx1nrPYTx","indices":[108,131]}]},"conversation_id":678349214489968640,"favorited":false,"retweeted":false,"possibly_sensitive":false,"cards":{"players":[{"url":"https://t.co/6RoOX2tCun","title":"❄️🇺🇸 Forecast shows a flurry of Tweets in store for tonight's @ABC...","description":"Vine by Twitter Government","site_user":{"id":586671909,"id_str":"586671909","name":"Vine","screen_name":"vine","location":"","description":"tweet @vinehelp for support","url":"https://t.co/0uHapkOl1S","entities":{"url":{"urls":[{"url":"https://t.co/0uHapkOl1S","expanded_url":"http://vine.co","display_url":"vine.co","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":15693012,"fast_followers_count":23,"normal_followers_count":15692989,"friends_count":1,"listed_count":8390,"created_at":"Mon May 21 14:34:36 +0000 2012","favourites_count":1221,"utc_offset":-18000,"time_zone":"Eastern Time (US & Canada)","geo_enabled":true,"verified":true,"statuses_count":1518,"media_count":998,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"F1F1EC","profile_background_image_url":"http://abs.twimg.com/images/themes/theme17/bg.gif","profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme17/bg.gif","profile_background_tile":false,"profile_image_url":"http://pbs.twimg.com/profile_images/637262542516056064/MvotirGP_normal.jpg","profile_image_url_https":"https://pbs.twimg.com/profile_images/637262542516056064/MvotirGP_normal.jpg","profile_banner_url":"https://pbs.twimg.com/profile_banners/586671909/1446222196","profile_link_color":"00BF8F","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":false,"has_extended_profile":true,"default_profile":false,"default_profile_image":false,"has_custom_timelines":true,"following":false,"follow_request_sent":false,"notifications":false},"images":{"mobile":{"width":280,"height":280,"image_url":"https://o.twimg.com/1/proxy.jpg?t=FQQVAhiUAWh0dHBzOi8vdi5jZG4udmluZS5jby9yL3ZpZGVvcy9EOEQxNkQxRjc2MTI5MDEyNzMxNjczMDc0NDgzMl80NTcyNDM5ZDdiMS41LjEuMTY3MjQ1NzkyMjY5MzY3MDUzODQubXA0LmpwZz92ZXJzaW9uSWQ9RzZLZGlKdlFGTWx4QkhtMkZfU1Z5QnZYdUJGOHlWb2cUAhYAEgA&s=kciv4nvxS12WZ-zXULkxmj3Gn00Muw3vYqkjcAHtbp4","image_url_2x":"https://o.twimg.com/1/proxy.jpg?t=FQQVAhiUAWh0dHBzOi8vdi5jZG4udmluZS5jby9yL3ZpZGVvcy9EOEQxNkQxRjc2MTI5MDEyNzMxNjczMDc0NDgzMl80NTcyNDM5ZDdiMS41LjEuMTY3MjQ1NzkyMjY5MzY3MDUzODQubXA0LmpwZz92ZXJzaW9uSWQ9RzZLZGlKdlFGTWx4QkhtMkZfU1Z5QnZYdUJGOHlWb2cUBBYAEgA&s=d5qr371yKO9A9NkaLIdbSNRs3dZ_n4qwk0J5ksz6Anc"},"web":{"width":375,"height":375,"image_url":"https://o.twimg.com/1/proxy.jpg?t=FQQVBBiUAWh0dHBzOi8vdi5jZG4udmluZS5jby9yL3ZpZGVvcy9EOEQxNkQxRjc2MTI5MDEyNzMxNjczMDc0NDgzMl80NTcyNDM5ZDdiMS41LjEuMTY3MjQ1NzkyMjY5MzY3MDUzODQubXA0LmpwZz92ZXJzaW9uSWQ9RzZLZGlKdlFGTWx4QkhtMkZfU1Z5QnZYdUJGOHlWb2cUAhYAEgA&s=2MiE8TTIVHVqILz-05qPfq8d_lQLpNVQsEEqszQO5_U","image_url_2x":"https://o.twimg.com/1/proxy.jpg?t=FQQVBBiUAWh0dHBzOi8vdi5jZG4udmluZS5jby9yL3ZpZGVvcy9EOEQxNkQxRjc2MTI5MDEyNzMxNjczMDc0NDgzMl80NTcyNDM5ZDdiMS41LjEuMTY3MjQ1NzkyMjY5MzY3MDUzODQubXA0LmpwZz92ZXJzaW9uSWQ9RzZLZGlKdlFGTWx4QkhtMkZfU1Z5QnZYdUJGOHlWb2cUBBYAEgA&s=x_k0GbhLL7ZwSexEIfQz5H6X4YFZTz8PLv-DEqqO0mk"},"tablet":{"width":480,"height":480,"image_url":"https://o.twimg.com/1/proxy.jpg?t=FQQVBhiUAWh0dHBzOi8vdi5jZG4udmluZS5jby9yL3ZpZGVvcy9EOEQxNkQxRjc2MTI5MDEyNzMxNjczMDc0NDgzMl80NTcyNDM5ZDdiMS41LjEuMTY3MjQ1NzkyMjY5MzY3MDUzODQubXA0LmpwZz92ZXJzaW9uSWQ9RzZLZGlKdlFGTWx4QkhtMkZfU1Z5QnZYdUJGOHlWb2cUAhYAEgA&s=GMXQUUFYjhMWZBa9flIoQ-YvQ90ukeoNjXjkULrOTH4","image_url_2x":"https://o.twimg.com/1/proxy.jpg?t=FQQVBhiUAWh0dHBzOi8vdi5jZG4udmluZS5jby9yL3ZpZGVvcy9EOEQxNkQxRjc2MTI5MDEyNzMxNjczMDc0NDgzMl80NTcyNDM5ZDdiMS41LjEuMTY3MjQ1NzkyMjY5MzY3MDUzODQubXA0LmpwZz92ZXJzaW9uSWQ9RzZLZGlKdlFGTWx4QkhtMkZfU1Z5QnZYdUJGOHlWb2cUBBYAEgA&s=jGlFtQrStLMadU7Fq4uhstGm8k38w6pUWoNRJc3UfYw"}},"players":[{"source_url":"https://vine.co/v/iKhx1nrPYTx/card","source_type":"text/html","width":435,"height":435},{"source_url":"https://v.cdn.vine.co/r/videos/D8D16D1F761290127316730744832_4572439d7b1.5.1.16724579226936705384.mp4?versionId=ueliL09W7I7VFNqCmLm3CbiGALaTvnjU","source_type":"video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"","width":435,"height":435}]}]},"lang":"en","translation_reliable":true,"userId":783214},{"created_at":"2015/12/18 20:00:15 +0000","id":"677941464727449600","id_str":"677941464727449600","text":"<div class=\"dir-ltr\" dir=\"ltr\">I know when that sweater bling, that can only mean one thing 🎄 <a href=\"https://t.co/66YbGzNntE\" class=\"twitter-timeline-link activeLink dir-ltr\" data-url=\"https://twitter.com/i/moments/668712845056409600\" dir=\"ltr\" rel=\"nofollow\" target=\"_blank\">twitter.com/i/moments/6687…</a><br /><a href=\"https://t.co/nwLvmVDwle\" class=\"twitter-timeline-link activeLink dir-ltr\" data-url=\"https://vine.co/v/hEBDpMvJYOl\" dir=\"ltr\" rel=\"nofollow\" target=\"_blank\">vine.co/v/hEBDpMvJYOl</a></div>","source":"<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":783214,"id_str":"783214","name":"Twitter","screen_name":"twitter","location":"San Francisco, CA","description":"<div class=\"dir-ltr\" dir=\"ltr\">Your official source for news, updates and tips from Twitter, Inc.\n\n\nNeed help? Visit <a href=\"http://t.co/qq1HEzvnrA\" class=\"twitter-timeline-link activeLink dir-ltr tco-link\" data-url=\"http://support.twitter.com\" dir=\"ltr\" rel=\"nofollow\" target=\"_blank\">support.twitter.com</a>.</div>","url":"<div class=\"dir-ltr\" dir=\"ltr\"><a href=\"http://t.co/5iRhy7wTgu\" class=\"twitter-timeline-link activeLink dir-ltr tco-link\" data-url=\"http://blog.twitter.com/\" dir=\"ltr\" rel=\"nofollow\" target=\"_blank\">blog.twitter.com</a></div>","entities":{"url":{"urls":[{"url":"http://t.co/5iRhy7wTgu","expanded_url":"http://blog.twitter.com/","display_url":"blog.twitter.com","indices":[0,22]}]},"description":{"urls":[{"url":"http://t.co/qq1HEzvnrA","expanded_url":"http://support.twitter.com","display_url":"support.twitter.com","indices":[86,108]}]}},"protected":false,"followers_count":49317040,"fast_followers_count":7039,"normal_followers_count":49310001,"friends_count":141,"listed_count":89035,"created_at":"Tue Feb 20 14:35:54 +0000 2007","favourites_count":135,"utc_offset":-28800,"time_zone":"Pacific Time (US & Canada)","geo_enabled":true,"verified":true,"statuses_count":2295,"media_count":200,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"ACDED6","profile_background_image_url":"http://pbs.twimg.com/profile_background_images/657090062/l1uqey5sy82r9ijhke1i.png","profile_background_image_url_https":"https://pbs.twimg.com/profile_background_images/657090062/l1uqey5sy82r9ijhke1i.png","profile_background_tile":true,"profile_image_url":"http://pbs.twimg.com/profile_images/666407537084796928/YBGgi9BO_normal.png","profile_image_url_https":"https://pbs.twimg.com/profile_images/666407537084796928/YBGgi9BO_normal.png","profile_banner_url":"https://pbs.twimg.com/profile_banners/783214/1449510861","profile_link_color":"226699","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"F6F6F6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"has_custom_timelines":true,"following":true,"follow_request_sent":false,"notifications":false,"full_url":"http://t.co/5iRhy7wTgu"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":230,"favorite_count":836,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[{"url":"https://t.co/66YbGzNntE","expanded_url":"https://twitter.com/i/moments/668712845056409600","display_url":"twitter.com/i/moments/6687…","indices":[63,86]},{"url":"https://t.co/nwLvmVDwle","expanded_url":"https://vine.co/v/hEBDpMvJYOl","display_url":"vine.co/v/hEBDpMvJYOl","indices":[88,111]}]},"conversation_id":677941464727449600,"favorited":false,"retweeted":false,"possibly_sensitive":false,"cards":{"players":[{"url":"https://t.co/nwLvmVDwle","title":"The #uglysweater with audio.","description":"Vine by Waisum","site_user":{"id":586671909,"id_str":"586671909","name":"Vine","screen_name":"vine","location":"","description":"tweet @vinehelp for support","url":"https://t.co/0uHapkOl1S","entities":{"url":{"urls":[{"url":"https://t.co/0uHapkOl1S","expanded_url":"http://vine.co","display_url":"vine.co","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":15693012,"fast_followers_count":23,"normal_followers_count":15692989,"friends_count":1,"listed_count":8390,"created_at":"Mon May 21 14:34:36 +0000 2012","favourites_count":1221,"utc_offset":-18000,"time_zone":"Eastern Time (US & Canada)","geo_enabled":true,"verified":true,"statuses_count":1518,"media_count":998,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"F1F1EC","profile_background_image_url":"http://abs.twimg.com/images/themes/theme17/bg.gif","profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme17/bg.gif","profile_background_tile":false,"profile_image_url":"http://pbs.twimg.com/profile_images/637262542516056064/MvotirGP_normal.jpg","profile_image_url_https":"https://pbs.twimg.com/profile_images/637262542516056064/MvotirGP_normal.jpg","profile_banner_url":"https://pbs.twimg.com/profile_banners/586671909/1446222196","profile_link_color":"00BF8F","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":false,"has_extended_profile":true,"default_profile":false,"default_profile_image":false,"has_custom_timelines":true,"following":false,"follow_request_sent":false,"notifications":false},"images":{"mobile":{"width":280,"height":280,"image_url":"https://o.twimg.com/1/proxy.jpg?t=FQQVAhjUAWh0dHBzOi8vdi5jZG4udmluZS5jby9yL3RodW1icy9CRUE3RTYxQTQxMTAyNTkyMTE2MzA5Mzc3ODQzMl8xN2E3NGE2NWE4Mi40LjYuMTg4ODE5MDY0NTU3ODMwMzM1Ni5tcDRfRHkwbUdHdGh2bk1Ic01qWUttNDVhSHJRR1Jla1U1MG1UcmQySUhyX2VOc0FmcXRhZzNsV3VJMGt6TFZZOTdiMC5qcGc_dmVyc2lvbklkPS5GSk9pSUFHaTFoNXhhV3QxZGd2Sm41LmsxYS5aR01zFAIWABIA&s=PUAB6lmFGzrWYdj-Vk656agHCSnB9t1lgZlpE-CfY-Y","image_url_2x":"https://o.twimg.com/1/proxy.jpg?t=FQQVAhjUAWh0dHBzOi8vdi5jZG4udmluZS5jby9yL3RodW1icy9CRUE3RTYxQTQxMTAyNTkyMTE2MzA5Mzc3ODQzMl8xN2E3NGE2NWE4Mi40LjYuMTg4ODE5MDY0NTU3ODMwMzM1Ni5tcDRfRHkwbUdHdGh2bk1Ic01qWUttNDVhSHJRR1Jla1U1MG1UcmQySUhyX2VOc0FmcXRhZzNsV3VJMGt6TFZZOTdiMC5qcGc_dmVyc2lvbklkPS5GSk9pSUFHaTFoNXhhV3QxZGd2Sm41LmsxYS5aR01zFAQWABIA&s=sWkAYobmMrZ_xG045oS1H-R1g84ty3uPKUCwit0P_MA"},"web":{"width":375,"height":375,"image_url":"https://o.twimg.com/1/proxy.jpg?t=FQQVBBjUAWh0dHBzOi8vdi5jZG4udmluZS5jby9yL3RodW1icy9CRUE3RTYxQTQxMTAyNTkyMTE2MzA5Mzc3ODQzMl8xN2E3NGE2NWE4Mi40LjYuMTg4ODE5MDY0NTU3ODMwMzM1Ni5tcDRfRHkwbUdHdGh2bk1Ic01qWUttNDVhSHJRR1Jla1U1MG1UcmQySUhyX2VOc0FmcXRhZzNsV3VJMGt6TFZZOTdiMC5qcGc_dmVyc2lvbklkPS5GSk9pSUFHaTFoNXhhV3QxZGd2Sm41LmsxYS5aR01zFAIWABIA&s=aueph2U_7B19LySUnRW3B5ercGDopTxMwy1bpyO7Ig8","image_url_2x":"https://o.twimg.com/1/proxy.jpg?t=FQQVBBjUAWh0dHBzOi8vdi5jZG4udmluZS5jby9yL3RodW1icy9CRUE3RTYxQTQxMTAyNTkyMTE2MzA5Mzc3ODQzMl8xN2E3NGE2NWE4Mi40LjYuMTg4ODE5MDY0NTU3ODMwMzM1Ni5tcDRfRHkwbUdHdGh2bk1Ic01qWUttNDVhSHJRR1Jla1U1MG1UcmQySUhyX2VOc0FmcXRhZzNsV3VJMGt6TFZZOTdiMC5qcGc_dmVyc2lvbklkPS5GSk9pSUFHaTFoNXhhV3QxZGd2Sm41LmsxYS5aR01zFAQWABIA&s=T5H8mjgw9Flvi-TcrYbKYvNLvSDZfPVlQJIfugCGviE"},"tablet":{"width":480,"height":480,"image_url":"https://o.twimg.com/1/proxy.jpg?t=FQQVBhjUAWh0dHBzOi8vdi5jZG4udmluZS5jby9yL3RodW1icy9CRUE3RTYxQTQxMTAyNTkyMTE2MzA5Mzc3ODQzMl8xN2E3NGE2NWE4Mi40LjYuMTg4ODE5MDY0NTU3ODMwMzM1Ni5tcDRfRHkwbUdHdGh2bk1Ic01qWUttNDVhSHJRR1Jla1U1MG1UcmQySUhyX2VOc0FmcXRhZzNsV3VJMGt6TFZZOTdiMC5qcGc_dmVyc2lvbklkPS5GSk9pSUFHaTFoNXhhV3QxZGd2Sm41LmsxYS5aR01zFAIWABIA&s=ZZkZpqv0Ebvvz8iplNPot_26gMg1pHUF3Dkhv7FyeV8","image_url_2x":"https://o.twimg.com/1/proxy.jpg?t=FQQVBhjUAWh0dHBzOi8vdi5jZG4udmluZS5jby9yL3RodW1icy9CRUE3RTYxQTQxMTAyNTkyMTE2MzA5Mzc3ODQzMl8xN2E3NGE2NWE4Mi40LjYuMTg4ODE5MDY0NTU3ODMwMzM1Ni5tcDRfRHkwbUdHdGh2bk1Ic01qWUttNDVhSHJRR1Jla1U1MG1UcmQySUhyX2VOc0FmcXRhZzNsV3VJMGt6TFZZOTdiMC5qcGc_dmVyc2lvbklkPS5GSk9pSUFHaTFoNXhhV3QxZGd2Sm41LmsxYS5aR01zFAQWABIA&s=pr6lFzCRwgYPdnQ50uV9WiY3m001OvjcqrqTjbT3Rz8"}},"players":[{"source_url":"https://vine.co/v/hEBDpMvJYOl/card","source_type":"text/html","width":435,"height":435},{"source_url":"https://mtc.cdn.vine.co/r/videos/ADE79D715A1025921160829116416_196b0ac239c.4.6.1888190645578303356_pkb_RMB7GhTLCYDccBImYqoFPLHr.ZA2yzgG_fxTEcVPCmCPTYRSZEZb1YG87ky_.mp4?versionId=hF.p.68KyS1aH_68FLVp_Ewi4yTG6fOE","source_type":"video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"","width":435,"height":435}]}]},"lang":"en","translation_reliable":true,"userId":783214},{"created_at":"2015/12/18 18:00:47 +0000","id":"677911400480710656","id_str":"677911400480710656","text":"<div class=\"dir-ltr\" dir=\"ltr\">Feel a disturbance in the force last night? All signs point to a galaxy far, far away: <a href=\"https://t.co/OiVjZxby5C\" class=\"twitter-timeline-link activeLink dir-ltr\" data-url=\"https://twitter.com/i/moments/677810157439606784\" dir=\"ltr\" rel=\"nofollow\" target=\"_blank\">twitter.com/i/moments/6778…</a> <a href=\"https://t.co/9EiCvW95r4\" class=\"twitter-media twitter-timeline-link dir-ltr has-expanded-path\" data-entity-id=\"677911399767543808\" data-expanded-path=\"/twitter/status/677911400480710656/photo/1\" data-tco-id=\"9EiCvW95r4\" data-url=\"http://twitter.com/twitter/status/677911400480710656/photo/1\" dir=\"ltr\" rel=\"nofollow\" target=\"_top\">pic.twitter.com/9EiCvW95r4</a></div>","source":"<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":783214,"id_str":"783214","name":"Twitter","screen_name":"twitter","location":"San Francisco, CA","description":"<div class=\"dir-ltr\" dir=\"ltr\">Your official source for news, updates and tips from Twitter, Inc.\n\n\nNeed help? Visit <a href=\"http://t.co/qq1HEzvnrA\" class=\"twitter-timeline-link activeLink dir-ltr tco-link\" data-url=\"http://support.twitter.com\" dir=\"ltr\" rel=\"nofollow\" target=\"_blank\">support.twitter.com</a>.</div>","url":"<div class=\"dir-ltr\" dir=\"ltr\"><a href=\"http://t.co/5iRhy7wTgu\" class=\"twitter-timeline-link activeLink dir-ltr tco-link\" data-url=\"http://blog.twitter.com/\" dir=\"ltr\" rel=\"nofollow\" target=\"_blank\">blog.twitter.com</a></div>","entities":{"url":{"urls":[{"url":"http://t.co/5iRhy7wTgu","expanded_url":"http://blog.twitter.com/","display_url":"blog.twitter.com","indices":[0,22]}]},"description":{"urls":[{"url":"http://t.co/qq1HEzvnrA","expanded_url":"http://support.twitter.com","display_url":"support.twitter.com","indices":[86,108]}]}},"protected":false,"followers_count":49317040,"fast_followers_count":7039,"normal_followers_count":49310001,"friends_count":141,"listed_count":89035,"created_at":"Tue Feb 20 14:35:54 +0000 2007","favourites_count":135,"utc_offset":-28800,"time_zone":"Pacific Time (US & Canada)","geo_enabled":true,"verified":true,"statuses_count":2295,"media_count":200,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"ACDED6","profile_background_image_url":"http://pbs.twimg.com/profile_background_images/657090062/l1uqey5sy82r9ijhke1i.png","profile_background_image_url_https":"https://pbs.twimg.com/profile_background_images/657090062/l1uqey5sy82r9ijhke1i.png","profile_background_tile":true,"profile_image_url":"http://pbs.twimg.com/profile_images/666407537084796928/YBGgi9BO_normal.png","profile_image_url_https":"https://pbs.twimg.com/profile_images/666407537084796928/YBGgi9BO_normal.png","profile_banner_url":"https://pbs.twimg.com/profile_banners/783214/1449510861","profile_link_color":"226699","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"F6F6F6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"has_custom_timelines":true,"following":true,"follow_request_sent":false,"notifications":false,"full_url":"http://t.co/5iRhy7wTgu"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":212,"favorite_count":765,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[{"url":"https://t.co/OiVjZxby5C","expanded_url":"https://twitter.com/i/moments/677810157439606784","display_url":"twitter.com/i/moments/6778…","indices":[87,110]}],"media":[{"id":"677911399767543808","id_str":"677911399767543808","indices":[111,134],"media_url":"http://pbs.twimg.com/media/CWhs04xVEAAq0nK.jpg","media_url_https":"https://pbs.twimg.com/media/CWhs04xVEAAq0nK.jpg","url":"https://t.co/9EiCvW95r4","display_url":"pic.twitter.com/9EiCvW95r4","expanded_url":"http://twitter.com/twitter/status/677911400480710656/photo/1","type":"photo","sizes":{"small":{"w":340,"h":255,"resize":"fit"},"large":{"w":600,"h":450,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"medium":{"w":600,"h":450,"resize":"fit"}},"features":{"small":{"faces":[{"x":260,"y":140,"h":20,"w":20},{"x":304,"y":155,"h":20,"w":20}]},"orig":{"faces":[{"x":460,"y":248,"h":37,"w":37},{"x":537,"y":274,"h":37,"w":37}]},"large":{"faces":[{"x":460,"y":248,"h":37,"w":37},{"x":537,"y":274,"h":37,"w":37}]},"medium":{"faces":[{"x":460,"y":248,"h":37,"w":37},{"x":537,"y":274,"h":37,"w":37}]}},"tco_id":"9EiCvW95r4","expanded_path":"/twitter/status/677911400480710656/photo/1","source_status_id":null}]},"extended_entities":{"media":[{"id":677911399767543808,"id_str":"677911399767543808","indices":[111,134],"media_url":"http://pbs.twimg.com/media/CWhs04xVEAAq0nK.jpg","media_url_https":"https://pbs.twimg.com/media/CWhs04xVEAAq0nK.jpg","url":"https://t.co/9EiCvW95r4","display_url":"pic.twitter.com/9EiCvW95r4","expanded_url":"http://twitter.com/twitter/status/677911400480710656/photo/1","type":"photo","sizes":{"small":{"w":340,"h":255,"resize":"fit"},"large":{"w":600,"h":450,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"medium":{"w":600,"h":450,"resize":"fit"}},"features":{"small":{"faces":[{"x":260,"y":140,"h":20,"w":20},{"x":304,"y":155,"h":20,"w":20}]},"orig":{"faces":[{"x":460,"y":248,"h":37,"w":37},{"x":537,"y":274,"h":37,"w":37}]},"large":{"faces":[{"x":460,"y":248,"h":37,"w":37},{"x":537,"y":274,"h":37,"w":37}]},"medium":{"faces":[{"x":460,"y":248,"h":37,"w":37},{"x":537,"y":274,"h":37,"w":37}]}}}]},"conversation_id":677911400480710656,"favorited":false,"retweeted":false,"possibly_sensitive":false,"lang":"en","translation_reliable":true,"userId":783214}];
    start();
  // });
});

// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function start() {
  var gridEl = document.getElementById('grid');
  gridEl.style.fontSize = CHARSIZE + "px";
  createGrid();
  createOpacityFilter();
  var frameCount = 0;
  (function animloop(){
    frameCount++;
    if (frameCount % 2 == 1) {
      updateGrid();
    }
    if (frameCount % 10 == 1) {
      showNextTweet();
    }
    requestAnimFrame(animloop, gridEl);
  })();
}

function createGrid() {
  $grid = $('#grid');
  $grid.css({
    "font-size":CHARSIZE+'px'
  });
  gridWidth = Math.floor($(window).width() / CHARSIZE);
  gridHeight = Math.floor($(window).height() / CHARSIZE);
  for (var i=0;i<gridWidth;i++) {
    grid[i] = [];
    for (var j=0;j<gridHeight;j++) {
      grid[i][j] = { opacity:0.2, char:'&nbsp;' }
    }
  }
}
function createOpacityFilter() {
  var img = new Image();
  img.onload = function() {
    var $canvas = $('<canvas></canvas>');
    $canvas.id = 'canvas';
    $canvas.get(0).width = gridWidth;
    $canvas.get(0).height = gridHeight;
    $('body').append($canvas);
    var ctx = $canvas.get(0).getContext('2d');
    if (img.width > img.height) {
      var height = (img.height / img.width) * gridWidth;
      var offsetH = (gridHeight - height) / 2;
      ctx.drawImage(img, 0, offsetH, gridWidth, height);
    } else {
      var width = (img.width / img.height) * gridHeight;
      var offsetW = (gridWidth - width) / 2;
      ctx.drawImage(img, offsetW, 0, width, gridHeight);
    }

    var data = ctx.getImageData(0, 0, gridWidth, gridHeight);
    var op, datacell, r, g, b;
    for (var i=0;i<gridWidth;i++) {
      for (var j=0;j<gridHeight;j++) {
        datacell = (j*gridWidth*4) + (i*4);
        r = data.data[datacell]/255;
        g = data.data[datacell+1]/255;
        b = data.data[datacell+2]/255;
        op = data.data[datacell + 3] /255;
        grid[i][j].bg_opacity = Math.max(op * (r+g+b) / 3, 0.2);
        // redraw the pixel to create our mask
        data.data[datacell] = data.data[datacell+1] = data.data[datacell+2] = 0; //black
        data.data[datacell + 3] = Math.floor((1-(op * (r+g+b) / 3)) * 200);
      }
    }

    // update the canvas
    ctx.putImageData(data, 0, 0);

    // now stretch the canvas to fill the screen
    $canvas.width($(window).width());
    $canvas.height($(window).height());

  }
  img.src = imageSrc;
}

function updateGrid() {
  // generateNoise();
  addGridTweets();
  removeGridTweets();
}
function generateNoise() {
  for (var i=0;i<gridWidth;i++) {
    var cell = grid[i][0];
    // cell.opacity = Math.random();
    cell.char = String.fromCharCode(97+Math.floor(Math.random()*26));
  }
}

var gridTweets = [];
var tweetsShowing = 0;
function showGridTweet(text) {
  if (tweetsShowing>=gridWidth) return;
  var tweet = {
    text:text.split('').reverse().join(''),
    x:getRandomPlace(),
    y:0
  };
  tweetsShowing++;
  gridTweets[tweet.x] = tweet;
}
function getRandomPlace() {
  var x = Math.floor(Math.random()*gridWidth);
  if (gridTweets[x]) return getRandomPlace();
  return x;
}
function addGridTweets() {
  var $row = $('<div class="row"></div>');
  for (var i=0;i<gridWidth;i++) {
    var $el = $('<span></span>');
    if (!gridTweets[i]) {
      $el[0].innerHTML = '&nbsp;';
    } else {
      var tweet = gridTweets[i];
      var cell = grid[tweet.x][0];
      if (tweet.y >= tweet.text.length) {
        cell.char = '&nbsp;';
        cell.opacity = 1;
        tweet.y = 0;
      } else {
        cell.char = tweet.text[tweet.y];
        if ("@#".indexOf(cell.char)!=-1) {
          cell.opacity = 3;
        } else {
          cell.opacity = 1 - (tweet.y / tweet.text.length);
        }
        tweet.y++;
      }
      $el[0].style.opacity = cell.opacity;
      if (cell.char==' ') cell.char = '&nbsp;';
      $el[0].innerHTML = cell.char;
    }
    $row.append($el);
  }
  $grid.prepend($row);
}
function removeGridTweets() {
  var oldEl = $('div.row:eq('+gridHeight+')');
  oldEl.remove();
}

function showNextTweet() {
  var tweet = tweets[Math.floor(Math.random() * tweets.length)];
  showGridTweet('@' + tweet.user.screen_name + ': ' + tweet.text);
}
