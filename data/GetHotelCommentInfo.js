module.exports = {
	name: 'GetHotelCommentInfo',
	description: '查询酒店下面所有的房型数据',
	url: 'http://vacations.ctrip.com/DIY/Ajax/AjaxGetHotelCommentInfo.aspx',
	type: 'GET',
	request: {
		data: {
			hotel: '酒店ID',
			MasterHotelId: '母酒店ID'
		},
		mock: {
			normal: [375292, 375292],
			noMasterId: [374783, '']
		}

	},
	response: {
		normal: {
			success: true,
			data: {
			  data: [
			    {
			      "UserCode": "100720****",
			      "CommentContent": "多次入住了，非常好，值得推荐，尤其是免费接机服务！赞一个！"
			    },
			    {
			      "UserCode": "1396871****",
			      "CommentContent": "有厨房，好方便"
			    },
			    {
			      "UserCode": "300511****",
			      "CommentContent": "很不错"
			    },
			    {
			      "UserCode": "_CFT010000000541****",
			      "CommentContent": "这个酒店非常豪华 不愧是华仔住过的 马桶都是带电控制的 早餐非常nice 酒店里连那个帮助穿鞋的 擦鞋机都有 衣柜里还有雨伞 两个电视机 下面还有冰箱 水果 总之感觉非常棒 唯一一点就是 贵。。。相比鼓浪屿 曾厝垵的酒店稍微有点远"
			    },
			    {
			      "UserCode": "166415****",
			      "CommentContent": "五星级酒店，服务很周到，设施很完善，为住客提供了力所能及的方便。"
			    },
			    {
			      "UserCode": "_spb404739007363****",
			      "CommentContent": "不错的酒店，市中心，去哪儿都方便"
			    }
			  ]
			},
			info: '获取成功'
		},
		noMasterId: {
			success: true,
			data: {
			  data: [
			    {
			      "UserCode": "107930****",
			      "CommentContent": "so good"
			    },
			    {
			      "UserCode": "320290****",
			      "CommentContent": "很好"
			    },
			    {
			      "UserCode": "M9662****",
			      "CommentContent": "还行"
			    },
			    {
			      "UserCode": "_cs28000664****",
			      "CommentContent": "还可以"
			    },
			    {
			      "UserCode": "_cs28000664****",
			      "CommentContent": "还可以"
			    },
			    {
			      "UserCode": "_cs28000664****",
			      "CommentContent": "还可以"
			    }
			  ]
			},
			info: '获取成功'
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