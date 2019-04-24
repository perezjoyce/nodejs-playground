
//======== REGULAR FUNCITON ==========
// const square = function (x) {
//     return x * x
// }

//======== ARROW FUNCTION: LONG FORM VERSION ============
// const square = (x) => {
//     return x*x 
// }

//======== ARROW FUNCTION: SHORTHAND SYNTAX ============
// const square = (x) => x*x 

// console.log(square(3))

// ============================================================
// ============================================================

/* ARROW FUNCTION IN THE CONTEXT OF METHODS
PROPERTIES OF OBJECTS */

// ======= REGULAR FUNCTION ======
// const event = {
//     name : 'Birthday Party',
//     printGuestList: function () {
//         console.log('Guest list for ' + this.name)
//     }
// }

// ======= ARROW FUNCTION ======
const event = {
    name : 'Birthday Party',
    guestList : ['John', 'Adam', 'Emma'],
    printGuestList() {
       console.log('Guest list for ' + this.name)
       this.guestList.forEach((guest) => {
           console.log(guest + ' is attending ' + this.name)
       })
    }
}

event.printGuestList()