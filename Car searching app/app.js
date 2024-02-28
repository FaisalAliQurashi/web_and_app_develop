var motorbikes = {

    SUZUKI: {
        suzuki150: {
            name: "Suzuki",
            model: "GR-150",
            price: "547,000",
            colors: ["black", "blue", "silver"],
            src: "https://suzukipakistan.com/media/products/Motorcycles/GR150/bikesResize-2.png"
        },
        suzuki125: {
            name: "Suzuki",
            model: "GSX-125",
            price: "499,000",
            colors: ["white", "blue", "red"],
            src: "https://suzukipakistan.com/media/bikes/GSX%20125/product-card-512x512.png"

        },
        suzuki150Euro: {
            name: "Suzuki",
            model: "GS-150EUROII",
            price: "382,000",
            colors: ["black", "silver", "skyblue"],
            src: "https://suzukipakistan.com/media/products/GS%20150/Product-Card.png"
        },
        suzukiGD110s: {
            name: "Suzuki",
            model: " GD-110s",
            price: "532,000",
            colors: ["black", "blue", "red"],
            src: "https://suzukipakistan.com/media/cards/14.png"
        }
    },

    HONDA: {
        hondaCD70: {
            name: "honda",
            model: "CD-70",
            price: "157,900",
            colors: ["black", "blue", "red"],
            src: "https://cache2.pakwheels.com/system/bike_model_pictures/1349/original/1.jpg?1665574167"
        },
        hondaCBR150: {
            name: "Honda",
            model: "CBR-150",
            price: "280,900",
            colors: ["black", "blue", "red"],
            src: "https://cache1.pakwheels.com/system/bike_model_pictures/927/original/2015_CBR.jpg?1448534061"

        },
        hondaCB150f: {
            name: "Honda",
            model: "CB-150f",
            price: "648,000",
            colors: ["black", "blue", "red"],
            src: "https://cache2.pakwheels.com/system/bike_model_pictures/1389/original/1.jpg?1665662024"
        },
        hondaCG125: {
            name: "Honda",
            model: "CG-125",
            price: "310,000",
            colors: ["black", "blue", "red"],
            src: "https://cache3.pakwheels.com/system/bike_model_pictures/1377/original/4.jpg?1665655628"

        }

    },

    UNIQUE: {
        uniqueUD70: {
            name: "Unique",
            model: "UD-70",
            price: "157,900",
            colors: ["black", "blue", "red"],
            src: "https://cache2.pakwheels.com/system/bike_model_pictures/971/original/Unique_UD70.jpg?1448607011"

        },
        uniqueUD100: {
            name: "Unique",
            model: "UD-100",
            price: "280,900",
            colors: ["black", "blue", "red"],
            src: "https://cache4.pakwheels.com/system/bike_model_pictures/947/original/Unique_UD100.jpg?1448548520"

        },
        uniqueCrazerUD150: {
            name: "Unique",
            model: "Crazer UD-150",
            price: "648,000",
            colors: ["black", "blue", "red"],
            src: "https://cache1.pakwheels.com/system/bike_model_pictures/1062/original/Unique_Crazer_UD_150.jpg?1510666483"

        },
        uniqueCrazer150sports: {
            name: "Unique",
            model: "Crazer-150-Sports",
            price: "310,000",
            colors: ["black", "blue", "red"],
            src: "https://cache4.pakwheels.com/system/bike_model_pictures/1831/original/4.jpg?1669285373"

        }
    },

    KAWASAKI: {
        kawasakiNinjaH2R: {
            name: "kawasaki",
            model: "Ninja-H2R",
            price: "532,000",
            colors: ["black", "blue", "red"],
            src: "https://cache3.pakwheels.com/system/bike_model_pictures/1253/original/2015-h2r-kawasaki-motorcycle.jpg?1631710275"
        },

        kawasakiNinjaZx300: {
            name: "kawasaki",
            model: "Ninja ZX-300",
            price: "532,000",
            colors: ["black", "blue", "red"],
            src: "https://cache3.pakwheels.com/ad_pictures/8483/kawasaki-ninja-zx300-2013-84839061.webp"
        },

        kawasakiNinjaZx10R: {
            name: "kawasaki",
            model: "Ninja Zx-10R",
            price: "532,000",
            colors: ["black", "blue", "red"],
            src: "https://cache2.pakwheels.com/ad_pictures/8293/kawasaki-ninja-zx-10r-2013-82934011.webp"
        },

        kawasakiNinjaZx250R: {
            name: "kawasaki",
            model: "Ninja Zx-250R",
            price: "532,000",
            colors: ["black", "blue", "red"],
            src: "https://cache4.pakwheels.com/ad_pictures/8164/kawasaki-ninja-250r-2021-81640259.webp"
        }
    }


}

var main = document.getElementById("main")
var brand = document.getElementById("brand")
var model = document.getElementById("model")
brand.innerHTML = `<option>Select Brand Name</option>`
model.innerHTML = `<option>Select model Name</option>`

function renderAll() {
    for (var key in motorbikes) {
        brand.innerHTML += `<option value="${key}">${key}</option>`
        for (var key1 in motorbikes[key]) {
            var obj = motorbikes[key][key1];
            var colordiv = "";
            for (var i = 0; i < obj.colors.length; i++) {
                colordiv += `<div class='${obj.colors[i]}'></div>`
            }

            main.innerHTML += `
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 mb-4">
          <div class="card" style="width: 100%;">
            <img src="${obj.src}"
              class="card-img-top" alt="...">
            <div class="card-body">
              <h1 class="card-title">${key}</h1>
              <h3 >${obj.model}</h3>
              <h3 >RS: ${obj.price}</h3>
              <div class="d-flex gap-2">${colordiv}</div>
            </div>
          </div>
        </div>
            `
        }
    }

}

renderAll()


function setmodel() {
    model.innerHTML = "";
    model.innerHTML = `<option>Select model Name</option>`
    for (var key in motorbikes[brand.value]) {
        model.innerHTML += `<option value="${key}">${key}</option>`
    }
}

var motodetail = document.getElementById("motordetial")
function searchmotobike() {
    main.innerHTML=""
    main.style.display = "none";
    motodetail.style.display = "flex"
    var motor = motorbikes[brand.value][model.value]
    motodetail.innerHTML = `
    <div class="row g-0">
    <div class="col-md-4">
      <img src="${motor.src}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title">${motor.name}</h1>
        <h3>${motor.model}</h3>
        <h2>RS ${motor.price}</h2>
        </div>
    </div>
  </div>
    `
}
function clearSearch() {
    motodetail.innerHTML=""
    motodetail.style.display = "none";
    main.style.display = "flex";
    renderAll()
}