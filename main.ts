// 타입 추론
let monsterName: string;
let level: number;
let hasGold: boolean;
let skill: string | undefined;
let area: string | null;

monsterName = '코드잇 고블린';
level = 255;
hasGold = false;
skill = undefined;
area = null;

console.log(
    `${monsterName}의 레벨은 ${level}이고,\n` +
    `${hasGold ? '해치우면 골드를 얻는' : '해치워도 골드를 주지 않는'} 몬스터입니다.\n` +
    `${skill ? `가진 능력은 ${skill} 이고 \n` : ''}` +
    `${area ? `출현 지역은 ${area} 입니다.` : ''}`
);

// 배열

const items: string[] = [];
items.push('갑옷');
items.push('빨간 물약');
console.log(`${items.join(', ')}을/를 획득했다!`);

// interface, 함수, 타입 별칭

type Point = [number, number];

const current: [number, number] = [0, 0];
const target: [number, number] = [4, 5];
const dx = target[0] - current[0];
const dy = target[1] - current[1];

function getDiff(fromPoint: Point, toPoint: Point): Point {
    let dx = toPoint[0] - fromPoint[0];
    let dy = toPoint[1] - fromPoint[1];
    return [dx, dy];
}

interface Entity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

interface Monster extends Entity {
    name: string;
    level: number;
    hasGold?: boolean;
    skills: string[];
    move: (fromPoint: Point, toPoint: Point) => void;
}

let monster: Monster = {
    id: 'g001',
    name: '고블린',
    level: 22,
    skills: ['태권도', '특공무술'],
    createdAt: new Date(),
    updatedAt: new Date(),
    move(fromPoint, toPoint) {
        let [dx, dy] = getDiff(fromPoint, toPoint);
        console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
    }
}

console.log(
    `${monster.name}(${monster.id})의 레벨은 ${monster.level}이고,\n` +
    `${monster.hasGold ? '해치우면 골드를 얻는' : '해치워도 골드를 주지 않는'} 몬스터입니다.\n` +
    `${monster.skills.length > 0 ? `가진 능력은 ${monster.skills.join (', ')}입니다.` : ''}`
);

monster.move(current, target);

// enum
enum Job {
    Knight = 'Knight',
    Archer = 'Archer',
    Mage = 'Mage',
    Priest = 'Priest',
    Thief = 'Thief'
}

console.log(Job);

// union type, intersection type

interface Equipment {
    id: string;
    name: string;
    price: number;
}

interface Weapon extends Equipment {
    attack: number
}

interface Armor extends Equipment {
    defence: number
}

function printEquipment(equipment: Weapon | Armor | (Weapon & Armor)): void {
    console.log(`이름: ${equipment.name}`);
    if ('attack' in equipment && 'defence' in equipment) {
        console.log(`이 장비는 공격력을 ${equipment.attack}, 방어력을 ${equipment.defence} 증가 시킵니다.`);
        return;
    }

    // 무기인 경우 아래 코드를 실행합니다.
    if ('attack' in equipment) {
        console.log(`이 장비는 공격력을 ${equipment.attack} 증가 시킵니다.`);
    }
    // 방어구인 경우 아래 코드를 실행합니다.
    if ('defence' in equipment) {
        console.log(`이 장비는 방어력을 ${equipment.defence} 증가 시킵니다.`);
    }
}

const item1: Weapon = {
    id: 'w001',
    name: '전쟁 도끼',
    price: 100,
    attack: 15,
};

const item2: Armor = {
    id: 'a001',
    name: '사슬 갑옷',
    price: 200,
    defence: 52,
};

const item3: Weapon & Armor = {
    id: 'g001',
    name: '서리불꽃 글러브',
    price: 100,
    attack: 5,
    defence: 42,
};

printEquipment(item1);
printEquipment(item2);
printEquipment(item3);

// keyof, typeof

interface Item {
    id: string;
    name: string;
    price: number;
    description: string;
}

type ItemProperty = keyof Item;

const itemTableKeys: [ItemProperty, string][] = [
    ['name', '이름'],
    ['price', '가격'],
    ['description', '설명'],
];

const item: Item = {
    id: 'h001',
    name: '힐링 포션',
    price: 200,
    description: '마시면 체력을 50 회복한다.',
};

for (let [propertyKey, propertyName] of itemTableKeys) {
    console.log(`${propertyName} | ${item[propertyKey]}`);
}

// 제너릭 타입, Map 자료구조

const stock = new Map<string, number>();
stock.set('g001', 1);
stock.set('g002', 2);
console.log(stock.get('g001'));
console.log(stock.get('g002'));