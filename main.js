$(document).ready(function () {
  // REFERENZE
  var addItem = $(`#addItem`);
  var itemList = $(`.itemList`);
  var template = $(`#template li`);
  var elemErr = $(`.err`);

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
      text: `Cercare la capitale della Birmania`,
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

  // favorire utente con focus al caricamento sull'input
  addItem.focus();
  // inserimento nuova todo
  addItem.keyup((e) => {
    if (e.which == 13 && !addItem.val() == ``) {
      var templateC = template.clone();
      templateC.find(`span`).text(addItem.val().trim().toLowerCase());
      itemList.append(templateC);
      addItem.val(``);
    } else if (e.which == 13 && addItem.val() == ``) {
      elemErr.removeClass(`no-show`);
    } else if (
      e.which != 32 &&
      e.which != 37 &&
      e.which != 39 &&
      e.which != 8 &&
      !elemErr.hasClass(`no-show`)
    ) {
      elemErr.addClass(`no-show`);
    }
  });

  // $(`body`).on(`click`, `.itemList li`, ()=>{

  // });

  // ho provato con una sintassi similar vue ma non scrive i testi
  // for (todo in todos) {
  //   // colonare il template
  //   var templateC = template.clone();
  //   // passargli le props
  //   templateC.children(`span`).text(todo.text);
  //   // iniettarlo nella lista
  //   itemList.append(templateC);
  // }

  $(`body`).on(`click`, `.itemList li i`, function () {
    $(this).parent().remove();
  });
  // chiusura document ready
});

// FUNZIONI UTILITY
