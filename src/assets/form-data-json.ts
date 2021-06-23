export const SERVER_DATA =
{
  "Base Inspection": [
    {
      "data": [
        {
          "ui": {
            "hide": true,
            "class": [
              "text-white",
              "bi",
              "bi-arrow-90deg-left"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "backbtn",
                  "col-12",
                  "m-b-0"
                ]
              }
            }
          },
          "name": "base_back_btn",
          "controlType": "backbutton",
          "type": "button",
          "events": {
            "click": "base_back"
          },
          "tier": 1,
          "parent": "",
          "controlName": "",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": false,
            "class": [
              "formTitle"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            },
            "description": ""
          },
          "name": "base_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Base Inspection"
          },
          "tier": 1,
          "parent": "",
          "controlName": "BaseInspection",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "formTitle"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            }
          },
          "name": "base_roofline_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "RoofLine"
          },
          "tier": 2,
          "parent": "BaseInspection",
          "controlName": "RoofLine",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "formTitle"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            }
          },
          "name": "base_dwelling_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Dwelling"
          },
          "tier": 2,
          "parent": "BaseInspection",
          "controlName": "Dwelling",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "formTitle"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            }
          },
          "name": "base_propspec_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Hazard Details"
          },
          "tier": 2,
          "parent": "BaseInspection",
          "controlName": "PropertySpecific",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "formTitle"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            }
          },
          "name": "base_dwelling_backview_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Back View"
          },
          "tier": 3,
          "parent": "Dwelling",
          "controlName": "BackView",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "formTitle"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            }
          },
          "name": "base_dwelling_rightview_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Right View"
          },
          "tier": 3,
          "parent": "Dwelling",
          "controlName": "RightView",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "formTitle"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            }
          },
          "name": "base_dwelling_frontview_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Front View"
          },
          "tier": 3,
          "parent": "Dwelling",
          "controlName": "FrontView",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "formTitle"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-md-12"
                ]
              }
            }
          },
          "name": "base_dwelling_leftview_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Left View"
          },
          "tier": 3,
          "parent": "Dwelling",
          "controlName": "LeftView",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        },
        {
          "ui": {
            "hide": false,
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "RoofLine"
          },
          "name": "base_roofline_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "base_roofline"
          },
          "tier": 2,
          "parent": "BaseInspection",
          "controlName": "RoofLine",
          "mandatory": 1,
          "valueControl": true,
          "ImpactOnGroup": "Yes",
          "modelName": "userModel",
          "multiple": true,
          "tip": "Please include all sides of roof",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos"
          },
          "name": "base_roofline_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "base_roofline_add"
          },
          "tier": 2,
          "parent": "BaseInspection",
          "controlName": "RoofLine",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "Please include all sides of roof",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
        },
        {
          "ui": {
            "hide": false,
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Dwelling"
          },
          "name": "base_dwelling_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "base_dwelling"
          },
          "tier": 2,
          "parent": "BaseInspection",
          "controlName": "Dwelling",
          "mandatory": 0,
          "valueControl": true,
          "ImpactOnGroup": "Yes",
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": ""
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Front View"
          },
          "name": "base_dwelling_frontview_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "base_dwelling_frontview"
          },
          "tier": 3,
          "parent": "Dwelling",
          "controlName": "FrontView",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos"
          },
          "name": "base_dwelling_frontview_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "base_dwelling_frontview_add"
          },
          "tier": 3,
          "parent": "Dwelling",
          "controlName": "FrontView",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Back View"
          },
          "name": "base_dwelling_backview_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "base_dwelling_backview"
          },
          "tier": 3,
          "parent": "Dwelling",
          "controlName": "BackView",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos"
          },
          "name": "base_dwelling_backview_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "base_dwelling_backview_add"
          },
          "tier": 3,
          "parent": "Dwelling",
          "controlName": "BackView",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Right View"
          },
          "name": "base_dwelling_rightview_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "base_dwelling_rightview"
          },
          "tier": 3,
          "parent": "Dwelling",
          "controlName": "RightView",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos"
          },
          "name": "base_dwelling_rightview_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "base_dwelling_rightview_add"
          },
          "tier": 3,
          "parent": "Dwelling",
          "controlName": "RightView",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Left View"
          },
          "name": "base_dwelling_leftview_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "base_dwelling_leftview"
          },
          "tier": 3,
          "parent": "Dwelling",
          "controlName": "LeftView",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos"
          },
          "name": "base_dwelling_leftview_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "base_dwelling_leftview_add"
          },
          "tier": 3,
          "parent": "Dwelling",
          "controlName": "LeftView",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
        },
        {
          "ui": {
            "hide": false,
            "class": [
              "btn-circle",
              "bi",
              "bi-plus"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Hazard"
          },
          "name": "base_propspec_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "base_propspec"
          },
          "tier": 2,
          "parent": "BaseInspection",
          "controlName": "PropertySpecific",
          "mandatory": 0,
          "valueControl": true,
          "ImpactOnGroup": "No",
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": ""
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Photos"
          },
          "name": "base_propspec_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "base_propspec_add"
          },
          "tier": 3,
          "parent": "PropertySpecific",
          "controlName": "HazardDetails",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
        },
        {
          "ui": {
            "hide": true,
            "class": [
              "btn-circle",
              "bi",
              "bi-sticky"
            ],
            "viewMode": {
              "advance": {
                "div": [
                  "col-6"
                ]
              }
            },
            "description": "Add Comments"
          },
          "name": "base_propspec_add_details",
          "controlType": "comments",
          "type": "button",
          "events": {
            "click": "base_propspec_add_details"
          },
          "tier": 3,
          "parent": "PropertySpecific",
          "controlName": "HazardComments",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel"
        }
      ]
    }
  ]
}