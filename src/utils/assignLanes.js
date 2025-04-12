/**
 * Takes an array of items and assigns them to lanes based on start/end dates.
 * @returns an array of arrays containing items.
 */
export function assignLanes(items) {
  const sortedItems = items.sort((a, b) => //ordenar por data inicial
      new Date(a.start) - new Date(b.start)
  );
  const lanes = [];

  function assignItemToLane(item) {
      for (const lane of lanes) { //initially is 0  - > then lane = item with Recruit Translators
          if (new Date(lane[lane.length - 1].end) < new Date(item.start)) { //compara o item anterior com o item atual(do param da funcao) 
          //  verifica se a data final do item anterior vem antes da data inicial do item atual
              lane.push(item); // lanes = [[item1] , [item2] ]
              return; //encerrou a função
          }
      }
      lanes.push([item]); //só adiciona o ultimo item
     
 
      /*
      //lanes = [
      [{
        id: 1,
            start: "2021-01-14",
            end: "2021-01-22",
            name: "Recruit translators",

      }]
      ]
      */
  }
 /*
  item : {
    id: 1,
    start: "2021-01-14",
    end: "2021-01-22",
    name: "Recruit translators",
  },
 */
  for (const item of sortedItems) { //16 times
      assignItemToLane(item);
  }
  return lanes;
}
