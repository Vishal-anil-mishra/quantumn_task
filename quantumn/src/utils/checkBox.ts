class CheckBox {
    checked: boolean;
    private checkBox: HTMLElement;
    private checkedImage: string;
    private uncheckedImage: string;
    private callback?: (checked: boolean) => void;

    constructor(checkBox: HTMLElement, checkedImage: string, uncheckedImage: string, callback?: (checked: boolean) => void) {
        this.checkBox = checkBox;
        this.checked = false;
        this.checkedImage = checkedImage;
        this.uncheckedImage = uncheckedImage;
        this.callback = callback;

        this.checkBox.tabIndex = 0;
        this.checkBox.setAttribute("aria-checked", "false");
        this.checkBox.addEventListener(
            "keydown",
            this.handleKeyDown.bind(this)
        );
        this.checkBox.addEventListener("click", this.handleClick.bind(this));
    }

    private toggleChecked(): void {
        const child = this.checkBox.children[0] as HTMLImageElement;
        if (this.checked) {
            this.checkBox.setAttribute("aria-checked", "false");
            child.src = this.uncheckedImage;
        } else {
            this.checkBox.setAttribute("aria-checked", "true");
            child.src = this.checkedImage;
        }
        this.checked = !this.checked;
        if(this.callback) 
            this.callback(this.checked);
    }

    private handleKeyDown(event: KeyboardEvent): void {
        let flag = false;

        switch (event.key) {
            case " ":
            case "Enter":
                this.toggleChecked();
                flag = true;
                break;
            default:
                break;
        }

        if (flag) {
            event.stopPropagation();
            event.preventDefault();
        }
    }

    private handleClick(event: MouseEvent): void {
        this.toggleChecked();
    }


    
}

export default CheckBox;
