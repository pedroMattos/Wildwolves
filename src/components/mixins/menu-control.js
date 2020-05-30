export default {
  /* eslint-disable no-plusplus */
  mounted() {
    function menuInit() {
      // const controlador = document.getElementById('controller');
      // const clone = document.getElementById('clone');
      const menu = document.getElementById('menu');
      const dropMenu = document.getElementsByClassName('drop-menu')[0];
      const itens = document.getElementsByClassName('list-iten');
      dropMenu.addEventListener('click', () => {
        if (dropMenu.classList.contains('collapsed')) {
          dropMenu.classList.remove('collapsed');
          dropMenu.classList.add('expanded');
          let totalHeight = 0;
          for (let i = 0; i < itens.length; i++) {
            totalHeight += itens[i].offsetHeight;
            menu.setAttribute('style', `height:${totalHeight + 100}px`);
          }
        } else {
          dropMenu.classList.add('collapsed');
          dropMenu.classList.remove('expanded');
          menu.removeAttribute('style');
        }
      });
    }
    menuInit();
  },
};
