/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b9crrojhjlds2j9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jhfjqitx",
    "name": "owner",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b9crrojhjlds2j9")

  // remove
  collection.schema.removeField("jhfjqitx")

  return dao.saveCollection(collection)
})
