---
layout: page
permalink: /resources/
title: Resources
description: 
nav: true
nav_order: 7
---

<h3 class="card-title font-weight-medium">Data Libraries</h3>

*Courtesy of [Prof. Guo-Wei Wei](https://guowei-uga.github.io/resources/).*

- [2D data library for chemical, biophysical, and biological information](https://guowei-uga.github.io/assets/html/repositories/data-library/2d.html)
- [3D data library for chemical, biophysical, and biological information](https://guowei-uga.github.io/assets/html/repositories/data-library/3d.html)

<h3 class="card-title font-weight-medium mt-4">Repositories</h3>

<!-- ## GitHub Users

{% if site.data.repositories.github_users %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.html username=user %}
  {% endfor %}
</div>
{% endif %}

---

## GitHub Languages

{% if site.data.repositories.github_languages %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_languages %}
    {% include repository/repo_languages.html username=user %}
  {% endfor %}
</div>
{% endif %}

--- -->

<!-- ## GitHub Selected Repositories -->

{% if site.data.repositories.github_repos %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %}
