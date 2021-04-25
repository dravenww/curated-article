#!/bin/bash

feed="feed.xml"
website_title="德莱问 • 前端热文"
website_link="https://dravenww.github.io/awesome/"
description="德莱问 • 前端热文，每日更新，优质文章"

newest_files='docs/menu.md'

echo $newest_files
link="https://dravenww.github.io/awesome/menu.html"
now=`date +"%Y-%m-%d"`
items="
  <item>
    <title><![CDATA[前端热文 • 列表]]></title>
    <link>$link</link>
    <guid isPermaLink=\"false\">$link</guid>
    <pubDate>$now</pubDate>
    <description><![CDATA[$now 文章更新]]></description>
  </item>
  "

rss_content="<?xml version=\"1.0\" encoding=\"utf-8\"?><rss xmlns:atom=\"http://www.w3.org/2005/Atom\" version=\"2.0\">
<channel>
  <title>$website_title</title>
  <atom:link href=\"$website_link/$feed\" rel=\"self\" type=\"application/rss+xml\" />
  <link>$website_link</link>
  <description>$description</description>
  $items
</channel>
</rss>"

echo "$rss_content" > "docs/.vuepress/public/$feed"
echo ""
echo "✨ RSS Done!"