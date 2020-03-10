'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/web/login',controller.web.log.login)
  router.post('/web/register',controller.web.log.register)
  router.post('/crm/login', controller.after.login.login);
  router.get('/crm/menu',controller.after.menu.list)
};
