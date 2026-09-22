(function(){
    var script = {
 "start": "this.init(); this.playList_F0577A02_C826_4D95_41C6_499DF8038A19.set('selectedIndex', 0); this.playAudioList([this.audio_FDB4D02E_C8E7_DDEC_41D4_E5B2B9644490])",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  {
   "horizontalAlign": "center",
   "scrollBarOpacity": 0.5,
   "left": "0%",
   "children": [
    "this.Container_5645B517_5EBA_61DA_41CE_5170204AEC9E"
   ],
   "scrollBarVisible": "rollOver",
   "backgroundOpacity": 0,
   "overflow": "scroll",
   "width": "100%",
   "scrollBarMargin": 2,
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "minHeight": 1,
   "scrollBarWidth": 10,
   "propagateClick": false,
   "bottom": "0%",
   "height": 142,
   "verticalAlign": "middle",
   "minWidth": 1,
   "layout": "horizontal",
   "paddingTop": 0,
   "paddingBottom": 0,
   "gap": 10,
   "borderSize": 0,
   "class": "Container",
   "contentOpaque": false,
   "scrollBarColor": "#000000",
   "data": {
    "name": "Container44746"
   },
   "shadow": false
  },
  "this.MapViewer"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 117.54,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FC7DDB01_C826_4397_41D1_81088C3681D3",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "31- Escalera PA",
 "mapLocations": [
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 517.52,
   "x": 1834.72
  }
 ],
 "id": "panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 2.48,
   "distance": 1,
   "backwardYaw": -34.84,
   "panorama": "this.panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -72.01,
   "distance": 1,
   "backwardYaw": -3.1,
   "panorama": "this.panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_D19886B4_C87A_42FC_41E6_D75F2E687482",
  "this.overlay_D25C9555_C87A_47BF_41E3_3CDDA609611D"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "18_Dormitorio 04",
 "mapLocations": [
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": 180,
   "y": 374.34,
   "x": 1675.42
  }
 ],
 "id": "panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -9.68,
   "distance": 1,
   "backwardYaw": -26.57,
   "panorama": "this.panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_D003F72E_C865_C3ED_41D1_B5C5C40B34C3"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 154.66,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FD1E1C1E_C826_45AC_41D9_353AEEB9D542",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "07_Cocina Planta Baja",
 "mapLocations": [
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": 90,
   "y": 427.12,
   "x": 767.74
  }
 ],
 "id": "panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 33.55,
   "distance": 1,
   "backwardYaw": 151.87,
   "panorama": "this.panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 79.52,
   "distance": 1,
   "backwardYaw": -119.87,
   "panorama": "this.panorama_C249FB0A_C82A_4394_41C2_8AA251027069"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 131.51,
   "distance": 1,
   "backwardYaw": -2.34,
   "panorama": "this.panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_DAD78646_C85A_459D_41C7_FE5C84359BCF",
  "this.overlay_DB738AD0_C85A_42B4_41D2_7A2FA099F45E",
  "this.overlay_DCC3821E_C85A_3DAD_41E8_DA9C7A48FC53"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 40.46,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FD994B88_C826_4294_41CB_F4014852338B",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 169.4,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FD6A7C2D_C826_45EF_41DA_39EE517D2425",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -48.49,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FE0FACE6_C826_469D_41E8_1D062884A772",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 118.92,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FDB59B56_C826_43BC_41DE_0FA74633191E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 4.25,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FD036C06_C826_459D_41B5_C9A53E2FB38C",
 "automaticZoomSpeed": 10
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_E9389E8E_C865_C2AC_41E4_DF7359512092",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1920,
 "label": "Planta Baja",
 "image": {
  "levels": [
   {
    "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092.png",
    "class": "ImageResourceLevel",
    "width": 1920,
    "height": 1080
   },
   {
    "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_lq.png",
    "class": "ImageResourceLevel",
    "tags": "preload",
    "width": 341,
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_E460537C_C82E_C26D_41E4_796432864658",
  "this.overlay_E561A424_C82A_459C_4199_A240A73041AF",
  "this.overlay_E46C1AC2_C82A_4295_41B2_285FF690B393",
  "this.overlay_E40CE590_C82B_C6B4_41E6_5C78CDE0B8A1",
  "this.overlay_E5303AAC_C82A_C2ED_41D8_2FD931E3632B",
  "this.overlay_E48B039E_C825_C2AD_41E2_27B8650EE9C2",
  "this.overlay_E669BD62_C826_4795_418B_7352777D7B0E",
  "this.overlay_E5AF2C7C_C826_C66D_41C7_E3B0EBB382DC",
  "this.overlay_E7962062_C827_FD95_41E6_1D63E5590A60",
  "this.overlay_F806753A_C826_47F5_41D2_6DBCC24EC6A4",
  "this.overlay_E6CA87F2_C825_C274_41D9_E9480F77F986",
  "this.overlay_E667DD3E_C8DA_47EC_4188_4E3A8764B51E",
  "this.overlay_E7ACEAE6_C8DA_C29D_41DF_E73DBD1BBB0A",
  "this.overlay_E7EBBE48_C8DA_4595_41E5_B842A5C615FB",
  "this.overlay_F863FB16_C8DA_C3BD_41D3_E913056779E1",
  "this.overlay_F85C916A_C8DD_DF94_41D5_FD89DFD2B907",
  "this.overlay_F99AA62A_C8DE_4594_41E6_DB5ACAA15159",
  "this.overlay_F9EBA786_C8DE_C29D_41D8_DF0343A4ACF8"
 ],
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_t.png",
 "fieldOfViewOverlayRadiusScale": 0.03,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "maximumZoomFactor": 1.2,
 "height": 1080
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -146.45,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FFAB5D64_C826_479D_41E9_0C3BDB1EB6DB",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 107.99,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FD221BE4_C826_429D_41B9_1497B0621C87",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "13_Terraza Planta Baja",
 "mapLocations": [
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": 94.76,
   "y": 405.17,
   "x": 1185.84
  }
 ],
 "id": "panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 151.87,
   "distance": 1,
   "backwardYaw": 33.55,
   "panorama": "this.panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 13.38,
   "distance": 1,
   "backwardYaw": -165.45,
   "panorama": "this.panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_DE6E28B0_C86A_CEF5_41E7_ADA0EAC27F2B",
  "this.overlay_DD063970_C86A_4E75_41CE_749CDD054B11"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "11_Ba\u00f1o 02",
 "mapLocations": [
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": -87.88,
   "y": 668.17,
   "x": 1389.05
  }
 ],
 "id": "panorama_C24B96F4_C82A_427C_41E4_8260853C24B8",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -80.1,
   "distance": 1,
   "backwardYaw": -10.6,
   "panorama": "this.panorama_C24D0EE2_C82A_4295_41E8_8AB076991670"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_DD2FA7B3_C86B_C2FB_41CD_B4F0C264B6CA"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -77.4,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FDBD8B56_C826_43BC_41DE_7D3FBE752C94",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 68.08,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FD871B65_C826_439F_41A0_C759E1D3FA79",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "27- Distribuidor 04",
 "hfovMin": "150%",
 "id": "panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -37.11,
   "distance": 1,
   "backwardYaw": -103.5,
   "panorama": "this.panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 23.6,
   "distance": 1,
   "backwardYaw": 136.5,
   "panorama": "this.panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 158.6,
   "distance": 1,
   "backwardYaw": 176.11,
   "panorama": "this.panorama_C24888F4_C82A_CE7C_41CE_898858C693F2"
  }
 ],
 "overlays": [
  "this.overlay_D71D160C_C865_C5AD_41E3_9104814C31A0",
  "this.overlay_D7DD9D68_C865_C795_41E6_4A17BE4257DB",
  "this.overlay_E87EF649_C86A_4597_41D6_F49968A8657B",
  "this.overlay_E85F026C_C86B_C26D_41E2_BAD61676D2F4"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_t.jpg",
 "hfovMax": 130
},
{
 "class": "MapPlayer",
 "buttonZoomOut": "this.IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
 "viewerArea": "this.MapViewer",
 "buttonZoomIn": "this.IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "class": "MapPlayListItem",
   "media": "this.map_EE6FBBEB_C865_C26B_41E5_90AC3E222467",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_F0577A02_C826_4D95_41C6_499DF8038A19"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 140.42,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FD63AC1E_C826_45AC_41D0_C1DCF2FFA914",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -14.8,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FDE28B97_C826_42BB_41E3_EF2CE25B0A35",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 171.34,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FEA00C6A_C826_4595_41D6_3C6074EE39C8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "17_Ducha Ba\u00f1o 03",
 "hfovMin": "150%",
 "id": "panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -152.94,
   "distance": 1,
   "backwardYaw": 102.6,
   "panorama": "this.panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC"
  }
 ],
 "overlays": [
  "this.overlay_D06DE580_C86A_4694_41DF_566A1D16F9BB"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_t.jpg",
 "hfovMax": 130
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_EE6FBBEB_C865_C26B_41E5_90AC3E222467",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1920,
 "label": "Planta Alta",
 "image": {
  "levels": [
   {
    "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467.png",
    "class": "ImageResourceLevel",
    "width": 1920,
    "height": 1080
   },
   {
    "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_lq.png",
    "class": "ImageResourceLevel",
    "tags": "preload",
    "width": 341,
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_EFB595C2_C82D_C694_41B0_574E6A0F5F6B",
  "this.overlay_EEB737C6_C82A_C29C_41A4_FCC6C1573A75",
  "this.overlay_EF4F4B7A_C82B_C275_41E1_F90A0C2C48F2",
  "this.overlay_EF56D5D8_C82A_C6B4_41E3_0B2DE23D473E",
  "this.overlay_EF27843E_C82A_45EC_418A_937F0D1C3CF8",
  "this.overlay_E0D9684C_C83A_CDAD_4198_08E15A4295FE",
  "this.overlay_E0A5FB8D_C825_C2AC_41DE_74DD123092CC",
  "this.overlay_E2D6FF30_C826_43F5_41E0_E5405D274B2B",
  "this.overlay_E1E945F0_C826_4675_41CF_7D951A217F7B",
  "this.overlay_E3674758_C82A_43B5_41DC_78849785FC7D",
  "this.overlay_E45414DE_C82D_C6AC_41D9_9394A6EB34DB",
  "this.overlay_E52B09C2_C82D_CE94_41DC_5C4CA2F02417",
  "this.overlay_FAD89B30_C8DD_C3F4_41E7_F15AC3C2FAF1"
 ],
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_t.png",
 "fieldOfViewOverlayRadiusScale": 0.01,
 "fieldOfViewOverlayOutsideOpacity": 0.03,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "maximumZoomFactor": 1.2,
 "height": 1080
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20_Lavadero",
 "mapLocations": [
  {
   "map": "this.map_EE6FBBEB_C865_C26B_41E5_90AC3E222467",
   "class": "PanoramaMapLocation",
   "angle": 90,
   "y": 683.06,
   "x": 1640.37
  }
 ],
 "id": "panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 155.82,
   "distance": 1,
   "backwardYaw": 10.74,
   "panorama": "this.panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -36.79,
   "distance": 1,
   "backwardYaw": 50.69,
   "panorama": "this.panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_D17C74AF_C866_46EB_41DC_570B6C92D957",
  "this.overlay_D182ADD8_C87A_46B4_41C8_D1D759AF37B7"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "08_Sal\u00f3n Planta Baja",
 "mapLocations": [
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": 88.32,
   "y": 674.01,
   "x": 836.65
  }
 ],
 "id": "panorama_C249FB0A_C82A_4394_41C2_8AA251027069",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 14.35,
   "distance": 1,
   "backwardYaw": -175.75,
   "panorama": "this.panorama_C24D0EE2_C82A_4295_41E8_8AB076991670"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -119.87,
   "distance": 1,
   "backwardYaw": 79.52,
   "panorama": "this.panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_DBB1B344_C866_439C_41DA_FF2F45BF02A0",
  "this.overlay_DC11C6EA_C866_C294_41E2_C7A0C9C40E4E"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "30- Dormitorio 09",
 "mapLocations": [
  {
   "map": "this.map_EE6FBBEB_C865_C26B_41E5_90AC3E222467",
   "class": "PanoramaMapLocation",
   "angle": -87.88,
   "y": 695.9,
   "x": 295.34
  }
 ],
 "id": "panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -103.5,
   "distance": 1,
   "backwardYaw": -37.11,
   "panorama": "this.panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_D73650A0_C86D_DE95_41DB_58DE8D4390DC"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 170.32,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FD3E6BFC_C826_426D_41DC_80486B53396F",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "03_Ba\u00f1o 01",
 "mapLocations": [
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 362.66,
   "x": 476.94
  }
 ],
 "id": "panorama_C2495705_C82A_439F_41E8_18F81B90FD9B",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -123.86,
   "distance": 1,
   "backwardYaw": -61.08,
   "panorama": "this.panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_DA1412D7_C85D_C2BB_41DB_1F658B6D14CA"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 143.21,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FE740D00_C826_4794_41E6_EB37F41D723D",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "25- Dormitorio 06",
 "mapLocations": [
  {
   "map": "this.map_EE6FBBEB_C865_C26B_41E5_90AC3E222467",
   "class": "PanoramaMapLocation",
   "angle": 85.24,
   "y": 470.7,
   "x": 716.48
  }
 ],
 "id": "panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -110.37,
   "distance": 1,
   "backwardYaw": 23.27,
   "panorama": "this.panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -39.58,
   "distance": 1,
   "backwardYaw": -82.26,
   "panorama": "this.panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_D62C4772_C867_C274_41D8_92875A171D02",
  "this.overlay_D69385DA_C867_C6B5_41E4_9EAACDBD69F0"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -18.32,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FC63AACF_C826_42AB_41D0_57F405FE3316",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "06_Dormitorio 01",
 "mapLocations": [
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": 95.71,
   "y": 456.32,
   "x": 277
  }
 ],
 "id": "panorama_C24CB302_C82A_4394_41E5_D1CC369248AA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -15.97,
   "distance": 1,
   "backwardYaw": -132.24,
   "panorama": "this.panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_DA741248_C85D_DD95_41D9_492D022735A4"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 47.76,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FF8E5D96_C826_46BC_41E2_9271AF5B8D4E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 164.04,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FE861C79_C826_4677_41E3_1BC59F117FE1",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -156.73,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FF9FEDAE_C826_46ED_41D6_CF5C15100637",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 69.63,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FC68BAE9_C826_4297_41D0_5A483200B9D4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C249FB0A_C82A_4394_41C2_8AA251027069_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "class": "MapPlayListItem",
   "media": "this.map_EE6FBBEB_C865_C26B_41E5_90AC3E222467",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_F0570A02_C826_4D95_41C3_85BCA4695D4C"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "22- Ingreso Planta Alta",
 "mapLocations": [
  {
   "map": "this.map_EE6FBBEB_C865_C26B_41E5_90AC3E222467",
   "class": "PanoramaMapLocation",
   "angle": 92.44,
   "y": 365.13,
   "x": 664.49
  }
 ],
 "id": "panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 23.27,
   "distance": 1,
   "backwardYaw": -110.37,
   "panorama": "this.panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -40.55,
   "distance": 1,
   "backwardYaw": -76.66,
   "panorama": "this.panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 168.93,
   "distance": 1,
   "backwardYaw": -62.46,
   "panorama": "this.panorama_C24888F4_C82A_CE7C_41CE_898858C693F2"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_D4B3045E_C87B_C5AD_41DB_04D06A8EEBCF",
  "this.overlay_D56F0BF4_C87B_C27D_41E3_41E32C0535D7",
  "this.overlay_D58C8406_C87A_459D_41DB_D9A3690D75E3"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -166.62,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FDDB8BD4_C826_42BD_41E0_122F7123BF71",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "12_Dormitorio 03",
 "mapLocations": [
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": 270,
   "y": 641.78,
   "x": 1567.27
  }
 ],
 "id": "panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -29.37,
   "distance": 1,
   "backwardYaw": -2.14,
   "panorama": "this.panorama_C24D0EE2_C82A_4295_41E8_8AB076991670"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_DD214BFE_C86A_426C_41AE_EF92CE02A21D"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 9.77,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FE10FCE6_C826_469D_41E6_29A31413DC48",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "01_Hall com\u00fan",
 "mapLocations": [
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": 91.71,
   "y": 323.42,
   "x": 247.57
  }
 ],
 "id": "panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -15.96,
   "distance": 1,
   "backwardYaw": 1.31,
   "panorama": "this.panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -15.96,
   "distance": 1,
   "backwardYaw": -116.28,
   "panorama": "this.panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 18.58,
   "distance": 1,
   "backwardYaw": -116.28,
   "panorama": "this.panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_C69CAFBA_C83A_42F5_41B6_405CEE025FE8",
  "this.overlay_C7257356_C83A_43BD_41DD_14840A3857DE"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "21- Terraza 02",
 "mapLocations": [
  {
   "map": "this.map_EE6FBBEB_C865_C26B_41E5_90AC3E222467",
   "class": "PanoramaMapLocation",
   "angle": 86.91,
   "y": 655.26,
   "x": 1230.37
  }
 ],
 "id": "panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 10.74,
   "distance": 1,
   "backwardYaw": 155.82,
   "panorama": "this.panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -171.01,
   "distance": 1,
   "backwardYaw": -8.66,
   "panorama": "this.panorama_C24A6D62_C82A_C794_41E8_9CD609938D46"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_D095791A_C866_CFB5_41E8_47582113E400",
  "this.overlay_D1B7388C_C87A_4EAD_41A6_9586D8C6B702"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "15_Ba\u00f1o 03",
 "mapLocations": [
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": 94.76,
   "y": 595.06,
   "x": 1744.09
  }
 ],
 "id": "panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 102.6,
   "distance": 1,
   "backwardYaw": -152.94,
   "panorama": "this.panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 79.14,
   "distance": 1,
   "backwardYaw": -174.78,
   "panorama": "this.panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -118.12,
   "distance": 1,
   "backwardYaw": 18.23,
   "panorama": "this.panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_DF5E7F61_C86A_4397_41C9_FE36EB75C0C0",
  "this.overlay_DF104406_C86A_459C_41DE_7E79E4CDACAB",
  "this.overlay_DF857BC8_C86A_C294_41E8_B345B06946E5"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "33- Ba\u00f1o 05",
 "mapLocations": [
  {
   "map": "this.map_EE6FBBEB_C865_C26B_41E5_90AC3E222467",
   "class": "PanoramaMapLocation",
   "angle": 180,
   "y": 687.46,
   "x": 491.62
  }
 ],
 "id": "panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 165.2,
   "distance": 1,
   "backwardYaw": 95.03,
   "panorama": "this.panorama_C24888F4_C82A_CE7C_41CE_898858C693F2"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_D7EAE11E_C86E_3FAC_41E7_E75A6C2E4B91"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -21.4,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FD897B7F_C826_426B_41D5_563CC275E087",
 "automaticZoomSpeed": 10
},
{
 "buttonMoveUp": "this.IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F",
 "class": "PanoramaPlayer",
 "buttonMoveDown": "this.IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "buttonZoomIn": "this.IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA",
 "id": "MainViewerPanoramaPlayer",
 "buttonZoomOut": "this.IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
 "mouseControlMode": "drag_acceleration",
 "buttonMoveLeft": "this.IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C",
 "buttonPlayLeft": "this.IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B",
 "buttonPause": "this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonMoveRight": "this.IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40",
 "buttonRestart": "this.IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76",
 "buttonPlayRight": "this.IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 2.38,
  "pitch": -3.84
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 153.57,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FDADCB3D_C826_43EF_41DB_11FC6DC3F160",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 139.45,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FE88EC82_C826_4695_41E8_85E11F589782",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 153.43,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FDD6CBCA_C826_4295_41D7_47FCF8DD0415",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 162.17,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FC67BAC0_C826_4294_41E6_7DBECDCAD1C9",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -100.86,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FDA45B3D_C826_43EF_41E2_68D379D21846",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 14.55,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FFBC6D7C_C826_466D_41E2_937D7EF427C5",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -84.97,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FEB21C6A_C826_4595_41DC_CEFAD0CC401C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -178.69,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FDF42BB1_C826_42F7_41D5_314D60764456",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "14_Distribuidor 03",
 "mapLocations": [
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": 90,
   "y": 514.71,
   "x": 1644.82
  }
 ],
 "id": "panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -165.45,
   "distance": 1,
   "backwardYaw": 13.38,
   "panorama": "this.panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -3.1,
   "distance": 1,
   "backwardYaw": -72.01,
   "panorama": "this.panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 18.23,
   "distance": 1,
   "backwardYaw": -118.12,
   "panorama": "this.panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -26.57,
   "distance": 1,
   "backwardYaw": -9.68,
   "panorama": "this.panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_DE1A68F0_C86E_CE75_41B0_888362417D88",
  "this.overlay_DDBCB4CA_C86E_4694_41CD_226F508DF83F",
  "this.overlay_DE730DF1_C86E_4677_41E3_738EFD84ED32",
  "this.overlay_DE35DAC2_C86F_C294_41DB_4014E706ED5F"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -24.18,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FD5E6C60_C826_4594_41D5_82C4FE0981B3",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 145.16,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FEF0BC9C_C826_46AC_41D4_EC76BE8AEE8C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 63.72,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FDFB3BBA_C826_42F5_41CE_6135C6E3DE28",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "16_wc Ba\u00f1o 03",
 "hfovMin": "150%",
 "id": "panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -174.78,
   "distance": 1,
   "backwardYaw": 79.14,
   "panorama": "this.panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC"
  }
 ],
 "overlays": [
  "this.overlay_D05FB4FC_C86A_C66D_41B3_3126C4E97F70"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -129.31,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FC5C4B33_C826_43FB_41E7_B04AFCCE794D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -161.77,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FE5A7D4A_C826_4795_41DC_772047026566",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 164.03,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FE2C6CCE_C826_46AC_41C1_35E90A46232C",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "10_Dormitorio 02",
 "mapLocations": [
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": 180,
   "y": 614.22,
   "x": 1277.87
  }
 ],
 "id": "panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -17.83,
   "distance": 1,
   "backwardYaw": -26.43,
   "panorama": "this.panorama_C24D0EE2_C82A_4295_41E8_8AB076991670"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_DDCD6B8A_C86B_C294_41E3_34D77777AC97"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 150.63,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FC12FAB9_C826_42F4_41E6_D9212FBA36DC",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 99.9,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FC1D0AC0_C826_4294_41E4_11566BF00483",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 76.5,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FD7F5C37_C826_45FB_41E6_A930FAC1D245",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 63.72,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FDC1FBBA_C826_42F5_41CD_42D4E4BEBBA1",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -156.4,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FFF2BDEA_C826_4695_41E1_BD8B3B483F51",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -100.48,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FD09EC06_C826_459D_41BD_E08A27A0577E",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "class": "MapPlayListItem",
   "media": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_F056AA02_C826_4D95_4194_27461421B0F6"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -168.76,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FEEE0C9C_C826_46AC_41B1_ABAD2883BE4A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 177.66,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FC49BB1B_C826_43AB_41E6_B954705893C4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -87.59,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FC6DCADA_C826_42B4_41B1_D9C4E1B4F55E",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "23- Sal\u00f3n PA",
 "mapLocations": [
  {
   "map": "this.map_EE6FBBEB_C865_C26B_41E5_90AC3E222467",
   "class": "PanoramaMapLocation",
   "angle": 44.27,
   "y": 599.45,
   "x": 495.78
  }
 ],
 "id": "panorama_C24888F4_C82A_CE7C_41CE_898858C693F2",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -62.46,
   "distance": 1,
   "backwardYaw": 168.93,
   "panorama": "this.panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 176.11,
   "distance": 1,
   "backwardYaw": 158.6,
   "panorama": "this.panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -111.92,
   "distance": 1,
   "backwardYaw": -170.88,
   "panorama": "this.panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 11.24,
   "distance": 1,
   "backwardYaw": -139.54,
   "panorama": "this.panorama_C24A6D62_C82A_C794_41E8_9CD609938D46"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 95.03,
   "distance": 1,
   "backwardYaw": 165.2,
   "panorama": "this.panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_D354C788_C87F_C295_41AF_A8DF65654A94",
  "this.overlay_D3D05BD7_C87E_42BB_41E4_C499D61597BC",
  "this.overlay_D31A5006_C87E_7D9C_41BF_6AACBF0D8B06",
  "this.overlay_D46D5BFB_C87D_C26B_41E2_53EEBDFC4544",
  "this.overlay_D47207B6_C87A_C2FC_41CA_27334DB6066C"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 177.86,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FED6FCB4_C826_46FD_41DD_56C8619016E5",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 27.06,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FE46DD0F_C826_47AB_417E_9CD20AA865FA",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "02_Ingreso",
 "mapLocations": [
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": 90,
   "y": 495.79,
   "x": 436.06
  }
 ],
 "id": "panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -61.08,
   "distance": 1,
   "backwardYaw": -123.86,
   "panorama": "this.panorama_C2495705_C82A_439F_41E8_18F81B90FD9B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -132.24,
   "distance": 1,
   "backwardYaw": -15.97,
   "panorama": "this.panorama_C24CB302_C82A_4394_41E5_D1CC369248AA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -116.28,
   "distance": 1,
   "backwardYaw": -15.96,
   "panorama": "this.panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -2.34,
   "distance": 1,
   "backwardYaw": 131.51,
   "panorama": "this.panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 92.41,
   "distance": 1,
   "backwardYaw": -170.23,
   "panorama": "this.panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_D8A5688E_C82A_CEAC_41C1_848248DCEB11",
  "this.overlay_D84138F8_C82B_CE75_41C3_A94178D08C7E",
  "this.overlay_DA9ACAA4_C82E_429C_41C5_C4FC24EC5E21",
  "this.overlay_D8D2E091_C82A_5EB7_41BF_6C7CAE67AA5D",
  "this.overlay_DA895EC6_C82A_429D_4164_B395B5B547F5"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 8.99,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FE9CEC92_C826_46B4_41DF_531044508C08",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "29- Dormitorio 07",
 "mapLocations": [
  {
   "map": "this.map_EE6FBBEB_C865_C26B_41E5_90AC3E222467",
   "class": "PanoramaMapLocation",
   "angle": -83.05,
   "y": 337.56,
   "x": 309.86
  }
 ],
 "id": "panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -170.88,
   "distance": 1,
   "backwardYaw": -111.92,
   "panorama": "this.panorama_C24888F4_C82A_CE7C_41CE_898858C693F2"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_D7E42304_C86E_439C_419D_53F2C5920F0C"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "19_Dormitorio 05",
 "mapLocations": [
  {
   "map": "this.map_EE6FBBEB_C865_C26B_41E5_90AC3E222467",
   "class": "PanoramaMapLocation",
   "angle": 93.27,
   "y": 400.91,
   "x": 1647.79
  }
 ],
 "id": "panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -34.84,
   "distance": 1,
   "backwardYaw": 2.48,
   "panorama": "this.panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 50.69,
   "distance": 1,
   "backwardYaw": -36.79,
   "panorama": "this.panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_D07FE65B_C866_C5AB_41B8_CA65B60570AF",
  "this.overlay_D02C77C8_C867_C294_41D7_BDC22F44576D"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 61.88,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FD373BEC_C826_426C_4198_F277C8DF2344",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 9.12,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FD917B88_C826_4294_4191_0BD44FB86683",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -169.26,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FC524B24_C826_439C_41E2_C199E3793416",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -3.89,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FD498C50_C826_45B5_41E2_5582F3BF894D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -43.5,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FD45AC47_C826_459B_41B3_08F7B2E2D5CE",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -165.65,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FC151AA8_C826_4295_41E0_2DF5709AF37C",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "class": "MapPlayListItem",
   "media": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_F0573A02_C826_4D95_41CE_4949E7B1828A"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  "this.PanoramaPlayListItem_F055AA02_C826_4D95_41E5_819731A520AD",
  "this.PanoramaPlayListItem_F0557A02_C826_4D95_41E3_FD76E82DB4EF",
  "this.PanoramaPlayListItem_F0540A11_C826_4DB7_41E6_4F7AC0F20D5B",
  "this.PanoramaPlayListItem_F053AA11_C826_4DB7_41DC_7473B8C00C84",
  "this.PanoramaPlayListItem_F0537A11_C826_4DB7_41D8_E6CF27BDB395",
  "this.PanoramaPlayListItem_F0520A11_C826_4DB7_41D5_1588CD62143F",
  "this.PanoramaPlayListItem_F0518A11_C826_4DB7_41D8_5023DC83E4DA",
  "this.PanoramaPlayListItem_F0515A11_C826_4DB7_41E6_017B57C350E8",
  "this.PanoramaPlayListItem_F050CA11_C826_4DB7_41CF_1486E7BF46BC",
  "this.PanoramaPlayListItem_F05FBA11_C826_4DB7_41D8_3277C8EC1531",
  "this.PanoramaPlayListItem_F05F0A11_C826_4DB7_41E1_5F50E5792768",
  "this.PanoramaPlayListItem_F05EBA11_C826_4DB7_41D6_36CC5ED7DE96",
  "this.PanoramaPlayListItem_F05E7A11_C826_4DB7_41E0_73B6954998D8",
  "this.PanoramaPlayListItem_F05D3A11_C826_4DB7_41E0_A18E07AE7859",
  "this.PanoramaPlayListItem_F05CBA11_C826_4DB7_41B9_92D6CC3A7F77",
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_camera"
  },
  "this.PanoramaPlayListItem_F05B4A11_C826_4DB7_41C5_432FA1E53851",
  "this.PanoramaPlayListItem_F05ACA11_C826_4DB7_41A8_6E5F65676BE1",
  "this.PanoramaPlayListItem_F05A6A11_C826_4DB7_41CE_9686F89D23F9",
  "this.PanoramaPlayListItem_F0593A11_C826_4DB7_41D9_E4B6DC001A65",
  "this.PanoramaPlayListItem_F058EA11_C826_4DB7_4187_496EA6B97CE3",
  "this.PanoramaPlayListItem_F059CA11_C826_4DB7_41C1_42C001FD855B",
  "this.PanoramaPlayListItem_F0597A11_C826_4DB7_41DC_CF15DCE25699",
  "this.PanoramaPlayListItem_F0583A11_C826_4DB7_41E4_FB018F483481",
  "this.PanoramaPlayListItem_F1A7CA11_C826_4DB7_41E6_40B1ED795149",
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_camera"
  },
  "this.PanoramaPlayListItem_F1A6EA11_C826_4DB7_41C6_0AF93562629A",
  "this.PanoramaPlayListItem_F1A5BA11_C826_4DB7_41D3_43BD1CEC9509",
  "this.PanoramaPlayListItem_F1A57A11_C826_4DB7_41E1_F2D38AF99A26",
  "this.PanoramaPlayListItem_F1A4EA11_C826_4DB7_41D2_44F499FF8E41",
  "this.PanoramaPlayListItem_FC383A8E_C826_42AD_41E0_0E09CF1D63EB",
  "this.PanoramaPlayListItem_FC387A8E_C826_42AD_41C3_FCD86A39CE85"
 ],
 "id": "mainPlayList"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "04_Distribuidor 01",
 "mapLocations": [
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": 180,
   "y": 665.37,
   "x": 406.86
  }
 ],
 "id": "panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -25.34,
   "distance": 1,
   "backwardYaw": 161.68,
   "panorama": "this.panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -170.23,
   "distance": 1,
   "backwardYaw": 92.41,
   "panorama": "this.panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_DA17AE1A_C85E_45B5_41E4_C6574C2F70D6",
  "this.overlay_DAAEFB84_C85E_C29D_41D1_D0C986BA2BFF"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "05_Box",
 "mapLocations": [
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": 94.76,
   "y": 675.42,
   "x": 501.93
  }
 ],
 "id": "panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 161.68,
   "distance": 1,
   "backwardYaw": -25.34,
   "panorama": "this.panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_DACA140E_C85F_C5AC_41E2_FE77CC1B571C",
  "this.overlay_DAF55040_C85E_3D94_41E4_79FDB15F4881"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -177.52,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FE633CF6_C826_467C_41B2_3E79BB321556",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 56.14,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FEDA1CC4_C826_469C_41B0_7CDB57209BAE",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "28- Dormitorio 08",
 "mapLocations": [
  {
   "map": "this.map_EE6FBBEB_C865_C26B_41E5_90AC3E222467",
   "class": "PanoramaMapLocation",
   "angle": -87.27,
   "y": 504.13,
   "x": 308.06
  }
 ],
 "id": "panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 136.5,
   "distance": 1,
   "backwardYaw": 23.6,
   "panorama": "this.panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_D7BCBC12_C86A_45B5_41E3_D24EACDED156"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_t.jpg",
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_FDB4D02E_C8E7_DDEC_41D4_E5B2B9644490.ogg",
  "mp3Url": "media/audio_FDB4D02E_C8E7_DDEC_41D4_E5B2B9644490.mp3"
 },
 "id": "audio_FDB4D02E_C8E7_DDEC_41D4_E5B2B9644490",
 "data": {
  "label": "videoplayback"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -28.13,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FC476B0B_C826_43AB_41E1_06202CD83B1F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 60.13,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FC4FCB0B_C826_43AB_41CB_C7DD6C7315A0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": -11.07,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FD8F1B6F_C826_426B_41BE_8E42A5F6D38F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 103.34,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FC721AF2_C826_4274_41D3_FA32789BA0A3",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 164.04,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FE3EBCDD_C826_46AF_41D6_B52134DC062A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 176.9,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FEC40CB4_C826_46FD_41C0_6EDB82866C7D",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "09- Distribuidor 02",
 "mapLocations": [
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": 93.37,
   "y": 723.77,
   "x": 1220.88
  }
 ],
 "id": "panorama_C24D0EE2_C82A_4295_41E8_8AB076991670",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -175.75,
   "distance": 1,
   "backwardYaw": 14.35,
   "panorama": "this.panorama_C249FB0A_C82A_4394_41C2_8AA251027069"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -2.14,
   "distance": 1,
   "backwardYaw": -29.37,
   "panorama": "this.panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -10.6,
   "distance": 1,
   "backwardYaw": -80.1,
   "panorama": "this.panorama_C24B96F4_C82A_427C_41E4_8260853C24B8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -26.43,
   "distance": 1,
   "backwardYaw": -17.83,
   "panorama": "this.panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_DCC745C4_C866_469D_41E0_E5FC247F81CF",
  "this.overlay_DC9D704F_C866_3DAB_41D6_6BC5EEDF2227",
  "this.overlay_DD6DDDF4_C866_C67C_41E5_45A17A79684C",
  "this.overlay_DD3DEED8_C866_C2B4_41BC_896E1C786A4E"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "32- Escalera exterior",
 "mapLocations": [
  {
   "map": "this.map_EE6FBBEB_C865_C26B_41E5_90AC3E222467",
   "class": "PanoramaMapLocation",
   "angle": 270,
   "y": 261.47,
   "x": 710.19
  },
  {
   "map": "this.map_E9389E8E_C865_C2AC_41E4_DF7359512092",
   "class": "PanoramaMapLocation",
   "angle": -86.82,
   "y": 245.87,
   "x": 595.59
  }
 ],
 "id": "panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 1.31,
   "distance": 1,
   "backwardYaw": -15.96,
   "panorama": "this.panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -76.66,
   "distance": 1,
   "backwardYaw": -40.55,
   "panorama": "this.panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_D2FDF8AA_C87D_CE95_41CD_D958AAABB5F3",
  "this.overlay_D2BDF786_C87E_429D_41E2_10211023D8D7"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "26- Ba\u00f1o 04",
 "mapLocations": [
  {
   "map": "this.map_EE6FBBEB_C865_C26B_41E5_90AC3E222467",
   "class": "PanoramaMapLocation",
   "angle": -82.65,
   "y": 358.38,
   "x": 876.07
  }
 ],
 "id": "panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -82.26,
   "distance": 1,
   "backwardYaw": -39.58,
   "panorama": "this.panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_D6190E96_C866_42BC_41E1_CE7FFF0C4EFB"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 142.89,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FDEADBA1_C826_4297_41E3_3103E0D97B3F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 5.22,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FE57FD32_C826_47F4_41E5_8A6E16EC8DD9",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 100,
  "yaw": 97.74,
  "pitch": 0
 },
 "manualRotationSpeed": 1086,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_FFE19DCE_C826_46AD_41E3_44C5118BD13A",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "24- Cocina PA",
 "mapLocations": [
  {
   "map": "this.map_EE6FBBEB_C865_C26B_41E5_90AC3E222467",
   "class": "PanoramaMapLocation",
   "angle": 94.57,
   "y": 646.83,
   "x": 749.68
  }
 ],
 "id": "panorama_C24A6D62_C82A_C794_41E8_9CD609938D46",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -8.66,
   "distance": 1,
   "backwardYaw": -171.01,
   "panorama": "this.panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -139.54,
   "distance": 1,
   "backwardYaw": 11.24,
   "panorama": "this.panorama_C24888F4_C82A_CE7C_41CE_898858C693F2"
  }
 ],
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_D5BD5C8C_C866_46AD_41C3_D09BBA727E68",
  "this.overlay_D64CB80C_C866_CDAD_41C4_35065A3F0A7A"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_t.jpg",
 "hfovMax": 130
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "progressBarBorderRadius": 4,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 10,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 2,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#993300",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 1,
 "class": "ViewerArea",
 "progressHeight": 20,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 4,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 10,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#AAAAAA",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 20,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_5645B517_5EBA_61DA_41CE_5170204AEC9E",
 "backgroundOpacity": 0,
 "width": 360,
 "scrollBarVisible": "rollOver",
 "overflow": "hidden",
 "children": [
  "this.IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
  "this.IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76",
  "this.IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B",
  "this.IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C",
  "this.Container_5645B517_5EBA_61DA_41AF_FC7FEB37EBCD",
  "this.IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40",
  "this.IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF",
  "this.IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5",
  "this.IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "96.479%",
 "minWidth": 360,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 4,
 "borderSize": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container31983"
 },
 "shadow": false
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "left": "0%",
 "width": "40%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "progressBarBorderRadius": 4,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 10,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 2,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "30%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#993300",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "class": "ViewerArea",
 "progressHeight": 20,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 4,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#AAAAAA",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "data": {
  "name": "MapViewer"
 },
 "playbackBarHeight": 20,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31994"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5, this.camera_FEF0BC9C_C826_46AC_41D4_EC76BE8AEE8C); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.48,
   "hfov": 5.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.77
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E48950_C86E_CFB5_41E3_8D2DC04C66EF",
   "pitch": 21.77,
   "yaw": 2.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.37,
   "distance": 100
  }
 ],
 "id": "overlay_D19886B4_C87A_42FC_41E6_D75F2E687482",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9, this.camera_FEC40CB4_C826_46FD_41C0_6EDB82866C7D); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.01,
   "hfov": 5.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.95
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D79B5950_C86E_CFB5_41D7_7C6D3341DBC0",
   "pitch": -12.95,
   "yaw": -72.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.64,
   "distance": 100
  }
 ],
 "id": "overlay_D25C9555_C87A_47BF_41E3_3CDDA609611D",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9, this.camera_FDD6CBCA_C826_4295_41D7_47FCF8DD0415); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.68,
   "hfov": 5.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E1F94A_C86E_CF95_41DB_BC036DB67476",
   "pitch": -7,
   "yaw": -9.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.74,
   "distance": 100
  }
 ],
 "id": "overlay_D003F72E_C865_C3ED_41D1_B5C5C40B34C3",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC, this.camera_FC49BB1B_C826_43AB_41E6_B954705893C4); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.51,
   "hfov": 5.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.31
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7ED9946_C86E_CF9D_41C1_909B7EC74414",
   "pitch": 1.31,
   "yaw": 131.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.79,
   "distance": 100
  }
 ],
 "id": "overlay_DAD78646_C85A_459D_41C7_FE5C84359BCF",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C249FB0A_C82A_4394_41C2_8AA251027069, this.camera_FC4FCB0B_C826_43AB_41CB_C7DD6C7315A0); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.52,
   "hfov": 5.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.44
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7EC4946_C86E_CF9D_41D8_AA74A656F0FA",
   "pitch": -0.44,
   "yaw": 79.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.79,
   "distance": 100
  }
 ],
 "id": "overlay_DB738AD0_C85A_42B4_41D2_7A2FA099F45E",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E, this.camera_FC476B0B_C826_43AB_41E1_06202CD83B1F); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.55,
   "hfov": 5.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.73
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7EC0946_C86E_CF9D_41D6_6F928E26E651",
   "pitch": 0.73,
   "yaw": 33.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.79,
   "distance": 100
  }
 ],
 "id": "overlay_DCC3821E_C85A_3DAD_41E8_DA9C7A48FC53",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 346.39,
  "x": 1655.12,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_1.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_1_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 346.87,
  "x": 1655.56,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E460537C_C82E_C26D_41E4_796432864658",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 567.12,
  "x": 1723.8,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_2.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_2_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 567.61,
  "x": 1724.24,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E561A424_C82A_459C_4199_A240A73041AF",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 377.23,
  "x": 1165.55,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_3.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_3_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 377.48,
  "x": 1166.06,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E46C1AC2_C82A_4295_41B2_285FF690B393",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 586.28,
  "x": 1257.58,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_4.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_4_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 586.61,
  "x": 1258.05,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E40CE590_C82B_C6B4_41E6_5C78CDE0B8A1",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 613.84,
  "x": 1546.98,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_5.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_5_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 614.3,
  "x": 1547.41,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E5303AAC_C82A_C2ED_41D8_2FD931E3632B",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 486.77,
  "x": 1624.53,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_6.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_6_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 487.16,
  "x": 1624.87,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E48B039E_C825_C2AD_41E2_27B8650EE9C2",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 640.23,
  "x": 1368.76,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_7.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_7_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 640.61,
  "x": 1369.12,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E669BD62_C826_4795_418B_7352777D7B0E",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 695.82,
  "x": 1200.58,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_8.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_8_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 696.29,
  "x": 1200.99,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E5AF2C7C_C826_C66D_41C7_E3B0EBB382DC",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 646.07,
  "x": 816.35,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_9.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_9_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 646.45,
  "x": 816.64,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E7962062_C827_FD95_41E6_1D63E5590A60",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 399.18,
  "x": 747.45,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_10.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_10_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 399.55,
  "x": 747.95,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_F806753A_C826_47F5_41D2_6DBCC24EC6A4",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 334.72,
  "x": 456.64,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_11.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_11_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 335.17,
  "x": 457.13,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E6CA87F2_C825_C274_41D9_E9480F77F986",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 467.85,
  "x": 415.77,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_12.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_12_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 468.24,
  "x": 416.21,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E667DD3E_C8DA_47EC_4188_4E3A8764B51E",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 647.47,
  "x": 481.64,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_13.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_13_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 647.92,
  "x": 481.97,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E7ACEAE6_C8DA_C29D_41DF_E73DBD1BBB0A",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 637.43,
  "x": 386.57,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_14.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_14_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 637.69,
  "x": 386.98,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E7EBBE48_C8DA_4595_41E5_B842A5C615FB",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 428.38,
  "x": 256.7,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_15.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_15_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 428.7,
  "x": 256.99,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_F863FB16_C8DA_C3BD_41D3_E913056779E1",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 295.47,
  "x": 227.27,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_16.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_16_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 295.79,
  "x": 227.69,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_F85C916A_C8DD_DF94_41D5_FD89DFD2B907",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 217.93,
  "x": 575.3,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_17.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_17_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 218.33,
  "x": 575.58,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_F99AA62A_C8DE_4594_41E6_DB5ACAA15159",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 489.58,
  "x": 1814.42,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_18.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E9389E8E_C865_C2AC_41E4_DF7359512092_HS_18_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 490.08,
  "x": 1814.78,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_F9EBA786_C8DE_C29D_41D8_DF0343A4ACF8",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9, this.camera_FFBC6D7C_C826_466D_41E2_937D7EF427C5); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.38,
   "hfov": 5.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.09
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E2E948_C86E_CF95_41E1_29F2AAC91D78",
   "pitch": -5.09,
   "yaw": 13.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.76,
   "distance": 100
  }
 ],
 "id": "overlay_DE6E28B0_C86A_CEF5_41E7_ADA0EAC27F2B",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84, this.camera_FFAB5D64_C826_479D_41E9_0C3BDB1EB6DB); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.87,
   "hfov": 5.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.58
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E2A948_C86E_CF95_41E3_CDB0A49F3CE2",
   "pitch": -8.58,
   "yaw": 151.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.72,
   "distance": 100
  }
 ],
 "id": "overlay_DD063970_C86A_4E75_41CE_749CDD054B11",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24D0EE2_C82A_4295_41E8_8AB076991670, this.camera_FD6A7C2D_C826_45EF_41DA_39EE517D2425); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.1,
   "hfov": 5.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.7
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E27948_C86E_CF95_419B_D43F6F4674D2",
   "pitch": -3.7,
   "yaw": -80.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.77,
   "distance": 100
  }
 ],
 "id": "overlay_DD2FA7B3_C86B_C2FB_41CD_B4F0C264B6CA",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24888F4_C82A_CE7C_41CE_898858C693F2, this.camera_FD498C50_C826_45B5_41E2_5582F3BF894D); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.6,
   "hfov": 5.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.34
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E4C94F_C86E_CFAB_418B_B7267E797153",
   "pitch": -8.34,
   "yaw": 158.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.73,
   "distance": 100
  }
 ],
 "id": "overlay_D71D160C_C865_C5AD_41E3_9104814C31A0",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22, this.camera_FD45AC47_C826_459B_41B3_08F7B2E2D5CE); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.6,
   "hfov": 5.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.36
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E4894F_C86E_CFAB_41DF_9B92B918E14B",
   "pitch": -7.36,
   "yaw": 23.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.74,
   "distance": 100
  }
 ],
 "id": "overlay_D7DD9D68_C865_C795_41E6_4A17BE4257DB",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42, this.camera_FD7F5C37_C826_45FB_41E6_A930FAC1D245); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.11,
   "hfov": 5.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.33
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D79B494F_C86E_CFAB_41E2_DEF9525D0F85",
   "pitch": -8.33,
   "yaw": -37.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.73,
   "distance": 100
  }
 ],
 "id": "overlay_E87EF649_C86A_4597_41D6_F49968A8657B",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.39,
   "hfov": 5.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.4
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D79B094F_C86E_CFAB_41E0_BA35F7320443",
   "pitch": -7.4,
   "yaw": -161.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.74,
   "distance": 100
  }
 ],
 "id": "overlay_E85F026C_C86B_C26D_41E2_BAD61676D2F4",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31984"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31995"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC, this.camera_FDBD8B56_C826_43BC_41DE_7D3FBE752C94); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -152.94,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.66
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E1294A_C86E_CF95_41D8_7B50D137145A",
   "pitch": -1.66,
   "yaw": -152.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_D06DE580_C86A_4694_41DF_566A1D16F9BB",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 621.02,
  "x": 717.24,
  "width": 64.88,
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 64,
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.63
 },
 "map": {
  "width": 64.88,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 20,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 623.27,
  "x": 719.48,
  "offsetY": 0,
  "height": 51.63,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_EFB595C2_C82D_C694_41B0_574E6A0F5F6B",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 661.65,
  "x": 459.18,
  "width": 64.88,
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_1.png",
     "class": "ImageResourceLevel",
     "width": 64,
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.63
 },
 "map": {
  "width": 64.88,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_1_map.gif",
     "class": "ImageResourceLevel",
     "width": 20,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 662.66,
  "x": 460.15,
  "offsetY": 0,
  "height": 51.63,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_EEB737C6_C82A_C29C_41A4_FCC6C1573A75",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 670.09,
  "x": 262.9,
  "width": 64.88,
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_2.png",
     "class": "ImageResourceLevel",
     "width": 64,
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.63
 },
 "map": {
  "width": 64.88,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_2_map.gif",
     "class": "ImageResourceLevel",
     "width": 20,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 671.07,
  "x": 263.94,
  "offsetY": 0,
  "height": 51.63,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_EF4F4B7A_C82B_C275_41E1_F90A0C2C48F2",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 478.31,
  "x": 275.62,
  "width": 64.88,
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_3.png",
     "class": "ImageResourceLevel",
     "width": 64,
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.63
 },
 "map": {
  "width": 64.88,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_3_map.gif",
     "class": "ImageResourceLevel",
     "width": 20,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 479.3,
  "x": 276.55,
  "offsetY": 0,
  "height": 51.63,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_EF56D5D8_C82A_C6B4_41E3_0B2DE23D473E",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 311.75,
  "x": 277.42,
  "width": 64.88,
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_4.png",
     "class": "ImageResourceLevel",
     "width": 64,
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.63
 },
 "map": {
  "width": 64.88,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_4_map.gif",
     "class": "ImageResourceLevel",
     "width": 20,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 312.76,
  "x": 278.42,
  "offsetY": 0,
  "height": 51.63,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_EF27843E_C82A_45EC_418A_937F0D1C3CF8",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 573.64,
  "x": 463.34,
  "width": 64.88,
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_5.png",
     "class": "ImageResourceLevel",
     "width": 64,
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.63
 },
 "map": {
  "width": 64.88,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_5_map.gif",
     "class": "ImageResourceLevel",
     "width": 20,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 574.36,
  "x": 464.35,
  "offsetY": 0,
  "height": 51.63,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E0D9684C_C83A_CDAD_4198_08E15A4295FE",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 339.32,
  "x": 632.05,
  "width": 64.88,
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_6.png",
     "class": "ImageResourceLevel",
     "width": 64,
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.63
 },
 "map": {
  "width": 64.88,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_6_map.gif",
     "class": "ImageResourceLevel",
     "width": 20,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 340.32,
  "x": 632.99,
  "offsetY": 0,
  "height": 51.63,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E0A5FB8D_C825_C2AC_41DE_74DD123092CC",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 444.89,
  "x": 684.04,
  "width": 64.88,
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_7.png",
     "class": "ImageResourceLevel",
     "width": 64,
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.63
 },
 "map": {
  "width": 64.88,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_7_map.gif",
     "class": "ImageResourceLevel",
     "width": 20,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 445.9,
  "x": 684.85,
  "offsetY": 0,
  "height": 51.63,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E2D6FF30_C826_43F5_41E0_E5405D274B2B",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 332.57,
  "x": 843.63,
  "width": 64.88,
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_8.png",
     "class": "ImageResourceLevel",
     "width": 64,
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.63
 },
 "map": {
  "width": 64.88,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_8_map.gif",
     "class": "ImageResourceLevel",
     "width": 20,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 333.55,
  "x": 844.61,
  "offsetY": 0,
  "height": 51.63,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E1E945F0_C826_4675_41CF_7D951A217F7B",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 627.32,
  "x": 1210.07,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_9.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_9_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 627.71,
  "x": 1210.59,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E3674758_C82A_43B5_41DC_78849785FC7D",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 655.12,
  "x": 1620.07,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_10.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_10_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 655.52,
  "x": 1620.56,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E45414DE_C82D_C6AC_41D9_9394A6EB34DB",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 372.97,
  "x": 1627.5,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_11.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_11_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 373.48,
  "x": 1627.96,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E52B09C2_C82D_CE94_41DC_5C4CA2F02417",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": false,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 233.53,
  "x": 689.89,
  "width": 40.59,
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_12.png",
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.88
 },
 "map": {
  "width": 40.59,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_EE6FBBEB_C865_C26B_41E5_90AC3E222467_HS_12_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 22
    }
   ],
   "class": "ImageResource"
  },
  "y": 233.98,
  "x": 690.34,
  "offsetY": 0,
  "height": 55.88,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_FAD89B30_C8DD_C3F4_41E7_F15AC3C2FAF1",
 "data": {
  "label": "Imagen"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5, this.camera_FC5C4B33_C826_43FB_41E7_B04AFCCE794D); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -36.79,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.63
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E0394B_C86E_CFAB_41CD_B44C9DDF0232",
   "pitch": -2.63,
   "yaw": -36.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_D17C74AF_C866_46EB_41DC_570B6C92D957",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8, this.camera_FC524B24_C826_439C_41E2_C199E3793416); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.82,
   "hfov": 5.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.27
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E0F94B_C86E_CFAB_41B0_40181657CC25",
   "pitch": -1.27,
   "yaw": 155.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.79,
   "distance": 100
  }
 ],
 "id": "overlay_D182ADD8_C87A_46B4_41C8_D1D759AF37B7",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24D0EE2_C82A_4295_41E8_8AB076991670, this.camera_FD036C06_C826_459D_41B5_C9A53E2FB38C); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.35,
   "hfov": 5.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.12
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7ECF947_C86E_CF9B_41DA_38DB40EE8952",
   "pitch": -4.12,
   "yaw": 14.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.77,
   "distance": 100
  }
 ],
 "id": "overlay_DBB1B344_C866_439C_41DA_FF2F45BF02A0",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84, this.camera_FD09EC06_C826_459D_41BD_E08A27A0577E); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -119.87,
   "hfov": 5.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.64
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7ECA947_C86E_CF9B_41CB_0D8508F6055B",
   "pitch": -6.64,
   "yaw": -119.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.75,
   "distance": 100
  }
 ],
 "id": "overlay_DC11C6EA_C866_C294_41E2_C7A0C9C40E4E",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F, this.camera_FDEADBA1_C826_4297_41E3_3103E0D97B3F); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.5,
   "hfov": 5.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.44
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E4D950_C86E_CFB5_41E4_D37BF414FBE3",
   "pitch": -12.44,
   "yaw": -103.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.65,
   "distance": 100
  }
 ],
 "id": "overlay_D73650A0_C86D_DE95_41DB_58DE8D4390DC",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC, this.camera_FDB59B56_C826_43BC_41DE_0FA74633191E); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.86,
   "hfov": 5.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.76
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7EED945_C86E_CF9F_41DD_7FF3A67C0A25",
   "pitch": -7.76,
   "yaw": -123.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.73,
   "distance": 100
  }
 ],
 "id": "overlay_DA1412D7_C85D_C2BB_41DB_1F658B6D14CA",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9, this.camera_FF9FEDAE_C826_46ED_41D6_CF5C15100637); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -110.37,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.6
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E5994E_C86E_CFAD_41B6_FDCCE10CA3B0",
   "pitch": -2.6,
   "yaw": -110.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_D62C4772_C867_C274_41D8_92875A171D02",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5, this.camera_FFE19DCE_C826_46AD_41E3_44C5118BD13A); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.58,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.63
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E4494E_C86E_CFAD_41D7_EF15DB3953DA",
   "pitch": -1.63,
   "yaw": -39.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_D69385DA_C867_C6B5_41E4_9EAACDBD69F0",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC, this.camera_FF8E5D96_C826_46BC_41E2_9271AF5B8D4E); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.97,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.5
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7EDA946_C86E_CF9D_41E4_673D22D3C3AF",
   "pitch": -3.5,
   "yaw": -15.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_DA741248_C85D_DD95_41D9_492D022735A4",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227, this.camera_FC68BAE9_C826_4297_41D0_5A483200B9D4); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.27,
   "hfov": 5.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.56
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E7394C_C86E_CFAD_41C7_4927A473B65E",
   "pitch": -8.56,
   "yaw": 23.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.72,
   "distance": 100
  }
 ],
 "id": "overlay_D4B3045E_C87B_C5AD_41DB_04D06A8EEBCF",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24888F4_C82A_CE7C_41CE_898858C693F2, this.camera_FC7DDB01_C826_4397_41D1_81088C3681D3); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.93,
   "hfov": 5.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.06
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E7F94C_C86E_CFAD_41D4_852D5640E69D",
   "pitch": -12.06,
   "yaw": 168.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.66,
   "distance": 100
  }
 ],
 "id": "overlay_D56F0BF4_C87B_C27D_41E3_41E32C0535D7",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9, this.camera_FC721AF2_C826_4274_41D3_FA32789BA0A3); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.55,
   "hfov": 5.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.7
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E7A94C_C86E_CFAD_41CC_9E004CBE4E6E",
   "pitch": -10.7,
   "yaw": -40.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.69,
   "distance": 100
  }
 ],
 "id": "overlay_D58C8406_C87A_459D_41DB_D9A3690D75E3",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24D0EE2_C82A_4295_41E8_8AB076991670, this.camera_FED6FCB4_C826_46FD_41DD_56C8619016E5); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.37,
   "hfov": 5.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.35
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E22948_C86E_CF95_41D0_360431A78DAB",
   "pitch": -5.35,
   "yaw": -29.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.76,
   "distance": 100
  }
 ],
 "id": "overlay_DD214BFE_C86A_426C_41AE_EF92CE02A21D",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC, this.camera_FDFB3BBA_C826_42F5_41CE_6135C6E3DE28); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.96,
   "hfov": 4.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.35
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DA94FC82_C826_C694_41D2_FBED655CC96C",
   "pitch": -7.35,
   "yaw": -15.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.73,
   "distance": 100
  }
 ],
 "id": "overlay_C69CAFBA_C83A_42F5_41B6_405CEE025FE8",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC, this.camera_FDC1FBBA_C826_42F5_41CD_42D4E4BEBBA1); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.58,
   "hfov": 5.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.87
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DA938C82_C826_C694_41DA_C526C0CA2513",
   "pitch": -6.87,
   "yaw": 18.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.75,
   "distance": 100
  }
 ],
 "id": "overlay_C7257356_C83A_43BD_41DD_14840A3857DE",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64, this.camera_FD5E6C60_C826_4594_41D5_82C4FE0981B3); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.74,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.4
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E0B94B_C86E_CFAB_41E4_323720337E00",
   "pitch": -3.4,
   "yaw": 10.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_D095791A_C866_CFB5_41E8_47582113E400",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24A6D62_C82A_C794_41E8_9CD609938D46, this.camera_FEA00C6A_C826_4595_41D6_3C6074EE39C8); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.01,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.66
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E7694B_C86E_CFAB_41D6_8C8B8A528682",
   "pitch": -1.66,
   "yaw": -171.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_D1B7388C_C87A_4EAD_41A6_9586D8C6B702",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562, this.camera_FE46DD0F_C826_47AB_417E_9CD20AA865FA); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.6,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.38
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E19949_C86E_CF97_41E1_36EEB1061071",
   "pitch": -2.38,
   "yaw": 102.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_DF5E7F61_C86A_4397_41C9_FE36EB75C0C0",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9, this.camera_FE5A7D4A_C826_4795_41DC_772047026566); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -118.12,
   "hfov": 5.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.42
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E04949_C86E_CF97_41BF_D2BBE5564B07",
   "pitch": -7.42,
   "yaw": -118.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.74,
   "distance": 100
  }
 ],
 "id": "overlay_DF104406_C86A_459C_41DE_7E79E4CDACAB",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77, this.camera_FE57FD32_C826_47F4_41E5_8A6E16EC8DD9); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.14,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.38
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E0194A_C86E_CF95_41D7_720573B9E3EF",
   "pitch": -2.38,
   "yaw": 79.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_DF857BC8_C86A_C294_41E8_B345B06946E5",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24888F4_C82A_CE7C_41CE_898858C693F2, this.camera_FEB21C6A_C826_4595_41DC_CEFAD0CC401C); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.2,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.95
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D79B8951_C86E_CFB7_41B5_7A0CC57610C3",
   "pitch": -2.95,
   "yaw": 165.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_D7EAE11E_C86E_3FAC_41E7_E75A6C2E4B91",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31989"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31991"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31987"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31986"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31990"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31992"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31985"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31993"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC, this.camera_FD373BEC_C826_426C_4198_F277C8DF2344); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.23,
   "hfov": 5.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.44
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E16948_C86E_CF95_41B3_A79FAC5970EF",
   "pitch": -0.44,
   "yaw": 18.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.79,
   "distance": 100
  }
 ],
 "id": "overlay_DE1A68F0_C86E_CE75_41B0_888362417D88",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE, this.camera_FD221BE4_C826_429D_41B9_1497B0621C87); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.1,
   "hfov": 5.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.24
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E15949_C86E_CF97_41A3_1DB6A390BA68",
   "pitch": -0.24,
   "yaw": -3.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.79,
   "distance": 100
  }
 ],
 "id": "overlay_DDBCB4CA_C86E_4694_41CD_226F508DF83F",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623, this.camera_FD3E6BFC_C826_426D_41DC_80486B53396F); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.57,
   "hfov": 5.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.82
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E1E949_C86E_CF97_41E1_873309CBC3E5",
   "pitch": -0.82,
   "yaw": -26.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.79,
   "distance": 100
  }
 ],
 "id": "overlay_DE730DF1_C86E_4677_41E3_738EFD84ED32",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E, this.camera_FDDB8BD4_C826_42BD_41E0_122F7123BF71); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.45,
   "hfov": 5.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.02
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E1A949_C86E_CF97_41D3_D8099D38C016",
   "pitch": -1.02,
   "yaw": -165.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.79,
   "distance": 100
  }
 ],
 "id": "overlay_DE35DAC2_C86F_C294_41DB_4014E706ED5F",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC, this.camera_FDA45B3D_C826_43EF_41E2_68D379D21846); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.78,
   "hfov": 5.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.27
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E1794A_C86E_CF95_41DA_6F299F0E74F9",
   "pitch": 15.27,
   "yaw": -174.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.58,
   "distance": 100
  }
 ],
 "id": "overlay_D05FB4FC_C86A_C66D_41B3_3126C4E97F70",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24D0EE2_C82A_4295_41E8_8AB076991670, this.camera_FDADCB3D_C826_43EF_41DB_11FC6DC3F160); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.83,
   "hfov": 5.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.11
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E38948_C86E_CF95_41A8_F4F79B505B0A",
   "pitch": -4.11,
   "yaw": -17.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.77,
   "distance": 100
  }
 ],
 "id": "overlay_DDCD6B8A_C86B_C294_41E3_34D77777AC97",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9, this.camera_FD8F1B6F_C826_426B_41BE_8E42A5F6D38F); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.46,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.58
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E6794C_C86E_CFAD_41C2_3656AF7EC9B7",
   "pitch": -3.58,
   "yaw": -62.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_D354C788_C87F_C295_41AF_A8DF65654A94",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B, this.camera_FD917B88_C826_4294_4191_0BD44FB86683); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -111.92,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.45
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E6394D_C86E_CFAF_41C2_D051D703708B",
   "pitch": -3.45,
   "yaw": -111.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_D3D05BD7_C87E_42BB_41E4_C499D61597BC",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24A6D62_C82A_C794_41E8_9CD609938D46, this.camera_FD994B88_C826_4294_41CB_F4014852338B); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.24,
   "hfov": 5.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.02
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E6F94D_C86E_CFAF_41A4_F4A4E5127632",
   "pitch": -7.02,
   "yaw": 11.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.74,
   "distance": 100
  }
 ],
 "id": "overlay_D31A5006_C87E_7D9C_41BF_6AACBF0D8B06",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B, this.camera_FDE28B97_C826_42BB_41E3_EF2CE25B0A35); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.03,
   "hfov": 5.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.73
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E6B94D_C86E_CFAF_41D0_DA3E76F70A14",
   "pitch": -9.73,
   "yaw": 95.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.7,
   "distance": 100
  }
 ],
 "id": "overlay_D46D5BFB_C87D_C26B_41E2_53EEBDFC4544",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F, this.camera_FD897B7F_C826_426B_41D5_563CC275E087); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.11,
   "hfov": 5.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.15
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E5494D_C86E_CFAF_41E4_09BF3802D914",
   "pitch": -9.15,
   "yaw": 176.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.71,
   "distance": 100
  }
 ],
 "id": "overlay_D47207B6_C87A_C2FC_41CA_27334DB6066C",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12, this.camera_FE3EBCDD_C826_46AF_41D6_B52134DC062A); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.28,
   "hfov": 5.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.87
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DA925C82_C826_C694_41E6_93624C567677",
   "pitch": -6.87,
   "yaw": -116.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.75,
   "distance": 100
  }
 ],
 "id": "overlay_D8A5688E_C82A_CEAC_41C1_848248DCEB11",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24CB302_C82A_4394_41E5_D1CC369248AA, this.camera_FE2C6CCE_C826_46AC_41C1_35E90A46232C); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -132.24,
   "hfov": 5.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.46
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DA920C82_C826_C694_41DA_79FB2BFF8EA3",
   "pitch": -8.46,
   "yaw": -132.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.72,
   "distance": 100
  }
 ],
 "id": "overlay_D84138F8_C82B_CE75_41C3_A94178D08C7E",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C2495705_C82A_439F_41E8_18F81B90FD9B, this.camera_FEDA1CC4_C826_469C_41B0_7CDB57209BAE); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.08,
   "hfov": 5.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.69
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_EEB09CDF_C85A_46AB_41C3_50C580A185E1",
   "pitch": -7.69,
   "yaw": -61.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.73,
   "distance": 100
  }
 ],
 "id": "overlay_DA9ACAA4_C82E_429C_41C5_C4FC24EC5E21",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84, this.camera_FE0FACE6_C826_469D_41E8_1D062884A772); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.34,
   "hfov": 5.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.75
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DA92BC82_C826_C694_41D2_9B20647C2ED3",
   "pitch": -4.75,
   "yaw": -2.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.77,
   "distance": 100
  }
 ],
 "id": "overlay_D8D2E091_C82A_5EB7_41BF_6C7CAE67AA5D",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA, this.camera_FE10FCE6_C826_469D_41E6_29A31413DC48); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.41,
   "hfov": 5.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.27
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_DA917C82_C826_C694_41D3_F6EFF824CFBE",
   "pitch": -6.27,
   "yaw": 92.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.75,
   "distance": 100
  }
 ],
 "id": "overlay_DA895EC6_C82A_429D_4164_B395B5B547F5",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24888F4_C82A_CE7C_41CE_898858C693F2, this.camera_FD871B65_C826_439F_41A0_C759E1D3FA79); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.88,
   "hfov": 5.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.14
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E41950_C86E_CFB5_4176_1EA5D6210738",
   "pitch": -9.14,
   "yaw": -170.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.71,
   "distance": 100
  }
 ],
 "id": "overlay_D7E42304_C86E_439C_419D_53F2C5920F0C",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE, this.camera_FE633CF6_C826_467C_41B2_3E79BB321556); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.84,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.05
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E1B94A_C86E_CF95_41CD_F70529251686",
   "pitch": -2.05,
   "yaw": -34.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_D07FE65B_C866_C5AB_41B8_CA65B60570AF",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64, this.camera_FE740D00_C826_4794_41E6_EB37F41D723D); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.69,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.46
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E0794B_C86E_CFAB_41E8_62E0DAD6CDFA",
   "pitch": -1.46,
   "yaw": 50.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_D02C77C8_C867_C294_41D7_BDC22F44576D",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F055AA02_C826_4D95_41E5_819731A520AD, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "media": "this.panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12",
 "id": "PanoramaPlayListItem_F055AA02_C826_4D95_41E5_819731A520AD",
 "camera": "this.panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F0557A02_C826_4D95_41E3_FD76E82DB4EF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "media": "this.panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC",
 "id": "PanoramaPlayListItem_F0557A02_C826_4D95_41E3_FD76E82DB4EF",
 "camera": "this.panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F0540A11_C826_4DB7_41E6_4F7AC0F20D5B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "media": "this.panorama_C2495705_C82A_439F_41E8_18F81B90FD9B",
 "id": "PanoramaPlayListItem_F0540A11_C826_4DB7_41E6_4F7AC0F20D5B",
 "camera": "this.panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F053AA11_C826_4DB7_41DC_7473B8C00C84, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "media": "this.panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA",
 "id": "PanoramaPlayListItem_F053AA11_C826_4DB7_41DC_7473B8C00C84",
 "camera": "this.panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F0537A11_C826_4DB7_41D8_E6CF27BDB395, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "media": "this.panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1",
 "id": "PanoramaPlayListItem_F0537A11_C826_4DB7_41D8_E6CF27BDB395",
 "camera": "this.panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F0520A11_C826_4DB7_41D5_1588CD62143F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "media": "this.panorama_C24CB302_C82A_4394_41E5_D1CC369248AA",
 "id": "PanoramaPlayListItem_F0520A11_C826_4DB7_41D5_1588CD62143F",
 "camera": "this.panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F0518A11_C826_4DB7_41D8_5023DC83E4DA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "media": "this.panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84",
 "id": "PanoramaPlayListItem_F0518A11_C826_4DB7_41D8_5023DC83E4DA",
 "camera": "this.panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F0515A11_C826_4DB7_41E6_017B57C350E8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
 "media": "this.panorama_C249FB0A_C82A_4394_41C2_8AA251027069",
 "id": "PanoramaPlayListItem_F0515A11_C826_4DB7_41E6_017B57C350E8",
 "camera": "this.panorama_C249FB0A_C82A_4394_41C2_8AA251027069_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F050CA11_C826_4DB7_41CF_1486E7BF46BC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
 "media": "this.panorama_C24D0EE2_C82A_4295_41E8_8AB076991670",
 "id": "PanoramaPlayListItem_F050CA11_C826_4DB7_41CF_1486E7BF46BC",
 "camera": "this.panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F05FBA11_C826_4DB7_41D8_3277C8EC1531, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
 "media": "this.panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F",
 "id": "PanoramaPlayListItem_F05FBA11_C826_4DB7_41D8_3277C8EC1531",
 "camera": "this.panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F05F0A11_C826_4DB7_41E1_5F50E5792768, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
 "media": "this.panorama_C24B96F4_C82A_427C_41E4_8260853C24B8",
 "id": "PanoramaPlayListItem_F05F0A11_C826_4DB7_41E1_5F50E5792768",
 "camera": "this.panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F05EBA11_C826_4DB7_41D6_36CC5ED7DE96, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)",
 "media": "this.panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0",
 "id": "PanoramaPlayListItem_F05EBA11_C826_4DB7_41D6_36CC5ED7DE96",
 "camera": "this.panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F05E7A11_C826_4DB7_41E0_73B6954998D8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)",
 "media": "this.panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E",
 "id": "PanoramaPlayListItem_F05E7A11_C826_4DB7_41E0_73B6954998D8",
 "camera": "this.panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F05D3A11_C826_4DB7_41E0_A18E07AE7859, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
 "media": "this.panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9",
 "id": "PanoramaPlayListItem_F05D3A11_C826_4DB7_41E0_A18E07AE7859",
 "camera": "this.panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F05CBA11_C826_4DB7_41B9_92D6CC3A7F77, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
 "media": "this.panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC",
 "id": "PanoramaPlayListItem_F05CBA11_C826_4DB7_41B9_92D6CC3A7F77",
 "camera": "this.panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F05B4A11_C826_4DB7_41C5_432FA1E53851, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 18)",
 "media": "this.panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623",
 "id": "PanoramaPlayListItem_F05B4A11_C826_4DB7_41C5_432FA1E53851",
 "camera": "this.panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F05ACA11_C826_4DB7_41A8_6E5F65676BE1, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 18, 19)",
 "media": "this.panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5",
 "id": "PanoramaPlayListItem_F05ACA11_C826_4DB7_41A8_6E5F65676BE1",
 "camera": "this.panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F05A6A11_C826_4DB7_41CE_9686F89D23F9, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 19, 20)",
 "media": "this.panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64",
 "id": "PanoramaPlayListItem_F05A6A11_C826_4DB7_41CE_9686F89D23F9",
 "camera": "this.panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F0593A11_C826_4DB7_41D9_E4B6DC001A65, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 20, 21)",
 "media": "this.panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8",
 "id": "PanoramaPlayListItem_F0593A11_C826_4DB7_41D9_E4B6DC001A65",
 "camera": "this.panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F058EA11_C826_4DB7_4187_496EA6B97CE3, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 21, 22)",
 "media": "this.panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9",
 "id": "PanoramaPlayListItem_F058EA11_C826_4DB7_4187_496EA6B97CE3",
 "camera": "this.panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F059CA11_C826_4DB7_41C1_42C001FD855B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 22, 23)",
 "media": "this.panorama_C24888F4_C82A_CE7C_41CE_898858C693F2",
 "id": "PanoramaPlayListItem_F059CA11_C826_4DB7_41C1_42C001FD855B",
 "camera": "this.panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F0597A11_C826_4DB7_41DC_CF15DCE25699, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 23, 24)",
 "media": "this.panorama_C24A6D62_C82A_C794_41E8_9CD609938D46",
 "id": "PanoramaPlayListItem_F0597A11_C826_4DB7_41DC_CF15DCE25699",
 "camera": "this.panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F0583A11_C826_4DB7_41E4_FB018F483481, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 24, 25)",
 "media": "this.panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227",
 "id": "PanoramaPlayListItem_F0583A11_C826_4DB7_41E4_FB018F483481",
 "camera": "this.panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F1A7CA11_C826_4DB7_41E6_40B1ED795149, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 25, 26)",
 "media": "this.panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5",
 "id": "PanoramaPlayListItem_F1A7CA11_C826_4DB7_41E6_40B1ED795149",
 "camera": "this.panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F1A6EA11_C826_4DB7_41C6_0AF93562629A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 27, 28)",
 "media": "this.panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22",
 "id": "PanoramaPlayListItem_F1A6EA11_C826_4DB7_41C6_0AF93562629A",
 "camera": "this.panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F1A5BA11_C826_4DB7_41D3_43BD1CEC9509, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 28, 29)",
 "media": "this.panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B",
 "id": "PanoramaPlayListItem_F1A5BA11_C826_4DB7_41D3_43BD1CEC9509",
 "camera": "this.panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F1A57A11_C826_4DB7_41E1_F2D38AF99A26, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 29, 30)",
 "media": "this.panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42",
 "id": "PanoramaPlayListItem_F1A57A11_C826_4DB7_41E1_F2D38AF99A26",
 "camera": "this.panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F1A4EA11_C826_4DB7_41D2_44F499FF8E41, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 30, 31)",
 "media": "this.panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE",
 "id": "PanoramaPlayListItem_F1A4EA11_C826_4DB7_41D2_44F499FF8E41",
 "camera": "this.panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_FC383A8E_C826_42AD_41E0_0E09CF1D63EB, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 31, 32)",
 "media": "this.panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9",
 "id": "PanoramaPlayListItem_FC383A8E_C826_42AD_41E0_0E09CF1D63EB",
 "camera": "this.panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_camera"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.trigger('tourEnded')",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_FC387A8E_C826_42AD_41C3_FCD86A39CE85, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 32, 0)",
 "media": "this.panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B",
 "id": "PanoramaPlayListItem_FC387A8E_C826_42AD_41C3_FCD86A39CE85",
 "camera": "this.panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_camera"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC, this.camera_FC6DCADA_C826_42B4_41B1_D9C4E1B4F55E); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.23,
   "hfov": 5.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.53
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7EE9945_C86E_CF9F_41DE_AA947C454CE2",
   "pitch": -8.53,
   "yaw": -170.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.72,
   "distance": 100
  }
 ],
 "id": "overlay_DA17AE1A_C85E_45B5_41E4_C6574C2F70D6",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1, this.camera_FC63AACF_C826_42AB_41D0_57F405FE3316); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.34,
   "hfov": 5.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.01
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7ED4946_C86E_CF9D_41DE_D3F8F384B928",
   "pitch": -6.01,
   "yaw": -25.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.75,
   "distance": 100
  }
 ],
 "id": "overlay_DAAEFB84_C85E_C29D_41D1_D0C986BA2BFF",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.4,
   "hfov": 5.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.34
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7ED3946_C86E_CF9D_41D4_BA027C58052B",
   "pitch": 0.34,
   "yaw": -83.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.79,
   "distance": 100
  }
 ],
 "id": "overlay_DACA140E_C85F_C5AC_41E2_FE77CC1B571C",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA, this.camera_FD1E1C1E_C826_45AC_41D9_353AEEB9D542); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 161.68,
   "hfov": 5.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.55
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7EDE946_C86E_CF9D_41A8_FCE155C964FC",
   "pitch": -9.55,
   "yaw": 161.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.71,
   "distance": 100
  }
 ],
 "id": "overlay_DAF55040_C85E_3D94_41E4_79FDB15F4881",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F, this.camera_FFF2BDEA_C826_4695_41E1_BD8B3B483F51); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 136.5,
   "hfov": 5.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.61
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E44950_C86E_CFB5_413F_C20F36F4D860",
   "pitch": -11.61,
   "yaw": 136.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.67,
   "distance": 100
  }
 ],
 "id": "overlay_D7BCBC12_C86A_45B5_41E3_D24EACDED156",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C249FB0A_C82A_4394_41C2_8AA251027069, this.camera_FC151AA8_C826_4295_41E0_2DF5709AF37C); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.75,
   "hfov": 5.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.82
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7EC9947_C86E_CF9B_41D5_4263DDDE9712",
   "pitch": 0.82,
   "yaw": -175.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.79,
   "distance": 100
  }
 ],
 "id": "overlay_DCC745C4_C866_469D_41E0_E5FC247F81CF",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0, this.camera_FC12FAB9_C826_42F4_41E6_D9212FBA36DC); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.14,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.07
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E35947_C86E_CF9B_41E5_6B7C06EECC45",
   "pitch": -2.07,
   "yaw": -2.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_DC9D704F_C866_3DAB_41D6_6BC5EEDF2227",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24B96F4_C82A_427C_41E4_8260853C24B8, this.camera_FC1D0AC0_C826_4294_41E4_11566BF00483); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.6,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.17
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E31947_C86E_CF9B_41C3_9AAC45286412",
   "pitch": -2.17,
   "yaw": -10.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_DD6DDDF4_C866_C67C_41E5_45A17A79684C",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F, this.camera_FC67BAC0_C826_4294_41E6_7DBECDCAD1C9); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.43,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.67
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E3C947_C86E_CF9B_41CC_5D8EEECEAD47",
   "pitch": -2.67,
   "yaw": -26.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_DD3DEED8_C866_C2B4_41BC_896E1C786A4E",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12, this.camera_FE861C79_C826_4677_41E3_1BC59F117FE1); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.31,
   "hfov": 5.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D79B0951_C86E_CFB7_41AE_8AD97E690C12",
   "pitch": -24,
   "yaw": 1.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.29,
   "distance": 100
  }
 ],
 "id": "overlay_D2FDF8AA_C87D_CE95_41CD_D958AAABB5F3",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9, this.camera_FE88EC82_C826_4695_41E8_85E11F589782); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.66,
   "hfov": 5.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.83
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D79BF951_C86E_CFB7_41C5_2E46CB4011C4",
   "pitch": -3.83,
   "yaw": -76.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.77,
   "distance": 100
  }
 ],
 "id": "overlay_D2BDF786_C87E_429D_41E2_10211023D8D7",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227, this.camera_FD63AC1E_C826_45AC_41D0_C1DCF2FFA914); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.26,
   "hfov": 5.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.05
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E4094E_C86E_CFAD_41C4_5BF139E0AA4E",
   "pitch": -1.05,
   "yaw": -82.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.79,
   "distance": 100
  }
 ],
 "id": "overlay_D6190E96_C866_42BC_41E1_CE7FFF0C4EFB",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8, this.camera_FE9CEC92_C826_46B4_41DF_531044508C08); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.66,
   "hfov": 5.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.02
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E5094D_C86E_CFAF_41B2_2CB6716B7BD9",
   "pitch": -3.02,
   "yaw": -8.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.78,
   "distance": 100
  }
 ],
 "id": "overlay_D5BD5C8C_C866_46AD_41C3_D09BBA727E68",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C24888F4_C82A_CE7C_41CE_898858C693F2, this.camera_FEEE0C9C_C826_46AC_41B1_ABAD2883BE4A); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -139.54,
   "hfov": 5.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.57
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_D7E5C94E_C86E_CFAD_41E3_425238628B0A",
   "pitch": -9.57,
   "yaw": -139.54,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.71,
   "distance": 100
  }
 ],
 "id": "overlay_D64CB80C_C866_CDAD_41C4_35065A3F0A7A",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_5645B517_5EBA_61DA_41AF_FC7FEB37EBCD",
 "backgroundOpacity": 0,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "hidden",
 "children": [
  "this.IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F",
  "this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
  "this.IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "100%",
 "minWidth": 20,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 4,
 "borderSize": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container31988"
 },
 "shadow": false
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E48950_C86E_CFB5_41E3_8D2DC04C66EF",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24DEB76_C82A_427C_41E4_BA37370B8EEE_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D79B5950_C86E_CFB5_41D7_7C6D3341DBC0",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24A43FE_C82A_C26D_41D8_0AC88269A623_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E1F94A_C86E_CF95_41DB_BC036DB67476",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7ED9946_C86E_CF9D_41C1_909B7EC74414",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7EC4946_C86E_CF9D_41D8_AA74A656F0FA",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24A16D8_C82A_42B5_41D0_375E22ABFC84_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7EC0946_C86E_CF9D_41D6_6F928E26E651",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E2E948_C86E_CF95_41E1_29F2AAC91D78",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24D3FBE_C82A_42ED_41CD_B1187783079E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E2A948_C86E_CF95_41E3_CDB0A49F3CE2",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24B96F4_C82A_427C_41E4_8260853C24B8_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E27948_C86E_CF95_419B_D43F6F4674D2",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E4C94F_C86E_CFAB_418B_B7267E797153",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E4894F_C86E_CFAB_41DF_9B92B918E14B",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D79B494F_C86E_CFAB_41E2_DEF9525D0F85",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24DBAAA_C82A_C295_41DF_4AE1C3CE710F_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D79B094F_C86E_CFAB_41E0_BA35F7320443",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24FF02F_C82A_DDEB_41E7_5C6CD6773562_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E1294A_C86E_CF95_41D8_7B50D137145A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E0394B_C86E_CFAB_41CD_B44C9DDF0232",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24D8C96_C82A_C6BC_4179_00AE804DDD64_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E0F94B_C86E_CFAB_41B0_40181657CC25",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7ECF947_C86E_CF9B_41DA_38DB40EE8952",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C249FB0A_C82A_4394_41C2_8AA251027069_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7ECA947_C86E_CF9B_41CB_0D8508F6055B",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24DB78E_C82A_42AC_41E0_296CE5A1ED42_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E4D950_C86E_CFB5_41E4_D37BF414FBE3",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C2495705_C82A_439F_41E8_18F81B90FD9B_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7EED945_C86E_CF9F_41DD_7FF3A67C0A25",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E5994E_C86E_CFAD_41B6_FDCCE10CA3B0",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24BD1A5_C82A_DE9F_41D2_F84447D98227_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E4494E_C86E_CFAD_41D7_EF15DB3953DA",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24CB302_C82A_4394_41E5_D1CC369248AA_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7EDA946_C86E_CF9D_41E4_673D22D3C3AF",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E7394C_C86E_CFAD_41C7_4927A473B65E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E7F94C_C86E_CFAD_41D4_852D5640E69D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24194B1_C82A_C6F7_41D9_FE594F14D7A9_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E7A94C_C86E_CFAD_41CC_9E004CBE4E6E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24C4B62_C82A_4394_41DB_1CAC136928A0_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E22948_C86E_CF95_41D0_360431A78DAB",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_DA94FC82_C826_C694_41D2_FBED655CC96C",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E7E50D_C82A_47D0_41E4_F558CA19FA12_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_DA938C82_C826_C694_41DA_C526C0CA2513",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E0B94B_C86E_CFAB_41E4_323720337E00",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24C1066_C82A_FD9C_41E0_C81126E2A5B8_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E7694B_C86E_CFAB_41D6_8C8B8A528682",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E19949_C86E_CF97_41E1_36EEB1061071",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E04949_C86E_CF97_41BF_D2BBE5564B07",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C249E77E_C82A_C26D_41E4_ED6A4862F0DC_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E0194A_C86E_CF95_41D7_720573B9E3EF",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C248F482_C82A_4694_41D3_EDC37F7BB01B_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D79B8951_C86E_CFB7_41B5_7A0CC57610C3",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E16948_C86E_CF95_41B3_A79FAC5970EF",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E15949_C86E_CF97_41A3_1DB6A390BA68",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E1E949_C86E_CF97_41E1_873309CBC3E5",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24F93BF_C82A_C2EB_41E8_722E30A42EC9_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E1A949_C86E_CF97_41D3_D8099D38C016",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24C2BCA_C82A_C295_41E1_0C2CD6665E77_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E1794A_C86E_CF95_41DA_6F299F0E74F9",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C249B2B2_C82A_42F4_41CB_F83BB158F61F_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E38948_C86E_CF95_41A8_F4F79B505B0A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E6794C_C86E_CFAD_41C2_3656AF7EC9B7",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E6394D_C86E_CFAF_41C2_D051D703708B",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E6F94D_C86E_CFAF_41A4_F4A4E5127632",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E6B94D_C86E_CFAF_41D0_DA3E76F70A14",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24888F4_C82A_CE7C_41CE_898858C693F2_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E5494D_C86E_CFAF_41E4_09BF3802D914",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_DA925C82_C826_C694_41E6_93624C567677",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_DA920C82_C826_C694_41DA_79FB2BFF8EA3",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_EEB09CDF_C85A_46AB_41C3_50C580A185E1",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_DA92BC82_C826_C694_41D2_9B20647C2ED3",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C27EA340_C82A_4394_41C7_C4A25C4F64BC_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_DA917C82_C826_C694_41D3_F6EFF824CFBE",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24A62D5_C82A_42BF_41DC_072D53C8102B_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E41950_C86E_CFB5_4176_1EA5D6210738",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E1B94A_C86E_CF95_41CD_F70529251686",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24D88BE_C82A_CEEC_41D7_D740315B64D5_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E0794B_C86E_CFAB_41E8_62E0DAD6CDFA",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7EE9945_C86E_CF9F_41DE_AA947C454CE2",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24F9B8C_C82A_42AC_41C5_250B89CC1DCA_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7ED4946_C86E_CF9D_41DE_D3F8F384B928",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7ED3946_C86E_CF9D_41D4_BA027C58052B",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C2761F39_C82A_43F7_41C2_CFDA8C4C6FD1_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7EDE946_C86E_CF9D_41A8_FCE155C964FC",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24A5EF6_C82A_C27D_41E0_EA7BF4B03E22_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E44950_C86E_CFB5_413F_C20F36F4D860",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7EC9947_C86E_CF9B_41D5_4263DDDE9712",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E35947_C86E_CF9B_41E5_6B7C06EECC45",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E31947_C86E_CF9B_41C3_9AAC45286412",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24D0EE2_C82A_4295_41E8_8AB076991670_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E3C947_C86E_CF9B_41CC_5D8EEECEAD47",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D79B0951_C86E_CFB7_41AE_8AD97E690C12",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24BB050_C82A_5DB5_41CB_6FF5C5D274A9_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D79BF951_C86E_CFB7_41C5_2E46CB4011C4",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24DE65E_C82A_C5AD_41E7_9D6D767C6CC5_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E4094E_C86E_CFAD_41C4_5BF139E0AA4E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E5094D_C86E_CFAF_41B2_2CB6716B7BD9",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C24A6D62_C82A_C794_41E8_9CD609938D46_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_D7E5C94E_C86E_CFAD_41E3_425238628B0A",
 "frameCount": 24
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Player",
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player43899"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
