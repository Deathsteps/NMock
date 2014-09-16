module.exports={
  name: 'AjaxMoreHotel',
  description: '查询更多酒店数据',
  url: 'http://vacations.ctrip.com/DIY/Ajax/ProductDetail/AjaxMoreHotel.aspx',
  type: 'GET',
  request: {
    data: {
      UseDate: "使用日期",
      PeggingParams: "不知道是什么的参数"
    },
    mock: {
      normal: ['2014-09-25', '']
    }
  },
  response: {
    normal: {
	  success: true,
	  data: [
		{
		  "CheckInDate": "0001-01-01 00:00:00",
		  "CheckOutDate": "0001-01-01 00:00:00",
		  "HotelCount": 0,
		  "HotelBaseInfo": {
			"MasterHotelId": 373052,
			"Hotel": 373052,
			"HotelName": "上海浦东香格里拉大酒店",
			"City": 2,
			"GLON": 121.499575,
			"GLAT": 31.23484718,
			"MidLogoUrl": "http://images4.c-ctrip.com/target/hotel/7000/6168/d13ecaf40a61488e8de794b9bb9358fe_300_225.jpg",
			"Distance": "0.54",
			"ScoreLink": "http://hotels.ctrip.com/hotel/dianping/373052.html",
			"Score": 4.8,
			"NoVoters": 1620,
			"Star": 0,
			"StarDesc": "携程用户评定为6钻",
			"Address": "富城路33号",
			"IsStarLicence": true,
			"CustomerEval": 6.0,
			"SubRoomCount": 7,
			"CanBookRoomNum": 0
		  },
		  "RoomViews": [
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
				  "Payment": "PP",
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
				  "Payment": "PP",
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
			}
		  ]
		},
		{
		  "CheckInDate": "0001-01-01 00:00:00",
		  "CheckOutDate": "0001-01-01 00:00:00",
		  "HotelCount": 0,
		  "HotelBaseInfo": {
			"MasterHotelId": 426312,
			"Hotel": 426312,
			"HotelName": "上海东方滨江大酒店（国际会议中心）",
			"City": 2,
			"GLON": 121.4971289,
			"GLAT": 31.23950518,
			"MidLogoUrl": "http://pic.ctrip.com/hotels110127/hotel_example.jpg",
			"Distance": "0.25",
			"ScoreLink": "http://hotels.ctrip.com/hotel/dianping/426312.html",
			"Score": 4.6,
			"NoVoters": 1299,
			"Star": 0,
			"StarDesc": "携程用户评定为5钻",
			"Address": "滨江大道2727号",
			"IsStarLicence": true,
			"CustomerEval": 5.0,
			"SubRoomCount": 2,
			"CanBookRoomNum": 0
		  },
		  "RoomViews": [
			{
			  "Hotel": 426312,
			  "MasterBasicRoomID": 685306,
			  "BaseRoomId": 37644,
			  "BaseRoomName": "高级江景房",
			  "SubRoomViews": [
				{
				  "Room": 9385,
				  "SubRoomName": "",
				  "BedType": "大/双",
				  "BreakfastChinese": "无早",
				  "Broadnet": "免费",
				  "Price": 1795.0,
				  "BaseSavePrice": 40.0,
				  "OrgPrice": 1835.0,
				  "Payment": "PP",
				  "IsGift": false,
				  "AreaRange": "建筑面积：40平方米",
				  "FloorRange": "楼层：2-6层",
				  "EntryHumanCount": "最多入住人数：2人",
				  "Smoke": "无烟房：该房型可安排无烟楼层",
				  "BedWidth": "大床1.80米，双床1.20米",
				  "AddBedFee": "可加床：人民币&nbsp;350/床/间夜",
				  "BordNetDesc": "宽带：全部房间支持免费有线宽带上网。",
				  "IsCanReserve": true
				}
			  ],
			  "ShowPictureCount": 6
			},
			{
			  "Hotel": 426312,
			  "MasterBasicRoomID": 685307,
			  "BaseRoomId": 37640,
			  "BaseRoomName": "高级园景房",
			  "SubRoomViews": [
				{
				  "Room": 9384,
				  "SubRoomName": "",
				  "BedType": "大/双",
				  "BreakfastChinese": "无早",
				  "Broadnet": "免费",
				  "Price": 1892.0,
				  "BaseSavePrice": 40.0,
				  "OrgPrice": 1932.0,
				  "Payment": "PP",
				  "IsGift": false,
				  "AreaRange": "建筑面积：30平方米",
				  "FloorRange": "楼层：3-6层",
				  "EntryHumanCount": "最多入住人数：2人",
				  "Smoke": "无烟房：该房型可安排无烟楼层",
				  "BedWidth": "大床1.80米，双床1.20米",
				  "AddBedFee": "可加床：人民币&nbsp;350/床/间夜",
				  "BordNetDesc": "宽带：全部房间支持免费有线宽带上网。",
				  "IsCanReserve": true
				}
			  ],
			  "ShowPictureCount": 6
			}
		  ]
		},
		{
		  "CheckInDate": "0001-01-01 00:00:00",
		  "CheckOutDate": "0001-01-01 00:00:00",
		  "HotelCount": 0,
		  "HotelBaseInfo": {
			"MasterHotelId": 425821,
			"Hotel": 425821,
			"HotelName": "上海凯宾斯基大酒店",
			"City": 2,
			"GLON": 121.504465341568,
			"GLAT": 31.2420219309263,
			"MidLogoUrl": "http://images4.c-ctrip.com/target/hotel/74000/73811/ca628941825f4318902471397782ae78_300_225.jpg",
			"Distance": "0.52",
			"ScoreLink": "http://hotels.ctrip.com/hotel/dianping/425821.html",
			"Score": 4.7,
			"NoVoters": 1585,
			"Star": 0,
			"StarDesc": "携程用户评定为5钻",
			"Address": "陆家嘴环路1288号",
			"IsStarLicence": false,
			"CustomerEval": 5.0,
			"SubRoomCount": 2,
			"CanBookRoomNum": 0
		  },
		  "RoomViews": [
			{
			  "Hotel": 425821,
			  "MasterBasicRoomID": 682935,
			  "BaseRoomId": 9616,
			  "BaseRoomName": "高级江景房",
			  "SubRoomViews": [
				{
				  "Room": 209980,
				  "SubRoomName": "",
				  "BedType": "大/双",
				  "BreakfastChinese": "双早",
				  "Broadnet": "收费",
				  "Price": 460.0,
				  "BaseSavePrice": 40.0,
				  "OrgPrice": 500.0,
				  "Payment": "PP",
				  "IsGift": false,
				  "AreaRange": "建筑面积：43-45平方米",
				  "FloorRange": "楼层：5-26层",
				  "EntryHumanCount": "最多入住人数：2人",
				  "Smoke": "无烟房：该房型有无烟房",
				  "BedWidth": "大床2.00米，双床1.35米",
				  "AddBedFee": "不可加床",
				  "BordNetDesc": "宽带：全部房间支持收费有线宽带上网。（120元/天）",
				  "IsCanReserve": true
				}
			  ],
			  "ShowPictureCount": 6,
			  "HotelPictures": [
				{
				  "PictureAddress": "http://images4.c-ctrip.com/target/hotel/74000/73811/9903d3b9e39a44779978d6e64fcc5d23_130_130.jpg",
				  "PictureAddressBig": "http://images4.c-ctrip.com/target/hotel/74000/73811/9903d3b9e39a44779978d6e64fcc5d23_300_225.jpg",
				  "PictureTitle": "高级江景房",
				  "PictureUrl": "http://hotels.ctrip.com/pic-pid9903d3b9e39a44779978d6e64fcc5d23/425821.html"
				},
				{
				  "PictureAddress": "http://images4.c-ctrip.com/target/hotel/74000/73811/2b77f5da447f4456a01a0b15f6fcbde5_130_130.jpg",
				  "PictureAddressBig": "http://images4.c-ctrip.com/target/hotel/74000/73811/2b77f5da447f4456a01a0b15f6fcbde5_300_225.jpg",
				  "PictureTitle": "高级江景房",
				  "PictureUrl": "http://hotels.ctrip.com/pic-pid2b77f5da447f4456a01a0b15f6fcbde5/425821.html"
				}
			  ]
			},
			{
			  "Hotel": 425821,
			  "MasterBasicRoomID": 682937,
			  "BaseRoomId": 9615,
			  "BaseRoomName": "高级景观房",
			  "SubRoomViews": [
				{
				  "Room": 209979,
				  "SubRoomName": "",
				  "BedType": "大/双",
				  "BreakfastChinese": "无早",
				  "Broadnet": "收费",
				  "Price": 2159.0,
				  "BaseSavePrice": 40.0,
				  "OrgPrice": 2199.0,
				  "Payment": "PP",
				  "IsGift": false,
				  "AreaRange": "建筑面积：43-45平方米",
				  "FloorRange": "楼层：5-26层",
				  "EntryHumanCount": "最多入住人数：2人",
				  "Smoke": "无烟房：该房型有无烟房",
				  "BedWidth": "大床2.00米，双床1.40米",
				  "AddBedFee": "不可加床",
				  "BordNetDesc": "宽带：全部房间支持收费有线宽带上网。（120元/天）",
				  "IsCanReserve": true
				}
			  ],
			  "ShowPictureCount": 6,
			  "HotelPictures": [
				{
				  "PictureAddress": "http://images4.c-ctrip.com/target/hotel/74000/73811/7e37c9446d224bae967b20b5fce104bf_130_130.jpg",
				  "PictureAddressBig": "http://images4.c-ctrip.com/target/hotel/74000/73811/7e37c9446d224bae967b20b5fce104bf_300_225.jpg",
				  "PictureTitle": "高级景观房",
				  "PictureUrl": "http://hotels.ctrip.com/pic-pid7e37c9446d224bae967b20b5fce104bf/425821.html"
				},
				{
				  "PictureAddress": "http://images4.c-ctrip.com/target/hotel/74000/73811/6d334b0996d74f3199ff40aa3e6d42f0_130_130.jpg",
				  "PictureAddressBig": "http://images4.c-ctrip.com/target/hotel/74000/73811/6d334b0996d74f3199ff40aa3e6d42f0_300_225.jpg",
				  "PictureTitle": "高级景观房",
				  "PictureUrl": "http://hotels.ctrip.com/pic-pid6d334b0996d74f3199ff40aa3e6d42f0/425821.html"
				}
			  ]
			}
		  ]
		},
		{
		  "CheckInDate": "0001-01-01 00:00:00",
		  "CheckOutDate": "0001-01-01 00:00:00",
		  "HotelCount": 0,
		  "HotelBaseInfo": {
			"MasterHotelId": -1,
			"Hotel": 72372,
			"HotelName": "上海天山御庭酒店公寓（原长宁御庭服务公寓）",
			"City": 2,
			"GLON": 121.387714,
			"GLAT": 31.215232,
			"MidLogoUrl": "http://images4.c-ctrip.com/target/hotel/73000/72372/FEC2D743-D1C3-4E14-9705-EC91FB4C5BA4_300_225.jpg",
			"Distance": "11.01",
			"ScoreLink": "http://hotels.ctrip.com/hotel/dianping/72372.html",
			"Score": 4.4,
			"NoVoters": 136,
			"Star": 0,
			"StarDesc": "携程用户评定为3.5钻",
			"Address": "上海市长宁区天山路338弄2号楼、4号楼5楼",
			"IsStarLicence": false,
			"CustomerEval": 3.5,
			"SubRoomCount": 2,
			"CanBookRoomNum": 0
		  },
		  "RoomViews": [
			{
			  "Hotel": 72372,
			  "MasterBasicRoomID": 65471,
			  "BaseRoomId": 65471,
			  "BaseRoomName": "标准套房",
			  "SubRoomViews": [
				{
				  "Room": 205637,
				  "SubRoomName": "",
				  "BedType": "大床",
				  "BreakfastChinese": "无早",
				  "Broadnet": "免费",
				  "Price": 1859.0,
				  "BaseSavePrice": 40.0,
				  "OrgPrice": 1899.0,
				  "Payment": "PP",
				  "IsGift": false,
				  "AreaRange": "建筑面积：60平方米",
				  "FloorRange": "楼层：6-17层",
				  "EntryHumanCount": "最多入住人数：2人",
				  "Smoke": "无烟房：该房型可安排无烟楼层",
				  "BedWidth": "大床1.50米",
				  "AddBedFee": "可加床：人民币&nbsp;150/床/间夜",
				  "BordNetDesc": "宽带：全部房间支持免费有线和无线宽带上网",
				  "IsCanReserve": true
				}
			  ],
			  "ShowPictureCount": 6,
			  "HotelPictures": [
				{
				  "PictureAddress": "http://images4.c-ctrip.com/target/hotel/73000/72372/1E8657E1-E554-4AAD-9367-5F9E8449CA40_130_130.jpg",
				  "PictureAddressBig": "http://images4.c-ctrip.com/target/hotel/73000/72372/1E8657E1-E554-4AAD-9367-5F9E8449CA40_300_225.jpg",
				  "PictureTitle": "标准套房",
				  "PictureUrl": "http://hotels.ctrip.com/pic-pid1E8657E1-E554-4AAD-9367-5F9E8449CA40/72372.html"
				}
			  ]
			},
			{
			  "Hotel": 72372,
			  "MasterBasicRoomID": 65472,
			  "BaseRoomId": 65472,
			  "BaseRoomName": "豪华套房",
			  "SubRoomViews": [
				{
				  "Room": 205638,
				  "SubRoomName": "",
				  "BedType": "大床",
				  "BreakfastChinese": "无早",
				  "Broadnet": "免费",
				  "Price": 1980.0,
				  "BaseSavePrice": 40.0,
				  "OrgPrice": 2020.0,
				  "Payment": "PP",
				  "IsGift": false,
				  "AreaRange": "建筑面积：116平方米",
				  "FloorRange": "楼层：6-16层",
				  "EntryHumanCount": "最多入住人数：4人",
				  "Smoke": "无烟房：该房型可安排无烟楼层",
				  "BedWidth": "大床1.80米",
				  "AddBedFee": "可加床：人民币&nbsp;150/床/间夜",
				  "BordNetDesc": "宽带：全部房间支持免费有线和无线宽带上网",
				  "IsCanReserve": true
				}
			  ],
			  "ShowPictureCount": 6,
			  "HotelPictures": [
				{
				  "PictureAddress": "http://images4.c-ctrip.com/target/hotel/73000/72372/19CD7659828F4508B15655BEA5F63DA7_130_130.Jpg",
				  "PictureAddressBig": "http://images4.c-ctrip.com/target/hotel/73000/72372/19CD7659828F4508B15655BEA5F63DA7_300_225.Jpg",
				  "PictureTitle": "豪华套房",
				  "PictureUrl": "http://hotels.ctrip.com/pic-pid19CD7659828F4508B15655BEA5F63DA7/72372.html"
				},
				{
				  "PictureAddress": "http://images4.c-ctrip.com/target/hotel/73000/72372/CDDD3B3B-8D01-448F-B712-F1B0D8BC6D2D_130_130.jpg",
				  "PictureAddressBig": "http://images4.c-ctrip.com/target/hotel/73000/72372/CDDD3B3B-8D01-448F-B712-F1B0D8BC6D2D_300_225.jpg",
				  "PictureTitle": "豪华套房",
				  "PictureUrl": "http://hotels.ctrip.com/pic-pidCDDD3B3B-8D01-448F-B712-F1B0D8BC6D2D/72372.html"
				},
				{
				  "PictureAddress": "http://images4.c-ctrip.com/target/hotel/73000/72372/E1A4288D-0918-452E-8B46-F39C45614A93_130_130.jpg",
				  "PictureAddressBig": "http://images4.c-ctrip.com/target/hotel/73000/72372/E1A4288D-0918-452E-8B46-F39C45614A93_300_225.jpg",
				  "PictureTitle": "豪华套房",
				  "PictureUrl": "http://hotels.ctrip.com/pic-pidE1A4288D-0918-452E-8B46-F39C45614A93/72372.html"
				}
			  ]
			}
		  ]
		},
		{
		  "CheckInDate": "0001-01-01 00:00:00",
		  "CheckOutDate": "0001-01-01 00:00:00",
		  "HotelCount": 0,
		  "HotelBaseInfo": {
			"MasterHotelId": 396376,
			"Hotel": 396376,
			"HotelName": "上海虹桥宾馆““",
			"City": 2,
			"GLON": 121.410206,
			"GLAT": 31.204012,
			"MidLogoUrl": "http://images4.c-ctrip.com/target/hotel/1000/636/360f1e2aa8de490c938b294c4c7539a5_300_225.jpg",
			"Distance": "9.40",
			"ScoreLink": "http://hotels.ctrip.com/hotel/dianping/396376.html",
			"Score": 4.3,
			"NoVoters": 6590,
			"Star": 0,
			"StarDesc": "携程用户评定为1.5钻",
			"Address": "延安西路2000号““",
			"IsStarLicence": true,
			"CustomerEval": 1.5,
			"SubRoomCount": 1,
			"CanBookRoomNum": 0
		  },
		  "RoomViews": [
			{
			  "Hotel": 396376,
			  "MasterBasicRoomID": 816846,
			  "BaseRoomId": 66483,
			  "BaseRoomName": "豪华苑景房",
			  "SubRoomViews": [
				{
				  "Room": 2101792,
				  "SubRoomName": "",
				  "BedType": "大/双",
				  "BreakfastChinese": "无早",
				  "Broadnet": "免费",
				  "Price": 521.0,
				  "BaseSavePrice": 40.0,
				  "OrgPrice": 561.0,
				  "Payment": "PP",
				  "IsGift": false,
				  "AreaRange": "建筑面积：32平方米",
				  "FloorRange": "楼层：1-3层",
				  "EntryHumanCount": "最多入住人数：2人",
				  "Smoke": "无烟房：该房型可安排无烟楼层",
				  "BedWidth": "大床1.80米，双床1.20米",
				  "AddBedFee": "不可加床",
				  "BordNetDesc": "宽带：全部房间支持免费有线宽带上网。",
				  "IsCanReserve": true
				}
			  ],
			  "ShowPictureCount": 6,
			  "HotelPictures": [
				{
				  "PictureAddress": "http://images4.c-ctrip.com/target/hotel/19000/18349/e9bea7ab3bf442c08a9fee3e4cd14ec0_130_130.jpg",
				  "PictureAddressBig": "http://images4.c-ctrip.com/target/hotel/19000/18349/e9bea7ab3bf442c08a9fee3e4cd14ec0_300_225.jpg",
				  "PictureTitle": "豪华苑景房",
				  "PictureUrl": "http://hotels.ctrip.com/pic-pide9bea7ab3bf442c08a9fee3e4cd14ec0/396376.html"
				}
			  ]
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