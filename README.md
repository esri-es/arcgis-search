# arcgis-search
Search engine for ArcGIS resources. Check this ![cheatsheet for advanced Google Searches](https://cdn.zapier.com/storage/photos/1909af2500a0b1cce729037082e3f408.png)

[![Screenshot](https://raw.githubusercontent.com/esri-es/arcgis-search/master/assets/img/ArcGIS%20Search.png)](https://esri-es.github.io/arcgis-search/)

## How to install ArcGIS Search

### Google Chrome

Follow this three simple steps:

1. Open: [chrome://settings/searchEngines](chrome://settings/searchEngines)

2. Add any `keyword` and this URL `https://esri-es.github.io/arcgis-search?search={searchTerms}&amp;utm_source=opensearch`

3. Type the `keyword` you have chosen and then press the `tab` key and... Ta Da! you are ready to type your search text.

![Install ArcGIS Search animated GIF](./assets/img/ArcGIS-Search-HD.gif)

## Which are the `ArcGIS Search` project sources

* **More than 12 Github accounts, for example**: github.com/Esri, github.com/esridc, github.com/esripdx, github.com/Esri-DevCenter-Beijing, github.com/ycabon, github.com/tomwayson, github.com/hhkaos, ...
* **Esri's Inc domains**:
  * www.esri.com/*
  * developers.arcgis.com/*
  * resources.arcgis.com/*
  * marketplace.arcgis.com/*
  * codesharing.arcgis.com/*
  * pro.arcgis.com/*
  * server.arcgis.com/*
  * proceedings.esri.com/*
  * support.esri.com/*
  * esripress.esri.com/*
  * blogs.esri.com/esri/*
  * doc.arcgis.com/*
  * geonet.esri.com/*
  * community.esri.com/*
  * esri.com/videos/*
  * learn.arcgis.com/*
  * help.arcgis.com/*
  * terraformer.io
  * pdx.esri.com/*
  * dc.esri.com/*
* **Esri's Spain domains**:
  * www.esri.es/*
  * desarrolladores.esri.es/*
  * startups.esri.es/*
  * ce17.esri.es*
  * github.com/esri-es/*
  * esri-es.github.io/awesome-arcgis/*
  * github.com/geo-developers/*
  * www.geodevelopers.org/*
  * meetup.com/es-ES/Geo-Developers/*
* **Esri's UK domains**:
  * github.com/maplabs/*
* **Other domains**: 
  * odoe.net/*
  * tomwayson.com/*
  * gavinr.com/*
  * gis.stackexchange.com

# Advanced search - Items

You can find more information about [advanced search capabitilies here](http://doc.arcgis.com/en/arcgis-online/reference/search.htm#ESRI_SECTION1_18FD99A1020547BA864FCEBECBE267F3)

There is some info in the [Items and item types](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Items_and_item_types/02r3000000ms000000/)

## Search by typekeywords

|Typekeywords|Description|
|---|---|
|[VR360](http://www.arcgis.com/home/search.html?q=typekeywords%3AVR360&t=content&start=1&sortOrder=desc&sortField=relevance)|An 360-degree virtual reality experience that lets you explore a set of connected, geo-located panoramic 3D visualizations or photos|
|[Web Map (Collector Ready)](http://www.arcgis.com/home/search.html?q=type%3A%22Web%20Map%22%20typekeywords%3ACollector&t=content&start=1&sortOrder=desc&sortField=relevance)|Web map that is Collector ready and will be available in Collector. The Map contains at least one editable layer that supports versioning.
|[Web Map<br>(Offline Ready)](http://www.arcgis.com/home/search.html?q=type%3A%22Web%20Map%22%20typekeywords%3AOffline&t=content&start=1&sortOrder=desc&sortField=relevance)|Web map being capable of working offline. The map contains only layers that are offline capable.

## Search by type

|Types|Description|
|---|---|
|[Geocoding Service](http://www.arcgis.com/home/search.html?q=type%3A"Geocoding%20Service"&t=content&start=1&sortOrder=desc&sortField=relevance)|ArcGIS Server Geocoding Service. The URL to the service is stored in the url property of the item.
|[Mobile Map Package](http://www.arcgis.com/home/search.html?q=type%3A%22Mobile%20Map%20Package%22&t=content&start=1&sortOrder=desc&sortField=relevance)|[ArcGIS Mobile Map Package](http://pro.arcgis.com/en/pro-app/help/sharing/overview/mobile-map-package.htm)|
|[CityEngine Web Scene](http://www.arcgis.com/home/search.html?q=type%3A%22CityEngine%20Web%20Scene%22&t=content&start=1&sortOrder=desc&sortField=relevance)|An interactive 3D display of geospatial content created with CityEngine|

## Useful searches

There are some searches that you may want to do but there is no specific metadata for those. Here you will find some of them:

|Content|Search|
|---|---|
|[Vector tile basemaps built by the community](http://www.arcgis.com/home/search.html?q=type%3A%22Vector%20Tile%20Service%22%20tags%3Abasemap&t=content&start=1&sortOrder=desc&sortField=relevance)|type:"Vector Tile Service" tags:basemap
|[Map journal storymaps](http://www.arcgis.com/home/search.html?t=content&q=tags%3A%22map%20journal%22%20typekeywords%3A%22Ready%20To%20Use%22&start=1&sortOrder=desc&sortField=relevance)|tags:"map journal" typekeywords:"Ready To Use"|
|[Self configured templates](http://www.arcgis.com/home/search.html?t=content&q=type%3A%22Web%20Mapping%20Application%22%20typekeywords%3A%22selfConfigured%22%20NOT%20typekeywords%3A%22Ready%20To%20Use%22&start=1&sortOrder=desc&sortField=numviews)|type:"Web Mapping Application" typekeywords:"selfConfigured" NOT typekeywords:"Ready To Use"

## Groups

* [Groups owned by the user 'Esri'](http://www.arcgis.com/home/search.html?q=owner%3Aesri&t=groups&focus=groups&start=1&sortOrder=desc&sortField=relevance)
* [Groups owned by the organization that belongs the user 'Esri'](http://www.arcgis.com/home/search.html?q=orgid%3AP3ePLMYs2RVChkJx&start=1&sortOrder=desc&sortField=relevance#groups)

## Search by organization ID

This search will allow you to find public content from any user inside an organization.

Search by organization id, e.g-> [orgid:AP3ePLMYs2RVChkJx](http://www.arcgis.com/home/search.html?q=orgid%3AP3ePLMYs2RVChkJx&t=content&start=1&sortOrder=desc&sortField=relevance)

You can find an organization id from:
* The item metadata (field orgId): [item metadata example](http://www.arcgis.com/sharing/rest/content/items/4d29eb6f07e94b669c0b90c2aa267100?f=json)

* The URL of any hosted service: https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/usa_cbsa/FeatureServer <- P3ePLMYs2RVChkJx

> You can only list all users of an organization if you have priviledges using the ['/users' endpoint](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Users/02r30000009q000000/) like this: **https://www.arcgis.com/sharing/rest/portals/self/users?f=json&token=*TOKEN***
