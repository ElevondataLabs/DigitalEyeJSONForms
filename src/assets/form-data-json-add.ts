export const SERVER_DATA_ADD = 
{
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
          "name": "plumbing_heater_title",
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
          "name": "plumbing_kitchen_sink_title",
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
          "name": "plumbing_bathroom_sink_title",
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
          "name": "plumbing_bathroom_bathtub_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Shower/Bathtub"
          },
          "tier": 3,
          "parent": "Bathroom",
          "controlName": "Shower_Bathtub",
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
          "name": "plumbing_bathroom_supplyline_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Toilet Supply Line"
          },
          "tier": 3,
          "parent": "Bathroom",
          "controlName": "SupplyLine",
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
          "name": "plumbing_wmhose_title",
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
          "name": "plumbing_bathroomsink_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroomsink"
          },
          "tier": 3,
          "parent": "Bathroom",
          "controlName": "BathroomSink",
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
          "name": "plumbing_bathroomsink_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroomsink_add"
          },
          "tier": 3,
          "parent": "Bathroom",
          "controlName": "BathroomSink",
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
          "name": "plumbing_bathtub_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathtub"
          },
          "tier": 3,
          "parent": "Bathroom",
          "controlName": "Shower_Bathtub",
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
          "name": "plumbing_supplyline_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_supplyline"
          },
          "tier": 3,
          "parent": "Bathroom",
          "controlName": "SupplyLine",
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
          "name": "plumbing_bathtub_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathtub_add"
          },
          "tier": 3,
          "parent": "Bathroom",
          "controlName": "Shower_Bathtub",
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
          "name": "plumbing_supplyline_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_supplyline_add"
          },
          "tier": 3,
          "parent": "Bathroom",
          "controlName": "SupplyLine",
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
          "name": "plumbing_bathroomsink2_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroomsink2"
          },
          "tier": 3,
          "parent": "Bathroom2",
          "controlName": "BathroomSink",
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
          "name": "plumbing_bathroomsink2_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroomsink2_add"
          },
          "tier": 3,
          "parent": "Bathroom2",
          "controlName": "BathroomSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
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
            "description": "Shower/Bathtub",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathtub2_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathtub2"
          },
          "tier": 3,
          "parent": "Bathroom2",
          "controlName": "Shower_Bathtub",
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
          "name": "plumbing_supplyline2_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_supplyline2"
          },
          "tier": 3,
          "parent": "Bathroom2",
          "controlName": "SupplyLine",
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
          "name": "plumbing_bathtub2_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathtub2_add"
          },
          "tier": 3,
          "parent": "Bathroom2",
          "controlName": "Shower_Bathtub",
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
          "name": "plumbing_supplyline2_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_supplyline2_add"
          },
          "tier": 3,
          "parent": "Bathroom2",
          "controlName": "SupplyLine",
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
          "name": "plumbing_bathroomsink3_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroomsink3"
          },
          "tier": 3,
          "parent": "Bathroom3",
          "controlName": "BathroomSink",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
          "name": "plumbing_bathroomsink3_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroomsink3_add"
          },
          "tier": 3,
          "parent": "Bathroom3",
          "controlName": "BathroomSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
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
            "description": "Shower/Bathtub",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathtub3_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathtub3"
          },
          "tier": 3,
          "parent": "Bathroom3",
          "controlName": "Shower_Bathtub",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
          "name": "plumbing_supplyline3_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_supplyline3"
          },
          "tier": 3,
          "parent": "Bathroom3",
          "controlName": "SupplyLine",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
          "name": "plumbing_bathtub3_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathtub3_add"
          },
          "tier": 3,
          "parent": "Bathroom3",
          "controlName": "Shower_Bathtub",
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
          "name": "plumbing_supplyline3_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_supplyline3_add"
          },
          "tier": 3,
          "parent": "Bathroom3",
          "controlName": "SupplyLine",
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
          "name": "plumbing_bathroomsink4_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroomsink4"
          },
          "tier": 3,
          "parent": "Bathroom4",
          "controlName": "BathroomSink",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
          "name": "plumbing_bathroomsink4_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroomsink4_add"
          },
          "tier": 3,
          "parent": "Bathroom4",
          "controlName": "BathroomSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
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
            "description": "Shower/Bathtub",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathtub4_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathtub4"
          },
          "tier": 3,
          "parent": "Bathroom4",
          "controlName": "Shower_Bathtub",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
          "name": "plumbing_supplyline4_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_supplyline4"
          },
          "tier": 3,
          "parent": "Bathroom4",
          "controlName": "SupplyLine",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
          "name": "plumbing_bathtub4_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathtub4_add"
          },
          "tier": 3,
          "parent": "Bathroom4",
          "controlName": "Shower_Bathtub",
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
          "name": "plumbing_supplyline4_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_supplyline4_add"
          },
          "tier": 3,
          "parent": "Bathroom4",
          "controlName": "SupplyLine",
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
          "name": "plumbing_bathroomsink5_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroomsink5"
          },
          "tier": 3,
          "parent": "Bathroom5",
          "controlName": "BathroomSink",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
          "name": "plumbing_bathroomsink5_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathroomsink5_add"
          },
          "tier": 3,
          "parent": "Bathroom5",
          "controlName": "BathroomSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
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
            "description": "Shower/Bathtub",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_bathtub5_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathtub5"
          },
          "tier": 3,
          "parent": "Bathroom5",
          "controlName": "Shower_Bathtub",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
          "name": "plumbing_supplyline5_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_supplyline5"
          },
          "tier": 3,
          "parent": "Bathroom5",
          "controlName": "SupplyLine",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
          "name": "plumbing_bathtub5_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_bathtub5_add"
          },
          "tier": 3,
          "parent": "Bathroom5",
          "controlName": "Shower_Bathtub",
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
          "name": "plumbing_supplyline5_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_supplyline5_add"
          },
          "tier": 3,
          "parent": "Bathroom5",
          "controlName": "SupplyLine",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
          "valueControl": true,
          "ImpactOnGroup": "Yes",
          "modelName": "userModel",
          "multiple": true,
          "repeatable": 1,
          "maxLimit": 5,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
          "name": "plumbing_kitchensink_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchensink"
          },
          "tier": 3,
          "parent": "Kitchen",
          "controlName": "KitchenSink",
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
          "name": "plumbing_kitchensink_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchensink_add"
          },
          "tier": 3,
          "parent": "Kitchen",
          "controlName": "KitchenSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
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
            "description": "Kitchen Sink",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchensink2_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchensink2"
          },
          "tier": 3,
          "parent": "Kitchen2",
          "controlName": "KitchenSink",
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
          "name": "plumbing_kitchensink2_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchensink2_add"
          },
          "tier": 3,
          "parent": "Kitchen2",
          "controlName": "KitchenSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
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
            "description": "Kitchen Sink",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchensink3_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchensink3"
          },
          "tier": 3,
          "parent": "Kitchen3",
          "controlName": "KitchenSink",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
          "name": "plumbing_kitchensink3_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchensink3_add"
          },
          "tier": 3,
          "parent": "Kitchen3",
          "controlName": "KitchenSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
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
            "description": "Kitchen Sink",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchensink4_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchensink4"
          },
          "tier": 3,
          "parent": "Kitchen4",
          "controlName": "KitchenSink",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
          "name": "plumbing_kitchensink4_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchensink4_add"
          },
          "tier": 3,
          "parent": "Kitchen4",
          "controlName": "KitchenSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
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
            "description": "Kitchen Sink",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_kitchensink5_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchensink5"
          },
          "tier": 3,
          "parent": "Kitchen5",
          "controlName": "KitchenSink",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
          "name": "plumbing_kitchensink5_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_kitchensink5_add"
          },
          "tier": 3,
          "parent": "Kitchen5",
          "controlName": "KitchenSink",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
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
          "name": "plumbing_heater_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_heater"
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
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
          "name": "plumbing_heater_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_heater_add"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "WaterHeater",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": ""
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
          "name": "plumbing_dishwasher_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_dishwasher_add"
          },
          "tier": 3,
          "parent": "Dishwasher",
          "controlName": "DishwasherImage",
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
              "bi-camera"
            ]
          },
          "name": "plumbing_dishwasher_comments_btn",
          "controlType": "comments",
          "type": "button",
          "events": {
            "click": "plumbing_dishwasher_comments"
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
          "name": "plumbing_activeleaks_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_activeleaks_add"
          },
          "tier": 3,
          "parent": "ActiveLeaks",
          "controlName": "ActiveLeaksDetails",
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
              "bi-camera"
            ]
          },
          "name": "plumbing_activeleaks_comments_btn",
          "controlType": "comments",
          "type": "button",
          "events": {
            "click": "plumbing_activeleaks_comments"
          },
          "tier": 3,
          "controlName": "ActiveLeaksComments",
          "parent": "ActiveLeaks",
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
          "name": "plumbing_priorleaks_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_priorleaks_add"
          },
          "tier": 3,
          "parent": "PriorLeaks",
          "controlName": "PriorLeaksDetails",
          "mandatory": 0,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
              "bi-camera"
            ]
          },
          "name": "plumbing_priorleaks_comments_btn",
          "controlType": "comments",
          "type": "button",
          "events": {
            "click": "plumbing_priorleaks_comments"
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
          "name": "plumbing_wmhose_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_wmhose"
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
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
            "description": "Add Photos",
            "class": [
              "btn-circle",
              "bi",
              "bi-camera"
            ]
          },
          "name": "plumbing_wmhose_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "plumbing_wmhose_add"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "WashingMachineHose",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "",
          "metatags": "[\"Wood Siding\", \"Trees Adjacent Roof\", \"Concrete Foundation\", \"Sidewalk\", \"Composite Roof\"]"
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
              "bi-camera"
            ]
          },
          "name": "plumbing_addComments_btn",
          "controlType": "comments",
          "type": "button",
          "events": {
            "click": "plumbing_addComments"
          },
          "tier": 2,
          "parent": "Plumbing",
          "controlName": "AdditionalComments",
          "mandatory": 0,
          "valueControl": true,
          "ImpactOnGroup": "No",
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
            "click": "plumbing_contol_add"
          },
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel"
        }
      ]
    }
  ]
};
