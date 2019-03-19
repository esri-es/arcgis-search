# ArcGIS Search
Search engine for ArcGIS resources. Find tips and tricks about advanced Google search [here](#advanced-google-search-tips)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Why we built this](#why-we-built-this)
- [How to install ArcGIS Search](#how-to-install-arcgis-search)
  - [Google Chrome](#google-chrome)
- [Which are the `ArcGIS Search` project sources](#which-are-the-arcgis-search-project-sources)
- [Advanced Google search tips](#advanced-google-search-tips)
- [Advanced Search Items on Online/Entreprise (moved)](#advanced-search-items-on-onlineentreprise-moved)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

[![Screenshot](https://raw.githubusercontent.com/esri-es/arcgis-search/master/assets/img/ArcGIS%20Search.png)](https://esri-es.github.io/arcgis-search/)

## Why we built this

At Esri [we have dozens of domains](https://esri-es.github.io/awesome-arcgis/esri/) (<100 domains) and different search engines<sup>[1](#search-engines)</sup> focusing on specific content, and none of them include 3rd party curated domains (employees personal blogs, github accounts, etc).

This make it difficult to get a full picture of everything related to any topic, and that's why we started this project.

> **<a name="search-engines">Search Engines</a>**:  [developers.arcgis.com/search](https://developers.arcgis.com/search), [esri.com/search](https://www.esri.com/search), [resources.arcgis.com/search/](http://resources.arcgis.com/search/), [blogs.esri.com/esri/globalsearch](https://blogs.esri.com/esri/globalsearch/?mssearch=android&msp=1&mswhere=all), [arcgis.com/home/search.html](https://www.arcgis.com/home/search.html), [esri.com/videos/search](https://www.esri.com/videos/search), ...

## How to install ArcGIS Search

### Google Chrome

Follow this three simple steps:

1. Open: [chrome://settings/searchEngines](chrome://settings/searchEngines)

2. Add any `keyword` (*we normally recommend:* `@`) and this URL `https://esri-es.github.io/arcgis-search?search={searchTerms}&amp;utm_source=opensearch`

3. Type the `keyword` you have chosen and then press the `tab` key and... Ta Da! you are ready to type your search text.

![Install ArcGIS Search animated GIF](./assets/img/ArcGIS-Search-HD.gif)

## Which are the `ArcGIS Search` project sources

This search engine searches over **240 cured sources** (websites).

* **+180 Github accounts, for example**: 
  * **Esri Inc's accounts**: github.com/Esri, github.com/esridc, github.com/esripdx, github.com/Esri-DevCenter-Beijing, github.com/koopjs, ...
  * **Distributor's accounts**: github.com/esri-es, github.com/maplabs, github.com/esrinederland, ...
  * **Employee's accounts**: github.com/ycabon, github.com/tomwayson, github.com/hhkaos, ...
* **[Esri's Inc domains and subdomains](https://esri-es.github.io/awesome-arcgis/esri/#websites)**: *.esri.com, *.arcgis.com, terraformer.io, ...
* **[+10 Esri's distributors sites](https://www.arcgis.com/home/item.html?id=75ca54d137ba47f49fddfb40606a93cd#visualize)**:
   * **Spain**: *.esri.es, esriblog.wordpress.com, ...
   * **UK**: esriuk.com
   * **Canada**: esri.ca
   * **Australia**: esriaustralia.com.au
   * ...
* **[+30 employees personal websites, blogs, etc](https://esri-es.github.io/arcgis-experts/)**: odoe.net, tomwayson.com, gavinr.com, raluca-nicola.net, husseinnasser.com, ...
* **Others**
  * gis.stackexchange.com

## Advanced Google search tips

|Pattern|What it does|Example|
|---|---|---|
|Use quotes|Search the exact phrase|["web appbuilder developer edition"](https://esri-es.github.io/arcgis-search/?amp%3Butm_source=opensearch&search=-site:community.esri.com%20-site:geonet.esri.com)|
|OR|Logic OR, matched any criteria|[fmv OR "full motion video"](https://esri-es.github.io/arcgis-search/?amp%3Butm_source=opensearch&search=fmv%20OR%20%22full%20motion%20video%22)|
|AND|Logic AND, forces to meet both criteria|[GTFS AND GeoEvent](https://esri-es.github.io/arcgis-search/?amp%3Butm_source=opensearch&search=GTFS%20AND%20GeoEvent)
|site:<domain>|shows yur searched term within a specific domain|[leaflet site:github.com](https://esri-es.github.io/arcgis-search/?amp%3Butm_source=opensearch&search=-site:community.esri.com%20-site:geonet.esri.com) | [gravois site:esri-es.github.io/awesome-arcgis/](https://esri-es.github.io/arcgis-search/?amp%3Butm_source=opensearch&search=gravois%20site:esri-es.github.io/awesome-arcgis/)|
|-site:<domain>|Remove a specified domain from results|[fmv -site:community.esri.com -site:geonet.esri.com](https://esri-es.github.io/arcgis-search/?amp%3Butm_source=opensearch&search=-site:community.esri.com%20-site:geonet.esri.com)|
|Minus|Remove a specified search term from results|["arcgis enterprise" AND -linux AND site:server.arcgis.com](https://esri-es.github.io/arcgis-search/?amp%3Butm_source=opensearch&search=geoenrichment+site%3Adevelopers.arcgis.com%2Flabs%2F)
|filetype|shows results in your specified filetype|[angular filetype:pdf site:proceedings.esri.com](https://esri-es.github.io/arcgis-search/?amp%3Butm_source=opensearch&search=angular%20filetype:pdf%20site:proceedings.esri.com)
|Parenthesis|Control order of operators| [GTFS javascript AND (site:community.esri.com OR site:geonet.esri.com OR site:community.esri.com OR site:gis.stackexchange.com)](https://esri-es.github.io/arcgis-search/?amp%3Butm_source=opensearch&search=GTFS%20javascript%20AND%20(site:community.esri.com%20OR%20site:geonet.esri.com%20OR%20site:community.esri.com%20OR%20site:gis.stackexchange.com))|


More info:
* [6 common misconceptions when doing advanced Google Searching](http://musingsaboutlibrarianship.blogspot.com.es/2015/10/6-common-misconceptions-when-doing.html)
* [Cheatsheet for advanced Google searches](https://cdn.zapier.com/storage/photos/1909af2500a0b1cce729037082e3f408.png).

----

> **Note:** Everything bellow this line has been migrated to the [ArcGIS Developer Tips and Tricks repo](https://github.com/esri-es/arcgis-developer-tips-and-tricks/tree/master/arcgis-online#search-by-typekeywords)

## Advanced Search Items on Online/Entreprise (moved)

### Search by typekeywords

[We have moved this to ArcGIS Developer Tips and Tricks repo](https://github.com/esri-es/arcgis-developer-tips-and-tricks/tree/master/arcgis-online#search-by-typekeywords)

### Search by type

[We have moved this to ArcGIS Developer Tips and Tricks repo](https://github.com/esri-es/arcgis-developer-tips-and-tricks/tree/master/arcgis-online#search-by-type)

### Useful searches

<a name="codesharing"></a> [We have moved this to ArcGIS Developer Tips and Tricks repo](https://github.com/esri-es/arcgis-developer-tips-and-tricks/tree/master/arcgis-online#useful-searches)

### Groups

<a name="codesharing"></a> [We have moved this to ArcGIS Developer Tips and Tricks repo](https://github.com/esri-es/arcgis-developer-tips-and-tricks/tree/master/arcgis-online#groups)

### Search by organization ID

[We have moved this to ArcGIS Developer Tips and Tricks repo](https://github.com/esri-es/arcgis-developer-tips-and-tricks/tree/master/arcgis-online#search-by-organization-id)
