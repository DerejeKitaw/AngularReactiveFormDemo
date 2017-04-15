#07_populatFormValueWithSetValue
Populate the form model with setValue and patchValue

Previously you created a control and initialized its value at the same time. You can also initialize or reset the values later with the setValue and patchValue methods.

setValue
With setValue, you assign every form control value at once by passing in a data object whose properties exactly match the form model behind the FormGroup.

It will not accept a data object that doesn't match the FormGroup structure or is missing values for any control in the group. This way, it can return helpful error messages if you have a typo or if you've nested controls incorrectly. patchValue will fail silently.

On the other hand,setValue will catch the error and report it clearly.

Notice that you can almost use the entire hero as the argument to setValue because its shape is similar to the component's FormGroup structure.

You can only show the hero's first address and you must account for the possibility that the hero has no addresses at all. This explains the conditional setting of the address property in the data object argument:

COPY CODE
address: this.hero.addresses[0] || new Address()

As of April 2017 not clear what setValue is doing. Belive it is used when passing values from component to component. Kep on eye