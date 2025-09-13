---
layout: page
permalink: /publications/
title: Publications 
description: 
years: [2025, 2024, 2023, 2022, 2021, 2020, 2019]
nav: true
nav_order: 2
---
<!-- _pages/publications.md -->
<div class="publications">

<p style="text-align: center; margin-bottom: 2rem;">
  (*equal contribution, <sup>†</sup>corresponding author) | 
  <a href='https://scholar.google.com/citations?user=5Tgpom0AAAAJ&hl=en' target='_blank' style='color: #8900e1; text-decoration: none; font-size: 1.1em;'>
    <i class="ai ai-google-scholar" style="font-size: 1.2em; margin-right: 0.5em;"></i>Google Scholar Profile
  </a>
</p>

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
