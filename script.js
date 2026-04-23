// Constructor - blueprint for treasures
function DivineWeapon(name, wielder, power) {
    this.name = name;
    this.wielder = wielder;
    this.power = power;
}

// Factory Function - flexible creation
function createTreasure(type, owner) {
    return {
        type,
        owner,
        enchant() { return `${this.type} glows with magic`; }
    };
}

// Module Pattern - workshop secrets
const DwarvenWorkshop = (function() {
    const secretTechnique = "Ancient magic";
    return {
        forgeTreasure(specs) { /* uses secret */ }
    };
})();