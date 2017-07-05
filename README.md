# arcgis-search
Search engine for ArcGIS resources

[![Screenshot](https://raw.githubusercontent.com/esri-es/arcgis-search/master/assets/img/ArcGIS%20Search.png)](https://esri-es.github.io/arcgis-search/)

# Advanced search - Items

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


## Search by organization ID

This search will allow you to find public content from any user inside an organization.

Search by organization id -> [orgid:*ORGANIZATION_ID*](http://www.arcgis.com/home/search.html?q=orgid%3AP3ePLMYs2RVChkJx&t=content&start=1&sortOrder=desc&sortField=relevance)

You can find an organization id from:
* The item metadata (field orgId): [item metadata example](http://www.arcgis.com/sharing/rest/content/items/4d29eb6f07e94b669c0b90c2aa267100?f=json)

* The URL of any hosted service: https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/usa_cbsa/FeatureServer <- P3ePLMYs2RVChkJx

> You can only list all users of an organization if you have priviledges using the ['/users' endpoint](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Users/02r30000009q000000/) like this: **https://www.arcgis.com/sharing/rest/portals/self/users?f=json&token=*TOKEN***
