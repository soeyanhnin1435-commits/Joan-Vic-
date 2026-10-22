var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": -0.172370378842313,
          "pitch": 0.08118217756101131,
          "rotation": 0,
          "target": "1-entrance"
        },
        {
          "yaw": -0.8671571591239378,
          "pitch": 0.18696896174721545,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance",
      "name": "entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.035697235398640004,
          "pitch": 0.09341261500562936,
          "rotation": 0,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-walkaway",
      "name": "walkaway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7975003209971447,
          "pitch": 0.2312082278277412,
          "rotation": 4.71238898038469,
          "target": "3-c-bed-room"
        },
        {
          "yaw": -2.945045192723221,
          "pitch": 0.12576989319949305,
          "rotation": 0,
          "target": "0-living"
        },
        {
          "yaw": 2.4687033148153716,
          "pitch": 0.3865160433507242,
          "rotation": 4.71238898038469,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-c-bed-room",
      "name": "c bed room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5339652683994078,
          "pitch": 0.31466794814310184,
          "rotation": 0,
          "target": "2-walkaway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04461093845809572,
          "pitch": 0.3912469378085799,
          "rotation": 0,
          "target": "2-walkaway"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
