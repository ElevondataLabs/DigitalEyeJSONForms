// export const SERVER_DATA_ADD = 
// {
//   "Plumbing" : [
//     {
//       "data":  [
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "text-white",
//               "bi",
//               "bi-arrow-90deg-left"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "backbtn",
//                   "col-12",
//                   "m-b-0"
//                 ]
//               }
//             }
//           },
//           "name": "base_back_btn",
//           "controlType": "backbutton",
//           "type": "button",
//           "events": {
//             "click": "base_back"
//           },
//           "tier": 1,
//           "parent": "",
//           "controlName": "",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             },
//             "description": ""
//           },
//           "name": "base_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Base Inspection"
//           },
//           "tier": 1,
//           "parent": "",
//           "controlName": "BaseInspection",
//           "mandatory": 0,
//           "valueControl": true,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "base_roofline_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "RoofLine"
//           },
//           "tier": 2,
//           "parent": "BaseInspection",
//           "controlName": "RoofLine",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "base_dwelling_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Dwelling"
//           },
//           "tier": 2,
//           "parent": "BaseInspection",
//           "controlName": "Dwelling",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "base_propspec_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Hazard Details"
//           },
//           "tier": 2,
//           "parent": "BaseInspection",
//           "controlName": "PropertySpecific",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "base_dwelling_backview_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Back View"
//           },
//           "tier": 3,
//           "parent": "Dwelling",
//           "controlName": "BackView",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "base_dwelling_rightview_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Right View"
//           },
//           "tier": 3,
//           "parent": "Dwelling",
//           "controlName": "RightView",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "base_dwelling_frontview_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Front View"
//           },
//           "tier": 3,
//           "parent": "Dwelling",
//           "controlName": "FrontView",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "base_dwelling_leftview_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Left View"
//           },
//           "tier": 3,
//           "parent": "Dwelling",
//           "controlName": "LeftView",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "RoofLine"
//           },
//           "name": "base_roofline_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "base_roofline"
//           },
//           "tier": 2,
//           "parent": "BaseInspection",
//           "controlName": "RoofLine",
//           "mandatory": 1,
//           "valueControl": true,
//           "ImpactOnGroup": "Yes",
//           "modelName": "userModel",
//           "isParent": false,
//           "multiple": true,
//           "tip": "Please include all sides of roof",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]",
//           "value":"{}"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "base_roofline_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "base_roofline_add"
//           },
//           "tier": 3,
//           "parent": "RoofLine",
//           "controlName": "RoofLineAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "Please include all sides of roof",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Dwelling"
//           },
//           "name": "base_dwelling_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "base_dwelling"
//           },
//           "tier": 2,
//           "parent": "BaseInspection",
//           "controlName": "Dwelling",
//           "mandatory": 0,
//           "valueControl": true,
//           "isParent": true,
//           "ImpactOnGroup": "Yes",
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": ""
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Front View"
//           },
//           "name": "base_dwelling_frontview_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "base_dwelling_frontview"
//           },
//           "tier": 3,
//           "parent": "Dwelling",
//           "controlName": "FrontView",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "value":"{}",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "base_dwelling_frontview_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "base_dwelling_frontview_add"
//           },
//           "tier": 4,
//           "parent": "FrontView",
//           "controlName": "FrontViewAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Back View"
//           },
//           "name": "base_dwelling_backview_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "base_dwelling_backview"
//           },
//           "tier": 3,
//           "parent": "Dwelling",
//           "controlName": "BackView",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "base_dwelling_backview_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "base_dwelling_backview_add"
//           },
//           "tier": 4,
//           "parent": "BackView",
//           "controlName": "BackViewAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Right View"
//           },
//           "name": "base_dwelling_rightview_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "base_dwelling_rightview"
//           },
//           "tier": 3,
//           "parent": "Dwelling",
//           "controlName": "RightView",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "base_dwelling_rightview_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "base_dwelling_rightview_add"
//           },
//           "tier": 4,
//           "parent": "RightView",
//           "controlName": "RightViewAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Left View"
//           },
//           "name": "base_dwelling_leftview_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "base_dwelling_leftview"
//           },
//           "tier": 3,
//           "parent": "Dwelling",
//           "controlName": "LeftView",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "base_dwelling_leftview_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "base_dwelling_leftview_add"
//           },
//           "tier": 4,
//           "parent": "LeftView",
//           "controlName": "LeftViewAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-plus"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Hazard"
//           },
//           "name": "base_propspec_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "base_propspec"
//           },
//           "tier": 2,
//           "parent": "BaseInspection",
//           "controlName": "PropertySpecific",
//           "mandatory": 0,
//           "valueControl": true,
//           "isParent": true,
//           "ImpactOnGroup": "No",
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": ""
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "base_propspec_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "base_propspec_add"
//           },
//           "tier": 3,
//           "parent": "PropertySpecific",
//           "controlName": "HazardDetails",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-sticky"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Comments"
//           },
//           "name": "base_propspec_add_details",
//           "controlType": "comments",
//           "type": "button",
//           "events": {
//             "click": "base_propspec_add_details"
//           },
//           "tier": 3,
//           "parent": "PropertySpecific",
//           "controlName": "HazardComments",
//           "mandatory": 0,
//           "valueControl": true,
//           "modelName": "userModel"
//         }
//       ]
//     }
//   ]
// };

// export const SERVER_DATA_ADD = 
// {
//   "Plumbing" : [
//     {
//       "data":  [
//         {
//           "ui": {
//             "hide": true,
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "backbtn",
//                   "col-12",
//                   "m-b-0"
//                 ]
//               }
//             },
//             "class": [
//               "text-white",
//               "bi",
//               "bi-arrow-90deg-left"
//             ]
//           },
//           "name": "detailedexterior_back_btn",
//           "controlType": "backbutton",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_back"
//           },
//           "tier": 1,
//           "parent": "",
//           "controlName": "DetailedExterior",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             },
//             "description": ""
//           },
//           "name": "detailedexterior_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Detailed Exterior"
//           },
//           "tier": 1,
//           "parent": "",
//           "controlName": "DetailedExterior",
//           "mandatory": 0,
//           "valueControl": true,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "detailedexterior_driveway_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Driveway"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Driveway",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "detailedexterior_foundation_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Foundation"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Foundation",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "detailedexterior_sidewalks_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Sidewalks"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Sidewalks",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "detailedexterior_porches_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Porches/Patios/Balconies"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Porches",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "detailedexterior_stairs_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Stairs"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Stairs",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "detailedexterior_trees_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Trees (Near the Dwelling)"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Trees",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "detailedexterior_chimney_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Chimney"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Chimney",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "detailedexterior_fence_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Fence"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Fence",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "detailedexterior_siding_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Siding"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Siding",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "detailedexterior_gutters_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Gutters"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Gutters",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "detailedexterior_yard_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Yard (including any debris)"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Yard",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Driveway"
//           },
//           "name": "detailedexterior_driveway_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_driveway"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Driveway",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "detailedexterior_driveway_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_driveway_add"
//           },
//           "tier": 3,
//           "parent": "Driveway",
//           "controlName": "DrivewayAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Foundation"
//           },
//           "name": "detailedexterior_foundation_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_foundation"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Foundation",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "detailedexterior_foundation_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_foundation_add"
//           },
//           "tier": 3,
//           "parent": "Foundation",
//           "controlName": "FoundationAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Sidewalks",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "detailedexterior_sidewalks_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_sidewalks"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Sidewalks",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "detailedexterior_sidewalks_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_sidewalks_add"
//           },
//           "tier": 3,
//           "parent": "Sidewalks",
//           "controlName": "SidewalksAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Porches/Patios/Balconies",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "detailedexterior_porches_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_porches"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Porches",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "detailedexterior_porches_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_porches_add"
//           },
//           "tier": 3,
//           "parent": "Porches",
//           "controlName": "PorchesAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Stairs",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "detailedexterior_stairs_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_stairs"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Stairs",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "detailedexterior_stairs_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_stairs_add"
//           },
//           "tier": 3,
//           "parent": "Stairs",
//           "controlName": "StairsAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Trees (Near the Dwelling)",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "detailedexterior_trees_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_trees"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Trees",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "detailedexterior_trees_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_trees_add"
//           },
//           "tier": 3,
//           "parent": "Trees",
//           "controlName": "TreesAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Chimney",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "detailedexterior_chimney_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_chimney"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Chimney",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "detailedexterior_chimney_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_chimney_add"
//           },
//           "tier": 3,
//           "parent": "Chimney",
//           "controlName": "ChimneyAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Fence",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "detailedexterior_fence_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_fence"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Fence",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "detailedexterior_fence_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_fence_add"
//           },
//           "tier": 3,
//           "parent": "Fence",
//           "controlName": "FenceAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Siding",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "detailedexterior_siding_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_siding"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Siding",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "detailedexterior_siding_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_siding_add"
//           },
//           "tier": 3,
//           "parent": "Siding",
//           "controlName": "SidingAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Gutters",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "detailedexterior_gutters_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_gutters"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Gutters",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "detailedexterior_gutters_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_gutters_add"
//           },
//           "tier": 3,
//           "parent": "Gutters",
//           "controlName": "GuttersAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Yard (including any debris)",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "detailedexterior_yard_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_yard"
//           },
//           "tier": 2,
//           "parent": "DetailedExterior",
//           "controlName": "Yard",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "detailedexterior_yard_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "detailedexterior_yard_add"
//           },
//           "tier": 3,
//           "parent": "Yard",
//           "controlName": "YardAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Debris\", \"Leak\", \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         }
//       ]
//     }
//   ]
// };




// export const SERVER_DATA_ADD = 
// {
//   "pool" : [
//     {
//       "data":   [
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "text-white",
//               "bi",
//               "bi-arrow-90deg-left"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "backbtn",
//                   "col-12",
//                   "m-b-0"
//                 ]
//               }
//             }
//           },
//           "name": "pool_back_btn",
//           "controlType": "backbutton",
//           "type": "button",
//           "events": {
//             "click": "pool_back"
//           },
//           "tier": 1,
//           "parent": "",
//           "controlName": "",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             },
//             "description": ""
//           },
//           "name": "pool_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Swimming Pool"
//           },
//           "tier": 1,
//           "parent": "",
//           "controlName": "SwimmingPool",
//           "mandatory": 0,
//           "valueControl": true,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "pool_photo_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Pool Photos"
//           },
//           "tier": 2,
//           "parent": "SwimmingPool",
//           "controlName": "PoolPhotos",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "pool_fence_enclosure_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Fence/Enclosure"
//           },
//           "tier": 2,
//           "parent": "SwimmingPool",
//           "controlName": "Fence_Enclosure",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "pool_slide_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Slide/Diving Board"
//           },
//           "tier": 2,
//           "parent": "SwimmingPool",
//           "controlName": "Slide_DivingBoard",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "pool_exterior_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Exterior Hot-tub/Jacuzzi"
//           },
//           "tier": 2,
//           "parent": "SwimmingPool",
//           "controlName": "HotTub_Jacuzzi",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Pool Photos"
//           },
//           "name": "pool_photo_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "pool_photo"
//           },
//           "tier": 2,
//           "parent": "SwimmingPool",
//           "controlName": "PoolPhotos",
//           "mandatory": 1,
//           "valueControl": true,
//           "ImpactOnGroup": "Yes",
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "Please include all sides of the pool",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Missing\", \"Hazard\", \"Debris\",  \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "pool_photo_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "pool_photo_add"
//           },
//           "tier": 3,
//           "parent": "PoolPhotos",
//           "controlName": "PoolPhotosAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "Please include all sides of pool",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Missing\", \"Hazard\", \"Debris\",  \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Fence/Enclosure"
//           },
//           "name": "pool_fence_enclosure_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "pool_fence_enclosure"
//           },
//           "tier": 2,
//           "parent": "SwimmingPool",
//           "controlName": "Fence_Enclosure",
//           "mandatory": 1,
//           "valueControl": true,
//           "ImpactOnGroup": "Yes",
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "Please include all sides of the pool",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Missing\", \"Hazard\", \"Debris\",  \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "pool_fence_enclosure_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "pool_fence_enclosure_add"
//           },
//           "tier": 3,
//           "parent": "Fence_Enclosure",
//           "controlName": "Fence_EnclosureAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "Please include all sides of pool",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Missing\", \"Hazard\", \"Debris\",  \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Slide/Diving Board"
//           },
//           "name": "pool_slide_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "pool_slide"
//           },
//           "tier": 2,
//           "parent": "SwimmingPool",
//           "controlName": "Slide_DivingBoard",
//           "mandatory": 1,
//           "valueControl": true,
//           "ImpactOnGroup": "Yes",
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "Please include all sides of the pool",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Missing\", \"Hazard\", \"Debris\",  \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "pool_slide_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "pool_slide_add"
//           },
//           "tier": 3,
//           "parent": "Slide_DivingBoard",
//           "controlName": "Slide_DivingBoardAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "Please include all sides of pool",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Missing\", \"Hazard\", \"Debris\",  \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Exterior Hot-tub/Jacuzzi"
//           },
//           "name": "pool_exterior_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "pool_exterior"
//           },
//           "tier": 2,
//           "parent": "SwimmingPool",
//           "controlName": "HotTub_Jacuzzi",
//           "mandatory": 1,
//           "valueControl": true,
//           "ImpactOnGroup": "Yes",
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "Please include all sides of the pool",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Missing\", \"Hazard\", \"Debris\",  \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "pool_exterior_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "pool_exterior_add"
//           },
//           "tier": 3,
//           "parent": "HotTub_Jacuzzi",
//           "controlName": "HotTub_JacuzziAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "Please include all sides of pool",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Missing\", \"Hazard\", \"Debris\",  \"Aggressive animal\", \"Ineligible animal\", \"Rusted\", \"System not working\"]"
//         }
//       ]
//     }
//   ]
// };





// export const SERVER_DATA_ADD = 
// {
//   "other" : [
//     {
//       "data":   [
//         {
//           "ui": {
//             "hide": true,
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "backbtn",
//                   "col-12",
//                   "m-b-0"
//                 ]
//               }
//             },
//             "class": [
//               "text-white",
//               "bi",
//               "bi-arrow-90deg-left"
//             ]
//           },
//           "name": "othstructures_back_btn",
//           "controlType": "backbutton",
//           "type": "button",
//           "events": {
//             "click": "othstructures_back"
//           },
//           "tier": 1,
//           "parent": "",
//           "controlName": "OtherStructures",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             },
//             "description": ""
//           },
//           "name": "othstructures_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Other Structures"
//           },
//           "tier": 1,
//           "parent": "",
//           "controlName": "OtherStructures",
//           "mandatory": 0,
//           "valueControl": true,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "othstructures_detachedgarage_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Detached Garage"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "DetachedGarage",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "othstructures_barn_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Barn"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "Barn",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "othstructures_guesthouse_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Guest House"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "GuestHouse",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "othstructures_gazebo_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Gazebo"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "Gazebo",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "othstructures_dock_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Dock"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "Dock",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "othstructures_cabin_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Cabin"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "Cabin",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "othstructures_fence_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Fence"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "Fence",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "othstructures_dining_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Detached Patio/Dining Area"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "DetachedPatio_DiningArea",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "othstructures_other_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Other"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "Other",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Detached Garage"
//           },
//           "name": "othstructures_detachedgarage_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_detachedgarage"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "DetachedGarage",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "value":"{}",
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "othstructures_detachedgarage_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_detachedgarage_add"
//           },
//           "tier": 3,
//           "parent": "DetachedGarage",
//           "controlName": "DetachedGarageAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Barn"
//           },
//           "name": "othstructures_barn_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_barn"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "Barn",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "othstructures_barn_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_barn_add"
//           },
//           "tier": 3,
//           "parent": "Barn",
//           "controlName": "BarnAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Guest House",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "othstructures_guesthouse_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_guesthouse"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "GuestHouse",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "othstructures_guesthouse_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_guesthouse_add"
//           },
//           "tier": 3,
//           "parent": "GuestHouse",
//           "controlName": "GuestHouseAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Gazebo",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "othstructures_gazebo_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_gazebo"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "Gazebo",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "othstructures_gazebo_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_gazebo_add"
//           },
//           "tier": 3,
//           "parent": "Gazebo",
//           "controlName": "GazeboAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Dock",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "othstructures_dock_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_dock"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "Dock",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "othstructures_dock_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_dock_add"
//           },
//           "tier": 3,
//           "parent": "Dock",
//           "controlName": "DockAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Cabin",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "othstructures_cabin_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_cabin"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "Cabin",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "othstructures_cabin_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_cabin_add"
//           },
//           "tier": 3,
//           "parent": "Cabin",
//           "controlName": "CabinAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Fence",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "othstructures_fence_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_fence"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "Fence",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "othstructures_fence_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_fence_add"
//           },
//           "tier": 3,
//           "parent": "Fence",
//           "controlName": "FenceOtherAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Detached Patio/Dining Area",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "othstructures_dining_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_dining"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "DetachedPatio_DiningArea",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "othstructures_dining_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_dining_add"
//           },
//           "tier": 3,
//           "parent": "DetachedPatio_DiningArea",
//           "controlName": "DetachedPatio_DiningAreaAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Other",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "othstructures_other_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_other"
//           },
//           "tier": 2,
//           "parent": "OtherStructures",
//           "controlName": "Other",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "othstructures_other_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "othstructures_other_add"
//           },
//           "tier": 3,
//           "parent": "Other",
//           "controlName": "OtherAdd",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         }
//       ]
//     }
//   ]
// };

// export const SERVER_DATA_ADD = 
// {
//   "HomeExterior" : [
//     {
//       "data":   [
//         {
//           "ui": {
//             "hide": true,
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "backbtn",
//                   "col-12",
//                   "m-b-0"
//                 ]
//               }
//             },
//             "class": [
//               "text-white",
//               "bi",
//               "bi-arrow-90deg-left"
//             ]
//           },
//           "name": "homeexterior_back_btn",
//           "controlType": "backbutton",
//           "type": "button",
//           "events": {
//             "click": "homeexterior_back"
//           },
//           "tier": 1,
//           "parent": "",
//           "controlName": "HomeExterior",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             },
//             "description": ""
//           },
//           "name": "homeexterior_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Home Exterior"
//           },
//           "tier": 1,
//           "parent": "",
//           "controlName": "HomeExterior",
//           "mandatory": 0,
//           "valueControl": true,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "homeexterior_front_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Front View"
//           },
//           "tier": 2,
//           "parent": "HomeExterior",
//           "controlName": "FrontView",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "homeexterior_backview_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Back View"
//           },
//           "tier": 2,
//           "parent": "HomeExterior",
//           "controlName": "BackView",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "homeexterior_addn_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Additional Photos"
//           },
//           "tier": 2,
//           "parent": "HomeExterior",
//           "controlName": "AdditionalPhotos",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Front View"
//           },
//           "name": "homeexterior_front_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "homeexterior_front"
//           },
//           "tier": 2,
//           "parent": "HomeExterior",
//           "controlName": "FrontView",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "homeexterior_front_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "homeexterior_front_add"
//           },
//           "tier": 3,
//           "parent": "FrontView",
//           "controlName": "FrontViewAddCtrl",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Back View"
//           },
//           "name": "homeexterior_backview_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "homeexterior_backview"
//           },
//           "tier": 2,
//           "parent": "HomeExterior",
//           "controlName": "BackView",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "homeexterior_backview_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "homeexterior_backview_add"
//           },
//           "tier": 3,
//           "parent": "BackView",
//           "controlName": "BackViewAddCtrl",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Additional Photos",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "homeexterior_addn_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "homeexterior_addn"
//           },
//           "tier": 2,
//           "parent": "HomeExterior",
//           "controlName": "AdditionalPhotos",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "homeexterior_addn_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "homeexterior_addn_add"
//           },
//           "tier": 3,
//           "parent": "AdditionalPhotos",
//           "controlName": "AdditionalPhotosAddCtrl",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//       ]
//     }
//   ]
// };

// export const SERVER_DATA_ADD = 
// {
//   "FurnitureFixtures" : [
//     {
//       "data":   [
//         {
//           "ui": {
//             "hide": true,
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "backbtn",
//                   "col-12",
//                   "m-b-0"
//                 ]
//               }
//             },
//             "class": [
//               "text-white",
//               "bi",
//               "bi-arrow-90deg-left"
//             ]
//           },
//           "name": "furniturefixtures_back_btn",
//           "controlType": "backbutton",
//           "type": "button",
//           "events": {
//             "click": "furniturefixtures_back"
//           },
//           "tier": 1,
//           "parent": "",
//           "controlName": "FurnitureFixtures",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             },
//             "description": ""
//           },
//           "name": "furniturefixtures_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Furniture and Fixtures"
//           },
//           "tier": 1,
//           "parent": "",
//           "controlName": "FurnitureFixtures",
//           "mandatory": 0,
//           "valueControl": true,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "furniturefixtures_fireplace_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Fireplace"
//           },
//           "tier": 2,
//           "parent": "FurnitureFixtures",
//           "controlName": "Fireplace",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "furniturefixtures_addn_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Additional Photos"
//           },
//           "tier": 2,
//           "parent": "FurnitureFixtures",
//           "controlName": "AdditionalPhotos",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Fireplace"
//           },
//           "name": "furniturefixtures_fireplace_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "furniturefixtures_fireplace"
//           },
//           "tier": 2,
//           "parent": "FurnitureFixtures",
//           "controlName": "Fireplace",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "furniturefixtures_fireplace_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "furniturefixtures_fireplace_add"
//           },
//           "tier": 3,
//           "parent": "Fireplace",
//           "controlName": "FireplaceAddCtrl",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Additional Photos",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "furniturefixtures_addn_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "furniturefixtures_addn"
//           },
//           "tier": 2,
//           "parent": "FurnitureFixtures",
//           "controlName": "AdditionalPhotos",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "furniturefixtures_addn_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "furniturefixtures_addn_add"
//           },
//           "tier": 3,
//           "parent": "AdditionalPhotos",
//           "controlName": "AdditionalFurnitureAddCtrl",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//       ]
//     }
//   ]
// };

// export const SERVER_DATA_ADD = 
// {
//   "AdditionalPictures" : [
//     {
//       "data":   [
//         {
//           "ui": {
//             "hide": true,
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "backbtn",
//                   "col-12",
//                   "m-b-0"
//                 ]
//               }
//             },
//             "class": [
//               "text-white",
//               "bi",
//               "bi-arrow-90deg-left"
//             ]
//           },
//           "name": "additionalpictures_back_btn",
//           "controlType": "backbutton",
//           "type": "button",
//           "events": {
//             "click": "additionalpictures_back"
//           },
//           "tier": 1,
//           "parent": "",
//           "controlName": "AdditionalPictures",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             },
//             "description": ""
//           },
//           "name": "additionalpictures_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Additional Pictures"
//           },
//           "tier": 1,
//           "parent": "",
//           "controlName": "AdditionalPictures",
//           "mandatory": 0,
//           "valueControl": true,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "additionalpictures_theatreroom_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Theatre Room"
//           },
//           "tier": 2,
//           "parent": "AdditionalPictures",
//           "controlName": "TheatreRoom",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "additionalpictures_laundaryroom_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Laundary Room"
//           },
//           "tier": 2,
//           "parent": "AdditionalPictures",
//           "controlName": "LaundaryRoom",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "additionalpictures_powderroom_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Powder Room"
//           },
//           "tier": 2,
//           "parent": "AdditionalPictures",
//           "controlName": "PowderRoom",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "formTitle"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-md-12"
//                 ]
//               }
//             }
//           },
//           "name": "additionalpictures_addn_title",
//           "controlType": "title",
//           "type": "span",
//           "props": {
//             "text": "Additional Photos"
//           },
//           "tier": 2,
//           "parent": "AdditionalPictures",
//           "controlName": "AdditionalPhotos",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Theatre Room"
//           },
//           "name": "additionalpictures_theatreroom_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "additionalpictures_theatreroom"
//           },
//           "tier": 2,
//           "parent": "AdditionalPictures",
//           "controlName": "TheatreRoom",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "additionalpictures_theatreroom_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "additionalpictures_theatreroom_add"
//           },
//           "tier": 3,
//           "parent": "TheatreRoom",
//           "controlName": "TheatreRoomAddCtrl",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Laundary Room"
//           },
//           "name": "additionalpictures_laundaryroom_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "additionalpictures_laundaryroom"
//           },
//           "tier": 2,
//           "parent": "AdditionalPictures",
//           "controlName": "LaundaryRoom",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "additionalpictures_laundaryroom_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "additionalpictures_laundaryroom_add"
//           },
//           "tier": 3,
//           "parent": "LaundaryRoom",
//           "controlName": "LaundaryRoomAddCtrl",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Powder Room"
//           },
//           "name": "additionalpictures_powderroom_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "additionalpictures_powderroom"
//           },
//           "tier": 2,
//           "parent": "AdditionalPictures",
//           "controlName": "PowderRoom",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "additionalpictures_powderroom_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "additionalpictures_powderroom_add"
//           },
//           "tier": 3,
//           "parent": "PowderRoom",
//           "controlName": "PowderRoomAddCtrl",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": false,
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Additional Photos",
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ]
//           },
//           "name": "additionalpictures_addn_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "additionalpictures_addn"
//           },
//           "tier": 2,
//           "parent": "AdditionalPictures",
//           "controlName": "AdditionalPhotos",
//           "mandatory": 1,
//           "valueControl": true,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//         {
//           "ui": {
//             "hide": true,
//             "class": [
//               "btn-circle",
//               "bi",
//               "bi-camera"
//             ],
//             "viewMode": {
//               "advance": {
//                 "div": [
//                   "col-6"
//                 ]
//               }
//             },
//             "description": "Add Photos"
//           },
//           "name": "additionalpictures_addn_add_btn",
//           "controlType": "photo",
//           "type": "button",
//           "events": {
//             "click": "additionalpictures_addn_add"
//           },
//           "tier": 3,
//           "parent": "AdditionalPhotos",
//           "controlName": "AdditionalPicturesAddCtrl",
//           "mandatory": 0,
//           "valueControl": false,
//           "modelName": "userModel",
//           "multiple": true,
//           "tip": "",
//           "metatags": "[\"Uneven/Cracked\", \"Damaged\", \"Curling/Lifting\", \"Missing\", \"Hazard\", \"Leak\", \"Rusted\", \"System not working\"]"
//         },
//       ]
//     }
//   ]
// };

export const SERVER_DATA_ADD = {
  "Plumbing" : [
    {
      "data": [
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "backbtn",
                  "col-12",
                  "m-b-0"
                ]
              }
            },
            "class": [
              "text-white",
              "bi",
              "bi-arrow-90deg-left"
            ]
          },
          "name": "plumbing_back_btn",
          "controlType": "backbutton",
          "type": "button",
          "events": {
            "click": "plumbing_back"
          },
          "tier": 1,
          "parent": "",
          "controlName": "Plumbing",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "viewMode": {
              "advance": {
                "div": [
                  "add_control",
                  "col-12",
                  "m-b-0"
                ]
              }
            },
            "class": [
              "text-white",
              "bi",
              "bi-folder-plus"
            ]
          },
          "name": "plumbing_control_add_btn",
          "controlType": "addbutton",
          "type": "button",
          "events": {
            "click": "plumbing_control_add"
          },
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "description": "",
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Plumbing"
          },
          "tier": 1,
          "parent": "",
          "controlName": "Plumbing",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_kitchen_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Kitchen"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Kitchen",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_kitchen2_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Kitchen 2"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Kitchen2",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_kitchen3_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Kitchen 3"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Kitchen3",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_kitchen4_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Kitchen 4"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Kitchen4",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_kitchen5_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Kitchen 5"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Kitchen5",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Bathroom"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Bathroom",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom2_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Bathroom 2"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Bathroom2",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom3_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Bathroom 3"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Bathroom3",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom4_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Bathroom 4"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Bathroom4",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom5_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Bathroom 5"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Bathroom5",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_waterheater_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Water Heater"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "WaterHeater",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_dishwasher_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Dishwasher"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Dishwasher",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_activeleaks_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "ActiveLeaks"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "ActiveLeaks",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_priorleaks_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "PriorLeaks"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "PriorLeaks",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_washingmachinehose_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Washing Machine Hose"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "WashingMachineHose",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_kitchen_kitchensink_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Kitchen Sink"
          },
          "tier": 3,
          "parent": "Kitchen",
          "controlName": "KitchenSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_kitchen2_kitchensink_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Kitchen Sink"
          },
          "tier": 3,
          "parent": "Kitchen2",
          "controlName": "KitchenSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_kitchen3_kitchensink_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Kitchen Sink"
          },
          "tier": 3,
          "parent": "Kitchen3",
          "controlName": "KitchenSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_kitchen4_kitchensink_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Kitchen Sink"
          },
          "tier": 3,
          "parent": "Kitchen4",
          "controlName": "KitchenSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_kitchen5_kitchensink_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Kitchen Sink"
          },
          "tier": 3,
          "parent": "Kitchen5",
          "controlName": "KitchenSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom_bathroomsink_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Bathroom Sink"
          },
          "tier": 3,
          "parent": "Bathroom",
          "controlName": "BathroomSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom_showerbathtub_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Shower/Bathtub"
          },
          "tier": 3,
          "parent": "Bathroom",
          "controlName": "ShowerBathtub",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom_toiletsupplyline_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Toilet Supply Line"
          },
          "tier": 3,
          "parent": "Bathroom",
          "controlName": "ToiletSupplyLine",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom2_bathroomsink_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Bathroom Sink"
          },
          "tier": 3,
          "parent": "Bathroom2",
          "controlName": "BathroomSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom2_showerbathtub_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Shower/Bathtub"
          },
          "tier": 3,
          "parent": "Bathroom2",
          "controlName": "ShowerBathtub",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom2_toiletsupplyline_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Toilet Supply Line"
          },
          "tier": 3,
          "parent": "Bathroom2",
          "controlName": "ToiletSupplyLine",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom3_bathroomsink_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Bathroom Sink"
          },
          "tier": 3,
          "parent": "Bathroom3",
          "controlName": "BathroomSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom3_showerbathtub_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Shower/Bathtub"
          },
          "tier": 3,
          "parent": "Bathroom3",
          "controlName": "ShowerBathtub",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom3_toiletsupplyline_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Toilet Supply Line"
          },
          "tier": 3,
          "parent": "Bathroom3",
          "controlName": "ToiletSupplyLine",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom4_bathroomsink_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Bathroom Sink"
          },
          "tier": 3,
          "parent": "Bathroom4",
          "controlName": "BathroomSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom4_showerbathtub_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Shower/Bathtub"
          },
          "tier": 3,
          "parent": "Bathroom4",
          "controlName": "ShowerBathtub",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom4_toiletsupplyline_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Toilet Supply Line"
          },
          "tier": 3,
          "parent": "Bathroom4",
          "controlName": "ToiletSupplyLine",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom5_bathroomsink_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Bathroom Sink"
          },
          "tier": 3,
          "parent": "Bathroom5",
          "controlName": "BathroomSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom5_showerbathtub_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Shower/Bathtub"
          },
          "tier": 3,
          "parent": "Bathroom5",
          "controlName": "ShowerBathtub",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "class": [
              "formTitle"
            ]
          },
          "name": "plumbing_bathroom5_toiletsupplyline_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Toilet Supply Line"
          },
          "tier": 3,
          "parent": "Bathroom5",
          "controlName": "ToiletSupplyLine",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Bathroom",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Bathroom",
          "mandatory": 0,
          "valueControl": true,
      "isParent": true,
          "ImpactOnGroup": "Yes",
          "modelName": "userModel",
          "multiple": true,
          "repeatable": 1,
          "maxLimit": 5,
          "tip": "",
          "metatags": ""
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Bathroom 2",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom2_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom2"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Bathroom2",
          "mandatory": 0,
          "valueControl": false,
      "isParent": true,
          "ImpactOnGroup": "Yes",
          "modelName": "userModel",
          "multiple": true,
          "enabled": false,
          "tip": "",
          "metatags": ""
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btneditable",
              "bi",
              "bi-pencil"
            ]
          },
          "name": "plumbing_bathroom2_edit_btn",
          "controlType": "editbutton",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom2_edit"
          },
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Bathroom 3",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom3_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom3"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Bathroom3",
          "mandatory": 0,
      "isParent": true,
          "valueControl": false,
          "ImpactOnGroup": "Yes",
          "modelName": "userModel",
          "multiple": true,
          "enabled": false,
          "tip": "",
          "metatags": ""
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btneditable",
              "bi",
              "bi-pencil"
            ]
          },
          "name": "plumbing_bathroom3_edit_btn",
          "controlType": "editbutton",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom3_edit"
          },
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Bathroom 4",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom4_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom4"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Bathroom4",
          "mandatory": 0,
      "isParent": true,
          "valueControl": false,
          "ImpactOnGroup": "Yes",
          "modelName": "userModel",
          "multiple": true,
          "enabled": false,
          "tip": "",
          "metatags": ""
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btneditable",
              "bi",
              "bi-pencil"
            ]
          },
          "name": "plumbing_bathroom4_edit_btn",
          "controlType": "editbutton",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom4_edit"
          },
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Bathroom 5",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom5_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom5"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Bathroom5",
          "mandatory": 0,
          "valueControl": false,
      "isParent": true,
          "ImpactOnGroup": "Yes",
          "modelName": "userModel",
          "multiple": true,
          "enabled": false,
          "tip": "",
          "metatags": ""
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btneditable",
              "bi",
              "bi-pencil"
            ]
          },
          "name": "plumbing_bathroom5_edit_btn",
          "controlType": "editbutton",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom5_edit"
          },
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Bathroom Sink",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom_bathroomsink_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom_bathroomsink"
          },
          "tier": 3,
          "parent": "Bathroom",
          "controlName": "BathroomSink",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom_bathroomsink_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom_bathroomsink_add"
          },
          "tier": 4,
          "parent": "BathroomSink",
          "controlName": "BathroomSinkAddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Shower/Bathtub",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom_showerbathtub_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom_showerbathtub"
          },
          "tier": 3,
          "parent": "Bathroom",
          "controlName": "ShowerBathtub",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom_showerbathtub_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom_showerbathtub_add"
          },
          "tier": 4,
          "parent": "ShowerBathtub",
          "controlName": "ShowerBathtubAddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Toilet Supply Line",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom_toiletsupplyline_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom_toiletsupplyline"
          },
          "tier": 3,
          "parent": "Bathroom",
          "controlName": "ToiletSupplyLine",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom_toiletsupplyline_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom_toiletsupplyline_add"
          },
          "tier": 4,
          "parent": "ToiletSupplyLine",
          "controlName": "ToiletSupplyLineAddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Bathroom Sink",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom2_bathroomsink_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom2_bathroomsink"
          },
          "tier": 3,
          "parent": "Bathroom2",
          "controlName": "BathroomSink",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom2_bathroomsink_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom2_bathroomsink_add"
          },
          "tier": 4,
          "parent": "BathroomSink",
          "controlName": "BathroomSink2AddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Shower/Bathtub",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom2_showerbathtub_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom2_showerbathtub"
          },
          "tier": 3,
          "parent": "Bathroom2",
          "controlName": "ShowerBathtub",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom2_showerbathtub_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom2_showerbathtub_add"
          },
          "tier": 4,
          "parent": "ShowerBathtub",
          "controlName": "ShowerBathtub2AddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Toilet Supply Line",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom2_toiletsupplyline_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom2_toiletsupplyline"
          },
          "tier": 3,
          "parent": "Bathroom2",
          "controlName": "ToiletSupplyLine",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom2_toiletsupplyline_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom2_toiletsupplyline_add"
          },
          "tier": 4,
          "parent": "ToiletSupplyLine",
          "controlName": "ToiletSupplyLine2AddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Bathroom Sink",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom3_bathroomsink_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom3_bathroomsink"
          },
          "tier": 3,
          "parent": "Bathroom3",
          "controlName": "BathroomSink",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom3_bathroomsink_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom3_bathroomsink_add"
          },
          "tier": 4,
          "parent": "BathroomSink",
          "controlName": "BathroomSink3AddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Shower/Bathtub",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom3_showerbathtub_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom3_showerbathtub"
          },
          "tier": 3,
          "parent": "Bathroom3",
          "controlName": "ShowerBathtub",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom3_showerbathtub_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom3_showerbathtub_add"
          },
          "tier": 4,
          "parent": "ShowerBathtub",
          "controlName": "ShowerBathtub3AddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Toilet Supply Line",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom3_toiletsupplyline_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom3_toiletsupplyline"
          },
          "tier": 3,
          "parent": "Bathroom3",
          "controlName": "ToiletSupplyLine",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom3_toiletsupplyline_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom3_toiletsupplyline_add"
          },
          "tier": 4,
          "parent": "ToiletSupplyLine",
          "controlName": "ToiletSupplyLine3AddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Bathroom Sink",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom4_bathroomsink_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom4_bathroomsink"
          },
          "tier": 3,
          "parent": "Bathroom4",
          "controlName": "BathroomSink",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom4_bathroomsink_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom4_bathroomsink_add"
          },
          "tier": 4,
          "parent": "BathroomSink",
          "controlName": "BathroomSink4AddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Shower/Bathtub",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom4_showerbathtub_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom4_showerbathtub"
          },
          "tier": 3,
          "parent": "Bathroom4",
          "controlName": "ShowerBathtub",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom4_showerbathtub_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom4_showerbathtub_add"
          },
          "tier": 4,
          "parent": "ShowerBathtub",
          "controlName": "ShowerBathtub4AddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Toilet Supply Line",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom4_toiletsupplyline_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom4_toiletsupplyline"
          },
          "tier": 3,
          "parent": "Bathroom4",
          "controlName": "ToiletSupplyLine",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom4_toiletsupplyline_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom4_toiletsupplyline_add"
          },
          "tier": 4,
          "parent": "ToiletSupplyLine",
          "controlName": "ToiletSupplyLine4AddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Bathroom Sink",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom5_bathroomsink_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom5_bathroomsink"
          },
          "tier": 3,
          "parent": "Bathroom5",
          "controlName": "BathroomSink",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom5_bathroomsink_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom5_bathroomsink_add"
          },
          "tier": 4,
          "parent": "BathroomSink",
          "controlName": "BathroomSink5AddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Shower/Bathtub",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom5_showerbathtub_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom5_showerbathtub"
          },
          "tier": 3,
          "parent": "Bathroom5",
          "controlName": "ShowerBathtub",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom5_showerbathtub_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom5_showerbathtub_add"
          },
          "tier": 4,
          "parent": "ShowerBathtub",
          "controlName": "ShowerBathtub5AddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Toilet Supply Line",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom5_toiletsupplyline_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom5_toiletsupplyline"
          },
          "tier": 3,
          "parent": "Bathroom5",
          "controlName": "ToiletSupplyLine",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathroom5_toiletsupplyline_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroom5_toiletsupplyline_add"
          },
          "tier": 4,
          "parent": "ToiletSupplyLine",
          "controlName": "ToiletSupplyLine5AddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Kitchen",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchen_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Kitchen",
          "mandatory": 0,
      "isParent": true,
          "valueControl": true,
          "ImpactOnGroup": "Yes",
          "modelName": "userModel",
          "multiple": true,
          "repeatable": 1,
          "maxLimit": 5,
          "tip": ""
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Kitchen 2",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchen2_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen2"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Kitchen2",
          "mandatory": 0,
      "isParent": true,
          "valueControl": false,
          "ImpactOnGroup": "Yes",
          "modelName": "userModel",
          "multiple": true,
          "enabled": false,
          "tip": "",
          "metatags": ""
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btneditable",
              "bi",
              "bi-pencil"
            ]
          },
          "name": "plumbing_kitchen2_edit_btn",
          "controlType": "editbutton",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen2_edit"
          },
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Kitchen 3",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchen3_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen3"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Kitchen3",
          "mandatory": 0,
      "isParent": true,
          "valueControl": false,
          "ImpactOnGroup": "Yes",
          "modelName": "userModel",
          "enabled": false,
          "multiple": true,
          "tip": "",
          "metatags": ""
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btneditable",
              "bi",
              "bi-pencil"
            ]
          },
          "name": "plumbing_kitchen3_edit_btn",
          "controlType": "editbutton",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen3_edit"
          },
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Kitchen 4",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchen4_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen4"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Kitchen4",
          "mandatory": 0,
      "isParent": true,
          "valueControl": false,
          "ImpactOnGroup": "Yes",
          "modelName": "userModel",
          "enabled": false,
          "multiple": true,
          "tip": "",
          "metatags": ""
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btneditable",
              "bi",
              "bi-pencil"
            ]
          },
          "name": "plumbing_kitchen4_edit_btn",
          "controlType": "editbutton",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen4_edit"
          },
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Kitchen 5",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchen5_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen5"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Kitchen5",
          "mandatory": 0,
      "isParent": true,
          "valueControl": false,
          "ImpactOnGroup": "Yes",
          "modelName": "userModel",
          "multiple": true,
          "enabled": false,
          "tip": "",
          "metatags": ""
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btneditable",
              "bi",
              "bi-pencil"
            ]
          },
          "name": "plumbing_kitchen5_edit_btn",
          "controlType": "editbutton",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen5_edit"
          },
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Kitchen Sink",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchen_kitchensink_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen_kitchensink"
          },
          "tier": 3,
          "parent": "Kitchen",
          "controlName": "KitchenSink",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchen_kitchensink_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen_kitchensink_add"
          },
          "tier": 4,
          "parent": "KitchenSink",
          "controlName": "KitchenSinkAddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Kitchen Sink",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchen2_kitchensink_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen2_kitchensink"
          },
          "tier": 3,
          "parent": "Kitchen2",
          "controlName": "KitchenSink",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchen2_kitchensink_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen2_kitchensink_add"
          },
          "tier": 4,
          "parent": "KitchenSink",
          "controlName": "KitchenSink2AddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Kitchen Sink",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchen3_kitchensink_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen3_kitchensink"
          },
          "tier": 3,
          "parent": "Kitchen3",
          "controlName": "KitchenSink",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchen3_kitchensink_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen3_kitchensink_add"
          },
          "tier": 4,
          "parent": "KitchenSink",
          "controlName": "KitchenSink3AddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Kitchen Sink",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchen4_kitchensink_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen4_kitchensink"
          },
          "tier": 3,
          "parent": "Kitchen4",
          "controlName": "KitchenSink",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchen4_kitchensink_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen4_kitchensink_add"
          },
          "tier": 4,
          "parent": "KitchenSink",
          "controlName": "KitchenSink4AddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
      {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Kitchen Sink",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchen5_kitchensink_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen5_kitchensink"
          },
          "tier": 3,
          "parent": "Kitchen5",
          "controlName": "KitchenSink",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchen5_kitchensink_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchen5_kitchensink_add"
          },
          "tier": 4,
          "parent": "KitchenSink",
          "controlName": "KitchenSink5AddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Water Heater",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_waterheater_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_waterheater"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "WaterHeater",
          "mandatory": 1,
          "valueControl": true,
          "ImpactOnGroup": "No",
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_waterheater_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_waterheater_add"
          },
          "tier": 3,
          "parent": "WaterHeater",
          "controlName": "WaterHeaterAddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Dishwasher",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_dishwasher_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_dishwasher"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "Dishwasher",
          "mandatory": 0,
      "isParent": true,
          "valueControl": true,
          "ImpactOnGroup": "Yes",
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_dishwasher_dishwasherimage_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_dishwasher_dishwasherimage"
          },
          "tier": 3,
          "parent": "Dishwasher",
          "controlName": "DishwasherImage",
          "mandatory": 1,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Comments",
            "class": [
              "btn-circle",
              "bi",
              "bi-sticky"
            ]
          },
          "name": "plumbing_dishwasher_dishwashercomments_btn",
          "controlType": "comments",
          "type": "button",
          "events": {
            "click": "plumbing_dishwasher_dishwashercomments"
          },
          "tier": 3,
          "parent": "Dishwasher",
          "controlName": "DishwasherComments",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel"
        },
        {
          "ui": {
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Active Leaks",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_activeleaks_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_activeleaks"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "ActiveLeaks",
          "mandatory": 0,
      "isParent": true,
          "valueControl": true,
          "ImpactOnGroup": "No",
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_activeleaks_activeleaksimage_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_activeleaks_activeleaksimage"
          },
          "tier": 3,
          "parent": "ActiveLeaks",
          "controlName": "ActiveLeaksImage",
          "mandatory": 1,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Comments",
            "class": [
              "btn-circle",
              "bi",
              "bi-sticky"
            ]
          },
          "name": "plumbing_activeleaks_activeleakscomments_btn",
          "controlType": "comments",
          "type": "button",
          "events": {
            "click": "plumbing_activeleaks_activeleakscomments"
          },
          "tier": 3,
          "parent": "ActiveLeaks",
      "controlName": "ActiveLeaksComments",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel"
        },
        {
          "ui": {
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Prior Leaks",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_priorleaks_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_priorleaks"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "PriorLeaks",
          "mandatory": 0,
      "isParent": true,
          "valueControl": true,
          "ImpactOnGroup": "No",
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_priorleaks_priorleaksimage_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_priorleaks_priorleaksimage"
          },
          "tier": 3,
          "parent": "PriorLeaks",
          "controlName": "PriorLeaksImage",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Comments",
            "class": [
              "btn-circle",
              "bi",
              "bi-sticky"
            ]
          },
          "name": "plumbing_priorleaks_priorleakscomments_btn",
          "controlType": "comments",
          "type": "button",
          "events": {
            "click": "plumbing_priorleaks_priorleakscomments"
          },
          "tier": 3,
          "controlName": "PriorLeaksComments",
          "parent": "PriorLeaks",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel"
        },
        {
          "ui": {
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Washing Machine Hose",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_washingmachinehose_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_washingmachinehose"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "WashingMachineHose",
          "mandatory": 1,
          "valueControl": true,
          "ImpactOnGroup": "Yes",
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
      "noImageReason":"[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "hide": true,
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_washingmachinehose_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_washingmachinehose_add"
          },
          "tier": 2,
          "parent": "WashingMachineHose",
          "controlName": "WashingMachineHoseAddCtrl",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Damaged\", \"Missing\", \"Leak\", \"Rusted\", \"System not working\"]"
        },
        {
          "ui": {
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Additional Comments",
            "class": [
              "btn-circle",
              "bi",
              "bi-sticky"
            ]
          },
          "name": "plumbing_additionalcomments_btn",
          "controlType": "comments",
          "type": "button",
          "events": {
            "click": "plumbing_additionalcomments"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "AdditionalComments",
          "mandatory": 0,
          "valueControl": true,
          "ImpactOnGroup": "No",
          "modelName": "userModel"
        }
      ]
    }
  ]
}