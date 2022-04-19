export const SERVER_DATA_ADD = {
  "Auto Claim" : [
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
                  "col-6",
                  "m-b-0"
                ]
              }
            }
          },
          "name": "firerisk_back_btn",
          "controlType": "backbutton",
          "type": "button",
          "events": {
            "click": "firerisk_back"
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
          "name": "firerisk_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Fire Risk Management"
          },
          "tier": 1,
          "parent": "",
          "controlName": "FireRisk",
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
          "name": "firerisk_buildingcondition_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Building Condition"
          },
          "tier": 2,
          "parent": "FireRisk",
          "controlName": "BuildingCondition",
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
          "name": "firerisk_flammablearticles_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Flammable Articles"
          },
          "tier": 2,
          "parent": "FireRisk",
          "controlName": "FlammableArticles",
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
          "name": "firerisk_fireprotectionandsecurity_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Fire Protection and Security"
          },
          "tier": 2,
          "parent": "FireRisk",
          "controlName": "FireProtectionandSecurity",
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
          "name": "firerisk_portablefireextinguishers_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Portable Fire Extinguishers"
          },
          "tier": 2,
          "parent": "FireRisk",
          "controlName": "PortableFireExtinguishers",
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
          "name": "firerisk_requiredimprovements_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Required Improvements"
          },
          "tier": 2,
          "parent": "FireRisk",
          "controlName": "RequiredImprovements",
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
          "name": "firerisk_necessaryimprovements_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Necessary Improvements"
          },
          "tier": 2,
          "parent": "FireRisk",
          "controlName": "NecessaryImprovements",
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
          "name": "firerisk_desirableimprovements_title",
          "controlType": "title",
          "type": "span",
          "props": {
            "text": "Desirable Improvements"
          },
          "tier": 2,
          "parent": "FireRisk",
          "controlName": "DesirableImprovements",
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
            "description": "Building Condition"
          },
          "name": "firerisk_buildingcondition_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "firerisk_buildingcondition"
          },
          "tier": 2,
          "parent": "FireRisk",
          "controlName": "BuildingCondition",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "ImpactOnGroup": "Yes",
          "noImageReason": "[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "tip": "Please ensure you capture all the photos clearly",
          "metatags": "[\"Walls\", \"Floor\", \"Roof\", \"Storey\", \"Stairs\", \"Frame\", \"Others\", \"Surrounding property\", \"Electrical installation\", \"Generator\", \"Light sources\"]"
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
          "name": "firerisk_buildingcondition_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "firerisk_buildingcondition_add"
          },
          "tier": 3,
          "parent": "BuildingCondition",
          "controlName": "BuildingConditionAdd",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "Please ensure you capture all the photos clearly",
          "metatags": ""
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
            "description": "Flammable Articles"
          },
          "name": "firerisk_flammablearticles_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "firerisk_flammablearticles"
          },
          "tier": 2,
          "parent": "FireRisk",
          "controlName": "FlammableArticles",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "ImpactOnGroup": "Yes",
          "noImageReason": "[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "tip": "Please ensure you capture all the photos clearly",
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
          "name": "firerisk_flammablearticles_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "firerisk_flammablearticles_add"
          },
          "tier": 3,
          "parent": "FlammableArticles",
          "controlName": "FlammableArticlesAdd",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "Please ensure you capture all the photos clearly",
          "metatags": ""
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
            "description": "Fire Protection and Security"
          },
          "name": "firerisk_fireprotectionandsecurity_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "firerisk_fireprotectionandsecurity"
          },
          "tier": 2,
          "parent": "FireRisk",
          "controlName": "FireProtectionandSecurity",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "ImpactOnGroup": "Yes",
          "noImageReason": "[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "tip": "Please ensure you capture all the photos clearly",
          "metatags": "[\"CCTV\", \"Fire Alarm\", \"Smoke Detector\", \"Heat Detector\", \"Fully Sprinkler\", \"Hydrant\", \"Lighting Protection\", \"Burglary Alarm\", \"Auto Dialer System\", \"Motion Sensor\", \"No Smoking Sign\"]"
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
          "name": "firerisk_fireprotectionandsecurity_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "firerisk_fireprotectionandsecurity_add"
          },
          "tier": 3,
          "parent": "FireProtectionandSecurity",
          "controlName": "FireProtectionandSecurityAdd",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "Please ensure you capture all the photos clearly",
          "metatags": ""
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
            "description": "Portable Fire Extinguishers"
          },
          "name": "firerisk_portablefireextinguishers_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "firerisk_portablefireextinguishers"
          },
          "tier": 2,
          "parent": "FireRisk",
          "controlName": "PortableFireExtinguishers",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "ImpactOnGroup": "Yes",
          "noImageReason": "[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "tip": "Please ensure you capture all the photos clearly",
          "metatags": "[\"Halon\", \"Bonpet\", \"Foam\", \"CO2\", \"Powder (Pressurized)\", \"Powder (Cartridge)\"]"
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
          "name": "firerisk_portablefireextinguishers_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "firerisk_portablefireextinguishers_add"
          },
          "tier": 3,
          "parent": "PortableFireExtinguishers",
          "controlName": "PortableFireExtinguishersAdd",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "Please ensure you capture all the photos clearly",
          "metatags": ""
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
            "description": "Required Improvements"
          },
          "name": "firerisk_requiredimprovements_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "firerisk_requiredimprovements"
          },
          "tier": 2,
          "parent": "FireRisk",
          "controlName": "RequiredImprovements",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "ImpactOnGroup": "Yes",
          "noImageReason": "[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "tip": "Please ensure you capture all the photos clearly",
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
          "name": "firerisk_requiredimprovements_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "firerisk_requiredimprovements_add"
          },
          "tier": 3,
          "parent": "RequiredImprovements",
          "controlName": "RequiredImprovementsAdd",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "Please ensure you capture all the photos clearly",
          "metatags": ""
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
            "description": "Necessary Improvements"
          },
          "name": "firerisk_necessaryimprovements_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "firerisk_necessaryimprovements"
          },
          "tier": 2,
          "parent": "FireRisk",
          "controlName": "NecessaryImprovements",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "ImpactOnGroup": "Yes",
          "noImageReason": "[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "tip": "Please ensure you capture all the photos clearly",
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
          "name": "firerisk_necessaryimprovements_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "firerisk_necessaryimprovements_add"
          },
          "tier": 3,
          "parent": "NecessaryImprovements",
          "controlName": "NecessaryImprovementsAdd",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "Please ensure you capture all the photos clearly",
          "metatags": ""
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
            "description": "Desirable Improvements"
          },
          "name": "firerisk_desirableimprovements_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "firerisk_desirableimprovements"
          },
          "tier": 2,
          "parent": "FireRisk",
          "controlName": "DesirableImprovements",
          "mandatory": 1,
          "valueControl": true,
          "modelName": "userModel",
          "multiple": true,
          "ImpactOnGroup": "Yes",
          "noImageReason": "[{\"title\":\"Unable to take view or access\",\"value\":\"noaccess\"},{\"title\":\"Not Applicable for Property\",\"value\":\"notapplicable\"},{\"title\":\"Other\",\"value\":\"other\"}]",
          "tip": "Please ensure you capture all the photos clearly",
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
          "name": "firerisk_desirableimprovements_add_btn",
          "controlType": "photo",
          "type": "button",
          "events": {
            "click": "firerisk_desirableimprovements_add"
          },
          "tier": 3,
          "parent": "DesirableImprovements",
          "controlName": "DesirableImprovementsAdd",
          "mandatory": 0,
          "valueControl": false,
          "modelName": "userModel",
          "multiple": true,
          "tip": "Please ensure you capture all the photos clearly",
          "metatags": ""
        }
      ]
    }
  ]  
}