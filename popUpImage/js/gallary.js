let createModel = () => {
  let fullBody = document.querySelector("body");
  fullBody.insertAdjacentHTML(
    "beforeend",

    `<body>
    <div class="model-container" aria-model="true" role="dialog" >
        <div class="model-overlay">
            <div class="model-btn-cntainer">
                <button class="left-arrow arrow" id="previous">
                <i class="fa-sharp fa-solid fa-arrow-left"></i>
                </button>
                <button class="cross-arrow arrow" id="cencel">
                <i class="fa-sharp fa-solid fa-xmark"></i>
                </button>
                <button class="right-arrow arrow" id="next">
                <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <div class="indicator-container">
                <button class="indicator-btn active"></button>
                
               

            </div>
            <div class="imageContainer">
                
               
                <img  src="" alt="">
                
            </div>
        </div>
    </div>
</body>`
  );
};
createModel();

class Model {
  constructor(model) {
    this.model = model;
  }
  openModel() {
    this.model.style.display = "grid";
  }
  closeModel() {
    this.model.style.display = "none";
    let indictorContainer = this.model.querySelector(".indicator-container");
    indictorContainer.innerHTML = `<button class="indicator-btn active"></button>`;
  }
  selectedimage(imagePath, imagealt, index) {
    let selectImg = this.model.querySelector("img");
    selectImg.src = imagePath;
    selectImg.alt = imagealt;
    let button = this.model.querySelectorAll(".indicator-btn");
    button.forEach((btn) => {
      btn.classList.remove("active");
    });
    button[index].classList.add("active");
  }

  attachEvent() {
    this.model.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {
        selectedImage = 0;
        this.closeModel();
      }
    });
  }
}

let modelContainer = document.querySelector(".model-container");
let ourModel = new Model(modelContainer);
ourModel.attachEvent();
let imgSrcFood = [
  {
    src: "images/food/food-2.jpg",
    alt: "lemons",
  },
  {
    src: "images/food/food-3.jpg",
    alt: "cherries",
  },
  {
    src: "images/food/food-4.jpg",
    alt: "orange",
  },
  {
    src: "images/food/food-5.jpg",
    alt: "melon",
  },
  {
    src: "images/food/food-6.jpg",
    alt: "avacado",
  },
  {
    src: "images/food/food-7.jpg",
    alt: "blueberries",
  },
];

let imgSrcMountain = [
  {
    src: "images/mountain/mountain-1.jpg",
    alt: "Mountain scene",
  },
  {
    src: "images/mountain/mountain-2.jpg",
    alt: "Mountain scene",
  },
  {
    src: "images/mountain/mountain-3.jpg",
    alt: "Mountain scene",
  },
  {
    src: "images/mountain/mountain-4.jpg",
    alt: "Mountain scene",
  },
  {
    src: "images/mountain/mountain-5.jpg",
    alt: "Mountain scene",
  },
  {
    src: "images/mountain/mountain-6.jpg",
    alt: "Mountain scene",
  },
  {
    src: "images/mountain/mountain-7.jpg",
    alt: "Mountain scene",
  },
];

let imgSrcPlant = [
  {
    src: "images/plant/plant-1.jpg",
    alt: "house plant",
  },
  {
    src: "images/plant/plant-2.jpg",
    alt: "house plant",
  },
  {
    src: "images/plant/plant-3.jpg",
    alt: "house plant",
  },
  {
    src: "images/plant/plant-4.jpg",
    alt: "house plant",
  },
  {
    src: "images/plant/plant-5.jpg",
    alt: "house plant",
  },
];

// previous Event Listener

let Food = document.getElementById("Food");
let Mountain = document.getElementById("Mountains");
let Plant = document.getElementById("Plants");
let selectedImage = 0;
let selectedArray = [];

Food.addEventListener("click", () => {
  for (let i = 0; i < imgSrcFood.length - 1; i++) {
    let indicator = document.querySelector(".indicator-container");

    let button = document.createElement("button");

    button.classList.add("indicator-btn");

    indicator.append(button);
  }
  ourModel.openModel();
  ourModel.selectedimage(
    imgSrcFood[selectedImage].src,
    imgSrcFood[selectedImage].alt,
    selectedImage
  );

  selectedArray = imgSrcFood;

  let button = document.querySelectorAll(".indicator-btn");

  button.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      selectedImage = i;
      ourModel.selectedimage(
        selectedArray[selectedImage].src,
        selectedArray[selectedImage].alt,
        selectedImage
      );
      console.log(i);
      console.log(btn);
    });
  });
  setInterval(nextimg,900);
});
Mountain.addEventListener("click", () => {
  for (let i = 0; i < imgSrcMountain.length - 1; i++) {
    let indicator = document.querySelector(".indicator-container");

    let button = document.createElement("button");

    button.classList.add("indicator-btn");

    indicator.append(button);
  }
  ourModel.openModel();
  ourModel.selectedimage(
    imgSrcMountain[selectedImage].src,
    imgSrcMountain[selectedImage].alt,
    selectedImage
  );

  selectedArray = imgSrcMountain;

  let button = document.querySelectorAll(".indicator-btn");

  button.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      selectedImage = i;
      ourModel.selectedimage(
        selectedArray[selectedImage].src,
        selectedArray[selectedImage].alt,
        selectedImage
      );
      console.log(i);
      console.log(btn);
    });
  });
  setInterval(nextimg,900);
});

Plant.addEventListener("click", () => {
  for (let i = 0; i < imgSrcPlant.length - 1; i++) {
    let indicator = document.querySelector(".indicator-container");

    let button = document.createElement("button");

    button.classList.add("indicator-btn");

    indicator.append(button);
  }
  ourModel.openModel();
  ourModel.selectedimage(
    imgSrcPlant[selectedImage].src,
    imgSrcPlant[selectedImage].alt,
    selectedImage
  );
  selectedArray = imgSrcPlant;

  let button = document.querySelectorAll(".indicator-btn");

  button.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      selectedImage = i;
      ourModel.selectedimage(
        selectedArray[selectedImage].src,
        selectedArray[selectedImage].alt,
        selectedImage
      );
      console.log(i);
      console.log(btn);
    });
  });
    setInterval(nextimg,900);
});

//btn previous next cencel

let previous = document.getElementById("previous");
let next = document.getElementById("next");
let cencel = document.getElementById("cencel");

let previousimg = () => {
  selectedImage--;
  if (selectedImage < 0) {
    selectedImage = selectedArray.length - 1;
  }
  ourModel.selectedimage(
    selectedArray[selectedImage].src,
    selectedArray[selectedImage].alt,
    selectedImage
  );
};
previous.addEventListener("click", () => {
  previousimg();
});

let nextimg = () => {
  selectedImage++;
  if (selectedImage > selectedArray.length - 1) {
    selectedImage = 0;
  }
  ourModel.selectedimage(
    selectedArray[selectedImage].src,
    selectedArray[selectedImage].alt,
    selectedImage
  );
};
next.addEventListener("click", () => {
  nextimg();
});

let close = () => {
  selectedImage = 0;
  ourModel.closeModel();
};
cencel.addEventListener("click", () => {
  close();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    close();
  } else if (e.key === "ArrowRight") {
    nextimg();
  } else if (e.key === "ArrowLeft") {
    previousimg();
  }
});

//automatic


