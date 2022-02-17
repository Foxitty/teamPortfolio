let objFunc = {
  dist: {
    finalPosition: 0,
    startX: 0,
    movement: 0,
  },
  onStart(event) {
    event.preventDefault();
    this.dist.startX = event.clientX;
    document
      .querySelector("#home-magicwall")
      .addEventListener("mousemove", this.onMove);
  },

  onMove(event) {
    event.preventDefault();
    const pointerStart = event.clientX;
    const finalPosition = this.updatePosition(pointerStart);
    this.moveSlide(finalPosition);
  },

  moveSlide(position) {
    this.dist.movePosition = position;
    const areaMove = document.querySelector("#home-magicwall ul");

    areaMove.style.transform = `translate3d(${position}px, 0, 0)`;
  },

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  },

  changeEndStart() {
    const area1 = document.querySelector("#home-magicwall ul li:first-child");
    const area2 = document.querySelector("#home-magicwall ul li:last-child");
    const area3 = document.querySelector("#home-magicwall ul");
    console.log(`AREA 1 ${area1.getBoundingClientRect().x}`);
    console.log(`AREA 2 ${area2.getBoundingClientRect().x}`);
    console.log(`AREA 3 ${area3.getBoundingClientRect().width}`);

    if (area1.getBoundingClientRect().x > 400) {
      this.moveSlide(0);
    }

    if (
      area3.getBoundingClientRect().width - 100 >
      area2.getBoundingClientRect().x
    ) {
      this.moveSlide(0);
    }
  },

  endEvents(event) {
    document
      .querySelector("#home-magicwall")
      .removeEventListener("mousemove", this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
    this.changeEndStart();
    this.dist.movement = 0;
  },

  callEvents() {
    document
      .querySelector("#home-magicwall")
      .addEventListener("mousedown", this.onStart);
    document
      .querySelector("#home-magicwall")
      .addEventListener("mouseup", this.endEvents);
    document.addEventListener("mouseup", this.endEvents);
  },

  binds() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.endEvents = this.endEvents.bind(this);
  },

  init() {
    this.binds();
    this.callEvents();
  },
};

objFunc.init();
