export class Roller {
    private _distribution: Map<number, number>;
    private _last: number;
    private _faces: number;

    // specifies the number of faces the die has. It must have at least 2 faces
    // so any invalid values should default to 6 to represent the common 
    // six-sided die.
    constructor(faces: number) {
        this._last = 0;
        if (faces < 2) 
            this._faces = 6;
        else
            this._faces = Math.trunc(faces);
        this._distribution = new Map<number, number>();
        for (let i = 1; i <= this._faces; i++) {
            this._distribution.set(i, 0);
        }
    }

    // specifies which number should be rolled and returns the recorded roll. 
    // If the value provided is not valid for the number of faces the die has,
    // no record of the roll should be made and 0 should be returned. However,
    // if the value provided is between 1 and the number of faces (inclusive),
    // then:
    //   1. that same value should be returned,
    //   2. that value should be stored as the last roll, and
    //   3. the distribution should update the distribution record so that the
    //      key (value rolled) has an updated value that increases the number
    //      of rolls for that face by 1
    roll(value: number): number{
        var trunc_val = Math.trunc(value);
        if (trunc_val < 1 || trunc_val > this._faces)
            return 0;
        else {
            var cur: number = this._distribution.get(trunc_val);
            this._distribution.set(trunc_val, ++cur);
            this._last = trunc_val;
            return trunc_val;
        }
    }

    // returns the value of the latest die roll. If no rolls have been made
    // yet, then it should return 0.
    last(): number {
        return this._last;
    }

    // returns a Map that represents the current distribution of rolls for each
    // possible face that can be rolled. The map's key should be the face
    // value and its value should be the number of times that face has been
    // rolled. Even if a face has not yet been rolled, its key should have a
    // value of 0.
    distribution(): Map<number, number>{
        return this._distribution;
    }

    //Getting for the number of faces on the initialized dice
    get_faces(): number {
        return this._faces;
    }
} // end of Roller class