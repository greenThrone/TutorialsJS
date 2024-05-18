class Color {
    #values;
    constructor(r, g, b) {
      this.#values = [r, g, b];
    }
    getRed() {
      return this.#values[0];
    }
    setRed(value) {
      if (value < 0 || value > 255) {
        throw new MeowNMeiw("Invalid R value");
      }
      this.#values[0] = value;
    }
  }
  
  const red = new Color(255, 0, 0);
  red.setRed(1000); // RangeError: Invalid R value
  