const axios = require("axios");
const appid = "dc3778145c688201f1dbbbda3c5b9cbf";
const q = "Itu";
const units = "metric";
const lang = "pt_BR";
const cnt = "10"
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;

axios
    .get(url)
    .then((res) => {
        console.log(res);
        return res.data;
    })
    .then((res) => {
        console.log(res.cnt);
        return res;
    })
    .then((res) => {
        console.log("aqui", res);
        return res["list"];
    })
    .then((res) => {
        for(let previsao of res) {
            console.log(`
            ${new Date(+previsao.dt * 1000).toLocaleString()},
            ${'Min: ' + previsao.main.temp_min}\u00B0C,
            ${'Max: ' + previsao.main.temp_max}\u00B0C,
            ${'Hum: ' + previsao.main.humidity}%,
            ${previsao.weather[0].description}
            `);
        }
        return res;
    })
    .then((res) => {
        const list = res.filter(r => r.main.feels_like >= 30);
        console.log (`${lista.length} previsões têm percepção humana de temperatura acima de 30 graus`)
    });



    