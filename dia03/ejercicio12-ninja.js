var Katana = /** @class */ (function () {
    function Katana() {
    }
    Katana.prototype.getAttackStrength = function () {
        return 60;
    };
    return Katana;
}());
var Shuriken = /** @class */ (function () {
    function Shuriken() {
    }
    Shuriken.prototype.getAttackStrength = function () {
        return 20;
    };
    return Shuriken;
}());
var Kunai = /** @class */ (function () {
    function Kunai() {
    }
    Kunai.prototype.getAttackStrength = function () {
        return 40;
    };
    return Kunai;
}());
var Kama = /** @class */ (function () {
    function Kama() {
    }
    Kama.prototype.getAttackStrength = function () {
        return 70;
    };
    return Kama;
}());
var Naginata = /** @class */ (function () {
    function Naginata() {
    }
    Naginata.prototype.getAttackStrength = function () {
        return 60;
    };
    return Naginata;
}());
var StrawArmor = /** @class */ (function () {
    function StrawArmor() {
    }
    StrawArmor.prototype.getDefense = function () {
        return 30;
    };
    return StrawArmor;
}());
var BronzeArmor = /** @class */ (function () {
    function BronzeArmor() {
    }
    BronzeArmor.prototype.getDefense = function () {
        return 50;
    };
    return BronzeArmor;
}());
var IronArmor = /** @class */ (function () {
    function IronArmor() {
    }
    IronArmor.prototype.getDefense = function () {
        return 80;
    };
    return IronArmor;
}());
var SteelArmor = /** @class */ (function () {
    function SteelArmor() {
    }
    SteelArmor.prototype.getDefense = function () {
        return 120;
    };
    return SteelArmor;
}());
var NinjaType;
(function (NinjaType) {
    NinjaType[NinjaType["GENIN"] = 0] = "GENIN";
    NinjaType[NinjaType["CHUNIN"] = 1] = "CHUNIN";
    NinjaType[NinjaType["JOUNIN"] = 2] = "JOUNIN";
    NinjaType[NinjaType["SUPA"] = 3] = "SUPA";
})(NinjaType || (NinjaType = {}));
var Ninja = /** @class */ (function () {
    function Ninja(weapon, armor) {
        this.weapon = weapon;
        this.armor = armor;
    }
    Ninja.prototype.getAttackDamage = function () {
        return this.weapon.getAttackStrength();
    };
    Ninja.prototype.getDefense = function () {
        return this.armor.getDefense();
    };
    Ninja.prototype.changeWeapon = function (newWeapon) {
        this.weapon = newWeapon;
    };
    Ninja.prototype.changeArmor = function (newArmor) {
        this.armor = newArmor;
    };
    return Ninja;
}());
var ninja = new Ninja(new Katana(), new BronzeArmor());
var NinjaFactory = /** @class */ (function () {
    function NinjaFactory() {
    }
    NinjaFactory.prototype.getNinja = function (Type) {
        switch (Type) {
            case NinjaType.GENIN: return new Ninja(new Kunai(), new StrawArmor());
            case NinjaType.CHUNIN: return new Ninja(new Katana(), new BronzeArmor());
            case NinjaType.JOUNIN: return new Ninja(new Kama(), new IronArmor());
            case NinjaType.SUPA: return new Ninja(new Naginata(), new SteelArmor());
            default: return new Ninja(new Kunai(), new StrawArmor());
        }
    };
    return NinjaFactory;
}());
var starterNinja = new NinjaFactory().getNinja(NinjaType.GENIN);
var mediumNinja = new NinjaFactory().getNinja(NinjaType.JOUNIN);
var masterNinja = new NinjaFactory().getNinja(NinjaType.CHUNIN);
var superNinja = new NinjaFactory().getNinja(NinjaType.SUPA);
var ninjas = [starterNinja, mediumNinja, masterNinja, superNinja];
ninjas.forEach(function (ninja) {
    console.log(ninja.getDefense());
});
