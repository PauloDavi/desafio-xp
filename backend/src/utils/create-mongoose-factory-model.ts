/* eslint-disable @typescript-eslint/no-var-requires */
import * as mongoose from 'mongoose';
import { mongoosePagination } from 'mongoose-paginate-ts';

export function createMongooseFactoryModel(
  name: string,
  schema: mongoose.Schema<any>,
) {
  return {
    name,
    useFactory: () => {
      schema.plugin(require('mongoose-autopopulate'));
      schema.plugin(require('mongoose-delete'), {
        deletedAt: true,
        deletedBy: true,
        overrideMethods: true,
      });
      schema.plugin(mongoosePagination);

      return schema;
    },
  };
}
