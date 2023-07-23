export const lineChartOpts = () => {
	return{
		height: '400rpx',
		color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
		padding: [25,15,10,15],
		dataLabel: false,
		dataPointShape: false,
		enableScroll: false,
		legend: {
			show: false
		},
		xAxis: {
			disableGrid: true,
			rotateLabel: true,
			rotateAngle: 45
		},
		yAxis: {
			gridType: "dash",
			dashLength: 2,
			data: [
				{
					title: "焦虑程度",
					min: 0,
					max: 3
				}
			],
			splitNumber: 6,
			showTitle: true,
		},
		extra: {
			line: {
				type: "curve",
				width: 3,
				activeType: "hollow",
				linearType: "custom",
				onShadow: true,
				animation: "horizontal"
			},
			tooltip: {
				showBox: false
			}
		}
	}
}

export const lineChartData = (res) => {
	return {
		categories: res.date,
		series: [
			{
				linearColor: [
					[
						0,
						"#1890FF"
					],
					[
						0.25,
						"#00B5FF"
					],
					[
						0.5,
						"#00D1ED"
					],
					[
						0.75,
						"#00E6BB"
					],
					[
						1,
						"#90F489"
					]
				],
				setShadow: [
					3,
					8,
					10,
					"#1890FF"
				],
				data: res.data
			}
		]
	}
}

export const ringChartOpts = () => {
	return {
		height: '400rpx',
		rotate: false,
		rotateLock: false,
		color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
		padding: [5,5,5,5],
		dataLabel: true,
		enableScroll: false,
		legend: {
		  show: true,
		  position: "right",
		  lineHeight: 20,
		  fontSize: 10
		},
		title: {
		  name: "总得分",
		  fontSize: 15,
		  color: "#666666"
		},
		subtitle: {
		  name: "7",
		  fontSize: 20,
		  color: "#7cb5ec"
		},
		extra: {
		  ring: {
			ringWidth: 20,
			activeOpacity: 0.5,
			activeRadius: 10,
			offsetAngle: 0,
			labelWidth: 15,
			border: true,
			borderWidth: 3,
			borderColor: "#FFFFFF"
		  }
		}
	}
}

export const ringChartData = (res) =>{
	return {
		series: res.data
	}
}