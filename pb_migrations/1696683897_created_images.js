/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "n5x4u6lxhola10k",
    "created": "2023-10-07 13:04:57.975Z",
    "updated": "2023-10-07 13:04:57.975Z",
    "name": "images",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ey1qvmuo",
        "name": "Photo",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "up9pijse",
        "name": "Title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("n5x4u6lxhola10k");

  return dao.deleteCollection(collection);
})
