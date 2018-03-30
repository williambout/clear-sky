{moment} = require "Moment"

# 🏙 Geolocalisation
dataCurrentCity = JSON.parse Utils.domLoadDataSync "https://freegeoip.net/json/"

Current_City.text = dataCurrentCity.city

# ✖️ Variables
lines = []
data = {}
currentLine = {}
linesData = []
gradients = [
	{icon: "clear-day", start: Clear_Day.gradient.start, end:  Clear_Day.gradient.end},
	{icon: "clear-night", start: Clear_Night.gradient.start, end:  Clear_Night.gradient.end},
	{icon: "rain", start: Rain.gradient.start, end: Rain.gradient.end},
	{icon: "snow", start: Snow.gradient.start, end: Snow.gradient.end},
	{icon: "sleet", start: Sleet.gradient.start, end: Sleet.gradient.end}
	{icon: "wind", start: Wind.gradient.start, end: Wind.gradient.end},
	{icon: "fog", start: Fog.gradient.start, end: Fog.gradient.end},
	{icon: "cloudy", start: Cloudy.gradient.start, end: Cloudy.gradient.end},
	{icon: "partly-cloudy-day", start: Partly_Cloudy_Day.gradient.start, end: Partly_Cloudy_Day.gradient.end},
	{icon: "partly-cloudy-night", start: Partly_Cloudy_Night.gradient.start, end: Partly_Cloudy_Night.gradient.end}
]

container_margins = 40
container_height = 250
availableWidth = Screen.width - 2 * container_margins

# ⛅️ Update Weather Data
getWeatherData = () ->
	getData = "https://crossorigin.me/https://api.darksky.net/forecast/a529960936818c18e22f793c463c8e23/"+dataCurrentCity.latitude+","+dataCurrentCity.longitude
	data = JSON.parse Utils.domLoadDataSync getData
	current_weather.text = data.currently.summary
	probability_value.text = data.currently.precipProbability * 100 + "%"
	data.hourly.data.shift()
	every5minutes = data.minutely.data.filter (x, i) -> i % 5 == 0
	linesData = every5minutes.concat data.hourly.data
	
	current_gradient = gradients.find (gradient) -> 
		return gradient.icon == data.currently.icon;

	gradient.animate
		gradient: {start: current_gradient.start, end: current_gradient.end}
	
	for i in [0...numberOfLines]
		newHeight = Utils.modulate(linesData[i].precipProbability, [0,1], [7, 250])
		lines[i].custom.data = linesData[i]
		lines[i].animate
			y: 250 - newHeight
			height: newHeight

# 📊 Draw lines
linesContainer = new Layer
	x: container_margins
	y: Screen.height - (container_margins + container_height)
	width: availableWidth
	height: container_height
	opacity: 0.5
	backgroundColor: "transparent"
	
numberOfLines = Math.floor availableWidth/16

for i in [0...numberOfLines]
	line = new Layer
		parent: linesContainer
		width: 7
		height: 7
		y: 250 - 7
		x: i*(10 + 7)
		backgroundColor: "rgba(0,0,0, 0.25)"
		borderRadius: 4
		custom: data: {}
	lines.push(line)

Utils.delay 1, ->
	getWeatherData()

linesContainer.on Events.MouseOut, () ->
	currentLine.animate
		backgroundColor: 'rgba(0,0,0, 0.25)'
		options:
			time: .2
	
linesContainer.on Events.TouchMove, (event, layer) ->
	if Utils.isDesktop()
		x_position = event.point.x
	else
		x_position = Events.touchEvent(event).clientX/window.devicePixelRatio
			
	indexCurrentLine = Math.floor x_position/numberOfLines
	currentLine = lines[indexCurrentLine]
	
	probability_value_percentage = Math.floor currentLine.custom.data.precipProbability * 100
	probability_value.text = probability_value_percentage + "%"
	
	end = moment.unix(currentLine.custom.data.time)
	Time_Indicator.text =  moment(end).fromNow(true)
	
	currentLine.animate
		backgroundColor: "rgba(255,255,255, 0.95)"
		options:
			time: 0
	
	lines_to_fade = lines.filter (x) -> x != lines[indexCurrentLine]
	for i in [0...lines_to_fade.length]
		lines_to_fade[i].animate
			backgroundColor: "rgba(0,0,0, 0.25)"
			options:
				time: .2

gradient.height = Screen.height + 800
info.y = 42 + 400

ScrollView = new ScrollComponent
	parent: Apple_iPhone_X
	size: Screen.size
	scrollHorizontal: false
	clip: false
	contentInset:
		top: -400
		bottom: -400
	
gradient.parent = ScrollView.content

ScrollView.onMove (event) ->
	if event.y > 100
		getWeatherData()
		

Time_Indicator.backgroundColor = "rgba(255,255,255, 0.25)"
Time_Indicator.padding = 5
Time_Indicator.borderRadius = 6