{moment} = require "Moment"

# 🏙 Geolocalisation
supportedContries = ['United States', 'United Kingdom']

dataCurrentCity = JSON.parse Utils.domLoadDataSync "https://freegeoip.net/json/"

# Use San Francisco if current location is not supported by Dark Sky
if !supportedContries.includes(dataCurrentCity.country_name)
	dataCurrentCity = {
		longitude: -122.419416
		latitude: 37.774929
	}

# Montreal
# dataCurrentCity = {
# 	city: 'Montreal'
# 	longitude: -73.567256
# 	latitude: 45.5016889
# }

# New York
# dataCurrentCity = {
# 	city: 'New York'
# 	longitude: -73.974187
# 	latitude: 40.771133
# }

Current_City.text = dataCurrentCity.city

# ✖️ Variables

Utils.insertCSS(css)
flow = new FlowComponent
loading = false
spinnerLoop = null
pullToRefreshDistance = 140
pullToRefreshDistanceLoading = 140
insetDistance = 0
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

Time_Indicator.classList.add("pnum")
probability_value.classList.add("pnum")
css = """
.pnum {
	font-feature-settings: "tnum";
	width: auto!important;
}
"""

container_margins = 40
container_height = 250
availableWidth = Screen.width - 2 * container_margins

# ⛅️ Update Weather Data
getWeatherData = () ->
	getData = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a529960936818c18e22f793c463c8e23/"+dataCurrentCity.latitude+","+dataCurrentCity.longitude
	data = JSON.parse Utils.domLoadDataSync getData
	current_weather.text = data.currently.summary
	probability_value.text = data.currently.precipProbability * 100 + "%"
	every5minutes = data.minutely.data.filter (x, i) -> i % 5 == 0
	hourly = data.hourly.data.filter (x, i) -> x.time > (moment().unix() + 60*60)
	linesData = every5minutes.concat hourly
	
	current_gradient = gradients.find (gradient) -> gradient.icon == data.currently.icon

	gradient.animate
		gradient: {start: current_gradient.start, end: current_gradient.end}
	
	for item, index in linesData
		console.log moment.unix(item.time).format('h:mm')
	
	for i in [0...numberOfLines]
		newHeight = Utils.modulate(linesData[i].precipProbability, [0,1], [7, 250])
		lines[i].custom.data = linesData[i]
		lines[i].animate
			y: 250 - newHeight
			height: newHeight
			options:
				curve: Spring(tension: 200, friction: 22)
				delay: i/30


# 📊 Lines
linesContainer = new Layer
	x: container_margins
	y: Screen.height - (container_margins + container_height)
	width: availableWidth
	height: container_height
	backgroundColor: "transparent"
	index: 10
	
numberOfLines = Utils.round(availableWidth/16)

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

Time_Indicator.opacity = 0
isDraging = false

linesContainer.on Events.TouchStart, (event, layer) ->
	isDraging = true
	updateSelectedLine()
	Time_Indicator.animate
		opacity: 1
		options:
			time: .2

linesContainer.on Events.TouchMove, (event, layer) ->
	if !isDraging
		return
		
	updateSelectedLine()
			
linesContainer.on Events.TouchEnd, () ->
	isDraging = false
	Time_Indicator.animate
		opacity: 0
		options:
			time: .2

	currentLine.animate
		backgroundColor: 'rgba(0,0,0, 0.25)'
		options:
			time: .2
			
	currentLine = lines[0]
	probability_value_percentage = Utils.round(currentLine.custom.data.precipProbability * 100)
	probability_value.text = probability_value_percentage + "%"
	
	
updateSelectedLine = () ->
	if Utils.isDesktop()
		x_position = event.point.x
		y_position = event.point.y
	else
		x_position = Events.touchEvent(event).clientX/window.devicePixelRatio
		y_position = Events.touchEvent(event).clientY/window.devicePixelRatio
		
	Time_Indicator.x = x_position
	Time_Indicator.y = y_position - 80
			
	indexCurrentLine = Utils.round(x_position/numberOfLines)
	currentLine = lines[indexCurrentLine]
	
	probability_value_percentage = Utils.round(currentLine.custom.data.precipProbability * 100)
	probability_value.text = probability_value_percentage + "%"
	
	end = moment.unix(currentLine.custom.data.time)
	
	duration = moment.duration(end.diff(moment(), 'seconds'), 'seconds')
	hours = Math.floor(duration.asHours())
	mins = Math.floor(duration.asMinutes()) - (hours * 60)
		
	prettyHours = hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
	prettyMins = mins.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
	
	if (prettyHours < 0)
		Time_Indicator.text = moment().format('HH:mm')
	else
		Time_Indicator.text =  "+ "+ prettyHours + ":" + prettyMins
	
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

#⏳ Spinner
spinnerAnimation = ->
	spinnerLoop = spinner.animate
		rotation: 360
		options:
			time: 1
			curve: Bezier.linear
	
	spinnerLoop.start()

	spinnerLoop.on Events.AnimationEnd, ->
		spinnerLoop.restart()
		
stopSpinnerAnimation = ->
	spinner.animate
		scale: 0
		opacity: 0
		
	for dash, i in spinner.children
		dash.animate
			opacity: 0
			
	Utils.delay 1, ->
		spinner.animate
			scale: 1
			opacity: 1

	spinnerLoop.stop()

#📱 ScrollView
insetDistance = 400
spinner.y = 96
spinner.index = 100

WeatherScreen = new Layer
	size: Screen.size

ScrollView = new ScrollComponent
	parent: WeatherScreen
	size: Screen.size
	index: 1
	scrollHorizontal: false

gradient.parent = ScrollView.content
spinner.parent = WeatherScreen
linesContainer.parent = WeatherScreen

gradient.states.loading =
	y: pullToRefreshDistance
	animationOptions:
		time: .2

gradient.states.default =
	y: 0
	animationOptions:
		time: 0.2
		
#Pull to refresh
ScrollView.onScrollEnd ->
	# If dragged beyond 100 pixels, start loading animation
	if ScrollView.scrollY < - pullToRefreshDistance
		loading = true
		getWeatherData()
		spinnerAnimation()
		gradient.animate "loading"
		ScrollView.content.ignoreEvents = true 	
		
		# Stop loading animation and make feed scrollable again		
		Utils.delay 4, ->
			gradient.animate "default"
			loading = false
			stopSpinnerAnimation()
			ScrollView.content.ignoreEvents = false

ScrollView.onMove (event) ->
	if !loading
		
		for dash, i in spinner.children
			start = i * (pullToRefreshDistance/spinner.children.length) - insetDistance
			dash.animate
				opacity: Utils.modulate(event.y, [start, start + 5], [0, 1], true)
				options: 
					time: 0

# ⚙️ Settings
settings.onClick (event, layer) ->
	flow.showOverlayBottom(SettingsScreen, animate: true)
	
settingsClose.onClick (event, layer) ->
	flow.showPrevious()
	
activeTemperatureButton = 'SettingsButtonC'
activeGradient = SettingsButtonC.gradient
inactiveGradient = SettingsButtonF.gradient
buttons = [SettingsButtonC, SettingsButtonF]

for button in buttons

	button.onClick (event, layer) ->
		if layer.name != activeTemperatureButton
			activeTemperatureButton = layer.name
			layer.children[0].animate
				color: 'rgba(0,0,0, .6)'
				options: 
					time: .2
			layer.children[1].animate
				backgroundColor: 'rgba(0,0,0, .5)'
				options: 
					time: .2
			layer.children[1].children[0].animate
				color: '#2772EE'
				options: 
					time: .2
			layer.animate
				gradient: activeGradient
				options: 
					time: .2
			
			inactiveButtons = buttons.filter (button) ->
				button.name != activeTemperatureButton
				
			for button in inactiveButtons
				button.children[0].animate
					color: '#777777'
					options: 
						time: .2
				button.children[1].animate
					backgroundColor: 'rgba(255,255,255, .3)'
					options: 
						time: .2
				button.children[1].children[0].animate
					color: '#333333'
					options: 
						time: .2
				button.animate
					gradient: inactiveGradient
					options: 
						time: .2
	
	button.onTouchStart (event, layer) ->
		layer.animate
			scale: 0.98
			options: 
				time: .2
			
	button.onTouchEnd (event, layer) ->
		layer.animate
			scale: 1
			options: 
				time: .2

flow.showNext(WeatherScreen, animate: false)
# flow.showNext(SettingsScreen, animate: false)

getWeatherData()