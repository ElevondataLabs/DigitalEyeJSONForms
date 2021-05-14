export const SERVER_DATA =
{
  "Test1": [
    {
    data: [
      {
        name: 'base_back_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'base_back'
        },
        tier: 1,
        valueControl: false,
        controlName: 'BaseInspection',
        parent: '',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['backbtn', 'col-12', 'm-b-0']
            }
          },
          class: ['text-white', 'bi', 'bi-arrow-90deg-left'],
        }
      },
      {
        name: 'base_title',
        type: 'span',
        props: {
          text: 'Base Inspection'
        },
        tier: 1,
        controlName: 'BaseInspection',
        parent: '',
        valueControl: true,
        mandatory: 0,
        ui: {
          viewMode: {
            advance: {
              div: ['col-md-12']
            }
          },
          description: '',
          class: ['formTitle'],
        }
      },
      {
        name: 'base_roofline_title',
        type: 'span',
        props: {
          text: 'RoofLine'
        },
        valueControl: false,
        mandatory: 0,
        tier: 2,
        controlName: 'RoofLine',
        parent: 'BaseInspection',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-md-12']
            }
          },
          class: ['formTitle'],
        }
      },
      {
        name: 'base_dwelling_title',
        type: 'span',
        props: {
          text: 'Dwelling'
        },
        valueControl: false,
        mandatory: 0,
        tier: 2,
        controlName: 'Dwelling',
        parent: 'BaseInspection',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-md-12']
            }
          },
          class: ['formTitle'],
        }
      },
      {
        name: 'base_propspec_title',
        type: 'span',
        props: {
          text: 'Hazard Details'
        },
        valueControl: false,
        mandatory: 0,
        tier: 2,
        controlName: 'PropertySpecific',
        parent: 'BaseInspection',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-md-12']
            }
          },
          class: ['formTitle'],
        }
      },
      {
        name: 'base_roofline_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'base_roofline'
        },
        valueControl: true,
        mandatory: 0,
        multiple: true,
        tier: 2,
        value: 'test',
        controlName: 'RoofLine',
        parent: 'BaseInspection',
        tip: 'Please include all side of roof',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        ui: {
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'RoofLine',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'base_roofline_add_btn',
        type: 'button',
        modelName: 'userModel',
        events: {
          click: 'base_roofline_add'
        },
        valueControl: false,
        mandatory: 0,
        multiple: true,
        tier: 2,
        controlName: 'RoofLine',
        parent: 'BaseInspection',
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Add Photos',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'base_dwelling_btn',
        type: 'button',
        modelName: 'userModel',
        valueControl: true,
        mandatory: 0,
        multiple: false,
        tier: 2,
        controlName: 'Dwelling',
        parent: 'BaseInspection',
        events: {
          click: 'base_dwelling'
        },
        ui: {
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Dwelling',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'base_dwelling_frontview_btn',
        type: 'button',
        modelName: 'userModel',
        valueControl: true,
        mandatory: 0,
        multiple: false,
        tier: 3,
        controlName: 'FrontView',
        parent: 'Dwelling',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        events: {
          click: 'base_dwelling_frontview'
        },
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Front View',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'base_dwelling_backview_btn',
        type: 'button',
        modelName: 'userModel',
        tier: 3,
        controlName: 'BackView',
        valueControl: true,
        mandatory: 0,
        multiple: false,
        parent: 'Dwelling',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        events: {
          click: 'base_dwelling_backview'
        },
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Back View',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'base_dwelling_rightview_btn',
        type: 'button',
        modelName: 'userModel',
        valueControl: true,
        mandatory: 0,
        multiple: false,
        tier: 3,
        controlName: 'RightView',
        parent: 'Dwelling',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        events: {
          click: 'base_dwelling_rightview'
        },
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Right View',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'base_dwelling_leftview_btn',
        type: 'button',
        modelName: 'userModel',
        valueControl: true,
        mandatory: 0,
        multiple: false,
        tier: 3,
        controlName: 'LeftView',
        parent: 'Dwelling',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        events: {
          click: 'base_dwelling_leftview'
        },
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Left View',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'base_propspec_btn',
        type: 'button',
        modelName: 'userModel',
        tier: 2,
        controlName: 'PropertySpecific',
        parent: 'BaseInspection',
        valueControl: true,
        mandatory: 0,
        multiple: true,
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        events: {
          click: 'base_propspec'
        },
        ui: {
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Add Hazard',
          class: ['btn-circle', 'bi', 'bi-plus'],
        }
      },
      {
        name: 'base_propspec_add_btn',
        type: 'button',
        modelName: 'userModel',
        tier: 2,
        valueControl: false,
        mandatory: 0,
        multiple: true,
        controlName: 'PropertySpecific',
        parent: 'BaseInspection',
        events: {
          click: 'base_propspec_add'
        },
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Add Photos',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'base_propspec_add_details',
        type: 'button',
        modelName: 'userModel',
        tier: 2,
        valueControl: false,
        mandatory: 0,
        controlName: 'PropertySpecific',
        parent: 'BaseInspection',
        events: {
          click: 'base_propspec_add_details'
        },
        ui: {
          hide: true,
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Add Comments',
          class: ['btn-circle', 'bi', 'bi-sticky'],
        }
      },
  ]},
],
  "Test": [{
    data: [
      {
        name: 'lblDetExterior',
        type: 'span',
        props: {
          text: 'Detailed Exterior'
        },
        mandatory: true,
        multiple: false,
        tier: 1,
        controlName: 'DetailedExterior',
        valueControl: true,
        parent: '',
        ui: {
          viewMode: {
            advance: {
              div: ['col-md-12']
            }
          },
          description: '',
          class: ['formTitle'],
        }
      },
      {
        name: 'btnDriveway',
        type: 'button',
        modelName: 'userModel',
        mandatory: true,
        multiple: false,
        tier: 2,
        controlName: 'Driveway',
        valueControl: true,
        parent: 'DetailedExterior',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        events: {
          click: 'btnDriveway'
        },
        ui: {
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Driveway',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'btnFoundation',
        type: 'button',
        modelName: 'userModel',
        mandatory: true,
        multiple: false,
        tier: 2,
        valueControl: true,
        controlName: 'Foundation',
        parent: 'DetailedExterior',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        events: {
          click: 'btnFoundation'
        },
        ui: {
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Foundation',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'btnSidewalks',
        type: 'button',
        modelName: 'userModel',
        mandatory: true,
        multiple: false,
        tier: 2,
        valueControl: true,
        controlName: 'Sidewalks',
        parent: 'DetailedExterior',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        events: {
          click: 'btnSidewalks'
        },
        ui: {
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Sidewalks',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'btnPorches',
        type: 'button',
        modelName: 'userModel',
        mandatory: true,
        multiple: false,
        tier: 2,
        valueControl: true,
        controlName: 'Porches',
        parent: 'DetailedExterior',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        events: {
          click: 'btnPorches'
        },
        ui: {
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Porches/Patios/Balconies',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'btnStairs',
        type: 'button',
        modelName: 'userModel',
        mandatory: true,
        multiple: false,
        tier: 2,
        valueControl: true,
        controlName: 'Stairs',
        parent: 'DetailedExterior',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        events: {
          click: 'btnStairs'
        },
        ui: {
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Stairs',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'btnTrees',
        type: 'button',
        modelName: 'userModel',
        mandatory: true,
        multiple: false,
        tier: 2,
        valueControl: true,
        controlName: 'Trees',
        parent: 'DetailedExterior',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        events: {
          click: 'btnTrees'
        },
        ui: {
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Trees (Near the Dwelling)',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'btnChimney',
        type: 'button',
        modelName: 'userModel',
        mandatory: true,
        multiple: false,
        tier: 2,
        valueControl: true,
        controlName: 'Chimney',
        parent: 'DetailedExterior',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        events: {
          click: 'btnChimney'
        },
        ui: {
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Chimney',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'btnFence',
        type: 'button',
        modelName: 'userModel',
        mandatory: true,
        multiple: false,
        tier: 2,
        valueControl: true,
        controlName: 'Fence',
        parent: 'DetailedExterior',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        events: {
          click: 'btnFence'
        },
        ui: {
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Fence',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'btnSiding',
        type: 'button',
        modelName: 'userModel',
        mandatory: true,
        multiple: false,
        tier: 2,
        valueControl: true,
        controlName: 'Siding',
        parent: 'DetailedExterior',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        events: {
          click: 'btnSiding'
        },
        ui: {
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Siding',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'btnGutters',
        type: 'button',
        modelName: 'userModel',
        mandatory: true,
        multiple: false,
        tier: 2,
        valueControl: true,
        controlName: 'Gutters',
        parent: 'DetailedExterior',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        events: {
          click: 'btnGutters'
        },
        ui: {
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Gutters',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
      {
        name: 'btnYard',
        type: 'button',
        mandatory: true,
        multiple: false,
        tier: 2,
        valueControl: true,
        controlName: 'Yard',
        parent: 'DetailedExterior',
        modelName: 'userModel',
        tip: '',
        metatags: '["Wood Siding", "Trees Adjacent Roof", "Concrete Foundation", "Sidewalk", "Composite Roof"]',
        events: {
          click: 'btnYard'
        },
        ui: {
          viewMode: {
            advance: {
              div: ['col-6']
            }
          },
          description: 'Yard (including any debris)',
          class: ['btn-circle', 'bi', 'bi-camera'],
        }
      },
    ]}
  ]
};
