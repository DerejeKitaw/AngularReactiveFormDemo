#06_dataModelFormModel
The data model and the form model

At the moment, the form is displaying empty values. The HeroDetailComponent should display values of a hero, possibly a hero retrieved from a remote server.

In this app, the HeroDetailComponent gets its hero from a parent HeroListComponent

The hero from the server is the data model. The FormControl structure is the form model.

The component must copy the hero values in the data model into the form model. There are two important implications:

The developer must understand how the properties of the data model map to the properties of the form model.

User changes flow from the DOM elements to the form model, not to the data model. The form controls never update the data model.

The form and data model structures need not match exactly. You often present a subset of the data model on a particular screen. But it makes things easier if the shape of the form model is close to the shape of the data model.

In this HeroDetailComponent, the two models are quite close.

Recall the definition of Hero in data-model.ts:

