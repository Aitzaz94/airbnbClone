import { Controller } from "@hotwired/stimulus"

import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {
    static targets = ["openUserMenu", "dropdown"]

    connect() {

        // console.log("enter:", enter);

        this.openUserMenuTarget.addEventListener("click", e => {
            // console.log("Header Profile, Clicked !")
            openDropDown(this.dropdownTarget)
        })
        // console.log('Hey, Connected !')
    }
}

function openDropDown(element) {
    toggle(element).then(() => {
        console.log("Enter Transition Completed !")
    })
}

function closeDropDown() {
    leave(this.dropdownTarget).then(() => {
        this.dropdownTarget.destroy();
        // console.log("Enter Transition Completed !")
    })
}
