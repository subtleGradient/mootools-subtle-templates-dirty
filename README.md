SubtleTemplateDirty
===================

Description
-----------

1. Pass in an element to your new SubtleTemplateDirty.

2. Then use the set method to set the value or text of its child elements who match a selector based on the key you pass in.

	* EG: `mySubtleTemplateDirty.set('coffee', 'coffee rocks!');`

3. It'll look for the first element that matches the selector `#coffee, [name=coffee], .coffee`

4. Then it'll set the `value` or `text` of that element to `'coffee rocks!'`

5. Then is creates a function for that key that sets that same element in the same way
	
	* So if you keep setting the same key over and over, it won't have to do all the work of matching up the element to the key again

6. You can create your own custom setters!

	`mySubtleTemplateDirty.Properties.flarm = {set:function(value){ /* custom code goes here */ }}`
