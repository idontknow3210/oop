export default function getDescription(unitObj) {
    const result = [];
    const { special } = unitObj;
    if (!special) {
      return [];
    }
  
    for (let i = 0; i < special.length; i += 1) {
      if (!special[i].description) {
        special[i].description = 'Описание недоступно';
      }
      result.push({
        id: special[i].id,
        name: special[i].name,
        icon: special[i].icon,
        description: special[i].description,
      });
    }
  
    return result;
  }
  
  const unit = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
    ],
  };
  
  const unit2 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [],
  };
  
  const unit3 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  };
  
  console.log(getDescription(unit));
  console.log(getDescription(unit2));
  console.log(getDescription(unit3));