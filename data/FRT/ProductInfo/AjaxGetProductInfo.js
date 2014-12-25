module.exports = {
	name : "AjaxGetProductInfo",
	description : "调用ProductInfo返回项目经理推荐、优惠、图片等信息",
	url : "ProductInfo/AjaxGetProductInfo",
	type : POST,
	request : {
		data : {
			productIds : "产品ID_出发城市"
		},
		mock : {
			normal : ["3027330_1", "3027320_1", "51542_1", "3027329_1"]
		}
	},
	response : {
		normal : {
			"success" : true,
			"data" : [{
					"Id" : "3027330_1",
					"DepartureId" : 0,
					"ImageUrl" : null,
					"StartOff" : null,
					"Transit" : null,
					"Promotion" : "",
					"CashBack" : 0,
					"MinPriceRemark" : null,
					"Remark" : "",
					"AcceptedRange" : null,
					"DepartureCityName" : null,
					"ProductType" : 1
				}, {
					"Id" : "3027320_1",
					"DepartureId" : 0,
					"ImageUrl" : "http://10.2.5.158/images/vacations/59000/58008/dffe36454d4f4401bb04c14bb498353e_C_132_88.jpg",
					"StartOff" : null,
					"Transit" : null,
					"Promotion" : "",
					"CashBack" : 0,
					"MinPriceRemark" : null,
					"Remark" : "",
					"AcceptedRange" : null,
					"DepartureCityName" : null,
					"ProductType" : 1
				}, {
					"Id" : "51542_1",
					"DepartureId" : 0,
					"ImageUrl" : null,
					"StartOff" : null,
					"Transit" : null,
					"Promotion" : "",
					"CashBack" : 0,
					"MinPriceRemark" : null,
					"Remark" : "",
					"AcceptedRange" : null,
					"DepartureCityName" : null,
					"ProductType" : 1
				}, {
					"Id" : "3027329_1",
					"DepartureId" : 0,
					"ImageUrl" : "http://pkgpic.ctrip.com/images3/1/61/132x88/61_157_132x88.jpg",
					"StartOff" : null,
					"Transit" : null,
					"Promotion" : "",
					"CashBack" : 0,
					"MinPriceRemark" : null,
					"Remark" : "",
					"AcceptedRange" : null,
					"DepartureCityName" : null,
					"ProductType" : 1
				}
			],
			"info" : "返回数据成功"
		}
	}
}
