/* Magic Mirror
 * Module: MMM-VirusStats
 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-VirusStats",{

	defaults: {
			height: "260px", // 160px for just USA // 220px for USA and World // 260px for both and update time
			width: "450px", // DON'T CHANGE
			animationSpeed: 3000,
			updateInterval: 15 * 60 * 1000,
	},


	start: function () {
	self = this;

	// update timer
	setInterval(function() {
	self.updateDom(self.config.animationSpeed || 0);
	}, this.config.updateInterval);
},


	getStyles: function() {
        return ["MMM-VirusStats.css"];
    },

	getDom: function() {

	  var getTimeStamp = new Date().getTime(); // to seed url so Dom/module refreshes

		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none";
		iframe.scrolling = "no";
		iframe.style.height = this.config.height;
		iframe.style.width = this.config.width;

		iframe.srcdoc = `<script src="https://apps.elfsight.com/p/platform.js" defer></script>
<div class="elfsight-app-a35914e9-bd9d-4eac-bcfa-8d57365dcd67"></div>`+ getTimeStamp;

		return iframe;
	},

});
