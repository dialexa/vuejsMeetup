const snackbar = (function($) {
  const $snackbar = $('.js-snackbar');
  const queue = [];
  let id = 0;

  /**
   * Add a snackbarItem to the queue
   * @param {string} text
   * @param {number} ms
   */
  function add(text, ms = 4000) {
    let itemId = id++;
    const item = { id: itemId, text };
    queue.push(item);

    $snackbarItem = $(
      `<div id="app-snackbar-item-${itemId}" class="app-snackbar">${text}</div>`,
    );
    $snackbar.append($snackbarItem);

    // ugly hack to force animation since append and addClass batch for some reason
    setTimeout(() => $snackbarItem.addClass('app-snackbar--show'), 0);
    setTimeout(remove, ms, itemId);
  }

  /**
   * Remove a snackbarItem from the queue by Id
   * @param {number} id
   */
  function remove(id) {
    const toRemove = queue.find(item => item.id === id);
    if (!toRemove) return;

    const $snackbarItem = $(`#app-snackbar-item-${id}`);
    $snackbarItem.on('transitionend', () => $snackbarItem.remove());
    $snackbarItem.removeClass('app-snackbar--show');
  }

  return { add, remove };
})(jQuery);
