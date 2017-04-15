#04 Nested FormGroups
This form is getting big and unwieldy. You can group some of the related FormControls into a nested FormGroup. 

The street, city, state, and zip are properties that would make a good address FormGroup. 

Nesting groups and controls in this way allows you to mirror the hierarchical structure of the data model and helps track validation and state for related sets of controls.

You used the FormBuilder to create one FormGroup in this component called heroForm. 

Let that be the parent FormGroup. Use FormBuilder again to create a child FormGroup that encapsulates the address controls; assign the result to a new address property of the parent FormGroup.