import wixData from 'wix-data';


// This function is querying the Member Directory Dataset
// From there, we create a list of options for the dropdown input bar to have. Each returned row from the dataset query will initially be an option for the dropdown.
// We widdle away what we don't want from the rows by mapping the variable 'table_row' to each result and adding it to the list of results.
// Keep in mind that the collection that we're pulling from to set up this dropdown menu is the Chapter collection.
$w.onReady(() => {
    loadChapters();
})

let debounceTimer;
let lastFilterFullName;
let lastFilterChapter;
/**
*	Adds an event handler that runs when the cursor is inside the
 input element and a key is pressed.
	[Read more](https://www.wix.com/corvid/reference/$w.TextInputMixin.html#onKeyPress)
*	 @param {$w.KeyboardEvent} event
*/
export function searchBar_keyPress(event, $w) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 

    if(debounceTimer) {
        clearTimeout(debounceTimer);
        debounceTimer = undefined;
    }

    debounceTimer = setTimeout(() => {
        filter($w('#searchBar').value, lastFilterChapter);
    }, 500);

    filter($w('#searchBar').value, lastFilterChapter);
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
	[Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
*	 @param {$w.Event} event
*/
export function dropdown1_change(event, $w) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 

    filter(lastFilterFullName, $w('#dropdown1').value);
}

function filter(fullName, chapter) {

    if(lastFilterFullName !== fullName || lastFilterChapter !== chapter) {

        let newFilter = wixData.filter();
        
        if(fullName) {
            newFilter = newFilter.contains('fullName', fullName);
        }

        if(chapter) {
            newFilter = newFilter.contains('chapter', chapter)
        }

        // Targeting the member table titled with ID = 'table2'
        $w('#memberDirectory').setFilter(newFilter)
            .catch( (err) => {
                console.log(err);
            })
        lastFilterFullName = fullName;
        lastFilterChapter = chapter;
    }
}

// Still needs work
function loadChapters() {
    wixData.query('Chapter')
    .ascending('chapter')
        .find()
        .then(res => {
            let options = [{"value": '', 'label': 'All Chapters'}];
            options.push(...res.items.map(table_row => {
                return {'value': table_row.chapter, 'label': table_row.chapter}
            }));
            $w('#dropdown1').options = options;
        })
}


