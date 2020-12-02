var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.1258961392660165,
        "pitch": 0.02995182297479282,
        "fov": 1.754944386027574
      },
      "linkHotspots": [
        {
          "yaw": -3.090008884726224,
          "pitch": -0.05077472563989183,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception",
      "name": "Reception",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.7484344105533784,
        "pitch": 0.05182943946582874,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 0.6931291501665342,
          "pitch": -0.1320590134745867,
          "rotation": 6.283185307179586,
          "target": "0-entrance"
        },
        {
          "yaw": 2.9925093747718243,
          "pitch": 0.06491276687362912,
          "rotation": 0,
          "target": "2-reception-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-reception-corridor",
      "name": "Reception Corridor",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.8199958729284162,
        "pitch": 0.10525591450614513,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -3.0009326283861917,
          "pitch": -0.12077257084686543,
          "rotation": 0.7853981633974483,
          "target": "14-1st-floor-lobby"
        },
        {
          "yaw": -2.8131110252367364,
          "pitch": -0.008712955070397044,
          "rotation": 1.5707963267948966,
          "target": "5-clover-corridor"
        },
        {
          "yaw": 2.2739806196782455,
          "pitch": 0.012802647547285773,
          "rotation": 0,
          "target": "1-reception"
        },
        {
          "yaw": 1.1701540035446207,
          "pitch": -0.02339722710070724,
          "rotation": 0,
          "target": "9-primrose-corridor"
        },
        {
          "yaw": -0.5217803399943719,
          "pitch": -0.08733745265307213,
          "rotation": 0,
          "target": "3-activity-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-activity-room",
      "name": "Activity Room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.612374163942281,
        "pitch": 0.11915158618176847,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -2.508059875346145,
          "pitch": 0.03271749833291082,
          "rotation": 0,
          "target": "2-reception-corridor"
        },
        {
          "yaw": -0.6625246453067639,
          "pitch": 0.03263507883550787,
          "rotation": 0.7853981633974483,
          "target": "4-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-garden",
      "name": "Garden",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.4018173865441383,
        "pitch": 0.0334068051769556,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -0.5593358175060459,
          "pitch": -0.026047264372602186,
          "rotation": 5.497787143782138,
          "target": "7-sensory-garden"
        },
        {
          "yaw": -1.813402815493653,
          "pitch": -0.11658317363045612,
          "rotation": 0,
          "target": "3-activity-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-clover-corridor",
      "name": "Clover Corridor",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.9356152002140732,
        "pitch": 0.01695321549349771,
        "fov": 1.8496182668229895
      },
      "linkHotspots": [
        {
          "yaw": 1.667129020541803,
          "pitch": -0.057158210529646425,
          "rotation": 0,
          "target": "7-sensory-garden"
        },
        {
          "yaw": -3.0591280313241604,
          "pitch": -0.07355803158794494,
          "rotation": 0,
          "target": "2-reception-corridor"
        },
        {
          "yaw": -2.991727143662583,
          "pitch": -0.0037527588004131474,
          "rotation": 1.5707963267948966,
          "target": "8-room-2"
        },
        {
          "yaw": 0.09789496294268574,
          "pitch": -0.07472074710954146,
          "rotation": 7.853981633974483,
          "target": "6-clover-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-clover-dining-room",
      "name": "Clover Dining Room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.5484205410988157,
        "pitch": 0.009581267731906706,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -1.9047192999721894,
          "pitch": -0.11451569852805932,
          "rotation": 1.5707963267948966,
          "target": "5-clover-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-sensory-garden",
      "name": "Sensory Garden",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.1972979438061309,
        "pitch": 0.16711639887681784,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 0.4310670695975034,
          "pitch": -0.025674792030313753,
          "rotation": 0,
          "target": "5-clover-corridor"
        },
        {
          "yaw": -2.234179565236694,
          "pitch": 0.054213873003194024,
          "rotation": 0,
          "target": "4-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-room-2",
      "name": "Room 2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.15899229819608252,
        "pitch": 0.0435898541158668,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 1.0225515605690578,
          "pitch": -0.0911350434453091,
          "rotation": 0,
          "target": "5-clover-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-primrose-corridor",
      "name": "Primrose Corridor",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.32584422422657866,
        "pitch": 0.018747108977944293,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -2.1272573078028465,
          "pitch": -0.06571562092574723,
          "rotation": 5.497787143782138,
          "target": "2-reception-corridor"
        },
        {
          "yaw": -2.156714260406533,
          "pitch": 0.07009035425333465,
          "rotation": 4.71238898038469,
          "target": "10-visitor-room"
        },
        {
          "yaw": -0.691266490935071,
          "pitch": -0.07318265568458848,
          "rotation": 0,
          "target": "11-primrose-lounge"
        },
        {
          "yaw": 2.4998174866529457,
          "pitch": -0.039978679313207977,
          "rotation": 4.71238898038469,
          "target": "12-room-21"
        },
        {
          "yaw": 0.833645870265272,
          "pitch": -0.044890583215057234,
          "rotation": 4.71238898038469,
          "target": "13-primrose-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-visitor-room",
      "name": "Visitor Room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.3355212543217867,
        "pitch": 0.40481660202252456,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 3.1206739920004845,
          "pitch": 0.14575665519870462,
          "rotation": 0,
          "target": "9-primrose-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-primrose-lounge",
      "name": "Primrose Lounge",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9948008634357013,
        "pitch": 0.07516692269685166,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -1.9687142019730999,
          "pitch": -0.0976538897422401,
          "rotation": 4.71238898038469,
          "target": "9-primrose-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-room-21",
      "name": "Room 21",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.848255385516211,
        "pitch": 0.15243707797627692,
        "fov": 1.8595735530916835
      },
      "linkHotspots": [
        {
          "yaw": -2.9860264908944725,
          "pitch": -0.10572095126137171,
          "rotation": 10.995574287564278,
          "target": "9-primrose-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-primrose-dining-room",
      "name": "Primrose Dining Room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5898383154529334,
        "pitch": 0.16419907074457285,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 0.4541415433081095,
          "pitch": 0.08709405092329803,
          "rotation": 0,
          "target": "9-primrose-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-1st-floor-lobby",
      "name": "1st Floor Lobby",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0949681169253385,
        "pitch": 0.04882856650305101,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 1.8923472808341284,
          "pitch": -0.03307068052950157,
          "rotation": 0,
          "target": "15-bluebell-corridor"
        },
        {
          "yaw": -1.6561403283564502,
          "pitch": -0.11816151982960221,
          "rotation": 0,
          "target": "19-poppy-corridor"
        },
        {
          "yaw": -0.26996890794358563,
          "pitch": -0.19427088056563235,
          "rotation": 3.141592653589793,
          "target": "2-reception-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bluebell-corridor",
      "name": "Bluebell Corridor",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.28374162322147,
        "pitch": -0.04641268947907129,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -1.8944755437128364,
          "pitch": -0.02326989272525637,
          "rotation": 0,
          "target": "16-bluebell-lounge"
        },
        {
          "yaw": 3.092430483915688,
          "pitch": -0.13305723607885334,
          "rotation": 0,
          "target": "14-1st-floor-lobby"
        },
        {
          "yaw": -0.25677009555228736,
          "pitch": -0.10916233779365925,
          "rotation": 7.853981633974483,
          "target": "17-room-53"
        },
        {
          "yaw": -0.38355268981294444,
          "pitch": -0.11580014152138318,
          "rotation": 10.995574287564278,
          "target": "18-bluebell-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bluebell-lounge",
      "name": "Bluebell Lounge",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.723713305230966,
        "pitch": 0.047187342138055755,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -1.7722997533637077,
          "pitch": -0.035776985029203345,
          "rotation": 0,
          "target": "15-bluebell-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-room-53",
      "name": "Room 53",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.39560855613572343,
        "pitch": -0.02936550878853339,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 1.1124431263370784,
          "pitch": -0.06166977327639245,
          "rotation": 0,
          "target": "15-bluebell-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bluebell-dining-room",
      "name": "Bluebell Dining Room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.776940071832243,
        "pitch": 0.08256979987664081,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 1.8668611372781285,
          "pitch": -0.13236196343488515,
          "rotation": 0,
          "target": "15-bluebell-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-poppy-corridor",
      "name": "Poppy Corridor",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.1049359040671867,
        "pitch": 0.06866189050597171,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -1.3536276867311265,
          "pitch": -0.05873370587026194,
          "rotation": 0,
          "target": "14-1st-floor-lobby"
        },
        {
          "yaw": 0.14098065182668051,
          "pitch": -0.08802534751838564,
          "rotation": 4.71238898038469,
          "target": "20-managers-office"
        },
        {
          "yaw": 0.31378629753446674,
          "pitch": -0.10394430062010684,
          "rotation": 0,
          "target": "21-staff-training-room"
        },
        {
          "yaw": 1.9481630683631375,
          "pitch": -0.08635303827058927,
          "rotation": 1.5707963267948966,
          "target": "22-poppy-lounge"
        },
        {
          "yaw": -2.78652119845027,
          "pitch": -0.11348616839737424,
          "rotation": 0,
          "target": "24-room-66"
        },
        {
          "yaw": 1.7748364179957,
          "pitch": -0.08890176053921373,
          "rotation": 4.71238898038469,
          "target": "23-poppy-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-managers-office",
      "name": "Manager's office",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.042750632635840446,
        "pitch": 0.06773502877447157,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 1.0607386564645616,
          "pitch": -0.08069972356715027,
          "rotation": 1.5707963267948966,
          "target": "19-poppy-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-staff-training-room",
      "name": "Staff Training Room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.8184431862167934,
        "pitch": 0.08281806335602937,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 0.870214605915475,
          "pitch": 0.08154050561706683,
          "rotation": 0,
          "target": "19-poppy-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-poppy-lounge",
      "name": "Poppy Lounge",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.104151392100434,
        "pitch": 0.017235665786976995,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -3.097740973931897,
          "pitch": -0.10827508783278184,
          "rotation": 0,
          "target": "19-poppy-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-poppy-dining-room",
      "name": "Poppy Dining Room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.4747963495942322,
        "pitch": -0.026915805876885912,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -0.42228169821116524,
          "pitch": 0.09286915648236871,
          "rotation": 0,
          "target": "19-poppy-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-room-66",
      "name": "Room 66",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.0861915928443153,
        "pitch": 0.1925918144015064,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -2.835555810657853,
          "pitch": -0.12013934316091479,
          "rotation": 0,
          "target": "19-poppy-corridor"
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
