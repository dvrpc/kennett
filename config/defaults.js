/*global define,location */
/*jslint sloppy:true */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
    //Default configuration settings for the application. This is where you'll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings and url parameters.
    "appid": "",
    "webmap": "5671d891c220431c8ec18028ccb02c4f",
    "oauthappid": null,
    //Group templates must support a group url parameter. This will contain the id of the group.
    "group": "079935a56c1444d091bd234539cfefd4",
    //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "proxy/proxy.ashx",
    "proxyThesePrefixes": [],

    "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "dvrpcgis.maps.arcgis.com",
    "units": null,
    //If your applcation needs to edit feature layer fields set this value to true. When false the map will
    //be created with layers that are not set to editable which allows the FeatureLayer to load features optimally.
    "editable": false,
    "helperServices": {
     "geometry": {
       "url": null
     },
     "printTask": {
       "url": null
     },
     "elevationSync": {
       "url": null
     },
     "geocode": [{
       "url": null
         }]
  },
      //color theme.
    "theme": "#312867",
    "applicationName": "",
    "applicationIcon": "/images/bug-favicon.png",
    "applicationFavicon": "/images/bug-favicon.png",

    "signInSubtitle": "",
    "signInBackgroundImage": " ",

    "searchedAddressPushpinImage":"/images/redstickpin.png",
    "enableGuestAccess": true,
    "enableFacebook": false,
    "enableTwitter": false,
    "enableGoogleplus": false,
    "enablePortalLogin": true,

    "disableCurrentLocation" : true, //Flag to decide wether to use the current location
    "facebookAppId": "",

    "twitterSigninUrl": location.protocol + "//utility.arcgis.com/tproxy/signin",
    "twitterUserUrl": location.protocol + "//utility.arcgis.com/tproxy/proxy/1.1/account/verify_credentials.json?q=&include_entities=true&skip_status=true&locale=en",
    "twitterCallbackUrl": "/oauth-callback-twitter.html",

    "googleplusClientId": "",
    "googleplusScope": "https://www.googleapis.com/auth/userinfo.email",

    "showNullValueAs": "",
    "noThumbnailIcon": "/images/default-webmap-thumbnail.png",
    "noAttachmentIcon": "/images/no-attachment.png",

    "webMapInfoDescription": true,
    "webMapInfoSnippet": false,
    "webMapInfoOwner": true,
    "webMapInfoCreated": false,
    "webMapInfoModified": false,
    "webMapInfoLicenseInfo": false,
    "webMapInfoAccessInformation": false,
    "webMapInfoTags": false,
    "webMapInfoNumViews": false,
    "webMapInfoAvgRating": false,
    "showNonEditableLayers": true,
    "showPopupForNonEditableLayers" : false,

    "submitMessage": "Thank you! Your report has been submitted.",
    "likeField": "VOTES",
    "commentField": "COMMENTS",
    "usePopupConfigurationForComment":true,
    "enableFeatureEdit": false,
    "enableFeatureDelete" : false,
    "reportedByField": "USERID",
    "locationField": "LONG_TEXT",
    "showMapFirst":"list",
    "showHelpOnLoad": true,
    "showBaseMapGallery": false,
    "showLegend": true,
    "basemapGroup":"",

    //Sort report configuration
    "sortingField" : "VOTES", //Field can be of type integer, string or date
    "sortingOrder" : "DESC", //ASC or DESC
    //Configure order of form components
    "details" : "Top",
    "attachments" : "Middle",
    "location" : "Bottom",

    "zoomLevel": 12,
    "honorZoomLevel": false, //Flag to honor zoom level after a feature is selected
    "enableUSNGSearch": false,
    "enableMGRSSearch": false,
    "enableLatLongSearch": false,
    "geographicalExtentLayer": "Kennett Area Freight Transportation Study Area",
    //Lower level configuration
    "submitReportButtonText" : "Submit a Report", // Text for submit report button
    "submitReportButtonColor": "#35ac46", //Color for Submit Report button.If EMPTY default color will be  #35ac46.
    "submitReportButtonPosition": "top", // Report buttons position (top/bottom)
    "splashScreenTextColor": "#FFF", // Color of splash screen content
    "imageBackgroundColor": "#312867", // Background color icons
    "imageForeGroundColor": "white", // Foreground color of icons values (gray or white)
    //Configurable text for help dialog and help link
    "enableHelp":true,
    "enableShare": true,
    "helpLinkText": "learn how to use this tool",
    "helpDialogTitle":"How To Use",
    "helpDialogContent": '<p>This tool is intended for reporting concerns and input on issues related the Kennett Area Freight Transportation Study.</p><p><b>To get started select the green “Submit a Report” button.</b> This will open the reporting form for you to enter your comments.</p><p><b>1. Select Issue Type:</b><br>The form provides the option of reporting several types of input:<ul><li>Truck Routing - issues or concerns about the movements of truck on a given street or neighborhood</li><li>Intersection Design - issues or concerns related to an intersection </li><li>Safety - input on a location or area where you perceive an unsafe condition or behavior by motor vehicles or other road users (bicyclists)</li><li>Bike/Pedestrian - input on bicycle or pedestrian user challenges, opportunities, and/or issues</li><li>Other - anything not represented by another category</li></ul></p><p><b>2. Describe the concern/issue:</b><br>The interface also provides a text box for you to describe in detail your concerns. Please be as specific as possible so that we can make the best use of your input in the formulation of recommendations. If additional space is required, comments can be added to the report after it is submitted.</p><p><b>3. Search or select the location:</b><br>Search using the location input or navigate to the point on the map that represents location of your concern. If the location is a route or larger area, select near the location and be sure this was specified in the description.</p><p><b>4. Submit your report</b></p><p>If you have any questions or issues with the tool please reach out to Mike Ruane, Manager of Freight and Aviation Programs at DVRPC by phone (215.238.2888) or email (<a href="mailto:mruane@dvrpc.org">mruane@dvrpc.org</a>).</p>',
    "enableDifferentHelpContent":false,
    "loginHelpDialogTitle":"How To Use",
    "loginHelpDialogContent": '<p>This tool is intended for reporting concerns and input on issues related the Kennett Area Freight Transportation Study.</p><p><b>To get started select the green “Submit a Report” button.</b> This will open the reporting form for you to enter your comments.</p><p><b>1. Select Issue Type:</b><br>The form provides the option of reporting several types of input:<ul><li>Truck Routing - issues or concerns about the movements of truck on a given street or neighborhood</li><li>Intersection Design - issues or concerns related to an intersection </li><li>Safety - input on a location or area where you perceive an unsafe condition or behavior by motor vehicles or other road users (bicyclists)</li><li>Bike/Pedestrian - input on bicycle or pedestrian user challenges, opportunities, and/or issues</li><li>Other - anything not represented by another category</li></ul></p><p><b>2. Describe the concern/issue:</b><br>The interface also provides a text box for you to describe in detail your concerns. Please be as specific as possible so that we can make the best use of your input in the formulation of recommendations. If additional space is required, comments can be added to the report after it is submitted.</p><p><b>3. Search or select the location:</b><br>Search using the location input or navigate to the point on the map that represents location of your concern. If the location is a route or larger area, select near the location and be sure this was specified in the description.</p><p><b>4. Submit your report</b></p><p>If you have any questions or issues with the tool please reach out to Mike Ruane, Manager of Freight and Aviation Programs at DVRPC by phone (215.238.2888) or email (<a href="mailto:mruane@dvrpc.org">mruane@dvrpc.org</a>).</p>',
    "bufferRadius": 3, //Buffer radius will be used to create inital buffer on applicaiton load
    "bufferUnit": "miles",
    "geoformDetailsSectionLabel": "Details", //label for details section in geoform
    "geoformLocationSectionLabel": "Location", //label for location section in geoform
    "geoformAttachmentSectionLabel": "Attachments", //label for attachment section in geoform
    "noWebmapInGroupText": "Configured group is invalid or no items have been shared with this group yet.",
    // to show as a label for attachment section in comments form where attachments can be added
    "commentFormAttachmentSectionLabel": "Attachments",
    "headerBackgroundColor":"#fff",
    "bodyBackgroundColor":"#fff",
    "bodyTextColor":"#515151",
    "buttonBackgroundColor":"#fff",
    "buttonTextColor": "#312867",
    // reporting period value
    "reportingPeriodDialogTitle": "Reporting Period Closed",
    "reportingPeriodDialogContent": "We are no longer accepting new reports for this project.",
    "featureOutsideAOIMsg": "Feature cannot be added outside study area.",
    "commentStartDate": "", // Comment start date
    "commentStartTime": "", // Comment start time
    "commentEndDate" : "", // Comment end date
    "commentEndTime": "", // Comment end time
    "commentsSuccessMessage": "Comments Submitted Successfully.",
    "commentSortingOrder": "DESC", // To sort comment in ascending(ASC) or descending(DESC) order.
    "commentSortingField": "comments" // Field on which ascending or descending sorting needs to be applied
});
