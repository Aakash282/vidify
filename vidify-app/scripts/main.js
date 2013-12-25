require([
  '$api/models',
  'scripts/search',
  'scripts/auth',
  'scripts/query',
  'scripts/swfobject'
], function(models, search, auth, query, sqfobject) {
  'use strict';

  search.search();

});
