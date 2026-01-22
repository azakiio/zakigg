/// <reference path="../pb_data/types.d.ts" />
migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('b9crrojhjlds2j9');

		// update
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'ldy5an6a',
				name: 'name',
				type: 'text',
				required: false,
				presentable: false,
				unique: false,
				options: {
					min: null,
					max: null,
					pattern: ''
				}
			})
		);

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('b9crrojhjlds2j9');

		// update
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'ldy5an6a',
				name: 'field',
				type: 'text',
				required: false,
				presentable: false,
				unique: false,
				options: {
					min: null,
					max: null,
					pattern: ''
				}
			})
		);

		return dao.saveCollection(collection);
	}
);
