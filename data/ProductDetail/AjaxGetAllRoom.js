module.exports={
  name: 'AjaxGetAllRoom',
  description: '查询更多房型数据',
  url: 'http://vacations.ctrip.com/DIY/Ajax/ProductDetail/AjaxGetAllRoom.aspx',
  type: 'GET',
  request: {
    data: {
      UseDate: "使用日期",//都要
	  HotelNights: "酒店晚数",//详情页更多房型时传递，更多酒店下面的更多房型不传递
	  PackageSearchParams: "套餐搜索参数",//详情页更多房型时传递，更多酒店下面的更多房型不传递
	  PeggingParams: "不知道是什么的参数",//更多酒店下面的更多房型传递
	  Type: "查询类型（eg: 1为详情页更多房型，2为更多酒店下面的更多房型）"
    },
    mock: {
      normal: ['2014-09-25', 1, '', '', 1]
    }
  },
  response: {
    normal: {
	  success: true,
	  data: [
		{
		  "Hotel": 373052,
		  "MasterBasicRoomID": 514528,
		  "BaseRoomId": 12830,
		  "BaseRoomName": "豪华浦江房(浦江楼)",
		  "SubRoomViews": [
			{
			  "Room": 705438,
			  "SubRoomName": "(双人入住)",
			  "BedType": "大/双",
			  "BreakfastChinese": "无早",
			  "Broadnet": "免费",
			  "Price": 161.0,
			  "BaseSavePrice": 40.0,
			  "OrgPrice": 201.0,
			  "IsGift": false,
			  "AreaRange": "建筑面积：40-42平方米",
			  "FloorRange": "楼层：14-28层",
			  "EntryHumanCount": "最多入住人数：2人",
			  "Smoke": "无烟房：该房型可安排无烟楼层",
			  "BedWidth": "大床1.98米，双床1.22米",
			  "AddBedFee": "可加床：人民币&nbsp;403/床/间夜",
			  "BordNetDesc": "宽带：全部房间支持免费有线和无线宽带上网",
			  "IsCanReserve": true
			}
		  ],
		  "ShowPictureCount": 6,
		  "HotelPictures": [
			{
			  "PictureAddress": "http://images4.c-ctrip.com/target/hotel/7000/6168/edd0d834731d4a71b052dbcff7c453b3_130_130.jpg",
			  "PictureAddressBig": "http://images4.c-ctrip.com/target/hotel/7000/6168/edd0d834731d4a71b052dbcff7c453b3_300_225.jpg",
			  "PictureTitle": "豪华浦江房(浦江楼)",
			  "PictureUrl": "http://hotels.ctrip.com/pic-pidedd0d834731d4a71b052dbcff7c453b3/373052.html"
			},
			{
			  "PictureAddress": "http://images4.c-ctrip.com/target/hotel/7000/6168/de10df90cb124d11831ecaa80561a594_130_130.jpg",
			  "PictureAddressBig": "http://images4.c-ctrip.com/target/hotel/7000/6168/de10df90cb124d11831ecaa80561a594_300_225.jpg",
			  "PictureTitle": "豪华浦江房(浦江楼)",
			  "PictureUrl": "http://hotels.ctrip.com/pic-pidde10df90cb124d11831ecaa80561a594/373052.html"
			}
		  ]
		},
		{
		  "Hotel": 373052,
		  "MasterBasicRoomID": 765644,
		  "BaseRoomId": 9670,
		  "BaseRoomName": "行政双床房(紫金楼)",
		  "SubRoomViews": [
			{
			  "Room": 259541,
			  "SubRoomName": "(单人入住)",
			  "BedType": "双床",
			  "BreakfastChinese": "单早",
			  "Broadnet": "免费",
			  "Price": 162.0,
			  "BaseSavePrice": 40.0,
			  "OrgPrice": 202.0,
			  "IsGift": false,
			  "AreaRange": "建筑面积：40-45平方米",
			  "FloorRange": "楼层：7-26、32-35层",
			  "EntryHumanCount": "最多入住人数：1人",
			  "Smoke": "无烟房：该房型可安排无烟楼层",
			  "BedWidth": "双床1.22米",
			  "AddBedFee": "不可加床",
			  "BordNetDesc": "宽带：全部房间支持免费有线和无线宽带上网",
			  "IsCanReserve": true
			}
		  ],
		  "ShowPictureCount": 6
		},
		{
		  "Hotel": 373052,
		  "MasterBasicRoomID": 699371,
		  "BaseRoomId": 699373,
		  "BaseRoomName": "豪华房（浦江楼）",
		  "SubRoomViews": [
			{
			  "Room": 1845260,
			  "SubRoomName": "(中宾)",
			  "BedType": "大/双",
			  "BreakfastChinese": "双早",
			  "Broadnet": "无",
			  "Price": 162.0,
			  "BaseSavePrice": 40.0,
			  "OrgPrice": 202.0,
			  "IsGift": false,
			  "AreaRange": "",
			  "FloorRange": "",
			  "EntryHumanCount": "最多入住人数：2人",
			  "Smoke": "",
			  "BedWidth": "",
			  "AddBedFee": "不可加床",
			  "BordNetDesc": "宽带：无",
			  "IsCanReserve": true
			}
		  ],
		  "ShowPictureCount": 6
		},
		{
		  "Hotel": 373052,
		  "MasterBasicRoomID": 514525,
		  "BaseRoomId": 522240,
		  "BaseRoomName": "豪华外滩全景房(浦江楼)",
		  "SubRoomViews": [
			{
			  "Room": 1289645,
			  "SubRoomName": "携程标准价",
			  "BedType": "大/双",
			  "BreakfastChinese": "无早",
			  "Broadnet": "免费",
			  "Price": 558.0,
			  "BaseSavePrice": 40.0,
			  "OrgPrice": 598.0,
			  "IsGift": false,
			  "AreaRange": "",
			  "FloorRange": "楼层：5-19、25-28层",
			  "EntryHumanCount": "最多入住人数：2人",
			  "Smoke": "无烟房：该房型可安排无烟楼层",
			  "BedWidth": "大床2.00米，双床1.22米",
			  "AddBedFee": "不可加床",
			  "BordNetDesc": "宽带：全部房间支持免费有线和无线宽带上网",
			  "IsCanReserve": true
			},
			{
			  "Room": 1289644,
			  "SubRoomName": "携程标准价",
			  "BedType": "大/双",
			  "BreakfastChinese": "无早",
			  "Broadnet": "免费",
			  "Price": 558.0,
			  "BaseSavePrice": 40.0,
			  "OrgPrice": 598.0,
			  "IsGift": false,
			  "AreaRange": "",
			  "FloorRange": "楼层：5-19、25-28层",
			  "EntryHumanCount": "最多入住人数：2人",
			  "Smoke": "无烟房：该房型可安排无烟楼层",
			  "BedWidth": "大床2.00米，双床1.22米",
			  "AddBedFee": "不可加床",
			  "BordNetDesc": "宽带：全部房间支持免费有线和无线宽带上网",
			  "IsCanReserve": true
			}
		  ],
		  "ShowPictureCount": 6
		},
		{
		  "Hotel": 373052,
		  "MasterBasicRoomID": 514527,
		  "BaseRoomId": 522238,
		  "BaseRoomName": "豪华阁豪华房(浦江楼)",
		  "SubRoomViews": [
			{
			  "Room": 1289641,
			  "SubRoomName": "",
			  "BedType": "大/双",
			  "BreakfastChinese": "无早",
			  "Broadnet": "免费",
			  "Price": 692.0,
			  "BaseSavePrice": 40.0,
			  "OrgPrice": 732.0,
			  "IsGift": false,
			  "AreaRange": "建筑面积：40-42平方米",
			  "FloorRange": "楼层：20-24层",
			  "EntryHumanCount": "最多入住人数：2人",
			  "Smoke": "无烟房：该房型可安排无烟楼层",
			  "BedWidth": "大床2.00米，双床1.22米",
			  "AddBedFee": "不可加床",
			  "BordNetDesc": "宽带：全部房间支持免费有线和无线宽带上网",
			  "IsCanReserve": true
			}
		  ],
		  "ShowPictureCount": 6
		},
		{
		  "Hotel": 373052,
		  "MasterBasicRoomID": 514535,
		  "BaseRoomId": 12765,
		  "BaseRoomName": "豪华浦江大床房(浦江楼)",
		  "SubRoomViews": [
			{
			  "Room": 167905,
			  "SubRoomName": "(单人入住)",
			  "BedType": "大床",
			  "BreakfastChinese": "无早",
			  "Broadnet": "免费",
			  "Price": 1554.0,
			  "BaseSavePrice": 40.0,
			  "OrgPrice": 1594.0,
			  "IsGift": false,
			  "AreaRange": "建筑面积：40-42平方米",
			  "FloorRange": "楼层：14-28层",
			  "EntryHumanCount": "最多入住人数：2人",
			  "Smoke": "",
			  "BedWidth": "",
			  "AddBedFee": "可加床：人民币&nbsp;403/床/间夜",
			  "BordNetDesc": "宽带：全部房间支持免费有线和无线宽带上网",
			  "IsCanReserve": true
			}
		  ],
		  "ShowPictureCount": 6,
		  "HotelPictures": [
			{
			  "PictureAddress": "http://images4.c-ctrip.com/target/hotel/7000/6168/26bf30862b2e461aa2fa01f3e32c87da_130_130.jpg",
			  "PictureAddressBig": "http://images4.c-ctrip.com/target/hotel/7000/6168/26bf30862b2e461aa2fa01f3e32c87da_300_225.jpg",
			  "PictureTitle": "豪华浦江大床房(浦江楼)",
			  "PictureUrl": "http://hotels.ctrip.com/pic-pid26bf30862b2e461aa2fa01f3e32c87da/373052.html"
			}
		  ]
		},
		{
		  "Hotel": 373052,
		  "MasterBasicRoomID": 514534,
		  "BaseRoomId": 12768,
		  "BaseRoomName": "豪华阁外滩全景超豪华大床房(紫金楼)",
		  "SubRoomViews": [
			{
			  "Room": 167907,
			  "SubRoomName": "(单人入住)",
			  "BedType": "大床",
			  "BreakfastChinese": "单早",
			  "Broadnet": "免费",
			  "Price": 1554.0,
			  "BaseSavePrice": 40.0,
			  "OrgPrice": 1594.0,
			  "IsGift": false,
			  "AreaRange": "建筑面积：50-54平方米",
			  "FloorRange": "楼层：17-35层",
			  "EntryHumanCount": "最多入住人数：1人",
			  "Smoke": "无烟房：该房型可安排无烟楼层",
			  "BedWidth": "大床2.00米",
			  "AddBedFee": "可加床：人民币&nbsp;403/床/间夜",
			  "BordNetDesc": "宽带：全部房间支持免费有线和无线宽带上网",
			  "IsCanReserve": true
			}
		  ],
		  "ShowPictureCount": 6,
		  "HotelPictures": [
			{
			  "PictureAddress": "http://images4.c-ctrip.com/target/hotel/7000/6168/1bd3c6da7955443a87bd519549543c9e_130_130.jpg",
			  "PictureAddressBig": "http://images4.c-ctrip.com/target/hotel/7000/6168/1bd3c6da7955443a87bd519549543c9e_300_225.jpg",
			  "PictureTitle": "豪华阁外滩全景超豪华大床房(紫金楼)",
			  "PictureUrl": "http://hotels.ctrip.com/pic-pid1bd3c6da7955443a87bd519549543c9e/373052.html"
			}
		  ]
		},
		{
		  "Hotel": 373052,
		  "MasterBasicRoomID": 514529,
		  "BaseRoomId": 832404,
		  "BaseRoomName": "豪华阁超豪华大床房(紫金楼)",
		  "SubRoomViews": [
			{
			  "Room": 2725276,
			  "SubRoomName": "携程标准价",
			  "BedType": "大床",
			  "BreakfastChinese": "无早",
			  "Broadnet": "免费",
			  "Price": 2360.0,
			  "BaseSavePrice": 40.0,
			  "OrgPrice": 2400.0,
			  "IsGift": false,
			  "AreaRange": "建筑面积：54平方米",
			  "FloorRange": "楼层：7-16层",
			  "EntryHumanCount": "最多入住人数：2人",
			  "Smoke": "无烟房：该房型可安排无烟楼层",
			  "BedWidth": "大床1.98米",
			  "AddBedFee": "可加床：人民币&nbsp;403/床/间夜",
			  "BordNetDesc": "宽带：全部房间支持免费有线和无线宽带上网",
			  "IsCanReserve": true
			}
		  ],
		  "ShowPictureCount": 6,
		  "HotelPictures": [
			{
			  "PictureAddress": "http://images4.c-ctrip.com/target/hotel/7000/6168/021e83fa38d743ec9ee8211c4021fdee_130_130.jpg",
			  "PictureAddressBig": "http://images4.c-ctrip.com/target/hotel/7000/6168/021e83fa38d743ec9ee8211c4021fdee_300_225.jpg",
			  "PictureTitle": "豪华阁超豪华大床房(紫金楼)",
			  "PictureUrl": "http://hotels.ctrip.com/pic-pid021e83fa38d743ec9ee8211c4021fdee/373052.html"
			}
		  ]
		}
	  ],
	  "info": "返回成功"
	},
    none: {
      success: false,
      data: null,
      info: '未查到房型数据'
    },
    error: {
      success: false,
      data: null,
      info: '查询失败'
    }
  }
}