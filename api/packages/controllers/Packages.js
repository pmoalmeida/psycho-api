'use strict';

/**
 * Packages.js controller
 *
 * @description: A set of functions called "actions" for managing `Packages`.
 */

module.exports = {

  /**
   * Retrieve packages records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.packages.search(ctx.query);
    } else {
      return strapi.services.packages.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a packages record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.packages.fetch(ctx.params);
  },

  /**
   * Count packages records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.packages.count(ctx.query);
  },

  /**
   * Create a/an packages record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.packages.add(ctx.request.body);
  },

  /**
   * Update a/an packages record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.packages.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an packages record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.packages.remove(ctx.params);
  }
};
