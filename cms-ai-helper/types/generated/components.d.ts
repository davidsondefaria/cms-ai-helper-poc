import type { Schema, Attribute } from '@strapi/strapi';

export interface LastNameLastName extends Schema.Component {
  collectionName: 'components_last_name_last_names';
  info: {
    displayName: 'Last Name';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    lastName: Attribute.String;
    email: Attribute.Email;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'last-name.last-name': LastNameLastName;
    }
  }
}
