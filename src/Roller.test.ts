import {Roller} from './Roller';

describe("Test Faces Basic Happy", () => {
  test("Test to check _faces is inited if valid given", () => {
    var dice: Roller = new Roller(2);
    expect(dice.get_faces()).toBe(2);
  });
})

describe("Test Faces Basic Invalid", () => {
  test("Test to check _faces is inited if invalid given", () => {
    var dice: Roller = new Roller(-1);
    expect(dice.get_faces()).toBe(6);
  });
})


describe("Test Faces Basic Hex", () => {
  test("Test to check _faces is inited if Hex is given", () => {
    var dice: Roller = new Roller(0x3);
    expect(dice.get_faces()).toBe(3);
  });
})

describe("Test Faces Basic Decimal", () => {
  test("Test to check _faces is inited if Hex is given", () => {
    var dice: Roller = new Roller(2.4);
    expect(dice.get_faces()).toBe(2);
  });
})

describe("Test Distrobution Basic Size Happy", () => {
  test("Test to check _distrobution size is inited if valid given", () => {
    var dice: Roller = new Roller(2);
    let map: Map<number, number> = dice.distribution();
    expect(map.size).toEqual(2);
  });
})

describe("Test to check _distrobution size is inited if invalid given", () => {
  test("Test to check _faces is inited", () => {
    var dice: Roller = new Roller(1);
    let map: Map<number, number> = dice.distribution();
    expect(map.size).toEqual(6);
  });
})

describe("Test Distrobution Value if Valid Given", () => {
  test("Test to check _faces is inited", () => {
    var dice: Roller = new Roller(2);
    let map: Map<number, number> = dice.distribution();
    expect(map.get(1)).toEqual(0);
  });
})

describe("Test Distrobution Value if Invalid Given", () => {
  test("Test to check _faces is inited", () => {
    var dice: Roller = new Roller(2);
    let map: Map<number, number> = dice.distribution();
    expect(map.has(3)).toEqual(false);
  });
})

describe("Test Last Valid", () => {
  test("Test to check _last is Inited Valid", () => {
    var dice: Roller = new Roller(2);
    expect(dice.last()).toEqual(0);
  });
})

describe("Test Last Val Invalid", () => {
  test("Test to check _last is Inited Invalid", () => {
    var dice: Roller = new Roller(-1);
    expect(dice.last()).toEqual(0);
  });
})

describe("Test Basic Roll Happy", () => {
  test("Test to check roll Basic Valid", () => {
    var dice: Roller = new Roller(2);
    expect(dice.roll(2)).toEqual(2);
  });
})

describe("Test Basic Roll Invalid Larger", () => {
  test("Test to check roll Basic Invalid Larger", () => {
    var dice: Roller = new Roller(2);
    expect(dice.roll(3)).toEqual(0);
  });
})

describe("Test Basic Roll Invalid Zero", () => {
  test("Test to check roll Basic Invalid Zero", () => {
    var dice: Roller = new Roller(2);
    expect(dice.roll(0)).toEqual(0);
  });
})

describe("Test Basic Roll Float", () => {
  test("Test to check roll Basic Float", () => {
    var dice: Roller = new Roller(2);
    expect(dice.roll(2.3)).toEqual(2);
  });
})

describe("Test Basic Roll Invalid Zero", () => {
  test("Test to check roll Basic Invalid", () => {
    var dice: Roller = new Roller(2);
    expect(dice.roll(0)).toEqual(0);
  });
})

describe("Test Basic Last Roll Invalid", () => {
  test("Test to check roll Basic Invalid", () => {
    var dice: Roller = new Roller(2);
    dice.roll(1);
    dice.roll(3);
    expect(dice.last()).toEqual(1);
  });
})

describe("Test Basic Distro Happy", () => {
  test("Test to check Distrobution Valid", () => {
    var dice: Roller = new Roller(2);
    dice.roll(1);
    dice.roll(1);
    let map: Map<number, number> = dice.distribution();
    expect(map.get(1)).toEqual(2);
  });
})

describe("Test Basic Distro 0", () => {
  test("Test to check Distrobution Valid Unrolled", () => {
    var dice: Roller = new Roller(2);
    dice.roll(1);
    dice.roll(1);
    let map: Map<number, number> = dice.distribution();
    expect(map.get(2)).toEqual(0);
  });
})

