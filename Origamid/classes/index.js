class Menu {
    constructor(menu){
        this.menuElement = document.querySelector(menu)
    }
    addActiveEvent(){
        this.menuElement.addEventListener("click", event => event.target.classList.add("active"))
    }
}
const menu = new Menu(".principal")
menu.addActiveEvent()
console.log(menu);