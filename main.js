$(document).ready(function () {
  // REFERENZE
  var addItem = $(`#addItem`);
  var itemList = $(`.itemList`);
  var template = $(`#template li`);

  // PROPS
  var todos = [
    {
      text: `Far saltare la tintoria dei Jefferson`,
      done: false,
    },
    {
      text: `Ammazzare a Frenky Culo di Gomma`,
      done: false,
    },
    {
      text: `Cercare la capitale della birmania`,
      done: true,
    },
  ];
  //POPOLAZIONE LISTA
  for (let i = 0; i < todos.length; i++) {
    // colonare il template
    var templateC = template.clone();
    // passargli le props
    templateC.children(`span`).text(todos[i].text);
    // iniettarlo nella lista
    itemList.append(templateC);
  }
  // EVENTI
  // chiusura document ready
});

// FUNZIONI UTILITY
