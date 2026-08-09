---
layout: page
title: News Archive
permalink: /news/
nav: false
---

<div class="news cv">
  {% if site.news != blank %}
    <div class="table-responsive">
      <table class="table table-sm table-borderless">
        {% assign news = site.news | reverse %}
        {% for item in news %}
          {% unless item.archive == false %}
          <tr>
            <th scope="row" class="font-weight-bold">{{ item.date | date: "%m/%d/%Y" }}</th>
            <td>
              {% if item.inline %}
                {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
              {% else %}
                <a class="news-title" href="{{ item.url | relative_url }}">{{ item.title }}</a>
              {% endif %}
            </td>
          </tr>
          {% endunless %}
        {% endfor %}
      </table>
    </div>
  {% else %}
    <p>No news so far...</p>
  {% endif %}
</div>
