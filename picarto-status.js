const getLiveStatus = async () => {
    const response = await fetch('https://api.picarto.tv/v1/channel/name/IntroducingEmy');
    const json = await response.json();
    const status = json.online;
    if (status) {
        document.getElementById('picarto-status').src="online.png";
    }
};

getLiveStatus();