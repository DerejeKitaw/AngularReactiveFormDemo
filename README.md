#05_inspectFormControlProperties
Inspect FormControl Properties

At the moment, you're dumping the entire form model onto the page. Sometimes you're interested only in the state of one particular FormControl.

You can inspect an individual FormControl within a form by extracting it with the .get() method. You can do this within the component class or display it on the page by adding the following to the template, immediately after the {{form.value | json}} interpolation as follows:
src/app/hero-detail.component.html
COPY CODE
<p>Name value: {{ heroForm.get('name').value }}</p>
To get the state of a FormControl that’s inside a FormGroup, use dot notation to path to the control.

src/app/hero-detail.component.html
COPY CODE
<p>Street value: {{ heroForm.get('address.street').value}}</p>
You can use this technique to display any property of a FormControl such as one of the following:

Property	Description
myControl.value	
the value of a FormControl.

myControl.status	
the validity of a FormControl. Possible values: VALID, INVALID, PENDING, or DISABLED.

myControl.pristine	
true if the user has not changed the value in the UI. Its opposite is myControl.dirty.

myControl.untouched	
true if the control user has not yet entered the HTML control and triggered its blur event. Its opposite is myControl.touched.

Learn about other FormControl properties in the AbstractControl API reference.

One common reason for inspecting FormControl properties is to make sure the user entered valid values. Read more about validating Angular forms in the Form Validation guide.