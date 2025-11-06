interface IWeapon {
    getAttackStrength(): number;
}

class Katana implements IWeapon {
    getAttackStrength(): number {
        return 60;
    }
}

class Shuriken implements IWeapon {
    getAttackStrength(): number {
        return 20;
    }
}

class Kunai implements IWeapon {
    getAttackStrength(): number {
        return 40;
    }
}

class Kama implements IWeapon {
    getAttackStrength(): number {
        return 70;
    }
}

class Naginata implements IWeapon {
    getAttackStrength(): number {
        return 60;
    }
}



interface IArmor {
    getDefense(): number;
}

class StrawArmor implements IArmor {
    getDefense(): number {
        return 30;
    }
}

class BronzeArmor implements IArmor {
    getDefense(): number {
        return 50;
    }
}

class IronArmor implements IArmor {
    getDefense(): number {
        return 80
    }
}

class SteelArmor implements IArmor {
    getDefense(): number {
        return 120;
    }
}





enum NinjaType {
    GENIN,
    CHUNIN,
    JOUNIN,
    SUPA
}

class Ninja {
    weapon: IWeapon;
    armor: IArmor;
    constructor(weapon: IWeapon, armor: IArmor) {
        this.weapon = weapon;
        this.armor = armor;
    }
    getAttackDamage(): number {
        return this.weapon.getAttackStrength();
    }

    getDefense(): number {
        return this.armor.getDefense();
    }

    changeWeapon(newWeapon: IWeapon) {
        this.weapon = newWeapon;
    }

    changeArmor(newArmor: IArmor) {
        this.armor = newArmor;
    }

    
}



const ninja = new Ninja(new Katana(), new BronzeArmor());

class NinjaFactory {
    getNinja(Type: NinjaType): Ninja {
        switch (Type) {
            case NinjaType.GENIN: return new Ninja(new Kunai(), new StrawArmor());
            case NinjaType.CHUNIN: return new Ninja(new Katana(), new BronzeArmor());
            case NinjaType.JOUNIN: return new Ninja(new Kama(), new IronArmor());
            case NinjaType.SUPA: return new Ninja(new Naginata(), new SteelArmor());
            default: return new Ninja(new Kunai(), new StrawArmor());
        }
    }
}

const starterNinja = new NinjaFactory().getNinja(NinjaType.GENIN);
const mediumNinja = new NinjaFactory().getNinja(NinjaType.JOUNIN);
const masterNinja = new NinjaFactory().getNinja(NinjaType.CHUNIN);
const superNinja = new NinjaFactory().getNinja(NinjaType.SUPA);

const ninjas: Ninja[] = [starterNinja, mediumNinja, masterNinja, superNinja];

ninjas.forEach(ninja=> {
    console.log(ninja.getDefense());
});