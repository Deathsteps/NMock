module.exports={
  name: 'GetResourceInfo',
  description: '查询默认资源数据',
  url: 'http://taocan.ctrip.com/DIY/Ajax/ProductDetail/GetResourceInfo.aspx',
  type: 'GET',
  request: {
    data: {
      UseDate: "使用日期",
      HotelNights: "酒店晚数",
      PackageSearchParams: "套餐搜索参数"
    },
    mock: {
      normal: ['2014-09-25', 1, '']
    }
  },
  response: {
    normal: {
	  success: true,
	  data: {
		"HotelInfos": [
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
			  "Star": 5,
			  "StarDesc": "国家旅游局评定为五星级（携程用户评定为6钻）",
			  "Address": "浦东新区富城路33号（ 浦东陆家嘴金融贸易区四川北路商业区，近陆家嘴滨江大道 ）",
			  "IsStarLicence": true,
			  "CustomerEval": 6.0,
			  "SubRoomCount": 15,
			  "CanBookRoomNum": 15
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
			  }
			]
		  }
		],
		"TicketInfos": [
		  {
			"TicketId": 2272575,
			"Expense": "<p><strong>一、费用包含：</strong>xxtest费用包括2：费用发包含的的的的品牌水电费水电费<br/>xxtest 费用包括1：上海迪尼斯门票（成人票）+历史陈列馆<br/></p><p><strong>二、基本信息：</strong>1.营业时间：xxtest营业时间：无休息 全年 全天24小时<br/>2.景区地址：xxtest地址：上海市携程网络大楼多少多少号xxtest地址2xxtest地址3<br/></p><p><strong>三、费用说明：</strong>xxtest费用说明：身高超过姚明才行<br/>xxtest费用说明2：世界第六高塔，上海地标之一，俯瞰上海城区的最佳观景台。\n2. 这里有全球唯一的360度全透明高空观光廊、世界首台全视角全透明观光电梯、亚洲最高的旋转餐厅。\n东方明珠广播电视塔矗立于上海浦东陆家嘴黄浦江畔，与浦西的外滩隔江相望，是上海市中心最耀眼的摩天建筑之一，人们习惯称之为“东方明珠”。乘坐世界首台360度全透明观光电梯、登上351米的高空观光层、行走在全球唯一的全视角全透明高空观光廊上是这里的最大亮点，若在267米高空的旋转餐厅边品尝美食的同时边欣赏着申城夜景，更是一种超凡的体验。\n东方明珠塔高468米，是目前排名亚洲第四、世界第六的高塔，它由11个大小不一的球体串联一体，此设计来源于“大珠小珠落玉盘”的美妙意境。登上三个主球体，可站在不同的高度品赏浦江两岸的城市风光，尤其站在259米高度的全透明观光廊上，以“空中漫步”的独特方式欣赏申城全景。而夜晚登临观光层感受“不夜城”夜幕下的绚彩，更是难忘的享受。\n东方明珠还是娱乐、美食、博览以及购物的小世界。在上海城市历史发展陈列馆可以了解到上海近代历史的变迁；在太空游乐城可以看一场5D电影、坐一回世界最高的室内过山车，或是去游艺世界欢乐一把；玩累了，可以到旋转餐厅品尝世界各地美食、欣赏现场制作与烹饪表演；而太空舱则可让人们与“宇航员”来一次互动。结束旅程时，可至特色商品楼层选购纪念品，或买张明信片、盖上空中邮局的邮戳，寄给自己或者想要祝福的亲友。世界第六高塔，上海地标之一，俯瞰上海城区的最佳观景台。\n2. 这里有全球唯一的360度全透明高空观光廊、世界首台全视角全透明观光电梯、亚洲最高的旋转餐厅。\n东方明珠广播电视塔矗立于上海浦东陆家嘴黄浦江畔，与浦西的外滩隔江相望，是上海市中心最耀眼的摩天建筑之一，人们习惯称之为“东方明珠”。乘坐世界首台360度全透明观光电梯、登上351米的高空观光层、行走在全球唯一的全视角全透明高空观光廊上是这里的最大亮点，若在267米高空的旋转餐厅边品尝美食的同时边欣赏着申城夜景，更是一种超凡的体验。\n东方明珠塔高468米，是目前排名亚洲第四、世界第六的高塔，它由11个大小不一的球体串联一体，此设计来源于“大珠小珠落玉盘”的美妙意境。登上三个主球体，可站在不同的高度品赏浦江两岸的城市风光，尤其站在259米高度的全透明观光廊上，以“空中漫步”的独特方式欣赏申城全景。而夜晚登临观光层感受“不夜城”夜幕下的绚彩，更是难忘的享受。\n东方明珠还是娱乐、美食、博览以及购物的小世界。在上海城市历史发展陈列馆可以了解到上海近代历史的变迁；在太空游乐城可以看一场5D电影、坐一回世界最高的室内过山车，或是去游艺世界欢乐一把；玩累了，可以到旋转餐厅品尝世界各地美食、欣赏现场制作与烹饪表演；而太空舱则可让人们与“宇航员”来一次互动。结束旅程时，可至特色商品楼层选购纪念品，或买张明信片、盖上空中邮局的邮戳，寄给自己或者想要祝福的亲友。世界第六高塔，上海地标之一，俯瞰上海城区的最佳观景台。\n2. 这里有全球唯一的360度全透明高空观光廊、世界首台全视角全透明观光电梯、亚洲最高的旋转餐厅。\n东方明珠广播电视塔矗立于上海浦东陆家嘴黄浦江畔，与浦西的外滩隔江相望，是上海市中心最耀眼的摩天建筑之一，人们习惯称之为“东方明珠”。乘坐世界首台360度全透明观光电梯、登上351米的高空观光层、行走在全球唯一的全视角全透明高空观光廊上是这里的最大亮点，若在267米高空的旋转餐厅边品尝美食的同时边欣赏着申城夜景，更是一种超凡的体验。\n东方明珠塔高468米，是目前排名亚洲第四、世界第六的高塔，它由11个大小不一的球体串联一体，此设计来源于“大珠小珠落玉盘”的美妙意境。登上三个主球体，可站在不同的高度品赏浦江两岸的城市风光，尤其站在259米高度的全透明观光廊上，以“空中漫步”的独特方式欣赏申城全景。而夜晚登临观光层感受“不夜城”夜幕下的绚彩，更是难忘的享受。\n东方明珠还是娱乐、美食、博览以及购物的小世界。在上海城市历史发展陈列馆可以了解到上海近代历史的变迁；在太空游乐城可以看一场5D电影、坐一回世界最高的室内过山车，或是去游艺世界欢乐一把；玩累了，可以到旋转餐厅品尝世界各地美食、欣赏现场制作与烹饪表演；而太空舱则可让人们与“宇航员”来一次互动。结束旅程时，可至特色商品楼层选购纪念品，或买张明信片、盖上空中邮局的邮戳，寄给自己或者想要祝福的亲友。世界第六高塔，上海地标之一，俯瞰上海城区的最佳观景台。\n2. 这里有全球唯一的360度全透明高空观光廊、世界首台全视角全透明观光电梯、亚洲最高的旋转餐厅。\n东方明珠广播电视塔矗立于上海浦东陆家嘴黄浦江畔，与浦西的外滩隔江相望，是上海市中心最耀眼的摩天建筑之一，人们习惯称之为“东方明珠”。乘坐世界首台360度全透明观光电梯、登上351米的高空观光层、行走在全球唯一的全视角全透明高空观光廊上是这里的最大亮点，若在267米高空的旋转餐厅边品尝美食的同时边欣赏着申城夜景，更是一种超凡的体验。\n东方明珠塔高468米，是目前排名亚洲第四、世界第六的高塔，它由11个大小不一的球体串联一体，此设计来源于“大珠小珠落玉盘”的美妙意境。登上三个主球体，可站在不同的高度品赏浦江两岸的城市风光，尤其站在259米高度的全透明观光廊上，以“空中漫步”的独特方式欣赏申城全景。而夜晚登临观光层感受“不夜城”夜幕下的绚彩，更是难忘的享受。\n<br/></p>",
			"ExchangeType": "",
			"ImportantItems": [
			  "重要条款描述内容",
			  "使用方式：太坑爹了吧"
			],
			"ProductId": 2267929,
			"Name": "[02春秋淹城] 门票 01 2272575",
			"UseDate": "0001-01-01 00:00:00",
			"Quantity": 2,
			"Price": 80.0000,
			"ProductType": 1,
			"IsOption": false,
			"UsePerson": 1,
			"IsTicket": true
		  }
		],
		"InsuranceInfos": [
		  {
			"ProductId": 2270373,
			"Name": "0元抢购·科帕奇自驾租车服务 时间（1~100天）可保证",
			"UseDate": "0001-01-01 00:00:00",
			"Quantity": 0,
			"Price": 80.0000,
			"ProductType": 0,
			"IsOption": false,
			"UsePerson": 0,
			"IsTicket": false
		  },
		  {
			"ProductId": 2269075,
			"Name": "翁文杰H+F保险-临时更新产品名称测试折行显示正确-正确换行显示1-3天",
			"UseDate": "0001-01-01 00:00:00",
			"Quantity": 0,
			"Price": 47.0000,
			"ProductType": 0,
			"IsOption": false,
			"UsePerson": 0,
			"IsTicket": false
		  },
		  {
			"ProductId": 2269292,
			"Name": "可选项 平安保险（适用1—4天）名称加长临时测试用-折行完整显示",
			"UseDate": "0001-01-01 00:00:00",
			"Quantity": 0,
			"Price": 70.0000,
			"ProductType": 0,
			"IsOption": false,
			"UsePerson": 0,
			"IsTicket": false
		  },
		  {
			"ProductId": 2269293,
			"Name": "可选项 华泰保险（适用5—10天）",
			"UseDate": "0001-01-01 00:00:00",
			"Quantity": 0,
			"Price": 70.0000,
			"ProductType": 0,
			"IsOption": false,
			"UsePerson": 0,
			"IsTicket": false
		  }
		]
	  },
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